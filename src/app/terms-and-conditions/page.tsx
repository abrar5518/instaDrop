import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Goods-In-Transit Insurance Policy",
  description:
    "InstaDrop Same-Day Courier Terms and Conditions. £50,000 Goods-in-Transit insurance policy details, 60-minute pickup SLAs, payment terms, and operational guidelines.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="w-full bg-white">
      <section className="bg-[#0a192f] text-white py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c6ff00]">OPERATIONAL TERMS</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display">Terms & Conditions</h1>
          <p className="text-xs text-slate-400">Goods-In-Transit Policy & SLA Terms • InstaDrop Courier Services Ltd</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8 text-xs text-slate-600 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0a192f] font-display">1. Contract & Booking Scope</h2>
            <p>
              These Terms & Conditions apply to all same-day parcel, pallet, document, and freight transport bookings placed with InstaDrop Courier Services Ltd. By placing a booking online or via our 24/7 telephone desk, you accept these operational terms in full.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0a192f] font-display">2. 60-Minute Pickup SLA & Guarantees</h2>
            <p>
              Our 60-minute pickup guarantee applies to mainland UK locations within operating logistics zones. While our average driver collection time is under 45 minutes, severe traffic delays, extreme weather conditions, or incorrect sender address details may occasionally extend pickup windows.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0a192f] font-display">3. £50,000 Goods-in-Transit Insurance</h2>
            <p>
              Every booking automatically includes up to £50,000 Goods-in-Transit insurance coverage underwritten by leading UK cargo insurers. Coverage covers physical loss or damage during transit caused by traffic collisions or vehicle theft, provided goods were securely packaged by the sender.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0a192f] font-display">4. Excluded & Prohibited Items</h2>
            <p>
              We do not transport hazardous explosives, illegal narcotics, unlicensed firearms, radioactive materials, or livestock. Flammable liquids, biological medical samples, and fragile items must be declared prior to booking dispatch.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0a192f] font-display">5. Cancellation & Waiting Time Terms</h2>
            <p>
              Bookings canceled prior to driver dispatch incur zero cancellation fees. If canceled after a driver has been dispatched and arrived at the pickup address, a minimum call-out fee applies. Drivers include 15 minutes of free loading/unloading time per stop.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
