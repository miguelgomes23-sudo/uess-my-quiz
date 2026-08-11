"use client";
import { useState, useEffect } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function ValorImagensInput({ index, onUpdate }: Props) {
  const [imagem, setImagem] = useState<boolean>(false);
  const [resposta, setResposta] = useState("");

  useEffect(() => {
    const isValid = imagem && resposta.trim() !== "";
    onUpdate(isValid, { imagemUrl: imagem ? "url" : "", respostaCorreta: Number(resposta) });
  }, [imagem, resposta, onUpdate]);

  return (
    <div className="flex flex-col gap-4">
      <button type="button" onClick={() => setImagem(!imagem)} className={`flex h-32 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed transition-colors ${imagem ? "border-accent bg-accent/10 text-accent" : "border-gray-300 bg-gray-50 text-muted hover:bg-gray-100"}`}>
        <span className="text-2xl">{imagem ? "✅" : "🍎"}</span>
        <span className="text-sm font-bold">{imagem ? "Puzzle Inserido" : "Upload Puzzle (ex: 🍎+🍌=?)"}</span>
      </button>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-muted">O Valor Final Correto</span>
        <input type="number" value={resposta} onChange={(e) => setResposta(e.target.value)} placeholder="Qual é a resposta matemática?" className={fieldInputClass} />
      </div>
    </div>
  );
}