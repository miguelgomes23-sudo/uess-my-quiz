"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function EditarPerfilPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [userUid, setUserUid] = useState<string | null>(null);

  const [nome, setNome] = useState("");
  const [bio, setBio] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserUid(user.uid);
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            const data = userDoc.data();
            setNome(data.nome || "");
            setBio(data.bio || "");
            setUsername(data.username || "");
          }
        } catch (error) {
          console.error("Erro ao buscar dados do utilizador:", error);
        }
      } else {
        router.push("/login"); 
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userUid) return;
    
    setSaving(true);
    try {
      await updateDoc(doc(db, "users", userUid), {
        nome: nome.trim(),
        bio: bio.trim(),
      });
      router.push(`/perfil/${username}`);
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
      alert("Ocorreu um erro ao guardar as alterações.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="flex min-h-dvh items-center justify-center text-muted bg-white">A carregar dados do perfil...</div>;
  }

  return (
    <div className="flex min-h-dvh w-full flex-col bg-white pb-20 sm:mx-auto sm:max-w-lg">
      <header className="sticky top-0 z-10 flex items-center gap-4 border-b border-gray-200 bg-white/80 px-6 py-4 backdrop-blur-md">
        <button
          onClick={() => router.back()}
          aria-label="Voltar"
          className="inline-flex size-10 items-center justify-center rounded-full bg-gray-50 text-muted transition-colors hover:bg-gray-100 hover:text-foreground active:scale-95"
        >
          <svg aria-hidden xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-foreground">Editar Perfil</h1>
      </header>

      <main className="flex flex-col w-full px-6 pt-8">
        <div className="mb-10 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="group relative flex size-32 items-center justify-center rounded-full border-2 border-dashed border-gray-200 bg-gray-50 transition-colors hover:border-accent hover:bg-accent/5 active:scale-[0.98]"
          >
            <svg aria-hidden xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-8 text-muted transition-colors group-hover:text-accent">
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
              <circle cx="12" cy="13" r="3" />
            </svg>
          </button>
          <input ref={fileInputRef} type="file" accept="image/*" className="sr-only" tabIndex={-1} />
          <p className="text-sm font-medium text-muted">Alterar foto de perfil</p>
        </div>

        <form onSubmit={handleSave} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="text-sm font-bold text-foreground ml-1">Nome de Exibição</label>
            <input 
              id="nome" 
              type="text"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="O teu nome"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-base font-medium text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent shadow-sm" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="bio" className="text-sm font-bold text-foreground ml-1 flex justify-between">
              Biografia
              <span className="text-xs font-normal text-muted">{bio.length}/160</span>
            </label>
            <textarea 
              id="bio" 
              rows={4}
              maxLength={160}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Escreve um pouco sobre ti..."
              className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-base font-medium text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent shadow-sm" 
            />
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <label className="text-sm font-bold text-foreground ml-1 flex justify-between">
              Username
              <span className="text-xs text-red-400">Não editável</span>
            </label>
            <input 
              type="text" 
              value={`@${username}`} 
              disabled 
              className="w-full rounded-xl border border-transparent bg-gray-100 px-4 py-3.5 text-base font-medium text-muted cursor-not-allowed select-none" 
            />
          </div>

          <button 
            type="submit" 
            disabled={saving}
            className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-accent px-6 font-bold text-white shadow-sm transition-colors hover:bg-accent-hover active:scale-[0.98] disabled:opacity-50"
          >
            {saving ? "A guardar..." : "Guardar Alterações"}
          </button>
        </form>
      </main>
    </div>
  );
}