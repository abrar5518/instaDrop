"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { isValidUkPhone, UK_PHONE_MESSAGE, UK_PHONE_PATTERN } from "@/lib/formValidation";
import { trackEvent } from "@/lib/tracking";

const fieldClass = "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f]";
const labelClass = "mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-600";

export default function BusinessAccountForm() {
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
      if (!response.ok) throw new Error(data.message || "Unable to submit your application.");
      formRef.current?.reset();
      const reference = data.reference ? ` Reference: ${data.reference}` : "";
      setState({ pending: false, error: "", success: `${data.message || "Your application has been received."}${reference}` });
      trackEvent("business_account_submitted", { reference: data.reference });
    } catch (error) {
      setState({ pending: false, error: error instanceof Error ? error.message : "Unable to submit your application.", success: "" });
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 text-xs font-semibold" aria-describedby="business-privacy-note">
      <input type="hidden" name="inquiry_type" value="business_account" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="business-company" className={labelClass}>Company name *</label>
          <input id="business-company" name="company_name" type="text" required autoComplete="organization" maxLength={160} placeholder="e.g. Apex Legal Ltd" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="business-registration" className={labelClass}>Company registration number *</label>
          <input id="business-registration" name="company_registration" type="text" required maxLength={20} pattern="[A-Za-z0-9 -]{2,20}" placeholder="e.g. 12345678" className={fieldClass} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="business-name" className={labelClass}>Contact name *</label>
          <input id="business-name" name="name" type="text" required autoComplete="name" maxLength={120} placeholder="Your full name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="business-email" className={labelClass}>Work email *</label>
          <input id="business-email" name="email" type="email" required autoComplete="email" maxLength={254} placeholder="sarah@company.co.uk" className={fieldClass} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="business-phone" className={labelClass}>Telephone number *</label>
          <input id="business-phone" name="phone" type="tel" required inputMode="tel" autoComplete="tel" pattern={UK_PHONE_PATTERN} title={UK_PHONE_MESSAGE} maxLength={20} placeholder="e.g. 020 1234 5678" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="business-volume" className={labelClass}>Estimated monthly deliveries</label>
          <select id="business-volume" name="monthly_deliveries" className={fieldClass}>
            <option>1 - 10 deliveries / month</option>
            <option>10 - 50 deliveries / month</option>
            <option>50 - 200 deliveries / month</option>
            <option>200+ deliveries / month</option>
          </select>
        </div>
      </div>
      <p id="business-privacy-note" className="text-[11px] font-normal leading-5 text-slate-500">
        We use these details to assess and respond to your account application. See our <Link href="/privacy-policy" className="font-bold text-[#0066ff] hover:underline">privacy policy</Link>.
      </p>
      {state.error && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-3 text-red-700">{state.error}</p>}
      {state.success && <p role="status" className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-emerald-700">{state.success}</p>}
      <button disabled={state.pending} type="submit" className="w-full rounded-xl bg-[#0a192f] px-6 py-4 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#051329] disabled:opacity-60">
        {state.pending ? "Submitting…" : "Submit Corporate Account Application"}
      </button>
    </form>
  );
}
