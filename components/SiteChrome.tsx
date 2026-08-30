"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { NewsletterPopup } from "@/components/NewsletterPopup";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isPortal = pathname === "/portal" || pathname.startsWith("/portal/");
  const isQuiz = pathname === "/quiz" || pathname.startsWith("/quiz/");
  const showNewsletterPopup = !isQuiz;

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
