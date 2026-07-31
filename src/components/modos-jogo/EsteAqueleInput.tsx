"use client";

import { useState } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type EsteAqueleInputProps = {
  index: number;
};

export default function EsteAqueleInput({ index }: EsteAqueleInputProps) {
  const [opcaoA, setOpcaoA] = useState("");
  const [opcaoB, setOpcaoB] = useState("");

  return (
    <div className="flex flex-col gap-3">
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-muted">Opção A</span>
        <input
          id={`este-aquele-a-${index}`}
          type="text"
          value={opcaoA}
          onChange={(event) => setOpcaoA(event.target.value)}
          placeholder="Primeira opção"
          className={fieldInputClass}
        />
      </label>

      <div className="flex items-center justify-center py-1">
        <span className="rounded-full bg-accent/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent">
          OU
        </span>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-muted">Opção B</span>
        <input
          id={`este-aquele-b-${index}`}
          type="text"
          value={opcaoB}
          onChange={(event) => setOpcaoB(event.target.value)}
          placeholder="Segunda opção"
          className={fieldInputClass}
        />
      </label>
    </div>
  );
}
