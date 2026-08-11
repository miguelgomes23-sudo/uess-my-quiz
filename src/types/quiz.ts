export type ModoJogo =
  | "classico"
  | "facto-ou-fake"
  | "este-ou-aquele"
  | "lacuna"
  | "top-3"
  | "termometro";

export const MODOS_JOGO: ModoJogo[] = [
  "classico",
  "facto-ou-fake",
  "este-ou-aquele",
  "lacuna",
  "top-3",
  "termometro",
];

export const QUANTIDADES_PERGUNTAS = [6, 8, 12] as const;

export type QuantidadePerguntas = (typeof QUANTIDADES_PERGUNTAS)[number];

export function isModoJogo(value: string | null): value is ModoJogo {
  return MODOS_JOGO.includes(value as ModoJogo);
}

// --- NOVA ESTRUTURA PARA A BASE DE DADOS (Criação Livre) ---

export interface Quiz {
  id?: string;
  criadorUid: string;
  criadorNome: string;
  criadorUsername: string;
  criadorFoto: string;
  modo: ModoJogo | string; 
  quantidade: number;
  perguntas: PerguntaPersonalizada[];
  dataCriacao: string;
  jogadas: number;
}

export interface PerguntaPersonalizada {
  perguntaTexto: string; 
  opcoes?: string[];     
  respostaCorreta: string | number | boolean | string[]; 
  max?: number;          
  unidade?: string;      
  respostasTop3?: string[]; 
}