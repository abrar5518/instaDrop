"use client";

import { useEffect, type ReactNode } from "react";
import { useSettings } from "@/context/SettingsContext";

export type ContactSettings = {
  business_name: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  social_links: Record<string, string | null>;
  tracking: {
    gtm_id: string | null;
    ga_id: string | null;
    meta_pixel_id: string | null;
  };
  branding: {
    header_logo_url: string | null;
    footer_logo_url: string | null;
    favicon_url: string | null;
  };
};

export function ContactSettingsProvider({ children }: { children: ReactNode }) {
  const { branding } = useSettings();

  useEffect(() => {
    if (!branding.favicon_url) return;

    const existing = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    const favicon = existing ?? document.createElement("link");
    favicon.rel = "icon";
    favicon.href = branding.favicon_url;
    if (!existing) document.head.appendChild(favicon);
  }, [branding.favicon_url]);

  return children;
}

export function useContactSettings(): ContactSettings {
  const settings = useSettings();
  return {
    business_name: settings.business_name,
    phone: settings.hotline_phone,
    whatsapp: settings.admin_whatsapp_number,
    email: settings.support_email,
    address: settings.office_address,
    social_links: settings.social_links,
    tracking: settings.tracking,
    branding: settings.branding,
  };
}

const phoneHref = (phone: string) => `tel:${phone.replace(/[^+\d]/g, "")}`;

export function ContactPhone({ className = "", prefix = "", suffix = "" }: { className?: string; prefix?: string; suffix?: string }) {
  const { hotline_phone: phone } = useSettings();
  return <a href={phoneHref(phone)} className={className}>{prefix}{phone}{suffix}</a>;
}

export function ContactEmail({ className = "" }: { className?: string }) {
  const { support_email: email } = useSettings();
  return <a href={`mailto:${email}`} className={className}>{email}</a>;
}

export function ContactAddress({ className = "" }: { className?: string }) {
  const { office_address: address } = useSettings();
  return <span className={className}>{address}</span>;
}

export function SocialLinks({ className = "" }: { className?: string }) {
  const { social_links: socialLinks } = useSettings();
  const links = Object.entries(socialLinks).filter((entry): entry is [string, string] => {
    if (!entry[1]) return false;
    try {
      return ["http:", "https:"].includes(new URL(entry[1]).protocol);
    } catch {
      return false;
    }
  });

  if (!links.length) return null;

  const icons: Record<string, ReactNode> = {
    facebook: <span className="text-base font-black">f</span>,
    instagram: <span className="text-[10px] font-black">IG</span>,
    linkedin: <span className="text-xs font-black">in</span>,
    youtube: <span className="text-xs font-black">▶</span>,
    x: <span className="text-sm font-black">X</span>,
    tiktok: <span className="text-sm font-black">♪</span>,
  };

  return (
    <div className={className} aria-label="Social profiles">
      {links.map(([name, url]) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit our ${name} profile`}
          title={name}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 transition-colors hover:border-[#c6ff00] hover:bg-[#c6ff00] hover:text-[#051329]"
        >
          <span aria-hidden="true">{icons[name] ?? name.slice(0, 1).toUpperCase()}</span>
        </a>
      ))}
    </div>
  );
}
