"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

// --- TIPOS DA ESTRUTURA ---
type Template = {
  id: string;
  title: string;
  description: string;
};

type QuizModel = {
  id: string;
  title: string;
  templates: Template[];
};

type QuizRoot = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  models: QuizModel[];
};

// --- A ÁRVORE COMPLETA DE CRIAÇÃO ---
const quizTree: QuizRoot[] = [
  {
    id: "texto",
    title: "📝 Texto & Clássicos",
    description: "A base da rede social, rápida de criar e rápida de jogar.",
    icon: (
      <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    models: [
      {
        id: "multiplas-escolhas",
        title: "Múltiplas Escolhas",
        templates: [
          { id: "classico", title: "O Clássico (4 Opções)", description: "Pergunta com 1 resposta certa e 3 erradas." },
          { id: "duelo", title: "O Duelo (2 Opções)", description: "Pergunta com apenas A ou B." },
          { id: "verdadeiro-falso", title: "Verdadeiro ou Falso", description: "Afirmações universais." },
          { id: "facto-ou-fake", title: "Facto ou Fake", description: "Focado em fofocas, mitos ou curiosidades." },
          { id: "intruso", title: "O Intruso", description: "Uma lista onde uma das palavras não faz sentido." },
        ]
      },
      {
        id: "escalas-medidas",
        title: "Escalas & Medidas",
        templates: [
          { id: "percentagem", title: "Percentagem (0 a 100%)", description: "Que probabilidade há de eu..." },
          { id: "avaliacao", title: "Avaliação (1 a 10)", description: "Que nota dou a este filme?" },
          { id: "termometro", title: "Nível (Termómetro)", description: "Quão irritado fico com..." },
        ]
      },
      {
        id: "rankings-ordenacao",
        title: "Rankings & Ordenação",
        templates: [
          { id: "top-3", title: "Top 3 (Ouro, Prata, Bronze)", description: "Os meus 3 favoritos." },
          { id: "tier-list", title: "Tier List (S, A, B, C)", description: "Colocar elementos em níveis de qualidade." },
          { id: "linha-tempo", title: "Linha do Tempo", description: "Ordena do mais antigo para o mais recente." },
        ]
      },
      {
        id: "escrita-completar",
        title: "Escrita & Completar",
        templates: [
          { id: "lacuna", title: "A Lacuna", description: "A minha maior fobia é ___ e ninguém sabe." },
          { id: "forca", title: "A Forca (Letras Soltas)", description: "Descobre a palavra: _ A _ I O." },
        ]
      },
      {
        id: "opiniao-comunidade",
        title: "Opinião & Comunidade",
        templates: [
          { id: "este-ou-aquele", title: "Este ou Aquele", description: "O que preferes? Frio ou Calor?" },
          { id: "poll", title: "Votação Pública (Poll)", description: "Onde deve ser o nosso próximo jantar de grupo?" },
        ]
      }
    ]
  },
  {
    id: "imagem",
    title: "🖼️ Imagem & Observação",
    description: "Para quem tem fotos prontas a usar.",
    icon: (
      <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    models: [
      {
        id: "identificacao-visual",
        title: "Identificação Visual",
        templates: [
          { id: "quem-e", title: "Quem é este?", description: "1 Imagem -> 4 Nomes de texto." },
          { id: "qual-verdadeiro", title: "Qual é o verdadeiro?", description: "1 Texto -> 4 Imagens." },
          { id: "descobre-palavra", title: "Descobre a Palavra", description: "1 Imagem -> Input Escrito." },
        ]
      },
      {
        id: "detalhe-misterio",
        title: "Detalhe & Mistério",
        templates: [
          { id: "zoom-extremo", title: "Zoom Extremo", description: "Imagem ampliada para adivinhar o que é." },
          { id: "silhueta", title: "Silhueta / Sombra", description: "Imagem escurecida ou contorno." },
          { id: "erro-oculto", title: "O Erro Oculto", description: "Tocar na zona específica da imagem." },
        ]
      },
      {
        id: "associacao",
        title: "Associação",
        templates: [
          { id: "pares-perfeitos", title: "Pares Perfeitos", description: "Ligar 2 colunas com linhas." },
          { id: "peca-falta", title: "A Peça em Falta", description: "Imagem cortada e 4 opções para encaixar." },
        ]
      }
    ]
  },
  {
    id: "audio",
    title: "🎧 Áudio & Som",
    description: "Faz upload ou grava sons na hora.",
    icon: (
      <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" x2="12" y1="19" y2="22" />
      </svg>
    ),
    models: [
      {
        id: "reconhecimento-audio",
        title: "Reconhecimento",
        templates: [
          { id: "que-som", title: "Que som é este?", description: "Som estranho com 4 opções." },
          { id: "quem-voz", title: "De quem é a voz?", description: "Áudio de um amigo ou famoso." },
          { id: "adivinha-musica", title: "Adivinha a Música", description: "Toca 5 segundos de um refrão." },
        ]
      },
      {
        id: "completar-audio",
        title: "Completar",
        templates: [
          { id: "continua-letra", title: "Continua a Letra", description: "O áudio para a meio da frase para o jogador completar." },
        ]
      }
    ]
  },
  {
    id: "video",
    title: "🎬 Vídeo & Ação",
    description: "Micro-clipes curtos e reações.",
    icon: (
      <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" x2="7" y1="2" y2="22" />
        <line x1="17" x2="17" y1="2" y2="22" />
        <line x1="2" x2="7" y1="12" y2="12" />
        <line x1="2" x2="7" y1="7" y2="7" />
        <line x1="2" x2="7" y1="17" y2="17" />
        <line x1="17" x2="22" y1="12" y2="12" />
        <line x1="17" x2="22" y1="7" y2="7" />
        <line x1="17" x2="22" y1="17" y2="17" />
      </svg>
    ),
    models: [
      {
        id: "previsao",
        title: "Previsão",
        templates: [
          { id: "o-que-acontece", title: "O que acontece a seguir?", description: "O vídeo congela um segundo antes do momento clímax." },
          { id: "finais-alternativos", title: "Finais Alternativos", description: "O vídeo para com caminhos possíveis em texto." },
        ]
      },
      {
        id: "memoria-visual",
        title: "Memória Visual",
        templates: [
          { id: "teste-atencao", title: "Teste de Atenção", description: "O vídeo corre, desaparece, e pergunta um detalhe." },
        ]
      }
    ]
  },
  {
    id: "logica",
    title: "🧮 Matemática & Lógica",
    description: "Pequenos desafios de QI para quebrar o gelo.",
    icon: (
      <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <line x1="9" x2="15" y1="9" y2="9" />
        <line x1="9" x2="15" y1="15" y2="15" />
        <line x1="12" x2="12" y1="12" y2="18" />
      </svg>
    ),
    models: [
      {
        id: "calculo-rapido",
        title: "Cálculo Rápido",
        templates: [
          { id: "equacao-tempo", title: "Equação com Tempo", description: "O relógio começa a contar assim que a pergunta abre." },
          { id: "valor-imagens", title: "O Valor das Imagens", description: "Clássico puzzle matemático com símbolos." },
        ]
      },
      {
        id: "padroes",
        title: "Padrões",
        templates: [
          { id: "sequencia-numerica", title: "Sequência Numérica", description: "Descobrir o número que falta na linha." },
          { id: "sequencia-emojis", title: "Sequência de Emojis", description: "Descobrir o padrão oculto das figuras." },
        ]
      }
    ]
  }
];

export default function ModoPage() {
  const router = useRouter();
  
  // GESTÃO DO FLUXO (WIZARD)
  // Passo 1: Escolher Raiz | Passo 2: Escolher Modelo | Passo 3: Escolher Template
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedRootId, setSelectedRootId] = useState<string | null>(null);
  const [selectedModelId, setSelectedModelId] = useState<string | null>(null);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null);

  // Auxiliares para encontrar os objetos selecionados
  const currentRoot = quizTree.find(r => r.id === selectedRootId);
  const currentModel = currentRoot?.models.find(m => m.id === selectedModelId);

  const handleNext = () => {
    if (step === 1 && selectedRootId) {
      setStep(2);
      setSelectedModelId(null);
      setSelectedTemplateId(null);
    } else if (step === 2 && selectedModelId) {
      setStep(3);
      setSelectedTemplateId(null);
    } else if (step === 3 && selectedTemplateId) {
      router.push(`/criar/perguntas?modo=${selectedTemplateId}`);
    }
  };

  const handleBack = () => {
    if (step === 3) {
      setStep(2);
      setSelectedTemplateId(null);
    } else if (step === 2) {
      setStep(1);
      setSelectedModelId(null);
    } else {
      router.back();
    }
  };

  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(124,58,237,0.35),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/3 size-64 rounded-full bg-accent/10 blur-3xl sm:size-80"
      />

      <main className="relative flex flex-1 flex-col px-6 pb-10 pt-6 sm:mx-auto sm:max-w-lg sm:px-8 sm:pt-8 lg:max-w-xl w-full">
        <header className="flex items-center justify-between">
          <button
            onClick={handleBack}
            aria-label="Voltar"
            className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-surface text-muted transition-colors hover:border-ring/40 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:scale-95"
          >
            <svg aria-hidden xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex items-center gap-2">
            <div className={`h-2.5 w-8 rounded-full ${step >= 1 ? 'bg-accent' : 'bg-surface border border-white/10'}`}></div>
            <div className={`h-2.5 w-8 rounded-full ${step >= 2 ? 'bg-accent' : 'bg-surface border border-white/10'}`}></div>
            <div className={`h-2.5 w-8 rounded-full ${step >= 3 ? 'bg-accent' : 'bg-surface border border-white/10'}`}></div>
          </div>
        </header>

        <section className="mt-8 flex flex-col gap-6 sm:mt-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {step === 1 && <>Escolhe a <span className="text-accent">Mídia</span></>}
              {step === 2 && <>Escolhe a <span className="text-accent">Mecânica</span></>}
              {step === 3 && <>Escolhe o <span className="text-accent">Template</span></>}
            </h1>
            <p className="text-base text-muted sm:text-lg">
              {step === 1 && "Qual vai ser a base das tuas perguntas?"}
              {step === 2 && `Modelos para a raiz: ${currentRoot?.title.replace(/[^a-zA-ZÀ-ÿ\s&]/g, "")}`}
              {step === 3 && `Templates do modelo: ${currentModel?.title}`}
            </p>
          </div>

          <ul className="flex flex-col gap-3" role="list">
            {/* RENDERIZAR PASSO 1: RAÍZES */}
            {step === 1 && quizTree.map((root) => {
              const isSelected = selectedRootId === root.id;
              return (
                <li key={root.id}>
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedRootId(root.id)}
                    className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-all active:scale-[0.99] sm:p-5 ${
                      isSelected
                        ? "border-accent bg-accent/15 shadow-[0_0_0_1px_rgba(124,58,237,0.4),0_8px_24px_rgba(124,58,237,0.2)]"
                        : "border-white/10 bg-surface hover:border-ring/40 hover:bg-surface/80"
                    } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`}
                  >
                    <span className={`flex size-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isSelected ? "bg-accent text-accent-foreground" : "bg-background text-ring"
                    }`}>
                      {root.icon}
                    </span>
                    <span className="flex flex-col gap-1 pt-0.5">
                      <span className="text-base font-semibold text-foreground sm:text-lg">{root.title}</span>
                      <span className="text-sm leading-relaxed text-muted">{root.description}</span>
                    </span>
                  </button>
                </li>
              );
            })}

            {/* RENDERIZAR PASSO 2: MODELOS */}
            {step === 2 && currentRoot?.models.map((model) => {
              const isSelected = selectedModelId === model.id;
              return (
                <li key={model.id}>
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedModelId(model.id)}
                    className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-all active:scale-[0.99] sm:p-5 ${
                      isSelected
                        ? "border-accent bg-accent/15 shadow-[0_0_0_1px_rgba(124,58,237,0.4),0_8px_24px_rgba(124,58,237,0.2)]"
                        : "border-white/10 bg-surface hover:border-ring/40 hover:bg-surface/80"
                    } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`}
                  >
                    <span className="flex flex-col gap-1 pt-0.5">
                      <span className="text-base font-semibold text-foreground sm:text-lg">{model.title}</span>
                      <span className="text-sm leading-relaxed text-muted">{model.templates.length} templates disponíveis</span>
                    </span>
                  </button>
                </li>
              );
            })}

            {/* RENDERIZAR PASSO 3: TEMPLATES */}
            {step === 3 && currentModel?.templates.map((template) => {
              const isSelected = selectedTemplateId === template.id;
              return (
                <li key={template.id}>
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedTemplateId(template.id)}
                    className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-all active:scale-[0.99] sm:p-5 ${
                      isSelected
                        ? "border-accent bg-accent/15 shadow-[0_0_0_1px_rgba(124,58,237,0.4),0_8px_24px_rgba(124,58,237,0.2)]"
                        : "border-white/10 bg-surface hover:border-ring/40 hover:bg-surface/80"
                    } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`}
                  >
                    <span className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      isSelected ? "border-accent bg-accent text-accent-foreground" : "border-muted bg-transparent"
                    }`}>
                      {isSelected && <svg className="size-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="text-base font-semibold text-foreground">{template.title}</span>
                      <span className="text-sm leading-relaxed text-muted">{template.description}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <footer className="mt-auto pt-8">
          <button
            type="button"
            disabled={(step === 1 && !selectedRootId) || (step === 2 && !selectedModelId) || (step === 3 && !selectedTemplateId)}
            onClick={handleNext}
            className={`inline-flex min-h-14 w-full items-center justify-center rounded-2xl px-6 text-base font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:text-lg ${
              (step === 1 && selectedRootId) || (step === 2 && selectedModelId) || (step === 3 && selectedTemplateId)
                ? "bg-accent text-accent-foreground shadow-[0_8px_32px_rgba(124,58,237,0.45)] hover:bg-accent-hover active:scale-[0.98]"
                : "cursor-not-allowed bg-surface text-muted border border-white/5"
            }`}
          >
            {step === 3 ? "Começar a Criar" : "Continuar"}
          </button>
        </footer>
      </main>
    </div>
  );
}