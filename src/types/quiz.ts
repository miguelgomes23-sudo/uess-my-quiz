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

export type { TemaSugestao } from "@/lib/data/sugestoes";
export {
  TEMAS_SUGESTAO,
  TEMAS_SUGESTAO_LABELS,
} from "@/lib/data/sugestoes";

export function isModoJogo(value: string | null): value is ModoJogo {
  return MODOS_JOGO.includes(value as ModoJogo);
}
