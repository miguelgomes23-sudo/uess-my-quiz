"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function JogadorEntradaPage() {
  const params = useParams();
  const router = useRouter();
  const quizId = params.id as string;

  const [nome, setNome] = useState("");
  const [quizData, setQuizData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Vai buscar os dados do Quiz ao Firebase
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        if (!quizId) return;
        const docRef = doc(db, "quizzes", quizId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setQuizData(docSnap.data());
        } else {
          setQuizData(null); // Quiz não existe
        }
      } catch (error) {
        console.error("Erro ao carregar o quiz:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [quizId]);

  // Função para começar o jogo
  const handleComecar = () => {
    if (nome.trim()) {
      // Avança para a página do jogo e passa o nome do jogador no link
      router.push(`/jogar/${quizId}/jogo?jogador=${encodeURIComponent(nome.trim())}`);
    }
  };

  // Ecrã de Carregamento
  if (loading) {
    return <div className="flex min-h-dvh items-center justify-center text-muted">A preparar o desafio...</div>;
  }

  // Ecrã de Erro (Se o ID não existir)
  if (!quizData) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center p-6 text-center bg-background">
        <div className="mb-4 text-5xl drop-shadow-sm">🕵️‍♂️</div>
        <h1 className="text-2xl font-bold text-foreground">Quiz não encontrado</h1>
        <p className="text-muted mt-2">Este quiz pode ter sido apagado ou o link está errado.</p>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-background">
      {/* Fundo com Gradientes Suaves */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(124,58,237,0.15),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-1/4 size-56 rounded-full bg-accent/5 blur-3xl sm:size-72"
      />

      <main className="relative z-10 flex w-full max-w-[420px] flex-col px-6">
        <div className="flex w-full flex-col items-center rounded-[32px] border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-10">
          
          {/* Foto do Criador (ou emoji padrão) */}
          <div className="mb-4 size-20 rounded-full border-4 border-gray-50 bg-gray-200 shadow-sm overflow-hidden flex items-center justify-center">
             {quizData.criadorFoto ? (
               <img src={quizData.criadorFoto} alt={quizData.criadorNome} className="h-full w-full object-cover" />
             ) : (
               <span className="text-4xl drop-shadow-md">👋</span>
             )}
          </div>

          <h1 className="mb-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            O <span className="text-accent">{quizData.criadorNome.split(" ")[0]}</span> desafiou-te!
          </h1>
          
          <p className="mb-8 text-sm leading-relaxed text-muted">
            Ele preparou <strong className="text-foreground">{quizData.quantidade} perguntas</strong>. Será que o conheces assim tão bem?
          </p>

          <div className="mb-6 w-full text-left">
            <label htmlFor="nome" className="mb-2 block text-sm font-medium text-muted">
              Qual é o teu nome?
            </label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Ex: Maria"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-base font-medium text-foreground outline-none transition-colors placeholder:text-muted focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent shadow-sm"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleComecar(); // Permite clicar "Enter" no teclado para avançar
              }}
            />
          </div>

          <button
            onClick={handleComecar}
            disabled={!nome.trim()}
            className={`inline-flex min-h-16 w-full items-center justify-center rounded-2xl bg-accent px-6 text-lg font-semibold text-white transition-all active:scale-[0.98] ${
              nome.trim() ? "shadow-sm hover:bg-accent-hover cursor-pointer" : "opacity-50 cursor-not-allowed"
            }`}
          >
            Começar Quiz
          </button>
        </div>
      </main>
    </div>
  );
}