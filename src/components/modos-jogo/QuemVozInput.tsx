"use client";
import { useState, useEffect, useRef } from "react";
import { fieldInputClass } from "@/components/ui/field-styles";
import { uploadMediaParaStorage, recortarAudio } from "@/lib/media-utils";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

const MAX_DURATION = 10; 

export default function QuemVozInput({ index, onUpdate }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);

  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [audioFileUrl, setAudioFileUrl] = useState<string | null>(null);
  const [audioDuration, setAudioDuration] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const audioPreviewRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const isValid = audioUrl !== null && options.every(o => o.trim() !== "") && correctAnswer !== null;
    onUpdate(isValid, { audioUrl, opcoes: options, respostaCorreta: correctAnswer });
  }, [audioUrl, options, correctAnswer, onUpdate]);

  useEffect(() => {
    return () => {
      if (audioFileUrl) URL.revokeObjectURL(audioFileUrl);
    };
  }, [audioFileUrl]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 15 * 1024 * 1024) return alert("O áudio é demasiado pesado.");

    const url = URL.createObjectURL(file);
    setAudioFileUrl(url);
    
    const audioObj = new Audio(url);
    audioObj.onloadedmetadata = () => {
      setAudioDuration(audioObj.duration);
      setAudioFile(file);
      setStartTime(0);
    };
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const togglePreviewPlay = () => {
    if (!audioPreviewRef.current) return;
    
    if (isPlaying) {
      audioPreviewRef.current.pause();
      setIsPlaying(false);
    } else {
      audioPreviewRef.current.currentTime = startTime;
      audioPreviewRef.current.play();
      setIsPlaying(true);
      
      setTimeout(() => {
        if (audioPreviewRef.current) {
          audioPreviewRef.current.pause();
          setIsPlaying(false);
        }
      }, MAX_DURATION * 1000);
    }
  };

  const handleConfirmCrop = async () => {
    if (!audioFile) return;
    try {
      setIsUploading(true);
      if (audioPreviewRef.current) audioPreviewRef.current.pause();
      setIsPlaying(false);
      
      const endTime = Math.min(startTime + MAX_DURATION, audioDuration);
      const croppedBlob = await recortarAudio(audioFile, startTime, endTime);
      const url = await uploadMediaParaStorage(croppedBlob, "audios", "wav");
      
      setAudioUrl(url);
      setAudioFile(null);
    } catch (error) {
      alert("Ocorreu um erro a processar o áudio.");
    } finally {
      setIsUploading(false);
    }
  };

  const safeDuration = audioDuration > 0 ? audioDuration : 1;
  const widthPercent = Math.min(100, (MAX_DURATION / safeDuration) * 100);
  const leftPercent = Math.min(100 - widthPercent, (startTime / safeDuration) * 100);

  return (
    <div className="flex flex-col gap-4">
      <input type="file" accept="audio/*, video/mp4" ref={fileInputRef} onChange={handleFileChange} className="hidden" />

      {audioFile && audioFileUrl && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-black/90 animate-in fade-in zoom-in-95 duration-200 p-4 justify-center">
          <div className="flex flex-col gap-6 bg-white p-6 rounded-3xl w-full max-w-sm mx-auto shadow-2xl">
            <div className="text-center">
              <span className="text-4xl">🎤</span>
              <h3 className="text-lg font-bold text-foreground mt-2">Cortar a Voz</h3>
              <p className="text-sm text-muted">A janela de corte está bloqueada em <b>{MAX_DURATION}s</b>.</p>
            </div>
            
            <audio ref={audioPreviewRef} src={audioFileUrl} className="hidden" onEnded={() => setIsPlaying(false)} />

            <div className="flex flex-col gap-3">
              <div className="flex justify-between text-xs font-bold text-muted">
                <span>Início: {startTime.toFixed(1)}s</span>
                <span>Fim: {Math.min(startTime + MAX_DURATION, audioDuration).toFixed(1)}s</span>
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
                  max={Math.max(0, audioDuration - MAX_DURATION)} 
                  step={0.1} 
                  value={startTime} 
                  onChange={(e) => {
                    setStartTime(Number(e.target.value));
                    if (isPlaying) {
                      audioPreviewRef.current?.pause();
                      setIsPlaying(false);
                    }
                  }} 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10" 
                />
              </div>

              <button onClick={togglePreviewPlay} className={`mt-2 rounded-xl py-3 text-sm font-bold transition-colors ${isPlaying ? 'bg-red-100 text-red-600 hover:bg-red-200' : 'bg-gray-100 text-foreground hover:bg-gray-200'}`}>
                {isPlaying ? "⏹ Parar Voz" : "▶️ Ouvir Excerto"}
              </button>
            </div>

            <div className="flex gap-3">
              <button onClick={() => { setAudioFile(null); setIsPlaying(false); }} disabled={isUploading} className="flex-1 rounded-2xl border border-gray-200 py-3 text-sm font-bold text-muted transition-colors hover:bg-gray-50 disabled:opacity-50">Cancelar</button>
              <button onClick={handleConfirmCrop} disabled={isUploading} className="flex-1 rounded-2xl bg-accent py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-accent-hover disabled:opacity-50">{isUploading ? "A Guardar..." : "Cortar e Guardar"}</button>
            </div>
          </div>
        </div>
      )}

      {!audioUrl ? (
        <button type="button" onClick={() => fileInputRef.current?.click()} className="flex h-32 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 text-muted transition-colors hover:bg-gray-100 hover:border-accent hover:text-accent">
          <span className="text-3xl">🎤</span>
          <span className="text-sm font-bold">Adicionar Gravação de Voz</span>
        </button>
      ) : (
        <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-surface p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-foreground">Voz Pronta</span>
              <span className="text-xs text-muted">Duração exata: {MAX_DURATION} segundos</span>
            </div>
            <button type="button" onClick={() => setAudioUrl(null)} className="rounded-lg bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600 hover:bg-red-100 transition-colors">Remover</button>
          </div>
          <audio controls src={audioUrl} className="w-full h-10 mt-1 rounded-md outline-none" />
        </div>
      )}

      <div className="grid grid-cols-2 gap-2 w-full mt-2">
        {options.map((opt, i) => (
          <label key={i} className={`flex items-center gap-3 rounded-xl border p-2 transition-colors ${correctAnswer === i ? "border-accent bg-accent/10" : "border-white/10 bg-surface"}`}>
            <input type="radio" checked={correctAnswer === i} onChange={() => setCorrectAnswer(i)} className="size-4 accent-accent ml-2" />
            <input type="text" value={opt} onChange={(e) => setOptions(prev => prev.map((o, idx) => idx === i ? e.target.value : o))} placeholder={`Pessoa ${i + 1}`} className={`${fieldInputClass} border-0 bg-transparent px-2 py-1 text-sm focus:ring-0`} />
          </label>
        ))}
      </div>
    </div>
  );
}