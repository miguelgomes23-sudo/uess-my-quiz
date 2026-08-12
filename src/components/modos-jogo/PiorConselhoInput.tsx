"use client";
import { useState, useEffect } from "react";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function PiorConselhoInput({ index, onUpdate }: Props) {
  const [limiteRespostas, setLimiteRespostas] = useState<number>(30);

  const opcoesLimite = [
    { valor: 15, label: "Rápido", desc: "15 Respostas" },
    { valor: 30, label: "Normal", desc: "30 Respostas" },
    { valor: 50, label: "Caos", desc: "50 Respostas" }
  ];

  useEffect(() => {
    onUpdate(true, { limiteRespostas });
  }, [limiteRespostas, onUpdate]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-muted">Limite de Conselhos</label>
        <p className="text-xs text-muted mb-2">Quando atingir este número, o desafio bloqueia e a comunidade vota no conselho mais genial.</p>
        
        <div className="flex gap-2 w-full">
          {opcoesLimite.map((op) => (
            <button
              key={op.valor}
              onClick={() => setLimiteRespostas(op.valor)}
              className={`flex-1 flex flex-col items-center justify-center rounded-xl py-3 border-2 transition-all shadow-sm ${limiteRespostas === op.valor ? "bg-accent/10 border-accent text-accent" : "bg-white border-gray-100 text-muted hover:border-gray-300"}`}
            >
              <span className="font-bold text-sm leading-none">{op.label}</span>
              <span className="text-[10px] opacity-80 mt-1">{op.desc}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}