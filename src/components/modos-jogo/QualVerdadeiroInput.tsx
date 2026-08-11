"use client";
import { useState, useEffect } from "react";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function QualVerdadeiroInput({ index, onUpdate }: Props) {
  const [imagens, setImagens] = useState<boolean[]>([false, false, false, false]);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);

  useEffect(() => {
    const isValid = imagens.every(img => img === true) && correctAnswer !== null;
    onUpdate(isValid, { imagensUrls: imagens, respostaCorreta: correctAnswer });
  }, [imagens, correctAnswer, onUpdate]);

  const toggleImagem = (i: number) => {
    setImagens(prev => prev.map((img, idx) => idx === i ? !img : img));
  };

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-medium text-muted">Carrega as 4 imagens e seleciona a verdadeira.</p>
      <div className="grid grid-cols-2 gap-3 w-full">
        {imagens.map((img, i) => (
          <div key={i} className={`relative flex h-28 cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 transition-colors ${correctAnswer === i ? "border-accent bg-accent/10" : "border-gray-200 bg-gray-50 hover:bg-gray-100"}`} onClick={() => setCorrectAnswer(i)}>
            <input type="radio" checked={correctAnswer === i} readOnly className="absolute top-3 left-3 size-4 accent-accent" />
            <button type="button" onClick={(e) => { e.stopPropagation(); toggleImagem(i); }} className="flex flex-col items-center gap-1 z-10">
              <span className="text-xl">{img ? "🖼️" : "➕"}</span>
              <span className="text-xs font-bold text-muted">{img ? "Pronto" : "Foto " + (i + 1)}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}