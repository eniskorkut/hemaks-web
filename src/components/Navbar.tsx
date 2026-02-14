"use client";

import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import NavMenu from "./NavMenu";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";

type NavbarDict = {
  Navigation: {
    home: string;
    products: string;
    about: string;
    contact: string;
  };
  Categories: {
    kiler: string;
    "dolap içi": string;
    "tezgah-alti": string;
    gardirop: string;
    banyo: string;
    "set-arasi": string;
  };
};

type NavbarProps = {
  lang: string;
  dict: NavbarDict;
};

export default function Navbar({ lang, dict }: NavbarProps) {
  return (
    // ✅ dark:bg-black (Tam Siyah) ve dark:border-white/10 (Hafif beyaz çizgi)
    <nav className="w-full bg-white dark:bg-black border-b border-gray-200 dark:border-white/10 shadow-sm sticky top-0 z-50 h-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">

          <div className="flex items-center">
            {/* Mobile Nav Trigger - Sol tarafa da koyabiliriz ama genelde sağda olur. 
                Tasarımda logo solda, nav sağda. 
                MobileNav component'i hamburger butonunu kendisi içeriyor.
            */}
            <Link href={`/${lang}`} className="flex items-center">
              <div className="relative h-20 w-32 sm:w-62 animate-logo">
                <Image
                  src="/images/hemaks-logo.png"
                  alt="HEMAKS"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <NavMenu lang={lang} dict={dict} />

          <div className="flex items-center space-x-2 sm:space-x-4">
            <ThemeToggle />
            <LanguageSwitcher />

            {/* Mobile Menu - Sadece mobilde görünür */}
            <MobileNav lang={lang} dict={dict} />
          </div>

        </div>
      </div>
    </nav>
  );
}