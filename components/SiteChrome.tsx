"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { ChatWidget } from "@/components/ChatWidget";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { NewsletterPopup } from "@/components/NewsletterPopup";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isPortal = pathname === "/portal" || pathname.startsWith("/portal/");
  const isQuiz = pathname === "/quiz" || pathname.startsWith("/quiz/");

  if (isPortal) {
    return <>{children}</>;
  }

  return (
    <>
      <Nav />
      {children}
      <Footer />
      {!isQuiz ? <ChatWidget /> : null}
      {!isQuiz ? <NewsletterPopup /> : null}
    </>
  );
}
