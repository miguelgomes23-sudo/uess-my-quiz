"use client";

import { useState } from "react";
import TopHeader from "@/components/TopHeader";
import BottomNav from "@/components/BottomNav";

export default function CarteiraPage() {
  // Estados fictícios (para depois ligares ao Firebase)
  const [saldo, setSaldo] = useState(12);
  const [respostasCertasHoje, setRespostasCertasHoje] = useState(3);
  const [nivelDiario, setNivelDiario] = useState(1); // Nível 1 = objetivo 5. Nível 2 = objetivo 10...

  // A LÓGICA DA DIFICULDADE (Dobrar o alvo consoante o nível)
  const calcularObjetivo = (nivel: number) => 5 * Math.pow(2, nivel - 1);
  const objetivoAtual = calcularObjetivo(nivelDiario);
  const percentagem = Math.min((respostasCertasHoje / objetivoAtual) * 100, 100);

  const pacotes = [
    { creditos: 6, preco: "€0.99", popular: false },
    { creditos: 14, preco: "€1.99", popular: false },
    { creditos: 50, preco: "€4.99", popular: true }, // Etiqueta de "Mais Popular"
    { creditos: 120, preco: "€9.99", popular: false },
    { creditos: 250, preco: "€19.99", popular: false },
    { creditos: 660, preco: "€49.99", popular: false },
  ];

  return (
    <div className="flex min-h-dvh w-full flex-col bg-gray-50/50 sm:mx-auto sm:max-w-[600px]">
      
      <TopHeader titulo="Carteira" />

      <main className="flex flex-1 flex-col w-full pb-32 px-6 pt-6 gap-6">
        
        {/* CARTÃO PRINCIPAL: SALDO */}
        <div className="relative overflow-hidden rounded-[32px] bg-foreground p-8 text-white shadow-lg">
          <div className="absolute -right-6 -top-6 size-32 rounded-full bg-white/10 blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 size-40 rounded-full bg-accent/30 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-white/60 mb-2">O teu Saldo</span>
            <div className="flex items-center gap-3">
              <span className="text-5xl drop-shadow-sm">🪙</span>
              <span className="text-6xl font-black tracking-tight">{saldo}</span>
            </div>
            <p className="mt-4 text-sm text-white/80">
              Usa créditos para criar quizzes premium, ver estatísticas avançadas e remover limites!
            </p>
          </div>
        </div>

        {/* CARTÃO 2: GAMIFICAÇÃO DIÁRIA */}
        <div className="flex flex-col rounded-[24px] bg-white p-6 border border-gray-200 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-foreground flex items-center gap-2">
              <span className="text-xl">🎯</span> Missão Diária
            </h3>
            <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1.5 rounded-full">Nível {nivelDiario}</span>
          </div>
          
          <p className="text-sm text-muted leading-relaxed mb-6">
            Acerta em <strong className="text-foreground">{objetivoAtual} perguntas</strong> para ganhares <strong className="text-accent">1 Crédito grátis</strong>. A dificuldade dobra a cada vitória, mas volta ao normal amanhã!
          </p>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-foreground">{respostasCertasHoje} certas</span>
              <span className="text-muted">Objetivo: {objetivoAtual}</span>
            </div>
            <div className="h-4 w-full rounded-full bg-gray-100 overflow-hidden shadow-inner">
              <div 
                className="h-full rounded-full bg-accent transition-all duration-1000 ease-out" 
                style={{ width: `${percentagem}%` }} 
              />
            </div>
          </div>
        </div>

        {/* CARTÃO 3: LOJA DE CRÉDITOS */}
        <div className="flex flex-col mt-2">
          <h3 className="text-sm font-bold text-foreground mb-4 ml-2 uppercase tracking-wider">🛒 Loja de Créditos</h3>
          
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {pacotes.map((pacote, i) => (
              <button 
                key={i} 
                className={`relative flex flex-col items-center justify-center p-5 rounded-[24px] border-2 transition-all active:scale-95 ${
                  pacote.popular 
                    ? "border-accent bg-accent/5 shadow-[0_0_20px_rgba(124,58,237,0.15)]" 
                    : "border-gray-100 bg-white hover:border-gray-300 shadow-sm"
                }`}
              >
                {pacote.popular && (
                  <span className="absolute -top-3 bg-accent text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                    Mais Popular
                  </span>
                )}
                <span className="text-3xl mb-2 drop-shadow-sm">🪙</span>
                <span className="text-xl font-bold text-foreground">{pacote.creditos}</span>
                <span className="text-xs text-muted mb-4">Créditos</span>
                <span className="w-full rounded-xl bg-foreground text-white py-2.5 text-sm font-bold text-center">
                  {pacote.preco}
                </span>
              </button>
            ))}
          </div>
        </div>

      </main>

      <BottomNav />
    </div>
  );
}