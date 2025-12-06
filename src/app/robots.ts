import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Gizli klasörler varsa engelle
    },
    sitemap: 'https://hemaks.com/sitemap.xml',
  };
}