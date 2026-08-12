"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Cropper from "react-easy-crop";
import { uploadMediaParaStorage, getCroppedImg } from "@/lib/media-utils";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function ErroOcultoInput({ index, onUpdate }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [imagemUrl, setImagemUrl] = useState<string | null>(null);
  const [coordenadas, setCoordenadas] = useState<{ x: number, y: number } | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  useEffect(() => {
    const isValid = imagemUrl !== null && coordenadas !== null;
    onUpdate(isValid, { imagemUrl, alvo: coordenadas });
  }, [imagemUrl, coordenadas, onUpdate]);

  const onCropComplete = useCallback((_ca: any, cap: any) => setCroppedAreaPixels(cap), []);

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
    if (!imageSrc || !croppedAreaPixels) return;
    try {
      setIsUploading(true);
      const croppedBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
      const url = await uploadMediaParaStorage(croppedBlob, "imagens", "jpg");
      setImagemUrl(url);
      setImageSrc(null);
    } catch (error) {
      alert("Erro ao carregar a imagem.");
    } finally {
      setIsUploading(false);
    }
  };

  // Calcula a percentagem exata (X,Y) do clique na imagem para escalar noutros ecrãs
  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCoordenadas({ x, y });
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium text-muted">1º Adiciona a imagem, 2º Toca nela para marcar o alvo secreto.</p>
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
          <span className="text-3xl">🎯</span>
          <span className="text-sm font-bold">Tocar para Adicionar Imagem</span>
          <span className="text-xs opacity-70">Ajuste quadrado (1:1) automático</span>
        </button>
      ) : (
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-sm cursor-crosshair" onClick={handleImageClick}>
          <img src={imagemUrl} alt="Cena" className="h-full w-full object-cover opacity-90" />
          
          {coordenadas ? (
             <div className="absolute size-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-red-500 bg-red-500/30 shadow-lg pointer-events-none transition-all duration-300" style={{ top: `${coordenadas.y}%`, left: `${coordenadas.x}%` }} />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-bold text-sm pointer-events-none animate-pulse">Toca no ecrã para marcar o erro!</div>
          )}
          
          <button type="button" onClick={(e) => { e.stopPropagation(); setImagemUrl(null); setCoordenadas(null); }} className="absolute right-3 top-3 z-10 flex items-center gap-2 rounded-xl bg-black/70 px-4 py-2 text-xs font-bold text-white backdrop-blur-md transition-all hover:bg-red-500 active:scale-95 shadow-lg">Mudar Foto</button>
        </div>
      )}
    </div>
  );
}