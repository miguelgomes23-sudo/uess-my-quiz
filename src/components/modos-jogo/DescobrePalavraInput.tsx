"use client";
import { useState, useEffect } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function DescobrePalavraInput({ index, onUpdate }: Props) {
  const [imagem, setImagem] = useState<boolean>(false);
  const [palavra, setPalavra] = useState("");

  useEffect(() => {
    const isValid = imagem && palavra.trim() !== "";
    onUpdate(isValid, { imagemUrl: imagem ? "url" : "", respostaCorreta: palavra.toUpperCase() });
  }, [imagem, palavra, onUpdate]);

  return (
    <div className="flex flex-col gap-4">
      <button type="button" onClick={() => setImagem(!imagem)} className={`flex h-32 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed transition-colors ${imagem ? "border-accent bg-accent/10 text-accent" : "border-gray-300 bg-gray-50 text-muted hover:bg-gray-100"}`}>
        <span className="text-2xl">{imagem ? "✅" : "📸"}</span>
        <span className="text-sm font-bold">{imagem ? "Imagem Carregada" : "Adicionar Imagem"}</span>
      </button>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-muted">A Palavra Escondida (Sem espaços)</span>
        <input type="text" value={palavra} onChange={(e) => setPalavra(e.target.value.toUpperCase())} placeholder="Ex: RONALDO" className={`${fieldInputClass} uppercase tracking-[0.2em] font-bold`} />
      </div>
    </div>
  );
}