"use client";
import { useState, useEffect, useRef } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";
import { comprimirImagem, uploadMediaParaStorage } from "@/lib/media-utils";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function QuemEInput({ index, onUpdate }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [imagemUrl, setImagemUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);

  useEffect(() => {
    const isValid = imagemUrl !== null && options.every(o => o.trim() !== "") && correctAnswer !== null;
    onUpdate(isValid, { imagemUrl, opcoes: options, respostaCorreta: correctAnswer });
  }, [imagemUrl, options, correctAnswer, onUpdate]);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Se o ficheiro for maior que 10MB, bloqueia
    if (file.size > 10 * 1024 * 1024) {
      alert("A imagem é demasiado grande (Máximo 10MB).");
      return;
    }

    try {
      setIsUploading(true);
      // 1. Comprime a imagem no dispositivo do utilizador (Máximo 800px de largura, 70% qualidade)
      const compressedBlob = await comprimirImagem(file, 800, 0.7);
      
      // 2. Faz o upload para o Firebase Storage
      const url = await uploadMediaParaStorage(compressedBlob, "imagens", "jpg");
      
      // 3. Guarda o URL real
      setImagemUrl(url);
    } catch (error) {
      console.error("Erro no upload da imagem:", error);
      alert("Ocorreu um erro ao carregar a imagem.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Input de Ficheiro Escondido */}
      <input 
        type="file" 
        accept="image/*" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        className="hidden" 
      />

      {/* ÁREA DE UPLOAD / PREVIEW */}
      {!imagemUrl ? (
        <button 
          type="button" 
          disabled={isUploading}
          onClick={() => fileInputRef.current?.click()} 
          className="flex h-40 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 text-muted transition-colors hover:bg-gray-100 disabled:opacity-50"
        >
          {isUploading ? (
            <>
              <svg className="size-8 animate-spin text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              <span className="text-sm font-bold text-accent">A comprimir e carregar...</span>
            </>
          ) : (
            <>
              <span className="text-3xl">📸</span>
              <span className="text-sm font-bold">Tocar para Adicionar Imagem</span>
              <span className="text-xs text-muted/70">Redimensionamento automático</span>
            </>
          )}
        </button>
      ) : (
        <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-gray-200 bg-black">
          <img src={imagemUrl} alt="Preview" className="h-full w-full object-cover opacity-90" />
          <button 
            type="button" 
            onClick={() => setImagemUrl(null)} 
            className="absolute right-3 top-3 flex items-center gap-2 rounded-lg bg-black/60 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md transition-colors hover:bg-red-500/80"
          >
            Mudar Imagem
          </button>
        </div>
      )}

      {/* OPÇÕES (Clássico) */}
      <div className="grid grid-cols-2 gap-2 w-full mt-2">
        {options.map((opt, i) => (
          <label key={i} className={`flex items-center gap-3 rounded-xl border p-3 transition-colors ${correctAnswer === i ? "border-accent bg-accent/10" : "border-white/10 bg-surface"}`}>
            <input type="radio" checked={correctAnswer === i} onChange={() => setCorrectAnswer(i)} className="size-4 accent-accent" />
            <input type="text" value={opt} onChange={(e) => setOptions(prev => prev.map((o, idx) => idx === i ? e.target.value : o))} placeholder={`Nome ${i + 1}`} className={`${fieldInputClass} border-0 bg-transparent px-0 py-0 focus:ring-0`} />
          </label>
        ))}
      </div>
    </div>
  );
}