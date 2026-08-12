"use client";
import { useState, useEffect } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function SequenciaNumericaInput({ index, onUpdate }: Props) {
  const [resposta, setResposta] = useState("");

  useEffect(() => {
    const isValid = resposta.trim() !== "";
    onUpdate(isValid, { respostaCorreta: resposta });
  }, [resposta, onUpdate]);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-bold text-muted">A Resposta Numérica Exata</label>
      <input 
        type="number" 
        value={resposta} 
        onChange={(e) => setResposta(e.target.value)} 
        placeholder="Ex: 64" 
        className={`${fieldInputClass} text-xl font-bold`} 
      />
    </div>
  );
}