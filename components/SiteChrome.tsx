"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { NewsletterPopup } from "@/components/NewsletterPopup";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [returnTo, setReturnTo] = useState<string | null>(null);
  const isPortal = pathname === "/portal" || pathname.startsWith("/portal/");
  const isQuiz = pathname === "/quiz" || pathname.startsWith("/quiz/");
  const showNewsletterPopup = !isQuiz;

  useEffect(() => {
    setReturnTo(new URLSearchParams(window.location.search).get("returnTo"));
  }, [pathname]);

  useEffect(() => {
    // Product detail pages opened from the shared goods browser should always land at the top.
    if (!returnTo?.startsWith("/goods/all") || pathname === "/goods/all") return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, returnTo]);

  if (isPortal) {
    return <>{children}</>;
  }

  return (
      <>
      <Nav />
      {children}
      <Footer />
      {showNewsletterPopup ? <NewsletterPopup /> : null}
    </>
  );
}
