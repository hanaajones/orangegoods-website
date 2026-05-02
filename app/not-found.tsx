import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-84px)] flex-col items-center justify-center px-4 text-center">
      {/* Big 404 */}
      <p
        className="text-[120px] font-extrabold leading-none text-[#F3EFE7] md:text-[180px]"
        style={{ fontFamily: "var(--font-display)" }}
        aria-hidden="true"
      >
        404
      </p>

      <h1
        className="-mt-4 text-3xl uppercase leading-tight text-[#FF4200] md:text-5xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Page not found
      </h1>

      <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#1C1C1C]/60">
        The page you're looking for doesn't exist or was moved. Let's get you back to the good stuff.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-og">
          Back to Home
        </Link>
        <Link href="/goods" className="inline-flex items-center rounded-xl border-2 border-[#0B32A0] px-6 py-3 text-sm font-bold uppercase text-[#0B32A0] transition hover:-translate-y-[3px] hover:bg-[#0B32A0] hover:text-white" style={{ fontFamily: "var(--font-display)" }}>
          Shop Goods
        </Link>
        <Link href="/contact" className="inline-flex items-center rounded-xl border-2 border-[#1C1C1C]/20 px-6 py-3 text-sm font-bold uppercase text-[#1C1C1C]/60 transition hover:-translate-y-[3px] hover:border-[#1C1C1C] hover:text-[#1C1C1C]" style={{ fontFamily: "var(--font-display)" }}>
          Contact Us
        </Link>
      </div>
    </main>
  );
}
