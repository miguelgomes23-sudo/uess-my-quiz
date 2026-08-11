"use client";
import { useState, useEffect } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };
const RANK_LABELS = ["🥇 1º", "🥈 2º", "🥉 3º"] as const;

export default function Top3Input({ index, onUpdate }: Props) {
  const [rankings, setRankings] = useState(["", "", ""]);

  useEffect(() => {
    const isValid = rankings.every(r => r.trim() !== "");
    onUpdate(isValid, { respostasTop3: rankings });
  }, [rankings, onUpdate]);

  return (
    <div className="flex flex-col gap-3">
      {RANK_LABELS.map((label, i) => (
        <label key={label} className="flex items-center gap-3">
          <span className="flex w-16 shrink-0 items-center justify-center rounded-xl bg-accent/20 py-2 text-xs font-bold text-accent">{label}</span>
          <input type="text" value={rankings[i]} onChange={(e) => setRankings(prev => prev.map((item, idx) => idx === i ? e.target.value : item))} placeholder={`Escolha o lugar`} className={fieldInputClass} />
        </label>
      ))}
    </div>
  );
}