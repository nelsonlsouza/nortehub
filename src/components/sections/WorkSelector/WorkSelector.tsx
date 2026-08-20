"use client";
import Image from "next/image";
import { useState } from "react";
import { spaces, workTypes } from "@/data/content";
import type { WorkType } from "@/types";

export function WorkSelector() {
  const [selected,setSelected]=useState<WorkType>("recommended");
  const available=spaces.filter(space=>space.categories.includes(selected));
  return <section className="section-shell pb-0" aria-labelledby="work-title"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><h2 id="work-title" className="section-title max-w-xl">Como você quer trabalhar hoje?</h2><div className="flex max-w-full overflow-x-auto border border-[var(--border)]" role="tablist" aria-label="Tipo de trabalho">{workTypes.map(type=><button key={type.id} onClick={()=>setSelected(type.id)} role="tab" aria-selected={selected===type.id} className={`focus-ring min-h-12 shrink-0 border-r border-[var(--border)] px-5 text-xs font-bold transition-colors last:border-r-0 ${selected===type.id?"bg-[var(--brand)] text-white":"hover:bg-[var(--surface)]"}`}>{type.label}</button>)}</div></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{available.map(space=><article key={space.id} className="group border-b border-[var(--border)] pb-5"><div className="relative aspect-[4/3] overflow-hidden"><Image src={space.image} alt={space.name} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"/></div><h3 className="font-display mt-5 text-2xl">{space.name}</h3><p className="mt-2 text-sm text-[var(--muted)]">{space.price}</p></article>)}</div></section>;
}
