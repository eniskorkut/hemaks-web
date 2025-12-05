"use client";

import Image from "next/image"; // Next.js'in Image bileşeni
import Link from "next/link"; // Next.js'in Link bileşeni
import { useState, useEffect } from "react"; // React'in useState ve useEffect hook'ları
// HeroSlider bileşeni için prop tipleri
type HeroSliderProps = {
  lang: string;
  dict: {
    Hero: {
      slides: {
        title: string;
        description: string;
        button: string;
      }[];
    };
  };
};

// Çalışan Unsplash Linkleri
const images = [
  "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1920&auto=format&fit=crop", // Mutfak
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920&auto=format&fit=crop"  // Endüstriyel/Fabrika
];
// HeroSlider bileşeni
export default function HeroSlider({ lang, dict }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Otomatik Geçiş (5 saniye)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-gray-900">
      
      {/* Resimler */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt="Hero Slide"
            fill
            priority={index === 0}
            className="object-cover opacity-60"
          />
        </div>
      ))}

      {/* İçerik */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              {dict.Hero.slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {dict.Hero.slides[currentSlide].description}
            </p>
            <Link
              href={`/${lang}/urunler`}
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition transform hover:scale-105"
            >
              {dict.Hero.slides[currentSlide].button}
            </Link>
          </div>
        </div>
      </div>

      {/* Noktalar */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-red-600 w-8" : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}