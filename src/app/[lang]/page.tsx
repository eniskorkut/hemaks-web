// params tipini tanımlıyoruz. Promise olduğuna dikkat et!
// Promise, gelecekte tamamlanacak bir işlemin sonucunu temsil eden bir objedir.
type Props = {
  params: Promise<{ lang: string }>;
};
// Async ifadesi bu bileşenin Server Component olduğunu ve asenkron işlemler yapabileceğini belirtir.
// Sunucuda render edildiği için veri çekme gibi işlemleri doğrudan bileşen içinde yapabilirler.
export default async function Home({ params }: Props) {
  // Next.js 15'te params'ı kullanmadan önce await etmeliyiz
  const { lang } = await params;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold text-blue-600">
        Hemaks Kurumsal
      </h1>
      <div className="p-4 bg-gray-100 rounded-lg shadow-md border border-gray-200">
        <p className="text-lg text-gray-800">
          Seçili Dil: <span className="font-bold text-red-500 uppercase">{lang}</span>
        </p>
        <p className="text-sm text-gray-500 mt-2">
          (Bu sayfa src/app/[lang]/page.tsx dosyasından geliyor)
        </p>
      </div>
    </div>
  );
}