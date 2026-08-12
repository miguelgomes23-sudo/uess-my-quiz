"use client";
import { useState, useEffect } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function EquacaoTempoInput({ index, onUpdate }: Props) {
  const [resposta, setResposta] = useState("");
  const [tempoLimite, setTempoLimite] = useState<number>(10);

  const opcoesTempo = [5, 10, 15, 30];

  useEffect(() => {
    const isValid = resposta.trim() !== "";
    onUpdate(isValid, { respostaCorreta: resposta, tempoLimite });
  }, [resposta, tempoLimite, onUpdate]);

  return (
    <div className="flex flex-col gap-6">
      
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-muted">A Resposta Correta (Numérica)</label>
        <input 
          type="number" 
          value={resposta} 
          onChange={(e) => setResposta(e.target.value)} 
          placeholder="Ex: 42" 
          className={`${fieldInputClass} text-xl font-bold tracking-wider`} 
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-muted">Limite de Tempo (segundos)</label>
        <div className="flex gap-2 w-full">
          {opcoesTempo.map((t) => (
            <button
              key={t}
              onClick={() => setTempoLimite(t)}
              className={`flex-1 rounded-xl py-3 font-bold text-sm transition-colors shadow-sm
                ${tempoLimite === t 
                  ? "bg-accent text-white border-2 border-accent" 
                  : "bg-white border-2 border-gray-100 text-muted hover:border-gray-300"
                }`}
            >
              {t}s
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}