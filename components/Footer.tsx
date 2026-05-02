import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Insights", href: "/insights" },
  { label: "Legal", href: "/legal" },
];

export function Footer() {
  return (
    <footer className="text-white">
      {/* Main footer body — off-black */}
      <div className="bg-[#081E6F]">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-12 lg:px-12">
        <div className="grid gap-8 md:grid-cols-[1fr_auto]">
          {/* Left col */}
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="Orange Goods">
              <Image
                src="/logos/OrangeGoods_Logo_Secondary_FullColor.svg"
                alt="Orange Goods"
                width={320}
                height={96}
                className="h-24 w-auto"
              />
            </Link>

            <div className="flex flex-col gap-2 text-sm text-white/70">
              <a
                href="mailto:hello@orangegoods.co"
                className="transition hover:text-[#FF4200]"
              >
                hello@orangegoods.co
              </a>
              <a
                href="sms:+12133764663"
                className="flex items-center gap-1.5 transition hover:text-[#FF4200]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#FF7F00]">Text Us</span>
                <span>(213) 376-4663</span>
              </a>
            </div>
            <a
              href="https://www.instagram.com/orangegoods"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              @orangegoods
            </a>
          </div>

          {/* Right col */}
          <div className="flex flex-col gap-6">
            <div>

              <ul className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-white/50 transition hover:text-white/80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                Resources
              </p>
              <a
                href="https://orangegoods.co/wp-content/uploads/2025/01/OrangeGoods_FreshPicks.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 transition hover:text-white"
              >
                Fresh Picks Guide ↗
              </a>
            </div>
          </div>
        </div>

        {/* CTA row */}
        <div className="mt-8 flex flex-col items-start gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p
            className="text-2xl uppercase leading-tight text-white md:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to make something worth keeping?
          </p>
          <a
            href="/contact"
            className="btn-lift inline-flex min-h-12 items-center rounded-xl bg-[#FF4200] px-6 text-sm font-semibold uppercase tracking-[0.1em] text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Start a Project
          </a>
        </div>
      </div>

      </div>

      {/* Bottom strip — blue */}
      <div className="bg-[#0B32A0] px-4 py-4 md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Orange Goods. All rights reserved.
          </p>
          <p className="text-xs text-white/60">Los Angeles, CA</p>
        </div>
      </div>
    </footer>
  );
}
