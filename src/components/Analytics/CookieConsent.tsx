"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export const COOKIE_CONSENT_KEY = "instadrop_cookie_consent";
export const COOKIE_CONSENT_EVENT = "instadrop-consent-change";

type Consent = "accepted" | "essential" | null;

function saveConsent(value: Exclude<Consent, null>) {
  localStorage.setItem(COOKIE_CONSENT_KEY, value);
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    setConsent(stored === "accepted" || stored === "essential" ? stored : null);
    setReady(true);
  }, []);

  function choose(value: Exclude<Consent, null>) {
    saveConsent(value);
    setConsent(value);
  }

  if (!ready) return null;

  if (consent) {
    return (
      <button
        type="button"
        onClick={() => setConsent(null)}
        className="fixed bottom-3 left-3 z-50 rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-[#0a192f] shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066ff]"
        aria-label="Change cookie settings"
      >
        Cookie settings
      </button>
    );
  }

  return (
    <section
      aria-label="Cookie choices"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 text-slate-700 shadow-2xl sm:p-6"
    >
      <h2 className="font-display text-lg font-extrabold text-[#0a192f]">Your privacy choices</h2>
      <p className="mt-2 text-sm leading-6">
        We use essential storage for this choice. Optional analytics and advertising tools load only if you accept them. Read our{" "}
        <Link href="/privacy-policy" className="font-bold text-[#0057d9] underline underline-offset-2">privacy policy</Link>.
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <button type="button" onClick={() => choose("essential")} className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-bold text-[#0a192f] hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066ff]">
          Essential only
        </button>
        <button type="button" onClick={() => choose("accepted")} className="rounded-xl bg-[#0a192f] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#102b50] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066ff]">
          Accept optional cookies
        </button>
      </div>
    </section>
  );
}
