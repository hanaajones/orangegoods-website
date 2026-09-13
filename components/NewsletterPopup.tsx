"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "og_quiz_popup_dismissed_v3";
const SESSION_SEEN_KEY = "og_quiz_popup_session_seen_v1";
const IS_PRODUCTION = process.env.NODE_ENV === "production";
const DELAY_MS = IS_PRODUCTION ? 8000 : 300;

const POPUP_ENABLED = false;

export function NewsletterPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!POPUP_ENABLED) return;
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;

    if (IS_PRODUCTION) {
      if (localStorage.getItem(STORAGE_KEY)) return;
      if (sessionStorage.getItem(SESSION_SEEN_KEY)) return;

      sessionStorage.setItem(SESSION_SEEN_KEY, "1");
    }
    const t = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    if (IS_PRODUCTION) {
      localStorage.setItem(STORAGE_KEY, "1");
    }
    setVisible(false);
  }

  if (!POPUP_ENABLED || !visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[80] bg-black/50 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="fixed left-1/2 top-1/2 z-[90] w-[min(100%-2rem,36rem)] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
      >
        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute right-5 top-5 text-[#1C1C1C]/30 transition hover:text-[#1C1C1C]"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        <div className="px-8 pb-9 pt-9 sm:px-11 sm:pb-11 sm:pt-11">
          <p className="font-accent text-sm uppercase tracking-[0.22em] text-[#081E6F]">
            Need a starting point?
          </p>
          <h2
            className="mt-3 whitespace-nowrap text-[clamp(1rem,4vw,2.2rem)] uppercase leading-[0.96] tracking-[-0.02em] text-[#FF4200]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Take our 30-second quiz
          </h2>

          <p className="mt-4 max-w-lg text-lg leading-7 text-[#1C1C1C]/70">
            Pick what you like and we&apos;ll point you toward the best fit.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <Link
              href="/quiz"
              onClick={dismiss}
              className="btn-og w-full justify-center py-4 text-base"
            >
              START THE QUIZ
            </Link>
            <Link
              href="/contact"
              onClick={dismiss}
              className="inline-flex items-center justify-center text-sm font-medium uppercase tracking-[0.18em] text-[#081E6F] transition hover:text-[#FF4200]"
            >
              Skip and start a project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
