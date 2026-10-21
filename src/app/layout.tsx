import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { business } from "@/config/business";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap", weight: ["600", "700", "800"] });

const title = "Socorro mecânico em Embu das Artes | BlackMist — 24 horas";
const description =
  "Assistência automotiva em Embu das Artes e região: troca de bateria no local, pneus, abertura de veículos e testes de alternador e motor de partida. 11 anos de experiência, atendimento 24 horas.";

export const metadata: Metadata = {
  // Sem domínio definitivo, usa a URL do Cloudflare Pages (CF_PAGES_URL) apenas para resolver imagens OG.
  metadataBase: new URL(business.siteUrl || process.env.CF_PAGES_URL || "http://localhost:3000"),
  title,
  description,
  applicationName: business.name,
  keywords: [
    "socorro mecânico em Embu das Artes",
    "assistência automotiva em Embu das Artes",
    "socorro mecânico em São Paulo",
    "troca de bateria no local",
    "abertura de veículos",
    "troca de pneu",
    "teste de alternador",
  ],
  alternates: business.siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: business.name,
    title,
    description,
    url: "/",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
