"use client";
import { useState, useEffect } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function EsteAqueleInput({ index, onUpdate }: Props) {
  const [opcoes, setOpcoes] = useState(["", ""]);
  const [preferencia, setPreferencia] = useState<number | null>(null);

  useEffect(() => {
    const isValid = opcoes[0].trim() !== "" && opcoes[1].trim() !== "" && preferencia !== null;
    onUpdate(isValid, { opcoes, respostaCorreta: preferencia });
  }, [opcoes, preferencia, onUpdate]);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-medium text-muted">Escreve as duas opções e seleciona a tua favorita.</p>
      
      <label className={`flex flex-col gap-2 rounded-xl border p-4 transition-colors ${preferencia === 0 ? "border-accent bg-accent/10" : "border-white/10 bg-surface"}`}>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-foreground">Opção A</span>
          <input type="radio" checked={preferencia === 0} onChange={() => setPreferencia(0)} className="size-4 accent-accent" />
        </div>
        <input type="text" value={opcoes[0]} onChange={(e) => setOpcoes([e.target.value, opcoes[1]])} placeholder="Primeira opção" className={fieldInputClass} />
      </label>

      <div className="flex items-center justify-center">
        <span className="rounded-full bg-accent/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent">OU</span>
      </div>

      <label className={`flex flex-col gap-2 rounded-xl border p-4 transition-colors ${preferencia === 1 ? "border-accent bg-accent/10" : "border-white/10 bg-surface"}`}>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-foreground">Opção B</span>
          <input type="radio" checked={preferencia === 1} onChange={() => setPreferencia(1)} className="size-4 accent-accent" />
        </div>
        <input type="text" value={opcoes[1]} onChange={(e) => setOpcoes([opcoes[0], e.target.value])} placeholder="Segunda opção" className={fieldInputClass} />
      </label>
    </div>
  );
}