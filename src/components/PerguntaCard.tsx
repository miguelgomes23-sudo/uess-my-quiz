"use client";

import { useState, useEffect } from "react";
import { obterPerguntaAleatoria, obterTodasPerguntas } from "@/lib/gerenciador-perguntas";

type PerguntaCardProps = {
  index: number;
  modo: string;
  categoriaId: string;
  subcategoriaId: string;
  onUpdate?: (index: number, isValid: boolean, data: any) => void;
};

export default function PerguntaCard({ index, modo, categoriaId, subcategoriaId, onUpdate }: PerguntaCardProps) {
  const [pergunta, setPergunta] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [respostasTop3, setRespostasTop3] = useState<string[]>(["", "", ""]);
  const [respostaCorreta, setRespostaCorreta] = useState<any>(null);
  const [valorTermometro, setValorTermometro] = useState<number>(0);

  const carregarNovaPergunta = () => {
    // Ao carregar, fazemos uma cópia profunda para podermos editar sem alterar o catálogo original
    const nova = JSON.parse(JSON.stringify(obterPerguntaAleatoria(modo, categoriaId, subcategoriaId)));
    setPergunta(nova);
    setRespostaCorreta(null); 

    if (modo === "top-3") {
      if (nova && nova.opcoes) {
        setRespostasTop3([...nova.opcoes]);
      } else {
        setRespostasTop3(["", "", ""]);
      }
    } else if (modo === "termometro" && nova) {
      const meio = Math.floor((nova.max + nova.min) / 2);
      setValorTermometro(meio);
      setRespostaCorreta(meio); 
    }
  };

  useEffect(() => {
    carregarNovaPergunta();
  }, [modo, categoriaId, subcategoriaId]);

  useEffect(() => {
    if (onUpdate && pergunta) {
      let isValid = false;
      if (modo === "classico" && respostaCorreta !== null) isValid = true;
      if (modo === "facto-ou-fake" && respostaCorreta !== null) isValid = true;
      if (modo === "este-ou-aquele" && respostaCorreta !== null) isValid = true;
      if (modo === "lacuna" && respostaCorreta !== null && respostaCorreta.trim() !== "") isValid = true;
      if (modo === "termometro" && valorTermometro !== null) isValid = true;
      if (modo === "top-3" && respostasTop3.every(r => r.trim() !== "")) isValid = true;

      onUpdate(index, isValid, { 
        perguntaId: pergunta.id,
        perguntaEditada: pergunta, // Enviamos a pergunta com as edições para ser guardada no Firebase depois
        respostaCorreta, 
        respostasTop3, 
        valorTermometro 
      });
    }
  }, [modo, respostaCorreta, respostasTop3, valorTermometro, pergunta, index]);

  const formatarTextoLista = (p: any) => {
    if (modo === "este-ou-aquele") return `${p.opcaoA} ou ${p.opcaoB}?`;
    if (modo === "lacuna") return p.texto.replace("___", "[...]");
    return p.texto;
  };

  // Função para as caixas de texto crescerem automaticamente à medida que escreves
  const autoResize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  if (!pergunta) {
    return <div className="h-40 w-full animate-pulse rounded-2xl bg-gray-100 border border-gray-200"></div>;
  }

  const todasPerguntas = obterTodasPerguntas(modo, categoriaId, subcategoriaId);

  return (
    <>
      <article key={pergunta.id} className="flex flex-col gap-4 w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
        <header className="flex w-full items-center justify-between mb-1">
          <span className="text-sm font-semibold text-accent">Pergunta {index + 1}</span>
          
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-gray-50 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
              Escolher
            </button>
            <button
              type="button"
              onClick={carregarNovaPergunta}
              className="flex items-center gap-1.5 rounded-lg border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent transition-colors hover:bg-accent/10 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 8v6h6"></path></svg>
              Sugerir
            </button>
          </div>
        </header>

        {/* --- CLÁSSICO --- */}
        {modo === "classico" && (
          <div className="flex w-full flex-col gap-3">
            <textarea
              value={pergunta.texto}
              onChange={(e) => {
                autoResize(e);
                setPergunta({ ...pergunta, texto: e.target.value });
              }}
              rows={2}
              className="w-full resize-none overflow-hidden bg-transparent px-2 py-1 text-sm font-medium text-foreground outline-none focus:border-b focus:border-accent"
            />
            <div className="grid grid-cols-2 gap-2 w-full">
              {pergunta.opcoes?.map((opt: string, i: number) => (
                <div 
                  key={i} 
                  onClick={() => setRespostaCorreta(i)}
                  className={`flex cursor-pointer items-start gap-2 rounded-xl border p-3 transition-colors ${
                    respostaCorreta === i 
                      ? 'border-accent bg-accent/5' 
                      : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  <input type="radio" checked={respostaCorreta === i} readOnly className="accent-accent shrink-0 mt-0.5 cursor-pointer" />
                  <textarea
                    value={opt}
                    onClick={(e) => e.stopPropagation()} // Permite clicar no texto para editar sem selecionar a resposta se não quiseres
                    onChange={(e) => {
                      autoResize(e);
                      const novasOpcoes = [...pergunta.opcoes];
                      novasOpcoes[i] = e.target.value;
                      setPergunta({ ...pergunta, opcoes: novasOpcoes });
                    }}
                    rows={2}
                    className="w-full resize-none overflow-hidden bg-transparent text-sm font-medium text-foreground outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- FACTO OU FAKE --- */}
        {modo === "facto-ou-fake" && (
          <div className="flex w-full flex-col gap-3">
            <textarea
              value={pergunta.texto}
              onChange={(e) => {
                autoResize(e);
                setPergunta({ ...pergunta, texto: e.target.value });
              }}
              rows={2}
              className="w-full resize-none overflow-hidden bg-transparent px-2 py-1 text-sm font-medium text-foreground outline-none focus:border-b focus:border-accent"
            />
            <div className="grid w-full grid-cols-2 gap-3 mt-1">
              <button 
                onClick={() => setRespostaCorreta("verdadeiro")}
                className={`rounded-xl border py-3 text-sm font-bold transition-all active:scale-95 ${
                  respostaCorreta === "verdadeiro" 
                    ? "border-green-600 bg-green-600 text-white shadow-sm" 
                    : "border-gray-200 bg-white text-gray-600 hover:border-green-500 hover:text-green-600"
                }`}
              >
                Verdadeiro
              </button>
              <button 
                onClick={() => setRespostaCorreta("falso")}
                className={`rounded-xl border py-3 text-sm font-bold transition-all active:scale-95 ${
                  respostaCorreta === "falso" 
                    ? "border-red-600 bg-red-600 text-white shadow-sm" 
                    : "border-gray-200 bg-white text-gray-600 hover:border-red-500 hover:text-red-600"
                }`}
              >
                Falso
              </button>
            </div>
          </div>
        )}

        {/* --- ESTE OU AQUELE --- */}
        {modo === "este-ou-aquele" && (
          <div className="flex w-full flex-col gap-2">
            <textarea
              value={pergunta.texto || "Qual é a tua escolha certa?"}
              onChange={(e) => {
                autoResize(e);
                setPergunta({ ...pergunta, texto: e.target.value });
              }}
              rows={1}
              className="w-full resize-none overflow-hidden bg-transparent text-sm font-medium text-muted mb-1 px-2 outline-none focus:border-b focus:border-accent"
            />
            <div className="flex w-full items-center gap-3">
              <div 
                onClick={() => setRespostaCorreta("A")}
                className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border px-3 py-3 transition-all ${
                  respostaCorreta === "A" 
                    ? "border-accent bg-accent/5" 
                    : "border-gray-200 bg-gray-50 hover:border-gray-300"
                }`}
              >
                <input type="radio" checked={respostaCorreta === "A"} readOnly className="accent-accent shrink-0" />
                <textarea
                  value={pergunta.opcaoA}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => {
                    autoResize(e);
                    setPergunta({ ...pergunta, opcaoA: e.target.value });
                  }}
                  rows={2}
                  className="w-full resize-none overflow-hidden bg-transparent text-center text-sm font-medium text-foreground outline-none"
                />
              </div>
              <span className="text-xs font-bold text-muted uppercase shrink-0">ou</span>
              <div 
                onClick={() => setRespostaCorreta("B")}
                className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border px-3 py-3 transition-all ${
                  respostaCorreta === "B" 
                    ? "border-accent bg-accent/5" 
                    : "border-gray-200 bg-gray-50 hover:border-gray-300"
                }`}
              >
                <input type="radio" checked={respostaCorreta === "B"} readOnly className="accent-accent shrink-0" />
                <textarea
                  value={pergunta.opcaoB}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => {
                    autoResize(e);
                    setPergunta({ ...pergunta, opcaoB: e.target.value });
                  }}
                  rows={2}
                  className="w-full resize-none overflow-hidden bg-transparent text-center text-sm font-medium text-foreground outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* --- LACUNA --- */}
        {modo === "lacuna" && (
          <div className="flex w-full flex-col gap-1">
            <p className="text-xs text-muted mb-1 px-2">Atenção: Usa ___ (3 underscores) para marcar o espaço em branco.</p>
            <textarea
              value={pergunta.texto}
              onChange={(e) => {
                autoResize(e);
                setPergunta({ ...pergunta, texto: e.target.value });
              }}
              rows={3}
              className="w-full resize-none overflow-hidden rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-sm text-foreground leading-loose outline-none focus:border-accent"
            />
            <div className="mt-2 flex items-center gap-2 px-2">
              <span className="text-sm font-semibold text-foreground">A tua resposta (Certa):</span>
              <input 
                type="text" 
                value={respostaCorreta || ""}
                onChange={(e) => setRespostaCorreta(e.target.value)}
                placeholder="Ex: resposta" 
                className="w-[150px] border-b-2 border-accent bg-transparent text-sm font-bold text-accent outline-none placeholder:font-normal placeholder:text-accent/50 focus:border-accent" 
              />
            </div>
          </div>
        )}

        {/* --- TOP 3 --- */}
        {modo === "top-3" && (
          <div className="flex w-full flex-col gap-2">
            <textarea
              value={pergunta.texto}
              onChange={(e) => {
                autoResize(e);
                setPergunta({ ...pergunta, texto: e.target.value });
              }}
              rows={2}
              className="w-full resize-none overflow-hidden bg-transparent px-2 py-1 text-sm font-medium text-foreground outline-none focus:border-b focus:border-accent"
            />
            <div className="flex w-full flex-col gap-3 mt-1">
              {["🥇", "🥈", "🥉"].map((medal, i) => (
                <div key={`${pergunta.id}-opt-${i}`} className="flex items-center gap-3">
                  <span className="text-xl shrink-0">{medal}</span>
                  <input 
                    type="text" 
                    value={respostasTop3[i] || ""} 
                    onChange={(e) => {
                      const novas = [...respostasTop3];
                      novas[i] = e.target.value;
                      setRespostasTop3(novas);
                    }}
                    placeholder={`Adicionar ${i + 1}º lugar`} 
                    className="block w-full flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-foreground outline-none focus:border-accent focus:bg-white focus:ring-1 focus:ring-accent transition-all" 
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- TERMÓMETRO --- */}
        {modo === "termometro" && (
          <div className="flex w-full flex-col gap-3">
            <textarea
              value={pergunta.texto}
              onChange={(e) => {
                autoResize(e);
                setPergunta({ ...pergunta, texto: e.target.value });
              }}
              rows={2}
              className="w-full resize-none overflow-hidden bg-transparent px-2 py-1 text-sm font-medium text-foreground outline-none focus:border-b focus:border-accent"
            />
            <div className="flex w-full items-center gap-4 mt-1">
              <input 
                type="range" 
                min={pergunta.min} 
                max={pergunta.max} 
                value={valorTermometro}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setValorTermometro(val);
                  setRespostaCorreta(val);
                }}
                className="w-full flex-1 accent-accent cursor-pointer" 
              />
              <div className="flex shrink-0 items-center gap-1 rounded-lg bg-gray-100 border border-gray-200 px-3 py-1.5 shadow-sm">
                <span className="text-lg font-bold text-accent">{valorTermometro}</span>
                <span className="text-xs font-medium text-muted">{pergunta.unidade}</span>
              </div>
            </div>
          </div>
        )}
      </article>

      {/* JANELA (MODAL) DA LISTA COMPLETA DE PERGUNTAS */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-2xl">
            <header className="flex items-center justify-between border-b border-gray-200 p-5">
              <h3 className="text-lg font-bold text-foreground">Escolher Pergunta</h3>
              <button onClick={() => setIsModalOpen(false)} className="rounded-full p-2 text-muted hover:bg-gray-100 hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </header>
            
            <div className="flex flex-col gap-2 overflow-y-auto p-4 scrollbar-hide">
              {todasPerguntas.map((p: any) => {
                const isSelected = p.id === pergunta.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      // Ao selecionar da lista, repomos uma cópia nova
                      setPergunta(JSON.parse(JSON.stringify(p)));
                      setIsModalOpen(false);
                    }}
                    className={`flex items-start gap-3 rounded-xl border p-4 text-left text-sm transition-all active:scale-[0.98] ${
                      isSelected 
                        ? "border-accent bg-accent/5 text-foreground" 
                        : "border-gray-200 bg-gray-50 text-muted hover:border-gray-300 hover:text-foreground"
                    }`}
                  >
                    <span className="mt-0.5">{isSelected ? "✅" : "⚪"}</span>
                    <span>{formatarTextoLista(p)}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}