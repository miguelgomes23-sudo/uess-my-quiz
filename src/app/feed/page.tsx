"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, collection, query, orderBy, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function FeedPage() {
  const [meuUsername, setMeuUsername] = useState<string | null>(null);
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Vai buscar o utilizador logado
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) setMeuUsername(userDoc.data().username);
      }
    });

    // 2. Vai buscar todos os quizzes reais à base de dados
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

  return (
    <div className="flex min-h-dvh flex-col pb-20 sm:mx-auto sm:max-w-lg">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white/80 px-6 py-4 backdrop-blur-md">
        <h1 className="text-xl font-bold text-foreground">Feed</h1>
        <Link 
          href={meuUsername ? `/perfil/${meuUsername}` : "#"} 
          className="size-9 rounded-full bg-gray-200 overflow-hidden border border-gray-300 transition-transform active:scale-95 flex items-center justify-center"
        >
          <svg className="size-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        </Link>
      </header>

      <main className="flex flex-col">
        {loading ? (
          <div className="p-10 text-center text-muted">A carregar publicações...</div>
        ) : quizzes.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 text-center">
            <div className="size-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <span className="text-2xl">📭</span>
            </div>
            <h2 className="text-lg font-bold text-foreground">O feed está vazio</h2>
            <p className="text-sm text-muted mt-2 mb-6">Ainda ninguém publicou nada. Sê o primeiro a testar os teus amigos!</p>
            <Link href="/criar/modo" className="rounded-xl bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-hover shadow-sm">
              Criar Novo Quiz
            </Link>
          </div>
        ) : (
          quizzes.map((quiz) => (
            <article key={quiz.id} className="border-b border-gray-200 p-6 flex gap-4 hover:bg-gray-50 transition-colors">
              <Link href={`/perfil/${quiz.criadorUsername}`} className="size-12 shrink-0 rounded-full bg-gray-200 border border-gray-300 overflow-hidden">
                 {quiz.criadorFoto ? (
                   <img src={quiz.criadorFoto} alt={quiz.criadorNome} className="h-full w-full object-cover" />
                 ) : (
                   <div className="h-full w-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                     {quiz.criadorNome?.charAt(0) || "U"}
                   </div>
                 )}
              </Link>
              
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center gap-2">
                  <Link href={`/perfil/${quiz.criadorUsername}`} className="font-bold text-foreground hover:underline">
                    {quiz.criadorNome}
                  </Link>
                  <span className="text-sm text-muted">@{quiz.criadorUsername}</span>
                </div>
                
                <p className="text-sm text-foreground mt-1">Criei um quiz! Achas que me conheces bem? 👀</p>
                
                <div className="mt-4 rounded-xl border border-gray-200 bg-white shadow-sm p-4">
                  <p className="font-semibold text-accent text-sm mb-1 capitalize">{quiz.modo.replace("-", " ")} · {quiz.quantidade} Perguntas</p>
                  
                  <Link href={`/jogar/${quiz.id}`} className="mt-3 flex w-full justify-center rounded-lg bg-accent text-white py-2.5 text-sm font-semibold hover:bg-accent-hover transition-colors shadow-sm">
                    Jogar Quiz
                  </Link>
                </div>
              </div>
            </article>
          ))
        )}
      </main>
    </div>
  );
}