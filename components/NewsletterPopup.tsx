"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "og_quiz_popup_dismissed_v1";
const DELAY_MS = process.env.NODE_ENV === "production" ? 8000 : 1500;

export function NewsletterPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

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
        className="fixed inset-x-4 bottom-6 z-[90] mx-auto max-w-xl rounded-2xl bg-white shadow-2xl md:bottom-auto md:left-1/2 md:top-1/2 md:inset-x-auto md:-translate-x-1/2 md:-translate-y-1/2"
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

        <div className="px-10 pb-10 pt-10">
          <p className="font-accent text-sm uppercase tracking-[0.22em] text-[#081E6F]">
            Need a starting point?
          </p>
          <h2
            className="mt-3 text-4xl uppercase leading-tight text-[#FF4200] md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Take the 30-second quiz
          </h2>

          <p className="mt-4 max-w-lg text-lg leading-7 text-[#1C1C1C]/70">
            Tell us what you are making and we&apos;ll point you toward the right product lane,
            material feel, and next step.
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

          <p className="mt-5 text-sm text-[#1C1C1C]/40">
            Best for people who know the goal but not the exact product yet.
          </p>
        </div>
      </div>
    </>
  );
}
