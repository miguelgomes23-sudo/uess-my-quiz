"use client";

import { useState, useEffect } from "react";

// TEXTO
import ClassicoInput from "@/components/modos-jogo/ClassicoInput";
import DueloInput from "@/components/modos-jogo/DueloInput";
import VerdadeiroFalsoInput from "@/components/modos-jogo/VerdadeiroFalsoInput";
import FactoFakeInput from "@/components/modos-jogo/FactoFakeInput";
import IntrusoInput from "@/components/modos-jogo/IntrusoInput";
import PercentagemInput from "@/components/modos-jogo/PercentagemInput";
import AvaliacaoInput from "@/components/modos-jogo/AvaliacaoInput";
import TermometroInput from "@/components/modos-jogo/TermometroInput";
import Top3Input from "@/components/modos-jogo/Top3Input";
import TierListInput from "@/components/modos-jogo/TierListInput";
import LinhaTempoInput from "@/components/modos-jogo/LinhaTempoInput";
import LacunaInput from "@/components/modos-jogo/LacunaInput";
import ForcaInput from "@/components/modos-jogo/ForcaInput";
import EsteAqueleInput from "@/components/modos-jogo/EsteAqueleInput";
import PollInput from "@/components/modos-jogo/PollInput";

// IMAGEM
import QuemEInput from "@/components/modos-jogo/QuemEInput";
import QualVerdadeiroInput from "@/components/modos-jogo/QualVerdadeiroInput";
import DescobrePalavraInput from "@/components/modos-jogo/DescobrePalavraInput";
import ZoomExtremoInput from "@/components/modos-jogo/ZoomExtremoInput";
import SilhuetaInput from "@/components/modos-jogo/SilhuetaInput";
import ErroOcultoInput from "@/components/modos-jogo/ErroOcultoInput";
import ParesPerfeitosInput from "@/components/modos-jogo/ParesPerfeitosInput";
import PecaFaltaInput from "@/components/modos-jogo/PecaFaltaInput";

// ÁUDIO
import QueSomInput from "@/components/modos-jogo/QueSomInput";
import QuemVozInput from "@/components/modos-jogo/QuemVozInput";
import AdivinhaMusicaInput from "@/components/modos-jogo/AdivinhaMusicaInput";
import ContinuaLetraInput from "@/components/modos-jogo/ContinuaLetraInput";

// VÍDEO
import OQueAconteceInput from "@/components/modos-jogo/OQueAconteceInput";
import FinaisAlternativosInput from "@/components/modos-jogo/FinaisAlternativosInput";
import TesteAtencaoInput from "@/components/modos-jogo/TesteAtencaoInput";

// LÓGICA
import EquacaoTempoInput from "@/components/modos-jogo/EquacaoTempoInput";
import ValorImagensInput from "@/components/modos-jogo/ValorImagensInput";
import SequenciaNumericaInput from "@/components/modos-jogo/SequenciaNumericaInput";
import SequenciaEmojisInput from "@/components/modos-jogo/SequenciaEmojisInput";

// O DICIONÁRIO DE DICAS INTELIGENTES
const PLACEHOLDERS: Record<string, string> = {
  "classico": "Ex: Qual é a minha comida favorita?",
  "duelo": "Ex: O que é que eu prefiro fazer num sábado?",
  "verdadeiro-falso": "Ex: Eu já saltei de paraquedas.",
  "facto-ou-fake": "Ex: É facto ou fake que eu odeio sushi?",
  "intruso": "Ex: Qual destas cidades eu nunca visitei?",
  "percentagem": "Ex: Qual é a probabilidade de eu chegar atrasado?",
  "avaliacao": "Ex: Que nota dou eu ao último filme da Marvel?",
  "termometro": "Ex: Quão stressado eu fico no trânsito?",
  "top-3": "Ex: Quais são os meus 3 filmes favoritos de sempre?",
  "tier-list": "Ex: Ordena estes estilos musicais do melhor para o pior.",
  "linha-tempo": "Ex: Ordena as minhas viagens da mais antiga para a mais recente.",
  "lacuna": "Ex: A minha maior fobia secreta é ___ e ninguém sabe.",
  "forca": "Ex: Descobre o nome do meu primeiro animal de estimação.",
  "este-ou-aquele": "Ex: O que preferes?",
  "poll": "Ex: Onde devíamos ir jantar no fim de semana?",
  "quem-e": "Ex: Quem é esta figura pública?",
  "qual-verdadeiro": "Ex: Qual destas imagens é a versão original?",
  "descobre-palavra": "Ex: O que está representado nesta foto?",
  "zoom-extremo": "Ex: A que objeto pertence esta textura?",
  "silhueta": "Ex: De quem é este contorno?",
  "erro-oculto": "Ex: Onde está a falha lógica nesta fotografia?",
  "pares-perfeitos": "Ex: Liga a capital ao seu país correspondente.",
  "peca-falta": "Ex: Qual destas peças completa o quadro?",
  "que-som": "Ex: Que objeto faz este barulho estranho?",
  "quem-voz": "Ex: De quem é a voz nesta gravação?",
  "adivinha-musica": "Ex: Qual é o nome desta música clássica?",
  "continua-letra": "Ex: Escreve a palavra que se segue na música.",
  "o-que-acontece": "Ex: Qual vai ser o desfecho deste vídeo?",
  "finais-alternativos": "Ex: Que caminho deve a personagem seguir?",
  "teste-atencao": "Ex: Quantos chapéus vermelhos apareceram no vídeo?",
  "equacao-tempo": "Ex: Qual é o resultado matemático?",
  "valor-imagens": "Ex: Qual é o valor da maçã nesta equação?",
  "sequencia-numerica": "Ex: Que número completa a sequência lógica?",
  "sequencia-emojis": "Ex: Qual é o padrão que liga estes emojis?"
};

type PerguntaCardProps = {
  index: number;
  modo: string;
  idPergunta: string;
  onUpdate: (id: string, isValid: boolean, data: any) => void;
  onRemove?: (id: string) => void;
};

export default function PerguntaCard({ index, modo, idPergunta, onUpdate, onRemove }: PerguntaCardProps) {
  const [pergunta, setPergunta] = useState<string>("");
  const [modoIsValid, setModoIsValid] = useState<boolean>(false);
  const [modoData, setModoData] = useState<any>(null);

  const placeholderTexto = PLACEHOLDERS[modo] || "Escreve aqui a tua pergunta...";

  const handleModoUpdate = (isValid: boolean, data: any) => {
    setModoIsValid(isValid);
    setModoData(data);
  };

  useEffect(() => {
    const isPerguntaPreenchida = pergunta.trim() !== "";
    const isValid = isPerguntaPreenchida && modoIsValid;
    onUpdate(idPergunta, isValid, { perguntaTexto: pergunta, ...modoData });
  }, [pergunta, modoIsValid, modoData, idPergunta, onUpdate]);

  const autoResize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const renderComponenteModo = () => {
    switch (modo) {
      // TEXTO
      case "classico": return <ClassicoInput index={index} onUpdate={handleModoUpdate} />;
      case "duelo": return <DueloInput index={index} onUpdate={handleModoUpdate} />;
      case "verdadeiro-falso": return <VerdadeiroFalsoInput index={index} onUpdate={handleModoUpdate} />;
      case "facto-ou-fake": return <FactoFakeInput index={index} onUpdate={handleModoUpdate} />;
      case "intruso": return <IntrusoInput index={index} onUpdate={handleModoUpdate} />;
      case "percentagem": return <PercentagemInput index={index} onUpdate={handleModoUpdate} />;
      case "avaliacao": return <AvaliacaoInput index={index} onUpdate={handleModoUpdate} />;
      case "termometro": return <TermometroInput index={index} onUpdate={handleModoUpdate} />;
      case "top-3": return <Top3Input index={index} onUpdate={handleModoUpdate} />;
      case "tier-list": return <TierListInput index={index} onUpdate={handleModoUpdate} />;
      case "linha-tempo": return <LinhaTempoInput index={index} onUpdate={handleModoUpdate} />;
      case "lacuna": return <LacunaInput index={index} onUpdate={handleModoUpdate} />;
      case "forca": return <ForcaInput index={index} onUpdate={handleModoUpdate} />;
      case "este-ou-aquele": return <EsteAqueleInput index={index} onUpdate={handleModoUpdate} />;
      case "poll": return <PollInput index={index} onUpdate={handleModoUpdate} />;

      // IMAGEM
      case "quem-e": return <QuemEInput index={index} onUpdate={handleModoUpdate} />;
      case "qual-verdadeiro": return <QualVerdadeiroInput index={index} onUpdate={handleModoUpdate} />;
      case "descobre-palavra": return <DescobrePalavraInput index={index} onUpdate={handleModoUpdate} />;
      case "zoom-extremo": return <ZoomExtremoInput index={index} onUpdate={handleModoUpdate} />;
      case "silhueta": return <SilhuetaInput index={index} onUpdate={handleModoUpdate} />;
      case "erro-oculto": return <ErroOcultoInput index={index} onUpdate={handleModoUpdate} />;
      case "pares-perfeitos": return <ParesPerfeitosInput index={index} onUpdate={handleModoUpdate} />;
      case "peca-falta": return <PecaFaltaInput index={index} onUpdate={handleModoUpdate} />;

      // ÁUDIO
      case "que-som": return <QueSomInput index={index} onUpdate={handleModoUpdate} />;
      case "quem-voz": return <QuemVozInput index={index} onUpdate={handleModoUpdate} />;
      case "adivinha-musica": return <AdivinhaMusicaInput index={index} onUpdate={handleModoUpdate} />;
      case "continua-letra": return <ContinuaLetraInput index={index} onUpdate={handleModoUpdate} />;

      // VÍDEO
      case "o-que-acontece": return <OQueAconteceInput index={index} onUpdate={handleModoUpdate} />;
      case "finais-alternativos": return <FinaisAlternativosInput index={index} onUpdate={handleModoUpdate} />;
      case "teste-atencao": return <TesteAtencaoInput index={index} onUpdate={handleModoUpdate} />;

      // LÓGICA
      case "equacao-tempo": return <EquacaoTempoInput index={index} onUpdate={handleModoUpdate} />;
      case "valor-imagens": return <ValorImagensInput index={index} onUpdate={handleModoUpdate} />;
      case "sequencia-numerica": return <SequenciaNumericaInput index={index} onUpdate={handleModoUpdate} />;
      case "sequencia-emojis": return <SequenciaEmojisInput index={index} onUpdate={handleModoUpdate} />;

      default: return null;
    }
  };

  return (
    <article className="relative flex flex-col gap-4 w-full rounded-[24px] border border-gray-200 bg-white p-5 shadow-sm sm:p-6 transition-all hover:border-gray-300">
      
      {onRemove && (
        <button
          onClick={() => onRemove(idPergunta)}
          className="absolute -right-3 -top-3 z-10 flex size-8 items-center justify-center rounded-full bg-red-50 text-red-500 transition-transform hover:scale-110 hover:bg-red-100 active:scale-95 border border-red-100"
          title="Remover pergunta"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      )}

      <header className="flex w-full items-center mb-1">
        <span className="text-sm font-bold text-accent uppercase tracking-widest">
          Pergunta {index + 1}
        </span>
      </header>

      <div className="flex w-full flex-col gap-1">
        {modo === "lacuna" && (
          <p className="text-xs font-semibold text-muted px-2">Usa ___ (3 underscores) para marcar o espaço em branco.</p>
        )}
        <textarea
          value={pergunta}
          onChange={(e) => {
            autoResize(e);
            setPergunta(e.target.value);
          }}
          placeholder={placeholderTexto}
          rows={2}
          className="w-full resize-none overflow-hidden bg-gray-50 rounded-xl px-4 py-4 text-base font-medium text-foreground outline-none border border-transparent focus:border-accent focus:bg-white shadow-inner transition-colors placeholder:text-muted/60"
        />
      </div>

      {renderComponenteModo()}
    </article>
  );
}