import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navi } from "./components/navi";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yonggyu's blog",
  description: "Next.js, Typescript, scss를 사용해 만든 블로그입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
      <header>
        <Navi></Navi>
      </header>
      <main>
        {children}
      </main>

        </body>
    </html>
  );
}
