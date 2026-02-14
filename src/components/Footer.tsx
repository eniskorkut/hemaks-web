import Link from "next/link";

type FooterDict = {
  Footer: {
    description: string;
    getDirections: string;
    rights: string;
    menu: string;
    contact: string;
    location: string;
    companyName: string;
    addressLine1: string;
    addressLine2: string;
  };
  Navigation: {
    home: string;
    products: string;
    about: string;
  };
};

type FooterProps = {
  lang: string;
  dict: FooterDict;
};

export default function Footer({ lang, dict }: FooterProps) {
  const year = new Date().getFullYear();
  const mapCoords = "38.717503,35.3395059";

  // Embed Linki (API Key istemez)
  // q parametresine işletme adını ekleyerek pin üzerinde ismin çıkmasını sağlıyoruz
  const mapEmbedUrl = `https://maps.google.com/maps?q=loc:${mapCoords}+(Korpa+Pazarlama)&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  // Tıklama Linki (Kullanıcının verdiği uzun URL)
  const mapDirectLink = "https://www.google.com/maps/place/KORPA+%C4%B0MALAT+PAZARLAMA+T%C4%B0CARET/@38.717503,35.3204515,15z/data=!4m10!1m2!2m1!1sKORPA+IMALAT+PAZARLAMA+TICARET+OSB+32.CAD+NO:2%2FB+MELIKGAZI+KAYSERI!3m6!1s0x152b04fde1150613:0xec38b412a9749078!8m2!3d38.717503!4d35.3395059!15sCkJLT1JQQSBJTUFMQVQgUEFaQVJMQU1BIFRJQ0FSRVQgT1NCIDMyLkNBRCBOTzoyL0IgTUVMSUtHQVpJIEtBWVNFUklaRCJCa29ycGEgaW1hbGF0IHBhemFybGFtYSB0aWNhcmV0IG9zYiAzMiBjYWQgbm8gMiBiIG1lbGlrZ2F6aSBrYXlzZXJpkgEUa2l0Y2hlbl9zdXBwbHlfc3RvcmXgAQA!16s%2Fg%2F11f4r2t30_?hl=tr-GB&entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D";

  return (
    // ✅ dark:bg-black (Tam Siyah) eklendi
    <footer className="bg-gray-900 dark:bg-black text-gray-300 mt-auto border-t border-transparent dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* 1. Logo */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">HEMAKS</h2>
            <p className="text-sm text-gray-400 mb-4">{dict.Footer.description}</p>
          </div>

          {/* 2. Menü */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4 uppercase text-sm">{dict.Footer.menu}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${lang}`} className="hover:text-red-500 transition">{dict.Navigation.home}</Link></li>
              <li><Link href={`/${lang}/urunler`} className="hover:text-red-500 transition">{dict.Navigation.products}</Link></li>
              <li><Link href={`/${lang}/hakkimizda`} className="hover:text-red-500 transition">{dict.Navigation.about}</Link></li>
            </ul>
          </div>

          {/* 3. İletişim */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4 uppercase text-sm">{dict.Footer.contact}</h3>
            <p className="text-sm mb-1 font-semibold text-gray-400">{dict.Footer.companyName}</p>
            <p className="text-sm mb-1">{dict.Footer.addressLine1}</p>
            <p className="text-sm mb-4">{dict.Footer.addressLine2}</p>

            <p className="text-sm mb-1 text-red-400">korpa@hemaks.com</p>
            <p className="text-sm">+90 352 311 52 52</p>
          </div>

          {/* 4. HARİTA */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4 uppercase text-sm">{dict.Footer.location}</h3>
            <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden relative group border-2 border-gray-700">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Hemaks Konum"
                className="opacity-90 group-hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <a
                href={mapDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
              >
                <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  📍 {dict.Footer.getDirections}
                </span>
              </a>
            </div>
          </div>

        </div>
        <div className="border-t border-gray-800 dark:border-white/10 mt-8 pt-8 text-center text-sm transition-colors duration-300">
          <p>© {year} Hemaks. {dict.Footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}