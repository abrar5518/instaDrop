import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import QuoteWidget from "./QuoteWidget";

export default function HeroSection() {
  return (
    <section className="bg-[#0a192f] text-white py-16 lg:py-20 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Text Content (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Lime Green Tag */}
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#c6ff00]">
            INSTADROP • 24/7 COURIER NETWORK
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1]">
            From your door to theirs, the same day.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
            Fast, fully tracked parcel delivery with secure online payment and proof of delivery—wherever it needs to go across the UK.
          </p>

          {/* Lime Green CTA Button */}
          <div className="pt-2">
            <Link
              href="/instant-quote"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#c6ff00] hover:bg-[#b2e600] text-[#0a192f] font-extrabold text-sm transition-all shadow-md hover:scale-102"
            >
              <span>Get my delivery quote</span>
              <ArrowRight className="w-4 h-4 text-[#0a192f]" />
            </Link>
          </div>

          {/* Bullet Ticks */}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#c6ff00]" />
              <span>Collection time confirmed by dispatch</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#c6ff00]" />
              <span>Dedicated vehicle</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#c6ff00]" />
              <span>Real-time updates</span>
            </div>
          </div>
        </div>

        {/* Right Form Card (5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <QuoteWidget />
        </div>
      </div>
    </section>
  );
}
