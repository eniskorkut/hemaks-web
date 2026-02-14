"use client";

import { useRef } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/data/products";

type Props = {
    products: Product[];
    lang: "tr" | "en" | "fr" | "es";
};

export default function RelatedProductsCarousel({ products, lang }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (containerRef.current) {
            const scrollAmount = 320; // Approx card width + gap
            containerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="relative group px-4 sm:px-0">
            {/* Scroll Container */}
            <div
                ref={containerRef}
                className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 gap-4 sm:gap-6 snap-x snap-mandatory scrollbar-hide scroll-smooth"
            >
                {products.map((p) => (
                    <div key={p.id} className="min-w-[280px] md:min-w-[300px] snap-center flex-shrink-0">
                        <ProductCard product={p} lang={lang} />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows (Desktop Only) */}
            <button
                onClick={() => scroll("left")}
                className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -ml-5 z-10 bg-white shadow-lg border border-gray-100 rounded-full p-3 text-gray-700 hover:text-red-600 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Scroll Left"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={() => scroll("right")}
                className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 -mr-5 z-10 bg-white shadow-lg border border-gray-100 rounded-full p-3 text-gray-700 hover:text-red-600 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Scroll Right"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}
