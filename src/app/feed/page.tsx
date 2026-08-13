"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, collection, query, orderBy, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

// IMPORTAMOS OS NOSSOS DOIS NOVOS COMPONENTES
import TopHeader from "@/components/TopHeader";
import BottomNav from "@/components/BottomNav";

export default function FeedPage() {
  const [currentUserUid, setCurrentUserUid] = useState<string | null>(null);
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [interacoes, setInteracoes] = useState<Record<string, any>>({});
  const [textoCopiado, setTextoCopiado] = useState<string | null>(null);

  useEffect(() => {
    // O Feed agora só precisa de saber o UID do utilizador para os botões "A tua publicação"
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) setCurrentUserUid(user.uid);
      else setCurrentUserUid(null);
    });

    const fetchQuizzes = async () => {
      try {
        const q = query(collection(db, "quizzes"), orderBy("dataCriacao", "desc"));
        const querySnapshot = await getDocs(q);
        const quizzesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setQuizzes(quizzesData);
      } catch (error) {
        console.error("Erro ao carregar feed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
    return () => unsubscribe();
  }, []);

  const copiarLink = (quizId: string) => {
    navigator.clipboard.writeText(`${window.location.origin}/jogar/${quizId}`);
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

  return (
    <div className="flex min-h-dvh w-full flex-col sm:mx-auto sm:max-w-[600px] bg-gray-50/50">
      
      {/* 1. COMPONENTE REUTILIZÁVEL: CABEÇALHO */}
      <TopHeader titulo="Feed" />

      {/* 2. CONTEÚDO PRINCIPAL (MANTIDO INTACTO) */}
      <main className="flex flex-col gap-2 p-0 sm:p-4 mt-2 pb-28">
        {loading ? (
          <div className="p-10 flex flex-col items-center justify-center gap-4 text-muted mt-10">
            <div className="size-8 animate-spin rounded-full border-4 border-gray-200 border-t-accent"></div>
            <span>A carregar o feed...</span>
          </div>
        ) : quizzes.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 text-center mt-10">
            <div className="size-16 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-4">
              <span className="text-2xl">📭</span>
            </div>
            <h2 className="text-lg font-bold text-foreground">O feed está vazio</h2>
            <Link href="/criar/modo" className="mt-6 rounded-xl bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-hover shadow-md active:scale-95">
              Criar Publicação
            </Link>
          </div>
        ) : (
          quizzes.map((quiz) => {
            const isDesafio = quiz.raiz === "desafios";
            const primeiraPergunta = quiz.perguntas?.[0] || {};
            const modoLabel = formatarNomeModo(primeiraPergunta.modo);
            const interacao = interacoes[quiz.id];
            
            const isDonoDaPublicacao = currentUserUid === quiz.criadorUid;

            return (
              <article key={quiz.id} className="border-b sm:border border-gray-200 bg-white sm:rounded-2xl shadow-sm transition-all flex flex-col pt-5 pb-6">
                
                <div className="flex items-center gap-3 px-5 mb-3">
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
                  <div className="ml-auto text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {isDesafio ? "Desafio" : "Quiz"}
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

                  {primeiraPergunta.imagemUrl && (
                    <div className="relative w-full max-h-[600px] bg-gray-100 mb-4 border-y border-gray-200 flex justify-center">
                      <img src={primeiraPergunta.imagemUrl} alt="Preview" className="w-full h-auto max-h-[600px] object-cover" />
                    </div>
                  )}
                  
                  {primeiraPergunta.audioUrl && (
                    <div className="px-5 w-full mb-4">
                      <audio src={primeiraPergunta.audioUrl} controls className="w-full h-10 outline-none" />
                    </div>
                  )}

                  <div className="px-5 mt-2">
                    {isDonoDaPublicacao ? (
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
                      (quiz.quantidade === 1 || isDesafio) ? (
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
                      ) : (
                        <Link href={`/jogar/${quiz.id}`} className="flex w-full items-center justify-center gap-2 rounded-xl bg-foreground text-white py-4 text-sm font-bold hover:bg-accent transition-colors shadow-sm active:scale-[0.98]">
                          Jogar Quiz Completo ({quiz.quantidade} Perguntas)
                        </Link>
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
          })
        )}
      </main>

      {/* 3. COMPONENTE REUTILIZÁVEL: BARRA DE NAVEGAÇÃO INFERIOR */}
      <BottomNav />
      
    </div>
  );
}