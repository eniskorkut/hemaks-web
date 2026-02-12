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
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <html lang={lang} suppressHydrationWarning>
      {/* AÇIK MOD: bg-gray-50 (Hafif gri)
          KOYU MOD: dark:bg-zinc-900 (Antrasit) ve dark:text-white (Beyaz Yazı)
      */}
      <body className={inter.className + " flex flex-col min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-zinc-900 dark:text-white"}>

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