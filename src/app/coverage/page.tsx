import type { Metadata } from "next";
import { MapPin, ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UK Courier Coverage",
  description:
    "Explore InstaDrop courier coverage for same-day, scheduled and dedicated vehicle delivery across the UK.",
  keywords: [
    "UK same day courier coverage",
    "London same day courier",
    "Birmingham courier pickup",
    "Manchester express courier",
    "Leeds pallet courier",
    "Glasgow courier hub",
  ],
  openGraph: {
    title: "UK Coverage & Dispatch Hubs | InstaDrop Same-Day Courier",
    description:
      "Collection availability and timing are confirmed for each postcode and vehicle requirement.",
  },
};

export default function CoveragePage() {
  const regions = [
    {
      city: "London & Greater London",
      hubs: "Central London, City, Heathrow, M25 Orbital, Croydon, Watford",
      time: "Within 30-45 mins",
      postcodes: "EC, WC, E, N, NW, SE, SW, W, BR, CR, DA, EN, HA, IG, KT, RM, SM, TW, UB",
    },
    {
      city: "Birmingham & West Midlands",
      hubs: "Birmingham City Centre, Solihull, Coventry, Wolverhampton, Dudley",
      time: "Within 45 mins",
      postcodes: "B, CV, DY, WS, WV",
    },
    {
      city: "Manchester & North West",
      hubs: "Manchester Airport Hub, Salford, Trafford, Bolton, Stockport, Warrington",
      time: "Within 45 mins",
      postcodes: "M, BL, OL, SK, WA, WN",
    },
    {
      city: "Leeds & West Yorkshire",
      hubs: "Leeds Logistics Park, Bradford, Wakefield, Huddersfield, Halifax",
      time: "Within 45 mins",
      postcodes: "LS, BD, HD, HG, WF, YO",
    },
    {
      city: "Glasgow & Central Scotland",
      hubs: "Glasgow City Centre, Paisley, Eurocentral, Edinburgh Hub",
      time: "Within 60 mins",
      postcodes: "G, PA, FK, EH, ML",
    },
    {
      city: "Bristol & South West",
      hubs: "Bristol Avonmouth, Bath, Gloucester, Swindon, Exeter",
      time: "Within 60 mins",
      postcodes: "BS, BA, EX, TA, GL",
    },
    {
      city: "Liverpool & Merseyside",
      hubs: "Liverpool Port Hub, Birkenhead, St Helens, Chester, Southport",
      time: "Within 45 mins",
      postcodes: "L, CH, PR, WA",
    },
    {
      city: "Newcastle & North East",
      hubs: "Newcastle Upon Tyne, Sunderland, Durham, Teesside Logistics",
      time: "Within 60 mins",
      postcodes: "NE, SR, DH, TS",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Header Banner */}
      <section className="bg-[#0a192f] text-white py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#c6ff00] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            <span>100% MAINLAND UK COVERAGE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display">
            UK Nationwide Dispatch Hubs
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We arrange courier collections across the UK. Exact availability and collection timing depend on the postcode, vehicle and booking requirements.
          </p>
        </div>
      </section>

      {/* 2. Regional Hub Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0066ff]">
              REGIONAL DISPATCH CENTRES
            </p>
            <h2 className="text-3xl font-extrabold text-[#0a192f] font-display">
              Select Your Local Pickup Region
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regions.map((reg) => (
              <div
                key={reg.city}
                className="bg-[#f8fafc] rounded-3xl p-8 border border-slate-200/90 hover:border-[#0066ff] hover:shadow-lg transition-all space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0a192f] text-[#c6ff00] flex items-center justify-center font-bold">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0a192f] font-display">
                        {reg.city}
                      </h3>
                    </div>
                    <span className="text-[11px] font-extrabold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                      {reg.time}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs text-slate-600">
                    <p>
                      <strong className="text-slate-800">Key Hubs:</strong> {reg.hubs}
                    </p>
                    <p className="text-slate-500">
                      <strong className="text-slate-800">Postcode Sectors:</strong> {reg.postcodes}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <Link
                    href="/instant-quote"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0066ff] hover:text-blue-800 transition-colors"
                  >
                    <span>Book Pickup in {reg.city.split("&")[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Airport & Freight Hub Express */}
      <section className="py-16 bg-[#0a192f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 text-center">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#c6ff00]">
              AIRPORT & CARGO TERMINALS
            </p>
            <h2 className="text-3xl font-extrabold text-white font-display">
              Air Freight & Port Same-Day Express
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto">
              Urgent collection from Heathrow Cargo Terminal, Gatwick, Manchester Airport Cargo, and Felixstowe Port directly to your destination.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/instant-quote"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#c6ff00] text-[#0a192f] font-extrabold text-sm hover:bg-[#b2e600] transition-all"
            >
              <span>Book Airport / Port Courier</span>
              <ArrowRight className="w-4 h-4 text-[#0a192f]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
