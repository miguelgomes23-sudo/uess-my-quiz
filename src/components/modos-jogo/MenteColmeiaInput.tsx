"use client";
import { useState, useEffect } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function MenteColmeiaInput({ index, onUpdate }: Props) {
  const [respostas, setRespostas] = useState<string[]>(["", "", "", "", ""]);

  useEffect(() => {
    const isValid = respostas.length >= 3 && respostas.every(r => r.trim() !== "");
    // Guardamos em maiúsculas para facilitar a validação no futuro jogo
    onUpdate(isValid, { respostasCorretas: respostas.map(r => r.toUpperCase().trim()) });
  }, [respostas, onUpdate]);

  const handleRespostaChange = (i: number, value: string) => {
    const novas = [...respostas];
    novas[i] = value;
    setRespostas(novas);
  };

  const addResposta = () => {
    if (respostas.length < 15) setRespostas([...respostas, ""]);
  };

  const removeResposta = (indexToRemove: number) => {
    if (respostas.length > 3) {
      setRespostas(respostas.filter((_, i) => i !== indexToRemove));
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between mb-1">
        <label className="text-sm font-bold text-muted">A Lista de Soluções Ocultas</label>
        <span className="text-xs font-semibold text-muted">{respostas.length} SLOTS</span>
      </div>
      
      <p className="text-xs text-muted mb-2 leading-relaxed">
        A comunidade vai ver um quadro com <b>{respostas.length} espaços em branco</b>. Cada utilizador só tem 1 tentativa para acertar numa das tuas soluções!
      </p>

      <div className="flex flex-col gap-2">
        {respostas.map((resp, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent text-xs font-bold text-white">
              {i + 1}
            </div>
            <input 
              type="text" 
              value={resp} 
              onChange={(e) => handleRespostaChange(i, e.target.value)} 
              placeholder={`Resposta válida ${i + 1}`} 
              className={`${fieldInputClass} flex-1 text-sm uppercase font-semibold tracking-wide placeholder:normal-case placeholder:font-normal`} 
            />
            {respostas.length > 3 && (
              <button onClick={() => removeResposta(i)} className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            )}
          </div>
        ))}
      </div>

      {respostas.length < 15 && (
        <button onClick={addResposta} className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 py-3 text-sm font-bold text-muted transition-colors hover:border-accent hover:bg-accent/5 hover:text-accent">
          + Adicionar Solução
        </button>
      )}
    </div>
  );
}