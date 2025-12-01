import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

// TypeScript'e bu bileşenin hangi verileri beklediğini söylemeliyiz
type NavbarProps = {
  lang: string;
  dict: {
    Navigation: {
      home: string;
      products: string;
      about: string;
      contact: string;
    };
  };
};

export default function Navbar({ lang, dict }: NavbarProps) {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Alanı */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={`/${lang}`} className="text-2xl font-bold text-blue-800">
              HEMAKS
            </Link>
          </div>

          {/* Menü Linkleri - Masaüstü */}
          <div className="hidden sm:flex sm:space-x-8">
            <NavLink href={`/${lang}`} text={dict.Navigation.home} />
            <NavLink href={`/${lang}/urunler`} text={dict.Navigation.products} />
            <NavLink href={`/${lang}/hakkimizda`} text={dict.Navigation.about} />
            <NavLink href={`/${lang}/iletisim`} text={dict.Navigation.contact} />
          </div>

          {/* Dil Seçici */}
          <div>
            <LanguageSwitcher />
          </div>
          
        </div>
      </div>
    </nav>
  );
}

// Kod tekrarını önlemek için küçük bir yardımcı bileşen (Sadece bu dosyada geçerli)
function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
    >
      {text}
    </Link>
  );
}