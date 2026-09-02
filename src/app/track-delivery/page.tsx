"use client";

import { useState } from "react";
import { Search, CheckCircle2, Download, Truck, ArrowRight, Smartphone } from "lucide-react";
import { ContactPhone } from "@/components/Contact/ContactSettings";

type TrackingResult = {
  tracking_number: string;
  customer_name: string;
  vehicle_type: string;
  status: string;
  pickup_address: string;
  delivery_address: string;
  carrier_name: string;
  pod: { recipient_name: string; signature_url: string | null; photo_url: string | null; delivered_at: string } | null;
};

export default function TrackDeliveryPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber) return;
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const response = await fetch(`/api/tracking/${encodeURIComponent(trackingNumber.trim())}`, { cache: "no-store" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Tracking reference not found.");
      setResult(data);
    } catch (searchError) {
      setError(searchError instanceof Error ? searchError.message : "Tracking is temporarily unavailable.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white">
      {/* 1. Header Banner */}
      <section className="bg-[#0a192f] text-white py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#c6ff00] text-xs font-bold uppercase tracking-wider">
            <Smartphone className="w-4 h-4" />
            <span>REAL-TIME GPS & POD PORTAL</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display">
            Track Delivery & Download POD
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Enter your InstaDrop tracking reference number or booking ID below to view live courier GPS location, ETA, and electronic proof of delivery.
          </p>

          {/* Search Box Form */}
          <div className="max-w-xl mx-auto pt-4">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="e.g. INSTA-884920 or Booking Ref"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-white text-slate-900 rounded-2xl font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-[#c6ff00]"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-7 py-3.5 rounded-2xl bg-[#c6ff00] hover:bg-[#b2e600] text-[#0a192f] font-extrabold text-sm transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>{loading ? "Searching..." : "Track Now"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
          {error && <p role="alert" className="max-w-xl mx-auto mt-3 text-xs bg-red-50 border border-red-200 text-red-700 rounded-xl p-3">{error}</p>}
        </div>
      </section>

      {/* 2. Tracking Details View */}
      {result && (
        <section className="py-16 bg-[#f8fafc] border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-8">
            {/* Tracking Status Card Header */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0a192f] bg-[#c6ff00] px-3 py-1 rounded-full">
                    REF: {result.tracking_number}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    {result.status.replaceAll("_", " ").toUpperCase()}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[#0a192f] font-display pt-2">
                  {result.pickup_address} → {result.delivery_address}
                </h2>
                <p className="text-xs text-slate-500">
                  Carrier: {result.carrier_name} • {result.vehicle_type.replaceAll("_", " ")}
                </p>
              </div>

              <div className="text-center md:text-right shrink-0">
                <p className="text-xs text-slate-400 font-bold uppercase">Estimated Arrival</p>
                <p className="text-xl font-black text-[#0a192f] font-display">{result.status.replaceAll("_", " ").toUpperCase()}</p>
                <p className="text-xs text-emerald-600 font-semibold">Live order status</p>
              </div>
            </div>

            {/* Live GPS Map Mockup & Route Timeline Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Map Mockup Left (7 cols) */}
              <div className="lg:col-span-7 bg-[#0a192f] rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between min-h-[320px] shadow-lg border border-slate-800">
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#c6ff00] animate-ping" />
                    <span className="text-xs font-bold text-[#c6ff00] tracking-wider uppercase">
                      Live Vehicle Satellite Feed
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">GPS Signal: Strong</span>
                </div>

                {/* Map Graphics Mockup */}
                <div className="my-8 text-center space-y-3 z-10">
                  <div className="w-16 h-16 rounded-full bg-[#0066ff]/20 border-2 border-[#0066ff] flex items-center justify-center mx-auto animate-pulse">
                    <Truck className="w-8 h-8 text-[#c6ff00]" />
                  </div>
                  <p className="text-sm font-bold text-white">Current Location: M6 Motorway Southbound (Mile 114)</p>
                  <p className="text-xs text-slate-400">Speed: 64 mph • Traveling direct without stops</p>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-300 z-10 border-t border-slate-800 pt-4">
                  <span>Collected: 09:42 AM</span>
                  <span className="text-[#c6ff00]">Distance Remaining: 42 miles</span>
                </div>
              </div>

              {/* Status Timeline Right (5 cols) */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-[#0a192f] font-display">
                  Delivery Progress Timeline
                </h3>

                <div className="space-y-6 relative pl-6 border-l-2 border-slate-200 text-xs">
                  {/* Step 1 */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                    <p className="font-bold text-[#0a192f]">09:15 AM — Booking Confirmed</p>
                    <p className="text-slate-500">Nearest driver Marcus assigned</p>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                    <p className="font-bold text-[#0a192f]">09:42 AM — Parcel Collected</p>
                    <p className="text-slate-500">Collected from Manchester Hub (M1 1AE)</p>
                  </div>

                  {/* Step 3 */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-[#0066ff] border-2 border-white animate-pulse" />
                    <p className="font-bold text-[#0066ff]">In Direct Transit</p>
                    <p className="text-slate-500">En route to London (SW1A 1AA)</p>
                  </div>

                  {/* Step 4 */}
                  <div className="relative opacity-50">
                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-slate-300 border-2 border-white" />
                    <p className="font-bold text-slate-700">Estimated 13:55 PM — Delivery & Digital POD</p>
                    <p className="text-slate-400">Electronic signature email dispatch</p>
                  </div>
                </div>

                {/* Download POD Box */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    disabled
                    className="w-full py-3 px-4 rounded-xl bg-slate-100 text-slate-400 font-bold text-xs flex items-center justify-center gap-2 cursor-not-allowed"
                  >
                    <Download className="w-4 h-4" />
                    <span>POD Available Upon Delivery</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Need Urgent Help Card */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <h3 className="text-2xl font-bold text-[#0a192f] font-display">
            Need to Modify Your Delivery Instructions?
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Contact our 24/7 dispatch desk directly to give special access codes or recipient contact updates to your driver.
          </p>
          <ContactPhone prefix="Call Live Desk: " className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#0a192f] text-white font-extrabold text-xs hover:bg-[#051329]" />
        </div>
      </section>
    </div>
  );
}
