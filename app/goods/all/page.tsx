import Image from "next/image";
import Link from "next/link";
import { DiscoveryLinksSection } from "@/components/DiscoveryLinksSection";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { Reveal } from "@/components/Reveal";
import { AllGoodsBrowser } from "@/components/AllGoodsBrowser";
import { startProjectHref } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import {
  buildGoodsBrowserItems,
  type GoodsBrowserCategory,
  type GoodsBrowserProductionPath,
} from "@/lib/goods-browser";

export const metadata = buildMetadata({
  title: "All Goods — Orange Goods",
  description:
    "Browse the live Orange Goods customizer catalog for hats, tote bags, beanies, apparel, and other branded goods from one shared browser.",
  path: "/goods/all",
  image: "/images/gallery/goods-hero-misc-dscf4876.jpg",
  imageAlt: "Orange Goods customizer catalog",
});

const browserSupportHighlights = [
  {
    label: "Full Custom",
    value: "Built from scratch when every detail matters.",
  },
  {
    label: "Quick Turn",
    value: "Premium blanks decorated fast when timing matters most.",
  },
  {
    label: "MOQ",
    value: "Most merch programs start at 100 pieces total.",
  },
];

const browserProcess = [
  {
    title: "Share the brief",
    body: "Tell us what product you need, roughly how many pieces, your in-hands date, and whether you already have artwork.",
    image: "/images/gallery/headwear-brief-direction-mg-9422-v2.jpg",
    imagePosition: "center 58%",
    accent: "Start with the goal",
  },
  {
    title: "We guide the right path",
    body: "We help narrow Full Custom versus Quick Turn, then dial in the style, decoration, and price direction that fits the project.",
    image: "/images/gallery/full-custom-materials-mg-9406.jpg",
    imagePosition: "center 46%",
    accent: "Choose the lane",
  },
  {
    title: "Mockup, quote, production",
    body: "Once the direction is right, we move into pricing, mockups, approvals, and tracked delivery.",
    image: "/images/gallery/quick-turn-fish-at-sea-mg-6362.jpg",
    imagePosition: "46% 52%",
    accent: "Move it forward",
  },
];

const browserFaqs = [
  {
    question: "What do you need from me to get started?",
    answer:
      "A product idea, quantity, in-hands date, decoration direction, and any artwork or references you already have. If some of that is still loose, that's fine.",
  },
  {
    question: "How do I know whether to choose Full Custom or Quick Turn?",
    answer:
      "Choose Full Custom when you want to change the actual product build. Choose Quick Turn when the blank already feels right and you mainly need decoration and speed.",
  },
  {
    question: "Can I mix products to hit MOQ?",
    answer:
      "Usually yes, as long as the overall program makes sense and the decoration direction stays aligned. If you want to mix hats, tees, totes, or other goods, ask and we'll map it out.",
  },
  {
    question: "Can you help if I don't see the exact product here?",
    answer:
      "Yes. The browser is the live starting point, not the full universe. If you do not see the exact item you want, contact us and we'll guide the closest route or build it another way.",
  },
];
const allGoodsDiscoveryLinks = [
  {
    eyebrow: "Guide",
    title: "Full custom hats vs quick turn hats",
    description:
      "The cleanest explanation of when to build from scratch and when a premium blank will get you there faster.",
    href: "/insights/full-custom-hats-vs-quick-turn-hats",
    cta: "Read guide",
  },
  {
    eyebrow: "Case Study",
    title: "See how Boatsetter tied multiple products together",
    description:
      "A useful example of hats, towels, and bags all working as one coastal goods system instead of isolated items.",
    href: "/case-studies/boatsetter-coastal-goods-system",
    cta: "View case study",
  },
  {
    eyebrow: "Service",
    title: "Need help choosing the right path first?",
    description:
      "Use the How We Work page if the bigger decision is still the approach itself: Full Custom, Quick Turn, or merch-first design support.",
    href: "/services",
    cta: "See our process",
  },
];

type AllGoodsPageProps = {
  searchParams?: Promise<{
    search?: string;
    category?: string;
    productionPath?: string;
    type?: string;
    brand?: string;
    color?: string;
    fit?: string;
    price?: string;
    page?: string;
    perPage?: string;
  }>;
};

function parseCategory(value: string | undefined): GoodsBrowserCategory | "all" {
  switch (value) {
    case "hats":
    case "beanies":
    case "apparel":
    case "blankets":
    case "drinkware":
    case "bags":
    case "totes":
    case "accessories":
    case "socks":
      return value;
    default:
      return "all";
  }
}

function parseProductionPath(value: string | undefined): GoodsBrowserProductionPath | "all" {
  switch (value) {
    case "full-custom":
    case "quick-turn":
      return value;
    default:
      return "all";
  }
}

function parsePositiveInteger(value: string | undefined, fallback: number) {
  const parsed = Number.parseInt(value ?? "", 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export default async function AllGoodsPage({ searchParams }: AllGoodsPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const items = buildGoodsBrowserItems();
  const initialCategory = parseCategory(resolvedSearchParams?.category);
  const initialProductionPath = parseProductionPath(resolvedSearchParams?.productionPath);
  const initialPage = parsePositiveInteger(resolvedSearchParams?.page, 1);
  const initialPageSize = parsePositiveInteger(resolvedSearchParams?.perPage, 48);

  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-14 text-white md:px-8 md:py-20 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/goods-hero-misc-dscf4876.jpg"
          inset="-0.75%"
          position="center 36%"
          speed={0.1}
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/46" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/78 via-[#1C1C1C]/58 to-[#1C1C1C]/28" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
            Customize
          </p>
          <h1 className="mt-4 max-w-5xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
            Build your merch
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82 md:text-xl">
            Compare custom hats, apparel, beanies, totes, and other goods across categories, then narrow by color, fit, price point, and production path to find the right direction.
          </p>
        </div>
      </section>

      <section id="styles-catalog" className="pt-8 md:pt-10">
        <AllGoodsBrowser
          items={items}
          initialSearch={resolvedSearchParams?.search}
          initialCategory={initialCategory}
          initialProductionPath={initialProductionPath}
          initialType={resolvedSearchParams?.type}
          initialBrand={resolvedSearchParams?.brand}
          initialSelectedColor={resolvedSearchParams?.color}
          initialFit={resolvedSearchParams?.fit}
          initialPrice={resolvedSearchParams?.price as
            | "all"
            | "under-15"
            | "15-25"
            | "25-40"
            | "40-plus"
            | undefined}
          initialPage={initialPage}
          initialPageSize={initialPageSize}
          showProductionPathToggle
          productionPathHelperText={
            <>
              Full Custom: built completely from scratch. Quick Turn: premium blanks decorated.
            </>
          }
        />
      </section>

      <Reveal className="px-4 py-10 md:px-8 md:py-12 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <div className="grid gap-5 lg:grid-cols-[0.76fr_1.24fr]">
            <div className="relative min-h-[18rem] overflow-hidden rounded-[1.75rem] border border-[#0B32A0]/15 bg-[#d9c5ae]">
              <Image
                src="/images/gallery/full-custom-feelingswell-hat-labbet-app.jpg"
                alt="Orange Goods custom merchandise process"
                fill
                sizes="(min-width: 1024px) 32vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "center 58%" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,28,28,0.08),rgba(28,28,28,0.02)_48%,rgba(28,28,28,0.34))]" />
            </div>
              <div className="rounded-[1.75rem] border border-[#0B32A0]/15 bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(255,247,238,0.98))] p-6 shadow-[0_22px_52px_rgba(11,50,160,0.08)] md:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--og-orange)]">
                Need help?
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#0B32A0] md:text-[2.2rem]">
                Tell us what you&apos;re making.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--og-muted)]">
                We&apos;ll help with product, decoration, quantity, and timing.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {browserSupportHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="min-h-[8.2rem] rounded-[1.25rem] border border-[#0B32A0]/12 bg-white px-4 py-4 shadow-[0_12px_26px_rgba(11,50,160,0.06)]"
                  >
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#0B32A0]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={startProjectHref}
                  className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[var(--og-orange)] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-[3px] hover:brightness-105"
                >
                  Start a project
                </Link>
                <Link
                  href="/our-process"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-[#0B32A0] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#0B32A0] transition hover:-translate-y-[3px] hover:bg-[#0B32A0] hover:text-white"
                >
                  See our process
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-10 md:px-8 md:py-12 lg:px-12">
        <section id="process" className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
              How it works
            </p>
            <h2 className="mt-[5px] text-balance text-[2.7rem] font-semibold leading-[0.92] text-[var(--og-blue)] md:text-[4.1rem] md:leading-[0.9]">
              A simple path to finished goods
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--og-muted)] md:text-lg">
              Start with a direction. We help with the last decisions that actually matter.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {browserProcess.map((step, index) => (
              <article
                key={step.title}
                className="overflow-hidden rounded-[1.75rem] border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)]"
              >
                <div className="relative aspect-[5/4] overflow-hidden bg-[#d8c3aa]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: step.imagePosition }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,28,28,0.12),rgba(28,28,28,0.03)_45%,rgba(28,28,28,0.34))]" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-2 shadow-[0_14px_28px_rgba(20,20,20,0.14)] backdrop-blur-sm">
                    <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#0B32A0]">
                      {step.accent}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p
                    className={`text-sm font-semibold uppercase tracking-[0.22em] ${
                      index % 2 === 0 ? "text-[var(--og-orange)]" : "text-[var(--og-blue)]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-[#0B32A0]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[var(--og-muted)]">
                    {step.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 pt-10 pb-16 md:px-8 md:pt-12 lg:px-12">
        <section id="faq" className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
              FAQ
            </p>
            <h2 className="mt-[5px] text-balance text-[2.4rem] font-semibold leading-[0.96] text-[var(--og-blue)] md:text-[3.5rem]">
              A few common questions
            </h2>
          </div>
          <div className="mt-8 grid gap-3">
            {browserFaqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-[1.5rem] border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)] p-5"
              >
                <summary className="cursor-pointer text-lg font-semibold text-[#0B32A0]">
                  {faq.question}
                </summary>
                <p className="mt-3 text-base leading-7 text-[var(--og-muted)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 pb-12 md:px-8 md:pb-16 lg:px-12">
        <DiscoveryLinksSection
          eyebrow="Useful Next Steps"
          title="A few pages that make the browser easier to use"
          description="If you know you want branded goods but still need help narrowing the product or path, these are the most useful pages to read next."
          items={allGoodsDiscoveryLinks}
        />
      </Reveal>

      <Reveal className="px-4 pb-20 md:px-8 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="relative min-h-[18rem] overflow-hidden rounded-[1.75rem] border border-[#0B32A0]/15 bg-[#d8c3aa]">
              <Image
                src="/images/gallery/headwear-brief-direction-mg-9422-v2.jpg"
                alt="Orange Goods team helping with custom merchandise"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "center 54%" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,28,28,0.06),rgba(28,28,28,0.02)_46%,rgba(28,28,28,0.46))]" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
                  Contact us
                </p>
                <h2 className="mt-3 max-w-lg text-3xl font-semibold leading-tight text-white md:text-[2.3rem]">
                  Want to talk it through with our team?
                </h2>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[#0B32A0]/15 bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(255,247,238,0.98))] p-6 shadow-[0_22px_52px_rgba(11,50,160,0.08)] md:p-7">
              <p className="text-base leading-7 text-[var(--og-muted)]">
                If you want help choosing the right product, decoration method, quantity, or timing,
                we can guide the next step and tighten the direction with you.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.25rem] border border-[#0B32A0]/12 bg-white px-4 py-4 shadow-[0_12px_26px_rgba(11,50,160,0.06)]">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                    What we help with
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#0B32A0]">
                    Product selection, decoration direction, quantities, timing, and next-step recommendations.
                  </p>
                </div>
                <div className="rounded-[1.25rem] border border-[#0B32A0]/12 bg-white px-4 py-4 shadow-[0_12px_26px_rgba(11,50,160,0.06)]">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                    Best way to start
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#0B32A0]">
                    Send the rough idea, your in-hands date, and quantity range. We can shape the rest from there.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[var(--og-orange)] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-[3px] hover:brightness-105"
                >
                  Contact us
                </Link>
                <Link
                  href={startProjectHref}
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-[#0B32A0] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#0B32A0] transition hover:-translate-y-[3px] hover:bg-[#0B32A0] hover:text-white"
                >
                  Start a project
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
