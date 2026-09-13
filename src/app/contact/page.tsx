"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useSettings } from "@/context/SettingsContext";
import ContactForm from "@/components/Forms/ContactForm";

export default function ContactPage() {
  const settings = useSettings();

  return (
    <div className="w-full bg-white">
      {/* 1. Header Banner */}
      <section className="bg-[#0a192f] text-white py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-[#c6ff00] border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#c6ff00] animate-pulse" />
            <span>{settings.opening_hours.toUpperCase()}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display">
            Contact {settings.business_name}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Need an immediate pickup or have an inquiry about a booking? Speak directly to our experienced logistics coordinators 24 hours a day.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Info Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Emergency Call Box */}
              <div className="bg-[#0a192f] text-white rounded-3xl p-8 border border-[#0a192f] space-y-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0066ff] text-white flex items-center justify-center font-bold">
                    <Phone className="w-6 h-6 animate-bounce" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#c6ff00] uppercase tracking-wider">
                      Freephone 24/7 Hotline
                    </p>
                    <a href={`tel:${settings.hotline_phone.replace(/\s+/g, '')}`} className="text-2xl font-black text-white hover:text-[#c6ff00] font-display">
                      {settings.hotline_phone}
                    </a>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Call for urgent same-day collections. Dispatch will confirm the nearest suitable vehicle and expected collection window.
                </p>
              </div>

              {/* Email Box */}
              <div className="bg-[#f8fafc] rounded-3xl p-8 border border-slate-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0066ff] text-white flex items-center justify-center font-bold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 font-bold uppercase">Dispatch Email</p>
                    <a href={`mailto:${settings.support_email}`} className="text-sm font-bold text-[#0a192f] hover:text-[#0066ff]">
                      {settings.support_email}
                    </a>
                  </div>
                </div>
                <p className="text-xs text-slate-500">
                  Email us for corporate account setups, tender requests, or custom freight quotes. Average reply time: 5 mins.
                </p>
              </div>

              {/* Head Office Address Box */}
              <div className="bg-[#f8fafc] rounded-3xl p-8 border border-slate-200 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0a192f] text-[#c6ff00] flex items-center justify-center font-bold shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-slate-600 font-bold uppercase">Head Office Location</p>
                    <p className="text-sm font-bold text-[#0a192f]">
                      {settings.business_name}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {settings.office_address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#f8fafc] rounded-3xl p-8 sm:p-10 border border-slate-200 space-y-6">
              <div>
                <h2 className="text-2xl font-extrabold text-[#0a192f] font-display">
                  Send Us a Direct Message
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Our customer service team is online and ready to assist you.
                </p>
              </div>

              <div id="contact-form" className="scroll-mt-32">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
