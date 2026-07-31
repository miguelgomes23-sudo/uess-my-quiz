"use client";

import { useState } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type ClassicoInputProps = {
  index: number;
};

const OPTION_LABELS = ["A", "B", "C", "D"] as const;

export default function ClassicoInput({ index }: ClassicoInputProps) {
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);

  function updateOption(optionIndex: number, value: string) {
    setOptions((current) =>
      current.map((option, i) => (i === optionIndex ? value : option)),
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-medium text-muted">
        Opções de resposta — seleciona a correta
      </p>
      {OPTION_LABELS.map((label, optionIndex) => (
        <label
          key={label}
          className={`flex items-center gap-3 rounded-xl border p-3 transition-colors ${
            correctAnswer === optionIndex
              ? "border-accent bg-accent/10"
              : "border-white/10 bg-surface"
          }`}
        >
          <input
            type="radio"
            name={`classico-correct-${index}`}
            checked={correctAnswer === optionIndex}
            onChange={() => setCorrectAnswer(optionIndex)}
            className="size-4 accent-accent"
            aria-label={`Resposta correta: opção ${label}`}
          />
          <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-background text-xs font-semibold text-ring">
            {label}
          </span>
          <input
            type="text"
            value={options[optionIndex]}
            onChange={(event) => updateOption(optionIndex, event.target.value)}
            placeholder={`Opção ${label}`}
            className={`${fieldInputClass} border-0 bg-transparent px-0 py-0 focus:ring-0`}
          />
        </label>
      ))}
    </div>
  );
}
