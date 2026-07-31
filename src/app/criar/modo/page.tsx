"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type QuizMode = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const quizModes: QuizMode[] = [
  {
    id: "classico",
    title: "O Clássico",
    description: "Escolha múltipla tradicional",
    icon: (
      <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M7 10h10" />
        <path d="M7 14h6" />
        <circle cx="17" cy="14" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: "facto-ou-fake",
    title: "Facto ou Fake",
    description: "Verdadeiro ou Falso rápido",
    icon: (
      <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M8 12h8" />
        <path d="M12 8v8" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    id: "este-ou-aquele",
    title: "Este ou Aquele",
    description: "Escolhas rápidas de personalidade",
    icon: (
      <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M8 8h8v8H8z" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
  {
    id: "lacuna",
    title: "Lacuna",
    description: "Completar a frase",
    icon: (
      <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M4 7h16" />
        <path d="M4 12h10" />
        <path d="M4 17h6" />
        <path d="M16 16h4" strokeDasharray="3 2" />
      </svg>
    ),
  },
  {
    id: "top-3",
    title: "Top 3",
    description: "Ranking de favoritos",
    icon: (
      <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M8 21V10" />
        <path d="M12 21V6" />
        <path d="M16 21V13" />
        <path d="M5 10h6V6H5z" />
        <path d="M9 6V3h6v3" />
      </svg>
    ),
  },
  {
    id: "termometro",
    title: "Termómetro",
    description: "Adivinhar percentagens ou números",
    icon: (
      <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M14 14.76V5a2 2 0 0 0-4 0v9.76a4 4 0 1 0 4 0z" />
        <path d="M10 9h4" />
      </svg>
    ),
  },
];

export default function ModoPage() {
  const router = useRouter();
  const [selectedMode, setSelectedMode] = useState<string | null>(null);

  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(124,58,237,0.35),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/3 size-64 rounded-full bg-accent/10 blur-3xl sm:size-80"
      />

      <main className="relative flex flex-1 flex-col px-6 pb-10 pt-6 sm:mx-auto sm:max-w-lg sm:px-8 sm:pt-8 lg:max-w-xl">
        <header className="flex items-center">
          <Link
            href="/criar"
            aria-label="Voltar ao perfil"
            className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-surface text-muted transition-colors hover:border-ring/40 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:scale-95"
          >
            <svg
              aria-hidden
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
          </Link>
        </header>

        <section className="mt-8 flex flex-col gap-6 sm:mt-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Escolhe o <span className="text-accent">formato</span>
            </h1>
            <p className="text-base text-muted sm:text-lg">
              Como queres testar os teus amigos?
            </p>
          </div>

          <ul className="flex flex-col gap-3" role="list">
            {quizModes.map((mode) => {
              const isSelected = selectedMode === mode.id;

              return (
                <li key={mode.id}>
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedMode(mode.id)}
                    className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-all active:scale-[0.99] sm:p-5 ${
                      isSelected
                        ? "border-accent bg-accent/15 shadow-[0_0_0_1px_rgba(124,58,237,0.4),0_8px_24px_rgba(124,58,237,0.2)]"
                        : "border-white/10 bg-surface hover:border-ring/40 hover:bg-surface/80"
                    } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`}
                  >
                    <span
                      className={`flex size-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isSelected
                          ? "bg-accent text-accent-foreground"
                          : "bg-background text-ring"
                      }`}
                    >
                      {mode.icon}
                    </span>
                    <span className="flex flex-col gap-1 pt-0.5">
                      <span className="text-base font-semibold text-foreground sm:text-lg">
                        {mode.title}
                      </span>
                      <span className="text-sm leading-relaxed text-muted">
                        {mode.description}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <footer className="mt-auto pt-8">
          <button
            type="button"
            disabled={!selectedMode}
            onClick={() =>
              selectedMode && router.push(`/criar/perguntas?modo=${selectedMode}`)
            }
            className={`inline-flex min-h-14 w-full items-center justify-center rounded-2xl px-6 text-base font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:text-lg ${
              selectedMode
                ? "bg-accent text-accent-foreground shadow-[0_8px_32px_rgba(124,58,237,0.45)] hover:bg-accent-hover active:scale-[0.98]"
                : "cursor-not-allowed bg-surface text-muted"
            }`}
          >
            Continuar
          </button>
        </footer>
      </main>
    </div>
  );
}
