"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { industries } from "@/content/siteContent";

export default function HeaderIndustriesDropdown() {
  const [open, setOpen] = useState(false);
  return <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
    <button onClick={() => setOpen(!open)} className="flex items-center gap-1 py-2 text-xs font-semibold text-slate-700 hover:text-[#0a192f]" aria-expanded={open}>Industries <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} /></button>
    {open && <div className="absolute left-1/2 top-full z-50 w-[34rem] -translate-x-1/2 pt-2"><div className="grid grid-cols-2 gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">{industries.map((industry) => { const Icon = industry.icon; return <Link key={industry.slug} href={`/industries/${industry.slug}`} onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-xl p-2.5 hover:bg-slate-50"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#0066ff]"><Icon className="h-4 w-4" /></div><span className="text-xs font-bold text-[#0a192f]">{industry.title}</span></Link>; })}<Link href="/industries" onClick={() => setOpen(false)} className="col-span-2 mt-1 flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-[11px] font-bold text-[#0a192f]">View all industries <ArrowRight className="h-3.5 w-3.5" /></Link></div></div>}
  </div>;
}
