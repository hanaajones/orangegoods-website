import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const projectOptions = [
  "Custom Hats",
  "Apparel",
  "Design Services",
  "Screen Printing",
  "Embroidery",
  "Other",
];

export default function ContactPage() {
  return (
    <main className="bg-[var(--og-warm-grey)] pb-24 md:pb-0">
      <section className="px-4 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-6xl leading-none text-[var(--og-orange)] md:text-8xl lg:text-9xl">
            GET IN TOUCH
          </h1>
          <p className="mt-5 text-lg leading-8 text-[var(--og-muted)] md:text-xl">
            We respond within one business day.
          </p>
        </div>
      </section>

      <Reveal className="px-4 pb-16 md:px-8 md:pb-20 lg:px-12">
        <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
                Email
              </p>
              <a
                href="mailto:hello@orangegoods.co"
                className="mt-2 block text-2xl font-semibold text-[var(--og-blue)] transition hover:text-[var(--og-orange)]"
              >
                hello@orangegoods.co
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
                Text
              </p>
              <a
                href="sms:+12133764663"
                className="mt-2 block text-2xl font-semibold text-[var(--og-blue)] transition hover:text-[var(--og-orange)]"
              >
                (213) 376-4663
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
                Instagram
              </p>
              <a
                href="https://www.instagram.com/orangegoods"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-2xl font-semibold text-[var(--og-blue)] transition hover:text-[var(--og-orange)]"
              >
                @orangegoods
              </a>
            </div>
            <p className="text-lg leading-8 text-[var(--og-muted)]">
              Based in Los Angeles, CA
            </p>
          </div>

          <form className="grid gap-5 border border-[#0B32A0]/20 bg-white/75 p-6 md:p-8">
            <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--og-blue)]">
              Name
              <input
                name="name"
                className="min-h-12 border border-[#0B32A0]/20 bg-white px-4 text-base font-normal normal-case tracking-normal text-[var(--og-ink)] outline-none transition focus:border-[var(--og-orange)]"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--og-blue)]">
              Company
              <input
                name="company"
                className="min-h-12 border border-[#0B32A0]/20 bg-white px-4 text-base font-normal normal-case tracking-normal text-[var(--og-ink)] outline-none transition focus:border-[var(--og-orange)]"
              />
            </label>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--og-blue)]">
                Email
                <input
                  name="email"
                  type="email"
                  className="min-h-12 border border-[#0B32A0]/20 bg-white px-4 text-base font-normal normal-case tracking-normal text-[var(--og-ink)] outline-none transition focus:border-[var(--og-orange)]"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--og-blue)]">
                Phone optional
                <input
                  name="phone"
                  type="tel"
                  className="min-h-12 border border-[#0B32A0]/20 bg-white px-4 text-base font-normal normal-case tracking-normal text-[var(--og-ink)] outline-none transition focus:border-[var(--og-orange)]"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--og-blue)]">
              What are you looking for?
              <select
                name="projectType"
                className="min-h-12 border border-[#0B32A0]/20 bg-white px-4 text-base font-normal normal-case tracking-normal text-[var(--og-ink)] outline-none transition focus:border-[var(--og-orange)]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select one
                </option>
                {projectOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--og-blue)]">
              Message
              <textarea
                name="message"
                rows={6}
                className="border border-[#0B32A0]/20 bg-white px-4 py-3 text-base font-normal normal-case tracking-normal text-[var(--og-ink)] outline-none transition focus:border-[var(--og-orange)]"
              />
            </label>
            <Link
              href="mailto:hello@orangegoods.co?subject=Orange%20Goods%20Contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--og-orange)] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d73b05] md:w-fit"
            >
              SEND MESSAGE
            </Link>
          </form>
        </section>
      </Reveal>
    </main>
  );
}
