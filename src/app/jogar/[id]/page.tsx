"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function JogadorEntradaPage() {
  const params = useParams();
  const router = useRouter();
  const quizId = params.id as string;

  const [nome, setNome] = useState("");
  const [quizData, setQuizData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!quizId) return;

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        const docRef = doc(db, "quizzes", quizId);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          setQuizData(null);
          setLoading(false);
          return;
        }

        setQuizData(docSnap.data());

        if (user) {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          const nomeUser = userDoc.exists() ? userDoc.data().nome : "Anónimo";
          router.replace(`/jogar/${quizId}/jogo?jogador=${encodeURIComponent(nomeUser)}&uid=${user.uid}`);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Erro na inicialização:", error);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [quizId, router]);

  const handleComecar = () => {
    if (nome.trim()) {
      router.push(`/jogar/${quizId}/jogo?jogador=${encodeURIComponent(nome.trim())}`);
    }
  };

  if (loading) {
    return <div className="flex min-h-dvh items-center justify-center bg-gray-50/50 text-muted">A preparar o desafio...</div>;
  }

  if (!quizData) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center p-6 text-center bg-gray-50/50 w-full sm:mx-auto sm:max-w-[600px]">
        <div className="mb-4 text-5xl drop-shadow-sm">🕵️‍♂️</div>
        <h1 className="text-2xl font-bold text-foreground">Quiz não encontrado</h1>
        <p className="text-muted mt-2">Este quiz pode ter sido apagado ou o link está errado.</p>
      </div>
    );
  }

  return (
    // Removido o gradient radial. Agora é apenas bg-gray-50/50 limpo.
    <div className="flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-gray-50/50 sm:mx-auto sm:max-w-[600px]">
      <main className="relative z-10 flex w-full max-w-[420px] flex-col px-6">
        <div className="flex w-full flex-col items-center rounded-[32px] border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-10">
          
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
            Ele preparou <strong className="text-foreground">{quizData.quantidade} perguntas</strong>. Será que dás conta do recado?
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
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-base font-medium text-foreground outline-none transition-colors placeholder:text-muted focus:bg-white focus:border-accent shadow-sm"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleComecar();
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