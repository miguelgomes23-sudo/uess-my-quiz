"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Cropper from "react-easy-crop";
import { fieldInputClass } from "@/components/ui/field-styles";
import { uploadMediaParaStorage, getCroppedImg } from "@/lib/media-utils";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

type Par = { imagemUrl: string | null; texto: string };

export default function ParesPerfeitosInput({ index, onUpdate }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [pares, setPares] = useState<Par[]>([
    { imagemUrl: null, texto: "" },
    { imagemUrl: null, texto: "" },
    { imagemUrl: null, texto: "" }
  ]);
  
  const [activeSlot, setActiveSlot] = useState<number | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  useEffect(() => {
    const isValid = pares.every(p => p.imagemUrl !== null && p.texto.trim() !== "");
    onUpdate(isValid, { paresCorretos: pares });
  }, [pares, onUpdate]);

  const onCropComplete = useCallback((_ca: any, cap: any) => setCroppedAreaPixels(cap), []);

  const openUploader = (slot: number) => {
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
      setPares(prev => prev.map((p, i) => i === activeSlot ? { ...p, imagemUrl: url } : p));
      setImageSrc(null);
      setActiveSlot(null);
    } catch (error) {
      alert("Erro ao carregar a imagem.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <p className="text-sm font-medium text-muted">Liga a Imagem à sua respetiva Palavra (ex: Bandeira - País).</p>
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
              <button onClick={handleConfirmCrop} disabled={isUploading} className="flex-1 rounded-2xl bg-accent py-4 text-sm font-bold text-white shadow-md transition-colors hover:bg-accent-hover active:scale-95 disabled:opacity-50">{isUploading ? "A processar..." : "Cortar"}</button>
            </div>
          </div>
        </div>
      )}

      {pares.map((par, i) => (
        <div key={i} className="flex items-center gap-3 w-full">
          <div className="relative size-16 shrink-0 cursor-pointer overflow-hidden rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors" onClick={() => openUploader(i)}>
            {!par.imagemUrl ? (
              <div className="flex h-full w-full items-center justify-center text-xl">🖼️</div>
            ) : (
              <>
                <img src={par.imagemUrl} alt="Par" className="h-full w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white opacity-0 hover:opacity-100 transition-opacity"><span className="text-xs font-bold">Mudar</span></div>
              </>
            )}
          </div>
          <span className="text-muted text-lg">🔗</span>
          <input type="text" value={par.texto} onChange={(e) => setPares(prev => prev.map((p, idx) => idx === i ? { ...p, texto: e.target.value } : p))} placeholder="A sua correspondência" className={`${fieldInputClass} flex-1 text-center font-bold`} />
        </div>
      ))}
    </div>
  );
}