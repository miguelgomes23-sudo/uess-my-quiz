"use client";
import { useState, useEffect } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function LacunaInput({ index, onUpdate }: Props) {
  const [resposta, setResposta] = useState("");

  useEffect(() => {
    const isValid = resposta.trim() !== "";
    onUpdate(isValid, { respostaCorreta: resposta });
  }, [resposta, onUpdate]);

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-muted">Palavra ou frase que preenche os ___</span>
      <input type="text" value={resposta} onChange={(e) => setResposta(e.target.value)} placeholder="A resposta correta secreta" className={fieldInputClass} />
    </div>
  );
}