import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  lang: "tr" | "en" | "fr" | "es";
};

export default function ProductCard({ product, lang }: ProductCardProps) {
  return (
    <Link href={`/${lang}/urunler/${product.category}/${product.id}`} className="group block h-full">
      <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        
        {/* Resim Alanı */}
        <div className="relative h-64 w-full overflow-hidden bg-gray-50">
          <Image
            src={product.image}
            alt={product.title[lang]}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Hover Overlay - Hafif karartma */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        </div>

        {/* Yazı Alanı */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors mb-3">
            {product.title[lang]}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">
            {product.description[lang]}
          </p>
        </div>

      </div>
    </Link>
  );
}