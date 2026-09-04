import Link from "next/link";
import { industries } from "@/content/siteContent";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type Industry = (typeof industries)[number];

export default function IndustryPage({ industry }: { industry: Industry }) {
  const Icon = industry.icon;
  return (
    <main className="bg-white">
      <section className="bg-[#0a192f] px-4 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#c6ff00] text-[#0a192f]"><Icon className="h-8 w-8" /></div>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#c6ff00]">Industries we serve</p>
          <h1 className="font-display text-4xl font-extrabold sm:text-6xl">{industry.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{industry.description}</p>
        </div>
      </section>
      <section className="px-4 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl border border-slate-200 bg-slate-50 p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">Typical consignments</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-[#0a192f]">What we can move</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{industry.consignments}</p>
          </div>
          <div className="space-y-5 rounded-2xl bg-white p-7 shadow-sm">
            {["Direct collection and delivery", "A vehicle matched to the load", "Clear dispatch communication", "Delivery status and proof of delivery"].map((item) => <p key={item} className="flex items-center gap-3 font-semibold text-[#0a192f]"><CheckCircle2 className="h-5 w-5 text-emerald-500" />{item}</p>)}
            <Link href="/instant-quote" className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#0a192f] px-6 py-3 text-sm font-bold text-white">Get a quote <ArrowRight className="h-4 w-4 text-[#c6ff00]" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
