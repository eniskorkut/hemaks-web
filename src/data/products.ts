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
    image: "/images/kasiklik-1.jpg",
    images: [
      "/images/kasiklik-1.jpg",
      "/images/kasiklik-2.jpg",
      "/images/kasiklik-3.jpg",
      "/images/kasiklik-4.jpg"
    ],
    table: `<div class="overflow-x-auto">
  <table class="w-full text-sm text-left border border-gray-200">
    <thead class="bg-gray-100 text-gray-700 font-bold uppercase">
      <tr>
        <th class="border p-3 text-center">Ebat (GxDxY)</th>
        <th class="border p-3 text-center">Renk</th>
        <th class="border p-3 text-center">Ürün Kodu</th>
        <th class="border p-3 text-center">Net Kesim (GxDxY)</th>
        <th class="border p-3 text-center">Koli İçi</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      
      <!-- 300mm -->
      <tr>
        <td rowspan="2" class="border p-3 font-bold bg-gray-50 align-middle text-center">300x490x50</td>
        <td class="border p-3 text-center">PARLAK GRİ</td>
        <td class="border p-3 text-center font-mono">HM-3430</td>
        <td rowspan="2" class="border p-3 align-middle text-center">240x400x50</td>
        <td rowspan="2" class="border p-3 align-middle text-center">15 ADET</td>
      </tr>
      <tr><td class="border p-3 text-center">PARLAK BEYAZ</td><td class="border p-3 text-center font-mono">HM-3530</td></tr>

      <!-- 370mm -->
      <tr>
        <td rowspan="2" class="border p-3 font-bold bg-gray-50 align-middle text-center">370x490x50</td>
        <td class="border p-3 text-center">PARLAK GRİ</td>
        <td class="border p-3 text-center font-mono">HM-3437</td>
        <td rowspan="2" class="border p-3 align-middle text-center">310x400x50</td>
        <td rowspan="2" class="border p-3 align-middle text-center">15 ADET</td>
      </tr>
      <tr><td class="border p-3 text-center">PARLAK BEYAZ</td><td class="border p-3 text-center font-mono">HM-3537</td></tr>

      <!-- 420mm -->
      <tr>
        <td rowspan="2" class="border p-3 font-bold bg-gray-50 align-middle text-center">420x490x50</td>
        <td class="border p-3 text-center">PARLAK GRİ</td>
        <td class="border p-3 text-center font-mono">HM-3442</td>
        <td rowspan="2" class="border p-3 align-middle text-center">360x400x50</td>
        <td rowspan="2" class="border p-3 align-middle text-center">15 ADET</td>
      </tr>
      <tr><td class="border p-3 text-center">PARLAK BEYAZ</td><td class="border p-3 text-center font-mono">HM-3542</td></tr>

      <!-- 470mm -->
      <tr>
        <td rowspan="2" class="border p-3 font-bold bg-gray-50 align-middle text-center">470x490x50</td>
        <td class="border p-3 text-center">PARLAK GRİ</td>
        <td class="border p-3 text-center font-mono">HM-3447</td>
        <td rowspan="2" class="border p-3 align-middle text-center">420x400x50</td>
        <td rowspan="2" class="border p-3 align-middle text-center">15 ADET</td>
      </tr>
      <tr><td class="border p-3 text-center">PARLAK BEYAZ</td><td class="border p-3 text-center font-mono">HM-3547</td></tr>

      <!-- 550mm -->
      <tr>
        <td rowspan="2" class="border p-3 font-bold bg-gray-50 align-middle text-center">550x490x50</td>
        <td class="border p-3 text-center">PARLAK GRİ</td>
        <td class="border p-3 text-center font-mono">HM-3455</td>
        <td rowspan="2" class="border p-3 align-middle text-center">480x400x50</td>
        <td rowspan="2" class="border p-3 align-middle text-center">15 ADET</td>
      </tr>
      <tr><td class="border p-3 text-center">PARLAK BEYAZ</td><td class="border p-3 text-center font-mono">HM-3555</td></tr>

      <!-- 620mm -->
      <tr>
        <td rowspan="2" class="border p-3 font-bold bg-gray-50 align-middle text-center">620x490x50</td>
        <td class="border p-3 text-center">PARLAK GRİ</td>
        <td class="border p-3 text-center font-mono">HM-3462</td>
        <td rowspan="2" class="border p-3 align-middle text-center">560x400x50</td>
        <td rowspan="2" class="border p-3 align-middle text-center">15 ADET</td>
      </tr>
      <tr><td class="border p-3 text-center">PARLAK BEYAZ</td><td class="border p-3 text-center font-mono">HM-3562</td></tr>

      <!-- 670mm -->
      <tr>
        <td rowspan="2" class="border p-3 font-bold bg-gray-50 align-middle text-center">670x490x50</td>
        <td class="border p-3 text-center">PARLAK GRİ</td>
        <td class="border p-3 text-center font-mono">HM-3467</td>
        <td rowspan="2" class="border p-3 align-middle text-center">635x400x50</td>
        <td rowspan="2" class="border p-3 align-middle text-center">15 ADET</td>
      </tr>
      <tr><td class="border p-3 text-center">PARLAK BEYAZ</td><td class="border p-3 text-center font-mono">HM-3567</td></tr>

      <!-- 750mm -->
      <tr>
        <td rowspan="2" class="border p-3 font-bold bg-gray-50 align-middle text-center">750x490x50</td>
        <td class="border p-3 text-center">PARLAK GRİ</td>
        <td class="border p-3 text-center font-mono">HM-3475</td>
        <td rowspan="2" class="border p-3 align-middle text-center">690x400x50</td>
        <td rowspan="2" class="border p-3 align-middle text-center">15 ADET</td>
      </tr>
      <tr><td class="border p-3 text-center">PARLAK BEYAZ</td><td class="border p-3 text-center font-mono">HM-3575</td></tr>

      <!-- 850mm -->
      <tr>
        <td rowspan="2" class="border p-3 font-bold bg-gray-50 align-middle text-center">850x490x50</td>
        <td class="border p-3 text-center">PARLAK GRİ</td>
        <td class="border p-3 text-center font-mono">HM-3485</td>
        <td rowspan="2" class="border p-3 align-middle text-center">780x400x50</td>
        <td rowspan="2" class="border p-3 align-middle text-center">15 ADET</td>
      </tr>
      <tr><td class="border p-3 text-center">PARLAK BEYAZ</td><td class="border p-3 text-center font-mono">HM-3585</td></tr>

      <!-- 970mm -->
      <tr>
        <td rowspan="2" class="border p-3 font-bold bg-gray-50 align-middle text-center">970x490x50</td>
        <td class="border p-3 text-center">PARLAK GRİ</td>
        <td class="border p-3 text-center font-mono">HM-3497</td>
        <td rowspan="2" class="border p-3 align-middle text-center">900x400x50</td>
        <td rowspan="2" class="border p-3 align-middle text-center">15 ADET</td>
      </tr>
      <tr><td class="border p-3 text-center">PARLAK BEYAZ</td><td class="border p-3 text-center font-mono">HM-3597</td></tr>

    </tbody>
  </table>
</div>`
  },
  {
    id: "dolap-ici-ayarli-tabaklik",
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
    features: {
      tr: [
        "Ayarlanabilir genişlik mekanizması",
        "Kaydırmaz taban yapısı",
        "Ergonomik taşıma kolları",
        "Dayanıklı ve hijyenik malzeme"
      ],
      en: [
        "Adjustable width mechanism",
        "Non-slip base structure",
        "Ergonomic carrying handles",
        "Durable and hygienic material"
      ],
      fr: [
        "Mécanisme de largeur réglable",
        "Structure de base antidérapante",
        "Poignées de transport ergonomiques",
        "Matériau durable et hygiénique"
      ],
      es: [
        "Mecanismo de ancho ajustable",
        "Estructura de base antideslizante",
        "Asas de transporte ergonómicas",
        "Material duradero e higiénico"
      ],
      ar: [
        "آلية عرض قابلة للتعديل",
        "هيكل قاعدة غير قابلة للانزلاق",
        "مقابض حمل مريحة",
        "مادة متينة وصحية"
      ]
    },
    table: `<div class="overflow-x-auto">
  <table class="w-full text-sm text-left border border-gray-200">
    <thead class="bg-gray-100 text-gray-700 font-bold uppercase">
      <tr>
        <th class="border p-3 text-center">Ürün Kodu</th>
        <th class="border p-3 text-center">Ölçü (Çap)</th>
        <th class="border p-3 text-center">Renk</th>
        <th class="border p-3 text-center">Koli İçi</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr>
        <td class="border p-3 text-center font-mono">HM-0101</td>
        <td class="border p-3 text-center">185-325 mm</td>
        <td class="border p-3 text-center">GRİ / BEYAZ</td>
        <td class="border p-3 text-center">20 ADET</td>
      </tr>
    </tbody>
  </table>
</div>`,
    image: "/images/dolap-ici-tabaklik.jpg"
  },
  {
    id: "dolap-ici-ayarli-bardaklik",
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
    image: "/images/dolap-ici-bardaklik.jpg"
  },

  // --- TEZGAH ALTI GRUBU ---
  {
    id: "sise-deterjan-tasiyici",
    category: "tezgah-alti",
    title: { tr: "Tezgah Altı Şişelik & Deterjanlık", en: "Under-Counter Bottle & Detergent Rack", fr: "Porte-bouteilles et détergents sous plan", es: "Soporte para botellas y detergentes bajo encimera", ar: "رف الزجاجات والمنظفات تحت الطاولة" },
    description: { tr: "Mutfak kimyasalları ve şişeler için düzenleyici.", en: "Organizer for kitchen chemicals and bottles.", fr: "Organisateur pour produits chimiques et bouteilles.", es: "Organizador para productos químicos y botellas.", ar: "منظم للمواد الكيميائية والمطابخ." },
    image: "/images/tezgah-alti-şişelik.jpg",
    images: ["/images/tezgah-alti-şişelik.jpg", "/images/tezgah-alti-şişelik-2.jpg"]
  },
  {
    id: "rayli-cekmece",
    category: "tezgah-alti",
    title: { tr: "Raylı Çekmece Sistemleri", en: "Rail Drawer Systems", fr: "Systèmes de tiroirs à rails", es: "Sistemas de cajones con rieles", ar: "أنظمة أدراج السكك الحديدية" },
    description: { tr: "Konforlu ve sessiz çekmece çözümleri.", en: "Comfortable and quiet drawer solutions.", fr: "Solutions de tiroirs confortables.", es: "Soluciones de cajones cómodas.", ar: "حلول أدراج مriحة وهادئة." },
    image: "/images/rayli-cekmece.jpg"
  },
  {
    id: "rayli-luks-cekmece",
    category: "tezgah-alti",
    title: { tr: "Raylı Lüks Çekmece Sistemleri", en: "Luxury Rail Drawer Systems", fr: "Systèmes de tiroirs de luxe à rails", es: "Sistemas de cajones de lujo con rieles", ar: "أنظمة أدراج السكك الحديدية الفاخرة" },
    description: { tr: "Premium çekmece mekanizmaları.", en: "Premium drawer mechanisms.", fr: "Mécanismes de tiroirs premium.", es: "Mecanismos de cajones premium.", ar: "آليات أدراج متميزة." },
    image: "/images/rayli-luks-cekmece.jpg"
  },
  {
    id: "fasulye-kose",
    category: "tezgah-alti",
    title: { tr: "Ahşap Tabanlı Kör Köşe (Fasulye)", en: "Wooden Based Blind Corner (Kidney)", fr: "Coin aveugle à base de bois (Haricot)", es: "Rincón ciego con base de madera (Frijol)", ar: "الزاوية العمياء الخشبية (الفاصوليا)" },
    description: { tr: "Köşe dolaplarında maksimum verimlilik.", en: "Maximum efficiency in corner cabinets.", fr: "Efficacité maximale dans les armoires d'angle.", es: "Máxima eficiencia en armarios de rincón.", ar: "أقصى قدر من الكفاءة في خزائن الزاوية." },
    image: "/images/fasulye.jpg",
    images: ["/images/fasulye.jpg", "/images/fasulye-2.jpg", "/images/fasulye-3.jpg"]
  },
  {
    id: "doner-sepet-1-2",
    category: "tezgah-alti",
    title: { tr: "1/2 Borulu Döner Sepet Takımı", en: "1/2 Rotating Carousel Set", fr: "Ensemble de paniers rotatifs 1/2", es: "Juego de cestos giratorios 1/2", ar: "طقم سلة دوارة 1/2" },
    description: { tr: "Yarım döner köşe sepet sistemi.", en: "Half rotating corner basket system.", fr: "Système de panier rotatif demi-tour.", es: "Sistema de cesto giratorio de media vuelta.", ar: "نظام سلة زاوية دوارة نصف قطرية." },
    image: "/images/1-2-borulu-doner-sepet.jpg",
    images: ["/images/1-2-borulu-doner-sepet.jpg", "/images/1-2-borulu-doner-sepet-2.jpg"]
  },
  {
    id: "doner-sepet-3-4",
    category: "tezgah-alti",
    title: { tr: "3/4 Borulu Döner Sepet Takımı", en: "3/4 Rotating Carousel Set", fr: "Ensemble de paniers rotatifs 3/4", es: "Juego de cestos giratorios 3/4", ar: "طقم سلة دوارة 3/4" },
    description: { tr: "Üç çeyrek döner sepet sistemi.", en: "Three-quarter rotating basket system.", fr: "Système de panier rotatif aux trois quarts.", es: "Sistema de cesto giratorio de tres cuartos.", ar: "نظام سلة دوارة بثلاثة أرباع." },
    image: "/images/3-4-borulu-doner-sepet.jpg",
    images: ["/images/3-4-borulu-doner-sepet.jpg", "/images/3-4-borulu-doner-sepet-2.jpg"]
  },
  {
    id: "doner-sepet-4-4",
    category: "tezgah-alti",
    title: { tr: "4/4 Borulu Döner Sepet Takımı", en: "Full Circle Rotating Carousel Set", fr: "Ensemble de paniers rotatifs complet", es: "Juego de cestos giratorios completos", ar: "طقم سلة دوارة كاملة" },
    description: { tr: "Tam tur döner sepet takımı.", en: "Full circle rotating basket set.", fr: "Ensemble de paniers rotatifs complet.", es: "Juego de cestos giratorios completo.", ar: "طقم سلة دوارة كاملة الدوران." },
    image: "/images/4-4-borulu-doner-sepet.jpg",
    images: ["/images/4-4-borulu-doner-sepet.jpg", "/images/4-4-borulu-doner-sepet-2.jpg"]
  },
  {
    id: "rayli-cop-kovasi",
    category: "tezgah-alti",
    title: { tr: "Raylı Çöp Kovası", en: "Rail Trash Can", fr: "Poubelle à rails", es: "Cubo de basura con rieles", ar: "سلة المهملات مع السكك الحديدية" },
    description: { tr: "Dolap içi gizli çöp kovası sistemleri.", en: "In-cabinet hidden trash can systems.", fr: "Systèmes de poubelles cachées.", es: "Sistemas de cubos de basura ocultos.", ar: "أنظمة سلال المهملات المخفية داخل الخزانة." },
    image: "/images/rayli-cop-kovasi.jpg",
    images: ["/images/rayli-cop-kovasi.jpg", "/images/rayli-cop-kovasi-2.jpg", "/images/rayli-cop-kovasi-3.jpg"]
  },
  {
    id: "kapaga-monte-cop-kovasi",
    category: "tezgah-alti",
    title: { tr: "Kapağa Monte Oval Çöp Kovası", en: "Door Mounted Oval Trash Can", fr: "Poubelle ovale montée sur porte", es: "Cubo de basura ovalado montado en puerta", ar: "سلة مهملات بيضاوية مثبتة على الباب" },
    description: { tr: "Pratik ve hijyenik çöp çözümleri.", en: "Practical and hygienic trash solutions.", fr: "Solutions de déchets pratiques.", es: "Soluciones de basura prácikas.", ar: "حلول مهملات عملية وصحية." },
    image: "/images/kapaga-monte-rayli-cop-kovasi.jpg"
  },
  {
    id: "kapak-arkasi-raf",
    category: "tezgah-alti",
    title: { tr: "Kapak Arkası Raf", en: "Inside Door Shelf", fr: "Étagère derrière la porte", es: "Estante derrière la puerta", ar: "رف خلف الباب" },
    description: { tr: "Küçük eşyalar için ekstra saklama alanı.", en: "Extra storage space for small items.", fr: "Espace de stockage supplémentaire için küçük eşyalar.", es: "Espacio de almacenamiento extra para artículos pequeños.", ar: "مساحة تخزين إضافية للأشياء الصغيرة." },
    image: "/images/kapak-arasi-raf.jpg"
  },
  {
    id: "rayli-tupcek",
    category: "tezgah-alti",
    title: { tr: "Raylı Tüpçek", en: "Rail Gas Cylinder System", fr: "Système de bouteille de gaz à rails", es: "Sistema de cilindro de gas con rieles", ar: "نظام أسطوانة الغاز مع قضبان" },
    description: { tr: "Tüpler için güvenli ve kolay erişimli sistem.", en: "Safe and easy access system for gas cylinders.", fr: "Système d'accès sûr pour les bouteilles de gaz.", es: "Sistema de acceso seguro para cilindros de gas.", ar: "نظام وصول آمن وسهل لأسطوانات الغاز." },
    image: "/images/rayli-tupcek.jpg"
  },

  // --- GARDIROP GRUBU ---
  {
    id: "gardirop-asansoru",
    category: "gardirop",
    title: { tr: "Gardırop Asansörü", en: "Wardrobe Lift", fr: "Élévateur de garde-robe", es: "Elevador de armario", ar: "مصعد خزانة الملابس " },
    description: { tr: "Yüksek dolaplar için ergonomik askı çözümü.", en: "Ergonomic hanger solution for high cabinets.", fr: "Solution de penderie ergonomique.", es: "Solución de percha ergonómica.", ar: "حل شماعات مريح للخزانات العالية." },
    image: "/images/asansor.jpg"
  },
  {
    id: "teleskopik-rayli-aluminyum-pantolonluk",
    category: "gardirop",
    title: { tr: "Teleskopik Raylı Alüminyum Pantolonluk", en: "Telescopic Rail Aluminum Trouser Rack", fr: "Porte-pantalons en aluminium à rails télescopiques", es: "Pantalonero de aluminio con rieles telescópicos", ar: "رف بنطلون ألومنيum مع قضيب تلسكوبي" },
    description: { tr: "Şık ve dayanıklı pantolon askı sistemi.", en: "Stylish and durable trouser hanger system.", fr: "Système de penderie élégant.", es: "Sistema de percha elegante.", ar: "نظام شماعات بنطلون أنيق ومتين." },
    image: "/images/pantolonluk-aluminyum.jpg"
  },
  {
    id: "ustten-rayli-pantolonluk",
    category: "gardirop",
    title: { tr: "Üstten Raylı Pantolonluk", en: "Top Mounted Trouser Rack", fr: "Porte-pantalons monté par le haut", es: "Pantalonero montado por arriba", ar: "رف بنطلون مثبت من الأعلى" },
    description: { tr: "Dar alanlar için pratik pantolon askısı.", en: "Practical trouser hanger for narrow spaces.", fr: "Penderie pratique pour espaces étroits.", es: "Percha prácika para espacios estrechos.", ar: "شماعة بنطلون عملية للمساحات الضيقة." },
    image: "/images/pantolonluk-ustten.jpg"
  },
  {
    id: "teleskopik-rayli-pantolonluk-ayarli",
    category: "gardirop",
    title: { tr: "Teleskopik Raylı Pantolonluk (Ayarlı)", en: "Adjustable Telescopic Rail Trouser Rack", fr: "Porte-pantalons réglable à rails télescopiques", es: "Pantalonero ajustable con rieles telescópicos", ar: "رف بنطلون قابل للتعديل مع قضيب تلسكوبي" },
    description: { tr: "Genişliği ayarlanabilir pantolon düzenleyici.", en: "Width adjustable trouser organizer.", fr: "Organisateur de pantalons réglable.", es: "Organizador de pantalones ajustable.", ar: "منظم بنطلون قابل للتعديل العرض." },
    image: "/images/pantolonluk-ayarli.jpg"
  },
  {
    id: "yandan-rayli-kravatlik-kemerlik",
    category: "gardirop",
    title: { tr: "Yandan Raylı Kravatlık - Kemerlik", en: "Side Mounted Tie & Belt Rack", fr: "Porte-cravates et ceintures latéral", es: "Corbatero y cinturonero lateral", ar: "رف ربطات العنق والأحزمة الجانبي" },
    description: { tr: "Kravat ve kemerler için yan panel düzenleyici.", en: "Side panel organizer for ties and belts.", fr: "Organisateur de cravates et ceintures.", es: "Organizador de corbatas y cinturones.", ar: "منظم لوحة جانبية لربطات العنق والأحزمة." },
    image: "/images/kravatlik.jpg"
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