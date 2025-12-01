import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

// Kendi bileşenlerimizi ekliyoruz
import Navbar from "@/components/Navbar";
import { getDictionary, Locale } from "@/lib/dictionary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hemaks - Kurumsal",
  description: "Hemaks Web Sitesi Yenileme Projesi",
};

// Layout da params alır ve Next 15'te bu Promise'dir.
type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
};

export default async function RootLayout({ children, params }: Props) {
  // 1. Dili öğren
  const { lang } = await params;

  // 2. Sözlüğü getir (Sunucu tarafında çalışır, çok hızlıdır)
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={inter.className}>
        {/* Navbar'ı en tepeye koyduk ve sözlüğü ona verdik */}
        <Navbar lang={lang} dict={dict} />
        
        {/* Sayfaların içeriği buraya gelecek */}
        <main className="min-h-screen">
          {children}
        </main>
        
      </body>
    </html>
  );
}