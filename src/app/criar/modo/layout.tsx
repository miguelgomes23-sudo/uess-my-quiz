import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Escolhe o formato — GuessMyQuiz",
  description: "Escolhe como queres testar os teus amigos no teu quiz personalizado.",
};

export default function ModoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
