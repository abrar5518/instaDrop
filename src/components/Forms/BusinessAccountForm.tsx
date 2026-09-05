"use client";

import { useRef, useState } from "react";
import { isValidUkPhone, UK_PHONE_MESSAGE, UK_PHONE_PATTERN } from "@/lib/formValidation";
import {trackEvent} from "@/lib/tracking";

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
    const payload = Object.fromEntries(formData.entries());
    try {
      const response = await fetch("/api/inquiries", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to submit your application.");
      formRef.current?.reset();
      setState({ pending: false, error: "", success: `${data.message} Reference: ${data.reference}` });
      trackEvent("business_account_submitted", { reference: data.reference });
    } catch (error) {
      setState({ pending: false, error: error instanceof Error ? error.message : "Unable to submit your application.", success: "" });
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 text-xs font-semibold">
      <input type="hidden" name="inquiry_type" value="business_account" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">COMPANY NAME *</label><input name="company_name" type="text" required placeholder="e.g. Apex Legal Ltd" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f]" /></div>
        <div><label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">COMPANY REG NUMBER *</label><input name="company_registration" type="text" required placeholder="e.g. 12345678" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f]" /></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">CONTACT NAME *</label><input name="name" type="text" required placeholder="e.g. Sarah Mitchell" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f]" /></div>
        <div><label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">WORK EMAIL *</label><input name="email" type="email" required placeholder="sarah@company.co.uk" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f]" /></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">TELEPHONE NUMBER *</label><input name="phone" type="tel" required inputMode="tel" autoComplete="tel" pattern={UK_PHONE_PATTERN} title={UK_PHONE_MESSAGE} maxLength={20} placeholder="e.g. 020 1234 5678 or +44 20 1234 5678" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f]" /></div>
        <div><label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">ESTIMATED MONTHLY DELIVERIES</label><select name="monthly_deliveries" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f]"><option>1 - 10 deliveries / month</option><option>10 - 50 deliveries / month</option><option>50 - 200 deliveries / month</option><option>200+ deliveries / month</option></select></div>
      </div>
      {state.error && <p role="alert" className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700">{state.error}</p>}
      {state.success && <p role="status" className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700">{state.success}</p>}
      <button disabled={state.pending} type="submit" className="w-full py-4 px-6 rounded-xl bg-[#0a192f] hover:bg-[#051329] disabled:opacity-60 text-white font-bold text-sm shadow-md transition-colors">{state.pending ? "Submitting..." : "Submit Corporate Account Application"}</button>
    </form>
  );
}
