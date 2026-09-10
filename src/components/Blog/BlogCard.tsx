import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog-types";

export default function BlogCard({ post }: { post: BlogPost }) {
  return <article className="journal-card"><Link href={`/blog/${post.slug}`} className="journal-card-link"><div className="journal-card-image"><Image src={post.image} alt={post.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" /><span className="journal-image-arrow"><ArrowUpRight size={20} /></span></div><div className="journal-card-body"><span className="journal-category">{post.category}</span><h3>{post.title}</h3><p>{post.description}</p><div className="journal-meta"><span>{post.date}</span><span>{post.readTime}</span></div></div></Link></article>;
}
