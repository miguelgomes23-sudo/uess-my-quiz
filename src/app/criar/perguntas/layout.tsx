import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "As tuas perguntas — GuessMyQuiz",
  description: "Cria e personaliza as perguntas do teu quiz.",
};

export default function PerguntasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
