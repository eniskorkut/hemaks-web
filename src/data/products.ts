export type Product = {
  id: string;
  category: "kiler" | "dolap içi" | "tezgah-alti" | "gardirop" | "banyo" | "set-arasi";
  title: {
    tr: string;
    en: string;
    fr: string;
    es: string;
    ar: string;
  };
  description: {
    tr: string;
    en: string;
    fr: string;
    es: string;
    ar: string;
  };
  longDescription?: {
    tr: string;
    en: string;
    fr: string;
    es: string;
    ar: string;
  };
  features?: {
    tr: string[];
    en: string[];
    fr: string[];
    es: string[];
    ar: string[];
  };
  specifications?: {
    tr: { label: string; value: string }[];
    en: { label: string; value: string }[];
    fr: { label: string; value: string }[];
    es: { label: string; value: string }[];
    ar: { label: string; value: string }[];
  };
  table?: string; // HTML Tablo içeriği
  image: string;
  images?: string[];
};

export const products: Product[] = [
  // --- KİLER GRUBU ---
  {
    id: "teleskopik-rayli-kiler",
    category: "kiler",
    title: { tr: "Teleskopik Raylı Kiler Sistemi", en: "Telescopic Rail Pantry System", fr: "Système de Garde-manger à Rails Télescopiques", es: "Sistema de Despensa con Rieles Telescópicos", ar: "نظام مخزن المطبخ ذو القضبان التلسكوبية" },
    description: { tr: "Erzaklarınızı daha düzenli saklayabilirsiniz.", en: "Organize your groceries better.", fr: "Organisez mieux vos courses.", es: "Organiza mejor tus compras.", ar: "قم بتنظيم مشترياتك بشكل أفضل." },
    longDescription: {
      tr: `HEMAKS'ın akıllı depolama çözümleri olarak sunduğu Teleskopik Raylı Kiler Sistemleri ile erzaklarınızı daha düzenli saklayabilirsiniz.

Şık ve estetik Kiler sistemlerimiz ile tüm kuru gıdalara kolayca ulaşmanız sağlanırken, aradığınız gıdaya ulaşmak için tüm çekmecelere bakmak zorunda kalmayacaksınız.

HEMAKS Teleskopik Raylı Kiler Sistemleri, Dolabınızın enine ve boyuna tam uyum sağlaması açısından yüksekliği ayarlanabilir ve Farklı sepet seçenekleri ile rasyonel çözümler sunar.

HEMAKS Teleskopik Raylı Kiler Sistemleri, Dolabınızın en verimli şekilde kullanılabilmesini ve yüksek yerlerdeki malzemelerin bile kolaylıkla görülebilmesini sağlar.

Hemaks Teleskopik Raylı Kiler Sistemleri sessizce açılıp kapanabilen ve kolayca temizlenebilen kiler sistemleri konforuyla, özellikle aile ve dostların daha sık ağırlandığı mutfaklarda yemek yapmayı daha keyifli hale getirir.`,
      en: "With Hemaks Telescopic Rail Pantry Systems, you can store your provisions more organized. It provides easy access to all dry foods and offers rational solutions with adjustable height.",
      fr: "Avec les systèmes de garde-manger à rails télescopiques Hemaks, vous pouvez ranger vos provisions de manière plus organisée. Il offre un accès facile à tous les aliments secs et des solutions rationnelles avec une hauteur réglable.",
      es: "Con los sistemas de despensa de rieles telescópicos Hemaks, puede almacenar sus provisiones de manera más organizada. Proporciona un fácil acceso a todos los alimentos secos y ofrece soluciones racionales con altura ajustable.",
      ar: "مع أنظمة مخزن المطبخ ذو القضبان التلسكوبية من هيماكس، يمكنك تخزين مؤنك بشكل أكثر تنظيماً. توفر سهولة الوصول إلى جميع الأطعمة الجافة وتقدم حلولاً منطقية مع ارتفاع قابل للتعديل."
    },
    features: {
      tr: [
        "Yüksekliği ayarlanabilir gövde",
        "Sessiz kapanma (Soft-Close)",
        "Kolay temizlenebilir sepetler",
        "Tam açılım teleskopik raylar"
      ],
      en: [
        "Height adjustable body",
        "Soft-Close mechanism",
        "Easy to clean baskets",
        "Full extension telescopic rails"
      ],
      fr: [
        "Corps réglable en hauteur",
        "Mécanisme Soft-Close",
        "Paniers faciles à nettoyer",
        "Rails télescopiques à extension complète"
      ],
      es: [
        "Cuerpo ajustable en altura",
        "Mecanismo Soft-Close",
        "Cestas fáciles de limpiar",
        "Rieles telescópicos de extensión completa"
      ],
      ar: [
        "جسم قابل لتعديل الارتفاع",
        "آلية إغلاق ناعم",
        "سلال سهلة التنظيف",
        "قضبان تلسكوبية بتمديد كامل"
      ]
    },
    table: `<div class="overflow-x-auto">
  <table class="w-full text-sm text-left border border-gray-200">
    <thead class="bg-gray-100 text-gray-700 font-bold uppercase">
      <tr>
        <th class="border p-3 text-center">Grup</th>
        <th class="border p-3 text-center">Modül Yüksekliği (mm)</th>
        <th class="border p-3 text-center">Ürün Kodu</th>
        <th class="border p-3 text-center">Sepet Genişliği (mm)</th>
        <th class="border p-3 text-center">Kapak Genişliği (mm)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      
      <!-- 2 SEPET -->
      <tr>
        <td rowspan="5" class="border p-3 font-bold bg-gray-50 align-middle text-center">2 SEPET</td>
        <td rowspan="5" class="border p-3 align-middle text-center">600-850</td>
        <td class="border p-3 font-mono text-center">HTK-600230</td><td class="border p-3 text-center">230</td><td class="border p-3 text-center">300</td>
      </tr>
      <tr><td class="border p-3 font-mono text-center">HTK-600235</td><td class="border p-3 text-center">280</td><td class="border p-3 text-center">350</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-600240</td><td class="border p-3 text-center">330</td><td class="border p-3 text-center">400</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-600245</td><td class="border p-3 text-center">380</td><td class="border p-3 text-center">450</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-600250</td><td class="border p-3 text-center">430</td><td class="border p-3 text-center">500</td></tr>

      <!-- 3 SEPET (700-850) -->
      <tr>
        <td rowspan="5" class="border p-3 font-bold bg-gray-50 align-middle text-center">3 SEPET</td>
        <td rowspan="5" class="border p-3 align-middle text-center">700-850</td>
        <td class="border p-3 font-mono text-center">HTK-700330</td><td class="border p-3 text-center">230</td><td class="border p-3 text-center">300</td>
      </tr>
      <tr><td class="border p-3 font-mono text-center">HTK-700335</td><td class="border p-3 text-center">280</td><td class="border p-3 text-center">350</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-700340</td><td class="border p-3 text-center">330</td><td class="border p-3 text-center">400</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-700345</td><td class="border p-3 text-center">380</td><td class="border p-3 text-center">450</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-700350</td><td class="border p-3 text-center">430</td><td class="border p-3 text-center">500</td></tr>

      <!-- 3 SEPET (850-1100) -->
      <tr>
        <td rowspan="5" class="border p-3 font-bold bg-gray-50 align-middle text-center">3 SEPET</td>
        <td rowspan="5" class="border p-3 align-middle text-center">850-1100</td>
        <td class="border p-3 font-mono text-center">HTK-800330</td><td class="border p-3 text-center">230</td><td class="border p-3 text-center">300</td>
      </tr>
      <tr><td class="border p-3 font-mono text-center">HTK-800335</td><td class="border p-3 text-center">280</td><td class="border p-3 text-center">350</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-800340</td><td class="border p-3 text-center">330</td><td class="border p-3 text-center">400</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-800345</td><td class="border p-3 text-center">380</td><td class="border p-3 text-center">450</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-800350</td><td class="border p-3 text-center">430</td><td class="border p-3 text-center">500</td></tr>

      <!-- 4 SEPET (1100-1250) -->
      <tr>
        <td rowspan="5" class="border p-3 font-bold bg-gray-50 align-middle text-center">4 SEPET</td>
        <td rowspan="5" class="border p-3 align-middle text-center">1100-1250</td>
        <td class="border p-3 font-mono text-center">HTK-110430</td><td class="border p-3 text-center">230</td><td class="border p-3 text-center">300</td>
      </tr>
      <tr><td class="border p-3 font-mono text-center">HTK-110435</td><td class="border p-3 text-center">280</td><td class="border p-3 text-center">350</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-110440</td><td class="border p-3 text-center">330</td><td class="border p-3 text-center">400</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-110445</td><td class="border p-3 text-center">380</td><td class="border p-3 text-center">450</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-110450</td><td class="border p-3 text-center">430</td><td class="border p-3 text-center">500</td></tr>

      <!-- 4 SEPET (1250-1400) -->
      <tr>
        <td rowspan="5" class="border p-3 font-bold bg-gray-50 align-middle text-center">4 SEPET</td>
        <td rowspan="5" class="border p-3 align-middle text-center">1250-1400</td>
        <td class="border p-3 font-mono text-center">HTK-120430</td><td class="border p-3 text-center">230</td><td class="border p-3 text-center">300</td>
      </tr>
      <tr><td class="border p-3 font-mono text-center">HTK-120435</td><td class="border p-3 text-center">280</td><td class="border p-3 text-center">350</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-120440</td><td class="border p-3 text-center">330</td><td class="border p-3 text-center">400</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-120445</td><td class="border p-3 text-center">380</td><td class="border p-3 text-center">450</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-120450</td><td class="border p-3 text-center">430</td><td class="border p-3 text-center">500</td></tr>

      <!-- 5 SEPET (1400-1550) -->
      <tr>
        <td rowspan="5" class="border p-3 font-bold bg-gray-50 align-middle text-center">5 SEPET</td>
        <td rowspan="5" class="border p-3 align-middle text-center">1400-1550</td>
        <td class="border p-3 font-mono text-center">HTK-140530</td><td class="border p-3 text-center">230</td><td class="border p-3 text-center">300</td>
      </tr>
      <tr><td class="border p-3 font-mono text-center">HTK-140535</td><td class="border p-3 text-center">280</td><td class="border p-3 text-center">350</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-140540</td><td class="border p-3 text-center">330</td><td class="border p-3 text-center">400</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-140545</td><td class="border p-3 text-center">380</td><td class="border p-3 text-center">450</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-140550</td><td class="border p-3 text-center">430</td><td class="border p-3 text-center">500</td></tr>

      <!-- 5 SEPET (1550-1700) -->
      <tr>
        <td rowspan="5" class="border p-3 font-bold bg-gray-50 align-middle text-center">5 SEPET</td>
        <td rowspan="5" class="border p-3 align-middle text-center">1550-1700</td>
        <td class="border p-3 font-mono text-center">HTK-150530</td><td class="border p-3 text-center">230</td><td class="border p-3 text-center">300</td>
      </tr>
      <tr><td class="border p-3 font-mono text-center">HTK-150535</td><td class="border p-3 text-center">280</td><td class="border p-3 text-center">350</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-150540</td><td class="border p-3 text-center">330</td><td class="border p-3 text-center">400</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-150545</td><td class="border p-3 text-center">380</td><td class="border p-3 text-center">450</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-150550</td><td class="border p-3 text-center">430</td><td class="border p-3 text-center">500</td></tr>

      <!-- 6 SEPET (1700-1850) -->
      <tr>
        <td rowspan="5" class="border p-3 font-bold bg-gray-50 align-middle text-center">6 SEPET</td>
        <td rowspan="5" class="border p-3 align-middle text-center">1700-1850</td>
        <td class="border p-3 font-mono text-center">HTK-170630</td><td class="border p-3 text-center">230</td><td class="border p-3 text-center">300</td>
      </tr>
      <tr><td class="border p-3 font-mono text-center">HTK-170635</td><td class="border p-3 text-center">280</td><td class="border p-3 text-center">350</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-170640</td><td class="border p-3 text-center">330</td><td class="border p-3 text-center">400</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-170645</td><td class="border p-3 text-center">380</td><td class="border p-3 text-center">450</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-170650</td><td class="border p-3 text-center">430</td><td class="border p-3 text-center">500</td></tr>

      <!-- 6 SEPET (1850-2000) -->
      <tr>
        <td rowspan="5" class="border p-3 fyont-bold bg-gray-50 align-middle text-center">6 SEPET</td>
        <td rowspan="5" class="border p-3 align-middle text-center">1850-2000</td>
        <td class="border p-3 font-mono text-center">HTK-180630</td><td class="border p-3 text-center">230</td><td class="border p-3 text-center">300</td>
      </tr>
      <tr><td class="border p-3 font-mono text-center">HTK-180635</td><td class="border p-3 text-center">280</td><td class="border p-3 text-center">350</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-180640</td><td class="border p-3 text-center">330</td><td class="border p-3 text-center">400</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-180645</td><td class="border p-3 text-center">380</td><td class="border p-3 text-center">450</td></tr>
      <tr><td class="border p-3 font-mono text-center">HTK-180650</td><td class="border p-3 text-center">430</td><td class="border p-3 text-center">500</td></tr>

    </tbody>
  </table>
</div>`,
    image: "/images/kiler.jpg",
    images: ["/images/kiler.jpg", "/images/kiler-2.jpg"]
  },
  {
    id: "kapaga-bagli-ikiz-kiler",
    category: "kiler",
    title: { tr: "Kapağa Bağlı İkiz Kiler Sistemi", en: "Door Mounted Twin Pantry System", fr: "Système de Garde-manger Jumelé Monté sur Porte", es: "Sistema de Despensa Doble Montado en Puerta", ar: "نظام مخزن المطبخ المزدوج المثبت على الباب" },
    description: { tr: "Kapakla birlikte hareket eden entegre çözüm.", en: "Integrated solution moving with the door.", fr: "Solution intégrée se déplaçant avec la porte.", es: "Solución integrada que se mueve con la puerta.", ar: "حل متكامل يتحرك مع الباب." },
    longDescription: {
      tr: `HEMAKS Kapağa Bağlı İkiz Kiler Sistemleri ile mutfak dolaplarınızda maksimum depolama alanı yaratın.
      
Özel mekanizması sayesinde dolap kapağını açtığınızda arka sepetler öne doğru gelirken, kapak sepetleri tamamen dışarı açılır. Bu sayede tüm erzaklarınıza zahmetsizce ulaşabilirsiniz.

Her iki taraftaki (kapak ve gövde) sepetlerin yüksekliği ayarlanabilir, böylece farklı boyuttaki kavanoz ve kutuları kolayca organize edebilirsiniz.

Sessiz ve yavaş kapanma (Soft-Close) özelliği ile konforlu bir kullanım sunar.`,
      en: "Create maximum storage space in your kitchen cabinets with HEMAKS Door Mounted Twin Pantry Systems. Thanks to its special mechanism, when you open the cabinet door, the rear baskets move forward while the door baskets open completely out. Adjustable basket heights allow easy organization.",
      fr: "Créez un espace de stockage maximal dans vos armoires de cuisine avec les systèmes de garde-manger jumelés montés sur porte HEMAKS. Grâce à son mécanisme spécial, lorsque vous ouvrez la porte de l'armoire, les paniers arrière avancent tandis que les paniers de porte s'ouvrent complètement.",
      es: "Cree el máximo espacio de almacenamiento en los gabinetes de su cocina con los sistemas de despensa doble montados en la puerta de HEMAKS. Gracias a su mecanismo especial, cuando abre la puerta del gabinete, las cestas traseras se mueven hacia adelante mientras que las cestas de la puerta se abren completamente.",
      ar: "اخلق مساحة تخزين قصوى في خزائن مطبخك مع أنظمة مخزن المطبخ المزدوج المثبت على الباب من هيماكس. بفضل آليته الخاصة، عندما تفتح باب الخزانة، تتحرك السلال الخلفية للأمام بينما تفتح سلال الباب بالكامل."
    },
    features: {
      tr: [
        "Çift yönlü depolama (Kapak + Gövde)",
        "Ayarlanabilir sepet yükseklikleri",
        "Soft-Close (Yavaş Kapanma) mekanizması",
        "Paslanmaz krom sepetler",
        "Kolay montaj ve temizlik"
      ],
      en: [
        "Dual direction storage (Door + Body)",
        "Adjustable basket heights",
        "Soft-Close mechanism",
        "Stainless chrome baskets",
        "Easy assembly and cleaning"
      ],
      fr: [
        "Stockage bidirectionnel (Porte + Corps)",
        "Hauteurs de panier réglables",
        "Mécanisme Soft-Close",
        "Paniers en chrome inoxydable",
        "Montage et nettoyage faciles"
      ],
      es: [
        "Almacenamiento bidireccional (Puerta + Cuerpo)",
        "Alturas de cesta ajustables",
        "Mecanismo Soft-Close",
        "Cestas de cromo inoxidable",
        "Fácil montaje y limpieza"
      ],
      ar: [
        "تخزين ثنائي الاتجاه (باب + جسم)",
        "ارتفاعات سلة قابلة للتعديل",
        "آلية إغلاق ناعم",
        "سلال كروم مقاومة للصدأ",
        "سهولة التجميع والتنظيف"
      ]
    },
    table: `<div class="overflow-x-auto">
  <table class="w-full text-sm text-left border border-gray-200">
    <thead class="bg-gray-100 text-gray-700 font-bold uppercase">
      <tr>
        <th class="border p-3 text-center">Grup</th>
        <th class="border p-3 text-center">Modül Yüksekliği (mm)</th>
        <th class="border p-3 text-center">Ürün Kodu</th>
        <th class="border p-3 text-center">Kapak Genişliği (mm)</th>
        <th class="border p-3 text-center">İç Sepet (GxDxY)</th>
        <th class="border p-3 text-center">Kapak Sepeti (GxDxY)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      
      <!-- 4 SEPET -->
      <tr>
        <td rowspan="2" class="border p-3 font-bold bg-gray-50 align-middle text-center">4 SEPET</td>
        <td rowspan="2" class="border p-3 align-middle text-center">600-850</td>
        <td class="border p-3 font-mono text-center">HM-1064</td>
        <td class="border p-3 text-center">450</td>
        <td class="border p-3 text-center">340×280×100</td>
        <td class="border p-3 text-center">310×160×100</td>
      </tr>
      <tr>
        <td class="border p-3 font-mono text-center">HM-1066</td>
        <td class="border p-3 text-center">600</td>
        <td class="border p-3 text-center">490×280×100</td>
        <td class="border p-3 text-center">480×160×100</td>
      </tr>

      <!-- 8 SEPET -->
      <tr>
        <td rowspan="2" class="border p-3 font-bold bg-gray-50 align-middle text-center">8 SEPET</td>
        <td rowspan="2" class="border p-3 align-middle text-center">1250-1400</td>
        <td class="border p-3 font-mono text-center">HM-1124</td>
        <td class="border p-3 text-center">450</td>
        <td class="border p-3 text-center">340×280×100</td>
        <td class="border p-3 text-center">340×160×100</td>
      </tr>
      <tr>
        <td class="border p-3 font-mono text-center">HM-1126</td>
        <td class="border p-3 text-center">600</td>
        <td class="border p-3 text-center">490×280×100</td>
        <td class="border p-3 text-center">480×160×100</td>
      </tr>

      <!-- 10 SEPET (1400-1550) -->
      <tr>
        <td rowspan="2" class="border p-3 font-bold bg-gray-50 align-middle text-center">10 SEPET</td>
        <td rowspan="2" class="border p-3 align-middle text-center">1400-1550</td>
        <td class="border p-3 font-mono text-center">HM-1144</td>
        <td class="border p-3 text-center">450</td>
        <td class="border p-3 text-center">340×280×100</td>
        <td class="border p-3 text-center">310×160×100</td>
      </tr>
      <tr>
        <td class="border p-3 font-mono text-center">HM-1146</td>
        <td class="border p-3 text-center">600</td>
        <td class="border p-3 text-center">490×280×100</td>
        <td class="border p-3 text-center">480×160×100</td>
      </tr>

      <!-- 10 SEPET (1550-1700) -->
      <tr>
        <td rowspan="2" class="border p-3 font-bold bg-gray-50 align-middle text-center">10 SEPET</td>
        <td rowspan="2" class="border p-3 align-middle text-center">1550-1700</td>
        <td class="border p-3 font-mono text-center">HM-1154</td>
        <td class="border p-3 text-center">450</td>
        <td class="border p-3 text-center">340×280×100</td>
        <td class="border p-3 text-center">310×160×100</td>
      </tr>
      <tr>
        <td class="border p-3 font-mono text-center">HM-1156</td>
        <td class="border p-3 text-center">600</td>
        <td class="border p-3 text-center">490×280×100</td>
        <td class="border p-3 text-center">480×160×100</td>
      </tr>

      <!-- 12 SEPET (1700-1850) -->
      <tr>
        <td rowspan="2" class="border p-3 font-bold bg-gray-50 align-middle text-center">12 SEPET</td>
        <td rowspan="2" class="border p-3 align-middle text-center">1700-1850</td>
        <td class="border p-3 font-mono text-center">HM-1174</td>
        <td class="border p-3 text-center">450</td>
        <td class="border p-3 text-center">340×280×100</td>
        <td class="border p-3 text-center">340×160×100</td>
      </tr>
      <tr>
        <td class="border p-3 font-mono text-center">HM-1176</td>
        <td class="border p-3 text-center">600</td>
        <td class="border p-3 text-center">490×280×100</td>
        <td class="border p-3 text-center">480×160×100</td>
      </tr>

      <!-- 12 SEPET (1850-2000) -->
      <tr>
        <td rowspan="2" class="border p-3 font-bold bg-gray-50 align-middle text-center">12 SEPET</td>
        <td rowspan="2" class="border p-3 align-middle text-center">1850-2000</td>
        <td class="border p-3 font-mono text-center">HM-1184</td>
        <td class="border p-3 text-center">450</td>
        <td class="border p-3 text-center">310×160×100</td>
        <td class="border p-3 text-center">340×280×100</td>
      </tr>
      <tr>
        <td class="border p-3 font-mono text-center">HM-1186</td>
        <td class="border p-3 text-center">600</td>
        <td class="border p-3 text-center">490×280×100</td>
        <td class="border p-3 text-center">480×160×100</td>
      </tr>

    </tbody>
  </table>
</div>`,
    image: "/images/ikiz-kiler.jpg",
    images: ["/images/ikiz-kiler.jpg", "/images/ikiz-kiler-2.jpg"]
  },

  // --- DOLAP İÇİ GRUBU ---
  {
    id: "plastik-kasiklik-duzenleyici",
    category: "dolap içi",
    title: { tr: "Çekmece İçi Plastik Kaşıklık ve Düzenleyici", en: "Plastic Cutlery Tray & Organizer", fr: "Range-couverts en plastique", es: "Bandeja de cubiertos de plástico", ar: "منظم أدوات المائدة البلاستيكي للأدراج" },
    description: { tr: "Çekmecelerinizde modern ve pratik düzen.", en: "Modern and practical organization in drawers.", fr: "Organisation moderne.", es: "Organización moderna.", ar: "تنظيم عصري وعملي في الأدراج." },
    longDescription: {
      tr: "HEMAKS Çekmece İçi Plastik Kaşıklık ve Düzenleyici ile mutfak çekmecelerinizde maksimum düzen sağlayın. Dayanıklı plastik malzemesi ve modüler yapısı sayesinde her boyutta çekmeceye uyum sağlar. Çatal, kaşık, bıçak ve diğer mutfak gereçlerinizi kategorize ederek kolay erişim imkanı sunar.",
      en: "Maximize organization in your kitchen drawers with HEMAKS Plastic Cutlery Tray & Organizer. Durable material and modular structure adapt to any drawer size.",
      fr: "Maximisez l'organisation dans vos tiroirs de cuisine avec le range-couverts en plastique HEMAKS.",
      es: "Maximice la organización en los cajones de su cocina con la bandeja de cubiertos de plástico HEMAKS.",
      ar: "قم بزيادة التنظيم في أدراج مطبخك مع منظم أدوات المائدة البلاستيكي من هيماكس."
    },
    image: "/images/kaşıklık-1.jpg",
    images: [
      "/images/kaşıklık-1.jpg",
      "/images/kaşıklık-2.jpg",
      "/images/kaşıklık-3.jpg",
      "/images/kaşıklık-4.jpg"
    ]
  },
  {
    id: "dolap içi-ayarli-tabaklik",
    category: "dolap içi",
    title: { tr: "Dolap İçi Ayarlı Tabaklık", en: "Adjustable Plate Holder", fr: "Porte-assiettes réglable", es: "Soporte para platos ajustable", ar: "حامل أطباق قابل للتعديل داخل الخزانة" },
    description: { tr: "Tabaklarınızı güvenle ve düzenle saklayın.", en: "Store your plates safely and neatly.", fr: "Rangez vos assiettes en toute sécurité.", es: "Guarde sus platos de forma segura.", ar: "احفظ أطباقك بأمان وترتيب." },
    longDescription: {
      tr: "HEMAKS Dolap İçi Ayarlı Tabaklık, tabaklarınızın dolap içinde kaymasını ve birbirine çarpmasını önler. Ayarlanabilir mekanizması sayesinde farklı boyuttaki tabaklarınıza tam uyum sağlar. Ergonomik tasarımı ile tabakları dolaptan alıp sofraya taşımayı kolaylaştırır.",
      en: "HEMAKS Adjustable Plate Holder prevents plates from sliding and colliding. Its adjustable mechanism fits plates of different sizes perfectly.",
      fr: "Le porte-assiettes réglable HEMAKS empêche les assiettes de glisser et de se heurter.",
      es: "El soporte para platos ajustable HEMAKS evita que los platos se deslicen y choquen.",
      ar: "يمنع حامل الأطباق القابل للتعديل من هيماكس الأطباق من الانزلاق والاصطدام."
    },
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=600"
  },
  {
    id: "dolap içi-ayarli-bardaklik",
    category: "dolap içi",
    title: { tr: "Dolap İçi Ayarlı Bardaklık", en: "Adjustable Cup Holder", fr: "Porte-tasses réglable", es: "Soporte para tazas ajustable", ar: "حامل أكواب قابل للتعديل داخل الخزانة" },
    description: { tr: "Bardaklarınız için özel koruma ve düzen.", en: "Special protection and organization for your cups.", fr: "Protection spéciale pour vos tasses.", es: "Protección especial para sus tazas.", ar: "حماية خاصة وتنظيم لأكوابك." },
    longDescription: {
      tr: "HEMAKS Dolap İçi Ayarlı Bardaklık ile fincan ve bardaklarınızı düzenli bir şekilde depolayın. Kaydırmaz tabanı ve ayarlanabilir bölmeleri sayesinde bardaklarınızın devrilmesini önler ve dolap alanını verimli kullanmanızı sağlar.",
      en: "Organize your cups and mugs with HEMAKS Adjustable Cup Holder. Non-slip base and adjustable compartments prevent tipping.",
      fr: "Organisez vos tasses et mugs avec le porte-tasses réglable HEMAKS.",
      es: "Organiza tus tazas y tazones con el soporte para tazas ajustable HEMAKS.",
      ar: "نظم أكوابك وفناجينك مع حامل الأكواب القابل للتعديل من هيماكس."
    },
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=600"
  },

  // --- TEZGAH ALTI GRUBU ---
  {
    id: "sise-tasiyici",
    category: "tezgah-alti",
    title: { tr: "Şişe Taşıyıcı", en: "Bottle Carrier", fr: "Porte-bouteilles", es: "Portabotellas", ar: "حامل زجاجات" },
    description: { tr: "Tezgah altı düzenleyici sistem.", en: "Under-counter organizer system.", fr: "Système d'organisation.", es: "Sistema organizador.", ar: "نظام تنظيم تحت الطاولة." },
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=600"
  },

  // --- GARDIROP GRUBU ---
  {
    id: "asansor-aski",
    category: "gardirop",
    title: { tr: "Asansör Askı", en: "Lift Hanger", fr: "Penderie relevable", es: "Percha elevadora", ar: "شماعة مصعد" },
    description: { tr: "Yüksek dolaplara kolay erişim.", en: "Easy access to high cabinets.", fr: "Accès facile aux armoires hautes.", es: "Fácil acceso a armarios altos.", ar: "سهولة الوصول إلى الخزانات العالية." },
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=600"
  },

  // --- BANYO GRUBU ---
  {
    id: "kirli-sepeti",
    category: "banyo",
    title: { tr: "Raylı Kirli Sepeti", en: "Rail Laundry Basket", fr: "Panier à linge", es: "Cesta de lavandería", ar: "سلة غسيل مع قضيب" },
    description: { tr: "Dolap içi gizli çözüm.", en: "In-cabinet hidden solution.", fr: "Solution cachée dans l'armoire.", es: "Solución oculta en el gabinete.", ar: "حل مخفي داخل الخزانة." },
    image: "https://images.unsplash.com/photo-1552321901-700912415175?q=80&w=600"
  },

  // --- SET ARASI GRUBU ---
  {
    id: "baharatlik",
    category: "set-arasi",
    title: { tr: "Set Arası Baharatlık", en: "Backsplash Spice Rack", fr: "Étagère à épices", es: "Estante de especias", ar: "رف توابل للمطبخ" },
    description: { tr: "Elimizin altındaki lezzetler.", en: "Flavors at hand.", fr: "Saveurs à portée de main.", es: "Sabores a mano.", ar: "نكهات في متناول اليد." },
    image: "https://images.unsplash.com/photo-1532323544230-7191fd510c59?q=80&w=600"
  }
];