import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import "./globals.css";

const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://nortehub.com.br"), title: "Coworking em Manaus | NorteHub",
  description: "Espaços de coworking, salas privativas, salas de reunião e comunidade profissional em Manaus.",
  openGraph: { title: "NorteHub — Coworking em Manaus", description: "Seu espaço. Sua comunidade. Seu ritmo.", locale: "pt_BR", type: "website" },
  twitter: { card: "summary_large_image", title: "NorteHub — Coworking em Manaus", description: "Seu espaço. Sua comunidade. Seu ritmo." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={`${sans.variable} ${serif.variable}`}><body><Header /><main>{children}</main><Footer /></body></html>;
}
