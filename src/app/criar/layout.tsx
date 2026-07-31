import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O teu perfil — GuessMyQuiz",
  description: "Configura o teu perfil e começa a criar o teu quiz personalizado.",
};

export default function CriarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
