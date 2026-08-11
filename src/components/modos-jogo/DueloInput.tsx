"use client";
import { useState, useEffect } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function DueloInput({ index, onUpdate }: Props) {
  const [options, setOptions] = useState(["", ""]);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);

  useEffect(() => {
    const isValid = options.every(o => o.trim() !== "") && correctAnswer !== null;
    onUpdate(isValid, { opcoes: options, respostaCorreta: correctAnswer });
  }, [options, correctAnswer, onUpdate]);

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-medium text-muted">Apenas duas opções de resposta — seleciona a certa</p>
      {["A", "B"].map((label, i) => (
        <label key={label} className={`flex items-center gap-3 rounded-xl border p-3 transition-colors ${correctAnswer === i ? "border-accent bg-accent/10" : "border-white/10 bg-surface"}`}>
          <input type="radio" checked={correctAnswer === i} onChange={() => setCorrectAnswer(i)} className="size-4 accent-accent" />
          <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-background text-xs font-semibold text-ring">{label}</span>
          <input type="text" value={options[i]} onChange={(e) => setOptions(prev => prev.map((opt, idx) => idx === i ? e.target.value : opt))} placeholder={`Opção ${label}`} className={`${fieldInputClass} border-0 bg-transparent px-0 py-0 focus:ring-0`} />
        </label>
      ))}
    </div>
  );
}