import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/terms-and-conditions" },
  title: "Courier Terms & Conditions",
  description:
    "InstaDrop courier terms covering bookings, collection windows, payment, prohibited goods and delivery records.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="w-full bg-white">
      <section className="bg-[#0a192f] text-white py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c6ff00]">OPERATIONAL TERMS</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display">Terms & Conditions</h1>
          <p className="text-xs text-slate-400">Booking, payment and transport terms • InstaDrop Courier Services Ltd</p>
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
            <h2 className="text-lg font-bold text-[#0a192f] font-display">2. Collection Windows</h2>
            <p>
              Collection windows are estimates until confirmed by dispatch and depend on location, vehicle availability, traffic, weather and accurate sender information.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0a192f] font-display">3. Goods-in-Transit Terms</h2>
            <p>
              Applicable cover, exclusions and liability limits are those confirmed for the individual booking. Customers must accurately declare the goods and their value and package them appropriately for transport.
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
