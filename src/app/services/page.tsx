import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import QuoteWidget from "@/components/Home/QuoteWidget";
import ManagedSections from "@/components/Content/ManagedSections";
import ServiceIcon from "@/components/Content/ServiceIcon";
import { contentMetadata } from "@/lib/content-metadata";
import { getManagedPage, getServices } from "@/lib/content-pages";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://instadrop.uk";

export async function generateMetadata(): Promise<Metadata> {
  return contentMetadata(await getManagedPage("services"), "/services");
}

export default async function ServicesPage() {
  const [page, services] = await Promise.all([getManagedPage("services"), getServices()]);
  if (!page) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` }] },
      { "@type": "OfferCatalog", name: page.title, itemListElement: services.map((service) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service.title, url: `${siteUrl}/${service.slug}` } })) },
    ],
  };

  return <div className="w-full bg-white">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <section className="overflow-hidden bg-[#0a192f] px-4 py-16 text-white sm:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-7">
          {page.hero.badge && <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#c6ff00]"><ServiceIcon name={page.icon || "zap"} className="h-4 w-4" /><span>{page.hero.badge}</span></div>}
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl">{page.hero.title}</h1>
          {page.hero.description && <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">{page.hero.description}</p>}
          {page.hero.ctaLabel && page.hero.ctaUrl && <div className="pt-2"><Link href={page.hero.ctaUrl} className="inline-flex items-center gap-2.5 rounded-full bg-[#c6ff00] px-7 py-3.5 text-sm font-extrabold text-[#0a192f] shadow-md transition-all hover:bg-[#b2e600]">{page.hero.ctaLabel}<ArrowRight className="h-4 w-4" /></Link></div>}
        </div>
        <div className="flex justify-center lg:col-span-5 lg:justify-end"><QuoteWidget /></div>
      </div>
    </section>

    {services.length > 0 && <section className="bg-white py-20"><div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-8"><div className="mx-auto max-w-3xl space-y-3 text-center"><p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">EXPRESS SOLUTIONS DIRECTORY</p><h2 className="font-display text-3xl font-extrabold text-[#0a192f] sm:text-5xl">Specialized Courier Services</h2><p className="mx-auto max-w-2xl text-base text-slate-500">Choose a service to review its requirements, process and booking details.</p></div><div className="space-y-12">{services.map((service, index) => <article key={service.slug} className={`grid items-center gap-10 rounded-3xl border p-8 sm:p-12 lg:grid-cols-12 ${index % 2 === 0 ? "border-slate-200/80 bg-[#f8fafc]" : "border-slate-200 bg-white shadow-sm"}`}><div className="space-y-6 lg:col-span-7"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0a192f] text-[#c6ff00]"><ServiceIcon name={service.icon} className="h-6 w-6" /></div>{service.card.badge && <span className="rounded-full bg-[#c6ff00] px-3 py-1 text-xs font-extrabold text-[#0a192f]">{service.card.badge}</span>}</div><div><h3 className="font-display text-2xl font-extrabold text-[#0a192f] sm:text-3xl">{service.title}</h3>{service.card.subtitle && <p className="mt-1 text-sm font-semibold text-[#0066ff]">{service.card.subtitle}</p>}</div>{service.card.description && <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">{service.card.description}</p>}{service.card.features.length > 0 && <ul className="grid gap-2.5 pt-2 text-xs font-semibold text-slate-700 sm:grid-cols-2">{service.card.features.map((feature) => <li key={feature} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" /><span>{feature}</span></li>)}</ul>}<div className="pt-2"><Link href={`/${service.slug}`} className="group inline-flex items-center gap-2 rounded-full bg-[#0a192f] px-6 py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#051329]">Learn More & Book {service.navigationTitle}<ArrowRight className="h-4 w-4 text-[#c6ff00] transition-transform group-hover:translate-x-1" /></Link></div></div><div className="space-y-6 rounded-2xl border border-[#0a192f] bg-[#0a192f] p-8 text-white lg:col-span-5"><div className="space-y-2"><p className="text-xs font-bold uppercase tracking-wider text-[#c6ff00]">Booking Details</p><h4 className="font-display text-xl font-bold text-white">Direct Vehicle Dispatch</h4></div>{service.card.details.length > 0 ? <div className="space-y-3 text-xs text-slate-300">{service.card.details.map((detail, detailIndex) => <div key={`${detail.label}-${detailIndex}`} className="flex justify-between gap-4 border-b border-slate-800 py-2 last:border-0"><span>{detail.label}:</span><span className="text-right font-bold text-white">{detail.value}</span></div>)}</div> : <p className="text-xs leading-relaxed text-slate-300">Dispatch confirms the vehicle, timing and terms for your route before booking.</p>}</div></article>)}</div></div></section>}
    <ManagedSections sections={page.sections} />
  </div>;
}
