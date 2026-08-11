"use client";
import { useState, useEffect } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function ParesPerfeitosInput({ index, onUpdate }: Props) {
  const [pares, setPares] = useState([{ esq: "", dir: "" }, { esq: "", dir: "" }, { esq: "", dir: "" }]);

  useEffect(() => {
    const isValid = pares.every(p => p.esq.trim() !== "" && p.dir.trim() !== "");
    onUpdate(isValid, { paresCorretos: pares });
  }, [pares, onUpdate]);

  const updatePar = (i: number, lado: 'esq' | 'dir', val: string) => {
    setPares(prev => prev.map((p, idx) => idx === i ? { ...p, [lado]: val } : p));
  };

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-medium text-muted">Cria as ligações. Nós baralhamos na hora de jogar!</p>
      {pares.map((par, i) => (
        <div key={i} className="flex items-center gap-2 w-full">
          <input type="text" value={par.esq} onChange={(e) => updatePar(i, 'esq', e.target.value)} placeholder="Ex: Portugal" className={`${fieldInputClass} flex-1 text-center font-bold`} />
          <span className="text-muted">🔗</span>
          <input type="text" value={par.dir} onChange={(e) => updatePar(i, 'dir', e.target.value)} placeholder="Ex: Lisboa" className={`${fieldInputClass} flex-1 text-center font-bold`} />
        </div>
      ))}
    </div>
  );
}