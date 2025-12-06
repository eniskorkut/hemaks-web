import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { getDictionary, Locale } from "@/lib/dictionary";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function AllProductsPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  // Filtreleme YOK. Tüm ürünleri (products) direkt kullanıyoruz.

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık Alanı */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {dict.Navigation.products} {/* "Ürünler" yazar */}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {/* Basit bir alt başlık - İstersen sözlüğe ekleyebilirsin */}
            {lang === 'tr' 
              ? "Kalite ve estetiğin buluştuğu tüm ürün gruplarımız." 
              : "All our product groups where quality meets aesthetics."}
          </p>
        </div>

        {/* 4 Sütunlu Ürün Listesi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} lang={lang} />
          ))}
        </div>

      </div>
    </div>
  );
}