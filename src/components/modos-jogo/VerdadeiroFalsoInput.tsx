"use client";
import { useState, useEffect } from "react";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function VerdadeiroFalsoInput({ index, onUpdate }: Props) {
  const [resposta, setResposta] = useState<"verdadeiro" | "falso" | null>(null);

  useEffect(() => {
    onUpdate(resposta !== null, { respostaCorreta: resposta });
  }, [resposta, onUpdate]);

  return (
    <div className="grid grid-cols-2 gap-3">
      {[ { val: "verdadeiro", label: "Verdadeiro" }, { val: "falso", label: "Falso" } ].map(opt => (
        <button key={opt.val} type="button" onClick={() => setResposta(opt.val as any)} className={`min-h-16 rounded-2xl border px-4 py-4 text-base font-semibold transition-all active:scale-[0.98] ${resposta === opt.val ? "border-accent bg-accent text-accent-foreground" : "border-white/10 bg-surface text-foreground hover:border-ring/40"}`}>
          {opt.label}
        </button>
      ))}
    </div>
  );
}