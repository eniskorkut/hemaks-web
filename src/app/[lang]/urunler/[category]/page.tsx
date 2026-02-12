import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { getDictionary, Locale } from "@/lib/dictionary";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ lang: Locale; category: string }>;
};

// Geçerli kategori listesi (products.ts ile uyumlu olmalı)
const validCategories = ["kiler", "dolap-ici", "tezgah-alti", "gardirop", "banyo", "set-arasi"];

export default async function CategoryPage({ params }: Props) {
    const { lang, category } = await params;
    const dict = await getDictionary(lang);

    // 1. Kategori geçerliliğini kontrol et
    if (!validCategories.includes(category)) {
        return notFound();
    }

    // 2. Kategoriye ait ürünleri filtrele
    const categoryProducts = products.filter((p) => p.category === category);

    // 3. Kategori Başlığını Bul (Dict'ten)
    // Dict yapısı: dict.Categories['kiler'] -> "Kiler Grubu" gibi
    // Ancak `category` string, key olarak kullanılmalı.
    // Dict tip tanımlaması `Record<string, string>` olmayabilir, bu yüzden `as any` veya güvenli erişim gerekebilir.
    // Şimdilik `dict.Categories[category as keyof typeof dict.Categories]` deneyelim.
    const categoryTitle = dict.Categories[category as keyof typeof dict.Categories] || category;

    if (categoryProducts.length === 0) {
        return (
            <div className="py-16 bg-gray-50 min-h-screen text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{categoryTitle}</h1>
                <p className="text-gray-600">Bu kategoride henüz ürün bulunmamaktadır.</p>
            </div>
        );
    }

    return (
        <div className="py-16 bg-gray-50 min-h-screen">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Başlık Alanı */}
                <div className="text-center mb-12">
                    <span className="text-sm font-bold tracking-wider text-red-600 uppercase mb-2 block">
                        {dict.Navigation.products}
                    </span>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {categoryTitle}
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {/* Buraya kategoriye özel açıklama eklenebilir veya boş bırakılabilir */}
                        {dict.Categories[category as keyof typeof dict.Categories]}
                    </p>
                </div>

                {/* Ürün Listesi */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categoryProducts.map((product) => (
                        <ProductCard key={product.id} product={product} lang={lang} />
                    ))}
                </div>

            </div>
        </div>
    );
}
