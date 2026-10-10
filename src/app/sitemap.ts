import { MetadataRoute } from 'next';
import { site } from '@/lib/site';

const staticPages = [
  { path: '', priority: 1, changeFrequency: 'monthly' as const, lastModified: '2026-10-10' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-10-10' },
  { path: '/services', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-10-10' },
  { path: '/projects', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-10-10' },
  { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-10-10' },
  { path: '/contact', priority: 0.5, changeFrequency: 'yearly' as const, lastModified: '2026-10-10' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = staticPages.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: new Date(route.lastModified),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return [...routes];
}
