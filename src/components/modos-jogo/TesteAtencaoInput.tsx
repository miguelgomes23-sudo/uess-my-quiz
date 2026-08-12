"use client";
import { useState, useEffect, useRef } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";
import { uploadMediaParaStorage } from "@/lib/media-utils";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

const MAX_DURATION = 10; 

export default function TesteAtencaoInput({ index, onUpdate }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);

  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoFileUrl, setVideoFileUrl] = useState<string | null>(null);
  const [videoDuration, setVideoDuration] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const videoPreviewRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const isValid = videoUrl !== null && options.every(o => o.trim() !== "") && correctAnswer !== null;
    onUpdate(isValid, { videoUrl, startTime, duracao: MAX_DURATION, opcoes: options, respostaCorreta: correctAnswer });
  }, [videoUrl, startTime, options, correctAnswer, onUpdate]);

  useEffect(() => {
    return () => { if (videoFileUrl) URL.revokeObjectURL(videoFileUrl); };
  }, [videoFileUrl]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 40 * 1024 * 1024) return alert("Vídeo muito grande. Máximo 40MB.");

    const url = URL.createObjectURL(file);
    setVideoFileUrl(url);
    setVideoFile(file);
    setStartTime(0);
    setVideoDuration(0); 
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleLoadedMetadata = () => {
    if (videoPreviewRef.current) {
      setVideoDuration(videoPreviewRef.current.duration);
    }
  };

  const togglePreviewPlay = () => {
    if (!videoPreviewRef.current) return;
    
    if (isPlaying) {
      videoPreviewRef.current.pause();
      setIsPlaying(false);
    } else {
      videoPreviewRef.current.currentTime = startTime;
      videoPreviewRef.current.play();
      setIsPlaying(true);
      
      setTimeout(() => {
        if (videoPreviewRef.current) {
          videoPreviewRef.current.pause();
          setIsPlaying(false);
        }
      }, MAX_DURATION * 1000);
    }
  };

  const handleConfirmCrop = async () => {
    if (!videoFile) return;
    try {
      setIsUploading(true);
      if (videoPreviewRef.current) videoPreviewRef.current.pause();
      setIsPlaying(false);
      
      const url = await uploadMediaParaStorage(videoFile, "videos", "mp4");
      setVideoUrl(url);
      setVideoFile(null);
    } catch (error) {
      alert("Erro a processar o vídeo.");
    } finally {
      setIsUploading(false);
    }
  };

  const safeDuration = videoDuration > 0 ? videoDuration : 1;
  const widthPercent = Math.min(100, (MAX_DURATION / safeDuration) * 100);
  const leftPercent = Math.min(100 - widthPercent, (startTime / safeDuration) * 100);

  return (
    <div className="flex flex-col gap-4">
      <input type="file" accept="video/mp4, video/quicktime" ref={fileInputRef} onChange={handleFileChange} className="hidden" />

      {videoFile && videoFileUrl && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-black/95 animate-in fade-in zoom-in-95 duration-200 p-4 justify-center">
          <div className="flex flex-col gap-5 bg-white p-6 rounded-3xl w-full max-w-sm mx-auto shadow-2xl">
            <div className="text-center">
              <span className="text-4xl">👁️</span>
              <h3 className="text-lg font-bold text-foreground mt-2">Teste de Atenção</h3>
              <p className="text-xs text-muted">A janela tem exatos <b>{MAX_DURATION}s</b>.</p>
            </div>
            
            <div className="relative aspect-[9/16] w-full max-w-[220px] mx-auto overflow-hidden rounded-2xl bg-black shadow-inner border border-gray-200 cursor-pointer" onClick={togglePreviewPlay}>
              <video 
                ref={videoPreviewRef} 
                src={videoFileUrl} 
                className="h-full w-full object-cover" 
                onEnded={() => setIsPlaying(false)} 
                onLoadedMetadata={handleLoadedMetadata}
                playsInline
              />
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
                  <span className="text-4xl">▶️</span>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex justify-between text-xs font-bold text-muted">
                <span>Início: {startTime.toFixed(1)}s</span>
                <span>Fim: {Math.min(startTime + MAX_DURATION, videoDuration).toFixed(1)}s</span>
              </div>
              
              <div className="relative h-16 w-full rounded-xl bg-gray-100 border border-gray-200 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 4px, #4b5563 4px, #4b5563 6px)' }}></div>
                <div 
                  className="absolute top-0 bottom-0 bg-accent/40 border-x-4 border-accent pointer-events-none transition-all duration-75 flex items-center justify-center shadow-lg"
                  style={{ left: `${leftPercent}%`, width: `${widthPercent}%` }}
                >
                   <span className="text-accent font-bold text-xs bg-white/90 px-1.5 py-0.5 rounded shadow-sm">{MAX_DURATION}s</span>
                </div>
                <input 
                  type="range" 
                  min={0} 
                  max={Math.max(0, videoDuration - MAX_DURATION)} 
                  step={0.1} 
                  value={startTime} 
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setStartTime(val);
                    if (isPlaying) { videoPreviewRef.current?.pause(); setIsPlaying(false); }
                    if (videoPreviewRef.current) videoPreviewRef.current.currentTime = val;
                  }} 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10" 
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => { setVideoFile(null); setIsPlaying(false); }} disabled={isUploading} className="flex-1 rounded-2xl border border-gray-200 py-3 text-sm font-bold text-muted hover:bg-gray-50 disabled:opacity-50">Cancelar</button>
              <button onClick={handleConfirmCrop} disabled={isUploading} className="flex-1 rounded-2xl bg-accent py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-accent-hover disabled:opacity-50">{isUploading ? "A Guardar..." : "Cortar e Guardar"}</button>
            </div>
          </div>
        </div>
      )}

      {!videoUrl ? (
        <button type="button" onClick={() => fileInputRef.current?.click()} className="flex aspect-[9/16] w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 text-muted hover:bg-gray-100 hover:border-accent hover:text-accent transition-colors">
          <span className="text-4xl">👁️</span>
          <span className="text-sm font-bold text-center px-4">Upload Vertical (9:16)</span>
        </button>
      ) : (
        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-sm group">
          <video src={`${videoUrl}#t=${startTime},${startTime + MAX_DURATION}`} className="h-full w-full object-cover" controls playsInline />
          
          <button 
            type="button" 
            onClick={() => setVideoUrl(null)} 
            className="absolute right-3 top-3 z-10 flex items-center gap-2 rounded-xl bg-black/70 px-4 py-2 text-xs font-bold text-white backdrop-blur-md transition-all hover:bg-red-500 active:scale-95 shadow-lg"
          >
            Mudar Vídeo
          </button>
        </div>
      )}

      <div className="grid grid-cols-2 gap-2 w-full mt-2">
        {options.map((opt, i) => (
          <label key={i} className={`flex flex-col gap-2 rounded-xl border p-2 transition-colors ${correctAnswer === i ? "border-accent bg-accent/10" : "border-white/10 bg-surface"}`}>
            <div className="flex items-center gap-2">
              <input type="radio" checked={correctAnswer === i} onChange={() => setCorrectAnswer(i)} className="size-4 accent-accent" />
              <span className="text-xs font-bold text-muted uppercase">Opção {i + 1}</span>
            </div>
            <textarea value={opt} onChange={(e) => setOptions(prev => prev.map((o, idx) => idx === i ? e.target.value : o))} placeholder="O que reparaste?" rows={2} className={`${fieldInputClass} resize-none border-0 bg-transparent px-1 py-0 text-sm focus:ring-0 leading-tight`} />
          </label>
        ))}
      </div>
    </div>
  );
}