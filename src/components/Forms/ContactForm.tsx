"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { isValidUkPhone, UK_PHONE_MESSAGE, UK_PHONE_PATTERN } from "@/lib/formValidation";
import { trackEvent } from "@/lib/tracking";

const inputClass = "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f]";
const labelClass = "mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-600";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState({ pending: false, error: "", success: "" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ pending: true, error: "", success: "" });
    const formData = new FormData(event.currentTarget);
    if (!isValidUkPhone(formData.get("phone"))) {
      setState({ pending: false, error: UK_PHONE_MESSAGE, success: "" });
      return;
    }

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.message || "Unable to submit your message.");
      formRef.current?.reset();
      const reference = data.reference ? ` Reference: ${data.reference}` : "";
      setState({ pending: false, error: "", success: `${data.message || "Your message has been received."}${reference}` });
      trackEvent("contact_submitted", { reference: data.reference });
    } catch (error) {
      setState({ pending: false, error: error instanceof Error ? error.message : "Unable to submit your message.", success: "" });
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 text-xs font-semibold" aria-describedby="contact-privacy-note">
      <input type="hidden" name="inquiry_type" value="contact" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>Full name *</label>
          <input id="contact-name" name="name" type="text" required autoComplete="name" maxLength={120} placeholder="e.g. Alex Johnson" className={inputClass} />
        </div>
        <div>
          <label htmlFor="contact-phone" className={labelClass}>Phone number *</label>
          <input id="contact-phone" name="phone" type="tel" required inputMode="tel" autoComplete="tel" pattern={UK_PHONE_PATTERN} title={UK_PHONE_MESSAGE} maxLength={20} placeholder="e.g. 07123 456789" className={inputClass} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className={labelClass}>Email address *</label>
          <input id="contact-email" name="email" type="email" required autoComplete="email" maxLength={254} placeholder="name@company.co.uk" className={inputClass} />
        </div>
        <div>
          <label htmlFor="contact-subject" className={labelClass}>Inquiry type *</label>
          <select id="contact-subject" name="subject" required className={inputClass}>
            <option>General Support / Inquiry</option>
            <option>Corporate Account Application</option>
            <option>Existing Delivery Update</option>
            <option>Invoice / Billing Query</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className={labelClass}>Your message *</label>
        <textarea id="contact-message" name="message" rows={4} required maxLength={4000} placeholder="How can our dispatch team help you today?" className={`${inputClass} resize-none`} />
      </div>
      <p id="contact-privacy-note" className="text-[11px] font-normal leading-5 text-slate-500">
        We use these details only to respond to your request and provide courier support. See our <Link href="/privacy-policy" className="font-bold text-[#0066ff] hover:underline">privacy policy</Link>.
      </p>
      {state.error && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-3 text-red-700">{state.error}</p>}
      {state.success && <p role="status" className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-emerald-700">{state.success}</p>}
      <button disabled={state.pending} type="submit" className="w-full rounded-xl bg-[#0a192f] px-6 py-4 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#051329] disabled:opacity-60">
        {state.pending ? "Sending…" : "Send Message to Operations Desk"}
      </button>
    </form>
  );
}
