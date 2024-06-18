import type { Metadata } from "next";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Inter } from "next/font/google";
import React from 'react'
import "./globals.css";
import  {Navidivider} from "./components/navidivider/divider";
import {Providers} from '@/app/store/provider'
import maincss from './style/main.module.scss'
import ReactQueryProviders from '@/app/hooks/useReactQuery'
import Maindivider from "./components/mainpage/maindivider";
import Themech from './themechecker'
import Footer from "./components/footercom/footercom"
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
      
      <body className={`${inter.className} ${maincss.body}`} data-theme='dark'>
      <header>
      <Providers>
      <Navidivider/>
      <Themech/>
      </Providers>
      </header>
      <main>
       <ReactQueryProviders>
        <Providers>
          <Maindivider>
          {children}
          </Maindivider>
          </Providers>
          </ReactQueryProviders>
      </main>
        
        <footer className={maincss.footerposition}>
    <Footer></Footer>
        </footer>
        </body>
    </html>
  );
}
