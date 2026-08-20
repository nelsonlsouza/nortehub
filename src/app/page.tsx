import { Benefits } from "@/components/sections/Benefits";
import { Community } from "@/components/sections/Community";
import { Events } from "@/components/sections/Events";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Location } from "@/components/sections/Location";
import { Plans } from "@/components/sections/Plans";
import { Spaces } from "@/components/sections/Spaces";
import { WorkSelector } from "@/components/sections/WorkSelector/WorkSelector";

export default function HomePage() {
  return <><Hero /><Benefits /><WorkSelector /><Spaces /><Plans /><Community /><Events /><div className="section-shell grid gap-6 lg:grid-cols-2"><Location /><FAQ /></div><FinalCTA /></>;
}
