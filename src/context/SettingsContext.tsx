"use client";

import { createContext, useContext, type ReactNode } from "react";
import { defaultSiteSettings, type SiteSettings } from "@/lib/site-settings";

const SettingsContext = createContext<SiteSettings>(defaultSiteSettings);

export function SettingsProvider({
  children,
  initialSettings,
}: {
  children: ReactNode;
  initialSettings: SiteSettings;
}) {
  return <SettingsContext.Provider value={initialSettings}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  return useContext(SettingsContext);
}
