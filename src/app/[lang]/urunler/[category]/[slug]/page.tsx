import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { getDictionary, Locale } from "@/lib/dictionary";
import ProductGallery from "@/components/ProductGallery";
import RelatedProductsCarousel from "@/components/RelatedProductsCarousel";
import ProductCard from "@/components/ProductCard"; // Kart bileşenini çağırdık

type Props = {
  params: Promise<{
    lang: Locale;
    category: string;
    slug: string;
  }>;
};

export default async function ProductDetailPage({ params }: Props) {
  const { lang, category, slug } = await params;
  const dict = await getDictionary(lang);

  // 1. Mevcut Ürünü Bul
  const product = products.find((p) => p.id === slug);

  if (!product) {
    return notFound();
  }

  // 2. Diğer Ürünleri Bul (Tüm ürünler, kendisi hariç)
  const relatedProducts = products
    .filter((p) => p.id !== slug); // Sadece kendisini çıkar, kalanı göster
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ✅ 1. BREADCRUMBS (Yol Haritası) */}
        <nav className="flex text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li><Link href={`/${lang}`} className="hover:text-red-600 transition">Hemaks</Link></li>
            <li>/</li>
            <li><Link href={`/${lang}/urunler`} className="hover:text-red-600 transition">{dict.Navigation.products}</Link></li>
            <li>/</li>
            {/* Kategori ismini büyük harf yapalım */}
            <li><Link href={`/${lang}/urunler/${category}`} className="hover:text-red-600 transition capitalize">{category}</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium truncate" aria-current="page">{product.title[lang]}</li>
          </ol>
        </nav>

        {/* ✅ 2. ANA ÜRÜN KARTI (Beyaz Kutu) */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* SOL: Büyük Görsel Alanı */}
            {/* SOL: Büyük Görsel Alanı (Gallerili) */}
            <div className="h-[500px] lg:h-[600px] bg-white">
              <ProductGallery
                images={product.images && product.images.length > 0 ? product.images : [product.image]}
                title={product.title[lang]}
              />
            </div>

            {/* SAĞ: Detaylar */}
            <div className="p-6 lg:p-8 flex flex-col justify-center">

              <div className="mb-4">
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {dict.Categories[product.category] || product.category}
                </span>
              </div>

              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {product.title[lang]}
              </h1>

              {/* Uzun Açıklama varsa göster, yoksa kısa açıklama */}
              <div className="text-sm text-gray-600 mb-6 leading-relaxed whitespace-pre-line">
                {product.longDescription ? product.longDescription[lang] : product.description[lang]}
              </div>

              {/* Ürün Özellikleri (Varsa) */}
              {product.features && product.features[lang] && (
                <div className="mb-8">
                  <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-3">Ürün Özellikleri</h3>
                  <ul className="space-y-2 text-sm">
                    {product.features[lang].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Butonlar */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a
                  href={`https://wa.me/903523115252?text=Merhaba, ${product.title[lang]} (ID: ${product.id}) hakkında fiyat almak istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg font-semibold transition shadow-md hover:shadow-green-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                  WhatsApp Sipariş
                </a>
              </div>

            </div>
          </div>

          {/* ✅ 3. TEKNİK ÖZELLİKLER & TABLO (Alt Kısım) */}
          <div className="border-t border-gray-100 bg-gray-50/50 p-8 lg:p-12">

            {/* HTML Tablo Varsa Göster */}
            {product.table && (
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Ürün Kod ve Ölçüleri</h3>
                <div
                  className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200 p-4"
                  dangerouslySetInnerHTML={{ __html: product.table }}
                />
              </div>
            )}

            {/* Spesifikasyonlar Varsa Göster */}
            {product.specifications && product.specifications[lang] && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Teknik Detaylar</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {product.specifications[lang].map((spec, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-100">
                      <span className="block text-xs text-gray-500 uppercase mb-1">{spec.label}</span>
                      <span className="font-semibold text-gray-800">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ✅ 4. BENZER ÜRÜNLER ALANI */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">
              İlginizi Çekebilecek Diğer Ürünler
            </h2>
            {/* Horizontal Carousel for All Devices */}
            <RelatedProductsCarousel products={relatedProducts} lang={lang} />
          </div>
        )}

      </div>
    </div>
  );
}