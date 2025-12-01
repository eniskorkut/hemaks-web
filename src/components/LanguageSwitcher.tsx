"use client"; // BU SATIR ÇOK ÖNEMLİ: Etkileşim olduğu için Client Component.
// Kullanıcı tıkladığında bir şeyler değişir, etkileşim vardır.

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname(); // A Client Component hook that lets you read the current URL's pathname.
  const router = useRouter(); // This hook allows you to programmatically change routes inside Client Component. 

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    
    // URL manipülasyonu: /tr/hakkimizda -> /en/hakkimizda
    // 1. URL'i parçalara ayır
    const pathSegments = pathname.split("/");
    
    // 2. Dil kısmını (index 1) değiştir
    pathSegments[1] = newLocale;
    
    // 3. Tekrar birleştir
    const newPath = pathSegments.join("/");

    // 4. Yeni adrese git
    router.push(newPath);
  };

  // Şu anki dili URL'den bul
  const currentLang = pathname.split("/")[1];

  return (
    <select
      onChange={handleLanguageChange}
      value={currentLang}
      className="bg-transparent border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"
    >
      <option value="tr">🇹🇷 TR</option>
      <option value="en">🇬🇧 EN</option>
      <option value="fr">🇫🇷 FR</option>
      <option value="es">🇪🇸 ES</option>
    </select>
  );
}