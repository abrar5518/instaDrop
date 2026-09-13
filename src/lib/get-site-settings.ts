import "server-only";
import { cache } from "react";
import { defaultSiteSettings, normalizeSiteSettings, type SiteSettings } from "./site-settings";

const backendUrl = (process.env.BACKEND_API_URL ?? "https://admin.instadrop.uk/api/v1").replace(/\/$/, "");

export const getSiteSettings = cache(async (): Promise<SiteSettings> => {
  try {
    const response = await fetch(`${backendUrl}/settings/public`, {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return defaultSiteSettings;
    return normalizeSiteSettings(await response.json());
  } catch {
    return defaultSiteSettings;
  }
});
