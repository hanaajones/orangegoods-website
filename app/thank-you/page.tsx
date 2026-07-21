import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import ThankYouPixels from "./ThankYouPixels";

export const metadata = {
  title: "Thank You — Orange Goods",
  robots: { index: false, follow: false }, // keep off search engines
};

const thankYouFaqs = [
  {
    question: "What happens next?",
    answer: "We review the submission, check the details, and follow up with the right next step.",
  },
  {
    question: "How quickly will we hear back?",
    answer: "Most inquiries get a response within one business day.",
  },
  {
    question: "Need to add something?",
    answer: "Email us any extra references, notes, or changes and we will attach them to your submission.",
  },
];

export default function ThankYouPage() {
  return (
    <main className="bg-[var(--og-warm-grey)] pb-20">
      <Suspense fallback={null}>
        <ThankYouPixels />
      </Suspense>

      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <Image
          src="/images/gallery/full-custom-materials-mg-9406.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 48%" }}
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/38" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/68 via-[#1C1C1C]/52 to-[#1C1C1C]/22" />

        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
            Orange Goods
          </p>
          <h1 className="mt-5 text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
            Thank you!
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 md:text-lg">
            We will review and contact you shortly.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/goods" className="btn-og inline-flex">
              View our goods
            </Link>
            <Link
              href="/"
              className="inline-flex items-center rounded-xl border-2 border-white/28 px-6 py-3 font-[var(--font-noir-alt)] text-base font-bold uppercase tracking-normal text-white transition hover:-translate-y-[3px]"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] border-[3px] border-[#081E6F] bg-white px-6 py-8 text-[#1C1C1C] md:px-10 md:py-9">
          <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr_1fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
                Email
              </p>
              <a
                href="mailto:hello@orangegoods.co"
                className="mt-2 block text-lg font-semibold text-[var(--og-blue)] transition hover:text-[var(--og-orange)] md:text-xl"
              >
                hello@orangegoods.co
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
                Phone
              </p>
              <a
                href="sms:+12133764663"
                className="mt-2 inline-flex min-h-[42px] items-center justify-center rounded-xl border-2 border-[#0B32A0] bg-white px-5 py-[0.68rem] font-[var(--font-noir-alt)] text-sm font-bold uppercase tracking-normal text-[#0B32A0] transition hover:-translate-y-[3px] md:w-fit"
              >
                Text us
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
                className="mt-2 block text-lg font-semibold text-[var(--og-blue)] transition hover:text-[var(--og-orange)] md:text-xl"
              >
                @orangegoods
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 md:px-8 md:pb-16 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-[#0B32A0]/10 bg-white/92 p-6 md:p-8">
            <div className="grid gap-5 rounded-[1.75rem] border border-[#0B32A0]/12 bg-[linear-gradient(135deg,#0B2A73_0%,#163E8F_52%,#1C4AA3_100%)] p-5 text-white md:grid-cols-[1.08fr_0.92fr] md:items-center md:p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF9A63]">
                  Hands-on process
                </p>
                <h2 className="mt-3 text-3xl leading-none text-white md:text-4xl">
                  We&apos;ll take it from here.
                </h2>
                <p className="mt-4 text-base leading-7 text-white/78 md:text-lg">
                  Product guidance, decoration, and clear follow-through all stay in one place.
                </p>
              </div>

              <div className="relative min-h-[14rem] overflow-hidden rounded-[1.5rem] border-[3px] border-white/18 bg-[#D9D0C1] md:min-h-[17rem]">
                <Image
                  src="/images/gallery/design-hero-ocean-ocean-hoodie.jpg"
                  alt="Orange Goods coastal California product photo"
                  fill
                  sizes="(min-width: 1024px) 28vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#0B32A0]/10 bg-white/92 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
              FAQ
            </p>
            <div className="mt-5 space-y-4">
              {thankYouFaqs.map((faq) => (
                <div key={faq.question} className="rounded-[1.5rem] border border-[#0B32A0]/10 bg-[var(--og-warm-grey)] p-4">
                  <h3 className="text-lg font-semibold text-[var(--og-blue)]">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#1C1C1C]/72">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
