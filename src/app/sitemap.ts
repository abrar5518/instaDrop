import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://instadrop.co.uk';

  const routes = [
    '',
    '/about',
    '/services',
    '/same-day-delivery',
    '/legal-courier',
    '/medical-courier',
    '/pallet-delivery',
    '/wait-and-return',
    '/vehicle-fleet',
    '/instant-quote',
    '/track-delivery',
    '/reviews',
    '/business-accounts',
    '/coverage',
    '/faq',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
  ];

  return routes.map((route) => {
    let priority = 0.8;
    if (route === '') priority = 1.0;
    if (route === '/instant-quote' || route === '/same-day-delivery') priority = 0.9;
    if (route === '/privacy-policy' || route === '/terms-and-conditions') priority = 0.3;

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'daily' : 'weekly',
      priority: priority,
    };
  });
}
