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
      <section className="bg-slate-50 px-4 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">Booking process</p><h2 className="mt-3 font-display text-3xl font-extrabold text-[#0a192f]">How {service.title.toLowerCase()} works</h2><p className="mt-4 leading-7 text-slate-600">Provide the collection and delivery postcodes, timing, item count, weight, dimensions and any access or handling notes. Dispatch reviews the request, confirms the suitable vehicle and collection plan, then sends a tailored quotation. After booking, use the supplied reference for available status and proof-of-delivery records.</p></div>
          <ol className="mt-10 grid gap-5 md:grid-cols-3"><li className="rounded-3xl border border-slate-200 bg-white p-6"><strong className="text-[#0066ff]">01 · Describe the load</strong><p className="mt-2 text-sm leading-6 text-slate-600">Give accurate dimensions, weight, addresses and handling requirements.</p></li><li className="rounded-3xl border border-slate-200 bg-white p-6"><strong className="text-[#0066ff]">02 · Confirm the plan</strong><p className="mt-2 text-sm leading-6 text-slate-600">Dispatch confirms vehicle availability, timing, price and applicable terms.</p></li><li className="rounded-3xl border border-slate-200 bg-white p-6"><strong className="text-[#0066ff]">03 · Delivery record</strong><p className="mt-2 text-sm leading-6 text-slate-600">Track the recorded status and access POD when it has been captured.</p></li></ol>
        </div>
      </section>
      <section className="px-4 py-20 sm:px-8"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">Before requesting a quote</p><h2 className="mt-3 font-display text-3xl font-extrabold text-[#0a192f]">Information dispatch needs</h2></div><ul className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2"><li className="rounded-2xl bg-slate-50 p-4">Full collection and delivery addresses</li><li className="rounded-2xl bg-slate-50 p-4">Required date or time window</li><li className="rounded-2xl bg-slate-50 p-4">Total item count, size and weight</li><li className="rounded-2xl bg-slate-50 p-4">Site access and loading requirements</li><li className="rounded-2xl bg-slate-50 p-4">Contents, value and special handling</li><li className="rounded-2xl bg-slate-50 p-4">Working contact details at both ends</li></ul></div></section>
    </main>
  );
}
