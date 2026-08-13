"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";

function SucessoContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); 
  
  const [copiado, setCopiado] = useState(false);
  const [linkCompleto, setLinkCompleto] = useState("");

  useEffect(() => {
    if (id) {
      setLinkCompleto(`${window.location.origin}/jogar/${id}`);
    }
  }, [id]);

  const handleCopiarLink = async () => {
    if (!linkCompleto) return;
    
    try {
      await navigator.clipboard.writeText(linkCompleto);
      setCopiado(true);
      
      setTimeout(() => setCopiado(false), 3000);
    } catch (erro) {
      console.error("Erro ao copiar o link:", erro);
      alert("Não foi possível copiar o link automaticamente.");
    }
  };

  const linkParaMostrar = id ? `guessmyquiz.com/jogar/${id.substring(0, 8)}...` : "A gerar link...";

  return (
    // LARGURA UNIFORMIZADA E FUNDO LIMPO (Sem Degradés)
    <div className="flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden py-10 bg-gray-50/50 sm:mx-auto sm:max-w-[600px]">
      <main className="relative z-10 flex w-full max-w-[420px] flex-col px-6">
        
        {/* Cartão Central Branco */}
        <div className="flex w-full flex-col items-center rounded-[32px] border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-10">
          
          <div className="mb-6 text-6xl drop-shadow-sm">
            🎉
          </div>

          <h1 className="mb-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Publicação Criada!
          </h1>

          <p className="mb-8 text-sm leading-relaxed text-muted">
            Tudo pronto! Copia o link abaixo e partilha nas tuas
            redes sociais ou no WhatsApp para testares os teus amigos.
          </p>

          <div className="mb-6 flex w-full items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-4">
            <span className="truncate text-base font-semibold text-accent">
              {linkParaMostrar}
            </span>
          </div>

          <button
            type="button"
            onClick={handleCopiarLink}
            className="mb-6 inline-flex min-h-16 w-full items-center justify-center rounded-2xl bg-accent px-6 text-lg font-bold text-white shadow-sm transition-transform hover:bg-accent-hover active:scale-[0.98]"
          >
            {copiado ? "Copiado! ✅" : "Copiar Link"}
          </button>

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

export default function QuizCriadoPage() {
  return (
    <Suspense fallback={<div className="flex min-h-dvh items-center justify-center bg-gray-50/50 text-muted">A carregar...</div>}>
      <SucessoContent />
    </Suspense>
  );
}