import Link from "next/link";
import QuoteWidget from "@/components/Home/QuoteWidget";
import { industries } from "@/content/siteContent";
import { ArrowRight, CheckCircle2, Clock3, MapPin, ShieldCheck, Truck } from "lucide-react";

type Industry = (typeof industries)[number];

export default function IndustryPage({ industry }: { industry: Industry }) {
  const Icon = industry.icon;
  const benefits = [
    { icon: Truck, title: "Direct delivery", text: "Collection-to-destination transport without unnecessary depot handling." },
    { icon: Clock3, title: "Time-critical support", text: "Same-day and scheduled options matched to operational deadlines." },
    { icon: ShieldCheck, title: "Careful handling", text: "A suitable vehicle and clear instructions for every consignment." },
    { icon: MapPin, title: "Nationwide coverage", text: "Professional courier support across mainland United Kingdom." },
  ];

  return <main className="bg-white">
    <section className="overflow-hidden bg-[#0a192f] px-4 py-16 text-white sm:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
        <div className="space-y-6 lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#c6ff00]"><Icon className="h-4 w-4" /> Industries we serve</div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] sm:text-6xl">{industry.title}<span className="mt-2 block text-[#c6ff00]">Courier Support</span></h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{industry.description} InstaDrop provides direct, dependable UK transport for urgent and planned sector requirements.</p>
          <div className="flex flex-wrap gap-3 pt-1"><Link href="/instant-quote" className="inline-flex items-center gap-2 rounded-full bg-[#c6ff00] px-7 py-3.5 text-sm font-extrabold text-[#0a192f] shadow-md transition-colors hover:bg-[#b2e600]">Get a speedy quote <ArrowRight className="h-4 w-4" /></Link><Link href="/contact" className="inline-flex items-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10">Speak to dispatch</Link></div>
        </div>
        <div className="lg:col-span-5"><QuoteWidget /></div>
      </div>
    </section>

    <section className="px-4 py-20 sm:px-8"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
      <div className="space-y-5 lg:col-span-5"><p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">Typical consignments</p><h2 className="font-display text-3xl font-extrabold text-[#0a192f] sm:text-5xl">What we can move</h2><p className="text-lg leading-relaxed text-slate-600">{industry.consignments}</p><p className="text-sm leading-relaxed text-slate-500">Tell us the dimensions, weight, access requirements and deadline. Our dispatch team will recommend the most suitable courier service and vehicle.</p></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">{benefits.map(({ icon: BenefitIcon, title, text }, index) => <article key={title} className={`rounded-3xl border p-6 ${index === 0 ? "border-[#0a192f] bg-[#0a192f] text-white" : "border-slate-200 bg-[#f8fafc] text-[#0a192f]"}`}><div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${index === 0 ? "bg-[#c6ff00] text-[#0a192f]" : "bg-blue-50 text-[#0066ff]"}`}><BenefitIcon className="h-5 w-5" /></div><h3 className="font-display text-lg font-bold">{title}</h3><p className={`mt-2 text-sm leading-relaxed ${index === 0 ? "text-slate-300" : "text-slate-500"}`}>{text}</p></article>)}</div>
    </div></section>

    <section className="bg-[#f8fafc] px-4 py-16 sm:px-8"><div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12"><div className="grid gap-10 lg:grid-cols-2 lg:items-center"><div><p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">A straightforward process</p><h2 className="mt-3 font-display text-3xl font-extrabold text-[#0a192f]">From booking to proof of delivery</h2></div><div className="grid gap-3 sm:grid-cols-2">{["Share collection and delivery details", "Confirm the right vehicle and timing", "Receive clear dispatch updates", "Access delivery status and POD"].map((item) => <p key={item} className="flex items-start gap-2.5 text-sm font-semibold text-slate-700"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />{item}</p>)}</div></div></div></section>

    <section className="bg-[#0066ff] px-4 py-14 text-white sm:px-8"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left"><div><p className="text-xs font-bold uppercase tracking-widest text-blue-100">Ready when you are</p><h2 className="mt-2 font-display text-3xl font-extrabold">Need a {industry.title.toLowerCase()} courier?</h2></div><Link href="/instant-quote" className="inline-flex items-center gap-2 rounded-full bg-[#c6ff00] px-7 py-3.5 text-sm font-extrabold text-[#0a192f]">Request your quote <ArrowRight className="h-4 w-4" /></Link></div></section>
  </main>;
}
