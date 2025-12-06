export type Product = {
  id: string;
  category: "kitchen" | "wardrobe" | "bathroom";
  title: {
    tr: string;
    en: string;
    fr: string;
    es: string;
  };
  description: {
    tr: string;
    en: string;
    fr: string;
    es: string;
  };
  image: string;
};

export const products: Product[] = [
  // --- MUTFAK GRUBU ---
  {
    id: "kose-kiler",
    category: "kitchen",
    title: { tr: "Fasulye Köşe Kiler", en: "Bean Corner Pantry", fr: "Garde-manger d'angle", es: "Despensa de Esquina" },
    description: { tr: "Kör noktaları maksimum verimle kullanın.", en: "Maximize blind corners usage.", fr: "Maximisez l'utilisation des angles.", es: "Maximice el uso de esquinas." },
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=600"
  },
  {
    id: "sise-tasiyici",
    category: "kitchen",
    title: { tr: "Şişe Taşıyıcı", en: "Bottle Carrier", fr: "Porte-bouteilles", es: "Portabotellas" },
    description: { tr: "Tezgah altı düzenleyici sistem.", en: "Under-counter organizer system.", fr: "Système d'organisation.", es: "Sistema organizador." },
    image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=600"
  },
  
  // --- GARDIROP GRUBU ---
  {
    id: "asansor-aski",
    category: "wardrobe",
    title: { tr: "Asansör Askı", en: "Lift Hanger", fr: "Penderie relevable", es: "Percha elevadora" },
    description: { tr: "Yüksek dolaplara kolay erişim.", en: "Easy access to high cabinets.", fr: "Accès facile aux armoires hautes.", es: "Fácil acceso a armarios altos." },
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=600"
  },
  {
    id: "pantolon-aski",
    category: "wardrobe",
    title: { tr: "Pantolonluk", en: "Trousers Rack", fr: "Porte-pantalons", es: "Pantalones Rack" },
    description: { tr: "Kaymaz ve düzenli saklama.", en: "Non-slip and organized storage.", fr: "Rangement antidérapant.", es: "Almacenamiento antideslizante." },
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=600"
  },

  // --- BANYO GRUBU ---
  {
    id: "kirli-sepeti",
    category: "bathroom",
    title: { tr: "Raylı Kirli Sepeti", en: "Rail Laundry Basket", fr: "Panier à linge", es: "Cesta de lavandería" },
    description: { tr: "Dolap içi gizli çözüm.", en: "In-cabinet hidden solution.", fr: "Solution cachée dans l'armoire.", es: "Solución oculta en el gabinete." },
    image: "https://images.unsplash.com/photo-1552321901-700912415175?q=80&w=600"
  }
];