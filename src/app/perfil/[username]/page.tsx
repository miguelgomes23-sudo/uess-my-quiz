"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, collection, query, where, getDocs, setDoc, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

import TopHeader from "@/components/TopHeader";
import BottomNav from "@/components/BottomNav";

export default function PerfilPage() {
  const params = useParams();
  const perfilUsername = params.username as string;

  const [perfilData, setPerfilData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentUserUid, setCurrentUserUid] = useState<string | null>(null);
  
  const [userQuizzes, setUserQuizzes] = useState<any[]>([]);
  const [userParticipacoes, setUserParticipacoes] = useState<any[]>([]);
  
  const [tabAtiva, setTabAtiva] = useState<"quizzes" | "participacoes" | "resultados">("quizzes");
  
  const [textoCopiado, setTextoCopiado] = useState<string | null>(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [seguidoresList, setSeguidoresList] = useState<any[]>([]);
  const [showSeguidoresModal, setShowSeguidoresModal] = useState(false);

  const [interacoes, setInteracoes] = useState<Record<string, any>>({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUserUid(user.uid);
      } else {
        setCurrentUserUid(null);
      }
    });

    const fetchPerfilEQuizzes = async () => {
      try {
        const usernameRef = doc(db, "usernames", perfilUsername);
        const usernameDoc = await getDoc(usernameRef);

        if (usernameDoc.exists()) {
          const uidDonoDoPerfil = usernameDoc.data().uid;
          
          const userRef = doc(db, "users", uidDonoDoPerfil);
          const userDoc = await getDoc(userRef);
          
          if (userDoc.exists()) {
            setPerfilData(userDoc.data());
          }

          const q = query(collection(db, "quizzes"), where("criadorUid", "==", uidDonoDoPerfil));
          const querySnapshot = await getDocs(q);
          const quizzesData = querySnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
          quizzesData.sort((a: any, b: any) => new Date(b.dataCriacao).getTime() - new Date(a.dataCriacao).getTime());
          setUserQuizzes(quizzesData);

          const partQuery = collection(db, "users", uidDonoDoPerfil, "participacoes");
          const partSnap = await getDocs(partQuery);
          
          const participacoesData = [];
          for (const pDoc of partSnap.docs) {
            const quizDoc = await getDoc(doc(db, "quizzes", pDoc.id));
            if (quizDoc.exists()) {
              participacoesData.push({ 
                id: quizDoc.id, 
                ...quizDoc.data(),
                minhaPontuacao: pDoc.data().pontuacao || 0 
              });
            }
          }
          participacoesData.sort((a: any, b: any) => new Date(b.dataCriacao).getTime() - new Date(a.dataCriacao).getTime());
          setUserParticipacoes(participacoesData);

          const segQuery = collection(db, "users", uidDonoDoPerfil, "seguidores");
          const segSnap = await getDocs(segQuery);
          const segs = segSnap.docs.map(d => ({ id: d.id, ...d.data() }));
          setSeguidoresList(segs);

          if (currentUserUid && segs.some(s => s.id === currentUserUid)) {
            setIsFollowing(true);
          }
        }
      } catch (error) {
        console.error("Erro ao carregar perfil", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPerfilEQuizzes();
    return () => unsubscribe();
  }, [perfilUsername, currentUserUid]);

  const handleToggleSeguir = async () => {
    if (!currentUserUid || !perfilData) return;
    const donoUid = perfilData.uid;
    const segRef = doc(db, "users", donoUid, "seguidores", currentUserUid);

    try {
      if (isFollowing) {
        await deleteDoc(segRef);
        setIsFollowing(false);
        setSeguidoresList(prev => prev.filter(s => s.id !== currentUserUid));
      } else {
        const meDoc = await getDoc(doc(db, "users", currentUserUid));
        const meData = meDoc.exists() ? meDoc.data() : {};
        
        await setDoc(segRef, {
          uid: currentUserUid,
          nome: meData.nome || "Utilizador",
          username: meData.username || "",
          fotoPerfil: meData.fotoPerfil || "",
          data: new Date().toISOString()
        });
        setIsFollowing(true);
        setSeguidoresList(prev => [...prev, { id: currentUserUid, nome: meData.nome, username: meData.username, fotoPerfil: meData.fotoPerfil }]);
      }
    } catch (error) {
      console.error("Erro ao alterar estado de seguir:", error);
    }
  };

  const copiarLink = (quizId: string) => {
    const url = `${window.location.origin}/jogar/${quizId}`;
    navigator.clipboard.writeText(url);
    setTextoCopiado(quizId);
    setTimeout(() => setTextoCopiado(null), 3000);
  };

  const formatarNomeModo = (modo: string) => {
    if (!modo) return "";
    return modo.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const handleResponderQuizInline = (quizId: string, indexSelecionado: number, indexCorreto: number) => {
    const acertou = indexSelecionado === indexCorreto;
    setInteracoes(prev => ({ ...prev, [quizId]: { respondido: true, acertou, indexSelecionado } }));
  };

  const handleParticiparDesafioInline = (quizId: string) => {
    setInteracoes(prev => ({ ...prev, [quizId]: { respondido: true, desafio: true } }));
  };

  const renderQuizCard = (quiz: any, isParticipacao: boolean = false) => {
    const isDesafio = quiz.raiz === "desafios";
    const primeiraPergunta = quiz.perguntas?.[0] || {};
    const modoLabel = formatarNomeModo(primeiraPergunta.modo);
    const interacao = interacoes[quiz.id];

    const isDonoDaPublicacao = currentUserUid === quiz.criadorUid;

    return (
      <article key={quiz.id} className="border-b sm:border border-gray-200 bg-white sm:rounded-2xl shadow-sm transition-all flex flex-col pt-5 pb-6 sm:mb-4">
        
        <div className="flex items-center justify-between px-5 mb-3">
          <div className="flex items-center gap-3">
            <Link href={`/perfil/${quiz.criadorUsername}`} className="size-10 shrink-0 rounded-full bg-gray-200 border border-gray-200 overflow-hidden transition-transform hover:scale-105">
              {quiz.criadorFoto ? (
                <img src={quiz.criadorFoto} alt={quiz.criadorNome} className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                  {quiz.criadorNome?.charAt(0) || "U"}
                </div>
              )}
            </Link>
            <div className="flex flex-col">
              <Link href={`/perfil/${quiz.criadorUsername}`} className="font-bold text-foreground text-sm hover:underline leading-tight">
                {quiz.criadorNome}
              </Link>
              <span className="text-xs text-muted">@{quiz.criadorUsername}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {isParticipacao && (
              <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md border border-green-100">
                Pontos: {quiz.minhaPontuacao || 0}
              </span>
            )}
            <div className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
              {isDesafio ? "Desafio" : "Quiz"}
            </div>
          </div>
        </div>

        <p className="text-sm text-foreground mb-4 px-5 whitespace-pre-wrap leading-relaxed">
          {quiz.descricao || (isDesafio ? "Lançou um novo desafio! 🔥" : "Criei um quiz! Achas que me conheces bem? 👀")}
        </p>

        <div className="flex flex-col w-full">
          {(primeiraPergunta.perguntaTexto || primeiraPergunta.textoInicial) && (
            <h3 className="font-bold text-foreground text-lg mb-3 px-5 leading-snug">
              {primeiraPergunta.perguntaTexto || primeiraPergunta.textoInicial}
            </h3>
          )}

          {primeiraPergunta.videoUrl && (
            <div className="relative w-full aspect-[9/16] bg-black mb-4">
              <video src={`${primeiraPergunta.videoUrl}#t=${primeiraPergunta.startTime || 0}`} className="w-full h-full object-contain" controls preload="metadata" />
            </div>
          )}

          {primeiraPergunta.audioUrl && (
            <div className="px-5 w-full mb-4">
              <audio src={primeiraPergunta.audioUrl} controls className="w-full h-10 outline-none" />
            </div>
          )}

          {primeiraPergunta.imagemUrl && (
            <div className="relative w-full max-h-[600px] bg-gray-100 mb-4 border-y border-gray-200">
              <img src={primeiraPergunta.imagemUrl} alt="Preview" className="w-full h-full max-h-[600px] object-cover" />
            </div>
          )}

          <div className="px-5 mt-2">
            {isDonoDaPublicacao && !isParticipacao ? (
              <div className="flex flex-col gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
                <p className="text-xs font-bold text-muted text-center uppercase tracking-widest">A tua publicação</p>
                <div className="flex gap-2">
                  <Link href={`/jogar/${quiz.id}/resultado?dono=true`} className="flex-1 rounded-xl bg-accent text-white py-3 text-sm font-bold text-center active:scale-95 transition-transform">
                    Ver Resultados
                  </Link>
                  <button onClick={() => copiarLink(quiz.id)} className="flex-1 rounded-xl bg-gray-200 text-foreground py-3 text-sm font-bold text-center active:scale-95 transition-transform">
                    {textoCopiado === quiz.id ? "✅ Copiado" : "Partilhar"}
                  </button>
                </div>
              </div>
            ) : (
              isParticipacao || (quiz.quantidade > 1 && !isDesafio) ? (
                <div className="flex gap-3 mt-2">
                  <Link 
                    href={`/jogar/${quiz.id}`} 
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-foreground text-white py-4 text-sm font-bold hover:bg-accent transition-colors shadow-sm active:scale-95"
                  >
                    {isParticipacao ? "Ver Detalhes" : `Jogar Completo (${quiz.quantidade})`}
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {interacao ? (
                    <div className={`p-4 rounded-xl text-center font-bold text-white ${interacao.desafio ? 'bg-blue-500' : (interacao.acertou ? 'bg-green-500' : 'bg-red-500')}`}>
                      {interacao.desafio ? "✅ Participação registada com sucesso!" : (interacao.acertou ? "🎉 Certa resposta!" : "❌ Ups, resposta errada!")}
                    </div>
                  ) : (
                    <>
                      {primeiraPergunta.opcoes && primeiraPergunta.opcoes.length > 0 && (
                        <div className="grid grid-cols-2 gap-2">
                          {primeiraPergunta.opcoes.map((opt: string, i: number) => (
                            <button 
                              key={i} 
                              onClick={() => handleResponderQuizInline(quiz.id, i, primeiraPergunta.respostaCorreta)}
                              className="flex items-center justify-center rounded-xl bg-white border border-gray-200 p-4 text-sm font-bold text-foreground hover:border-accent hover:text-accent hover:bg-accent/5 transition-colors text-center shadow-sm active:scale-95"
                            >
                              {opt || "?"}
                            </button>
                          ))}
                        </div>
                      )}
                      {isDesafio && (
                        <div className="flex flex-col gap-2">
                          <input type="text" placeholder="Escreve aqui a tua participação..." className="w-full rounded-xl border border-gray-200 p-4 text-sm outline-none focus:border-accent shadow-sm" />
                          <button onClick={() => handleParticiparDesafioInline(quiz.id)} className="w-full rounded-xl bg-foreground text-white p-4 font-bold active:scale-95">
                            Enviar Participação
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )
            )}

            <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-muted uppercase tracking-widest">
              <span>{modoLabel}</span>
              <span>•</span>
              <span>{quiz.jogadas || 0} Jogadas</span>
            </div>
          </div>
        </div>
      </article>
    );
  };

  if (loading) return <div className="flex min-h-dvh items-center justify-center text-muted">A carregar perfil...</div>;
  if (!perfilData) return <div className="flex min-h-dvh items-center justify-center text-muted">Este perfil não existe ou o username está errado.</div>;

  const isMyProfile = currentUserUid === perfilData.uid;
  const tituloHeader = isMyProfile ? "O Meu Perfil" : perfilUsername;

  return (
    <div className="flex min-h-dvh w-full flex-col pb-20 sm:mx-auto sm:max-w-[600px] bg-gray-50/50">
      
      <TopHeader titulo={tituloHeader} mostrarVoltar={!isMyProfile} />
      
      <main className="flex flex-col w-full pb-28">
        <div className="px-6 pb-6 pt-6 bg-white border-b border-gray-200">
          <div className="flex justify-between items-start mb-4">
            <div className="size-24 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center shadow-sm border border-gray-200">
              {perfilData.fotoPerfil ? (
                <img src={perfilData.fotoPerfil} alt={perfilData.nome} className="h-full w-full object-cover" />
              ) : (
                <span className="text-4xl drop-shadow-sm">👋</span>
              )}
            </div>
            
            {/* O BOTÃO HAMBÚRGUER AGORA ENVIA PARA A PÁGINA DE DEFINIÇÕES */}
            {isMyProfile ? (
              <div className="flex items-center gap-2">
                <Link href="/editar-perfil" className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-bold text-foreground hover:bg-gray-50 shadow-sm transition-colors active:scale-95">
                  Editar Perfil
                </Link>
                <Link 
                  href="/definicoes" 
                  className="flex size-9 items-center justify-center rounded-full border border-gray-200 bg-white text-foreground hover:bg-gray-50 shadow-sm transition-colors active:scale-95"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
                </Link>
              </div>
            ) : (
              <button 
                onClick={handleToggleSeguir}
                className={`rounded-full px-6 py-2 text-sm font-bold transition-colors shadow-sm active:scale-95 ${
                  isFollowing 
                    ? "border border-gray-200 bg-white text-foreground hover:bg-gray-50" 
                    : "bg-foreground text-white hover:bg-foreground/90"
                }`}
              >
                {isFollowing ? "A seguir" : "Seguir"}
              </button>
            )}
          </div>

          <h2 className="text-xl font-bold text-foreground">{perfilData.nome}</h2>
          <p className="text-sm text-muted">@{perfilData.username}</p>
          
          {perfilData.bio ? (
            <p className="mt-4 text-sm text-foreground whitespace-pre-wrap leading-relaxed">
              {perfilData.bio}
            </p>
          ) : (
            isMyProfile && (
              <p className="mt-4 text-sm text-muted italic">
                Ainda não tens uma biografia. Vai a "Editar Perfil" para escreveres algo sobre ti!
              </p>
            )
          )}
          
          <div className="mt-6 flex gap-4 text-sm text-muted">
            <span><strong className="text-foreground">0</strong> Seguindo</span>
            <button 
              onClick={() => setShowSeguidoresModal(true)}
              className="hover:underline cursor-pointer"
            >
              <strong className="text-foreground">{seguidoresList.length}</strong> Seguidores
            </button>
          </div>

          {isMyProfile && (
            <Link href="/criar/modo" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover active:scale-[0.98]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Criar Nova Publicação
            </Link>
          )}
        </div>

        {/* RESTO DAS ABAS MANTIDO INTACTO */}
        {isMyProfile ? (
          <div className="border-b border-gray-200 flex px-6 bg-white sticky top-[72px] z-10">
            <div onClick={() => setTabAtiva("quizzes")} className={`flex-1 py-4 text-center cursor-pointer transition-colors whitespace-nowrap text-sm sm:text-base ${tabAtiva === "quizzes" ? "border-b-2 border-accent font-bold text-foreground" : "text-muted font-medium hover:bg-gray-50"}`}>
              Publicações
            </div>
            <div onClick={() => setTabAtiva("participacoes")} className={`flex-1 py-4 text-center cursor-pointer transition-colors whitespace-nowrap text-sm sm:text-base ${tabAtiva === "participacoes" ? "border-b-2 border-accent font-bold text-foreground" : "text-muted font-medium hover:bg-gray-50"}`}>
              Participações
            </div>
            <div onClick={() => setTabAtiva("resultados")} className={`flex-1 py-4 text-center cursor-pointer transition-colors whitespace-nowrap text-sm sm:text-base ${tabAtiva === "resultados" ? "border-b-2 border-accent font-bold text-foreground" : "text-muted font-medium hover:bg-gray-50"}`}>
              Resultados
            </div>
          </div>
        ) : (
          <div className="border-b border-gray-200 flex px-6 bg-white sticky top-[72px] z-10">
            <div onClick={() => setTabAtiva("quizzes")} className={`flex-1 py-4 text-center cursor-pointer transition-colors whitespace-nowrap text-sm sm:text-base ${tabAtiva === "quizzes" ? "border-b-2 border-accent font-bold text-foreground" : "text-muted font-medium hover:bg-gray-50"}`}>
              Publicações
            </div>
            <div onClick={() => setTabAtiva("participacoes")} className={`flex-1 py-4 text-center cursor-pointer transition-colors whitespace-nowrap text-sm sm:text-base ${tabAtiva === "participacoes" ? "border-b-2 border-accent font-bold text-foreground" : "text-muted font-medium hover:bg-gray-50"}`}>
              Participações
            </div>
          </div>
        )}

        <div className="flex flex-col w-full sm:p-4 gap-2 mt-2">
          {(!isMyProfile || tabAtiva === "quizzes") && tabAtiva !== "participacoes" && tabAtiva !== "resultados" && (
            <div className="flex flex-col">
              {userQuizzes.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-12 text-center mt-10">
                  <div className="size-16 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-4">
                    <span className="text-2xl">📝</span>
                  </div>
                  <h2 className="text-lg font-bold text-foreground">Sem publicações</h2>
                  <p className="text-sm text-muted mt-2">Este perfil ainda não criou nada.</p>
                </div>
              ) : (
                userQuizzes.map((quiz) => renderQuizCard(quiz, false))
              )}
            </div>
          )}

          {tabAtiva === "participacoes" && (
            <div className="flex flex-col">
              {userParticipacoes.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-12 text-center mt-10">
                  <div className="size-16 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h2 className="text-lg font-bold text-foreground">Ainda não participou</h2>
                  <p className="text-sm text-muted mt-2">Nenhum histórico de desafios concluídos.</p>
                </div>
              ) : (
                userParticipacoes.map((quiz) => renderQuizCard(quiz, true))
              )}
            </div>
          )}

          {isMyProfile && tabAtiva === "resultados" && (
            <div className="flex flex-col">
              {userQuizzes.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-12 text-center mt-10">
                  <span className="text-4xl mb-3">👻</span>
                  <p className="text-sm text-muted">Ainda não existem resultados para analisar.</p>
                </div>
              ) : (
                userQuizzes.map((quiz) => (
                  <article key={quiz.id} className="border-b sm:border border-gray-200 bg-white p-6 flex flex-col gap-3 hover:bg-gray-50 transition-colors sm:rounded-2xl shadow-sm sm:mb-4">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-foreground text-lg capitalize">{quiz.raiz === "desafios" ? "Desafio Social" : "Quiz Interativo"}</h3>
                        <p className="text-xs text-muted">Formato: {formatarNomeModo(quiz.perguntas?.[0]?.modo)}</p>
                      </div>
                      <span className="text-xs font-bold bg-accent/10 text-accent px-3 py-1.5 rounded-full">{quiz.jogadas || 0} Jogadas</span>
                    </div>
                    
                    <div className="flex gap-3 mt-2">
                      <Link href={`/jogar/${quiz.id}/resultado?dono=true`} className="flex-1 flex items-center justify-center gap-2 bg-accent text-white text-center py-3 rounded-xl text-sm font-semibold hover:bg-accent-hover transition-colors shadow-sm active:scale-95">
                        Ver Ranking e Respostas Detalhadas
                      </Link>
                    </div>
                  </article>
                ))
              )}
            </div>
          )}
        </div>
      </main>

      {/* MODAL DE SEGUIDORES */}
      {showSeguidoresModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="flex max-h-[85vh] w-full max-w-sm flex-col overflow-hidden rounded-[24px] bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <header className="flex items-center justify-between border-b border-gray-100 p-5">
              <h3 className="text-lg font-bold text-foreground">Seguidores</h3>
              <button onClick={() => setShowSeguidoresModal(false)} className="rounded-full p-2 text-muted hover:bg-gray-100 transition-colors">✕</button>
            </header>
            <div className="flex flex-col gap-2 overflow-y-auto p-4">
              {seguidoresList.length === 0 ? (
                <p className="text-center text-sm text-muted py-8">Ainda não tens seguidores.</p>
              ) : (
                seguidoresList.map((seg) => (
                  <Link key={seg.uid} href={`/perfil/${seg.username}`} onClick={() => setShowSeguidoresModal(false)} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-xl transition-colors">
                    <div className="size-10 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center shadow-sm">
                      {seg.fotoPerfil ? <img src={seg.fotoPerfil} className="h-full w-full object-cover" /> : <span>👤</span>}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-foreground">{seg.nome}</p>
                      <p className="text-xs text-muted">@{seg.username}</p>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}