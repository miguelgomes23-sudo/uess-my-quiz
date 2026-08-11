"use client";
import { useState, useEffect } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function ContinuaLetraInput({ index, onUpdate }: Props) {
  const [audio, setAudio] = useState<boolean>(false);
  const [resposta, setResposta] = useState("");

  useEffect(() => {
    const isValid = audio && resposta.trim() !== "";
    onUpdate(isValid, { audioUrl: audio ? "url" : "", respostaCorreta: resposta });
  }, [audio, resposta, onUpdate]);

  return (
    <div className="flex flex-col gap-4">
      <button type="button" onClick={() => setAudio(!audio)} className={`flex h-20 w-full items-center justify-center gap-3 rounded-2xl border-2 border-dashed transition-colors ${audio ? "border-accent bg-accent/10 text-accent" : "border-gray-300 bg-gray-50 text-muted hover:bg-gray-100"}`}>
        <span className="text-2xl">{audio ? "✅" : "🎶"}</span>
        <span className="text-sm font-bold">{audio ? "Música Incompleta Pronta" : "Upload Música (Corte a meio)"}</span>
      </button>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-muted">A próxima palavra ou frase exata é:</span>
        <input type="text" value={resposta} onChange={(e) => setResposta(e.target.value)} placeholder="A continuação da letra..." className={fieldInputClass} />
      </div>
    </div>
  );
}