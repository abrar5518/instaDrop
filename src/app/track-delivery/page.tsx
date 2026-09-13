"use client";

import { useState } from "react";
import { AlertCircle, ArrowRight, Download, Loader2, Search, Smartphone, Truck } from "lucide-react";

type TrackingData = {
  tracking_number: string;
  customer_name?: string;
  vehicle_type?: string;
  status: string;
  pickup_address?: string;
  delivery_address?: string;
  carrier_name?: string;
  estimated_arrival?: string;
  current_location?: string;
  updated_at?: string;
  pod?: { recipient_name?: string; signature_url?: string; photo_url?: string; delivered_at?: string } | null;
};

function safeUrl(value?: string) {
  try {
    const url = new URL(value || "");
    return ["http:", "https:"].includes(url.protocol) ? url.toString() : null;
  } catch {
    return null;
  }
}

function humanize(value: string) {
  return value.replaceAll("_", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default function TrackDeliveryPage() {
  const [reference, setReference] = useState("");
  const [record, setRecord] = useState<TrackingData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    const value = reference.trim();
    if (!value) return;
    setLoading(true);
    setError("");
    setRecord(null);
    try {
      const response = await fetch(`/api/tracking/${encodeURIComponent(value)}`, { cache: "no-store" });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.success === false) throw new Error(data.message || "We could not find a delivery with that reference.");
      const nextRecord = data.data ?? data;
      if (!nextRecord.tracking_number || !nextRecord.status) throw new Error("Tracking information is temporarily unavailable.");
      setRecord(nextRecord);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Tracking is temporarily unavailable. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const podUrl = safeUrl(record?.pod?.signature_url || record?.pod?.photo_url);

  return <div className="w-full bg-white">
    <section className="bg-[#0a192f] px-4 py-16 text-white sm:px-8">
      <div className="mx-auto max-w-4xl space-y-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#c6ff00]"><Smartphone className="h-4 w-4" aria-hidden="true" />Delivery status &amp; POD portal</div>
        <h1 className="font-display text-4xl font-extrabold sm:text-6xl">Track Delivery &amp; Download POD</h1>
        <p className="mx-auto max-w-2xl text-slate-300">Enter your tracking reference to see the latest recorded delivery status and proof of delivery when available.</p>
        <form onSubmit={submit} className="mx-auto flex max-w-xl flex-col gap-2 pt-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-slate-400" aria-hidden="true" />
            <label htmlFor="tracking-reference" className="sr-only">Tracking reference or booking ID</label>
            <input id="tracking-reference" required maxLength={80} autoComplete="off" value={reference} onChange={(event) => setReference(event.target.value)} placeholder="e.g. INSTA-884920" className="w-full rounded-2xl bg-white py-3.5 pl-12 pr-4 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c6ff00]" />
          </div>
          <button type="submit" disabled={loading} className="flex items-center justify-center gap-2 rounded-2xl bg-[#c6ff00] px-7 py-3.5 text-sm font-extrabold text-[#0a192f] disabled:opacity-70">
            {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <><span>Track Now</span><ArrowRight className="h-4 w-4" aria-hidden="true" /></>}
          </button>
        </form>
        <div className="mx-auto max-w-xl" aria-live="polite">
          {error && <p role="alert" className="mt-4 flex items-start gap-2 rounded-xl border border-red-300/30 bg-red-950/40 p-4 text-left text-sm text-red-100"><AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />{error}</p>}
        </div>
      </div>
    </section>

    {record && <section className="border-b border-slate-200 bg-[#f8fafc] py-16" aria-live="polite">
      <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-8">
        <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0 space-y-2 text-center md:text-left">
            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              <span className="rounded-full bg-[#c6ff00] px-3 py-1 text-xs font-bold uppercase text-[#0a192f]">Ref: {record.tracking_number}</span>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase text-emerald-700">{humanize(record.status)}</span>
            </div>
            {(record.pickup_address || record.delivery_address) && <h2 className="break-words pt-2 font-display text-2xl font-bold text-[#0a192f]">{record.pickup_address || "Collection"} → {record.delivery_address || "Delivery"}</h2>}
            {(record.carrier_name || record.vehicle_type) && <p className="text-xs text-slate-500">{[record.carrier_name, record.vehicle_type].filter(Boolean).join(" · ")}</p>}
          </div>
          <div className="shrink-0 text-center md:text-right">
            {record.estimated_arrival && <><p className="text-xs font-bold uppercase text-slate-400">Estimated arrival</p><p className="font-display text-2xl font-black text-[#0a192f]">{record.estimated_arrival}</p></>}
            {record.updated_at && <p className="mt-1 text-xs text-slate-500">Updated {record.updated_at}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-[#0a192f] p-8 text-white shadow-lg">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c6ff00]"><Truck className="h-5 w-5" aria-hidden="true" />Latest delivery update</div>
            <p className="mt-8 text-2xl font-extrabold">{humanize(record.status)}</p>
            <p className="mt-3 text-sm text-slate-300">{record.current_location ? `Last recorded location: ${record.current_location}` : "Live map data is not available for this booking. Status is updated by dispatch."}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="font-display text-xl font-bold text-[#0a192f]">Proof of delivery</h2>
            {record.pod ? <div className="mt-5 space-y-3 text-sm text-slate-600">
              {record.pod.recipient_name && <p><strong className="text-slate-900">Recipient:</strong> {record.pod.recipient_name}</p>}
              {record.pod.delivered_at && <p><strong className="text-slate-900">Delivered:</strong> {record.pod.delivered_at}</p>}
              {podUrl ? <a href={podUrl} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#0a192f] px-4 py-3 text-xs font-bold text-white"><Download className="h-4 w-4 text-[#c6ff00]" aria-hidden="true" />Open official POD</a> : <p className="rounded-xl bg-slate-100 p-3">The POD record exists, but no downloadable file is currently available.</p>}
            </div> : <p className="mt-5 rounded-xl bg-slate-100 p-4 text-sm text-slate-500">Proof of delivery will appear here after the delivery is completed.</p>}
          </div>
        </div>
      </div>
    </section>}
  </div>;
}
