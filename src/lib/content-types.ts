export type ContentSeo = {
  title: string | null; description: string | null; keywords: string | null;
  ogTitle: string | null; ogDescription: string | null; ogImage: string | null;
  noindex: boolean; nofollow: boolean;
};

export type DirectoryPage = {
  type: "services_index"; slug: "services"; title: string; navigationTitle: string;
  icon: string; summary: string | null;
  hero: { badge: string | null; title: string; description: string | null; image: null; imageAlt: null; ctaLabel: string | null; ctaUrl: string | null };
  seo: ContentSeo; updatedAt: string | null;
};

export type ServiceSectionItem = {
  badge: string | null; title: string | null; body: string | null;
  linkLabel: string | null; linkUrl: string | null; image: string | null; imageAlt: string | null;
};

export type ServiceSection = {
  type: "content" | "steps" | "tiles" | "callout" | "faq" | "related";
  anchorId: string | null; label: string | null; heading: string | null;
  intro: string | null; body: string | null; calloutHeading: string | null;
  calloutBody: string | null; image: string | null; imageAlt: string | null;
  showInSidebar: boolean; items: ServiceSectionItem[];
};

export type ServiceSummary = {
  type: "service"; slug: string; title: string; navigationTitle: string; icon: string; summary: string | null;
  hero: { eyebrow: string | null; title: string; description: string | null; primaryLabel: string | null; primaryUrl: string | null; secondaryLabel: string | null; secondaryUrl: string | null; points: string[]; image: string | null; imageAlt: string | null };
  routeVisual: { kicker: string | null; counter: string | null; title: string | null; collectionLabel: string | null; collectionDetail: string | null; deliveryLabel: string | null; deliveryDetail: string | null; footer: string | null; status: string | null };
  notice: { title: string | null; body: string | null };
  sidebar: { title: string | null; body: string | null; ctaLabel: string | null; ctaUrl: string | null; helpfulDetails: string | null };
  bottomCta: { title: string | null; body: string | null; label: string | null; url: string | null };
  card: { badge: string | null; subtitle: string | null; description: string | null; features: string[]; details: Array<{ label: string; value: string }>; image: null; imageAlt: null };
  seo: ContentSeo; updatedAt: string | null;
};

export type ServicePage = ServiceSummary & { sections: ServiceSection[] };

export type CoveragePage = {
  type: "coverage"; slug: "coverage"; title: string; navigationTitle: string; icon: string; summary: string | null;
  hero: { badge: string | null; title: string; description: string | null; image: null; imageAlt: null; ctaLabel: null; ctaUrl: null };
  regionsEyebrow: string | null; regionsHeading: string | null;
  regions: Array<{ title: string; timing: string | null; hubs: string | null; postcodes: string | null; icon: string }>;
  sections: Array<{ eyebrow: string | null; heading: string | null; body: string | null; ctaLabel: string | null; ctaUrl: string | null; theme: "light" | "soft" | "dark" }>;
  bottomCta: { title: string | null; body: string | null; label: string | null; url: string | null };
  seo: ContentSeo; updatedAt: string | null;
};
