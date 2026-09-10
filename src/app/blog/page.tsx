import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getBlogs } from "@/lib/blogs";
import BlogExplorer from "@/components/Blog/BlogExplorer";
import BlogCta from "@/components/Blog/BlogCta";
import "./journal.css";
export const metadata: Metadata = { title: "The InstaDrop Journal", description: "Stories, practical tips and fresh perspectives from the world of delivery.", robots: { index: true, follow: true } };
export default async function BlogPage() {
 const blogPosts = await getBlogs();
 const post = blogPosts.find(item => item.featured) ?? blogPosts[0];
 return <div className="journal"><section className="journal-featured-section"><div className="journal-container"><h1 className="sr-only">InstaDrop Blog</h1>{post && <Link href={`/blog/${post.slug}`} className="journal-featured"><div className="journal-featured-image"><Image src={post.image} alt={post.alt} fill priority sizes="(max-width: 767px) 100vw, 60vw" /><span className="journal-featured-label">EDITOR’S PICK</span></div><div className="journal-featured-content"><span className="journal-category">{post.category}</span><h2>{post.title}</h2><p>{post.description}</p><div className="journal-meta"><span>{post.date}</span><span>{post.readTime}</span></div><span className="journal-featured-action">Read the story <span><ArrowUpRight size={23} /></span></span></div></Link>}</div></section><BlogExplorer blogPosts={blogPosts} /><BlogCta /></div>;
}
