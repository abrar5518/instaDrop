import type { Metadata } from "next";
import type { ManagedPage } from "./content-types";

export function contentMetadata(page: ManagedPage | null, canonical: string): Metadata {
  if (!page) return {};
  const keywords = page.seo.keywords?.split(",").map((keyword) => keyword.trim()).filter(Boolean);
  return {
    title: page.seo.title || page.title,
    description: page.seo.description || page.summary || undefined,
    keywords: keywords?.length ? keywords : undefined,
    alternates: { canonical },
    robots: {
      index: !page.seo.noindex,
      follow: !page.seo.nofollow,
    },
    openGraph: {
      title: page.seo.ogTitle || page.seo.title || page.title,
      description: page.seo.ogDescription || page.seo.description || page.summary || undefined,
      url: canonical,
      type: "website",
      images: page.seo.ogImage ? [{ url: page.seo.ogImage }] : undefined,
    },
  };
}
