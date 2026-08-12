"use client";
import { useState, useEffect } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function LinhaTempoInput({ index, onUpdate }: Props) {
  const [eventos, setEventos] = useState(["", "", "", ""]);

  useEffect(() => {
    const isValid = eventos.every(e => e.trim() !== "");
    onUpdate(isValid, { ordemCorreta: eventos });
  }, [eventos, onUpdate]);

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium text-muted">Escreve 4 eventos da ordem mais antiga para a mais recente.</p>
      {eventos.map((ev, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="text-xs font-bold text-muted">{i + 1}º</span>
          <input type="text" value={ev} onChange={(e) => setEventos(prev => prev.map((item, idx) => idx === i ? e.target.value : item))} placeholder="Evento na linha temporal" className={fieldInputClass} />
        </div>
      ))}
    </div>
  );
}