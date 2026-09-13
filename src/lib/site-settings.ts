export type TrackingSettings = {
  gtm_id: string | null;
  ga_id: string | null;
  meta_pixel_id: string | null;
};

export type BrandingSettings = {
  header_logo_url: string | null;
  footer_logo_url: string | null;
  favicon_url: string | null;
};

export type SiteSettings = {
  business_name: string;
  hotline_phone: string;
  support_email: string;
  office_address: string;
  admin_whatsapp_number: string;
  opening_hours: string;
  currency_code: string;
  vat_rate: number;
  social_links: Record<string, string | null>;
  tracking: TrackingSettings;
  branding: BrandingSettings;
};

export const defaultSiteSettings: SiteSettings = {
  business_name: "InstaDrop Courier Services",
  hotline_phone: "+44 7852 502775",
  support_email: "dispatch@instadrop.uk",
  office_address: "Office 2, 7 Mackenzie Street, Slough, United Kingdom, SL1 1XQ",
  admin_whatsapp_number: "+447852502775",
  opening_hours: "24/7 Dispatch Desk - 365 Days a Year",
  currency_code: "GBP",
  vat_rate: 20,
  social_links: {},
  tracking: { gtm_id: null, ga_id: null, meta_pixel_id: null },
  branding: { header_logo_url: null, footer_logo_url: null, favicon_url: null },
};

type PublicSettingsPayload = Partial<SiteSettings> & {
  phone?: string;
  whatsapp?: string;
  email?: string;
  address?: string;
};

export function normalizeSiteSettings(data: PublicSettingsPayload | null | undefined): SiteSettings {
  if (!data) return defaultSiteSettings;

  const vatRate = Number(data.vat_rate);
  return {
    ...defaultSiteSettings,
    ...data,
    business_name: data.business_name || defaultSiteSettings.business_name,
    hotline_phone: data.phone || data.hotline_phone || defaultSiteSettings.hotline_phone,
    support_email: data.email || data.support_email || defaultSiteSettings.support_email,
    office_address: data.address || data.office_address || defaultSiteSettings.office_address,
    admin_whatsapp_number:
      data.whatsapp || data.admin_whatsapp_number || defaultSiteSettings.admin_whatsapp_number,
    vat_rate: Number.isFinite(vatRate) ? vatRate : defaultSiteSettings.vat_rate,
    social_links: { ...defaultSiteSettings.social_links, ...data.social_links },
    tracking: { ...defaultSiteSettings.tracking, ...data.tracking },
    branding: { ...defaultSiteSettings.branding, ...data.branding },
  };
}
