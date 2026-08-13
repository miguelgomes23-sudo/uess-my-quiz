"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function BottomNav() {
  const pathname = usePathname(); // Descobre o URL atual (ex: "/feed")
  
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

  return (
    <nav className="fixed bottom-0 z-50 flex w-full h-[68px] sm:max-w-[600px] items-center justify-around border-t border-gray-200 bg-white px-2 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      
      {/* 1. Ícone: FEED */}
      <Link href="/feed" className={`flex flex-col items-center justify-center w-12 h-12 transition-colors ${pathname === '/feed' ? 'text-accent' : 'text-muted hover:text-foreground'}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      </Link>
      
      {/* 2. Ícone: PESQUISA */}
      <Link href="/pesquisa" className={`flex flex-col items-center justify-center w-12 h-12 transition-colors ${pathname === '/pesquisa' ? 'text-accent' : 'text-muted hover:text-foreground'}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      </Link>

      {/* 3. Ícone: CRIAR (Botão Flutuante Central) */}
      <div className="relative -top-5">
        <Link href="/criar/modo" className="flex items-center justify-center size-14 rounded-full bg-accent text-white shadow-lg border-4 border-gray-50 hover:scale-105 transition-transform active:scale-95">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </Link>
      </div>

      {/* 4. Ícone: CARTEIRA */}
      <Link href="/carteira" className={`flex flex-col items-center justify-center w-12 h-12 transition-colors ${pathname === '/carteira' ? 'text-accent' : 'text-muted hover:text-foreground'}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
      </Link>

      {/* 5. Ícone: PERFIL */}
      <Link href={meuUsername ? `/perfil/${meuUsername}` : "/login"} className={`flex flex-col items-center justify-center w-12 h-12 transition-colors ${pathname.startsWith('/perfil') ? 'text-accent' : 'text-muted hover:text-foreground'}`}>
        {minhaFoto ? (
          <img src={minhaFoto} alt="Perfil" className={`size-7 rounded-full object-cover border-2 transition-all ${pathname.startsWith('/perfil') ? 'border-accent' : 'border-transparent'}`} />
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        )}
      </Link>
    </nav>
  );
}