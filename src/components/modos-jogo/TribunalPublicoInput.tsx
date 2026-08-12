"use client";
import { useState, useEffect } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function TribunalPublicoInput({ index, onUpdate }: Props) {
  const [labelContra, setLabelContra] = useState("Contra");
  const [labelFavor, setLabelFavor] = useState("A Favor");

  useEffect(() => {
    const isValid = labelContra.trim() !== "" && labelFavor.trim() !== "";
    onUpdate(isValid, { labelContra, labelFavor });
  }, [labelContra, labelFavor, onUpdate]);

  return (
    <div className="flex flex-col gap-5">
      <p className="text-xs font-semibold text-muted">
        Personaliza os botões de fação. Os jogadores têm de votar num deles para ver o gráfico e desbloquear a zona de comentários.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-widest text-red-500">Fação Vermelha</label>
          <input 
            type="text" 
            value={labelContra} 
            onChange={(e) => setLabelContra(e.target.value)} 
            placeholder="Ex: É um crime" 
            className={`${fieldInputClass} border-red-200 bg-red-50/50 focus:border-red-500 font-bold text-center`} 
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-widest text-green-500">Fação Verde</label>
          <input 
            type="text" 
            value={labelFavor} 
            onChange={(e) => setLabelFavor(e.target.value)} 
            placeholder="Ex: Concordo 100%" 
            className={`${fieldInputClass} border-green-200 bg-green-50/50 focus:border-green-500 font-bold text-center`} 
          />
        </div>
      </div>
    </div>
  );
}