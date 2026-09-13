import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Truck } from "lucide-react";
import { notFound } from "next/navigation";
import { getBlog, getBlogs } from "@/lib/blogs";
import sanitizeHtml from "sanitize-html";
import "./rich-content.css";

export async function generateMetadata({ params }: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlog(slug);
  if (!post) notFound();
  return {
    title: { absolute: post.seo.title },
    description: post.seo.description,
    keywords: post.seo.keywords || [],
    robots: { index: !post.seo.noindex, follow: !post.seo.nofollow },
    openGraph: {
      type: "article", title: post.seo.ogTitle, description: post.seo.ogDescription,
      images: [{ url: post.seo.ogImage, alt: post.alt }],
      publishedTime: post.publishedAt, modifiedTime: post.updatedAt,
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://instadrop.uk"}/blog/${post.slug}`,
    },
    twitter: { card: "summary_large_image", title: post.seo.ogTitle, description: post.seo.ogDescription, images: [post.seo.ogImage] },
  };
}

export default async function BlogDetail({ params }: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlog(slug);
  if (!post) notFound();

  const blogPosts = await getBlogs();
  const relatedPosts = blogPosts.filter(item => item.slug !== slug).slice(0, 3);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://instadrop.uk";
  const safeContent = sanitizeHtml(post.content, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "figure", "figcaption"]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      a: ["href", "name", "target", "rel"],
      img: ["src", "alt", "width", "height", "loading"],
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", { rel: "noopener noreferrer" }, true),
      img: sanitizeHtml.simpleTransform("img", { loading: "lazy" }, true),
    },
  });

  return (
    <div className="bg-white px-4 pb-16 pt-6 sm:px-8 sm:pb-20 sm:pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "@id": `${siteUrl}/blog/${post.slug}#article`,
        url: `${siteUrl}/blog/${post.slug}`,
        mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}/blog/${post.slug}` },
        headline: post.title, articleSection: post.category, inLanguage: "en-GB",
        keywords: post.seo.keywords || undefined,
        description: post.description, image: [post.image], datePublished: post.publishedAt,
        dateModified: post.updatedAt, author: { "@type": "Organization", name: "InstaDrop Editorial", url: `${siteUrl}/about` },
        publisher: { "@type": "Organization", name: "InstaDrop Courier Services", url: siteUrl },
      }).replace(/</g, "\\u003c") }} />
      <div className="mx-auto max-w-7xl">
        <div className="relative h-[190px] overflow-hidden rounded-2xl bg-slate-50 sm:h-[260px] sm:rounded-3xl lg:h-[300px]">
          <Image
            src={post.image}
            alt={post.alt}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-[center_55%]"
          />
        </div>
        <div className="mb-9 mt-5 flex items-center justify-between gap-4 border-b border-slate-100 pb-5 sm:mb-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 transition-colors hover:text-[#0066ff]">
            <ArrowLeft className="h-3.5 w-3.5" /> All articles
          </Link>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">InstaDrop Blog</span>
        </div>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_300px] xl:gap-16">
          <article
            className="instadrop-rich-content min-w-0"
            dangerouslySetInnerHTML={{ __html: safeContent }}
          />
          <aside aria-label="More from InstaDrop" className="space-y-6 lg:border-l lg:border-slate-100 lg:pl-7">
            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0066ff]">Keep exploring</span>
              <h2 className="mt-2 text-xl font-extrabold text-[#0a192f]">More from the blog</h2>
              <div className="mt-5 divide-y divide-slate-200">
                {relatedPosts.map(item => (
                  <Link key={item.slug} href={`/blog/${item.slug}`} className="group flex gap-3 py-5 first:pt-0 last:pb-0">
                    <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl bg-slate-200">
                      <Image src={item.image} alt={item.alt} fill sizes="72px" className="object-cover" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] font-bold uppercase tracking-wide text-[#0066ff]">{item.category}</span>
                      <h3 className="mt-1 text-xs font-bold leading-relaxed text-[#0a192f] transition-colors group-hover:text-[#0066ff]">{item.title}</h3>
                      <span className="mt-1.5 block text-[10px] text-slate-500">{item.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/blog" className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 text-xs font-bold text-[#0a192f] hover:text-[#0066ff]">Browse all articles <ArrowUpRight className="h-4 w-4" /></Link>
            </section>
            <section className="rounded-3xl bg-[#0a192f] p-7 text-white">
              <span className="mb-6 inline-flex rounded-2xl bg-white/10 p-3 text-[#c6ff00]"><Truck className="h-6 w-6" /></span>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#c6ff00]">Ready when you are</p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight">Your next delivery,<br />sorted.</h2>
              <p className="mt-4 text-xs leading-6 text-slate-300">From urgent parcels to planned collections, tell us what needs moving.</p>
              <Link href="/instant-quote" className="mt-6 flex items-center justify-between gap-2 rounded-full bg-[#c6ff00] px-5 py-3.5 text-xs font-extrabold text-[#0a192f] transition-colors hover:bg-[#b2e600]">Get a speedy quote <ArrowUpRight className="h-4 w-4" /></Link>
              <Link href="/contact" className="mt-4 block text-center text-[11px] font-semibold text-slate-300 hover:text-white">Or speak to our dispatch team</Link>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
