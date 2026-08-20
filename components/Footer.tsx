import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Catalogs", href: "/catalogs" },
  { label: "FAQ", href: "/faq" },
  { label: "Insights", href: "/insights" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Terms + Conditions", href: "/legal" },
];

export function Footer() {
  return (
    <footer className="text-white">
      {/* Main footer body */}
      <div className="bg-[#081E6F]">
        <div className="mx-auto flex max-w-6xl flex-col px-4 py-12 md:px-8 md:py-16 lg:px-12">
          {/* CTA row */}
          <div className="order-1 flex flex-col items-center gap-4 border-b border-white/10 pb-8 text-center md:order-2 md:mt-10 md:flex-row md:items-center md:justify-between md:border-b-0 md:border-t md:pb-0 md:pt-8 md:text-left">
            <p
              className="text-2xl uppercase leading-tight text-white md:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Good Brands. <span className="text-[#FF4200]">Better Goods.</span>
            </p>
            <div className="flex w-full flex-col items-center gap-3 md:w-auto md:flex-row md:flex-wrap md:justify-center">
              <a
                href="/quiz"
                className="font-body inline-flex w-full max-w-[16rem] items-center justify-center rounded-xl border-2 border-white bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:-translate-y-[3px] md:w-auto md:max-w-none"
              >
                Merch Quiz
              </a>
            </div>
          </div>

          {/* 3-column grid: logo | contact | nav */}
          <div className="order-2 mt-10 grid gap-10 md:order-1 md:mt-0 md:grid-cols-3 md:items-center">

            {/* Left: Logo */}
            <div className="flex justify-center md:justify-start">
              <Link href="/" aria-label="Orange Goods">
                <Image
                  src="/logos/OrangeGoods_Logo_Secondary_FullColor.svg"
                  alt="Orange Goods"
                  width={320}
                  height={96}
                  className="h-[72px] w-auto md:h-[115px]"
                />
              </Link>
            </div>

            {/* Center: Contact */}
            <div className="flex flex-col items-center gap-3 text-center text-sm text-white/70 md:items-center">
              <a
                href="mailto:hello@orangegoods.co"
                className="flex items-center justify-center gap-1.5 transition hover:text-[#FF4200]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#FF7F00]">Email Us</span>
                <span>hello@orangegoods.co</span>
              </a>
              <a
                href="sms:+12133764663"
                className="flex items-center justify-center gap-1.5 transition hover:text-[#FF4200]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#FF7F00]">Text Us</span>
                <span>(213) 376-4663</span>
              </a>
              <a
                href="https://www.instagram.com/orangegoods"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-semibold transition hover:text-white"
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
            <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center md:flex-col md:items-end md:justify-start md:gap-x-0">
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
