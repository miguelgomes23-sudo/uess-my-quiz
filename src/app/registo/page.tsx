"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function RegistoPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [nome, setNome] = useState("");
  const [username, setUsername] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);
  
  const [googleUserPendente, setGoogleUserPendente] = useState<any>(null);

  const limparUsername = (user: string) => user.toLowerCase().replace(/[^a-z0-9_]/g, "");

  const handleRegisto = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");

    if (!nome || !username || !dataNascimento || !email || !password) {
      setErro("Por favor, preenche todos os campos.");
      return;
    }

    const usernameLimpo = limparUsername(username);
    setLoading(true);

    try {
      const usernameDoc = await getDoc(doc(db, "usernames", usernameLimpo));
      if (usernameDoc.exists()) {
        setErro("Este @username já está a ser utilizado. Escolhe outro.");
        setLoading(false);
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        nome: nome,
        username: usernameLimpo,
        dataNascimento: dataNascimento,
        email: email,
        fotoPerfil: "", 
        dataCriacao: new Date().toISOString()
      });

      await setDoc(doc(db, "usernames", usernameLimpo), { uid: user.uid });
      router.push("/feed");

    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') setErro("Este email já tem uma conta. Faz login.");
      else if (error.code === 'auth/weak-password') setErro("A password tem de ter pelo menos 6 caracteres.");
      else setErro("Ocorreu um erro ao criar a conta.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setErro("");
    const provider = new GoogleAuthProvider();
    
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (userDoc.exists() && userDoc.data().username) {
        router.push("/feed"); 
      } else {
        setGoogleUserPendente(user);
        setNome(user.displayName || "");
      }
    } catch (error) {
      setErro("Ocorreu um erro ao entrar com o Google.");
    }
  };

  const handleFinalizarGoogle = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");

    if (!username || !dataNascimento) {
      setErro("Precisas de preencher o username e a data de nascimento.");
      return;
    }

    const usernameLimpo = limparUsername(username);
    setLoading(true);

    try {
      const usernameDoc = await getDoc(doc(db, "usernames", usernameLimpo));
      if (usernameDoc.exists()) {
        setErro("Este @username já está a ser utilizado. Escolhe outro.");
        setLoading(false);
        return;
      }

      await setDoc(doc(db, "users", googleUserPendente.uid), {
        uid: googleUserPendente.uid,
        nome: nome,
        username: usernameLimpo,
        dataNascimento: dataNascimento,
        email: googleUserPendente.email,
        fotoPerfil: googleUserPendente.photoURL || "",
        dataCriacao: new Date().toISOString()
      });

      await setDoc(doc(db, "usernames", usernameLimpo), { uid: googleUserPendente.uid });
      router.push("/feed");

    } catch (error) {
      setErro("Ocorreu um erro ao finalizar a conta.");
    } finally {
      setLoading(false);
    }
  };

  if (googleUserPendente) {
    return (
      // LARGURA UNIFORMIZADA NO PENDENTE
      <div className="flex min-h-dvh w-full flex-col px-6 py-12 sm:mx-auto sm:max-w-[600px] bg-gray-50/50">
        <h1 className="text-3xl font-bold text-foreground mb-2">Quase lá!</h1>
        <p className="text-sm text-muted mb-8">Como usaste o Google, só precisamos que escolhas o teu @username e a data de nascimento.</p>
        
        {erro && <div className="mb-4 rounded-xl bg-red-50 p-4 text-sm text-red-600 border border-red-100">{erro}</div>}

        <form onSubmit={handleFinalizarGoogle} className="flex flex-col gap-4">
          <div className="relative">
            <span className="absolute left-4 top-4 text-muted">@</span>
            <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full rounded-xl border border-gray-200 bg-white py-4 pl-9 pr-4 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent shadow-sm" />
          </div>
          <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} className="w-full rounded-xl border border-gray-200 bg-white px-4 py-4 text-sm text-muted outline-none focus:border-accent focus:ring-1 focus:ring-accent shadow-sm" />
          
          <button type="submit" disabled={loading} className="mt-4 inline-flex min-h-14 w-full items-center justify-center rounded-2xl bg-accent px-6 font-semibold text-white transition-colors hover:bg-accent-hover active:scale-[0.98] disabled:opacity-50 shadow-sm">
            {loading ? "A guardar..." : "Concluir Registo"}
          </button>
        </form>
      </div>
    );
  }

  return (
    // LARGURA UNIFORMIZADA PRINCIPAL
    <div className="flex min-h-dvh w-full flex-col px-6 py-8 sm:mx-auto sm:max-w-[600px] bg-gray-50/50">
      <header className="mb-6 flex items-center">
        <Link href="/" className="inline-flex size-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-muted transition-colors hover:bg-gray-50 active:scale-95 shadow-sm">
          <svg aria-hidden xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
        </Link>
      </header>

      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-foreground">Criar Conta</h1>
        <p className="text-sm text-muted">Junta-te à comunidade e testa os teus amigos.</p>
      </div>

      <div className="mb-10 flex flex-col items-center gap-3">
        <button type="button" onClick={() => fileInputRef.current?.click()} className="group relative flex size-36 items-center justify-center rounded-full border-2 border-dashed border-gray-300 bg-gray-50 transition-colors hover:border-accent hover:bg-accent/5 active:scale-[0.98]">
          <svg aria-hidden xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-10 text-muted transition-colors group-hover:text-accent"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>
        </button>
        <input ref={fileInputRef} type="file" accept="image/*" className="sr-only" tabIndex={-1} />
        <p className="text-sm text-muted">A foto de perfil será ativada brevemente</p>
      </div>

      {erro && (
        <div className="mb-4 rounded-xl bg-red-50 p-4 text-sm text-red-600 border border-red-100">
          {erro}
        </div>
      )}

      <form onSubmit={handleRegisto} className="flex flex-col gap-4">
        <input type="text" placeholder="O teu nome" value={nome} onChange={(e) => setNome(e.target.value)} className="w-full rounded-xl border border-gray-200 bg-white px-4 py-4 text-sm text-foreground outline-none focus:border-accent shadow-sm" />
        
        <div className="relative">
          <span className="absolute left-4 top-4 text-muted">@</span>
          <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full rounded-xl border border-gray-200 bg-white py-4 pl-9 pr-4 text-sm text-foreground outline-none focus:border-accent shadow-sm" />
        </div>

        <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} className="w-full rounded-xl border border-gray-200 bg-white px-4 py-4 text-sm text-muted outline-none focus:border-accent shadow-sm" />
        
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-gray-200 bg-white px-4 py-4 text-sm text-foreground outline-none focus:border-accent shadow-sm" />
        <input type="password" placeholder="Password (mínimo 6 caracteres)" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-xl border border-gray-200 bg-white px-4 py-4 text-sm text-foreground outline-none focus:border-accent shadow-sm" />

        <button type="submit" disabled={loading} className="mt-4 inline-flex min-h-14 w-full items-center justify-center rounded-2xl bg-accent px-6 font-semibold text-white transition-colors hover:bg-accent-hover active:scale-[0.98] disabled:opacity-50 shadow-sm">
          {loading ? "A criar conta..." : "Registar"}
        </button>
      </form>

      <div className="my-8 flex items-center gap-4">
        <hr className="flex-1 border-gray-200" />
        <span className="text-xs text-muted uppercase font-semibold">ou continua com</span>
        <hr className="flex-1 border-gray-200" />
      </div>

      <div className="flex flex-col gap-3 pb-8">
        <button type="button" onClick={handleGoogleLogin} className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white border border-gray-200 text-black font-semibold hover:bg-gray-50 shadow-sm transition-colors active:scale-[0.98]">
          <svg viewBox="0 0 24 24" width="20" height="20"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
          Google
        </button>
      </div>
    </div>
  );
}