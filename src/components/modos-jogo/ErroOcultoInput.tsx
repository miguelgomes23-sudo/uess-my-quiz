"use client";
import { useState, useEffect } from "react";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function ErroOcultoInput({ index, onUpdate }: Props) {
  const [imagem, setImagem] = useState<boolean>(false);
  const [coordenadas, setCoordenadas] = useState<{ x: number, y: number } | null>(null);

  useEffect(() => {
    const isValid = imagem && coordenadas !== null;
    onUpdate(isValid, { imagemUrl: imagem ? "url" : "", alvo: coordenadas });
  }, [imagem, coordenadas, onUpdate]);

  const simularCliqueNaImagem = () => {
    if (!imagem) {
      setImagem(true);
    } else {
      setCoordenadas({ x: 50, y: 50 }); // Simula o X, Y no centro
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium text-muted">Faz o upload e depois toca na imagem para marcar o erro.</p>
      <button type="button" onClick={simularCliqueNaImagem} className={`relative overflow-hidden flex h-48 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed transition-colors ${imagem ? "border-accent bg-accent/5 text-accent" : "border-gray-300 bg-gray-50 text-muted"}`}>
        <span className="text-2xl">{coordenadas ? "🎯" : "📸"}</span>
        <span className="text-sm font-bold z-10">{!imagem ? "Adicionar Imagem" : coordenadas ? "Alvo Marcado! (Clica para alterar)" : "Toca aqui para definir o Alvo"}</span>
        
        {coordenadas && (
          <div className="absolute size-8 rounded-full border-4 border-red-500 bg-red-500/30 shadow-lg" style={{ top: 'calc(50% - 16px)', left: 'calc(50% - 16px)' }}></div>
        )}
      </button>
    </div>
  );
}