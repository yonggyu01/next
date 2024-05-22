import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from 'react'
import "./globals.css";
import  {Navidivider} from "./components/navidivider/divider";
import {Providers} from '@/app/store/provider'
import maincss from './style/main.module.scss'
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
      <body className={`${inter.className} ${maincss.body}`} data-theme='light'>
      <header>
      <Providers>
      <Navidivider/>
      </Providers>
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
