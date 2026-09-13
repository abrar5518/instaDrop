type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};

const analyticsWindow = () => window as AnalyticsWindow;

export function trackPageView(): void {
  if (typeof window === "undefined") return;

  const tracking = analyticsWindow();
  tracking.dataLayer = tracking.dataLayer ?? [];
  tracking.dataLayer.push({ event: "virtual_page_view", page_location: window.location.href });
  tracking.gtag?.("event", "page_view", { page_location: window.location.href });
  tracking.fbq?.("track", "PageView");
}

export function trackLead(details: {
  quote_number?: string;
  vehicle_type?: string;
  route?: string;
}): void {
  if (typeof window === "undefined") return;

  const tracking = analyticsWindow();
  const eventData = {
    quote_number: details.quote_number,
    vehicle_type: details.vehicle_type,
    route: details.route,
  };

  tracking.dataLayer = tracking.dataLayer ?? [];
  tracking.dataLayer.push({ event: "quote_submitted", ...eventData });
  tracking.gtag?.("event", "generate_lead", {
    transaction_id: details.quote_number,
    vehicle_type: details.vehicle_type,
    route: details.route,
  });
  tracking.fbq?.("track", "Lead", {
    content_name: details.quote_number || "Delivery Quote Request",
    content_category: details.vehicle_type || "Same-Day Courier",
    route: details.route,
  });
}

export function trackPurchase(details: {
  order_number: string;
  value: number;
  currency?: string;
}): void {
  if (typeof window === "undefined") return;

  const tracking = analyticsWindow();
  const currency = details.currency || "GBP";
  const eventData = {
    transaction_id: details.order_number,
    value: details.value,
    currency,
  };

  tracking.dataLayer = tracking.dataLayer ?? [];
  tracking.dataLayer.push({ event: "payment_completed", ...eventData });
  tracking.gtag?.("event", "purchase", eventData);
  tracking.fbq?.("track", "Purchase", {
    content_name: details.order_number,
    value: details.value,
    currency,
  });
}
