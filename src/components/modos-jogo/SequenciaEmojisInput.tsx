"use client";
import { useState, useEffect } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function SequenciaEmojisInput({ index, onUpdate }: Props) {
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);

  useEffect(() => {
    const isValid = options.every(o => o.trim() !== "") && correctAnswer !== null;
    onUpdate(isValid, { opcoes: options, respostaCorreta: correctAnswer });
  }, [options, correctAnswer, onUpdate]);

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-medium text-muted">Que emoji quebra ou completa o padrão?</p>
      <div className="grid grid-cols-2 gap-2 w-full">
        {options.map((opt, i) => (
          <label key={i} className={`flex items-center gap-3 rounded-xl border p-2 transition-colors ${correctAnswer === i ? "border-accent bg-accent/10" : "border-white/10 bg-surface"}`}>
            <input type="radio" checked={correctAnswer === i} onChange={() => setCorrectAnswer(i)} className="size-4 accent-accent ml-2" />
            <input type="text" value={opt} onChange={(e) => setOptions(prev => prev.map((o, idx) => idx === i ? e.target.value : o))} placeholder={`Emoji ${i + 1}`} className={`${fieldInputClass} border-0 bg-transparent px-1 py-1 text-2xl text-center focus:ring-0`} />
          </label>
        ))}
      </div>
    </div>
  );
}