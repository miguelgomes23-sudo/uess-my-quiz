"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation"; 
import { Suspense, useState, useEffect, useCallback } from "react";
import PerguntaCard from "@/components/PerguntaCard"; 
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, collection, addDoc } from "firebase/firestore";

// IMPORTAÇÃO DOS COMPONENTES GLOBAIS
import TopHeader from "@/components/TopHeader";
import BottomNav from "@/components/BottomNav";

// --- O CATÁLOGO CENTRALIZADO ---
const TEMPLATES_POR_RAIZ: Record<string, { id: string; nome: string; icone: string }[]> = {
  texto: [
    { id: "classico", nome: "O Clássico (4 Opções)", icone: "📋" },
    { id: "duelo", nome: "O Duelo (2 Opções)", icone: "⚔️" },
    { id: "verdadeiro-falso", nome: "Verdadeiro ou Falso", icone: "✅" },
    { id: "facto-ou-fake", nome: "Facto ou Fake", icone: "🕵️" },
    { id: "intruso", nome: "O Intruso", icone: "👽" },
    { id: "percentagem", nome: "Percentagem", icone: "💯" },
    { id: "avaliacao", nome: "Avaliação", icone: "⭐" },
    { id: "termometro", nome: "Termómetro", icone: "🌡️" },
    { id: "top-3", nome: "Top 3", icone: "🏆" },
    { id: "tier-list", nome: "Tier List", icone: "📊" },
    { id: "linha-tempo", nome: "Linha do Tempo", icone: "⏳" },
    { id: "lacuna", nome: "A Lacuna", icone: "✏️" },
    { id: "forca", nome: "A Forca", icone: "🔤" },
    { id: "este-ou-aquele", nome: "Este ou Aquele", icone: "⚖️" },
    { id: "poll", nome: "Votação (Poll)", icone: "🗳️" },
  ],
  imagem: [
    { id: "quem-e", nome: "Quem é este?", icone: "👤" },
    { id: "qual-verdadeiro", nome: "Qual é o verdadeiro?", icone: "🖼️" },
    { id: "descobre-palavra", nome: "Descobre a Palavra", icone: "🔤" },
    { id: "zoom-extremo", nome: "Zoom Extremo", icone: "🔍" },
    { id: "silhueta", nome: "Silhueta / Sombra", icone: "👥" },
    { id: "erro-oculto", nome: "O Erro Oculto", icone: "❌" },
    { id: "pares-perfeitos", nome: "Pares Perfeitos", icone: "🧩" },
    { id: "peca-falta", nome: "A Peça em Falta", icone: "🧩" },
  ],
  audio: [
    { id: "que-som", nome: "Que som é este?", icone: "🔊" },
    { id: "quem-voz", nome: "De quem é a voz?", icone: "🎤" },
    { id: "adivinha-musica", nome: "Adivinha a Música", icone: "🎵" },
    { id: "continua-letra", nome: "Continua a Letra", icone: "🎶" },
  ],
  video: [
    { id: "o-que-acontece", nome: "O que acontece a seguir?", icone: "⏸️" },
    { id: "finais-alternativos", nome: "Finais Alternativos", icone: "🔀" },
    { id: "teste-atencao", nome: "Teste de Atenção", icone: "👁️" },
  ],
  logica: [
    { id: "equacao-tempo", nome: "Equação com Tempo", icone: "⏱️" },
    { id: "valor-imagens", nome: "O Valor das Imagens", icone: "🍎" },
    { id: "sequencia-numerica", nome: "Sequência Numérica", icone: "🔢" },
    { id: "sequencia-emojis", nome: "Sequência de Emojis", icone: "🙃" },
  ],
  desafios: [
    { id: "historia-coletiva", nome: "A História Coletiva", icone: "✍️" },
    { id: "pior-conselho", nome: "O Pior Conselho Possível", icone: "🤦" },
    { id: "tribunal-publico", nome: "O Tribunal Público", icone: "⚖️" },
    { id: "batalha-eliminacao", nome: "Batalha de Eliminação", icone: "⚔️" },
    { id: "mente-colmeia", nome: "A Mente Colmeia", icone: "🐝" },
  ]
};

const obterRaizDoModo = (modoId: string): string => {
  for (const [raiz, templates] of Object.entries(TEMPLATES_POR_RAIZ)) {
    if (templates.some(t => t.id === modoId)) return raiz;
  }
  return "texto"; 
};

const obterNomeDoModo = (modoId: string): string => {
  for (const templates of Object.values(TEMPLATES_POR_RAIZ)) {
    const found = templates.find(t => t.id === modoId);
    if (found) return found.nome;
  }
  return "Formato Desconhecido";
};

type PerguntaData = {
  id: string; 
  modo: string;
  isValid: boolean;
  dados: any; 
};

function PerguntasContent() {
  const searchParams = useSearchParams();
  const router = useRouter(); 
  const modoInicial = searchParams.get("modo") || "classico";
  
  const raizAtual = obterRaizDoModo(modoInicial);
  const templatesDisponiveis = TEMPLATES_POR_RAIZ[raizAtual] || [];
  const isDesafio = raizAtual === "desafios";

  const [perguntas, setPerguntas] = useState<PerguntaData[]>([
    { id: crypto.randomUUID(), modo: modoInicial, isValid: false, dados: null }
  ]);

  const [descricaoPost, setDescricaoPost] = useState("");
  const [mostrarErro, setMostrarErro] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdate = useCallback((id: string, isValid: boolean, dados: any) => {
    setPerguntas((prev) => {
      const index = prev.findIndex((p) => p.id === id);
      if (index === -1) return prev;

      const atual = prev[index];
      if (atual.isValid === isValid && JSON.stringify(atual.dados) === JSON.stringify(dados)) {
        return prev;
      }

      const novas = [...prev];
      novas[index] = { ...atual, isValid, dados };
      return novas;
    });

    setMostrarErro(false);
  }, []);

  const adicionarMesmoFormato = () => {
    if (perguntas.length >= 12 || isDesafio) return;
    const ultimoModo = perguntas[perguntas.length - 1].modo;
    setPerguntas([...perguntas, { id: crypto.randomUUID(), modo: ultimoModo, isValid: false, dados: null }]);
  };

  const adicionarOutroFormato = (novoModo: string) => {
    if (perguntas.length >= 12 || isDesafio) return;
    setPerguntas([...perguntas, { id: crypto.randomUUID(), modo: novoModo, isValid: false, dados: null }]);
    setIsModalOpen(false);
  };

  const removerPergunta = (id: string) => {
    if (perguntas.length === 1 || isDesafio) return; 
    setPerguntas(prev => prev.filter(p => p.id !== id));
  };

  const autoResize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleGerarLink = async () => {
    const todasValidas = perguntas.every(p => p.isValid);

    if (!todasValidas) {
      setMostrarErro(true);
      return; 
    }

    const user = auth.currentUser;
    if (!user) {
      alert("Precisas de fazer login para guardar!");
      router.push("/login");
      return;
    }

    setIsSaving(true);

    try {
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.exists() ? userDoc.data() : { nome: "Anónimo", username: "anonimo" };

      const perguntasFirebase = perguntas.map(p => ({
        modo: p.modo,
        ...p.dados
      }));

      const docRef = await addDoc(collection(db, "quizzes"), {
        criadorUid: user.uid,
        criadorNome: userData.nome,
        criadorUsername: userData.username,
        criadorFoto: userData.fotoPerfil || "",
        descricao: descricaoPost.trim(), 
        raiz: raizAtual,
        quantidade: perguntasFirebase.length,
        perguntas: perguntasFirebase,
        dataCriacao: new Date().toISOString(),
        jogadas: 0 
      });

      router.push(`/sucesso?id=${docRef.id}`);
    } catch (error) {
      console.error("Erro ao guardar:", error);
      alert("Houve um erro. Tenta novamente.");
      setIsSaving(false);
    }
  };

  // LARGURA UNIFORMIZADA: max-w-[600px]
  return (
    <div className="flex min-h-dvh w-full flex-col sm:mx-auto sm:max-w-[600px] bg-gray-50/50">
      
      {/* 1. COMPONENTE REUTILIZÁVEL: CABEÇALHO COM SETA DE VOLTAR */}
      <TopHeader 
        titulo={isDesafio ? "Criar Desafio" : "Criar Perguntas"} 
        mostrarVoltar={true} 
      />

      <main className="flex flex-col w-full pb-32 px-6 pt-6 gap-6">
        
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {isDesafio ? (
               <>Cria o teu <span className="text-accent">desafio</span></>
            ) : (
               <>Cria as tuas <span className="text-accent">perguntas</span></>
            )}
          </h1>
          <p className="text-sm text-muted">
            Começaste no formato <span className="font-medium text-foreground">{obterNomeDoModo(modoInicial)}</span>. {!isDesafio && "Podes misturar!"}
          </p>
        </div>

        <div className="flex flex-col gap-8 mt-2">
          {perguntas.map((p, index) => (
            <div key={p.id} className="relative">
              {perguntas.length > 1 && !isDesafio && (
                <button 
                  onClick={() => removerPergunta(p.id)}
                  className="absolute -right-2 -top-2 z-10 flex size-8 items-center justify-center rounded-full bg-red-100 text-red-600 shadow-sm transition-transform hover:scale-110 active:scale-95 border border-red-200"
                  title="Remover pergunta"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              )}
              
              <PerguntaCard 
                index={index} 
                modo={p.modo} 
                idPergunta={p.id}
                onUpdate={handleUpdate} 
              />
            </div>
          ))}

          {perguntas.length < 12 && !isDesafio && (
            <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-gray-300 bg-white p-8 text-center transition-colors hover:bg-gray-50">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-foreground">Adicionar Pergunta</h3>
                <p className="text-sm text-muted">Tens {perguntas.length} de 12 perguntas possíveis.</p>
              </div>
              
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center mt-2">
                <button 
                  onClick={adicionarMesmoFormato} 
                  className="flex-1 rounded-xl bg-accent px-4 py-3.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-accent-hover active:scale-95"
                >
                  + Mesmo Formato
                </button>
                <button 
                  onClick={() => setIsModalOpen(true)} 
                  className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm font-bold text-foreground shadow-sm transition-colors hover:bg-gray-50 active:scale-95"
                >
                  + Outro Formato
                </button>
              </div>
            </div>
          )}
        </div>

        <section className="mt-2 flex flex-col gap-2">
          <label className="text-sm font-bold text-muted ml-1">O que queres dizer sobre isto?</label>
          <textarea
            value={descricaoPost}
            onChange={(e) => {
              autoResize(e);
              setDescricaoPost(e.target.value);
            }}
            placeholder="Ex: Aposto que ninguém vai acertar na última pergunta! 😂"
            rows={2}
            className="w-full resize-none overflow-hidden bg-white rounded-2xl p-4 text-sm font-medium text-foreground outline-none border border-gray-200 focus:border-accent shadow-sm transition-colors placeholder:text-muted/60"
          />
        </section>

        <footer className="flex flex-col gap-4">
          {mostrarErro && (
            <div className="rounded-xl border border-red-100 bg-red-50 p-4 text-center animate-in fade-in zoom-in duration-200">
              <p className="text-sm font-medium text-red-600">
                Oops! Falta-te alguma coisa. Verifica se preencheste tudo e escolheste as opções necessárias! 👀
              </p>
            </div>
          )}
          
          <button 
            onClick={handleGerarLink} 
            disabled={isSaving}
            className="inline-flex min-h-16 w-full items-center justify-center rounded-2xl bg-accent px-6 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover active:scale-[0.98] disabled:opacity-50"
          >
            {isSaving 
              ? (isDesafio ? "A publicar Desafio..." : "A guardar o teu Quiz...") 
              : (isDesafio ? "Publicar Desafio" : `Guardar Quiz (${perguntas.length} perguntas)`)
            }
          </button>
        </footer>
      </main>

      {/* 2. COMPONENTE REUTILIZÁVEL: BARRA DE NAVEGAÇÃO INFERIOR */}
      <BottomNav />

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 backdrop-blur-sm sm:items-center">
          <div className="flex max-h-[85vh] w-full max-w-md flex-col overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-2xl animate-in slide-in-from-bottom-10 sm:slide-in-from-bottom-0 sm:zoom-in-95">
            <header className="flex items-center justify-between border-b border-gray-100 p-6">
              <h3 className="text-lg font-bold text-foreground">Escolhe o Formato</h3>
              <button onClick={() => setIsModalOpen(false)} className="rounded-full p-2 text-muted hover:bg-gray-100 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </header>
            
            <div className="grid grid-cols-1 gap-2 overflow-y-auto p-4 scrollbar-hide">
              {templatesDisponiveis.map((tmpl) => (
                <button
                  key={tmpl.id}
                  onClick={() => adicionarOutroFormato(tmpl.id)}
                  className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4 text-left transition-colors hover:border-accent hover:bg-white active:scale-[0.98]"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm text-xl border border-gray-100">
                    {tmpl.icone}
                  </span>
                  <span className="text-sm font-bold text-foreground">{tmpl.nome}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function PerguntasPage() {
  return (
    <Suspense fallback={<div className="flex min-h-dvh items-center justify-center text-muted">A carregar...</div>}>
      <PerguntasContent />
    </Suspense>
  );
}