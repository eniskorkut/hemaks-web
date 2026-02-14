"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MobileNavDict = {
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

type MobileNavProps = {
    lang: string;
    dict: MobileNavDict;
};

export default function MobileNav({ lang, dict }: MobileNavProps) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Route değiştiğinde menüyü kapa
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Scroll kilitleme
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <div className="lg:hidden flex items-center">
            {/* Hamburger Button */}
            <button
                onClick={toggleMenu}
                className="p-2 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md"
                aria-label="Menüyü Aç"
            >
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 backdrop-blur-sm"
                    onClick={closeMenu}
                />
            )}

            {/* Side Drawer - Right Side */}
            <div
                className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white dark:bg-zinc-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex justify-between items-center p-5 border-b border-gray-100 dark:border-white/10">
                        <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">Hemaks</span>
                        <button
                            onClick={closeMenu}
                            className="p-2 text-gray-500 hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md"
                            aria-label="Menüyü Kapat"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Links */}
                    <div className="flex-1 overflow-y-auto py-4">
                        <nav className="flex flex-col space-y-1 px-4">
                            <Link
                                href={`/${lang}`}
                                onClick={closeMenu}
                                className="block py-3 px-2 text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-500 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors"
                            >
                                {dict.Navigation.home}
                            </Link>

                            {/* Products Section */}
                            <div className="py-2">
                                <Link
                                    href={`/${lang}/urunler`}
                                    onClick={closeMenu}
                                    className="block py-2 px-2 text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-500 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors"
                                >
                                    {dict.Navigation.products}
                                </Link>
                                <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-100 dark:border-gray-800 pl-4">
                                    <Link
                                        href={`/${lang}/urunler/kiler`}
                                        onClick={closeMenu}
                                        className="block py-2 text-base text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                                    >
                                        {dict.Categories.kiler}
                                    </Link>
                                    <Link
                                        href={`/${lang}/urunler/dolap-içi`}
                                        onClick={closeMenu}
                                        className="block py-2 text-base text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                                    >
                                        {dict.Categories["dolap içi"]}
                                    </Link>
                                    <Link
                                        href={`/${lang}/urunler/tezgah-alti`}
                                        onClick={closeMenu}
                                        className="block py-2 text-base text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                                    >
                                        {dict.Categories["tezgah-alti"]}
                                    </Link>
                                    <Link
                                        href={`/${lang}/urunler/gardirop`}
                                        onClick={closeMenu}
                                        className="block py-2 text-base text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                                    >
                                        {dict.Categories.gardirop}
                                    </Link>
                                    <Link
                                        href={`/${lang}/urunler/banyo`}
                                        onClick={closeMenu}
                                        className="block py-2 text-base text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                                    >
                                        {dict.Categories.banyo}
                                    </Link>
                                    <Link
                                        href={`/${lang}/urunler/set-arasi`}
                                        onClick={closeMenu}
                                        className="block py-2 text-base text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                                    >
                                        {dict.Categories["set-arasi"]}
                                    </Link>
                                </div>
                            </div>

                            <Link
                                href={`/${lang}/hakkimizda`}
                                onClick={closeMenu}
                                className="block py-3 px-2 text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-500 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors"
                            >
                                {dict.Navigation.about}
                            </Link>
                            <Link
                                href={`/${lang}/iletisim`}
                                onClick={closeMenu}
                                className="block py-3 px-2 text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-500 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors"
                            >
                                {dict.Navigation.contact}
                            </Link>
                        </nav>
                    </div>

                    {/* Footer of Drawer */}
                    <div className="p-6 border-t border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-black/20">
                        <div className="flex flex-col space-y-2 text-center items-center justify-center opacity-70">
                            <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">Hemaks Design</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
