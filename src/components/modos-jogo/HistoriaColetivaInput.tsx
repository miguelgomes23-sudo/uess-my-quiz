"use client";
import { useState, useEffect } from "react";

type Props = { index: number; onUpdate: (isValid: boolean, data: any) => void; };

export default function HistoriaColetivaInput({ index, onUpdate }: Props) {
  const [charsPorPessoa, setCharsPorPessoa] = useState<number>(40);
  const [tamanhoTotal, setTamanhoTotal] = useState<number>(600);

  const opcoesPessoa = [
    { valor: 20, label: "20" },
    { valor: 40, label: "40" },
    { valor: 60, label: "60" }
  ];

  const opcoesTotal = [
    { valor: 300, label: "300" },
    { valor: 600, label: "600" },
    { valor: 1200, label: "1200" }
  ];

  useEffect(() => {
    // A validação do texto principal agora é feita apenas pelo PerguntaCard
    onUpdate(true, { charsPorPessoa, tamanhoTotal });
  }, [charsPorPessoa, tamanhoTotal, onUpdate]);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-muted uppercase tracking-widest text-center">Máx. Caracteres por Pessoa</label>
          <div className="flex gap-2 w-full mt-1">
            {opcoesPessoa.map((op) => (
              <button
                key={op.valor}
                onClick={() => setCharsPorPessoa(op.valor)}
                className={`flex-1 flex items-center justify-center rounded-xl py-3 transition-all shadow-sm border-2 ${charsPorPessoa === op.valor ? "bg-accent/10 border-accent text-accent" : "bg-white border-gray-100 text-muted hover:border-gray-300"}`}
              >
                <span className="font-bold text-lg leading-none">{op.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-muted uppercase tracking-widest text-center">Total de Caracteres do Texto</label>
          <div className="flex gap-2 w-full mt-1">
            {opcoesTotal.map((op) => (
              <button
                key={op.valor}
                onClick={() => setTamanhoTotal(op.valor)}
                className={`flex-1 flex items-center justify-center rounded-xl py-3 transition-all shadow-sm border-2 ${tamanhoTotal === op.valor ? "bg-accent/10 border-accent text-accent" : "bg-white border-gray-100 text-muted hover:border-gray-300"}`}
              >
                <span className="font-bold text-lg leading-none">{op.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-2xl bg-gray-900 p-4 text-white shadow-lg">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-xl">👥</div>
        <div className="flex flex-col">
          <span className="text-sm font-bold">Resumo do Desafio</span>
          <span className="text-xs text-gray-300">
            A história vai fechar após cerca de <b>{Math.floor(tamanhoTotal / charsPorPessoa)} a {Math.floor(tamanhoTotal / 20)}</b> participações!
          </span>
        </div>
      </div>
    </div>
  );
}