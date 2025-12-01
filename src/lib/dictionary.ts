import 'server-only';

// Tip tanımlaması: TypeScript, hangi dillerin ve hangi verilerin olduğunu bilmeli
// tr.json dosyasını referans alarak tip çıkarıyoruz.
const dictionaries = {
  tr: () => import('@/dictionaries/tr.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  fr: () => import('@/dictionaries/fr.json').then((module) => module.default),
  es: () => import('@/dictionaries/es.json').then((module) => module.default),
};

// Hangi dillerin geçerli olduğunu bir tiple belirtelim
// keyof typeof dictionaries -> 'tr' | 'en' | 'fr' | 'es'
export type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: Locale) => {
  // Eğer listede olmayan bir dil gelirse (örn: 'de') varsayılan olarak 'tr' verelim.
  // Bu, TypeScript hatalarını ve runtime hatalarını önler.
  if (!dictionaries[locale]) {
    return dictionaries['tr']();
  }
  
  return dictionaries[locale]();
};