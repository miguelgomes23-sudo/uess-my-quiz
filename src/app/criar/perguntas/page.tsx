"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation"; 
import { Suspense, useState, useEffect } from "react";
import PerguntaCard from "@/components/PerguntaCard";
import { obterCatalogo } from "@/lib/gerenciador-perguntas";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, collection, addDoc } from "firebase/firestore";

const QUANTIDADES_PERGUNTAS = [6, 8, 12];
const MODO_LABELS: Record<string, string> = {
  classico: "O Clássico",
  "facto-ou-fake": "Facto ou Fake",
  "este-ou-aquele": "Este ou Aquele",
  lacuna: "Lacuna",
  "top-3": "Top 3",
  termometro: "Termómetro",
};

function PerguntasContent() {
  const searchParams = useSearchParams();
  const router = useRouter(); 
  const modo = searchParams.get("modo") || "classico";
  const [quantidade, setQuantidade] = useState(6);

  const catalogo = obterCatalogo(modo);
  const [categoriaAtiva, setCategoriaAtiva] = useState(catalogo[0]?.id || "");
  const subcategorias = catalogo.find(c => c.id === categoriaAtiva)?.subcategorias || [];
  const [subcategoriaAtiva, setSubcategoriaAtiva] = useState(subcategorias[0]?.id || "");

  // SISTEMA DE VALIDAÇÃO E DADOS
  const [perguntasStatus, setPerguntasStatus] = useState<boolean[]>([]);
  const [perguntasData, setPerguntasData] = useState<any[]>([]);
  const [mostrarErro, setMostrarErro] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleCategoriaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const novaCatId = e.target.value;
    setCategoriaAtiva(novaCatId);
    const novasSubcats = catalogo.find(c => c.id === novaCatId)?.subcategorias || [];
    setSubcategoriaAtiva(novasSubcats[0]?.id || "");
  };

  const handleUpdate = (index: number, isValid: boolean, data: any) => {
    setPerguntasStatus(prev => {
      const novo = [...prev];
      novo[index] = isValid;
      return novo;
    });
    
    setPerguntasData(prev => {
      const novo = [...prev];
      novo[index] = data;
      return novo;
    });

    if (isValid) setMostrarErro(false);
  };

  const handleGerarLink = async () => {
    const statusAtuais = perguntasStatus.slice(0, quantidade);
    const dadosAtuais = perguntasData.slice(0, quantidade);
    
    const todasValidas = statusAtuais.every(status => status === true);
    const todasPreenchidas = todasValidas && statusAtuais.length === quantidade;

    if (!todasPreenchidas) {
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
      // Vai buscar os dados do criador para o Feed ficar completo
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.exists() ? userDoc.data() : { nome: "Anónimo", username: "anonimo" };

      // Guarda o quiz na Firebase
      const docRef = await addDoc(collection(db, "quizzes"), {
        criadorUid: user.uid,
        criadorNome: userData.nome,
        criadorUsername: userData.username,
        criadorFoto: userData.fotoPerfil || "",
        modo: modo,
        categoria: categoriaAtiva,
        subcategoria: subcategoriaAtiva,
        quantidade: quantidade,
        perguntas: dadosAtuais,
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

  useEffect(() => {
    setPerguntasStatus([]);
    setPerguntasData([]);
    setMostrarErro(false);
  }, [quantidade, modo, categoriaAtiva, subcategoriaAtiva]);

  return (
    <div className="relative flex min-h-dvh flex-col bg-background">
      <main className="relative flex flex-1 flex-col px-6 pb-10 pt-6 sm:mx-auto sm:max-w-lg sm:px-8 sm:pt-8 lg:max-w-xl">
        <header className="flex items-center">
          <Link href="/criar/modo" className="inline-flex size-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-muted transition-colors hover:bg-gray-50 active:scale-95 shadow-sm">
            <svg aria-hidden xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
          </Link>
        </header>

        <section className="mt-8 flex flex-col gap-6 sm:mt-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              As tuas <span className="text-accent">perguntas</span>
            </h1>
            <p className="text-sm text-muted">Formato: <span className="font-medium text-foreground">{MODO_LABELS[modo] || "O Clássico"}</span></p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="categoria" className="text-sm font-medium text-muted">Categoria</label>
              <div className="relative">
                <select id="categoria" value={categoriaAtiva} onChange={handleCategoriaChange} className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm font-semibold text-foreground outline-none focus:border-accent shadow-sm">
                  {catalogo.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.icone} {cat.nome}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subcategoria" className="text-sm font-medium text-muted">Subcategoria</label>
              <div className="relative">
                <select id="subcategoria" value={subcategoriaAtiva} onChange={(e) => setSubcategoriaAtiva(e.target.value)} className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm font-semibold text-foreground outline-none focus:border-accent shadow-sm">
                  {subcategorias.map((sub: any) => (
                    <option key={sub.id} value={sub.id}>{sub.nome}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>
          </div>

          <fieldset className="flex flex-col gap-2 mt-2">
            <legend className="text-sm font-medium text-muted">Quantas perguntas?</legend>
            <div className="grid grid-cols-3 gap-2">
              {QUANTIDADES_PERGUNTAS.map((option) => (
                <button key={option} type="button" onClick={() => setQuantidade(option)} className={`min-h-12 rounded-xl border text-base font-semibold transition-all shadow-sm ${quantidade === option ? "border-accent bg-accent text-white" : "border-gray-200 bg-white text-foreground hover:bg-gray-50"}`}>
                  {option}
             </button>
              ))}
            </div>
          </fieldset>

          <div className="flex flex-col gap-5 mt-2">
            {Array.from({ length: quantidade }, (_, index) => (
              <PerguntaCard 
                key={`${index}-${subcategoriaAtiva}`} 
                index={index} 
                modo={modo} 
                categoriaId={categoriaAtiva} 
                subcategoriaId={subcategoriaAtiva} 
                onUpdate={handleUpdate} 
              />
            ))}
          </div>
        </section>

        <footer className="mt-8 flex flex-col gap-4">
          {mostrarErro && (
            <div className="rounded-xl border border-red-100 bg-red-50 p-4 text-center animate-in fade-in zoom-in duration-200">
              <p className="text-sm font-medium text-red-600">
                Oops! Falta-te alguma coisa. Verifica se escolheste a resposta certa (ou preencheste tudo) em todas as perguntas! 👀
              </p>
            </div>
          )}
          
          <button 
            onClick={handleGerarLink} 
            disabled={isSaving}
            className="inline-flex min-h-16 w-full items-center justify-center rounded-2xl bg-accent px-6 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover active:scale-[0.98] disabled:opacity-50"
          >
            {isSaving ? "A guardar o teu Quiz..." : "Guardar e Gerar Link"}
          </button>
        </footer>
      </main>
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