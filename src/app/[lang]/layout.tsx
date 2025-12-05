import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

// Bileşenleri import ediyoruz
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // <-- Footer'ı çağırdık
import { getDictionary, Locale } from "@/lib/dictionary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hemaks - Kurumsal",
  description: "Hemaks Web Sitesi Yenileme Projesi",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={inter.className + " flex flex-col min-h-screen"}>
        {/* Navbar en tepede */}
        <Navbar lang={lang} dict={dict} />
        
        {/* İçerik (page.tsx) ortada ve büyüyebilir (flex-grow) */}
        <main className="flex-grow">
           {children}
        </main>

        {/* Footer en altta */}
        <Footer lang={lang} dict={dict} />
        
      </body>
    </html>
  );
}