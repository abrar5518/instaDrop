"use client";

import { useState } from "react";
import { Search, CheckCircle2, Download, Truck, ArrowRight, Smartphone, Loader2 } from "lucide-react";

export default function TrackDeliveryPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSearched, setIsSearched] = useState(true);
  const [trackingData, setTrackingData] = useState({
    tracking_number: "INSTA-884920",
    customer_name: "Sarah Mitchell",
    vehicle_type: "Luton Tail-Lift Van",
    status: "in_transit",
    pickup_address: "Manchester Hub (M1 1AE)",
    delivery_address: "London City Express (SW1A 1AA)",
    carrier_name: "InstaDrop Express Fleet",
    pod: null as null | {
      recipient_name: string;
      signature_url?: string;
      photo_url?: string;
      delivered_at: string;
    },
  });

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber) return;

    setLoading(true);
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api/v1";

    try {
      const res = await fetch(`${apiBaseUrl}/tracking/${encodeURIComponent(trackingNumber)}`);
      const data = await res.json();

      if (data.success) {
        setTrackingData({
          tracking_number: data.tracking_number,
          customer_name: data.customer_name,
          vehicle_type: data.vehicle_type,
          status: data.status,
          pickup_address: data.pickup_address,
          delivery_address: data.delivery_address,
          carrier_name: data.carrier_name,
          pod: data.pod,
        });
      }
    } catch {
      // Fallback demo data display if backend offline
    } finally {
      setIsSearched(true);
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
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin text-[#0a192f]" />
                ) : (
                  <>
                    <span>Track Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 2. Tracking Details View */}
      {isSearched && (
        <section className="py-16 bg-[#f8fafc] border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-8">
            {/* Tracking Status Card Header */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0a192f] bg-[#c6ff00] px-3 py-1 rounded-full">
                    REF: {trackingData.tracking_number}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 uppercase">
                    STATUS: {trackingData.status.replace("_", " ")}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[#0a192f] font-display pt-2">
                  {trackingData.pickup_address} → {trackingData.delivery_address}
                </h2>
                <p className="text-xs text-slate-500">
                  Carrier: {trackingData.carrier_name} • Fleet: {trackingData.vehicle_type}
                </p>
              </div>

              <div className="text-center md:text-right shrink-0">
                <p className="text-xs text-slate-400 font-bold uppercase">Estimated Arrival</p>
                <p className="text-3xl font-black text-[#0a192f] font-display">13:55 PM</p>
                <p className="text-xs text-emerald-600 font-semibold">• 45 mins remaining</p>
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
                  <span>Customer: {trackingData.customer_name}</span>
                  <span className="text-[#c6ff00]">Distance Remaining: 42 miles</span>
                </div>
              </div>

              {/* Status Timeline Right (5 cols) */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-[#0a192f] font-display">
                  Delivery Progress Timeline
                </h3>

                <div className="space-y-6 relative pl-6 border-l-2 border-slate-200 text-xs">
                  <div className="relative">
                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                    <p className="font-bold text-[#0a192f]">Booking Confirmed</p>
                    <p className="text-slate-500">Fleet assigned: {trackingData.vehicle_type}</p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                    <p className="font-bold text-[#0a192f]">Parcel Collected</p>
                    <p className="text-slate-500">Collected from {trackingData.pickup_address}</p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-[#0066ff] border-2 border-white animate-pulse" />
                    <p className="font-bold text-[#0066ff]">Status: {trackingData.status.toUpperCase()}</p>
                    <p className="text-slate-500">En route to {trackingData.delivery_address}</p>
                  </div>
                </div>

                {/* Download POD Box */}
                <div className="pt-4 border-t border-slate-100">
                  {trackingData.pod ? (
                    <a
                      href={trackingData.pod.signature_url || "#"}
                      target="_blank"
                      className="w-full py-3 px-4 rounded-xl bg-[#0a192f] text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#051329]"
                    >
                      <Download className="w-4 h-4 text-[#c6ff00]" />
                      <span>Download Official Digital POD</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full py-3 px-4 rounded-xl bg-slate-100 text-slate-400 font-bold text-xs flex items-center justify-center gap-2 cursor-not-allowed"
                    >
                      <Download className="w-4 h-4" />
                      <span>POD Available Upon Delivery</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
