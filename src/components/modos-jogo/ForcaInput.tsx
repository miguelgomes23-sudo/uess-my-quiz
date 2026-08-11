"use client";
import { useState, useEffect } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function ForcaInput({ index, onUpdate }: Props) {
  const [palavra, setPalavra] = useState("");

  useEffect(() => {
    const isValid = palavra.trim() !== "" && !palavra.includes(" ");
    onUpdate(isValid, { respostaCorreta: palavra.toUpperCase() });
  }, [palavra, onUpdate]);

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-muted">A Palavra Secreta (Sem espaços)</span>
      <input type="text" value={palavra} onChange={(e) => setPalavra(e.target.value.toUpperCase())} placeholder="Ex: GIRAFA" className={`${fieldInputClass} uppercase tracking-[0.3em] font-bold`} />
    </div>
  );
}