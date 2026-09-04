"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { industries } from "@/content/siteContent";

export default function HeaderIndustriesDropdown() {
  const [open, setOpen] = useState(false);
  return <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
    <button onClick={() => setOpen(!open)} className="flex items-center gap-1 py-2 text-xs font-semibold text-slate-700 hover:text-[#0a192f]" aria-expanded={open}>Industries <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} /></button>
    {open && <div className="absolute -left-4 top-full z-50 w-80 pt-2 animate-in fade-in zoom-in-95 duration-150"><div className="space-y-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">{industries.map((industry) => { const Icon = industry.icon; return <Link key={industry.slug} href={`/industries/${industry.slug}`} onClick={() => setOpen(false)} className="group flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-[#f8fafc]"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0a192f] text-[#c6ff00] transition-transform group-hover:scale-105"><Icon className="h-4 w-4" /></div><div><p className="text-xs font-bold text-[#0a192f] transition-colors group-hover:text-[#0066ff]">{industry.title}</p><p className="line-clamp-1 text-[10px] text-slate-400">{industry.description}</p></div></Link>; })}<div className="border-t border-slate-100 pt-2"><Link href="/industries" onClick={() => setOpen(false)} className="flex items-center justify-between rounded-xl bg-[#f8fafc] px-3 py-2 text-[11px] font-bold text-[#0a192f] transition-colors hover:text-[#0066ff]">View All Industries <ArrowRight className="h-3.5 w-3.5" /></Link></div></div></div>}
  </div>;
}
