"use client";

import { useEffect, useRef, useState } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { trackLead } from "@/lib/analytics";
import { fleetVehicles } from "@/content/fleet";
import { UK_PHONE_MESSAGE, UK_PHONE_PATTERN } from "@/lib/formValidation";

export default function QuoteWidget() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [quoteNumber, setQuoteNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const collectionDateRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    contact_preference: "email",
    collection_postcode: "",
    delivery_postcode: "",
    vehicle_type: "small_van",
    timescale: "asap_60min",
    collection_date: "",
    collection_time: "",
    enquiry_type: "business",
    additional_info: "",
  });

  useEffect(() => {
    if (collectionDateRef.current) {
      collectionDateRef.current.min = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Europe/London",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date());
    }
  }, [submitted]);

  // UK Postcode Auto-Formatter
  const formatPostcode = (value: string) => {
    const clean = value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (clean.length > 3) {
      const inc = clean.slice(-3);
      const out = clean.slice(0, -3);
      return `${out} ${inc}`;
    }
    return clean;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "collection_postcode" || name === "delivery_postcode") {
      setFormData((current) => ({
        ...current,
        [name]: formatPostcode(value),
      }));
    } else {
      setFormData((current) => ({
        ...current,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        const validationMessage = data.errors
          ? Object.values(data.errors).flat().join(" ")
          : data.message;
        throw new Error(validationMessage || "Unable to submit your quote right now.");
      }

      setSubmitted(true);
      setQuoteNumber(data.quote_number);
      setResponseMessage(
        data.message || "Our dispatch team is calculating your route. We will contact you shortly."
      );

      trackLead({
        quote_number: data.quote_number,
        vehicle_type: formData.vehicle_type,
        route: `${formData.collection_postcode} -> ${formData.delivery_postcode}`,
      });
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Unable to submit your quote right now."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="quote-form" className="w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-900 border border-slate-100">
      {/* Form Header — Fits cleanly on ONE single line */}
      <div className="flex items-center justify-between gap-2 mb-1">
        <h2 className="text-xl sm:text-2xl font-black text-[#0a192f] font-display">
          Get your speedy quote
        </h2>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-extrabold uppercase tracking-wider shrink-0">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
          SECURE
        </span>
      </div>
      <p className="text-xs text-slate-500 mb-5">
        Tell us about your delivery. We&apos;ll confirm the tailored price.
      </p>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3 animate-in fade-in">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <span className="inline-block text-xs font-black text-[#0a192f] bg-[#c6ff00] px-3.5 py-1 rounded-full shadow-xs">
            QUOTE #{quoteNumber}
          </span>
          <h3 className="text-lg font-bold text-slate-900">Quote Request Received!</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {responseMessage}
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-bold text-[#0a192f] underline pt-2 block mx-auto"
          >
            Submit another quote
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-semibold">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="quote-first-name" className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                FIRST NAME *
              </label>
              <input
                type="text"
                id="quote-first-name"
                name="first_name"
                required
                autoComplete="given-name"
                maxLength={80}
                value={formData.first_name}
                onChange={handleChange}
                placeholder="e.g. Sarah"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a192f] focus:bg-white transition-all text-xs font-medium"
              />
            </div>
            <div>
              <label htmlFor="quote-last-name" className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                LAST NAME *
              </label>
              <input
                type="text"
                id="quote-last-name"
                name="last_name"
                required
                autoComplete="family-name"
                maxLength={80}
                value={formData.last_name}
                onChange={handleChange}
                placeholder="e.g. Mitchell"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a192f] focus:bg-white transition-all text-xs font-medium"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="quote-email" className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                EMAIL *
              </label>
              <input
                type="email"
                id="quote-email"
                name="email"
                required
                autoComplete="email"
                maxLength={254}
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.co.uk"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a192f] focus:bg-white transition-all text-xs font-medium"
              />
            </div>
            <div>
              <label htmlFor="quote-phone" className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                PHONE *
              </label>
              <input
                type="tel"
                id="quote-phone"
                name="phone"
                required
                inputMode="tel"
                autoComplete="tel"
                pattern={UK_PHONE_PATTERN}
                title={UK_PHONE_MESSAGE}
                maxLength={20}
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 07123 456789"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a192f] focus:bg-white transition-all text-xs font-medium"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="quote-contact-preference" className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                CONTACT PREFERENCE *
              </label>
              <select
                id="quote-contact-preference"
                name="contact_preference"
                value={formData.contact_preference}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f] focus:bg-white transition-all text-xs font-medium"
              >
                <option value="email">Please Email Me</option>
                <option value="phone_call">Please Call Me</option>
                <option value="whatsapp">WhatsApp Message</option>
              </select>
            </div>
            <div>
              <label htmlFor="quote-collection-postcode" className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                COLLECTION POSTCODE *
              </label>
              <input
                type="text"
                id="quote-collection-postcode"
                name="collection_postcode"
                required
                autoComplete="postal-code"
                maxLength={8}
                pattern="[A-Za-z]{1,2}[0-9][A-Za-z0-9]? [0-9][A-Za-z]{2}"
                title="Enter a valid UK postcode, for example M1 1AE."
                value={formData.collection_postcode}
                onChange={handleChange}
                placeholder="e.g. M1 1AE"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 uppercase placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a192f] focus:bg-white transition-all text-xs font-medium"
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="quote-delivery-postcode" className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                DELIVERY POSTCODE *
              </label>
              <input
                type="text"
                id="quote-delivery-postcode"
                name="delivery_postcode"
                required
                autoComplete="postal-code"
                maxLength={8}
                pattern="[A-Za-z]{1,2}[0-9][A-Za-z0-9]? [0-9][A-Za-z]{2}"
                title="Enter a valid UK postcode, for example SW1A 1AA."
                value={formData.delivery_postcode}
                onChange={handleChange}
                placeholder="e.g. SW1A 1AA"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 uppercase placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a192f] focus:bg-white transition-all text-xs font-medium"
              />
            </div>
            <div>
              <label htmlFor="quote-vehicle" className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                VEHICLE TYPE *
              </label>
              <select
                id="quote-vehicle"
                name="vehicle_type"
                value={formData.vehicle_type}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f] focus:bg-white transition-all text-xs font-medium"
              >
                {fleetVehicles.map((vehicle) => (
                  <option key={vehicle.value} value={vehicle.value}>
                    {vehicle.formLabel ?? `${vehicle.name} — ${vehicle.formDetail}`}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="collection-date" className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                Collection date *
              </label>
              <input
                id="collection-date"
                ref={collectionDateRef}
                type="date"
                name="collection_date"
                required
                value={formData.collection_date}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f] focus:bg-white transition-all text-xs font-medium"
              />
            </div>
            <div>
              <label htmlFor="collection-time" className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                Collection time (UK) *
              </label>
              <input
                id="collection-time"
                type="time"
                name="collection_time"
                required
                step={900}
                value={formData.collection_time}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f] focus:bg-white transition-all text-xs font-medium"
              />
            </div>
          </div>

          {/* Row 5 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="quote-timescale" className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                TIMESCALES *
              </label>
              <select
                id="quote-timescale"
                name="timescale"
                value={formData.timescale}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f] focus:bg-white transition-all text-xs font-medium"
              >
                <option value="asap_60min">ASAP (Within 60 mins)</option>
                <option value="today_afternoon">Same Day Express</option>
                <option value="scheduled_date">Scheduled Delivery</option>
              </select>
            </div>
            <div>
              <label htmlFor="quote-enquiry-type" className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                TYPE OF ENQUIRY *
              </label>
              <select
                id="quote-enquiry-type"
                name="enquiry_type"
                value={formData.enquiry_type}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f] focus:bg-white transition-all text-xs font-medium"
              >
                <option value="business">Business</option>
                <option value="personal">Personal / One-off</option>
              </select>
            </div>
          </div>

          {/* Textarea */}
          <div>
            <label htmlFor="quote-additional-info" className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
              ANY OTHER INFORMATION
            </label>
            <textarea
              id="quote-additional-info"
              name="additional_info"
              rows={2}
              maxLength={4000}
              value={formData.additional_info}
              onChange={handleChange}
              placeholder="Parcel details, size, weight, access notes or special handling..."
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a192f] focus:bg-white transition-all text-xs font-medium resize-none"
            />
          </div>

          {errorMessage && (
            <p role="alert" className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-semibold leading-5 text-red-700">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{errorMessage}</span>
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-xl bg-[#0a192f] hover:bg-[#051329] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 group mt-2 disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin text-[#c6ff00]" />
            ) : (
              <>
                <span>Request my quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          {/* Footnote */}
          <p className="text-[10px] text-center text-slate-500 pt-1">
            No account or payment required. Your details are securely protected.
          </p>
        </form>
      )}
    </div>
  );
}
