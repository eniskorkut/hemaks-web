"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type NavMenuProps = {
  lang: string;
  dict: any;
};

export default function NavMenu({ lang, dict }: NavMenuProps) {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <ul className="hidden lg:flex space-x-8 items-center h-full">
      {/* 1. Anasayfa */}
      <li>
        <Link 
          href={`/${lang}`} 
          className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-500 font-medium transition text-sm uppercase tracking-wide"
        >
          {dict.Navigation.home}
        </Link>
      </li>

      {/* 2. MEGA MENU: Ürünler */}
      <li 
        className="group h-full flex items-center relative"
        onMouseEnter={() => setIsMegaMenuOpen(true)}
        onMouseLeave={() => setIsMegaMenuOpen(false)}
      >
        <Link 
            href={`/${lang}/urunler`} 
            className="text-gray-700 dark:text-gray-200 group-hover:text-red-600 dark:group-hover:text-red-500 font-medium transition py-6 border-b-2 border-transparent group-hover:border-red-600 dark:group-hover:border-red-500 text-sm uppercase tracking-wide"
        >
          {dict.Navigation.products}
        </Link>

        {/* Açılan Menü */}
        <div 
          className={`absolute left-1/2 transform -translate-x-1/2 top-full w-[600px] bg-white dark:bg-zinc-900 shadow-2xl border-t-4 border-red-600 rounded-b-lg z-50 overflow-hidden transition-all duration-300 ease-out origin-top
          ${isMegaMenuOpen 
            ? "opacity-100 visible scale-100 translate-y-0" 
            : "opacity-0 invisible scale-95 translate-y-2"
          }`}
        >
          <div className="p-6 grid grid-cols-3 gap-4">
            
            {/* Kategori 1: Mutfak */}
            <Link href={`/${lang}/urunler/mutfak`} className="group/item relative block h-32 rounded-lg overflow-hidden shadow-md">
               <Image 
                 src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=400" 
                 alt="Mutfak" 
                 fill 
                 sizes="200px"
                 className="object-cover transition-transform duration-700 group-hover/item:scale-110"
               />
               {/* DEĞİŞİKLİKLER:
                  1. bg-gradient-to-b: Gölge yukarıdan aşağıya (üstü koyu)
                  2. items-start: Yazıyı yukarı hizaladık
                  3. text-sm: Yazıyı küçülttük
               */}
               <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-transparent group-hover/item:from-red-900/80 transition-colors duration-300 flex items-start p-3">
                 <span className="text-white font-bold text-sm uppercase tracking-wider drop-shadow-md">
                   {dict.Categories.kitchen}
                 </span>
               </div>
            </Link>

            {/* Kategori 2: Gardırop */}
            <Link href={`/${lang}/urunler/gardirop`} className="group/item relative block h-32 rounded-lg overflow-hidden shadow-md">
               <Image 
                 src="https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=400" 
                 alt="Gardırop" 
                 fill 
                 sizes="200px"
                 className="object-cover transition-transform duration-700 group-hover/item:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-transparent group-hover/item:from-red-900/80 transition-colors duration-300 flex items-start p-3">
                 <span className="text-white font-bold text-sm uppercase tracking-wider drop-shadow-md">
                   {dict.Categories.wardrobe}
                 </span>
               </div>
            </Link>

            {/* Kategori 3: Banyo */}
            <Link href={`/${lang}/urunler/banyo`} className="group/item relative block h-32 rounded-lg overflow-hidden shadow-md">
               <Image 
                 src="https://images.unsplash.com/photo-1552321901-700912415175?q=80&w=400" 
                 alt="Banyo" 
                 fill 
                 sizes="200px"
                 className="object-cover transition-transform duration-700 group-hover/item:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-transparent group-hover/item:from-red-900/80 transition-colors duration-300 flex items-start p-3">
                 <span className="text-white font-bold text-sm uppercase tracking-wider drop-shadow-md">
                   {dict.Categories.bathroom}
                 </span>
               </div>
            </Link>

          </div>
        </div>
      </li>

      {/* Diğer Linkler */}
      <li>
        <Link 
          href={`/${lang}/hakkimizda`} 
          className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-500 font-medium transition text-sm uppercase tracking-wide"
        >
          {dict.Navigation.about}
        </Link>
      </li>
      <li>
        <Link 
          href={`/${lang}/iletisim`} 
          className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-500 font-medium transition text-sm uppercase tracking-wide"
        >
          {dict.Navigation.contact}
        </Link>
      </li>
    </ul>
  );
}