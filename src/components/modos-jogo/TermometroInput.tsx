"use client";

import { useState } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type TermometroInputProps = {
  index: number;
};

export default function TermometroInput({ index }: TermometroInputProps) {
  const [valor, setValor] = useState("");

  return (
    <label className="flex flex-col gap-2" htmlFor={`termometro-${index}`}>
      <span className="text-sm font-medium text-muted">
        Valor correto (número ou percentagem)
      </span>
      <div className="relative">
        <input
          id={`termometro-${index}`}
          type="number"
          inputMode="decimal"
          min={0}
          max={100}
          value={valor}
          onChange={(event) => setValor(event.target.value)}
          placeholder="Ex: 75"
          className={`${fieldInputClass} pr-10`}
        />
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-muted">
          %
        </span>
      </div>
    </label>
  );
}
