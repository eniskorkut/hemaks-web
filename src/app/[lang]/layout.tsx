import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary, Locale } from "@/lib/dictionary";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Hemaks - Kurumsal",
  description: "Hemaks Web Sitesi Yenileme Projesi",
  icons: {
    icon: "/images/favicon.jpg",
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  // Arapça için RTL (Sağdan Sola) desteği
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      {/* AÇIK MOD: bg-gray-50 (Hafif gri)
          KOYU MOD: dark:bg-zinc-900 (Antrasit) ve dark:text-white (Beyaz Yazı)
      */}
      <body className={inter.className + " flex flex-col min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-zinc-900 dark:text-white"}>

        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Hemaks",
              "legalName": "KORPA İMALAT PAZARLAMA",
              "url": "https://hemaks.com",
              "logo": "https://hemaks.com/images/hemaks-logo.png",
              "description": "Endüstriyel mutfak ve raylı kiler sistemleri üreticisi.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "OSB 32. Cad. No:2/B",
                "addressLocality": "Melikgazi",
                "addressRegion": "Kayseri",
                "postalCode": "38070",
                "addressCountry": "TR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+90-352-311-52-52",
                "contactType": "customer service",
                "email": "korpa@hemaks.com",
                "availableLanguage": ["Turkish", "English", "French", "Spanish"]
              },
              "sameAs": [
                "https://www.instagram.com/hemaks",
                "https://www.facebook.com/hemaks"
              ]
            })
          }}
        />

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          <Navbar lang={lang} dict={dict} />

          {/* Main kısmı da şeffaf veya aynı renk olsun */}
          <main className="flex-grow">
            {children}
          </main>

          <Footer lang={lang} dict={dict} />

        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}