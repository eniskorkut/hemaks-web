import { MetadataRoute } from 'next';
import { products } from '@/data/products';

const baseUrl = 'https://hemaks.com'; // Gerçek domain buraya gelecek
const languages = ['tr', 'en', 'fr', 'es'];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. Statik Sayfalar (Anasayfa, Hakkımızda, İletişim, Ürünler)
  const staticPages = ['', 'hakkimizda', 'iletisim', 'urunler'];

  languages.forEach((lang) => {
    staticPages.forEach((page) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page === '' ? 1 : 0.8, // Anasayfa en önemli
      });
    });
  });

  // 2. Dinamik Ürün Sayfaları
  // Her ürün için ve her dil için link oluştur
  products.forEach((product) => {
    languages.forEach((lang) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/urunler/${product.category}/${product.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9, // Ürün sayfaları çok önemli
      });
    });
  });

  return sitemapEntries;
}