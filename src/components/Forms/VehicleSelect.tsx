"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

const vehicles = [
  { value: "courier_car", name: "Courier Car", detail: "Up to 25 kg / Small Parcels / Envelopes" },
  { value: "small_van", name: "Small Van", detail: "Up to 450 kg / 1 Standard Pallet — up to 1.1m high" },
  { value: "medium_van", name: "Medium Van", detail: "Up to 900 kg / 2 Standard Pallets" },
  { value: "large_van", name: "Large Van", detail: "Up to 1,200 kg / 3 Standard Pallets" },
  { value: "luton_tail_lift", name: "Luton Tail-Lift", detail: "Up to 1,000 kg / 4–6 Standard Pallets" },
] as const;

export default function VehicleSelect() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const container = useRef<HTMLDivElement>(null);
  const selected = vehicles.find((vehicle) => vehicle.value === value);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!container.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  useEffect(() => {
    const form = container.current?.closest("form");
    const reset = () => setValue("");
    form?.addEventListener("reset", reset);
    return () => form?.removeEventListener("reset", reset);
  }, []);

  return <div ref={container} className="relative min-w-0">
    <input type="hidden" name="vehicle_type" value={value} />
    <button type="button" onClick={() => setOpen(!open)} onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }} aria-haspopup="listbox" aria-expanded={open} className="flex min-h-10 w-full min-w-0 items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-left text-xs font-medium text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-[#0a192f]">
      <span className="min-w-0 truncate">{selected ? `${selected.name} — ${selected.detail}` : "Select vehicle"}</span>
      <ChevronDown className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
    </button>
    {open && <div role="listbox" aria-label="Vehicle type" className="absolute left-0 right-0 top-full z-40 mt-1 max-h-72 overflow-y-auto rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl">
      {vehicles.map((vehicle) => <button key={vehicle.value} type="button" role="option" aria-selected={value === vehicle.value} onClick={() => { setValue(vehicle.value); setOpen(false); }} className={`flex w-full items-start justify-between gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${value === vehicle.value ? "bg-[#0a192f] text-white" : "text-slate-700 hover:bg-slate-50"}`}><span className="min-w-0"><span className="block text-xs font-bold">{vehicle.name}</span><span className={`mt-0.5 block whitespace-normal text-[10px] leading-4 ${value === vehicle.value ? "text-slate-300" : "text-slate-500"}`}>{vehicle.detail}</span></span>{value === vehicle.value && <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#c6ff00]" />}</button>)}
    </div>}
  </div>;
}
