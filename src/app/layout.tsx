import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "blankdigital — AI-агентство разработки платформ и экосистем",
  description:
    "Создаём платформы, мобильные приложения и цифровые экосистемы для бизнеса, усиленные искусственным интеллектом. AI-агентство полного цикла.",
  keywords: [
    "AI агентство",
    "разработка платформ",
    "мобильные приложения",
    "цифровые экосистемы",
    "искусственный интеллект",
    "blankdigital",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
