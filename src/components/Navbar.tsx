"use client";

import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import NavMenu from "./NavMenu";

type NavbarProps = {
  lang: string;
  dict: any;
};

export default function Navbar({ lang, dict }: NavbarProps) {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50 h-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0 flex items-center">
            <Link href={`/${lang}`} className="flex items-center">
              
              <div className="relative h-16 w-52 animate-logo"> 
                <Image 
                  src="/images/hemaks-logo.png" // Dosya isminin doğru olduğundan emin ol
                  alt="HEMAKS"
                  fill
                  className="object-contain" // Resmi bozmadan kutuya sığdırır
                  priority // LCP (Largest Contentful Paint) için önemli
                />
              </div>
            </Link>
          </div>

          <NavMenu lang={lang} dict={dict} />

          <div>
            <LanguageSwitcher />
          </div>
          
        </div>
      </div>
    </nav>
  );
}