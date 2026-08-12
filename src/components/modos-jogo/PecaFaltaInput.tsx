"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Cropper from "react-easy-crop";
import { uploadMediaParaStorage, getCroppedImg } from "@/lib/media-utils";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function PecaFaltaInput({ index, onUpdate }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [mainUrl, setMainUrl] = useState<string | null>(null);
  const [pecasUrls, setPecasUrls] = useState<(string | null)>([null, null, null, null]);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);
  
  const [activeSlot, setActiveSlot] = useState<'main' | number | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  useEffect(() => {
    const isValid = mainUrl !== null && pecasUrls.every(url => url !== null) && correctAnswer !== null;
    onUpdate(isValid, { mainUrl, pecasUrls, respostaCorreta: correctAnswer });
  }, [mainUrl, pecasUrls, correctAnswer, onUpdate]);

  const onCropComplete = useCallback((_ca: any, cap: any) => setCroppedAreaPixels(cap), []);

  const openUploader = (slot: 'main' | number) => {
    setActiveSlot(slot);
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) return alert("A imagem é demasiado grande.");
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
      
      if (activeSlot === 'main') setMainUrl(url);
      else setPecasUrls(prev => prev.map((u, i) => i === activeSlot ? url : u));
      
      setImageSrc(null);
      setActiveSlot(null);
    } catch (error) {
      alert("Erro ao carregar a imagem.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />

      {imageSrc && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-black animate-in fade-in zoom-in-95 duration-200">
          <div className="relative flex-1">
             <Cropper image={imageSrc} crop={crop} zoom={zoom} aspect={1} onCropChange={setCrop} onCropComplete={onCropComplete} onZoomChange={setZoom} cropShape="rect" showGrid={false} />
          </div>
          <div className="flex flex-col gap-5 bg-white p-6 pb-10 sm:pb-6 rounded-t-[32px]">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-muted text-center">AJUSTAR ZOOM</label>
              <input type="range" value={zoom} min={1} max={3} step={0.1} onChange={(e) => setZoom(Number(e.target.value))} className="w-full accent-accent h-2 bg-gray-200 rounded-lg appearance-none" />
            </div>
            <div className="flex gap-3">
              <button onClick={() => { setImageSrc(null); setActiveSlot(null); }} className="flex-1 rounded-2xl border border-gray-200 py-4 text-sm font-bold text-muted transition-colors hover:bg-gray-50 active:scale-95 disabled:opacity-50">Cancelar</button>
              <button onClick={handleConfirmCrop} disabled={isUploading} className="flex-1 rounded-2xl bg-accent py-4 text-sm font-bold text-white shadow-md transition-colors hover:bg-accent-hover active:scale-95 disabled:opacity-50">{isUploading ? "Processar..." : "Cortar"}</button>
            </div>
          </div>
        </div>
      )}

      {/* IMAGEM PRINCIPAL (Quadro Base) */}
      {!mainUrl ? (
        <button type="button" onClick={() => openUploader('main')} className="flex aspect-square w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 text-muted hover:bg-gray-100 transition-colors">
          <span className="text-3xl">🖼️</span>
          <span className="text-sm font-bold">Upload Quadro Incompleto</span>
        </button>
      ) : (
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl border bg-black shadow-sm group">
          <img src={mainUrl} alt="Quadro Base" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
          <button type="button" onClick={() => setMainUrl(null)} className="absolute right-3 top-3 z-10 flex items-center rounded-xl bg-black/70 px-4 py-2 text-xs font-bold text-white backdrop-blur-md hover:bg-red-500 active:scale-95 shadow-lg">Mudar</button>
        </div>
      )}

      {/* PEÇAS (4 Opções) */}
      <p className="text-xs font-bold text-muted uppercase tracking-widest text-center mt-2">Peças de Resposta</p>
      <div className="grid grid-cols-4 gap-2 w-full">
        {pecasUrls.map((url, i) => (
          <div key={i} className={`relative flex aspect-square cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 transition-colors ${correctAnswer === i ? "border-accent ring-2 ring-accent/30" : "border-gray-200 bg-gray-50 hover:border-gray-300"}`} onClick={() => setCorrectAnswer(i)}>
            <input type="radio" checked={correctAnswer === i} readOnly className="absolute top-1 left-1 size-3 accent-accent z-20" />
            {!url ? (
              <button type="button" onClick={(e) => { e.stopPropagation(); openUploader(i); }} className="z-10 flex h-full w-full items-center justify-center text-xl hover:bg-gray-100/50">➕</button>
            ) : (
              <>
                <img src={url} alt={`Peça ${i+1}`} className="absolute inset-0 h-full w-full object-cover" />
                <button type="button" onClick={(e) => { e.stopPropagation(); openUploader(i); }} className="absolute bottom-1 right-1 z-20 flex size-6 items-center justify-center rounded-md bg-black/70 text-white backdrop-blur-md hover:bg-red-500 active:scale-95"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg></button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}