"use client";

import { useState } from "react";
import Link from "next/link";
import TopHeader from "@/components/TopHeader";
import BottomNav from "@/components/BottomNav";

export default function PesquisaPage() {
  const [query, setQuery] = useState("");
  const [abaAtiva, setAbaAtiva] = useState<"tudo" | "perfis" | "tags">("tudo");

  return (
    <div className="flex min-h-dvh w-full flex-col bg-gray-50/50 sm:mx-auto sm:max-w-[600px]">
      
      {/* CABEÇALHO PADRÃO SEM BOTÃO VOLTAR (Página Principal) */}
      <TopHeader titulo="Explorar" />

      <main className="flex flex-1 flex-col w-full pb-28">
        
        {/* BARRA DE PESQUISA FIJA NO TOPO (Abaixo do TopHeader) */}
        <div className="sticky top-[68px] z-10 bg-gray-50/90 px-6 py-4 backdrop-blur-md">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Pesquisar perfis, quizzes ou temas..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-12 pr-4 text-sm font-medium outline-none transition-colors focus:border-accent shadow-sm"
            />
            <svg className="absolute left-4 top-4 size-5 text-muted" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            
            {query && (
              <button onClick={() => setQuery("")} className="absolute right-4 top-4 text-muted hover:text-foreground">
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            )}
          </div>

          {/* ABAS DE FILTRO */}
          <div className="flex gap-2 mt-4 overflow-x-auto scrollbar-hide">
            <button onClick={() => setAbaAtiva("tudo")} className={`px-5 py-2 rounded-full text-sm font-bold transition-all shrink-0 ${abaAtiva === "tudo" ? "bg-foreground text-white shadow-sm" : "bg-white border border-gray-200 text-muted hover:bg-gray-50"}`}>
              Para ti
            </button>
            <button onClick={() => setAbaAtiva("perfis")} className={`px-5 py-2 rounded-full text-sm font-bold transition-all shrink-0 ${abaAtiva === "perfis" ? "bg-foreground text-white shadow-sm" : "bg-white border border-gray-200 text-muted hover:bg-gray-50"}`}>
              Perfis
            </button>
            <button onClick={() => setAbaAtiva("tags")} className={`px-5 py-2 rounded-full text-sm font-bold transition-all shrink-0 ${abaAtiva === "tags" ? "bg-foreground text-white shadow-sm" : "bg-white border border-gray-200 text-muted hover:bg-gray-50"}`}>
              Hashtags
            </button>
          </div>
        </div>

        {/* CONTEÚDO (MOCKUP PARA QUANDO NÃO HÁ PESQUISA) */}
        {!query ? (
          <div className="flex flex-col gap-6 px-6 pt-4">
            
            <section>
              <h3 className="text-sm font-bold text-foreground mb-3">🔥 Tendências de Hoje</h3>
              <div className="flex flex-col gap-2">
                <Link href="#" className="flex items-center justify-between rounded-2xl bg-white p-4 border border-gray-100 shadow-sm active:scale-[0.98] transition-transform">
                  <div className="flex items-center gap-4">
                    <span className="flex size-10 items-center justify-center rounded-full bg-accent/10 text-accent font-bold">1</span>
                    <div className="flex flex-col">
                      <span className="font-bold text-foreground text-sm">#FofocasDeAmigos</span>
                      <span className="text-xs text-muted">12.4k publicações</span>
                    </div>
                  </div>
                  <svg className="size-4 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </Link>
                <Link href="#" className="flex items-center justify-between rounded-2xl bg-white p-4 border border-gray-100 shadow-sm active:scale-[0.98] transition-transform">
                  <div className="flex items-center gap-4">
                    <span className="flex size-10 items-center justify-center rounded-full bg-gray-100 text-muted font-bold">2</span>
                    <div className="flex flex-col">
                      <span className="font-bold text-foreground text-sm">#MatematicaDificil</span>
                      <span className="text-xs text-muted">8.2k publicações</span>
                    </div>
                  </div>
                  <svg className="size-4 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </Link>
              </div>
            </section>

            <section>
              <h3 className="text-sm font-bold text-foreground mb-3">👥 Sugestões para ti</h3>
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col items-center gap-2 rounded-2xl bg-white p-5 border border-gray-100 shadow-sm text-center">
                    <div className="size-16 rounded-full bg-gray-200"></div>
                    <div>
                      <p className="font-bold text-sm text-foreground">Utilizador {i}</p>
                      <p className="text-xs text-muted">@user_{i}</p>
                    </div>
                    <button className="mt-2 w-full rounded-xl bg-accent/10 py-2 text-xs font-bold text-accent hover:bg-accent hover:text-white transition-colors">
                      Seguir
                    </button>
                  </div>
                ))}
              </div>
            </section>

          </div>
        ) : (
          <div className="flex flex-col items-center justify-center pt-20 text-center px-6">
            <span className="text-4xl mb-4">🔍</span>
            <h3 className="text-lg font-bold text-foreground">A pesquisar por "{query}"</h3>
            <p className="text-sm text-muted mt-2">A integração com a base de dados será ativada brevemente!</p>
          </div>
        )}

      </main>

      <BottomNav />
    </div>
  );
}