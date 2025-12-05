"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type NavMenuProps = {
  lang: string;
  dict: any;
};
// NavMenu bileşeni 
export default function NavMenu({ lang, dict }: NavMenuProps) {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <ul className="hidden sm:flex space-x-8 items-center h-full">
      <li>
        <Link href={`/${lang}`} className="text-gray-700 hover:text-red-600 font-medium transition text-sm uppercase tracking-wide">
          {dict.Navigation.home}
        </Link>
      </li>

      <li 
        className="group h-full flex items-center relative"
        onMouseEnter={() => setIsMegaMenuOpen(true)}
        onMouseLeave={() => setIsMegaMenuOpen(false)}
      >
        <Link 
            href={`/${lang}/urunler`} 
            className="text-gray-700 group-hover:text-red-600 font-medium transition py-6 border-b-2 border-transparent group-hover:border-red-600 text-sm uppercase tracking-wide"
        >
          {dict.Navigation.products}
        </Link>

        <div 
          // duration-300 ease-out origin-top: 300ms sürede, yumuşakça (ease-out) ve üst kısımdan başlayarak (origin-top) açılsın.
          className={`absolute left-1/2 transform -translate-x-1/2 top-full w-[500px] bg-white shadow-2xl border-t-4 border-red-600 rounded-b-lg z-50 overflow-hidden transition-all duration-300 ease-out origin-top
          ${isMegaMenuOpen 
            ? "opacity-100 visible scale-100 translate-y-0" // AÇIKKEN: Tam görünür, normal boyut, yerinde.
            : "opacity-0 invisible scale-95 translate-y-2"   // KAPALIYKEN: Görünmez, %95 boyut, biraz aşağıda.
          }`}
        >
          <div className="p-4 grid grid-cols-3 gap-3">
            
            {/* Mutfak */}
            <Link href={`/${lang}/urunler/mutfak`} className="group/item block text-center p-2 rounded hover:bg-gray-50 transition">
              <div className="relative h-20 w-full rounded-md overflow-hidden mb-2 shadow-sm border border-gray-100">
                 <Image 
                   src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=300" 
                   alt="Mutfak" 
                   fill 
                   sizes="150px"
                   // Resimlerin üzerine gelince hafif büyüme efekti (scale-110) zaten vardı, koruduk.
                   className="object-cover group-hover/item:scale-110 transition duration-500"
                 />
              </div>
              <span className="text-sm font-bold text-gray-700 group-hover/item:text-red-600 transition-colors">
                {dict.Categories.kitchen}
              </span>
            </Link>

            {/* Gardırop */}
            <Link href={`/${lang}/urunler/gardirop`} className="group/item block text-center p-2 rounded hover:bg-gray-50 transition">
              <div className="relative h-20 w-full rounded-md overflow-hidden mb-2 shadow-sm border border-gray-100">
                 <Image 
                   src="https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=300" 
                   alt="Gardırop" 
                   fill 
                   sizes="150px"
                   className="object-cover group-hover/item:scale-110 transition duration-500"
                 />
              </div>
              <span className="text-sm font-bold text-gray-700 group-hover/item:text-red-600 transition-colors">
                {dict.Categories.wardrobe}
              </span>
            </Link>

            {/* Banyo */}
            <Link href={`/${lang}/urunler/banyo`} className="group/item block text-center p-2 rounded hover:bg-gray-50 transition">
              <div className="relative h-20 w-full rounded-md overflow-hidden mb-2 shadow-sm border border-gray-100">
                 <Image 
                   src="https://images.unsplash.com/photo-1552321901-700912415175?q=80&w=300" 
                   alt="Banyo" 
                   fill 
                   sizes="150px"
                   className="object-cover group-hover/item:scale-110 transition duration-500"
                 />
              </div>
              <span className="text-sm font-bold text-gray-700 group-hover/item:text-red-600 transition-colors">
                {dict.Categories.bathroom}
              </span>
            </Link>

          </div>
        </div>
      </li>

      {/* Diğer Linkler */}
      <li>
        <Link href={`/${lang}/hakkimizda`} className="text-gray-700 hover:text-red-600 font-medium transition text-sm uppercase tracking-wide">
          {dict.Navigation.about}
        </Link>
      </li>
      <li>
        <Link href={`/${lang}/iletisim`} className="text-gray-700 hover:text-red-600 font-medium transition text-sm uppercase tracking-wide">
          {dict.Navigation.contact}
        </Link>
      </li>
    </ul>
  );
}