import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// 1. Desteklediğimiz dilleri tanımlayalım
let locales = ["tr", "en", "fr", "es"];
let defaultLocale = "tr"; // Varsayılan dilimiz

// 2. Kullanıcının tarayıcı diline göre en uygun dili seçen fonksiyon
function getLocale(request: NextRequest): string {
  // Tarayıcıdan gelen dil tercihlerini al (örn: "tr-TR, tr;q=0.9, en;q=0.8")
  let headers = { "accept-language": request.headers.get("accept-language") || "" };
  let languages = new Negotiator({ headers }).languages();

  // Bizim listemizle eşleştirip en uygununu döndür
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. URL zaten dilli ise karışma
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // 2. Dil eksikse bul
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  // 3. AKILLI YÖNLENDİRME (Burayı değiştiriyoruz)
  // process.env.NODE_ENV bize 'development' veya 'production' değerini verir.
  const isProduction = process.env.NODE_ENV === 'production';
  
  // Canlıdaysak 308 (Permanent), Geliştirme ise 307 (Temporary)
  const statusCode = isProduction ? 308 : 307;

  return NextResponse.redirect(request.nextUrl, statusCode);
}
// 5. Middleware'in hangi yollarda çalışacağını belirt (Matcher)
export const config = {
  matcher: [
    // Şu dosyalar hariç her şeyde çalışsın:
    // - _next/static (resimler, css vb.)
    // - _next/image (optimize edilmiş resimler)
    // - favicon.ico (tarayıcı ikonu)
    // - images (public klasöründeki resimler)
    '/((?!_next/static|_next/image|favicon.ico|images).*)',
  ],
};