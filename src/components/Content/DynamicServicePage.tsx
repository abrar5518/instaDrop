import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, ShieldCheck, Truck } from "lucide-react";
import QuoteWidget from "@/components/Home/QuoteWidget";
import { ContactPhone } from "@/components/Contact/ContactSettings";
import { getService } from "@/lib/content-pages";
import ManagedSections from "./ManagedSections";
import ServiceIcon from "./ServiceIcon";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://instadrop.uk";

export default async function DynamicServicePage({ slug }: { slug: string }) {
  const page = await getService(slug);
  if (!page) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
          { "@type": "ListItem", position: 3, name: page.title, item: `${siteUrl}/${page.slug}` },
        ],
      },
      {
        "@type": "Service",
        name: page.title,
        description: page.seo.description || page.hero.description || page.summary,
        url: `${siteUrl}/${page.slug}`,
        provider: { "@type": "DeliveryService", name: "InstaDrop Courier Services", url: siteUrl },
        areaServed: { "@type": "Country", name: "United Kingdom" },
      },
      ...page.sections.filter((section) => section.type === "faq" && section.items.length > 0).map((section) => ({
        "@type": "FAQPage",
        mainEntity: section.items.filter((item) => item.title && item.description).map((item) => ({
          "@type": "Question",
          name: item.title,
          acceptedAnswer: { "@type": "Answer", text: item.description },
        })),
      })),
    ],
  };

  return <div className="w-full bg-white">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <section className="overflow-hidden bg-[#0a192f] px-4 py-16 text-white sm:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-7">
          {page.hero.badge && <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#c6ff00]"><ServiceIcon name={page.icon} className="h-4 w-4" /><span>{page.hero.badge}</span></div>}
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl">{page.hero.title}</h1>
          {page.hero.description && <p className="max-w-xl text-base font-normal leading-relaxed text-slate-300 sm:text-lg">{page.hero.description}</p>}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {page.hero.ctaLabel && page.hero.ctaUrl && <Link href={page.hero.ctaUrl} className="inline-flex items-center gap-2.5 rounded-full bg-[#c6ff00] px-7 py-3.5 text-sm font-extrabold text-[#0a192f] shadow-md transition-all hover:bg-[#b2e600]">{page.hero.ctaLabel}<ArrowRight className="h-4 w-4" /></Link>}
            <ContactPhone prefix="24/7 Hotline: " className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-xs font-bold text-white hover:bg-white/20" />
          </div>
          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-slate-300"><span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#c6ff00]" />Timing confirmed by dispatch</span><span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-400" />Terms confirmed before booking</span><span className="flex items-center gap-2"><Truck className="h-4 w-4 text-[#0066ff]" />Suitable vehicle arranged</span></div>
        </div>
        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          {page.hero.image ? <div className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl border border-white/10"><Image src={page.hero.image} alt={page.hero.imageAlt || page.hero.title} fill priority sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" /></div> : <QuoteWidget />}
        </div>
      </div>
    </section>
    <ManagedSections sections={page.sections} />
  </div>;
}
