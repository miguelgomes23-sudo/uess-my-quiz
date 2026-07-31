import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(124,58,237,0.35),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/3 size-64 rounded-full bg-accent/10 blur-3xl sm:size-80"
      />

      <main className="relative flex flex-1 flex-col px-6 pb-10 pt-14 sm:mx-auto sm:max-w-lg sm:px-8 sm:pt-20 lg:max-w-xl">
        <header className="mb-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ring">
            GuessMyQuiz
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
            Guess
            <span className="text-accent">My</span>
            Quiz
          </h1>
        </header>

        <section className="my-12 flex flex-col gap-5 sm:my-16">
          <h2 className="text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
            Quem te conhece{" "}
            <span className="text-accent">melhor</span>?
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-muted sm:text-lg">
            Cria perguntas sobre ti, partilha com os amigos e descobre quem
            acerta mais. Simples, divertido e feito para telemóvel.
          </p>
        </section>

        <footer className="mt-auto flex flex-col gap-4">
          <Link
            href="/criar"
            className="inline-flex min-h-14 w-full items-center justify-center rounded-2xl bg-accent px-6 text-base font-semibold text-accent-foreground shadow-[0_8px_32px_rgba(124,58,237,0.45)] transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:scale-[0.98] sm:text-lg"
          >
            Criar o meu Quiz
          </Link>
          <p className="text-center text-xs text-muted">
            Grátis · Sem registo · Pronto em minutos
          </p>
        </footer>
      </main>
    </div>
  );
}
