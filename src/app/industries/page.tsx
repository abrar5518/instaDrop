import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { industries } from "@/content/siteContent";

export const metadata: Metadata = {
  alternates: { canonical: "/industries" },
  title: "Industries We Serve | InstaDrop",
  description: "Sector-specific same-day courier and freight support for construction, events, legal, engineering, healthcare, print, retail and telecoms.",
};

export default function IndustriesPage() {
  return <main className="bg-white">
    <section className="relative overflow-hidden bg-[#0a192f] px-4 py-20 text-white sm:px-8">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#0066ff]/20 blur-3xl" />
      <div className="relative mx-auto max-w-5xl text-center"><div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#c6ff00]"><Zap className="h-4 w-4 fill-[#c6ff00]" /> Professional sector logistics</div><h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-extrabold leading-tight sm:text-6xl">Courier expertise for <span className="text-[#c6ff00]">UK industries</span></h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">Direct, dependable delivery support for sectors where timing, communication and careful handling matter.</p><Link href="/instant-quote" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#c6ff00] px-7 py-3.5 text-sm font-extrabold text-[#0a192f]">Get a speedy quote <ArrowRight className="h-4 w-4" /></Link></div>
    </section>

    <section className="px-4 py-20 sm:px-8"><div className="mx-auto max-w-7xl"><div className="mb-12 max-w-3xl"><p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">Industries we serve</p><h2 className="mt-3 font-display text-3xl font-extrabold text-[#0a192f] sm:text-5xl">Delivery solutions customers recognise</h2><p className="mt-4 text-slate-500">Choose your sector to see typical consignments and how InstaDrop supports urgent and planned movements.</p></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{industries.map((industry, index) => { const Icon = industry.icon; const featured = index === 0 || index === 5; return <article key={industry.slug} className={`group flex flex-col rounded-3xl border p-7 transition-all hover:-translate-y-1 hover:shadow-lg ${featured ? "border-[#0a192f] bg-[#0a192f] text-white" : "border-slate-200 bg-white text-[#0a192f]"}`}><div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${featured ? "bg-[#c6ff00] text-[#0a192f]" : "bg-blue-50 text-[#0066ff]"}`}><Icon className="h-6 w-6" /></div><h2 className="font-display text-xl font-extrabold">{industry.title}</h2><p className={`mt-3 flex-1 text-sm leading-relaxed ${featured ? "text-slate-300" : "text-slate-500"}`}>{industry.consignments}</p><Link href={`/industries/${industry.slug}`} className={`mt-6 inline-flex items-center gap-2 text-sm font-bold ${featured ? "text-[#c6ff00]" : "text-[#0066ff]"}`}>Explore industry <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></article>; })}</div></div></section>

    <section className="bg-[#f8fafc] px-4 py-16 sm:px-8"><div className="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 lg:grid-cols-2 lg:items-center"><div><p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">One dependable courier partner</p><h2 className="mt-3 font-display text-3xl font-extrabold text-[#0a192f]">Professional support across every sector</h2><p className="mt-4 leading-relaxed text-slate-500">Every booking starts with the consignment, deadline and access requirements—not a one-size-fits-all delivery promise.</p></div><div className="grid gap-3 sm:grid-cols-2">{["Same-day and scheduled options", "Vehicles matched to each load", "Direct dispatch communication", "Status updates and proof of delivery"].map((item) => <p key={item} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700"><CheckCircle2 className="h-4 w-4 text-emerald-500" />{item}</p>)}</div></div></section>
  </main>;
}
