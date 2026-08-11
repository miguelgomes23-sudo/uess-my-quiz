"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, collection, query, where, getDocs, setDoc, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function PerfilPage() {
  const params = useParams();
  const perfilUsername = params.username as string;

  const [perfilData, setPerfilData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentUserUid, setCurrentUserUid] = useState<string | null>(null);
  
  const [userQuizzes, setUserQuizzes] = useState<any[]>([]);
  const [tabAtiva, setTabAtiva] = useState<"quizzes" | "resultados">("quizzes");
  const [textoCopiado, setTextoCopiado] = useState<string | null>(null);

  const [isFollowing, setIsFollowing] = useState(false);
  const [seguidoresList, setSeguidoresList] = useState<any[]>([]);
  const [showSeguidoresModal, setShowSeguidoresModal] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUserUid(user.uid);
      } else {
        setCurrentUserUid(null);
      }
    });

    const fetchPerfilEQuizzes = async () => {
      try {
        const usernameRef = doc(db, "usernames", perfilUsername);
        const usernameDoc = await getDoc(usernameRef);

        if (usernameDoc.exists()) {
          const uidDonoDoPerfil = usernameDoc.data().uid;
          
          const userRef = doc(db, "users", uidDonoDoPerfil);
          const userDoc = await getDoc(userRef);
          
          if (userDoc.exists()) {
            setPerfilData(userDoc.data());
          }

          const q = query(collection(db, "quizzes"), where("criadorUid", "==", uidDonoDoPerfil));
          const querySnapshot = await getDocs(q);
          const quizzesData = querySnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
          quizzesData.sort((a: any, b: any) => new Date(b.dataCriacao).getTime() - new Date(a.dataCriacao).getTime());
          setUserQuizzes(quizzesData);

          const segQuery = collection(db, "users", uidDonoDoPerfil, "seguidores");
          const segSnap = await getDocs(segQuery);
          const segs = segSnap.docs.map(d => ({ id: d.id, ...d.data() }));
          setSeguidoresList(segs);

          if (currentUserUid && segs.some(s => s.id === currentUserUid)) {
            setIsFollowing(true);
          }
        }
      } catch (error) {
        console.error("Erro ao carregar perfil", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPerfilEQuizzes();
    return () => unsubscribe();
  }, [perfilUsername, currentUserUid]);

  const handleToggleSeguir = async () => {
    if (!currentUserUid || !perfilData) return;
    const donoUid = perfilData.uid;
    const segRef = doc(db, "users", donoUid, "seguidores", currentUserUid);

    try {
      if (isFollowing) {
        await deleteDoc(segRef);
        setIsFollowing(false);
        setSeguidoresList(prev => prev.filter(s => s.id !== currentUserUid));
      } else {
        const meDoc = await getDoc(doc(db, "users", currentUserUid));
        const meData = meDoc.exists() ? meDoc.data() : {};
        
        await setDoc(segRef, {
          uid: currentUserUid,
          nome: meData.nome || "Utilizador",
          username: meData.username || "",
          fotoPerfil: meData.fotoPerfil || "",
          data: new Date().toISOString()
        });
        setIsFollowing(true);
        setSeguidoresList(prev => [...prev, { id: currentUserUid, nome: meData.nome, username: meData.username, fotoPerfil: meData.fotoPerfil }]);
      }
    } catch (error) {
      console.error("Erro ao alterar estado de seguir:", error);
    }
  };

  const copiarLink = (quizId: string) => {
    const url = `${window.location.origin}/jogar/${quizId}`;
    navigator.clipboard.writeText(url);
    setTextoCopiado(quizId);
    setTimeout(() => setTextoCopiado(null), 3000);
  };

  if (loading) {
    return <div className="flex min-h-dvh items-center justify-center text-muted">A carregar perfil...</div>;
  }

  if (!perfilData) {
    return <div className="flex min-h-dvh items-center justify-center text-muted">Este perfil não existe ou o username está errado.</div>;
  }

  const isMyProfile = currentUserUid === perfilData.uid;

  return (
    <div className="flex min-h-dvh w-full flex-col pb-20 sm:mx-auto sm:max-w-lg bg-white">
      <header className="sticky top-0 z-10 flex items-center gap-4 border-b border-gray-200 bg-white/80 px-6 py-4 backdrop-blur-md">
        <Link href="/feed" className="rounded-full p-2 hover:bg-gray-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><line x1="12" y1="19" x2="5" y2="12"></line><line x1="12" y1="5" x2="5" y2="12"></line></svg>
        </Link>
        <h1 className="text-xl font-bold text-foreground capitalize">
          {isMyProfile ? "O Meu Perfil" : perfilUsername}
        </h1>
      </header>
      
      <main className="flex flex-col w-full">
        <div className="px-6 pb-6 pt-6">
          <div className="flex justify-between items-start mb-4">
            <div className="size-24 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center shadow-sm border border-gray-200">
              {perfilData.fotoPerfil ? (
                <img src={perfilData.fotoPerfil} alt={perfilData.nome} className="h-full w-full object-cover" />
              ) : (
                <span className="text-4xl drop-shadow-sm">👋</span>
              )}
            </div>
            
            {isMyProfile ? (
              <Link href="/editar-perfil" className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-bold text-foreground hover:bg-gray-50 shadow-sm transition-colors active:scale-95">
                Editar Perfil
              </Link>
            ) : (
              <button 
                onClick={handleToggleSeguir}
                className={`rounded-full px-6 py-2 text-sm font-bold transition-colors shadow-sm active:scale-95 ${
                  isFollowing 
                    ? "border border-gray-200 bg-white text-foreground hover:bg-gray-50" 
                    : "bg-foreground text-white hover:bg-foreground/90"
                }`}
              >
                {isFollowing ? "A seguir" : "Seguir"}
              </button>
            )}
          </div>

          <h2 className="text-xl font-bold text-foreground">{perfilData.nome}</h2>
          <p className="text-sm text-muted">@{perfilData.username}</p>
          
          {perfilData.bio ? (
            <p className="mt-4 text-sm text-foreground whitespace-pre-wrap leading-relaxed">
              {perfilData.bio}
            </p>
          ) : (
            isMyProfile && (
              <p className="mt-4 text-sm text-muted italic">
                Ainda não tens uma biografia. Vai a "Editar Perfil" para escreveres algo sobre ti!
              </p>
            )
          )}
          
          <div className="mt-6 flex gap-4 text-sm text-muted">
            <span><strong className="text-foreground">0</strong> Seguindo</span>
            <button 
              onClick={() => setShowSeguidoresModal(true)}
              className="hover:underline cursor-pointer"
            >
              <strong className="text-foreground">{seguidoresList.length}</strong> Seguidores
            </button>
          </div>

          {isMyProfile && (
            <Link href="/criar/modo" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover active:scale-[0.98]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Criar Novo Quiz
            </Link>
          )}
        </div>

        {isMyProfile ? (
          <div className="border-b border-gray-200 flex px-6">
            <div onClick={() => setTabAtiva("quizzes")} className={`flex-1 py-4 text-center cursor-pointer transition-colors whitespace-nowrap text-sm sm:text-base ${tabAtiva === "quizzes" ? "border-b-2 border-accent font-bold text-foreground" : "text-muted font-medium hover:bg-gray-50"}`}>
              Os Meus Quizzes
            </div>
            <div onClick={() => setTabAtiva("resultados")} className={`flex-1 py-4 text-center cursor-pointer transition-colors whitespace-nowrap text-sm sm:text-base ${tabAtiva === "resultados" ? "border-b-2 border-accent font-bold text-foreground" : "text-muted font-medium hover:bg-gray-50"}`}>
              Resultados
            </div>
          </div>
        ) : (
          <div className="border-b border-gray-200 flex px-6">
            <div className="flex-1 py-4 text-center border-b-2 border-accent font-bold text-foreground whitespace-nowrap text-sm sm:text-base">
              Quizzes Criados
            </div>
          </div>
        )}

        <div className="flex flex-col w-full">
          {(!isMyProfile || tabAtiva === "quizzes") && (
            <div className="flex flex-col">
              {userQuizzes.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-12 text-center">
                  <span className="text-4xl mb-3">👻</span>
                  <p className="text-sm text-muted">Ainda não existem quizzes por aqui.</p>
                </div>
              ) : (
                userQuizzes.map((quiz) => (
                  <article key={quiz.id} className="border-b border-gray-200 p-6 flex flex-col gap-3 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-foreground text-lg capitalize">{quiz.modo.replace("-", " ")}</h3>
                        <p className="text-xs text-muted">Criado a {new Date(quiz.dataCriacao).toLocaleDateString("pt-PT")}</p>
                      </div>
                      <span className="text-xs font-bold bg-accent/10 text-accent px-3 py-1.5 rounded-lg">{quiz.quantidade} Perguntas</span>
                    </div>
                    
                    <div className="flex gap-3 mt-2">
                      {!isMyProfile ? (
                        <Link href={`/jogar/${quiz.id}`} className="flex-1 flex justify-center rounded-lg bg-accent text-white py-2.5 text-sm font-semibold hover:bg-accent-hover transition-colors shadow-sm">
                          Jogar Quiz
                        </Link>
                      ) : (
                        <button onClick={() => copiarLink(quiz.id)} className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-gray-100 text-foreground text-center py-2.5 text-sm font-semibold hover:bg-gray-200 transition-colors shadow-sm">
                          {textoCopiado === quiz.id ? "✅ Copiado!" : "Copiar Link de Partilha"}
                        </button>
                      )}
                    </div>
                  </article>
                ))
              )}
            </div>
          )}

          {isMyProfile && tabAtiva === "resultados" && (
            <div className="flex flex-col">
              {userQuizzes.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-12 text-center">
                  <span className="text-4xl mb-3">👻</span>
                  <p className="text-sm text-muted">Ainda não existem resultados por aqui.</p>
                </div>
              ) : (
                userQuizzes.map((quiz) => (
                  <article key={quiz.id} className="border-b border-gray-200 p-6 flex flex-col gap-3 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-foreground text-lg capitalize">{quiz.modo.replace("-", " ")}</h3>
                        <p className="text-xs text-muted">Resultados e respostas detalhadas</p>
                      </div>
                      <span className="text-xs font-bold bg-accent/10 text-accent px-3 py-1.5 rounded-lg">{quiz.quantidade} Perguntas</span>
                    </div>
                    
                    <div className="flex gap-3 mt-2">
                      <Link href={`/jogar/${quiz.id}/resultado?dono=true`} className="flex-1 flex items-center justify-center gap-2 bg-accent text-white text-center py-2.5 rounded-xl text-sm font-semibold hover:bg-accent-hover transition-colors shadow-sm active:scale-95">
                        Ver Ranking e Respostas Detalhadas
                      </Link>
                    </div>
                  </article>
                ))
              )}
            </div>
          )}
        </div>
      </main>

      {showSeguidoresModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="flex max-h-[85vh] w-full max-w-sm flex-col overflow-hidden rounded-[24px] bg-white shadow-2xl">
            <header className="flex items-center justify-between border-b border-gray-100 p-5">
              <h3 className="text-lg font-bold text-foreground">Seguidores</h3>
              <button onClick={() => setShowSeguidoresModal(false)} className="rounded-full p-2 text-muted hover:bg-gray-100">✕</button>
            </header>
            <div className="flex flex-col gap-2 overflow-y-auto p-4">
              {seguidoresList.length === 0 ? (
                <p className="text-center text-sm text-muted py-8">Ainda não tens seguidores.</p>
              ) : (
                seguidoresList.map((seg) => (
                  <Link key={seg.uid} href={`/perfil/${seg.username}`} onClick={() => setShowSeguidoresModal(false)} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-xl transition-colors">
                    <div className="size-10 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                      {seg.fotoPerfil ? <img src={seg.fotoPerfil} className="h-full w-full object-cover" /> : <span>👤</span>}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-foreground">{seg.nome}</p>
                      <p className="text-xs text-muted">@{seg.username}</p>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}