import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Insights", href: "/insights" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Legal", href: "/legal" },
];

export function Footer() {
  return (
    <footer className="text-white">
      {/* Main footer body */}
      <div className="bg-[#081E6F]">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16 lg:px-12">

          {/* 3-column grid: logo | contact | nav */}
          <div className="grid gap-10 md:grid-cols-3 md:items-center">

            {/* Left: Logo */}
            <div className="flex justify-start">
              <Link href="/" aria-label="Orange Goods">
                <Image
                  src="/logos/OrangeGoods_Logo_Secondary_FullColor.svg"
                  alt="Orange Goods"
                  width={320}
                  height={96}
                  className="h-[115px] w-auto"
                />
              </Link>
            </div>

            {/* Center: Contact */}
            <div className="flex flex-col items-start gap-3 text-sm text-white/70 md:items-center">
              <a
                href="mailto:hello@orangegoods.co"
                className="flex items-center gap-1.5 transition hover:text-[#FF4200]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#FF7F00]">Email Us</span>
                <span>hello@orangegoods.co</span>
              </a>
              <a
                href="sms:+12133764663"
                className="flex items-center gap-1.5 transition hover:text-[#FF4200]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#FF7F00]">Text Us</span>
                <span>(213) 376-4663</span>
              </a>
              <a
                href="https://www.instagram.com/orangegoods"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-semibold transition hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                @orangegoods
              </a>
            </div>

            {/* Right: Nav */}
            <div className="flex flex-col items-start gap-2 md:items-end">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-white/50 transition hover:text-white/80"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA row */}
          <div className="mt-10 flex flex-col items-start gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
            <p
              className="text-2xl uppercase leading-tight text-white md:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We love <span className="text-[#FF4200]">making good</span> goods
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="btn-og inline-flex items-center rounded-xl px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Start a Project
              </a>
              <a
                href="/quiz"
                className="inline-flex items-center rounded-xl border-2 border-white bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:-translate-y-[3px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Merch Quiz
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-[#0B32A0] px-4 py-5 text-center md:px-8 lg:px-12">
        <p className="text-xs text-white/60">
          © {new Date().getFullYear()} Orange Goods. All rights reserved. · South Bay, California
        </p>
      </div>
    </footer>
  );
}
