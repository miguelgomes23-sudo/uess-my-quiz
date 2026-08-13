"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lógica inteligente: Se a pessoa já tiver sessão iniciada, 
    // salta esta página de apresentação e vai direto para o Feed!
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace("/feed");
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [router]);

  // Enquanto verifica a sessão, mostra um ecrã limpo para não piscar
  if (loading) {
    return <div className="flex min-h-dvh items-center justify-center bg-gray-50/50 text-muted">A preparar...</div>;
  }

  return (
    // LARGURA UNIFORMIZADA: max-w-[600px]
    <div className="relative flex min-h-dvh w-full flex-col overflow-hidden bg-gray-50/50 sm:mx-auto sm:max-w-[600px]">
      
      {/* Fundo com Gradientes Suaves */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(124,58,237,0.15),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/3 size-64 rounded-full bg-accent/10 blur-3xl sm:size-80"
      />

      <main className="relative flex flex-1 flex-col px-6 pb-10 pt-14 sm:px-8 sm:pt-20">
        <header className="mb-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            GuessMyQuiz
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
            Guess<span className="text-accent">My</span>Quiz
          </h1>
        </header>

        <section className="my-12 flex flex-col gap-5 sm:my-16">
          <h2 className="text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
            Quem te conhece <span className="text-accent">melhor</span>?
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-muted sm:text-lg">
            Cria perguntas sobre ti, partilha com os amigos e descobre quem
            acerta mais. Simples, divertido e feito para telemóvel.
          </p>
        </section>

        <footer className="mt-auto flex flex-col gap-4">
          <Link
            href="/criar"
            className="inline-flex min-h-16 w-full items-center justify-center rounded-2xl bg-accent px-6 text-lg font-bold text-white shadow-[0_8px_32px_rgba(124,58,237,0.45)] transition-all hover:bg-accent-hover active:scale-[0.98]"
          >
            Criar o meu Quiz
          </Link>
          <p className="text-center text-xs font-medium text-muted">
            Grátis · Sem registo · Pronto em minutos
          </p>
        </footer>
      </main>
    </div>
  );
}