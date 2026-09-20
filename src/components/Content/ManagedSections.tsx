import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, HelpCircle, MapPin, XCircle } from "lucide-react";
import type { ContentSection } from "@/lib/content-types";
import ServiceIcon from "./ServiceIcon";

const themeClass = {
  light: "bg-white text-[#0a192f]",
  soft: "bg-[#f8fafc] text-[#0a192f] border-y border-slate-100",
  dark: "bg-[#0a192f] text-white",
};

function Heading({ section }: { section: ContentSection }) {
  if (!section.eyebrow && !section.heading && !section.body) return null;
  return (
    <div className="mx-auto max-w-3xl space-y-3 text-center">
      {section.eyebrow && <p className={`text-xs font-bold uppercase tracking-widest ${section.theme === "dark" ? "text-[#c6ff00]" : "text-[#0066ff]"}`}>{section.eyebrow}</p>}
      {section.heading && <h2 className={`font-display text-3xl font-extrabold sm:text-4xl ${section.theme === "dark" ? "text-white" : "text-[#0a192f]"}`}>{section.heading}</h2>}
      {section.body && <p className={`whitespace-pre-line text-sm leading-relaxed ${section.theme === "dark" ? "text-slate-300" : "text-slate-500"}`}>{section.body}</p>}
    </div>
  );
}

function OptionalLink({ label, url, dark = false }: { label: string | null; url: string | null; dark?: boolean }) {
  if (!label || !url) return null;
  return <Link href={url} className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-extrabold ${dark ? "bg-[#c6ff00] text-[#0a192f]" : "bg-[#0a192f] text-white"}`}>{label}<ArrowRight className="h-4 w-4" /></Link>;
}

function RichText({ section }: { section: ContentSection }) {
  return (
    <section className={`py-20 ${themeClass[section.theme]}`}>
      <div className={`mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-8 ${section.image ? "lg:grid-cols-2" : ""}`}>
        <div className="space-y-5">
          {section.eyebrow && <p className={`text-xs font-bold uppercase tracking-widest ${section.theme === "dark" ? "text-[#c6ff00]" : "text-[#0066ff]"}`}>{section.eyebrow}</p>}
          {section.heading && <h2 className={`font-display text-3xl font-extrabold sm:text-4xl ${section.theme === "dark" ? "text-white" : "text-[#0a192f]"}`}>{section.heading}</h2>}
          {section.body && <p className={`whitespace-pre-line text-sm leading-7 ${section.theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>{section.body}</p>}
          <OptionalLink label={section.ctaLabel} url={section.ctaUrl} dark={section.theme === "dark"} />
        </div>
        {section.image && <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200/20"><Image src={section.image} alt={section.imageAlt || section.heading || "Courier service"} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div>}
      </div>
    </section>
  );
}

function FeatureGrid({ section }: { section: ContentSection }) {
  return <section className={`py-20 ${themeClass[section.theme]}`}><div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-8"><Heading section={section} />{section.items.length > 0 && <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">{section.items.map((item, index) => <div key={`${item.title}-${index}`} className={`rounded-3xl border p-8 ${section.theme === "dark" ? "border-white/10 bg-white/5" : "border-slate-200/80 bg-white shadow-xs"}`}><div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${section.theme === "dark" ? "bg-[#c6ff00] text-[#0a192f]" : "bg-[#0a192f] text-[#c6ff00]"}`}><ServiceIcon name={item.icon || "check"} className="h-6 w-6" /></div>{item.image && <div className="relative mb-5 aspect-video overflow-hidden rounded-2xl"><Image src={item.image} alt={item.imageAlt || item.title || "Service feature"} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div>}{item.title && <h3 className={`font-display text-lg font-bold ${section.theme === "dark" ? "text-white" : "text-[#0a192f]"}`}>{item.title}</h3>}{item.subtitle && <p className="mt-1 text-xs font-bold text-[#0066ff]">{item.subtitle}</p>}{item.description && <p className={`mt-3 text-xs leading-relaxed ${section.theme === "dark" ? "text-slate-300" : "text-slate-500"}`}>{item.description}</p>}<div className="mt-4"><OptionalLink label={item.linkLabel} url={item.linkUrl} dark={section.theme === "dark"} /></div></div>)}</div>}<div className="text-center"><OptionalLink label={section.ctaLabel} url={section.ctaUrl} dark={section.theme === "dark"} /></div></div></section>;
}

function Steps({ section }: { section: ContentSection }) {
  return <section className={`py-20 ${themeClass[section.theme]}`}><div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-8"><Heading section={section} />{section.items.length > 0 && <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{section.items.map((item, index) => <div key={`${item.title}-${index}`} className={`flex flex-col rounded-3xl border p-7 ${section.theme === "dark" ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"}`}><div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-xs font-extrabold ${section.theme === "dark" ? "bg-[#c6ff00] text-[#0a192f]" : "bg-[#0a192f] text-[#c6ff00]"}`}>{String(index + 1).padStart(2, "0")}</div>{item.title && <h3 className={`font-display text-base font-bold ${section.theme === "dark" ? "text-white" : "text-[#0a192f]"}`}>{item.title}</h3>}{item.description && <p className={`mt-2 text-xs leading-relaxed ${section.theme === "dark" ? "text-slate-300" : "text-slate-500"}`}>{item.description}</p>}</div>)}</div>}</div></section>;
}

function InfoCards({ section }: { section: ContentSection }) {
  return <section className={`py-20 ${themeClass[section.theme]}`}><div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-8"><Heading section={section} />{section.items.length > 0 && <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{section.items.map((item, index) => <div key={`${item.title}-${index}`} className={`flex gap-3 rounded-2xl border p-5 ${section.theme === "dark" ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"}`}><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" /><div>{item.title && <h3 className={`text-sm font-bold ${section.theme === "dark" ? "text-white" : "text-[#0a192f]"}`}>{item.title}</h3>}{item.description && <p className={`mt-1 text-xs leading-relaxed ${section.theme === "dark" ? "text-slate-300" : "text-slate-500"}`}>{item.description}</p>}</div></div>)}</div>}</div></section>;
}

function Comparison({ section }: { section: ContentSection }) {
  return <section className={`py-20 ${themeClass[section.theme]}`}><div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-8"><Heading section={section} />{section.items.length > 0 && <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-xs shadow-sm"><div className="grid grid-cols-3 bg-[#0a192f] p-4 text-sm font-bold text-white"><div>Feature</div><div className="text-[#c6ff00]">InstaDrop</div><div className="text-slate-400">Traditional network</div></div><div className="divide-y divide-slate-100">{section.items.map((item, index) => <div key={`${item.title}-${index}`} className="grid grid-cols-3 items-center gap-2 p-4"><span className="font-semibold text-slate-700">{item.title}</span><span className="flex items-center gap-1.5 font-bold text-emerald-700"><CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />{item.subtitle}</span><span className="flex items-center gap-1.5 text-slate-400"><XCircle className="h-4 w-4 shrink-0 text-red-400" />{item.description}</span></div>)}</div></div>}</div></section>;
}

function RegionGrid({ section }: { section: ContentSection }) {
  return <section className={`py-20 ${themeClass[section.theme]}`}><div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-8"><Heading section={section} />{section.items.length > 0 && <div className="grid gap-8 md:grid-cols-2">{section.items.map((item, index) => <div key={`${item.title}-${index}`} className="flex flex-col justify-between space-y-6 rounded-3xl border border-slate-200/90 bg-[#f8fafc] p-8 transition-all hover:border-[#0066ff] hover:shadow-lg"><div className="space-y-4"><div className="flex items-start justify-between gap-4"><div className="flex items-center gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0a192f] text-[#c6ff00]"><ServiceIcon name={item.icon || "building"} className="h-5 w-5" /></div>{item.title && <h3 className="font-display text-lg font-bold text-[#0a192f]">{item.title}</h3>}</div>{item.badge && <span className="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold text-emerald-700">{item.badge}</span>}</div>{item.description && <p className="text-xs leading-relaxed text-slate-500">{item.description}</p>}</div>{item.value && <div className="flex items-start gap-2 border-t border-slate-200 pt-4 text-xs text-slate-500"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0066ff]" /><span>{item.value}</span></div>}</div>)}</div>}</div></section>;
}

function Faq({ section }: { section: ContentSection }) {
  return <section className={`py-20 ${themeClass[section.theme]}`}><div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-8"><Heading section={section} />{section.items.length > 0 && <div className="space-y-4">{section.items.map((item, index) => <details key={`${item.title}-${index}`} className={`group rounded-2xl border p-6 ${section.theme === "dark" ? "border-white/10 bg-white/5" : "border-slate-200 bg-[#f8fafc]"}`}><summary className={`flex cursor-pointer list-none items-center gap-3 font-bold ${section.theme === "dark" ? "text-white" : "text-[#0a192f]"}`}><HelpCircle className="h-5 w-5 shrink-0 text-[#0066ff]" />{item.title}</summary>{item.description && <p className={`mt-3 pl-8 text-xs leading-relaxed ${section.theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>{item.description}</p>}</details>)}</div>}</div></section>;
}

function Cta({ section }: { section: ContentSection }) {
  return <section className={`py-16 text-center ${themeClass[section.theme]}`}><div className="mx-auto max-w-4xl space-y-5 px-4 sm:px-8"><Heading section={section} /><OptionalLink label={section.ctaLabel} url={section.ctaUrl} dark={section.theme === "dark"} /></div></section>;
}

export default function ManagedSections({ sections }: { sections: ContentSection[] }) {
  return <>{sections.map((section, index) => {
    const key = `${section.type}-${index}`;
    if (section.type === "rich_text") return <RichText key={key} section={section} />;
    if (section.type === "feature_grid") return <FeatureGrid key={key} section={section} />;
    if (section.type === "steps") return <Steps key={key} section={section} />;
    if (section.type === "info_cards") return <InfoCards key={key} section={section} />;
    if (section.type === "comparison") return <Comparison key={key} section={section} />;
    if (section.type === "region_grid") return <RegionGrid key={key} section={section} />;
    if (section.type === "faq") return <Faq key={key} section={section} />;
    if (section.type === "cta") return <Cta key={key} section={section} />;
    return null;
  })}</>;
}
