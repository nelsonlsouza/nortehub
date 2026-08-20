"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { navigation } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const [open,setOpen]=useState(false);
  return <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:rgba(247,245,239,.94)] backdrop-blur-md"><div className="mx-auto flex h-20 w-[min(calc(100%-2rem),86rem)] items-center justify-between md:w-[min(calc(100%-5rem),86rem)]"><a href="#inicio" aria-label="NorteHub, início"><Logo /></a><nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">{navigation.map(link=><a className="focus-ring text-sm font-semibold hover:text-[var(--brand-light)]" key={link.href} href={link.href}>{link.label}</a>)}</nav><div className="hidden lg:block"><Button href={buildWhatsAppUrl()}>Agendar visita</Button></div><button onClick={()=>setOpen(!open)} className="focus-ring p-2 lg:hidden" aria-expanded={open} aria-label={open?"Fechar menu":"Abrir menu"}>{open?<X/>:<Menu/>}</button></div>{open&&<nav className="border-t border-[var(--border)] bg-[var(--background)] px-4 py-5 lg:hidden" aria-label="Navegação móvel"><div className="mx-auto grid max-w-lg gap-1">{navigation.map(link=><a onClick={()=>setOpen(false)} className="focus-ring border-b border-[var(--border)] py-3 font-semibold" key={link.href} href={link.href}>{link.label}</a>)}<Button className="mt-4" href={buildWhatsAppUrl()}>Agendar visita</Button></div></nav>}</header>;
}
