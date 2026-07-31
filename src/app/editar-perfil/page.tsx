"use client";

import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function EditarPerfilPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex min-h-dvh flex-col px-6 py-8 sm:mx-auto sm:max-w-md">
      {/* CABEÇALHO */}
      <header className="mb-8 flex items-center gap-4">
        <button
          onClick={() => router.back()}
          aria-label="Voltar"
          className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-surface text-muted transition-colors hover:border-ring/40 hover:text-foreground active:scale-95"
        >
          <svg aria-hidden xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-foreground">Editar Perfil</h1>
      </header>

      {/* ALTERAR FOTO DE PERFIL */}
      <div className="mb-10 flex flex-col items-center gap-3">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="group relative flex size-36 items-center justify-center rounded-full border-2 border-dashed border-ring/40 bg-surface transition-colors hover:border-accent hover:bg-accent/10 active:scale-[0.98]"
        >
          <svg aria-hidden xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-10 text-muted transition-colors group-hover:text-accent">
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
        </button>
        <input ref={fileInputRef} type="file" accept="image/*" className="sr-only" tabIndex={-1} />
        <p className="text-sm text-muted">Alterar foto de perfil</p>
      </div>

      {/* FORMULÁRIO DE EDIÇÃO */}
      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="text-sm font-medium text-muted">Nome de Exibição</label>
          <input 
            id="nome" 
            type="text" 
            defaultValue="O Meu Nome" 
            className="w-full rounded-xl border border-white/10 bg-surface px-4 py-4 text-base text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent" 
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-muted flex justify-between">
            Username
            <span className="text-xs text-red-400">Não editável</span>
          </label>
          <input 
            type="text" 
            value="@omeuuser" 
            disabled 
            className="w-full rounded-xl border border-transparent bg-black/30 px-4 py-4 text-base text-muted/50 cursor-not-allowed select-none" 
          />
        </div>

        <button 
          type="button" 
          className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-2xl bg-accent px-6 font-semibold text-white transition-colors hover:bg-accent-hover active:scale-[0.98]"
        >
          Guardar Alterações
        </button>
      </form>
    </div>
  );
}