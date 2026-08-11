"use client";
import { useState, useEffect } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function EquacaoTempoInput({ index, onUpdate }: Props) {
  const [resposta, setResposta] = useState("");
  const [tempo, setTempo] = useState<number>(5);

  useEffect(() => {
    const isValid = resposta.trim() !== "";
    onUpdate(isValid, { respostaCorreta: Number(resposta), tempoLimite: tempo });
  }, [resposta, tempo, onUpdate]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-muted">A Resposta Correta (Numérica)</span>
        <input type="number" value={resposta} onChange={(e) => setResposta(e.target.value)} placeholder="Ex: 42" className={fieldInputClass} />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-muted">Limite de Tempo (segundos)</span>
        <div className="flex gap-2">
          {[5, 10, 15, 30].map(t => (
            <button key={t} type="button" onClick={() => setTempo(t)} className={`flex-1 rounded-xl border py-2 text-sm font-bold transition-colors ${tempo === t ? "border-accent bg-accent text-white" : "border-gray-200 bg-gray-50 text-foreground hover:bg-gray-100"}`}>
              {t}s
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}