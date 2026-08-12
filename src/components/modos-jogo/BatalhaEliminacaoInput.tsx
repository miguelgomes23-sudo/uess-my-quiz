"use client";
import { useState, useEffect } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function BatalhaEliminacaoInput({ index, onUpdate }: Props) {
  const [elementos, setElementos] = useState<string[]>(["", "", "", "", ""]);

  useEffect(() => {
    const isValid = elementos.length >= 5 && elementos.every(e => e.trim() !== "");
    onUpdate(isValid, { elementos });
  }, [elementos, onUpdate]);

  const handleElementoChange = (i: number, value: string) => {
    const novos = [...elementos];
    novos[i] = value;
    setElementos(novos);
  };

  const addElemento = () => {
    if (elementos.length < 10) setElementos([...elementos, ""]);
  };

  const removeElemento = (indexToRemove: number) => {
    if (elementos.length > 5) {
      setElementos(elementos.filter((_, i) => i !== indexToRemove));
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between mb-1">
        <label className="text-sm font-bold text-muted">A Lista de Batalha</label>
        <span className="text-xs font-semibold text-muted">{elementos.length} / 10 MÁX</span>
      </div>
      
      <p className="text-xs text-muted mb-2 leading-relaxed">
        Adiciona entre 5 a 10 elementos. A comunidade votará diáriamente para <b>salvar</b> os favoritos. O menos votado a cada 24h é riscado!
      </p>

      <div className="flex flex-col gap-2">
        {elementos.map((el, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-xs font-bold text-muted">
              {i + 1}
            </div>
            <input 
              type="text" 
              value={el} 
              onChange={(e) => handleElementoChange(i, e.target.value)} 
              placeholder={`Elemento ${i + 1}`} 
              className={`${fieldInputClass} flex-1 text-sm`} 
            />
            {elementos.length > 5 && (
              <button onClick={() => removeElemento(i)} className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            )}
          </div>
        ))}
      </div>

      {elementos.length < 10 && (
        <button onClick={addElemento} className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 py-3 text-sm font-bold text-muted transition-colors hover:border-accent hover:bg-accent/5 hover:text-accent">
          + Adicionar Elemento
        </button>
      )}
    </div>
  );
}