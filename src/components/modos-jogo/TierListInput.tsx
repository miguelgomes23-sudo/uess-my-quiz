"use client";
import { useState, useEffect } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };
const TIERS = [{ label: "S", color: "bg-red-500" }, { label: "A", color: "bg-orange-500" }, { label: "B", color: "bg-yellow-500" }, { label: "C", color: "bg-green-500" }];

export default function TierListInput({ index, onUpdate }: Props) {
  const [tiers, setTiers] = useState(["", "", "", ""]);

  useEffect(() => {
    const isValid = tiers.every(t => t.trim() !== "");
    onUpdate(isValid, { respostasTier: tiers });
  }, [tiers, onUpdate]);

  return (
    <div className="flex flex-col gap-2">
      {TIERS.map((tier, i) => (
        <label key={tier.label} className="flex items-center gap-2">
          <span className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${tier.color} text-white font-bold`}>{tier.label}</span>
          <input type="text" value={tiers[i]} onChange={(e) => setTiers(prev => prev.map((item, idx) => idx === i ? e.target.value : item))} placeholder={`O que fica no Tier ${tier.label}?`} className={fieldInputClass} />
        </label>
      ))}
    </div>
  );
}