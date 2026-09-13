import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { fleetVehicles as fleet } from "@/content/fleet";
import { ContactPhone } from "@/components/Contact/ContactSettings";
import {
  ArrowRight,
  Box,
  Check,
  Clock3,
  Headphones,
  Layers3,
  MapPin,
  Move3d,
  Phone,
  Ruler,
  ShieldCheck,
  Truck,
  Weight,
} from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/vehicle-fleet" },
  title: "Courier Vehicle Fleet | Van Capacity Guide",
  description:
    "Choose the right dedicated courier vehicle for your delivery. Compare Small Van, Transit, LWB, XLWB and tail-lift Luton capacities.",
  keywords: [
    "courier vehicle fleet UK",
    "small van courier",
    "transit van courier",
    "LWB van courier",
    "XLWB van courier",
    "Luton van courier",
    "tail lift van courier",
  ],
  openGraph: {
    title: "Courier Vehicle Fleet & Capacity Guide | InstaDrop",
    description:
      "From a single pallet to specialist heavy freight, find the right dedicated vehicle for your UK delivery.",
  },
};

const servicePoints = [
  { icon: Clock3, value: "60 min", label: "Target collection" },
  { icon: MapPin, value: "UK-wide", label: "Nationwide coverage" },
  { icon: ShieldCheck, value: "Dedicated", label: "No co-loading" },
  { icon: Headphones, value: "24/7", label: "Dispatch support" },
];

function Spec({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Ruler;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5">
      <div className="mb-2 flex items-center gap-2 text-slate-400">
        <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
        <span className="text-[10px] font-bold uppercase tracking-[0.14em]">{label}</span>
      </div>
      <p className="text-sm font-extrabold text-[#0a192f]">{value}</p>
    </div>
  );
}

export default function VehicleFleetPage() {
  return (
    <div className="overflow-hidden bg-[#f7f8f4] text-[#0a192f]">
      <section className="relative isolate bg-[#07182d] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at 84% 35%, rgba(198,255,0,.16), transparent 27%), radial-gradient(circle at 5% 100%, rgba(0,102,255,.16), transparent 32%)",
          }}
        />
        <div className="relative mx-auto grid min-h-[610px] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#c6ff00]">
              <Truck className="h-4 w-4" aria-hidden="true" />
              Vehicle capacity guide
            </div>
            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-[64px]">
              The right vehicle.
              <span className="block text-[#c6ff00]">Ready when you are.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              From one urgent box to six-pallet Luton loads, our nationwide fleet gives every consignment the space, care and direct route it needs.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/instant-quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c6ff00] px-6 py-3.5 text-sm font-extrabold text-[#07182d] transition hover:bg-[#b8ed00]"
              >
                Get an instant quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="#fleet-guide"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Explore the fleet
              </a>
            </div>
          </div>

          <div className="relative flex min-h-[300px] items-center justify-center lg:min-h-[430px]">
            <div className="absolute inset-x-[8%] bottom-[10%] h-20 rounded-[100%] bg-black/35 blur-2xl" aria-hidden="true" />
            <div className="absolute right-0 top-2 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Fleet access</p>
              <p className="mt-1 text-sm font-extrabold text-white">Small vans to 6-pallet Lutons</p>
            </div>
            <Image
              src="/fleet/van one (2).jpeg"
              alt="InstaDrop curtain-side Luton van with tail lift"
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 1024px) 92vw, 58vw"
              className="relative z-10 h-auto w-full max-w-[720px] object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,.34)]"
            />
          </div>
        </div>
      </section>

      <section className="relative z-20 mx-auto -mt-1 max-w-7xl px-5 sm:px-8 lg:-mt-10">
        <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_60px_rgba(7,24,45,.10)] lg:grid-cols-4">
          {servicePoints.map(({ icon: Icon, value, label }, index) => (
            <div
              key={label}
              className={`flex items-center gap-3 px-4 py-5 sm:px-6 ${
                index % 2 !== 0 ? "border-l border-slate-200" : ""
              } ${index > 1 ? "border-t border-slate-200 lg:border-t-0" : ""} ${
                index === 2 ? "lg:border-l" : ""
              }`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef6d3] text-[#365314]">
                <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span>
                <strong className="block text-sm font-extrabold text-[#0a192f] sm:text-base">{value}</strong>
                <span className="text-[11px] font-medium text-slate-500 sm:text-xs">{label}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="fleet-guide" className="scroll-mt-28 px-5 pb-20 pt-20 sm:px-8 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#547000]">Our vehicle range</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-[#0a192f] sm:text-5xl">
                Find your best fit.
              </h2>
            </div>
            <div>
              <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Use this guide to match your load to the most commonly used vehicles in our fleet. Vehicle sizes can vary slightly by model, so share exact dimensions when booking.
              </p>
              <nav aria-label="Fleet sections" className="mt-5 flex flex-wrap gap-2">
                {fleet.map((vehicle) => (
                  <a
                    key={vehicle.shortName}
                    href={`#${vehicle.value.replaceAll("_", "-")}`}
                    className="rounded-full border border-slate-300 bg-white px-3.5 py-2 text-[11px] font-bold text-slate-600 transition hover:border-[#0a192f] hover:text-[#0a192f]"
                  >
                    {vehicle.shortName}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="mt-12 space-y-6">
            {fleet.map((vehicle, index) => (
              <article
                key={vehicle.name}
                id={vehicle.value.replaceAll("_", "-")}
                className="scroll-mt-32 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,.055)]"
              >
                <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                  <div
                    className={`relative flex min-h-[270px] items-center justify-center overflow-hidden p-8 sm:min-h-[340px] sm:p-12 ${
                      vehicle.dark ? "bg-[#07182d]" : "bg-[#eef6d3]"
                    } ${index % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <div
                      className={`absolute inset-0 ${vehicle.dark ? "opacity-20" : "opacity-45"}`}
                      aria-hidden="true"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(100,116,139,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,.18) 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                        maskImage: "linear-gradient(to bottom, black, transparent 88%)",
                      }}
                    />
                    <span
                      className={`absolute left-6 top-6 rounded-full px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] sm:left-8 sm:top-8 ${
                        vehicle.dark ? "bg-[#c6ff00] text-[#07182d]" : "bg-[#07182d] text-white"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")} / {String(fleet.length).padStart(2, "0")}
                    </span>
                    <div className="absolute inset-x-[18%] bottom-[17%] h-10 rounded-[100%] bg-black/20 blur-xl" aria-hidden="true" />
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      width={vehicle.imageWidth}
                      height={vehicle.imageHeight}
                      sizes="(max-width: 1024px) 80vw, 42vw"
                      className={`relative z-10 h-auto object-contain drop-shadow-[0_20px_18px_rgba(0,0,0,.22)] ${
                        vehicle.shortName === "Specialist" ? "w-full max-w-[520px]" : "w-[88%] max-w-[520px]"
                      }`}
                    />
                  </div>

                  <div className={`p-6 sm:p-9 lg:p-11 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#648000]">
                      {vehicle.shortName} courier
                    </p>
                    <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.025em] text-[#0a192f] sm:text-3xl">
                      {vehicle.name}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">{vehicle.description}</p>

                    <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      <Spec icon={Layers3} label="Pallets" value={vehicle.pallets} />
                      <Spec icon={Weight} label="Payload" value={vehicle.payload} />
                      <Spec icon={Ruler} label="Max length" value={vehicle.length} />
                      <Spec icon={Move3d} label="Max height" value={vehicle.height} />
                      <Spec icon={Box} label="Max width" value={vehicle.width} />
                      {vehicle.tailLiftCapacity ? (
                        <>
                          <Spec icon={Truck} label="Tail lift capacity" value={vehicle.tailLiftCapacity} />
                          <Spec icon={Move3d} label="Side loading" value={vehicle.sideLoading ?? "No"} />
                          <Spec icon={ShieldCheck} label="Weather protection" value={vehicle.weatherProtection ?? "Load specific"} />
                        </>
                      ) : (
                        <Spec icon={Truck} label="Between arches" value={vehicle.archWidth ?? "Load specific"} />
                      )}
                    </div>

                    <div className="mt-7 border-t border-slate-200 pt-6">
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">A smart choice for</p>
                      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                        {vehicle.bestFor.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#c6ff00] text-[#07182d]">
                              <Check className="h-2.5 w-2.5" strokeWidth={3} aria-hidden="true" />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 text-center text-[11px] leading-5 text-slate-500">
            Dimensions and capacities are a practical guide only. Exact limits may vary by vehicle model and load distribution.
          </p>
        </div>
      </section>

      <section className="bg-[#c6ff00] px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#405400]">Not sure which one?</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-[-0.035em] text-[#07182d] sm:text-5xl">
              Tell us what you&apos;re moving. We&apos;ll match the vehicle.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#31420a] sm:text-base">
              Share your item dimensions, total weight and collection postcode. Our dispatch team will take care of the rest.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/instant-quote"
              className="inline-flex min-w-52 items-center justify-center gap-2 rounded-full bg-[#07182d] px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#102a49]"
            >
              Get my quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <div className="inline-flex min-w-52 items-center justify-center gap-2 rounded-full border border-[#07182d]/20 bg-white/55 px-6 py-3.5 text-sm font-extrabold text-[#07182d] transition hover:bg-white">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <ContactPhone prefix="Call " className="hover:underline" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
