"use client";

import { useState } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Top3InputProps = {
  index: number;
};

const RANK_LABELS = ["1º", "2º", "3º"] as const;

export default function Top3Input({ index }: Top3InputProps) {
  const [rankings, setRankings] = useState(["", "", ""]);

  function updateRanking(rankIndex: number, value: string) {
    setRankings((current) =>
      current.map((item, i) => (i === rankIndex ? value : item)),
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {RANK_LABELS.map((label, rankIndex) => (
        <label
          key={label}
          className="flex items-center gap-3"
          htmlFor={`top3-${index}-${rankIndex}`}
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-sm font-bold text-accent">
            {label}
          </span>
          <input
            id={`top3-${index}-${rankIndex}`}
            type="text"
            value={rankings[rankIndex]}
            onChange={(event) => updateRanking(rankIndex, event.target.value)}
            placeholder={`Escolha ${label} lugar`}
            className={fieldInputClass}
          />
        </label>
      ))}
    </div>
  );
}
