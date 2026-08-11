"use client";
import { useState, useEffect } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function QueSomInput({ index, onUpdate }: Props) {
  const [audio, setAudio] = useState<boolean>(false);
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);

  useEffect(() => {
    const isValid = audio && options.every(o => o.trim() !== "") && correctAnswer !== null;
    onUpdate(isValid, { audioUrl: audio ? "url" : "", opcoes: options, respostaCorreta: correctAnswer });
  }, [audio, options, correctAnswer, onUpdate]);

  return (
    <div className="flex flex-col gap-4">
      <button type="button" onClick={() => setAudio(!audio)} className={`flex h-20 w-full items-center justify-center gap-3 rounded-2xl border-2 border-dashed transition-colors ${audio ? "border-accent bg-accent/10 text-accent" : "border-gray-300 bg-gray-50 text-muted hover:bg-gray-100"}`}>
        <span className="text-2xl">{audio ? "✅" : "🔊"}</span>
        <span className="text-sm font-bold">{audio ? "Áudio Carregado" : "Adicionar Som"}</span>
      </button>

      <div className="grid grid-cols-2 gap-2 w-full">
        {options.map((opt, i) => (
          <label key={i} className={`flex items-center gap-3 rounded-xl border p-2 transition-colors ${correctAnswer === i ? "border-accent bg-accent/10" : "border-white/10 bg-surface"}`}>
            <input type="radio" checked={correctAnswer === i} onChange={() => setCorrectAnswer(i)} className="size-4 accent-accent ml-2" />
            <input type="text" value={opt} onChange={(e) => setOptions(prev => prev.map((o, idx) => idx === i ? e.target.value : o))} placeholder={`Som ${i + 1}`} className={`${fieldInputClass} border-0 bg-transparent px-1 py-1 text-sm focus:ring-0`} />
          </label>
        ))}
      </div>
    </div>
  );
}