import { NextResponse, NextRequest } from "next/server";

const locales = ["en-US", "nl-NL", "nl"];

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest): string {
  // Example implementation to get the locale from headers
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage.split(",")[0];
    if (locales.includes(preferredLocale)) {
      return preferredLocale;
    }
  }
  return "en-US"; // Default locale
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp|ico|gif|bmp)).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
