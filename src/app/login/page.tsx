"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";
// 🚨 MUDANÇA: Retirámos o Popup e adicionámos o Redirect e a verificação
import { signInWithEmailAndPassword, signInWithRedirect, getRedirectResult, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function LoginPage() {
  const router = useRouter();
  
  const [identificador, setIdentificador] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  // 1. ESPERA PELO RESULTADO DO REDIRECIONAMENTO DO GOOGLE
  useEffect(() => {
    const verificarLoginGoogle = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result && result.user) {
          router.push("/feed"); // Sucesso: Vai para o feed
        }
      } catch (error) {
        console.error("Erro após redirecionamento do Google:", error);
        setErro("Falha ao entrar com o Google.");
      }
    };
    verificarLoginGoogle();
    
    // Bónus: Se já tiver a sessão iniciada (guardada no telemóvel), manda logo para o feed
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) router.push("/feed");
    });
    return () => unsubscribe();
  }, [router]);

  // 2. LOGIN COM GOOGLE (Agora usa Redirect à prova de telemóvel)
  const handleGoogleLogin = async () => {
    try {
      setErro("");
      setLoading(true); // O ecrã vai mudar para a página da Google
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
    } catch (error: any) {
      console.error("Erro ao iniciar Google Login:", error);
      setErro("Falha ao redirecionar para o Google.");
      setLoading(false);
    }
  };

  // 3. LOGIN COM EMAIL OU USERNAME (Mantém-se igual)
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setLoading(true);

    try {
      let emailParaLogin = identificador.trim();

      if (!emailParaLogin.includes("@") || emailParaLogin.startsWith("@")) {
        const usernameLimpo = emailParaLogin.replace("@", "").toLowerCase();
        const usernameDoc = await getDoc(doc(db, "usernames", usernameLimpo));
        
        if (usernameDoc.exists()) {
          const uid = usernameDoc.data().uid;
          const userDoc = await getDoc(doc(db, "users", uid));
          
          if (userDoc.exists() && userDoc.data().email) {
            emailParaLogin = userDoc.data().email;
          } else {
            throw new Error("username-sem-email");
          }
        } else {
          throw new Error("username-nao-encontrado");
        }
      }

      await signInWithEmailAndPassword(auth, emailParaLogin, password);
      router.push("/feed");

    } catch (error: any) {
      console.error("Erro no login:", error);
      if (error.message === "username-nao-encontrado") {
        setErro("Este username não existe.");
      } else {
        setErro("Email, username ou password incorretos.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-dvh flex-col px-6 py-12 sm:mx-auto sm:max-w-md justify-center bg-background">
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-foreground">Bem-vindo de volta</h1>
        <p className="text-sm text-muted">Faz login para veres o teu feed e criares quizzes.</p>
      </header>

      {/* BOTÃO GOOGLE */}
      <div className="flex flex-col gap-3 mb-8">
        <button 
          type="button" 
          onClick={handleGoogleLogin}
          disabled={loading}
          className="flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white text-foreground font-semibold shadow-sm transition-colors hover:bg-gray-50 active:scale-[0.98] disabled:opacity-50"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          {loading ? "A redirecionar..." : "Entrar com Google"}
        </button>
      </div>

      <div className="mb-8 flex items-center gap-4">
        <hr className="flex-1 border-gray-200" />
        <span className="text-xs font-semibold text-muted uppercase tracking-wider">ou usar email</span>
        <hr className="flex-1 border-gray-200" />
      </div>

      {erro && (
        <div className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-center text-sm font-semibold text-red-600">
          {erro}
        </div>
      )}

      <form onSubmit={handleEmailLogin} className="flex flex-col gap-4">
        <input 
          type="text" 
          placeholder="Email ou @username" 
          value={identificador}
          onChange={(e) => setIdentificador(e.target.value)}
          required
          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-sm font-medium text-foreground outline-none transition-colors focus:bg-white focus:border-accent shadow-sm" 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-sm font-medium text-foreground outline-none transition-colors focus:bg-white focus:border-accent shadow-sm" 
        />

        <button 
          type="submit" 
          disabled={loading}
          className="mt-4 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-accent px-6 font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover active:scale-[0.98] disabled:opacity-50"
        >
          {loading ? "A entrar..." : "Entrar"}
        </button>
      </form>
      
      <p className="mt-8 text-center text-sm font-medium text-muted">
        Não tens conta? <Link href="/registo" className="text-accent font-bold hover:underline">Regista-te</Link>
      </p>
    </div>
  );
}