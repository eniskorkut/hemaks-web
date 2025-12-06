import Image from "next/image";
import { getDictionary, Locale } from "@/lib/dictionary";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function AboutPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO BÖLÜMÜ (Başlık ve Arka Plan) */}
      <div className="relative bg-gray-900 h-[400px] flex items-center justify-center">
        {/* Arka Plan Resmi */}
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
            alt="Hemaks Ofis"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {dict.AboutPage.heroTitle}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
            {dict.AboutPage.heroDesc}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* 2. HİKAYEMİZ (Sol Yazı - Sağ Resim) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">
              {dict.AboutPage.storyTitle}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {dict.AboutPage.storyText}
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 text-center">
                <span className="block text-4xl font-bold text-red-600 mb-1">15+</span>
                <span className="text-sm text-gray-500">Yıllık Tecrübe</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 text-center">
                <span className="block text-4xl font-bold text-red-600 mb-1">50+</span>
                <span className="text-sm text-gray-500">Ülkeye İhracat</span>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
              alt="Fabrika Üretim"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* 3. VİZYON & MİSYON (Kartlar) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{dict.AboutPage.visionTitle}</h3>
            <p className="text-gray-600 leading-relaxed">
              {dict.AboutPage.visionText}
            </p>
          </div>

          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{dict.AboutPage.missionTitle}</h3>
            <p className="text-gray-600 leading-relaxed">
              {dict.AboutPage.missionText}
            </p>
          </div>
        </div>

        {/* 4. DEĞERLERİMİZ */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 inline-block relative">
            {dict.AboutPage.valuesTitle}
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-red-600 rounded-full"></span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[dict.AboutPage.value1, dict.AboutPage.value2, dict.AboutPage.value3, dict.AboutPage.value4].map((val, index) => (
              <div key={index} className="p-6 bg-white border border-gray-200 rounded-xl hover:border-red-500 hover:text-red-600 transition-colors cursor-default">
                <span className="font-bold text-lg">{val}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}