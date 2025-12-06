import { getDictionary, Locale } from "@/lib/dictionary";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function ContactPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  // ✅ KESİN HARİTA KONUMU (Melikgazi OSB)
  const addressQuery = "KORPA+IMALAT+PAZARLAMA+TICARET+OSB+32.CAD+NO:2/B+MELIKGAZI+KAYSERI";
  const mapEmbedUrl = `https://maps.google.com/maps?q=${addressQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BAŞLIK */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{dict.ContactPage.title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {dict.ContactPage.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* SOL KOLON: Bilgiler ve Harita */}
          <div className="space-y-8">
            
            {/* Bilgi Kartları */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full text-red-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{dict.ContactPage.address}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Kayseri OSB, 32. Cadde<br/>No:2/B Melikgazi/Kayseri
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{dict.ContactPage.phone}</h3>
                  <p className="text-sm text-gray-600 mt-1">+90 352 311 52 52</p>
                  <p className="text-sm text-gray-600">info@hemaks.com</p>
                </div>
              </div>
            </div>

            {/* Büyük Harita */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden h-[400px] border border-gray-300 shadow-inner">
              <iframe 
                src={mapEmbedUrl} 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy"
                title="Hemaks Konum"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>

          </div>

          {/* SAĞ KOLON: İletişim Formu */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{dict.ContactPage.formTitle}</h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{dict.ContactPage.name}</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{dict.ContactPage.email}</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{dict.ContactPage.subject}</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{dict.ContactPage.message}</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition"></textarea>
              </div>

              <button 
                type="button" // Backend olmadığı için type="button" yaptık, sayfa yenilenmesin.
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition transform hover:-translate-y-1 shadow-md hover:shadow-xl"
              >
                {dict.ContactPage.sendBtn}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}