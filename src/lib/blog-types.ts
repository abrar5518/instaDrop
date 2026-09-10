export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  date: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  featured: boolean;
  noindex: boolean;
};

export type BlogArticle = BlogPost & {
  content: string;
  seo: {
    title: string;
    description: string;
    keywords: string | null;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    noindex: boolean;
    nofollow: boolean;
  };
};
