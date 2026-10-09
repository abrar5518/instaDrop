import type { Metadata } from "next";
import { getBlogs } from "@/lib/blogs";
import BlogExplorer from "@/components/Blog/BlogExplorer";
import BlogCta from "@/components/Blog/BlogCta";
import "./journal.css";
export const metadata: Metadata = { title: "The InstaDrop Journal", description: "Stories, practical tips and fresh perspectives from the world of delivery.", robots: { index: true, follow: true } };
export default async function BlogPage() {
 const blogPosts = await getBlogs();
 return <div className="journal"><h1 className="sr-only">InstaDrop Blog</h1><BlogExplorer blogPosts={blogPosts} /><BlogCta /></div>;
}
