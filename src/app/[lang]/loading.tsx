import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-sm transition-all">
      
      {/* Kapsayıcı Daire (Opsiyonel: Arkada hafif bir hale) */}
      <div className="relative flex flex-col items-center">
        
        {/* LOGO: Nefes Alma (Pulse) Animasyonu */}
        <div className="relative w-70 h-25 animate-pulse">
          <Image
            src="/images/hemaks-logo.png"
            alt="Yükleniyor..."
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Altına Yükleniyor Yazısı (Opsiyonel) */}
        <div className="mt-4 flex space-x-1">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce"></div>
        </div>

      </div>
    </div>
  );
}