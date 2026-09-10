"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ContactSettings = {
  business_name: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  social_links: Record<string, string | null>;
  tracking: { gtm_id: string | null; ga_id: string | null; meta_pixel_id: string | null };
  branding: { header_logo_url: string | null; footer_logo_url: string | null; favicon_url: string | null };
};

const defaults: ContactSettings = {
  business_name: "InstaDrop Courier Services Ltd",
  phone: "0800 123 4455",
  whatsapp: "+448001234455",
  email: "dispatch@instadrop.uk",
  address: "Central Logistics Park, M25 Hub Highway, London UK",
  social_links: {},
  tracking: { gtm_id: null, ga_id: null, meta_pixel_id: null },
  branding: { header_logo_url: null, footer_logo_url: null, favicon_url: null },
};

const ContactContext = createContext(defaults);

export function ContactSettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState(defaults);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/contact-settings", { cache: "no-store", signal: controller.signal })
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then((data: ContactSettings) => setSettings(data))
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  return <ContactContext.Provider value={settings}>{children}</ContactContext.Provider>;
}

export function useContactSettings() {
  return useContext(ContactContext);
}

const phoneHref = (phone: string) => `tel:${phone.replace(/[^+\d]/g, "")}`;

export function ContactPhone({ className = "", prefix = "", suffix = "" }: { className?: string; prefix?: string; suffix?: string }) {
  const { phone } = useContactSettings();
  return <a href={phoneHref(phone)} className={className}>{prefix}{phone}{suffix}</a>;
}

export function ContactEmail({ className = "" }: { className?: string }) {
  const { email } = useContactSettings();
  return <a href={`mailto:${email}`} className={className}>{email}</a>;
}

export function ContactAddress({ className = "" }: { className?: string }) {
  const { address } = useContactSettings();
  return <span className={className}>{address}</span>;
}

export function SocialLinks({ className = "" }: { className?: string }) {
  const { social_links } = useContactSettings();
  const links = Object.entries(social_links).filter((entry): entry is [string,string] => Boolean(entry[1]));
  if (!links.length) return null;
  const icons: Record<string, React.ReactNode> = { facebook:<span className="font-black">f</span>, instagram:<span className="text-xs font-black">IG</span>, linkedin:<span className="text-xs font-black">in</span>, youtube:<span className="text-xs font-black">▶</span>, x:<span className="text-sm font-black">X</span>, tiktok:<span className="text-xs font-black">♪</span> };
  return <div className={className}>{links.map(([name,url]) => <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name} title={name} className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 hover:border-[#c6ff00] hover:text-white">{icons[name]}</a>)}</div>;
}
