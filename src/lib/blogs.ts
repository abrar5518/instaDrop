import "server-only";
import { cache } from "react";
import type { BlogArticle, BlogPost } from "./blog-types";

const backendUrl = (process.env.BACKEND_API_URL ?? "https://admin.instadrop.uk/api/v1").replace(/\/$/, "");

// Do not cache published content: saves, unpublishing and deletions take effect on the next request.
export const getBlogs = cache(async (): Promise<BlogPost[]> => {
  const response = await fetch(`${backendUrl}/blogs`, { cache: "no-store", signal: AbortSignal.timeout(10000) });
  if (!response.ok) throw new Error("Blogs could not be loaded.");
  const result = await response.json();
  if (!Array.isArray(result.data)) throw new Error("Invalid blog response.");
  return result.data;
});

export const getBlog = cache(async (slug: string): Promise<BlogArticle | null> => {
  const response = await fetch(`${backendUrl}/blogs/${encodeURIComponent(slug)}`, { cache: "no-store", signal: AbortSignal.timeout(10000) });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error("This article could not be loaded.");
  const result = await response.json();
  if (!result.data || typeof result.data.content !== "string") throw new Error("Invalid article response.");
  return result.data;
});
