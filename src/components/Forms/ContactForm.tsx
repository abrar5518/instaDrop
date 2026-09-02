"use client";

import { useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<{ pending: boolean; error: string; success: string }>({ pending: false, error: "", success: "" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ pending: true, error: "", success: "" });
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());
    try {
      const response = await fetch("/api/inquiries", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to submit your message.");
      formRef.current?.reset();
      setState({ pending: false, error: "", success: `${data.message} Reference: ${data.reference}` });
    } catch (error) {
      setState({ pending: false, error: error instanceof Error ? error.message : "Unable to submit your message.", success: "" });
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 text-xs font-semibold">
      <input type="hidden" name="inquiry_type" value="contact" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">FULL NAME *</label><input name="name" type="text" required placeholder="e.g. Alex Johnson" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f]" /></div>
        <div><label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">PHONE NUMBER *</label><input name="phone" type="tel" required placeholder="e.g. 07 1234 56789" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f]" /></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">EMAIL ADDRESS *</label><input name="email" type="email" required placeholder="name@company.co.uk" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f]" /></div>
        <div><label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">INQUIRY TYPE *</label><select name="subject" required className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f]"><option>General Support / Inquiry</option><option>Corporate Account Application</option><option>Existing Delivery Update</option><option>Invoice / Billing Query</option></select></div>
      </div>
      <div><label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">YOUR MESSAGE *</label><textarea name="message" rows={4} required placeholder="How can our dispatch team help you today?" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0a192f] resize-none" /></div>
      {state.error && <p role="alert" className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700">{state.error}</p>}
      {state.success && <p role="status" className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700">{state.success}</p>}
      <button disabled={state.pending} type="submit" className="w-full py-4 px-6 rounded-xl bg-[#0a192f] hover:bg-[#051329] disabled:opacity-60 text-white font-bold text-sm shadow-md transition-colors">{state.pending ? "Sending..." : "Send Message to Operations Desk"}</button>
    </form>
  );
}
