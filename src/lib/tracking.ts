type TrackingWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};

type EventDefinition = {
  meta: string;
  ga4: string;
};

const eventDefinitions: Record<string, EventDefinition> = {
  quote_submitted: { meta: "Lead", ga4: "generate_lead" },
  contact_submitted: { meta: "Contact", ga4: "generate_lead" },
  business_account_submitted: { meta: "Lead", ga4: "generate_lead" },
  payment_started: { meta: "InitiateCheckout", ga4: "begin_checkout" },
  payment_completed: { meta: "Purchase", ga4: "purchase" },
};

export function trackEvent(event: string, parameters: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const tracking = window as TrackingWindow;
  const definition = eventDefinitions[event];
  const analyticsParameters = {
    ...parameters,
    ...(parameters.invoice_number && !parameters.transaction_id
      ? { transaction_id: parameters.invoice_number }
      : {}),
  };

  tracking.dataLayer = tracking.dataLayer ?? [];
  tracking.dataLayer.push({ event, ...parameters });

  if (definition) {
    tracking.gtag?.("event", definition.ga4, analyticsParameters);
    tracking.fbq?.("track", definition.meta, analyticsParameters);
  }
}
