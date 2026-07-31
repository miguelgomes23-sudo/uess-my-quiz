import type { ModoJogo } from "@/types/quiz";
import {
  FALLBACK_SUGESTAO,
  perguntasSugeridas,
  type ModoSugestao,
  type TemaSugestao,
} from "@/lib/data/sugestoes";

const MODO_PARA_SUGESTAO: Record<ModoJogo, ModoSugestao> = {
  classico: "classico",
  "facto-ou-fake": "facto_fake",
  "este-ou-aquele": "este_aquele",
  lacuna: "lacuna",
  "top-3": "top3",
  termometro: "termometro",
};

export function obterSugestaoAleatoria(
  modo: ModoJogo,
  tema: TemaSugestao,
): string {
  const modoKey = MODO_PARA_SUGESTAO[modo];
  const sugestoes = perguntasSugeridas[modoKey]?.[tema];

  if (!sugestoes || sugestoes.length === 0) {
    return FALLBACK_SUGESTAO;
  }

  const indice = Math.floor(Math.random() * sugestoes.length);
  return sugestoes[indice];
}
