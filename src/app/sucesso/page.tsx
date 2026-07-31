"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";

function SucessoContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // Apanha o ID do quiz na barra de endereço
  
  const [copiado, setCopiado] = useState(false);
  const [linkCompleto, setLinkCompleto] = useState("");

  // Assim que a página carrega, construímos o link real
  useEffect(() => {
    if (id) {
      // Usa o domínio real em que o site está a correr (localhost, vercel ou o teu domínio comprado)
      setLinkCompleto(`${window.location.origin}/jogar/${id}`);
    }
  }, [id]);

  // Função para copiar o link para o telemóvel/PC
  const handleCopiarLink = async () => {
    if (!linkCompleto) return;
    
    try {
      await navigator.clipboard.writeText(linkCompleto);
      setCopiado(true);
      
      // Passados 3 segundos, o botão volta ao normal
      setTimeout(() => setCopiado(false), 3000);
    } catch (erro) {
      console.error("Erro ao copiar o link:", erro);
      alert("Não foi possível copiar o link automaticamente.");
    }
  };

  // Versão mais curta do link para mostrar no ecrã e não ficar gigante
  const linkParaMostrar = id ? `guessmyquiz.com/jogar/${id.substring(0, 8)}...` : "A gerar link...";

  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-background">
      {/* Fundo com Gradientes Suaves (Adaptado para o tema claro) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(124,58,237,0.15),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-1/4 size-56 rounded-full bg-accent/5 blur-3xl sm:size-72"
      />

      <main className="relative z-10 flex w-full max-w-[420px] flex-col px-6">
        {/* Cartão Central Branco */}
        <div className="flex w-full flex-col items-center rounded-[32px] border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-10">
          
          {/* Ícone Emoji */}
          <div className="mb-6 text-6xl drop-shadow-sm">
            🎉
          </div>

          {/* Título Principal */}
          <h1 className="mb-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Quiz Criado!
          </h1>

          {/* Subtítulo Descritivo */}
          <p className="mb-8 text-sm leading-relaxed text-muted">
            O teu quiz está pronto! Copia o link abaixo e partilha nas tuas
            stories do Instagram ou no WhatsApp para testares os teus amigos.
          </p>

          {/* Caixa de Visualização do Link */}
          <div className="mb-6 flex w-full items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-4">
            <span className="truncate text-base font-semibold text-accent">
              {linkParaMostrar}
            </span>
          </div>

          {/* Botão de Copiar Dinâmico */}
          <button
            type="button"
            onClick={handleCopiarLink}
            className="mb-6 inline-flex min-h-16 w-full items-center justify-center rounded-2xl bg-accent px-6 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover active:scale-[0.98]"
          >
            {copiado ? "Copiado! ✅" : "Copiar Link"}
          </button>

          {/* Link de Retorno */}
          <Link
            href="/feed"
            className="text-sm font-medium text-muted underline decoration-gray-300 underline-offset-4 transition-colors hover:text-foreground hover:decoration-gray-400"
          >
            Voltar ao Feed
          </Link>
          
        </div>
      </main>
    </div>
  );
}

// Necessário colocar num Suspense porque usamos useSearchParams() do Next.js
export default function QuizCriadoPage() {
  return (
    <Suspense fallback={<div className="flex min-h-dvh items-center justify-center text-muted">A carregar...</div>}>
      <SucessoContent />
    </Suspense>
  );
}