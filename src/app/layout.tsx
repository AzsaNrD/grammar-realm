import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grammar Realm | TOEFL Grammar RPG",
  description:
    "Web game edukasi 2D RPG: kalahkan monster dengan menjawab soal grammar TOEFL dan raih gelar Grand Scholar!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
