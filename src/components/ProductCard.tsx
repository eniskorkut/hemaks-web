import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  lang: "tr" | "en" | "fr" | "es" | "ar";
};

export default function ProductCard({ product, lang }: ProductCardProps) {
  return (
    <Link href={`/${lang}/urunler/${product.category}/${product.id}`} className="group block h-full">
      {/* Updated container styles to remove potential top borders */}
      <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">

        {/* Image Area */}
        <div className="relative h-64 w-full overflow-hidden bg-gray-50 dark:bg-gray-700">
          <Image
            src={product.image}
            alt={product.title[lang]}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        </div>

        {/* Content Area */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors mb-3">
            {product.title[lang]}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed">
            {product.description[lang]}
          </p>
        </div>

      </div>
    </Link>
  );
}