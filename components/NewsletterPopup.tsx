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
        className="fixed inset-x-4 bottom-6 z-[90] mx-auto max-w-md rounded-2xl bg-[#081E6F] text-white shadow-2xl md:bottom-auto md:left-1/2 md:top-1/2 md:inset-x-auto md:-translate-x-1/2 md:-translate-y-1/2"
        role="dialog"
        aria-modal="true"
      >
        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute right-4 top-4 text-white/50 transition hover:text-white"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        <div className="px-7 pb-8 pt-8">
          {!submitted ? (
            <>
              {/* Eyebrow */}
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF7F00]"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Limited Offer
              </p>

              {/* Headline */}
              <h2
                className="mt-2 text-3xl uppercase leading-tight text-white md:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Get $150 off your first order.
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/70">
                Join our list and we&apos;ll apply $150 toward your first project — no strings, just real goods. Unsubscribe anytime.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-[#FF4200] focus:bg-white/15"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-og w-full justify-center"
                >
                  {loading ? "CLAIMING…" : "CLAIM MY $150"}
                </button>
              </form>

              <p className="mt-4 text-center text-xs text-white/30">
                Valid on orders 100+ pieces. One per customer.
              </p>
            </>
          ) : (
            <div className="py-4 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF4200]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2
                className="text-2xl uppercase text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                You&apos;re in.
              </h2>
              <p className="mt-2 text-sm text-white/70">
                We&apos;ll be in touch. Mention this offer when you start your project.
              </p>
              <button
                onClick={dismiss}
                className="btn-og mt-6 w-full justify-center"
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
