"use client";
import { useState, useEffect } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function TermometroInput({ index, onUpdate }: Props) {
  const [valor, setValor] = useState("");

  useEffect(() => {
    const isValid = valor.trim() !== "";
    onUpdate(isValid, { respostaCorreta: Number(valor) });
  }, [valor, onUpdate]);

  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-muted">Valor correto (número absoluto)</span>
      <input type="number" inputMode="decimal" value={valor} onChange={(e) => setValor(e.target.value)} placeholder="Ex: 75, 1000, 3" className={fieldInputClass} />
    </label>
  );
}