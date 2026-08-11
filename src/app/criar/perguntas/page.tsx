"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation"; 
import { Suspense, useState, useEffect } from "react";
// Verifica se o PerguntaCard está na pasta ui ou na raiz de components. Ajusta se necessário.
import PerguntaCard from "@/components/PerguntaCard"; 
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, collection, addDoc } from "firebase/firestore";

// --- O CATÁLOGO CENTRALIZADO (Escalável para todas as raízes) ---
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
  ]
};

// Funções para descobrir dinamicamente a família e o nome do template escolhido
const obterRaizDoModo = (modoId: string): string => {
  for (const [raiz, templates] of Object.entries(TEMPLATES_POR_RAIZ)) {
    if (templates.some(t => t.id === modoId)) return raiz;
  }
  return "texto"; // Fallback de segurança
};

const obterNomeDoModo = (modoId: string): string => {
  for (const templates of Object.values(TEMPLATES_POR_RAIZ)) {
    const found = templates.find(t => t.id === modoId);
    if (found) return found.nome;
  }
  return "Formato Desconhecido";
};

type PerguntaData = {
  id: string; // ID único só para o React renderizar as chaves
  modo: string;
  isValid: boolean;
  dados: any; // O conteúdo real que o componente vai preencher
};

function PerguntasContent() {
  const searchParams = useSearchParams();
  const router = useRouter(); 
  const modoInicial = searchParams.get("modo") || "classico";
  
  // Descobre dinamicamente a que raiz (família) pertence a primeira escolha do utilizador
  const raizAtual = obterRaizDoModo(modoInicial);
  const templatesDisponiveis = TEMPLATES_POR_RAIZ[raizAtual] || [];

  // ARRAY DINÂMICO DE PERGUNTAS
  const [perguntas, setPerguntas] = useState<PerguntaData[]>([
    { id: crypto.randomUUID(), modo: modoInicial, isValid: false, dados: null }
  ]);

  const [mostrarErro, setMostrarErro] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- LÓGICA DE ADICIONAR / ATUALIZAR / REMOVER ---

  const handleUpdate = (id: string, isValid: boolean, dados: any) => {
    setPerguntas(prev => prev.map(p => p.id === id ? { ...p, isValid, dados } : p));
    setMostrarErro(false);
  };

  const adicionarMesmoFormato = () => {
    if (perguntas.length >= 12) return;
    const ultimoModo = perguntas[perguntas.length - 1].modo;
    setPerguntas([...perguntas, { id: crypto.randomUUID(), modo: ultimoModo, isValid: false, dados: null }]);
  };

  const adicionarOutroFormato = (novoModo: string) => {
    if (perguntas.length >= 12) return;
    setPerguntas([...perguntas, { id: crypto.randomUUID(), modo: novoModo, isValid: false, dados: null }]);
    setIsModalOpen(false);
  };

  const removerPergunta = (id: string) => {
    if (perguntas.length === 1) return; // Não deixa apagar a última
    setPerguntas(prev => prev.filter(p => p.id !== id));
  };

  // --- LÓGICA DE GUARDAR NO FIREBASE ---

  const handleGerarLink = async () => {
    const todasValidas = perguntas.every(p => p.isValid);

    if (!todasValidas) {
      setMostrarErro(true);
      return; 
    }

    const user = auth.currentUser;
    if (!user) {
      alert("Precisas de fazer login para guardar um quiz!");
      router.push("/login");
      return;
    }

    setIsSaving(true);

    try {
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.exists() ? userDoc.data() : { nome: "Anónimo", username: "anonimo" };

      // Prepara as perguntas limpas para o Firebase
      const perguntasFirebase = perguntas.map(p => ({
        modo: p.modo,
        ...p.dados
      }));

      // Guarda o quiz com a indicação exata de qual "Raiz" pertence para gerirmos a interface de jogo depois
      const docRef = await addDoc(collection(db, "quizzes"), {
        criadorUid: user.uid,
        criadorNome: userData.nome,
        criadorUsername: userData.username,
        criadorFoto: userData.fotoPerfil || "",
        raiz: raizAtual, // Guarda a raiz dinamicamente!
        quantidade: perguntasFirebase.length,
        perguntas: perguntasFirebase,
        dataCriacao: new Date().toISOString(),
        jogadas: 0 
      });

      router.push(`/sucesso?id=${docRef.id}`);
    } catch (error) {
      console.error("Erro ao guardar o quiz:", error);
      alert("Houve um erro ao guardar o quiz. Tenta novamente.");
      setIsSaving(false);
    }
  };

  return (
    <div className="relative flex min-h-dvh flex-col bg-background">
      <main className="relative flex flex-1 flex-col px-6 pb-10 pt-6 sm:mx-auto sm:max-w-lg sm:px-8 sm:pt-8 w-full">
        <header className="flex items-center">
          <button 
            onClick={() => router.back()}
            aria-label="Voltar"
            className="inline-flex size-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-muted transition-colors hover:bg-gray-50 active:scale-95 shadow-sm"
          >
            <svg aria-hidden xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
          </button>
        </header>

        <section className="mt-8 flex flex-col gap-6 sm:mt-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Cria as tuas <span className="text-accent">perguntas</span>
            </h1>
            <p className="text-sm text-muted">
              Começaste no formato <span className="font-medium text-foreground">{obterNomeDoModo(modoInicial)}</span>. Podes misturar!
            </p>
          </div>

          <div className="flex flex-col gap-8 mt-2">
            {/* RENDERIZA A LISTA DINÂMICA DE PERGUNTAS */}
            {perguntas.map((p, index) => (
              <div key={p.id} className="relative">
                {/* Botão de apagar pergunta */}
                {perguntas.length > 1 && (
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

            {/* A CAIXA GRANDE DE ADICIONAR */}
            {perguntas.length < 12 && (
              <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center transition-colors hover:bg-gray-100/50">
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
        </section>

        <footer className="mt-8 flex flex-col gap-4">
          {mostrarErro && (
            <div className="rounded-xl border border-red-100 bg-red-50 p-4 text-center animate-in fade-in zoom-in duration-200">
              <p className="text-sm font-medium text-red-600">
                Oops! Falta-te alguma coisa. Verifica se preencheste as perguntas e escolheste as respostas certas em todas! 👀
              </p>
            </div>
          )}
          
          <button 
            onClick={handleGerarLink} 
            disabled={isSaving}
            className="inline-flex min-h-16 w-full items-center justify-center rounded-2xl bg-accent px-6 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover active:scale-[0.98] disabled:opacity-50"
          >
            {isSaving ? "A guardar o teu Quiz..." : `Guardar Quiz (${perguntas.length} perguntas)`}
          </button>
        </footer>
      </main>

      {/* MODAL (DINÂMICO PARA A RAIZ ATUAL) */}
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
              {/* Renderiza apenas os templates que fazem parte da Raiz (família) atual */}
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