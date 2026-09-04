"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ContactSettings = {
  business_name: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
};

const defaults: ContactSettings = {
  business_name: "InstaDrop Courier Services Ltd",
  phone: "0800 123 4455",
  whatsapp: "+448001234455",
  email: "dispatch@instadrop.uk",
  address: "Central Logistics Park, M25 Hub Highway, London UK",
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
