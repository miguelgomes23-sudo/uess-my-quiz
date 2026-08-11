"use client";
import { useState, useEffect } from "react";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function PercentagemInput({ index, onUpdate }: Props) {
  const [valor, setValor] = useState<number>(50);

  useEffect(() => {
    onUpdate(true, { respostaCorreta: valor, min: 0, max: 100, unidade: "%" });
  }, [valor, onUpdate]);

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-surface p-5">
      <div className="flex justify-between items-center text-sm font-bold text-muted">
        <span>0%</span>
        <span className="text-xl text-accent">{valor}%</span>
        <span>100%</span>
      </div>
      <input type="range" min={0} max={100} value={valor} onChange={(e) => setValor(Number(e.target.value))} className="w-full accent-accent" />
    </div>
  );
}