"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Cropper from "react-easy-crop";
import { uploadMediaParaStorage, getCroppedImg } from "@/lib/media-utils";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function QualVerdadeiroInput({ index, onUpdate }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // CORREÇÃO AQUI: adicionado o [] para definir que é um array
  const [imagensUrls, setImagensUrls] = useState<(string | null)[]>([null, null, null, null]);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);
  
  // Gere qual dos 4 slots está a ser editado
  const [activeSlot, setActiveSlot] = useState<number | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  useEffect(() => {
    const isValid = imagensUrls.every(url => url !== null) && correctAnswer !== null;
    onUpdate(isValid, { imagensUrls, respostaCorreta: correctAnswer });
  }, [imagensUrls, correctAnswer, onUpdate]);

  const onCropComplete = useCallback((_croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const openUploaderForSlot = (slotIndex: number) => {
    setActiveSlot(slotIndex);
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      alert("A imagem é demasiado grande (Máximo 10MB).");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => setImageSrc(reader.result as string);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleConfirmCrop = async () => {
    if (!imageSrc || !croppedAreaPixels || activeSlot === null) return;

    try {
      setIsUploading(true);
      const croppedBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
      const url = await uploadMediaParaStorage(croppedBlob, "imagens", "jpg");
      
      setImagensUrls(prev => prev.map((u, i) => i === activeSlot ? url : u));
      setImageSrc(null);
      setActiveSlot(null);
    } catch (error) {
      console.error("Erro no corte/upload:", error);
      alert("Ocorreu um erro ao carregar a imagem.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-medium text-muted">Carrega as 4 imagens e seleciona a verdadeira.</p>
      
      <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />

      {imageSrc && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-black animate-in fade-in zoom-in-95 duration-200">
          <div className="relative flex-1">
            <Cropper image={imageSrc} crop={crop} zoom={zoom} aspect={1} onCropChange={setCrop} onCropComplete={onCropComplete} onZoomChange={setZoom} cropShape="rect" showGrid={false} />
          </div>
          <div className="flex flex-col gap-5 bg-white p-6 pb-10 sm:pb-6 rounded-t-[32px]">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-muted uppercase tracking-widest text-center">Ajustar Zoom</label>
              <input type="range" value={zoom} min={1} max={3} step={0.1} onChange={(e) => setZoom(Number(e.target.value))} className="w-full accent-accent h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
            </div>
            <div className="flex gap-3">
              <button onClick={() => { setImageSrc(null); setActiveSlot(null); }} disabled={isUploading} className="flex-1 rounded-2xl border border-gray-200 py-4 text-sm font-bold text-muted transition-colors hover:bg-gray-50 active:scale-95 disabled:opacity-50">Cancelar</button>
              <button onClick={handleConfirmCrop} disabled={isUploading} className="flex-1 rounded-2xl bg-accent py-4 text-sm font-bold text-white shadow-md transition-colors hover:bg-accent-hover active:scale-95 disabled:opacity-50">{isUploading ? "A processar..." : "Cortar e Guardar"}</button>
            </div>
          </div>
        </div>
      )}

      {/* GRELHA 2x2 COM QUADRADOS PERFEITOS */}
      <div className="grid grid-cols-2 gap-3 w-full">
        {imagensUrls.map((url, i) => (
          <div 
            key={i} 
            className={`relative flex aspect-square cursor-pointer overflow-hidden flex-col items-center justify-center rounded-2xl border-2 transition-colors ${correctAnswer === i ? "border-accent ring-4 ring-accent/20" : "border-gray-200 bg-gray-50 hover:border-gray-300"}`} 
            onClick={() => setCorrectAnswer(i)}
          >
            <input type="radio" checked={correctAnswer === i} readOnly className="absolute top-3 left-3 size-5 accent-accent z-20" />
            
            {!url ? (
              <button type="button" onClick={(e) => { e.stopPropagation(); openUploaderForSlot(i); }} className="flex flex-col items-center gap-2 z-10 w-full h-full justify-center hover:bg-gray-100/50 transition-colors">
                <span className="text-2xl">➕</span>
                <span className="text-xs font-bold text-muted px-2 text-center">Adicionar Imagem {i + 1}</span>
              </button>
            ) : (
              <>
                <img src={url} alt={`Opção ${i+1}`} className="absolute inset-0 h-full w-full object-cover" />
                <button type="button" onClick={(e) => { e.stopPropagation(); openUploaderForSlot(i); }} className="absolute bottom-2 right-2 z-20 flex items-center justify-center rounded-lg bg-black/70 p-2 text-white backdrop-blur-md transition-all hover:bg-red-500 active:scale-95">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}