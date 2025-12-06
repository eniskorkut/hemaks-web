import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { getDictionary, Locale } from "@/lib/dictionary";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function KitchenPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  // Sadece MUTFAK ürünlerini filtrele
const wardrobeProducts = products.filter((p) => p.category === "wardrobe");
await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık Alanı */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{dict.Categories.kitchen}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dar alanlarda maksimum kullanım sağlayan, ergonomik ve şık mutfak çözümleri.
          </p>
        </div>

        {/* Ürün Listesi Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {wardrobeProducts.map((product) => (
                    <ProductCard key={product.id} product={product} lang={lang} />
                  ))}
        </div>

      </div>
    </div>
  );
}