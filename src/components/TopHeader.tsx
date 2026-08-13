"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

type TopHeaderProps = {
  titulo: string;
  mostrarVoltar?: boolean;
  onVoltar?: () => void; // NOVO: Permite assumir o controlo do botão de voltar!
};

export default function TopHeader({ titulo, mostrarVoltar = false, onVoltar }: TopHeaderProps) {
  const router = useRouter();
  const [meuUsername, setMeuUsername] = useState<string | null>(null);
  const [minhaFoto, setMinhaFoto] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setMeuUsername(userDoc.data().username);
          setMinhaFoto(userDoc.data().fotoPerfil || null);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const handleVoltar = () => {
    if (onVoltar) {
      onVoltar(); // Se passarmos uma função, ele executa-a
    } else {
      router.back(); // Caso contrário, volta para trás na janela normal
    }
  };

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white/80 px-6 py-4 backdrop-blur-md">
      <div className="flex items-center gap-4">
        {mostrarVoltar && (
          <button 
            onClick={handleVoltar} 
            className="rounded-full p-2 hover:bg-gray-100 transition-colors -ml-2 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><line x1="12" y1="19" x2="5" y2="12"></line><line x1="12" y1="5" x2="5" y2="12"></line></svg>
          </button>
        )}
        <h1 className="text-xl font-bold text-foreground capitalize">{titulo}</h1>
      </div>
      
      <Link 
        href={meuUsername ? `/perfil/${meuUsername}` : "/login"} 
        className="size-10 shrink-0 rounded-full bg-gray-200 overflow-hidden border border-gray-300 transition-transform active:scale-95 flex items-center justify-center shadow-sm hover:ring-2 hover:ring-accent/20"
      >
        {minhaFoto ? (
          <img src={minhaFoto} alt="Perfil" className="h-full w-full object-cover" />
        ) : (
          <svg className="size-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        )}
      </Link>
    </header>
  );
}