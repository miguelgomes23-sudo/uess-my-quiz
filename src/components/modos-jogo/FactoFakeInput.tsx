"use client";

import { useState } from "react";

type FactoFakeInputProps = {
  index: number;
};

type RespostaFactoFake = "verdadeiro" | "falso" | null;

export default function FactoFakeInput({ index }: FactoFakeInputProps) {
  const [resposta, setResposta] = useState<RespostaFactoFake>(null);

  const options: { value: Exclude<RespostaFactoFake, null>; label: string }[] =
    [
      { value: "verdadeiro", label: "Verdadeiro" },
      { value: "falso", label: "Falso" },
    ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {options.map((option) => {
        const isSelected = resposta === option.value;

        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isSelected}
            onClick={() => setResposta(option.value)}
            className={`min-h-16 rounded-2xl border px-4 py-4 text-base font-semibold transition-all active:scale-[0.98] ${
              isSelected
                ? "border-accent bg-accent text-accent-foreground shadow-[0_8px_24px_rgba(124,58,237,0.35)]"
                : "border-white/10 bg-surface text-foreground hover:border-ring/40"
            } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`}
          >
            {option.label}
          </button>
        );
      })}
      <span className="sr-only" id={`facto-fake-group-${index}`}>
        Resposta correta para a pergunta {index + 1}
      </span>
    </div>
  );
}
