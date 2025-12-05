import { getDictionary, Locale } from "@/lib/dictionary";
import HeroSlider from "@/components/HeroSlider";
// params tipini tanımlıyoruz. Promise olduğuna dikkat et!
// Promise, gelecekte tamamlanacak bir işlemin sonucunu temsil eden bir objedir.
type Props = {
  params: Promise<{ lang: Locale }>;
};
// Async ifadesi bu bileşenin Server Component olduğunu ve asenkron işlemler yapabileceğini belirtir.
// Sunucuda render edildiği için veri çekme gibi işlemleri doğrudan bileşen içinde yapabilirler.
export default async function Home({ params }: Props) {
   // 1. URL'den dili öğren (Next.js 15: await params şart!)
  const { lang } = await params;
  
  // 2. O dile ait sözlüğü getir
  const dict = await getDictionary(lang);

  return (
    <main>
      {/* 1. MANŞET ALANI (Hero Slider) */}
      <HeroSlider lang={lang} dict={dict} />

      {/* 2. Diğer Bölümler (Gelecek) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Neden Hemaks?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Kalite</h3>
            <p className="text-gray-600">En iyi malzemelerle üretilmiş uzun ömürlü ürünler.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Tasarım</h3>
            <p className="text-gray-600">Modern ve ergonomik kullanım sağlayan çözümler.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Güven</h3>
            <p className="text-gray-600">Yılların verdiği tecrübe ve müşteri memnuniyeti.</p>
          </div>
        </div>
      </div>
    </main>
  );
}