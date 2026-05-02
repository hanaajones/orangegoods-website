import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100vh-84px)] flex-col items-center justify-center overflow-hidden bg-[#081E6F] px-4 text-center">

      {/* Background checkers */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/graphics/OrangeGoods_Checkers_White.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 w-full opacity-20"
      />

      {/* Giant 404 behind everything */}
      <p
        className="pointer-events-none absolute inset-0 flex items-center justify-center text-[30vw] font-extrabold leading-none text-white/10"
        style={{ fontFamily: "var(--font-display)" }}
        aria-hidden="true"
      >
        404
      </p>

      {/* Content */}
      <div className="relative z-10">
        <p
          className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          You're lost
        </p>

        <h1
          className="mt-3 text-5xl uppercase leading-tight text-[#FF4200] md:text-7xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Wrong goods,<br />wrong page.
        </h1>

        <p className="mx-auto mt-5 max-w-md text-lg leading-7 text-white/70">
          This page doesn't exist. But we make goods that do. Let's get you somewhere useful.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-og-white">
            Back to Home
          </Link>
          <Link href="/goods" className="inline-flex items-center rounded-xl border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-bold uppercase text-white backdrop-blur transition hover:-translate-y-[3px] hover:bg-white/20" style={{ fontFamily: "var(--font-display)" }}>
            See Our Goods
          </Link>
          <Link href="/contact" className="inline-flex items-center rounded-xl border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-bold uppercase text-white backdrop-blur transition hover:-translate-y-[3px] hover:bg-white/20" style={{ fontFamily: "var(--font-display)" }}>
            Contact Us
          </Link>
        </div>

        <p className="mt-8 text-sm text-white/40">
          Or try the{" "}
          <Link href="/quiz" className="underline underline-offset-2 hover:text-white/70">
            merch quiz
          </Link>
          {" "}and find out what you actually need.
        </p>
      </div>
    </main>
  );
}
