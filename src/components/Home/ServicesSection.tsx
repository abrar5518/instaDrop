import { Zap, Briefcase, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">
            DELIVERY SERVICES
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0a192f] font-display">
            Built for deliveries that can’t wait
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            From urgent documents to high-value freight, every delivery gets a dedicated vehicle and proactive support.
          </p>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Same-day delivery */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 flex flex-col justify-between hover:shadow-lg transition-shadow space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066ff] flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0a192f] font-display">
                Same-day delivery
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Direct collection and delivery anywhere in the UK, often within hours.
              </p>
            </div>
            <Link
              href="#quote-form"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0066ff] hover:text-blue-700 transition-colors pt-4"
            >
              <span>Explore service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: Business courier (Dark Navy featured card in Figma!) */}
          <div className="bg-[#0a192f] text-white rounded-3xl p-8 border border-[#0a192f] shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#c6ff00] text-[#0a192f] flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Business courier
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Reliable, scalable delivery support for teams with regular or time-critical needs.
              </p>
            </div>
            <Link
              href="#quote-form"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#c6ff00] hover:text-white transition-colors pt-4"
            >
              <span>Explore service</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#c6ff00]" />
            </Link>
          </div>

          {/* Card 3: Specialist transport */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 flex flex-col justify-between hover:shadow-lg transition-shadow space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066ff] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0a192f] font-display">
                Specialist transport
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Careful handling for fragile, high-value, medical, and confidential items.
              </p>
            </div>
            <Link
              href="#quote-form"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0066ff] hover:text-blue-700 transition-colors pt-4"
            >
              <span>Explore service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
