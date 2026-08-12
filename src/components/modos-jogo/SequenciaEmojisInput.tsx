"use client";
import { useState, useEffect } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function SequenciaEmojisInput({ index, onUpdate }: Props) {
  const [equacao, setEquacao] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);

  useEffect(() => {
    const isValid = equacao.trim() !== "" && options.every(o => o.trim() !== "") && correctAnswer !== null;
    onUpdate(isValid, { equacaoVisual: equacao, opcoes: options, respostaCorreta: correctAnswer });
  }, [equacao, options, correctAnswer, onUpdate]);

  return (
    <div className="flex flex-col gap-6">
      
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-bold text-muted">O Padrão ou Equação</label>
          <span className="text-xs text-muted">Usa os emojis do teclado</span>
        </div>
        <textarea 
          value={equacao} 
          onChange={(e) => setEquacao(e.target.value)} 
          placeholder="Ex: 🍎 + 🍎 = 10&#10;🍎 + 🍌 = 9&#10;🍌 = ?" 
          rows={3}
          className={`${fieldInputClass} resize-none text-2xl text-center py-4 tracking-widest leading-relaxed bg-gray-50 border-gray-200 placeholder:text-gray-300`} 
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-muted">Opções de Resposta</label>
        <div className="grid grid-cols-2 gap-2 w-full">
          {options.map((opt, i) => (
            <label key={i} className={`flex items-center gap-3 rounded-xl border p-2 transition-colors ${correctAnswer === i ? "border-accent bg-accent/10" : "border-white/10 bg-surface"}`}>
              <input type="radio" checked={correctAnswer === i} onChange={() => setCorrectAnswer(i)} className="size-4 accent-accent ml-2" />
              <input type="text" value={opt} onChange={(e) => setOptions(prev => prev.map((o, idx) => idx === i ? e.target.value : o))} placeholder={`Opção ${i + 1}`} className={`${fieldInputClass} border-0 bg-transparent px-2 py-1 text-sm focus:ring-0`} />
            </label>
          ))}
        </div>
      </div>

    </div>
  );
}