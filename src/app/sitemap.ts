import type { MetadataRoute } from "next";
import { industries } from "@/content/siteContent";
import { getBlogs } from "@/lib/blogs";
import { getServices } from "@/lib/content-pages";

const staticRoutes = [
  "", "/about", "/services", "/vehicle-fleet", "/instant-quote", "/track-delivery", "/reviews",
  "/business-accounts", "/coverage", "/industries", "/blog", "/faq", "/contact",
  "/privacy-policy", "/terms-and-conditions",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://instadrop.uk";
  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route === "/instant-quote" || route === "/same-day-delivery" ? 0.9 : route.includes("policy") || route.includes("terms") ? 0.3 : 0.8,
  }));

  pages.push(...industries.map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })));

  try {
    const services = await getServices();
    pages.push(...services.filter((service) => !service.seo.noindex).map((service) => ({
      url: `${baseUrl}/${service.slug}`,
      lastModified: service.updatedAt || undefined,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })));
  } catch {
    // Keep the rest of the sitemap available during a temporary content API outage.
  }

  try {
    const posts = await getBlogs();
    pages.push(...posts.filter((post) => !post.noindex).map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt || post.publishedAt || undefined,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })));
  } catch {
    // Keep the static sitemap available when the blog service is temporarily unavailable.
  }

  return pages;
}
