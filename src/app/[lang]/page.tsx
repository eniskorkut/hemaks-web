import { getDictionary, Locale } from "@/lib/dictionary";
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
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-50">
      
      {/* Başlık Artık JSON'dan geliyor */}
      <h1 className="text-4xl font-bold text-blue-900">
        {dict.HomePage.title}
      </h1>

      {/* Açıklama JSON'dan geliyor */}
      <p className="text-xl text-gray-600">
        {dict.HomePage.description}
      </p>

      {/* Buton */}
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        {dict.HomePage.button}
      </button>

      <div className="mt-10 p-4 border border-blue-200 rounded bg-blue-50">
        <p className="text-sm text-blue-800">
          Aktif Dil Kodu: <strong>{lang}</strong>
        </p>
      </div>
    </div>
  );
}