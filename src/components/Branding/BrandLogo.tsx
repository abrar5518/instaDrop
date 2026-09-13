"use client";

import { Zap } from "lucide-react";
import Image from "next/image";
import { useContactSettings } from "@/components/Contact/ContactSettings";

type BrandLogoProps = {
  variant: "header" | "footer";
};

export default function BrandLogo({ variant }: BrandLogoProps) {
  const { branding, business_name: businessName } = useContactSettings();
  const logoUrl = variant === "header"
    ? branding.header_logo_url
    : branding.footer_logo_url;

  if (logoUrl) {
    return (
      <Image
        src={logoUrl}
        alt={`${businessName} logo`}
        width={480}
        height={112}
        sizes="240px"
        className="h-14 w-auto max-w-[240px] object-contain"
      />
    );
  }

  return (
    <>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#c6ff00]/40 bg-[#0a192f] transition-transform group-hover:scale-105">
        <Zap className="h-6 w-6 fill-[#c6ff00] text-[#c6ff00]" />
      </div>
      <div>
        <span className={`font-display text-2xl font-extrabold tracking-tight ${variant === "footer" ? "text-white" : "text-[#0a192f]"}`}>
          Insta
          <span className={variant === "footer" ? "text-[#c6ff00]" : "ml-0.5 rounded-md bg-[#0a192f] px-1.5 py-0.5 text-[#c6ff00]"}>
            Drop
          </span>
        </span>
        {variant === "header" && (
          <span className="mt-0.5 block text-[9px] font-extrabold uppercase tracking-widest text-[#0a192f]">
            Same-Day Courier
          </span>
        )}
      </div>
    </>
  );
}
