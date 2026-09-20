import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import ManagedSections from "@/components/Content/ManagedSections";
import { contentMetadata } from "@/lib/content-metadata";
import { getManagedPage } from "@/lib/content-pages";

export async function generateMetadata(): Promise<Metadata> {
  return contentMetadata(await getManagedPage("coverage"), "/coverage");
}

export default async function CoveragePage() {
  const page = await getManagedPage("coverage");
  if (!page) notFound();
  return <div className="w-full bg-white">
    <section className="bg-[#0a192f] px-4 py-16 text-white sm:px-8">
      <div className="mx-auto max-w-7xl space-y-4 text-center">
        {page.hero.badge && <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#c6ff00]"><MapPin className="h-4 w-4" /><span>{page.hero.badge}</span></div>}
        <h1 className="font-display text-4xl font-extrabold text-white sm:text-6xl">{page.hero.title}</h1>
        {page.hero.description && <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{page.hero.description}</p>}
      </div>
    </section>
    <ManagedSections sections={page.sections} />
  </div>;
}
