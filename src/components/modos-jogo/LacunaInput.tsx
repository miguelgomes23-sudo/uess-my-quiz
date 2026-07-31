"use client";

import { useState } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type LacunaInputProps = {
  index: number;
};

export default function LacunaInput({ index }: LacunaInputProps) {
  const [resposta, setResposta] = useState("");

  const letterCount = resposta.replace(/\s/g, "").length;

  return (
    <div className="flex flex-col gap-2">
      <label className="flex flex-col gap-2" htmlFor={`lacuna-${index}`}>
        <span className="text-sm font-medium text-muted">
          Palavra ou frase em falta
        </span>
        <input
          id={`lacuna-${index}`}
          type="text"
          value={resposta}
          onChange={(event) => setResposta(event.target.value)}
          placeholder="A resposta correta para a lacuna"
          className={fieldInputClass}
        />
      </label>
      <p className="text-right text-xs text-muted">
        {letterCount} {letterCount === 1 ? "letra" : "letras"}
      </p>
    </div>
  );
}
