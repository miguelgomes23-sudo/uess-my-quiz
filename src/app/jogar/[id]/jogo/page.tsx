"use client";

import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { db } from "@/lib/firebase";
import { doc, getDoc, collection, addDoc } from "firebase/firestore";

function JogoContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const quizId = params.id as string;
  const jogadorNome = searchParams.get("jogador") || "Anónimo";

  const [quizData, setQuizData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState<any[]>([]);
  const [respostaAtual, setRespostaAtual] = useState<any>(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        if (!quizId) return;
        const docRef = doc(db, "quizzes", quizId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setQuizData(data);
          
          if (data.modo === "top-3") {
             setRespostaAtual(["", "", ""]);
          } else if (data.modo === "termometro" && data.perguntas && data.perguntas[0]?.perguntaEditada) {
             const p = data.perguntas[0].perguntaEditada;
             setRespostaAtual(Math.floor((p.max + p.min) / 2));
          }
        } else {
          setQuizData(null);
        }
      } catch (error) {
        console.error("Erro ao carregar quiz:", error);
        setQuizData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchQuiz();
  }, [quizId]);

  const isRespostaValida = () => {
    if (!quizData) return false;
    if (quizData.modo === "top-3") return Array.isArray(respostaAtual) && respostaAtual.every(r => r.trim() !== "");
    if (quizData.modo === "lacuna") return typeof respostaAtual === "string" && respostaAtual.trim() !== "";
    return respostaAtual !== null;
  };

  const handleAvancar = async () => {
    if (!isRespostaValida()) return;

    const novasRespostas = [...respostas, respostaAtual];

    if (perguntaAtual < quizData.quantidade - 1) {
      setRespostas(novasRespostas);
      setPerguntaAtual(prev => prev + 1);
      
      if (quizData.modo === "termometro") {
         const p = quizData.perguntas[perguntaAtual + 1].perguntaEditada;
         setRespostaAtual(Math.floor((p.max + p.min) / 2));
      } else if (quizData.modo === "top-3") {
         setRespostaAtual(["", "", ""]);
      } else {
         setRespostaAtual(null);
      }
    } else {
      setIsSaving(true);
      try {
        const jogadaRef = await addDoc(collection(db, "quizzes", quizId, "jogadas"), {
          nomeJogador: jogadorNome,
          respostas: novasRespostas,
          dataJogada: new Date().toISOString()
        });

        router.push(`/jogar/${quizId}/resultado?jogadaId=${jogadaRef.id}`);
      } catch (error) {
        console.error("Erro ao guardar resultados:", error);
        alert("Ocorreu um erro ao guardar as tuas respostas.");
        setIsSaving(false);
      }
    }
  };

  // NOVA FUNÇÃO: Lógica do botão de Voltar
  const handleVoltar = () => {
    if (perguntaAtual === 0) {
      // Se for a primeira pergunta, sai do quiz e volta ao Feed/Perfil
      router.back();
    } else {
      // Recua uma pergunta
      const indexAnterior = perguntaAtual - 1;
      setPerguntaAtual(indexAnterior);
      
      // Repõe no ecrã a resposta que a pessoa tinha dado nessa pergunta
      setRespostaAtual(respostas[indexAnterior]);
      
      // Apaga a última resposta do array para podermos gravar de novo ao avançar
      setRespostas(prev => prev.slice(0, -1));
    }
  };

  if (loading) {
    return <div className="flex min-h-dvh items-center justify-center bg-gray-50/50 text-muted">A preparar o teu jogo...</div>;
  }

  if (!quizData || !quizData.perguntas || quizData.perguntas.length === 0) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center p-6 text-center bg-gray-50/50 w-full sm:mx-auto sm:max-w-[600px]">
        <div className="mb-4 text-6xl drop-shadow-sm">🗑️</div>
        <h1 className="text-2xl font-bold text-foreground">Quiz não encontrado</h1>
        <p className="text-muted mt-2">Este quiz não existe, foi eliminado ou o link está errado.</p>
        <Link href="/" className="mt-6 rounded-xl bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-hover shadow-sm">
          Voltar ao Início
        </Link>
      </div>
    );
  }

  const pAtualInteira = quizData.perguntas[perguntaAtual];
  const pAtual = pAtualInteira.perguntaEditada;
  
  if (!pAtual) {
     return <div className="flex min-h-dvh items-center justify-center text-red-500 bg-gray-50/50 w-full sm:mx-auto sm:max-w-[600px]">Erro: Pergunta corrompida.</div>;
  }

  const isUltimaPergunta = perguntaAtual === quizData.quantidade - 1;
  const textoPergunta = pAtual.texto || "Pergunta indisponível";
  const opcoesPergunta = pAtual.opcoes || [];

  const renderModoJogo = () => {
    if (quizData.modo === "classico") {
      return (
        <div className="flex flex-col gap-3">
          {opcoesPergunta.map((opcao: string, index: number) => {
            const isSelected = respostaAtual === index;
            return (
              <button
                key={index}
                onClick={() => setRespostaAtual(index)}
                className={`flex min-h-16 w-full items-center justify-between rounded-xl border px-5 text-left text-base font-semibold transition-all active:scale-[0.98] ${
                  isSelected
                    ? "border-accent bg-accent/10 text-foreground shadow-sm"
                    : "border-gray-200 bg-gray-50 text-muted hover:border-gray-300 hover:text-foreground"
                }`}
              >
                {opcao}
                <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${isSelected ? "border-accent bg-accent" : "border-gray-300"}`}>
                   {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                </div>
              </button>
            );
          })}
        </div>
      );
    }

    if (quizData.modo === "facto-ou-fake") {
      return (
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => setRespostaAtual("verdadeiro")}
            className={`flex min-h-20 items-center justify-center rounded-xl border text-lg font-bold transition-all active:scale-[0.98] ${
              respostaAtual === "verdadeiro" ? "border-green-600 bg-green-600 text-white shadow-sm" : "border-gray-200 bg-gray-50 text-gray-600 hover:border-green-500 hover:text-green-600"
            }`}
          >
            Verdadeiro
          </button>
          <button 
            onClick={() => setRespostaAtual("falso")}
            className={`flex min-h-20 items-center justify-center rounded-xl border text-lg font-bold transition-all active:scale-[0.98] ${
              respostaAtual === "falso" ? "border-red-600 bg-red-600 text-white shadow-sm" : "border-gray-200 bg-gray-50 text-gray-600 hover:border-red-500 hover:text-red-600"
            }`}
          >
            Falso
          </button>
        </div>
      );
    }

    if (quizData.modo === "este-ou-aquele") {
      return (
        <div className="flex flex-col gap-4 items-center w-full">
          <button 
            onClick={() => setRespostaAtual("A")}
            className={`flex min-h-24 w-full items-center justify-center rounded-xl border p-4 text-center text-lg font-semibold transition-all active:scale-[0.98] ${
              respostaAtual === "A" ? "border-accent bg-accent/10 text-foreground shadow-sm" : "border-gray-200 bg-gray-50 text-muted hover:border-accent/50 hover:text-foreground"
            }`}
          >
            {pAtual.opcaoA || "Opção A"}
          </button>
          <span className="text-sm font-bold text-muted uppercase">ou</span>
          <button 
            onClick={() => setRespostaAtual("B")}
            className={`flex min-h-24 w-full items-center justify-center rounded-xl border p-4 text-center text-lg font-semibold transition-all active:scale-[0.98] ${
              respostaAtual === "B" ? "border-accent bg-accent/10 text-foreground shadow-sm" : "border-gray-200 bg-gray-50 text-muted hover:border-accent/50 hover:text-foreground"
            }`}
          >
            {pAtual.opcaoB || "Opção B"}
          </button>
        </div>
      );
    }

    if (quizData.modo === "lacuna") {
      return (
        <div className="flex flex-col gap-2">
          <input 
            type="text" 
            value={respostaAtual || ""}
            onChange={(e) => setRespostaAtual(e.target.value)}
            placeholder="A tua resposta..." 
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-lg font-semibold text-foreground outline-none transition-colors focus:bg-white focus:border-accent shadow-sm"
          />
        </div>
      );
    }

    if (quizData.modo === "top-3") {
      return (
        <div className="flex flex-col gap-3">
          {["🥇 1º Lugar", "🥈 2º Lugar", "🥉 3º Lugar"].map((medal, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-sm font-bold w-[80px] shrink-0 text-foreground">{medal}</span>
              <input 
                type="text" 
                value={(respostaAtual && respostaAtual[i]) || ""} 
                onChange={(e) => {
                  const novas = Array.isArray(respostaAtual) ? [...respostaAtual] : ["", "", ""];
                  novas[i] = e.target.value;
                  setRespostaAtual(novas);
                }}
                placeholder="A tua resposta..." 
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-base font-semibold text-foreground outline-none focus:bg-white focus:border-accent transition-all shadow-sm" 
              />
            </div>
          ))}
        </div>
      );
    }

    if (quizData.modo === "termometro") {
      if (respostaAtual === null) setRespostaAtual(Math.floor((pAtual.max + pAtual.min) / 2));
      return (
        <div className="flex flex-col gap-6 mt-4">
          <div className="flex justify-between px-1 text-sm font-bold text-muted">
             <span>{pAtual.min}</span>
             <span>{pAtual.max}</span>
          </div>
          <div className="flex items-center gap-4">
            <input 
              type="range" 
              min={pAtual.min} 
              max={pAtual.max} 
              value={respostaAtual}
              onChange={(e) => setRespostaAtual(Number(e.target.value))}
              className="w-full flex-1 accent-accent cursor-pointer" 
            />
            <div className="flex shrink-0 items-center gap-1 rounded-lg bg-gray-50 border border-gray-200 px-4 py-2 shadow-sm">
              <span className="text-xl font-bold text-accent">{respostaAtual}</span>
              <span className="text-sm font-medium text-muted">{pAtual.unidade}</span>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="flex min-h-dvh w-full flex-col bg-gray-50/50 sm:mx-auto sm:max-w-[600px]">
      <main className="flex flex-1 flex-col w-full px-4 pb-10 pt-6">
        
        {/* CABEÇALHO DO JOGO COM BOTÃO DE VOLTAR */}
        <header className="mb-6 flex items-center justify-between gap-3 px-2">
          <button
            onClick={handleVoltar}
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-muted shadow-sm transition-colors hover:bg-gray-50 active:scale-95"
            aria-label="Voltar"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <div className="flex flex-1 items-center gap-3">
            <div className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-bold text-muted shadow-sm shrink-0">
              Pergunta <span className="text-accent">{perguntaAtual + 1}</span> de {quizData.quantidade}
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
              <div 
                className="h-full rounded-full bg-accent transition-all duration-300 ease-out" 
                style={{ width: `${((perguntaAtual + 1) / quizData.quantidade) * 100}%` }} 
              />
            </div>
          </div>
        </header>

        <div className="flex flex-col rounded-[32px] bg-white p-6 sm:p-8 shadow-sm border border-gray-200">
          <section className="mb-8">
            <h2 className="text-2xl font-bold leading-snug text-foreground sm:text-3xl text-center">
              {quizData.modo === "lacuna" ? (
                 textoPergunta.split("___").map((parte: string, index: number, arr: any[]) => (
                   <span key={index}>
                     {parte}
                     {index < arr.length - 1 && <span className="text-accent underline text-transparent underline-offset-4 mx-1">___</span>}
                   </span>
                 ))
              ) : (
                 textoPergunta
              )}
            </h2>
          </section>

          {renderModoJogo()}
        </div>

        <footer className="mt-auto pt-8 px-2">
          <button
            onClick={handleAvancar}
            disabled={!isRespostaValida() || isSaving}
            className={`inline-flex min-h-16 w-full items-center justify-center rounded-2xl bg-accent px-6 text-lg font-semibold text-white transition-all active:scale-[0.98] shadow-sm ${
              isRespostaValida() && !isSaving ? "hover:bg-accent-hover cursor-pointer" : "opacity-50 cursor-not-allowed"
            }`}
          >
            {isSaving ? "A enviar..." : (isUltimaPergunta ? "Submeter Respostas" : "Próxima Pergunta")}
          </button>
        </footer>

      </main>
    </div>
  );
}

export default function JogoPage() {
  return (
    <Suspense fallback={<div className="flex min-h-dvh items-center justify-center bg-gray-50/50 text-muted">A carregar...</div>}>
      <JogoContent />
    </Suspense>
  );
}