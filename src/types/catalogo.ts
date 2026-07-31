export type ModoJogo = 'classico' | 'facto-ou-fake' | 'este-ou-aquele' | 'lacuna' | 'top-3' | 'termometro';

export type PerguntaClassica = { id: string; texto: string; opcoes: [string, string, string, string]; };
export type PerguntaTermometro = { id: string; texto: string; min: number; max: number; unidade: string; };
export type PerguntaFactoFake = { id: string; texto: string; };
export type PerguntaEsteAquele = { id: string; texto: string; opcaoA: string; opcaoB: string; };
export type PerguntaLacuna = { id: string; texto: string; }; // Ex: "A minha comida favorita é ___"
export type PerguntaTop3 = { id: string; texto: string; opcoes?: string[]; }; // Ex: "Top 3 Filmes"

export type Subcategoria<T> = { id: string; nome: string; perguntas: T[]; };
export type Categoria<T> = { id: string; nome: string; icone: string; descricao: string; subcategorias: Subcategoria<T>[]; };