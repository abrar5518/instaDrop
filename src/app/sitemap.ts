import type { MetadataRoute } from "next";
import { getBlogs } from "@/lib/blogs";
import { courierServices, industries } from "@/content/siteContent";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getBlogs();
  const base = "https://instadrop.sahoolat.pk";
  const main = ["", "/instant-quote", "/services", "/industries", "/vehicle-fleet", "/coverage", "/track-delivery", "/about", "/blog", "/contact", "/terms-and-conditions", "/privacy-policy"];
  return [
    ...blogs.filter(blog => !blog.noindex).map(blog => ({ url: `${base}/blog/${blog.slug}`, lastModified: blog.updatedAt, changeFrequency: "weekly" as const, priority: 0.7 })),
    ...main.map((path) => ({ url: `${base}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 })),
    ...courierServices.map(({ slug }) => ({ url: `${base}/${slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...industries.map(({ slug }) => ({ url: `${base}/industries/${slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
