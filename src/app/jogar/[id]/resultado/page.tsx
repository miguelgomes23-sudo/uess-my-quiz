"use client";

import Link from "next/link";
import { useSearchParams, useParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

function ResultadoContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  
  const quizId = params.id as string;
  const jogadaId = searchParams.get("jogadaId");
  const donoQuery = searchParams.get("dono") === "true"; 

  const [currentUserUid, setCurrentUserUid] = useState<string | null>(null);
  const [currentUserUsername, setCurrentUserUsername] = useState<string | null>(null);
  
  const [quizData, setQuizData] = useState<any>(null);
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [minhaPontuacao, setMinhaPontuacao] = useState<number | null>(null);
  
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [loadingData, setLoadingData] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(20);
  const [selectedJogador, setSelectedJogador] = useState<any | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUserUid(user.uid);
        try {
          const uDoc = await getDoc(doc(db, "users", user.uid));
          if(uDoc.exists()) setCurrentUserUsername(uDoc.data().username);
        } catch(e) {}
      } else {
        setCurrentUserUid(null);
        setCurrentUserUsername(null);
      }
      setLoadingAuth(false); 
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const calcularResultados = async () => {
      try {
        if (!quizId) return;

        const quizSnap = await getDoc(doc(db, "quizzes", quizId));
        if (!quizSnap.exists()) {
          setLoadingData(false);
          return;
        }
        
        const quiz = quizSnap.data();
        setQuizData(quiz);

        const jogadasSnap = await getDocs(collection(db, "quizzes", quizId, "jogadas"));
        const todasJogadas = jogadasSnap.docs.map(d => ({ id: d.id, ...d.data() }));

        const leaderboardCalculado = todasJogadas.map((jogada: any) => {
          let pontos = 0;
          const detalhesRespostas: any[] = [];
          
          if (Array.isArray(jogada.respostas)) {
            jogada.respostas.forEach((respostaDada: any, index: number) => {
              const pInteira = quiz.perguntas[index];
              if (!pInteira || !pInteira.perguntaEditada) return;

              let acertou = false;
              if (quiz.modo === "top-3") {
                if (JSON.stringify(respostaDada) === JSON.stringify(pInteira.respostasTop3)) { pontos++; acertou = true; }
              } else if (quiz.modo === "termometro") {
                if (Number(respostaDada) === Number(pInteira.valorTermometro)) { pontos++; acertou = true; }
              } else if (quiz.modo === "lacuna") {
                if (String(respostaDada).toLowerCase().trim() === String(pInteira.respostaCorreta).toLowerCase().trim()) { pontos++; acertou = true; }
              } else {
                if (respostaDada === pInteira.respostaCorreta) { pontos++; acertou = true; }
              }

              detalhesRespostas.push({ perguntaRef: pInteira, respostaDada, acertou });
            });
          }
          return { ...jogada, pontos, detalhesRespostas };
        });

        leaderboardCalculado.sort((a, b) => b.pontos - a.pontos);
        setLeaderboard(leaderboardCalculado);

        if (jogadaId) {
          const minhaJogada = leaderboardCalculado.find((j: any) => j.id === jogadaId);
          if (minhaJogada) setMinhaPontuacao(minhaJogada.pontos);
        }

      } catch (error) {
        console.error("Erro ao calcular resultados:", error);
      } finally {
        setLoadingData(false);
      }
    };
    calcularResultados();
  }, [quizId, jogadaId]);

  if (loadingAuth || loadingData) {
    return <div className="flex min-h-dvh items-center justify-center text-muted">A preparar resultados...</div>;
  }

  if (!quizData) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center p-6 text-center bg-background">
        <div className="mb-4 text-6xl drop-shadow-sm">🗑️</div>
        <h1 className="text-2xl font-bold text-foreground">Quiz não encontrado</h1>
        <p className="text-muted mt-2">Este quiz foi eliminado ou o link está errado.</p>
        <Link href="/" className="mt-6 rounded-xl bg-accent px-6 py-3 font-semibold text-white shadow-sm">Voltar ao Início</Link>
      </div>
    );
  }

  const isDono = donoQuery || 
                 (currentUserUid && quizData.criadorUid && currentUserUid === quizData.criadorUid) || 
                 (currentUserUsername && quizData.criadorUsername && currentUserUsername === quizData.criadorUsername);

  // 🚨 CORREÇÃO DA FUNÇÃO DO TEXTO (Separada por modo e sem confundir "null" com a resposta correta)
  const formatarResposta = (modo: string, resposta: any, pRoot: any, isCerta: boolean = false) => {
    // Se for para mostrar o que o jogador respondeu, e ele não respondeu nada:
    if (!isCerta && (resposta === undefined || resposta === null || resposta === "")) {
      return "Não respondeu";
    }

    const pEd = pRoot.perguntaEditada || {};

    if (modo === "top-3") {
       const arr = isCerta ? pRoot.respostasTop3 : resposta;
       return Array.isArray(arr) ? arr.join(" | ") : (arr || "Não respondeu");
    }

    if (modo === "termometro") {
       const val = isCerta ? pRoot.valorTermometro : resposta;
       return `${val} ${pEd.unidade || ""}`;
    }

    const alvo = isCerta ? pRoot.respostaCorreta : resposta;

    if (modo === "classico") return pEd.opcoes?.[alvo] || `Opção ${alvo + 1}`;
    if (modo === "este-ou-aquele") return alvo === "A" ? (pEd.opcaoA || "A") : (pEd.opcaoB || "B");
    if (modo === "facto-ou-fake") return alvo === "verdadeiro" ? "Verdadeiro" : "Falso";

    return String(alvo);
  };

  // ----------------------------------------------------------------------
  // VIEW 1: PAINEL DO DONO
  // ----------------------------------------------------------------------
  if (isDono) {
    const filteredLeaderboard = leaderboard.filter(j => j.nomeJogador?.toLowerCase().includes(searchQuery.toLowerCase()));
    const visibleLeaderboard = filteredLeaderboard.slice(0, visibleCount);

    return (
      // 🚨 CORREÇÃO DA LARGURA (Adicionado w-full)
      <div className="flex w-full min-h-dvh flex-col bg-gray-50 pb-20 sm:mx-auto sm:max-w-md lg:max-w-lg sm:border-x sm:border-gray-200">
        <header className="sticky top-0 z-10 flex items-center gap-6 bg-white/90 px-6 py-4 backdrop-blur-md border-b border-gray-200 shadow-sm">
          <Link href={`/perfil/${quizData.criadorUsername}`} className="rounded-full p-2 hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><line x1="12" y1="19" x2="5" y2="12"></line><line x1="12" y1="5" x2="5" y2="12"></line></svg>
          </Link>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-foreground">Painel do Quiz</h1>
            <p className="text-xs text-muted capitalize">{quizData.modo.replace("-", " ")} · {quizData.quantidade} Perguntas</p>
          </div>
        </header>

        <main className="w-full p-6 flex flex-col gap-4">
          <div className="relative">
            <input type="text" placeholder="Pesquisar por um amigo..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm font-medium outline-none focus:border-accent shadow-sm" />
            <svg className="absolute left-3.5 top-3.5 size-4 text-muted" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>

          <div className="flex flex-col gap-2 mt-2 w-full">
            {filteredLeaderboard.length === 0 ? (
              <div className="text-center p-12 text-muted text-sm bg-white rounded-xl border border-gray-200">
                <span className="text-4xl block mb-2">📭</span>
                Nenhum jogador encontrado.<br/>Tens de partilhar o teu link!
              </div>
            ) : (
              visibleLeaderboard.map((jogada, index) => (
                <button key={jogada.id} onClick={() => setSelectedJogador(jogada)} className="flex w-full items-center justify-between rounded-xl bg-white p-4 shadow-sm border border-gray-100 hover:border-accent/30 transition-all active:scale-[0.98] text-left">
                  <div className="flex items-center gap-3">
                    <span className="w-6 text-center font-bold text-muted text-xs">{index + 1}º</span>
                    <span className="font-bold text-foreground truncate max-w-[150px]">{jogada.nomeJogador}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-accent">{jogada.pontos} <span className="text-xs font-normal text-muted">pts</span></span>
                    <svg className="size-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </div>
                </button>
              ))
            )}
          </div>

          {visibleCount < filteredLeaderboard.length && (
            <button onClick={() => setVisibleCount(prev => prev + 20)} className="mt-2 w-full py-3.5 rounded-xl bg-white border border-gray-200 text-sm font-bold text-foreground hover:bg-gray-50 transition-colors shadow-sm">
              Ver mais 20
            </button>
          )}
        </main>

        {selectedJogador && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm sm:items-end sm:p-0">
            <div className="flex w-full max-w-lg flex-col overflow-hidden rounded-[24px] bg-white shadow-2xl sm:rounded-b-none sm:h-[85vh] h-[90vh] animate-in slide-in-from-bottom-4 duration-300">
              <header className="flex items-center justify-between border-b border-gray-100 p-5 bg-white shrink-0">
                <div>
                  <h3 className="text-lg font-bold text-foreground">{selectedJogador.nomeJogador}</h3>
                  <p className="text-sm font-semibold text-accent">Pontuação: {selectedJogador.pontos}/{quizData.quantidade}</p>
                </div>
                <button onClick={() => setSelectedJogador(null)} className="rounded-full bg-gray-100 p-2 text-muted hover:bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </header>
              
              <div className="flex flex-col gap-4 overflow-y-auto p-5 bg-gray-50/50">
                {selectedJogador.detalhesRespostas.map((detalhe: any, i: number) => (
                  <div key={i} className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold text-foreground leading-snug">{detalhe.perguntaRef?.perguntaEditada?.texto || `Pergunta ${i + 1}`}</p>
                    <div className={`mt-2 flex flex-col gap-1 rounded-lg p-3 text-sm font-medium ${detalhe.acertou ? 'bg-green-50 border border-green-100 text-green-800' : 'bg-red-50 border border-red-100 text-red-800'}`}>
                      <div className="flex gap-2">
                         <span className="shrink-0">{detalhe.acertou ? '✅' : '❌'}</span>
                         <span><strong className="opacity-70">Respondeu:</strong> {formatarResposta(quizData.modo, detalhe.respostaDada, detalhe.perguntaRef, false)}</span>
                      </div>
                      {!detalhe.acertou && (
                        <div className="flex gap-2 mt-2 pt-2 border-t border-red-200/50">
                           <span className="shrink-0">🎯</span>
                           {/* Aqui passamos true no último parâmetro para ele saber que é para ir buscar a resposta correta e não ler o "null" */}
                           <span><strong className="opacity-70">Correta:</strong> {formatarResposta(quizData.modo, null, detalhe.perguntaRef, true)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ----------------------------------------------------------------------
  // VIEW 2: ECRÃ DO VISITANTE
  // ----------------------------------------------------------------------
  const percentagem = minhaPontuacao !== null ? (minhaPontuacao / quizData.quantidade) * 100 : 0;
  let emojiResult = "🔥";
  if (percentagem === 100) emojiResult = "👑";
  else if (percentagem < 50) emojiResult = "😅";

  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden py-10 bg-background">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(124,58,237,0.15),transparent)]" />
      <main className="relative z-10 flex w-full max-w-[420px] flex-col px-6">
        
        {jogadaId && minhaPontuacao !== null && (
          <div className="mb-6 flex w-full flex-col items-center rounded-[32px] border border-gray-200 bg-white p-8 text-center shadow-sm">
            <div className="mb-2 text-6xl drop-shadow-sm">{emojiResult}</div>
            <h1 className="mb-1 text-2xl font-bold tracking-tight text-foreground">Acabaste!</h1>
            <p className="mb-6 text-sm text-muted">Aqui está a tua pontuação final:</p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-6xl font-black text-accent">{minhaPontuacao}</span>
              <span className="text-xl font-medium text-muted">/ {quizData.quantidade}</span>
            </div>
          </div>
        )}

        {leaderboard.length > 0 && (
          <div className="mb-8 w-full rounded-[24px] border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-sm font-bold text-muted uppercase tracking-wider">Top Amigos</h3>
            <ul className="flex flex-col gap-3">
              {leaderboard.slice(0, 10).map((jogada, index) => {
                const isMe = jogada.id === jogadaId;
                let medalha = <span className="text-lg w-6 inline-block text-center">{index + 1}º</span>;
                if (index === 0) medalha = <span className="text-lg w-6 inline-block text-center">🥇</span>;
                if (index === 1) medalha = <span className="text-lg w-6 inline-block text-center">🥈</span>;
                if (index === 2) medalha = <span className="text-lg w-6 inline-block text-center">🥉</span>;

                return (
                  <li key={jogada.id} className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${isMe ? "bg-accent/10 border border-accent/20 text-foreground" : "bg-gray-50 border border-transparent text-muted"}`}>
                    <div className="flex items-center gap-3">
                      {medalha}
                      <span className="truncate max-w-[120px]">{jogada.nomeJogador} {isMe && "(Tu)"}</span>
                    </div>
                    <span className={isMe ? "text-accent font-bold" : "text-foreground font-bold"}>{jogada.pontos} pts</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div className="flex flex-col items-center gap-4 mt-4">
          <p className="text-center text-sm text-foreground font-medium">Achas que os teus amigos te conhecem melhor?</p>
          <Link href="/criar/modo" className="inline-flex min-h-16 w-full items-center justify-center rounded-2xl bg-foreground px-6 text-lg font-bold text-white shadow-sm transition-transform hover:bg-foreground/90 active:scale-[0.98]">
            Cria o teu Quiz Agora
          </Link>
          <Link href="/feed" className="text-sm font-medium text-muted underline decoration-gray-300 underline-offset-4 transition-colors hover:text-foreground hover:decoration-gray-400 mt-2">
            Voltar ao Feed
          </Link>
        </div>
      </main>
    </div>
  );
}

export default function ResultadoPage() {
  return (
    <Suspense fallback={<div className="flex min-h-dvh items-center justify-center text-muted">A carregar...</div>}>
      <ResultadoContent />
    </Suspense>
  );
}