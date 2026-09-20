export type ContentSeo = {
  title: string | null;
  description: string | null;
  keywords: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: string | null;
  noindex: boolean;
  nofollow: boolean;
};

export type ContentItem = {
  title: string | null;
  subtitle: string | null;
  description: string | null;
  badge: string | null;
  value: string | null;
  icon: string | null;
  image: string | null;
  imageAlt: string | null;
  linkLabel: string | null;
  linkUrl: string | null;
  metadata: Record<string, unknown> | null;
};

export type ContentSection = {
  type: "rich_text" | "feature_grid" | "steps" | "info_cards" | "comparison" | "region_grid" | "faq" | "cta";
  eyebrow: string | null;
  heading: string | null;
  body: string | null;
  image: string | null;
  imageAlt: string | null;
  ctaLabel: string | null;
  ctaUrl: string | null;
  theme: "light" | "soft" | "dark";
  items: ContentItem[];
};

export type ServiceSummary = {
  type: "service";
  slug: string;
  title: string;
  navigationTitle: string;
  icon: string;
  summary: string | null;
  hero: {
    badge: string | null;
    title: string;
    description: string | null;
    image: string | null;
    imageAlt: string | null;
    ctaLabel: string | null;
    ctaUrl: string | null;
  };
  card: {
    badge: string | null;
    subtitle: string | null;
    description: string | null;
    features: string[];
    details: Array<{ label: string; value: string }>;
    image: string | null;
    imageAlt: string | null;
  };
  seo: ContentSeo;
  updatedAt: string | null;
};

export type ManagedPage = Omit<ServiceSummary, "type"> & {
  type: "service" | "services_index" | "coverage";
  sections: ContentSection[];
};
