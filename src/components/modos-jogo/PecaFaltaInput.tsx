"use client";
import { useState, useEffect } from "react";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function PecaFaltaInput({ index, onUpdate }: Props) {
  const [imgPrincipal, setImgPrincipal] = useState<boolean>(false);
  const [pecas, setPecas] = useState<boolean[]>([false, false, false, false]);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);

  useEffect(() => {
    const isValid = imgPrincipal && pecas.every(p => p === true) && correctAnswer !== null;
    onUpdate(isValid, { mainUrl: imgPrincipal, pecasUrls: pecas, respostaCorreta: correctAnswer });
  }, [imgPrincipal, pecas, correctAnswer, onUpdate]);

  const togglePeca = (i: number) => setPecas(prev => prev.map((p, idx) => idx === i ? !p : p));

  return (
    <div className="flex flex-col gap-4">
      <button type="button" onClick={() => setImgPrincipal(!imgPrincipal)} className={`flex h-24 w-full flex-col items-center justify-center gap-1 rounded-2xl border-2 transition-colors ${imgPrincipal ? "border-accent bg-accent/10 text-accent" : "border-dashed border-gray-300 bg-gray-50 text-muted"}`}>
        <span className="text-xl">{imgPrincipal ? "✅" : "🖼️"}</span>
        <span className="text-xs font-bold">{imgPrincipal ? "Quadro Principal Inserido" : "Upload Quadro Incompleto"}</span>
      </button>

      <div className="grid grid-cols-4 gap-2 w-full">
        {pecas.map((peca, i) => (
          <div key={i} className={`relative flex h-16 cursor-pointer flex-col items-center justify-center rounded-xl border-2 transition-colors ${correctAnswer === i ? "border-accent bg-accent/20" : "border-gray-200 bg-gray-50 hover:bg-gray-100"}`} onClick={() => setCorrectAnswer(i)}>
            <input type="radio" checked={correctAnswer === i} readOnly className="absolute top-1 left-1 size-3 accent-accent" />
            <button type="button" onClick={(e) => { e.stopPropagation(); togglePeca(i); }} className="z-10 text-xl">{peca ? "🧩" : "➕"}</button>
          </div>
        ))}
      </div>
    </div>
  );
}