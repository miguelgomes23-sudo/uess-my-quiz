"use client";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-dvh flex-col px-6 py-12 sm:mx-auto sm:max-w-md justify-center">
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-foreground">Bem-vindo de volta</h1>
        <p className="text-sm text-muted">Faz login para veres o teu feed e criares quizzes.</p>
      </header>

      <div className="flex flex-col gap-3 mb-8">
        <button type="button" className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white text-black font-semibold hover:bg-gray-100">
          Entrar com Google
        </button>
        <button type="button" className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#1877F2] text-white font-semibold hover:bg-[#1877F2]/90">
          Entrar com Facebook
        </button>
      </div>

      <div className="mb-8 flex items-center gap-4">
        <hr className="flex-1 border-white/10" />
        <span className="text-xs text-muted uppercase">ou usar email</span>
        <hr className="flex-1 border-white/10" />
      </div>

      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Email ou @username" className="w-full rounded-xl border border-white/10 bg-surface px-4 py-4 text-sm text-foreground outline-none focus:border-accent" />
        <input type="password" placeholder="Password" className="w-full rounded-xl border border-white/10 bg-surface px-4 py-4 text-sm text-foreground outline-none focus:border-accent" />

        <Link href="/feed" className="mt-4 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-accent px-6 font-semibold text-white transition-colors hover:bg-accent-hover">
          Entrar
        </Link>
      </form>
      
      <p className="mt-8 text-center text-sm text-muted">
        Não tens conta? <Link href="/registo" className="text-accent font-semibold hover:underline">Regista-te</Link>
      </p>
    </div>
  );
}