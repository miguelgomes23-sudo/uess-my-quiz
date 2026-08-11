"use client";
import { useState, useEffect } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function ZoomExtremoInput({ index, onUpdate }: Props) {
  const [imagem, setImagem] = useState<boolean>(false);
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);

  useEffect(() => {
    const isValid = imagem && options.every(o => o.trim() !== "") && correctAnswer !== null;
    onUpdate(isValid, { imagemUrl: imagem ? "url" : "", opcoes: options, respostaCorreta: correctAnswer });
  }, [imagem, options, correctAnswer, onUpdate]);

  return (
    <div className="flex flex-col gap-4">
      <button type="button" onClick={() => setImagem(!imagem)} className={`flex h-32 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed transition-colors ${imagem ? "border-accent bg-accent/10 text-accent" : "border-gray-300 bg-gray-50 text-muted hover:bg-gray-100"}`}>
        <span className="text-2xl">{imagem ? "✅" : "🔍"}</span>
        <span className="text-sm font-bold">{imagem ? "Zoom Carregado" : "Adicionar Imagem Ampliada"}</span>
      </button>

      <div className="grid grid-cols-2 gap-2 w-full">
        {options.map((opt, i) => (
          <label key={i} className={`flex items-center gap-3 rounded-xl border p-3 transition-colors ${correctAnswer === i ? "border-accent bg-accent/10" : "border-white/10 bg-surface"}`}>
            <input type="radio" checked={correctAnswer === i} onChange={() => setCorrectAnswer(i)} className="size-4 accent-accent" />
            <input type="text" value={opt} onChange={(e) => setOptions(prev => prev.map((o, idx) => idx === i ? e.target.value : o))} placeholder={`O que é? ${i + 1}`} className={`${fieldInputClass} border-0 bg-transparent px-0 py-0 focus:ring-0`} />
          </label>
        ))}
      </div>
    </div>
  );
}