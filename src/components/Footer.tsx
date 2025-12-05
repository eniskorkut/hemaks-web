import Link from "next/link";

type FooterProps = {
  lang: string;
  dict: any;
};
// Footer bileşeni
export default function Footer({ lang, dict }: FooterProps) {
  // Güncel yıl
  const year = new Date().getFullYear();

  // Harita koordinatları
  const mapCoords = "38.7175131,35.3394885";
  
  // Embed Linki (API Key istemez)
  const mapEmbedUrl = `https://maps.google.com/maps?q=${mapCoords}&t=&z=17&ie=UTF8&iwloc=&output=embed`;
  
  // Tıklama Linki (Büyük harita)
  const mapDirectLink = `https://www.google.com/maps/search/?api=1&query=${mapCoords}`;
  // Footer JSX
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* 1. Logo */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">HEMAKS</h2>
            <p className="text-sm text-gray-400 mb-4">{dict.Footer.description}</p>
          </div>

          {/* 2. Menü */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4 uppercase text-sm">Menü</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${lang}`} className="hover:text-red-500 transition">{dict.Navigation.home}</Link></li>
              <li><Link href={`/${lang}/urunler`} className="hover:text-red-500 transition">{dict.Navigation.products}</Link></li>
              <li><Link href={`/${lang}/hakkimizda`} className="hover:text-red-500 transition">{dict.Navigation.about}</Link></li>
            </ul>
          </div>

          {/* 3. İletişim */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4 uppercase text-sm">İletişim</h3>
            {/* Adres yazısını da senin verdiğin doğru bilgiye göre sabitledik */}
            <p className="text-sm mb-1 font-semibold text-gray-400">KORPA İMALAT PAZARLAMA</p>
            <p className="text-sm mb-1">OSB 32. Cad. No:2/B</p>
            <p className="text-sm mb-4">Melikgazi / KAYSERİ</p>
            
            <p className="text-sm mb-1 text-red-400">info@hemaks.com</p>
            <p className="text-sm">+90 352 311 52 52</p>
          </div>

          {/* 4. HARİTA */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4 uppercase text-sm">Konum</h3>
            <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden relative group border-2 border-gray-700">
                <iframe 
                    src={mapEmbedUrl} 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
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
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {year} Hemaks. {dict.Footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}