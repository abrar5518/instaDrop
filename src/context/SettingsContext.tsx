"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface ContactSettings {
  business_name: string;
  hotline_phone: string;
  support_email: string;
  office_address: string;
  admin_whatsapp_number: string;
  opening_hours: string;
  currency_code: string;
  vat_rate: number;
}

const defaultSettings: ContactSettings = {
  business_name: "InstaDrop Courier Services Ltd",
  hotline_phone: "0800 123 4455",
  support_email: "dispatch@instadrop.co.uk",
  office_address: "100 Pall Mall, St. James's, London, SW1Y 5NQ",
  admin_whatsapp_number: "+448001234455",
  opening_hours: "24/7 Dispatch Desk • 365 Days a Year",
  currency_code: "GBP",
  vat_rate: 20.00,
};

const SettingsContext = createContext<ContactSettings>(defaultSettings);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<ContactSettings>(defaultSettings);

  useEffect(() => {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api/v1";

    fetch(`${apiBaseUrl}/settings`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.settings) {
          setSettings(data.settings);
        }
      })
      .catch(() => {
        // Fallback to defaultSettings if backend server is unreachable
      });
  }, []);

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
