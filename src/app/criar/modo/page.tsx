"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import TopHeader from "@/components/TopHeader";
import BottomNav from "@/components/BottomNav";

// --- TIPOS DA ESTRUTURA ---
type Template = { id: string; title: string; description: string; tags?: string[] };
type QuizModel = { id: string; title: string; templates: Template[]; };
type QuizRoot = { id: string; title: string; description: string; icon: React.ReactNode; colorClass: string; models: QuizModel[]; };

// --- A ÁRVORE COMPLETA COM CORES E TAGS ---
const quizTree: QuizRoot[] = [
  {
    id: "texto", title: "📝 Texto & Clássicos", description: "A base da rede social, rápida de criar e rápida de jogar.",
    colorClass: "bg-blue-50 text-blue-500",
    icon: (<svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>),
    models: [
      { id: "multiplas-escolhas", title: "Múltiplas Escolhas", templates: [ 
        { id: "classico", title: "O Clássico (4 Opções)", description: "Pergunta com 1 resposta certa e 3 erradas.", tags: ["🔥 Popular", "⏱️ Rápido"] }, 
        { id: "duelo", title: "O Duelo (2 Opções)", description: "Pergunta com apenas A ou B.", tags: ["⚔️ Direto"] }, 
        { id: "verdadeiro-falso", title: "Verdadeiro ou Falso", description: "Afirmações universais.", tags: ["✅ Clássico"] }, 
        { id: "facto-ou-fake", title: "Facto ou Fake", description: "Focado em fofocas, mitos ou curiosidades.", tags: ["🕵️ Curiosidade"] }, 
        { id: "intruso", title: "O Intruso", description: "Uma lista onde uma das palavras não faz sentido.", tags: ["👽 Desafiante"] } 
      ] },
      { id: "escalas-medidas", title: "Escalas & Medidas", templates: [ 
        { id: "percentagem", title: "Percentagem (0 a 100%)", description: "Que probabilidade há de eu...", tags: ["💯 Precisão"] }, 
        { id: "avaliacao", title: "Avaliação (1 a 10)", description: "Que nota dou a este filme?", tags: ["⭐ Opinião"] }, 
        { id: "termometro", title: "Nível (Termómetro)", description: "Quão irritado fico com...", tags: ["🌡️ Humor"] } 
      ] },
      { id: "rankings-ordenacao", title: "Rankings & Ordenação", templates: [ 
        { id: "top-3", title: "Top 3 (Ouro, Prata, Bronze)", description: "Os meus 3 favoritos.", tags: ["🏆 Ranking"] }, 
        { id: "tier-list", title: "Tier List (S, A, B, C)", description: "Colocar elementos em níveis de qualidade.", tags: ["📊 Complexo"] }, 
        { id: "linha-tempo", title: "Linha do Tempo", description: "Ordena do mais antigo para o mais recente.", tags: ["⏳ Memória"] } 
      ] },
      { id: "escrita-completar", title: "Escrita & Completar", templates: [ 
        { id: "lacuna", title: "A Lacuna", description: "A minha maior fobia é ___ e ninguém sabe.", tags: ["✏️ Criativo"] }, 
        { id: "forca", title: "A Forca (Letras Soltas)", description: "Descobre a palavra: _ A _ I O.", tags: ["🔤 Puzzle"] } 
      ] },
      { id: "opiniao-comunidade", title: "Opinião & Comunidade", templates: [ 
        { id: "este-ou-aquele", title: "Este ou Aquele", description: "O que preferes? Frio ou Calor?", tags: ["⚖️ Debate"] }, 
        { id: "poll", title: "Votação Pública (Poll)", description: "Onde deve ser o nosso próximo jantar de grupo?", tags: ["🗳️ Grupo"] } 
      ] }
    ]
  },
  {
    id: "imagem", title: "🖼️ Imagem & Observação", description: "Para quem tem fotos prontas a usar.",
    colorClass: "bg-emerald-50 text-emerald-500",
    icon: (<svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>),
    models: [
      { id: "identificacao-visual", title: "Identificação Visual", templates: [ 
        { id: "quem-e", title: "Quem é este?", description: "1 Imagem -> 4 Nomes de texto.", tags: ["👤 Visual"] }, 
        { id: "qual-verdadeiro", title: "Qual é o verdadeiro?", description: "1 Texto -> 4 Imagens.", tags: ["🖼️ Observação"] }, 
        { id: "descobre-palavra", title: "Descobre a Palavra", description: "1 Imagem -> Input Escrito.", tags: ["⌨️ Difícil"] } 
      ] },
      { id: "detalhe-misterio", title: "Detalhe & Mistério", templates: [ 
        { id: "zoom-extremo", title: "Zoom Extremo", description: "Imagem ampliada para adivinhar o que é.", tags: ["🔍 Mistério"] }, 
        { id: "silhueta", title: "Silhueta / Sombra", description: "Imagem escurecida ou contorno.", tags: ["👥 Mistério"] }, 
        { id: "erro-oculto", title: "O Erro Oculto", description: "Tocar na zona específica da imagem.", tags: ["❌ Observação"] } 
      ] },
      { id: "associacao", title: "Associação", templates: [ 
        { id: "pares-perfeitos", title: "Pares Perfeitos", description: "Ligar 2 colunas com linhas.", tags: ["🧩 Puzzle"] }, 
        { id: "peca-falta", title: "A Peça em Falta", description: "Imagem cortada e 4 opções para encaixar.", tags: ["🧩 Puzzle"] } 
      ] }
    ]
  },
  {
    id: "audio", title: "🎧 Áudio & Som", description: "Faz upload ou grava sons na hora.",
    colorClass: "bg-amber-50 text-amber-500",
    icon: (<svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></svg>),
    models: [
      { id: "reconhecimento-audio", title: "Reconhecimento", templates: [ 
        { id: "que-som", title: "Que som é este?", description: "Som estranho com 4 opções.", tags: ["🔊 Difícil"] }, 
        { id: "quem-voz", title: "De quem é a voz?", description: "Áudio de um amigo ou famoso.", tags: ["🎤 Social"] }, 
        { id: "adivinha-musica", title: "Adivinha a Música", description: "Toca 5 segundos de um refrão.", tags: ["🎵 Divertido"] } 
      ] },
      { id: "completar-audio", title: "Completar", templates: [ 
        { id: "continua-letra", title: "Continua a Letra", description: "O áudio para a meio da frase para o jogador completar.", tags: ["🎶 Criativo"] } 
      ] }
    ]
  },
  {
    id: "video", title: "🎬 Vídeo & Ação", description: "Micro-clipes curtos e reações.",
    colorClass: "bg-rose-50 text-rose-500",
    icon: (<svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" /><line x1="7" x2="7" y1="2" y2="22" /><line x1="17" x2="17" y1="2" y2="22" /><line x1="2" x2="7" y1="12" y2="12" /><line x1="2" x2="7" y1="7" y2="7" /><line x1="2" x2="7" y1="17" y2="17" /><line x1="17" x2="22" y1="12" y2="12" /><line x1="17" x2="22" y1="7" y2="7" /><line x1="17" x2="22" y1="17" y2="17" /></svg>),
    models: [
      { id: "previsao", title: "Previsão", templates: [ 
        { id: "o-que-acontece", title: "O que acontece a seguir?", description: "O vídeo congela um segundo antes do momento clímax.", tags: ["⏸️ Tensão"] }, 
        { id: "finais-alternativos", title: "Finais Alternativos", description: "O vídeo para com caminhos possíveis em texto.", tags: ["🔀 Escolhas"] } 
      ] },
      { id: "memoria-visual", title: "Memória Visual", templates: [ 
        { id: "teste-atencao", title: "Teste de Atenção", description: "O vídeo corre, desaparece, e pergunta um detalhe.", tags: ["👁️ Foco", "🔥 Difícil"] } 
      ] }
    ]
  },
  {
    id: "logica", title: "🧮 Matemática & Lógica", description: "Pequenos desafios de QI para quebrar o gelo.",
    colorClass: "bg-indigo-50 text-indigo-500",
    icon: (<svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><line x1="9" x2="15" y1="9" y2="9" /><line x1="9" x2="15" y1="15" y2="15" /><line x1="12" x2="12" y1="12" y2="18" /></svg>),
    models: [
      { id: "calculo-rapido", title: "Cálculo Rápido", templates: [ 
        { id: "equacao-tempo", title: "Equação com Tempo", description: "O relógio começa a contar assim que a pergunta abre.", tags: ["⏱️ Stress"] }, 
        { id: "valor-imagens", title: "O Valor das Imagens", description: "Clássico puzzle matemático com símbolos.", tags: ["🍎 Puzzle"] } 
      ] },
      { id: "padroes", title: "Padrões", templates: [ 
        { id: "sequencia-numerica", title: "Sequência Numérica", description: "Descobrir o número que falta na linha.", tags: ["🔢 QI"] }, 
        { id: "sequencia-emojis", title: "Sequência de Emojis", description: "Descobrir o padrão oculto das figuras.", tags: ["🙃 Visual"] } 
      ] }
    ]
  },
  {
    id: "desafios", title: "🔥 Desafios & Social", description: "Dinâmicas colaborativas e virais para interagir com a comunidade.",
    colorClass: "bg-orange-50 text-orange-500",
    icon: (<svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>),
    models: [
      { id: "criatividade-colaborativa", title: "Criatividade Colaborativa", templates: [ 
        { id: "historia-coletiva", title: "A História Coletiva", description: "Escreve o início. A comunidade continua com limites.", tags: ["✍️ Viral"] }, 
        { id: "pior-conselho", title: "O Pior Conselho Possível", description: "Pede ajuda. Vence quem der o pior conselho.", tags: ["🤦 Divertido"] } 
      ] },
      { id: "debates-votacoes", title: "Debates & Votações", templates: [ 
        { id: "tribunal-publico", title: "O Tribunal Público", description: "Lança um debate. Obrigatório votar para poder comentar.", tags: ["⚖️ Polémico"] }, 
        { id: "batalha-eliminacao", title: "Batalha de Eliminação", description: "Survivor diário. A comunidade vota em quem quer salvar.", tags: ["⚔️ Dinâmico"] } 
      ] },
      { id: "puzzles-grupo", title: "Puzzles de Grupo", templates: [ 
        { id: "mente-colmeia", title: "A Mente Colmeia", description: "Lista fechada. Só 1 tentativa para adivinhar.", tags: ["🐝 Equipa"] } 
      ] }
    ]
  }
];

export default function ModoPage() {
  const router = useRouter();
  
  // GESTÃO DO FLUXO (WIZARD)
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedRootId, setSelectedRootId] = useState<string | null>(null);
  const [selectedModelId, setSelectedModelId] = useState<string | null>(null);

  const currentRoot = quizTree.find(r => r.id === selectedRootId);
  const currentModel = currentRoot?.models.find(m => m.id === selectedModelId);

  // LÓGICA RÁPIDA (1 CLIQUE = AVANÇA IMEDIATAMENTE)
  const handleSelectRoot = (id: string) => {
    setSelectedRootId(id);
    setStep(2);
  };

  const handleSelectModel = (id: string) => {
    setSelectedModelId(id);
    setStep(3);
  };

  const handleSelectTemplate = (id: string) => {
    router.push(`/criar/perguntas?modo=${id}`);
  };

  const handleBack = () => {
    if (step === 3) setStep(2);
    else if (step === 2) setStep(1);
  };

  return (
    <div className="flex min-h-dvh w-full flex-col sm:mx-auto sm:max-w-[600px] bg-gray-50/50">
      
      <TopHeader 
        titulo="Criar Publicação" 
        mostrarVoltar={step > 1} 
        onVoltar={handleBack} 
      />

      <main className="flex flex-col w-full pb-32 px-6 pt-6 gap-6">
        
        {/* Barra de Progresso */}
        <div className="flex items-center gap-2 justify-center mb-2">
          <div className={`h-2 w-12 rounded-full transition-all duration-300 ${step >= 1 ? 'bg-accent' : 'bg-gray-200'}`}></div>
          <div className={`h-2 w-12 rounded-full transition-all duration-300 ${step >= 2 ? 'bg-accent' : 'bg-gray-200'}`}></div>
          <div className={`h-2 w-12 rounded-full transition-all duration-300 ${step >= 3 ? 'bg-accent' : 'bg-gray-200'}`}></div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {step === 1 && <>Escolhe a <span className="text-accent">Mídia</span></>}
            {step === 2 && <>Escolhe a <span className="text-accent">Mecânica</span></>}
            {step === 3 && <>Escolhe o <span className="text-accent">Template</span></>}
          </h1>
          <p className="text-sm text-muted sm:text-base">
            {step === 1 && "Qual vai ser a base da tua publicação?"}
            {step === 2 && `Modelos disponíveis na categoria ${currentRoot?.title.replace(/[^a-zA-ZÀ-ÿ\s&]/g, "")}`}
            {step === 3 && `Formatos do modelo selecionado`}
          </p>
        </div>

        <ul className="flex flex-col gap-4" role="list">
          
          {/* PASSO 1: RAÍZES (Ícones Coloridos e Cartões Altos) */}
          {step === 1 && quizTree.map((root) => (
            <li key={root.id}>
              <button
                type="button"
                onClick={() => handleSelectRoot(root.id)}
                className="group flex w-full items-center gap-5 rounded-[24px] border border-gray-200 bg-white p-5 text-left transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md active:scale-95"
              >
                <span className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${root.colorClass} transition-transform group-hover:scale-110`}>
                  {root.icon}
                </span>
                <div className="flex flex-col gap-1.5">
                  <span className="text-lg font-bold text-foreground">{root.title}</span>
                  <span className="text-sm leading-relaxed text-muted">{root.description}</span>
                </div>
              </button>
            </li>
          ))}

          {/* PASSO 2: MODELOS */}
          {step === 2 && currentRoot?.models.map((model) => (
            <li key={model.id}>
              <button
                type="button"
                onClick={() => handleSelectModel(model.id)}
                className="flex w-full items-start gap-4 rounded-[24px] border border-gray-200 bg-white p-6 text-left transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md active:scale-[0.98]"
              >
                <div className="flex flex-col gap-1.5">
                  <span className="text-lg font-bold text-foreground">{model.title}</span>
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-muted w-max">
                    {model.templates.length} Templates
                  </span>
                </div>
              </button>
            </li>
          ))}

          {/* PASSO 3: TEMPLATES (Com Sistema de Tags) */}
          {step === 3 && currentModel?.templates.map((template) => (
            <li key={template.id}>
              <button
                type="button"
                onClick={() => handleSelectTemplate(template.id)}
                className="group flex w-full flex-col gap-4 rounded-[24px] border border-gray-200 bg-white p-6 text-left transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md active:scale-[0.98]"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 transition-colors group-hover:border-accent group-hover:bg-accent/10" />
                  <div className="flex flex-col gap-1">
                    <span className="text-base font-bold text-foreground">{template.title}</span>
                    <span className="text-sm leading-relaxed text-muted">{template.description}</span>
                  </div>
                </div>
                
                {/* Sistema de Tags */}
                {template.tags && (
                  <div className="flex flex-wrap gap-2 ml-10">
                    {template.tags.map(tag => (
                      <span key={tag} className="rounded-lg bg-gray-50 border border-gray-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted group-hover:border-accent/20 group-hover:text-accent transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </button>
            </li>
          ))}
          
        </ul>
      </main>

      <BottomNav />
    </div>
  );
}