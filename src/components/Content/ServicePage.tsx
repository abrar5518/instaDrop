import Link from "next/link";
import QuoteWidget from "@/components/Home/QuoteWidget";
import { courierServices } from "@/content/siteContent";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type Service = (typeof courierServices)[number];

export default function ServicePage({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <main className="bg-white">
      <section className="bg-[#0a192f] px-4 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
          <div className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#c6ff00]">
              <Icon className="h-4 w-4" /> Professional UK courier service
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-6xl">{service.title}</h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">{service.description}</p>
            <Link href="/instant-quote" className="inline-flex items-center gap-2 rounded-full bg-[#c6ff00] px-7 py-3.5 text-sm font-extrabold text-[#0a192f]">
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-5"><QuoteWidget /></div>
        </div>
      </section>
      <section className="px-4 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">How this service helps</p>
            <h2 className="font-display text-3xl font-extrabold text-[#0a192f] sm:text-4xl">A clear delivery option for your consignment</h2>
            <p className="leading-relaxed text-slate-600">{service.short} Tell our dispatch team what is moving, where it needs to go and when it must arrive; we will match the booking to a suitable vehicle.</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.examples.map((item) => <li key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 p-5 font-semibold text-[#0a192f]"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />{item}</li>)}
          </ul>
        </div>
      </section>
    </main>
  );
}
