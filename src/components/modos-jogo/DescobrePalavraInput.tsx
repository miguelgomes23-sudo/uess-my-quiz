"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Cropper from "react-easy-crop";
import { fieldInputClass } from "@/components/ui/field-styles";
import { uploadMediaParaStorage, getCroppedImg } from "@/lib/media-utils";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function DescobrePalavraInput({ index, onUpdate }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [imagemUrl, setImagemUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [palavra, setPalavra] = useState("");

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  useEffect(() => {
    const isValid = imagemUrl !== null && palavra.trim() !== "";
    onUpdate(isValid, { imagemUrl, respostaCorreta: palavra.toUpperCase() });
  }, [imagemUrl, palavra, onUpdate]);

  const onCropComplete = useCallback((_croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

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
    if (!imageSrc || !croppedAreaPixels) return;

    try {
      setIsUploading(true);
      const croppedBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
      const url = await uploadMediaParaStorage(croppedBlob, "imagens", "jpg");
      setImagemUrl(url);
      setImageSrc(null);
    } catch (error) {
      console.error("Erro no corte/upload:", error);
      alert("Ocorreu um erro ao carregar a imagem.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
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
              <button onClick={() => setImageSrc(null)} disabled={isUploading} className="flex-1 rounded-2xl border border-gray-200 py-4 text-sm font-bold text-muted transition-colors hover:bg-gray-50 active:scale-95 disabled:opacity-50">Cancelar</button>
              <button onClick={handleConfirmCrop} disabled={isUploading} className="flex-1 rounded-2xl bg-accent py-4 text-sm font-bold text-white shadow-md transition-colors hover:bg-accent-hover active:scale-95 disabled:opacity-50">{isUploading ? "A processar..." : "Cortar e Guardar"}</button>
            </div>
          </div>
        </div>
      )}

      {!imagemUrl ? (
        <button type="button" onClick={() => fileInputRef.current?.click()} className="flex aspect-square w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 text-muted transition-colors hover:bg-gray-100 hover:border-accent hover:text-accent">
          <span className="text-3xl">📸</span>
          <span className="text-sm font-bold">Tocar para Adicionar Imagem</span>
          <span className="text-xs opacity-70">Ajuste quadrado (1:1) automático</span>
        </button>
      ) : (
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-sm group">
          <img src={imagemUrl} alt="Preview" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <button type="button" onClick={() => setImagemUrl(null)} className="absolute right-3 top-3 flex items-center gap-2 rounded-xl bg-black/70 px-4 py-2 text-xs font-bold text-white backdrop-blur-md transition-all hover:bg-red-500 active:scale-95 shadow-lg">Mudar Foto</button>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-muted">A Palavra Escondida (Sem espaços)</span>
        <input type="text" value={palavra} onChange={(e) => setPalavra(e.target.value.toUpperCase())} placeholder="Ex: RONALDO" className={`${fieldInputClass} uppercase tracking-[0.2em] font-bold`} />
      </div>
    </div>
  );
}