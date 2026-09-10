"use client";
import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog-types";
import BlogCard from "./BlogCard";
export default function BlogExplorer({ blogPosts }: { blogPosts: BlogPost[] }) {
  const categories = ["All articles", ...new Set(blogPosts.map(post => post.category))];
  const [category, setCategory] = useState("All articles");
  const [query, setQuery] = useState("");
  const posts = blogPosts.filter(post => (category === "All articles" || post.category === category) && `${post.title} ${post.description} ${post.category}`.toLowerCase().includes(query.toLowerCase().trim()));
  return <section className="journal-container journal-explorer" id="latest"><div className="journal-section-heading"><div><span className="journal-eyebrow">THE LATEST FROM INSTADROP</span><h2>A little insight goes a long way.</h2></div><p>Fresh perspectives for people<br className="hidden sm:block" /> and businesses on the move.</p></div><div className="journal-tools"><div className="journal-filters" aria-label="Filter articles by category">{categories.map(item => <button key={item} onClick={() => setCategory(item)} aria-pressed={category === item} className={category === item ? "selected" : ""}>{item}</button>)}</div><label className="journal-search"><Search size={18} aria-hidden="true" /><input aria-label="Search articles" placeholder="Search articles…" value={query} onChange={event => setQuery(event.target.value)} /></label></div><p className="journal-result-count" aria-live="polite">{posts.length} {posts.length === 1 ? "article" : "articles"}{category !== "All articles" ? ` in ${category}` : " to explore"}</p><div className="journal-grid">{posts.map(post => <BlogCard key={post.slug} post={post} />)}</div>{posts.length === 0 && <div className="journal-empty"><h3>No articles found</h3><p>Try another search or explore all our stories.</p><button onClick={() => {setQuery(""); setCategory("All articles");}}>View all articles <ArrowRight size={16} /></button></div>}</section>;
}
