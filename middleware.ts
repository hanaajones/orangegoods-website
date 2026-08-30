import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const REDIRECTS = new Map<string, string>([
  ["/get-a-quote", "/contact"],
  ["/who-we-are", "/about"],
  ["/design-with-us", "/design/start"],
  ["/the-og-difference", "/our-process"],
  ["/product-inspiration", "/fresh-picks"],
  ["/thank-you-150", "/thank-you"],
]);

const GONE_PATHS = new Set<string>([
  "/shop-2",
  "/my-account",
  "/checkout",
]);

function normalizePathname(pathname: string) {
  if (pathname === "/") return pathname;
  return pathname.replace(/\/+$/, "");
}

export function middleware(request: NextRequest) {
  const pathname = normalizePathname(request.nextUrl.pathname);

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const redirectTarget = REDIRECTS.get(pathname);
  if (redirectTarget) {
    return NextResponse.redirect(new URL(redirectTarget, request.url), 308);
  }

  if (GONE_PATHS.has(pathname)) {
    return new NextResponse("Gone", { status: 410 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
