import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from '../lib/registry';
import Header from "./_components/_header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InsanyShop",
  description: "InsanyShop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} antialiased`}
      >
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
