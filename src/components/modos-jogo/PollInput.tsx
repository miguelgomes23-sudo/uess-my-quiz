"use client";
import { useState, useEffect } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function PollInput({ index, onUpdate }: Props) {
  const [opcoes, setOpcoes] = useState(["", "", ""]);

  useEffect(() => {
    // É válido se pelo menos 2 opções estiverem preenchidas
    const preenchidas = opcoes.filter(o => o.trim() !== "");
    const isValid = preenchidas.length >= 2;
    onUpdate(isValid, { opcoes: preenchidas }); // Numa poll não há resposta certa
  }, [opcoes, onUpdate]);

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-medium text-muted">Não há resposta certa. Os teus amigos vão votar na favorita.</p>
      {opcoes.map((opt, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-surface text-xs font-bold text-muted">{i + 1}</span>
          <input type="text" value={opt} onChange={(e) => setOpcoes(prev => prev.map((o, idx) => idx === i ? e.target.value : o))} placeholder={`Opção de voto ${i + 1}`} className={fieldInputClass} />
        </div>
      ))}
      {opcoes.length < 5 && (
        <button type="button" onClick={() => setOpcoes([...opcoes, ""])} className="mt-2 text-sm font-bold text-accent hover:underline">
          + Adicionar mais uma opção
        </button>
      )}
    </div>
  );
}