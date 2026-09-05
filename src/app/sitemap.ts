import type { MetadataRoute } from "next";
import { courierServices, industries } from "@/content/siteContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://instadrop.sahoolat.pk";
  const main = ["", "/instant-quote", "/services", "/industries", "/vehicle-fleet", "/coverage", "/track-delivery", "/about", "/contact", "/blog", "/blog/choose-the-right-courier-vehicle", "/blog/prepare-urgent-consignment", "/blog/proof-of-delivery-explained", "/terms-and-conditions", "/privacy-policy"];
  return [
    ...main.map((path) => ({ url: `${base}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 })),
    ...courierServices.map(({ slug }) => ({ url: `${base}/${slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...industries.map(({ slug }) => ({ url: `${base}/industries/${slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
