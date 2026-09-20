"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import type { ServiceSummary } from "@/lib/content-types";
import ServiceIcon from "@/components/Content/ServiceIcon";

export default function HeaderServicesDropdown({ services }: { services: ServiceSummary[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function close(event: KeyboardEvent | MouseEvent) {
      if (event instanceof KeyboardEvent && event.key === "Escape") setIsOpen(false);
      if (event instanceof MouseEvent && !containerRef.current?.contains(event.target as Node)) setIsOpen(false);
    }
    document.addEventListener("keydown", close);
    document.addEventListener("mousedown", close);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("mousedown", close);
    };
  }, []);

  return (
    <div ref={containerRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-[#0a192f] transition-colors py-2 focus:outline-none"
        aria-expanded={isOpen}
        aria-controls="desktop-services-menu"
        aria-haspopup="menu"
      >
        <span>Services</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#0a192f]" : ""}`} />
      </button>

      {isOpen && (
        <div id="desktop-services-menu" className="absolute top-full -left-4 z-50 w-72 pt-2 animate-in fade-in zoom-in-95 duration-150">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-3 space-y-1">
            {services.map((s) => {
              return (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#f8fafc] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#0a192f] text-[#c6ff00] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <ServiceIcon name={s.icon} className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0a192f] group-hover:text-[#0066ff] transition-colors">
                      {s.navigationTitle}
                    </p>
                    <p className="text-[10px] text-slate-400">
                      {s.summary}
                    </p>
                  </div>
                </Link>
              );
            })}

            <div className="pt-2 border-t border-slate-100">
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3 py-2 text-[11px] font-bold text-[#0a192f] hover:text-[#0066ff] bg-[#f8fafc] rounded-xl transition-colors"
              >
                <span>View All Services Directory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
