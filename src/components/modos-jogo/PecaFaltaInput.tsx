"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Cropper from "react-easy-crop";
import { fieldInputClass } from "@/components/ui/field-styles";
import { uploadMediaParaStorage, getCroppedImg } from "@/lib/media-utils";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function PecaFaltaInput({ index, onUpdate }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [mainUrl, setMainUrl] = useState<string | null>(null);
  // O ERRO ESTAVA AQUI: Faltava o [] depois do (string | null)
  const [pecasUrls, setPecasUrls] = useState<(string | null)[]>([null, null, null, null]);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);
  const [activeSlot, setActiveSlot] = useState<'main' | number | null>(null);

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const isValid = mainUrl !== null && pecasUrls.every(url => url !== null) && correctAnswer !== null;
    onUpdate(isValid, { imagemPrincipal: mainUrl, opcoesImagens: pecasUrls, respostaCorreta: correctAnswer });
  }, [mainUrl, pecasUrls, correctAnswer, onUpdate]);

  const onCropComplete = useCallback((_ca: any, cap: any) => setCroppedAreaPixels(cap), []);

  const triggerFileInput = (slot: 'main' | number) => {
    setActiveSlot(slot);
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) return alert("Imagem muito grande (Máx 10MB).");
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

      if (activeSlot === 'main') {
        setMainUrl(url);
      } else {
        const novasPecas = [...pecasUrls];
        novasPecas[activeSlot] = url;
        setPecasUrls(novasPecas);
      }
      setImageSrc(null);
      setActiveSlot(null);
    } catch (error) {
      alert("Erro ao carregar a imagem.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleCancelCrop = () => {
    setImageSrc(null);
    setActiveSlot(null);
  };

  return (
    <div className="flex flex-col gap-6">
      <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />

      {imageSrc && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-black animate-in fade-in zoom-in-95 duration-200">
          <div className="relative flex-1">
             <Cropper 
                image={imageSrc} 
                crop={crop} 
                zoom={zoom} 
                aspect={activeSlot === 'main' ? 16/9 : 1} 
                onCropChange={setCrop} 
                onCropComplete={onCropComplete} 
                onZoomChange={setZoom} 
                cropShape="rect" 
                showGrid={false} 
             />
          </div>
          <div className="flex flex-col gap-5 bg-white p-6 pb-10 sm:pb-6 rounded-t-[32px]">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-muted text-center">AJUSTAR ZOOM</label>
              <input type="range" value={zoom} min={1} max={3} step={0.1} onChange={(e) => setZoom(Number(e.target.value))} className="w-full accent-accent h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
            </div>
            <div className="flex gap-3">
              <button onClick={handleCancelCrop} disabled={isUploading} className="flex-1 rounded-2xl border border-gray-200 py-4 text-sm font-bold text-muted hover:bg-gray-50 active:scale-95 disabled:opacity-50">Cancelar</button>
              <button onClick={handleConfirmCrop} disabled={isUploading} className="flex-1 rounded-2xl bg-accent py-4 text-sm font-bold text-white hover:bg-accent-hover active:scale-95 disabled:opacity-50">{isUploading ? "A processar..." : "Cortar e Guardar"}</button>
            </div>
          </div>
        </div>
      )}

      {/* IMAGEM PRINCIPAL */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-muted">A Imagem com a Peça em Falta</label>
        {!mainUrl ? (
          <button type="button" onClick={() => triggerFileInput('main')} className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 text-muted transition-colors hover:bg-gray-100 hover:border-accent hover:text-accent">
            <span className="text-4xl">🖼️</span>
            <span className="text-sm font-bold">Adicionar Imagem Principal</span>
          </button>
        ) : (
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-sm group">
            <img src={mainUrl} alt="Principal" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
            <button type="button" onClick={() => setMainUrl(null)} className="absolute right-3 top-3 flex items-center gap-2 rounded-xl bg-black/70 px-4 py-2 text-xs font-bold text-white backdrop-blur-md transition-all hover:bg-red-500 active:scale-95 shadow-lg">Mudar Imagem</button>
          </div>
        )}
      </div>

      {/* AS 4 PEÇAS (OPÇÕES) */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-muted">As 4 Opções de Peças</label>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {pecasUrls.map((url, i) => (
            <div key={i} className={`relative flex flex-col gap-2 rounded-xl border p-2 transition-colors ${correctAnswer === i ? "border-accent bg-accent/10" : "border-gray-200 bg-surface"}`}>
              <div className="flex items-center gap-2">
                <input type="radio" checked={correctAnswer === i} onChange={() => setCorrectAnswer(i)} className="size-4 accent-accent" />
                <span className="text-xs font-bold text-muted uppercase">Peça {i + 1}</span>
              </div>
              
              {!url ? (
                <button type="button" onClick={() => triggerFileInput(i)} className="flex aspect-square w-full flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 text-muted transition-colors hover:bg-gray-100 hover:border-accent hover:text-accent">
                  <span className="text-xl">🧩</span>
                </button>
              ) : (
                <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-gray-200 bg-black">
                  <img src={url} alt={`Peça ${i+1}`} className="h-full w-full object-cover" />
                  <button type="button" onClick={() => {
                    const novas = [...pecasUrls];
                    novas[i] = null;
                    setPecasUrls(novas);
                  }} className="absolute right-1 top-1 flex size-6 items-center justify-center rounded-md bg-black/70 text-white backdrop-blur-md hover:bg-red-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}