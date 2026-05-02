import Link from "next/link";

export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#0B32A0]/20 bg-[rgba(11,50,160,0.94)] p-3 backdrop-blur md:hidden">
      <Link
        href="mailto:hello@orangegoods.co?subject=Start%20a%20Project"
        className="flex min-h-12 items-center justify-center rounded-full bg-[var(--og-orange)] px-4 text-sm font-semibold uppercase tracking-[0.14em] text-white"
      >
        Start a Project →
      </Link>
    </div>
  );
}
