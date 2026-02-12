"use client";

import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import NavMenu from "./NavMenu";
import ThemeToggle from "./ThemeToggle";

type NavbarProps = {
  lang: string;
  dict: any;
};

export default function Navbar({ lang, dict }: NavbarProps) {
  return (
    // ✅ dark:bg-black (Tam Siyah) ve dark:border-white/10 (Hafif beyaz çizgi)
    <nav className="w-full bg-white dark:bg-black border-b border-gray-200 dark:border-white/10 shadow-sm sticky top-0 z-50 h-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          
          <div className="flex-shrink-0 flex items-center">
            <Link href={`/${lang}`} className="flex items-center">
              <div className="relative h-20 w-62 animate-logo"> 
                {/* Logo dark mode'da kaybolmasın diye arka plan eklemedik, PNG şeffaf olmalı */}
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

          {/* Menüye text rengi props olarak geçmediği için NavMenu içinde de düzenleme gerekebilir, 
              ama parent (body) text-white olduğu için genelde çalışır. */}
          <NavMenu lang={lang} dict={dict} />

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
          
        </div>
      </div>
    </nav>
  );
}