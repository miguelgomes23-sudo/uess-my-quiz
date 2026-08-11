"use client";
import { useState, useEffect } from "react";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function AvaliacaoInput({ index, onUpdate }: Props) {
  const [valor, setValor] = useState<number>(5);

  useEffect(() => {
    onUpdate(true, { respostaCorreta: valor, min: 1, max: 10 });
  }, [valor, onUpdate]);

  return (
    <div className="flex flex-col gap-4 items-center rounded-xl border border-white/10 bg-surface p-5">
      <span className="text-2xl font-bold text-accent">{valor} / 10</span>
      <input type="range" min={1} max={10} value={valor} onChange={(e) => setValor(Number(e.target.value))} className="w-full accent-accent" />
    </div>
  );
}