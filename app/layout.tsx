import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navi } from "./components/navi";
import {Providers} from '@/app/store/provider'
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {persistor} from '@/app/store/store'
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
        <Providers>
          {children}
          </Providers>
      </main>

        </body>
    </html>
  );
}
