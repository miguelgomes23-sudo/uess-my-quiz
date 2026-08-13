"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import TopHeader from "@/components/TopHeader";

export default function DefinicoesPage() {
  const router = useRouter();

  // Função para limpar a sessão no Firebase e voltar à montra
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  // Função auxiliar para criar as "barras" do menu mais rápido
  const RenderLinkItem = ({ icon, titulo, descricao, href = "#" }: { icon: string, titulo: string, descricao: string, href?: string }) => (
    <Link href={href} className="flex items-center gap-4 bg-white p-4 transition-colors hover:bg-gray-50 active:bg-gray-100 border-b border-gray-100 last:border-0">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gray-50 text-xl shadow-sm border border-gray-100">{icon}</span>
      <div className="flex flex-col flex-1">
        <span className="text-sm font-bold text-foreground">{titulo}</span>
        <span className="text-xs text-muted line-clamp-1">{descricao}</span>
      </div>
      <svg className="size-5 text-gray-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
    </Link>
  );

  return (
    <div className="flex min-h-dvh w-full flex-col sm:mx-auto sm:max-w-[600px] bg-gray-50/50">
      
      {/* CABEÇALHO (Com seta de voltar ligada) */}
      <TopHeader titulo="Definições" mostrarVoltar={true} />

      <main className="flex flex-col w-full pb-10">
        
        {/* GRUPO 1: A MINHA CONTA */}
        <div className="flex flex-col">
          <h3 className="px-6 mt-6 mb-2 text-xs font-bold uppercase tracking-widest text-muted">A Minha Conta</h3>
          <div className="flex flex-col bg-white border-y border-gray-200 shadow-sm">
            <RenderLinkItem icon="👤" titulo="Sua Conta" descricao="Editar perfil, nome de utilizador e contactos." href="/editar-perfil" />
            <RenderLinkItem icon="💳" titulo="Subscrições e Carteira" descricao="Gerir os teus créditos e histórico de pagamentos." href="/carteira" />
            <RenderLinkItem icon="⏱️" titulo="A Minha Atividade" descricao="Histórico de participações e quizzes jogados." />
          </div>
        </div>

        {/* GRUPO 2: SEGURANÇA E PRIVACIDADE */}
        <div className="flex flex-col">
          <h3 className="px-6 mt-8 mb-2 text-xs font-bold uppercase tracking-widest text-muted">Segurança e Acesso</h3>
          <div className="flex flex-col bg-white border-y border-gray-200 shadow-sm">
            <RenderLinkItem icon="🔒" titulo="Segurança e Acesso à conta" descricao="Alterar password, autenticação em dois passos." />
            <RenderLinkItem icon="🛡️" titulo="Privacidade e Segurança" descricao="Quem pode ver o teu perfil, bloqueios e ocultar online." />
          </div>
        </div>

        {/* GRUPO 3: EXPERIÊNCIA DA APP */}
        <div className="flex flex-col">
          <h3 className="px-6 mt-8 mb-2 text-xs font-bold uppercase tracking-widest text-muted">Experiência</h3>
          <div className="flex flex-col bg-white border-y border-gray-200 shadow-sm">
            <RenderLinkItem icon="🔔" titulo="Notificações" descricao="Preferências de alertas, menções e convites." />
            <RenderLinkItem icon="👁️" titulo="Acessibilidade, exibição e idiomas" descricao="Tamanho do texto, modo escuro e idioma principal." />
          </div>
        </div>

        {/* GRUPO 4: RECURSOS ADICIONAIS */}
        <div className="flex flex-col">
          <h3 className="px-6 mt-8 mb-2 text-xs font-bold uppercase tracking-widest text-muted">Suporte e Legal</h3>
          <div className="flex flex-col bg-white border-y border-gray-200 shadow-sm">
            <RenderLinkItem icon="📜" titulo="Recursos Adicionais" descricao="Termos de Serviço, Políticas de Privacidade e Ajuda." />
            <RenderLinkItem icon="❓" titulo="Centro de Ajuda" descricao="Perguntas frequentes e contacto do suporte." />
          </div>
        </div>

        {/* ZONA DE PERIGO (LOGOUT) */}
        <div className="mt-10 px-4">
          <button 
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white border border-red-200 p-4 text-sm font-bold text-red-500 shadow-sm transition-colors hover:bg-red-50 active:scale-[0.98]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Sair da Conta
          </button>
          <p className="mt-4 text-center text-xs text-muted">GuessMyQuiz v1.0.0</p>
        </div>

      </main>
    </div>
  );
}