"use client";
import { useState, useEffect } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function FinaisAlternativosInput({ index, onUpdate }: Props) {
  const [video, setVideo] = useState<boolean>(false);
  const [caminhos, setCaminhos] = useState(["", ""]); // Começa com 2 caminhos (tipo "Aventura")

  useEffect(() => {
    const preenchidos = caminhos.filter(c => c.trim() !== "");
    const isValid = video && preenchidos.length >= 2;
    onUpdate(isValid, { videoUrl: video ? "url" : "", opcoes: preenchidos });
  }, [video, caminhos, onUpdate]);

  return (
    <div className="flex flex-col gap-4">
      <button type="button" onClick={() => setVideo(!video)} className={`flex h-24 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed transition-colors ${video ? "border-accent bg-accent/10 text-accent" : "border-gray-300 bg-gray-50 text-muted hover:bg-gray-100"}`}>
        <span className="text-2xl">{video ? "✅" : "🔀"}</span>
        <span className="text-sm font-bold">{video ? "Vídeo da Decisão Carregado" : "Upload Vídeo Base"}</span>
      </button>

      <div className="flex flex-col gap-2">
        <p className="text-xs font-bold text-muted px-1">Define os caminhos que os jogadores podem escolher (Sem certo/errado).</p>
        {caminhos.map((caminho, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface text-xs font-bold text-muted">C{i + 1}</span>
            <input type="text" value={caminho} onChange={(e) => setCaminhos(prev => prev.map((o, idx) => idx === i ? e.target.value : o))} placeholder={`Caminho ${i + 1}`} className={fieldInputClass} />
          </div>
        ))}
        {caminhos.length < 4 && (
          <button type="button" onClick={() => setCaminhos([...caminhos, ""])} className="mt-1 text-sm font-bold text-accent hover:underline self-start px-2">
            + Adicionar Caminho
          </button>
        )}
      </div>
    </div>
  );
}