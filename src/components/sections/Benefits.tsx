import { Armchair, Coffee, MapPin, Snowflake, Users, Wifi } from "lucide-react";
import { benefits } from "@/data/content";
const icons=[Wifi,Armchair,Coffee,Users,MapPin,Snowflake];
export function Benefits() { return <section aria-label="Benefícios" className="border-y border-[var(--border)]"><div className="mx-auto grid w-[min(calc(100%-2rem),86rem)] grid-cols-2 gap-y-7 py-8 sm:grid-cols-3 md:w-[min(calc(100%-5rem),86rem)] lg:grid-cols-6">{benefits.map((benefit,index)=>{const Icon=icons[index];return <div className="flex items-center gap-3 text-xs font-semibold sm:text-sm" key={benefit}><Icon size={22} strokeWidth={1.5} className="text-[var(--brand-light)]"/><span>{benefit}</span></div>;})}</div></section>; }
