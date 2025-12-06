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
  // Kullanıcının girmek istediği adresi al (örn: /hakkimizda)
  const { pathname } = request.nextUrl;

  // 3. Eğer URL zaten desteklediğimiz bir dille başlıyorsa (örn: /tr/...) işlem yapma, devam et.
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // 4. Dil eksikse, uygun dili bul ve yönlendir
  const locale = getLocale(request);
  
  // URL'i güncelle: http://localhost:3000/hakkimizda -> http://localhost:3000/tr/hakkimizda
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  // Kullanıcıyı yeni adrese yönlendir (307 Temporary Redirect yerine 308 Permanent Redirect SEO için daha iyidir ama şimdilik redirect kullanıyoruz)
  return NextResponse.redirect(request.nextUrl);
}

// 5. Middleware'in hangi yollarda çalışacağını belirt (Matcher)
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images|sitemap.xml|robots.txt).*)',
  ],
};