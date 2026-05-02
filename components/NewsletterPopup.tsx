"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "og_newsletter_dismissed";
const DELAY_MS = 8000; // show after 8s

export function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      // Fire-and-forget to J-Core; fails silently — we still show success
      await fetch("https://hooks.orangegoods.co/api/newsletter-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "website-popup" }),
      }).catch(() => null);
    } finally {
      setLoading(false);
      setSubmitted(true);
      localStorage.setItem(STORAGE_KEY, "1");
    }
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
          {!submitted ? (
            <>
              {/* Headline */}
              <h2
                className="text-4xl uppercase leading-tight text-[#FF4200] md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Get $150 off your first order
              </h2>

              <p className="mt-4 text-lg leading-7 text-[#1C1C1C]/70">
                Sign up and we&apos;ll apply it to your project
              </p>

              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="rounded-xl border border-[#1C1C1C]/15 bg-[#F3EFE7] px-5 py-4 text-base text-[#1C1C1C] placeholder-[#1C1C1C]/40 outline-none focus:border-[#FF4200]"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-og w-full justify-center py-4 text-base"
                >
                  {loading ? "CLAIMING…" : "CLAIM MY $150"}
                </button>
              </form>

              <p className="mt-5 text-sm text-[#1C1C1C]/40">
                Valid on orders 100+ pieces. One per customer
              </p>
            </>
          ) : (
            <div className="py-6 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FF4200]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2
                className="text-3xl uppercase text-[#FF4200]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                You&apos;re in
              </h2>
              <p className="mt-3 text-base text-[#1C1C1C]/60">
                Mention this when you start your project
              </p>
              <button
                onClick={dismiss}
                className="btn-og mt-8 w-full justify-center"
              >
                START A PROJECT
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
