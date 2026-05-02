import Link from "next/link";
import { Suspense } from "react";
import ThankYouPixels from "./ThankYouPixels";

export const metadata = {
  title: "Thank You — Orange Goods",
  robots: { index: false, follow: false }, // keep off search engines
};

export default function ThankYouPage() {
  return (
    <main className="flex min-h-[calc(100vh-84px)] flex-col items-center justify-center px-4 text-center">
      {/* Conversion pixels — fires Google Ads + Meta on load */}
      <Suspense fallback={null}>
        <ThankYouPixels />
      </Suspense>

      {/* Content */}
      <p
        className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FF7F00]"
        style={{ fontFamily: "var(--font-accent)" }}
      >
        Orange Goods
      </p>

      <h1
        className="mt-3 text-5xl uppercase leading-tight text-[#FF4200] md:text-7xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Good stuff.
      </h1>

      <p className="mx-auto mt-5 max-w-md text-lg leading-7 text-[#1C1C1C]/70">
        Thanks for reaching out — we'll be in touch within one business day.
      </p>

      <p className="mt-3 text-sm text-[#1C1C1C]/40">
        Have something to add?{" "}
        <a href="mailto:hello@orangegoods.co" className="text-[#FF4200] hover:underline">
          hello@orangegoods.co
        </a>
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-og">
          Back to Home
        </Link>
        <Link href="/insights" className="inline-flex items-center rounded-xl border-2 border-[#0B32A0]/30 px-6 py-3 text-sm font-bold uppercase text-[#0B32A0] transition hover:-translate-y-[3px]" style={{ fontFamily: "var(--font-display)" }}>
          Read Our Insights
        </Link>
      </div>
    </main>
  );
}
