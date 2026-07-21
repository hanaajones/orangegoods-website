import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ShoppableProduct } from "@/components/ShoppableProduct";

const sockTiers = [
  {
    label: "100 pairs",
    corePrice: "$8.50 / pair",
    deluxePrice: "$9.90 / pair",
    note: "Starting range. Final pricing depends on construction, yarn count, packaging, and freight.",
    coreFeatures: [
      "Custom jacquard knit with up to 6 yarn colors",
      "Crew, quarter, or no-show construction",
      "Heel, toe, and cuff color blocking",
      "Size-run planning and proofing",
      "Design guidance from kickoff to approval",
    ],
    deluxeFeatures: [
      "Everything in Program Core",
      "Branded header card or belly band",
      "Sole hit or secondary knit detail",
      "Higher-detail packaging review",
      "Kitting guidance for mailers or gifting",
    ],
  },
  {
    label: "250 pairs",
    corePrice: "$7.40 / pair",
    deluxePrice: "$8.60 / pair",
    note: "A strong range for welcome kits, event programs, and first retail runs.",
    coreFeatures: [
      "Custom jacquard knit with up to 6 yarn colors",
      "Crew, quarter, or no-show construction",
      "Heel, toe, and cuff color blocking",
      "Size-run planning and proofing",
      "Design guidance from kickoff to approval",
    ],
    deluxeFeatures: [
      "Everything in Program Core",
      "Branded header card or belly band",
      "Sole hit or secondary knit detail",
      "Higher-detail packaging review",
      "Kitting guidance for mailers or gifting",
    ],
  },
  {
    label: "500 pairs",
    corePrice: "$6.50 / pair",
    deluxePrice: "$7.75 / pair",
    note: "Best fit for broader campaigns, retail inventory, and repeatable merch programs.",
    coreFeatures: [
      "Custom jacquard knit with up to 6 yarn colors",
      "Crew, quarter, or no-show construction",
      "Heel, toe, and cuff color blocking",
      "Size-run planning and proofing",
      "Design guidance from kickoff to approval",
    ],
    deluxeFeatures: [
      "Everything in Program Core",
      "Branded header card or belly band",
      "Sole hit or secondary knit detail",
      "Higher-detail packaging review",
      "Kitting guidance for mailers or gifting",
    ],
  },
  {
    label: "1000 pairs",
    corePrice: "$5.80 / pair",
    deluxePrice: "$6.95 / pair",
    note: "Ask about larger runs, mixed size ratios, and multi-SKU packaging programs.",
    coreFeatures: [
      "Everything in smaller tiers",
      "Volume-minded size planning",
      "Design guidance from kickoff to approval",
      "Program review for retail or large-scale distribution",
      "Freight planning support",
    ],
    deluxeFeatures: [
      "Everything in Program Core",
      "Branded header card or belly band",
      "Sole hit or secondary knit detail",
      "Higher-detail packaging review",
      "Program review for retail or large-scale distribution",
    ],
  },
];

const sockVariants = [
  {
    name: "Crew",
    modelNum: "OG-S01",
    description:
      "The most versatile starting point for gifting, retail, team gear, and everyday branded wear.",
    image: "/images/gallery/socks-verve-gd.jpg",
  },
  {
    name: "Quarter",
    modelNum: "OG-S02",
    description:
      "A cleaner athletic cut for active kits, summer programs, hospitality drops, and event giveaways.",
    image: "/images/gallery/socks-firestone-_mg_0158.jpg",
  },
  {
    name: "No-show",
    modelNum: "OG-S03",
    description:
      "Low-profile pairs that keep the branding subtle on-foot and shift more attention to packaging and sole detail.",
    image: "/images/gallery/contact-socks-mg-2443.jpg",
  },
  {
    name: "Gift set",
    modelNum: "OG-S04",
    description:
      "A bundled multi-pair direction for elevated mailers, onboarding kits, seasonal gifting, or simple retail sets.",
    image: "/images/gallery/socks-verve-gd-dscf4861.jpg",
  },
];

const sockTabs = [
  {
    label: "Overview",
    content: (
      <div className="space-y-3">
        <p>
          Custom socks are one of the easiest categories to make useful, giftable, and still
          brand-forward. They travel well, size cleanly, and give you more knit real estate than
          most people expect.
        </p>
        <p>
          Most programs start with crew socks, then adjust the cut, yarn feel, cuff height, and
          packaging based on whether the end use is retail, a kit insert, or a giveaway.
        </p>
      </div>
    ),
  },
  {
    label: "Knit details",
    content: (
      <div className="space-y-3">
        <p>
          The main branding route is custom jacquard knit. That covers leg graphics, cuff stripes,
          heel and toe blocking, and woven-in logo moments without adding bulky decoration.
        </p>
        <ul className="space-y-2 text-sm leading-6 text-[var(--og-muted)]">
          <li>Full-pattern leg graphics</li>
          <li>Heel, toe, and cuff contrast</li>
          <li>Sole messages or hidden copy</li>
          <li>Performance yarn or cushioned-footbed upgrades when needed</li>
        </ul>
      </div>
    ),
  },
  {
    label: "Packaging",
    content: (
      <div className="space-y-3">
        <p>
          Packaging is where socks start feeling noticeably more premium. Header cards, belly
          bands, and simple backers do a lot when the item needs to live in a kit or on a shelf.
        </p>
        <p>
          If the program is mailer-first or gift-first, we usually spend more energy on pairing and
          presentation than on overcomplicating the sock itself.
        </p>
      </div>
    ),
  },
  {
    label: "Timing",
    content: (
      <div className="space-y-3">
        <p>
          Most custom sock programs land in roughly 4 to 6 weeks after proof approval, depending
          on the knit complexity and whether custom packaging is part of the scope.
        </p>
        <p>
          Early conversations help if you need size planning, kit assembly, or multiple pairings
          across one larger merch program.
        </p>
      </div>
    ),
  },
];

const sockAddOnGroups = [
  {
    heading: "Packaging",
    note: "Most requested add-ons",
    items: [
      { label: "Header card", price: "+$0.40" },
      { label: "Belly band", price: "+$0.55" },
      { label: "Custom backer", price: "+$0.85" },
    ],
  },
  {
    heading: "Construction",
    note: "Common upgrades",
    items: [
      { label: "Cushioned footbed", price: "+$0.35" },
      { label: "Performance yarn", price: "+$0.60" },
      { label: "Sole message", price: "+$0.25" },
    ],
  },
  {
    heading: "Program support",
    items: [
      { label: "Split size runs", price: "Included" },
      { label: "Multi-pair gift set", price: "Custom quote" },
      { label: "Mailer or kit packing", price: "Custom quote" },
    ],
  },
];

const programCards = [
  {
    eyebrow: "Welcome kits",
    title: "Easy to distribute",
    body: "Socks are simple to size, easy to pack, and strong when one useful item needs to make the whole kit feel more complete.",
  },
  {
    eyebrow: "Retail add-ons",
    title: "Low-footprint, high-margin energy",
    body: "They work well when you want something lower-cost than outerwear but more considered than a throwaway promo item.",
  },
  {
    eyebrow: "Events + gifting",
    title: "A category people actually keep",
    body: "This is one of the safer choices when the goal is repeat wear instead of a short single-day brand impression.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Pick the build",
    description: "Choose the silhouette, quantity, and whether the program needs plain packaging or a more polished presentation.",
  },
  {
    step: "02",
    title: "Dial in the knit",
    description: "We map the pattern, yarn direction, sizing, and any sole or cuff details before proof approval.",
  },
  {
    step: "03",
    title: "Ship it cleanly",
    description: "Once production is approved, we help land the pairs in bulk, in kits, or in simple gift-ready sets.",
  },
];

const faqs = [
  {
    question: "What is the MOQ for custom socks?",
    answer: "Most custom sock programs start at 100 pairs total.",
  },
  {
    question: "How long do custom socks usually take?",
    answer: "A typical lead time is about 4 to 6 weeks after proof approval, depending on knit and packaging complexity.",
  },
  {
    question: "Can the design cover most of the sock?",
    answer: "Yes. Full jacquard knit is the most common direction and allows broad pattern coverage across the leg, cuff, heel, toe, and sole.",
  },
  {
    question: "Do socks work better for retail or for giveaways?",
    answer: "Both. They are useful enough for giveaways and clean enough for retail once the packaging and pairing are handled well.",
  },
];

export default function SocksPage() {
  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-12 text-white md:px-8 md:py-[4.5rem] lg:px-12">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/socks-verve-gd.jpg"
            alt="Custom Orange Goods socks arranged as a branded set"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 42%" }}
          />
        </div>
        <div className="absolute inset-0 bg-[#1C1C1C]/46" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/74 via-[#1C1C1C]/50 to-[#1C1C1C]/24" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
            OG Crafted
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
            Custom Socks
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            A lighter, easier merch category that still gives you real room for branding, gifting,
            retail presentation, and repeat wear.
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-white/78">
            100+ pairs. Usually 4-6 weeks after proof approval.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="#shop" className="btn-og inline-flex">
              See pricing
            </Link>
            <Link href="/contact?product=socks" className="btn-og-white inline-flex">
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="overflow-hidden rounded-[1.9rem] border-[3px] border-[#0B32A0] text-white">
            <div className="relative min-h-[24rem]">
              <Image
                src="/images/gallery/socks-verve-gd-dscf4863.jpg"
                alt="Custom socks shown in branded packaging"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "center 48%" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(72,72,72,0.72),rgba(28,28,28,0.46))]" />
              <div className="relative flex h-full flex-col justify-end p-8 md:p-10">
                <span className="inline-flex w-fit rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  Why socks work
                </span>
                <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-none md:text-5xl">
                  Simple to order. Easy to keep.
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-7 text-white/82">
                  Socks sit in a useful middle ground: more distinctive than a basic promo item,
                  but less operationally heavy than outerwear or cut-and-sew apparel.
                </p>
              </div>
            </div>
          </article>

          <div className="grid gap-4">
            {programCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.75rem] border border-[#0B32A0]/15 bg-white p-6 shadow-[0_18px_50px_rgba(8,30,111,0.07)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                  {card.eyebrow}
                </p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#0B32A0]">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--og-muted)] md:text-base">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="px-4 py-8 md:px-8 lg:px-12">
        <div className="mx-auto mb-8 max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
            Shop the category
          </p>
          <h2
            className="mt-3 text-4xl font-semibold text-[var(--og-blue)] md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Start with the sock, then tune the program.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--og-muted)] md:text-base">
            This keeps the hats-page shopping pattern, but in a lighter format that fits socks
            better: pick the build, see the pricing bands, and get a clearer sense of the packaging
            and upgrade path before reaching out.
          </p>
        </div>

        <ShoppableProduct
          name="Custom Socks"
          tagline="Pick the silhouette, quantity, and program level. We will guide the knit, packaging, and finishing from there."
          image="/images/product/socks-lifestyle.jpg"
          tiers={sockTiers}
          variants={sockVariants}
          tabs={sockTabs}
          addOnGroups={sockAddOnGroups}
          ctaConfig={{
            basePath: "/contact",
            product: "socks",
            packageValues: {
              core: "program-core",
              deluxe: "program-deluxe",
            },
            projectSummaryPrefix: "Custom socks inquiry",
          }}
          ctaLabel="Start My Sock Project"
          eyebrowLabel="Shoppable"
          variantLabel="Sock build"
          packageLabels={{
            core: "Program Core",
            deluxe: "Program Deluxe",
          }}
          includedLabels={{
            core: "Program Core includes",
            deluxe: "Program Deluxe includes",
          }}
          optionsHeading="Packaging and upgrades"
        />
      </section>

      <section className="px-4 py-8 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-[1.9rem] border border-[#0B32A0]/15 bg-white p-6 md:p-7">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
              Process
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#0B32A0] md:text-5xl">
              How sock programs usually come together
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--og-muted)] md:text-base">
              Fewer moving parts than hats, but still enough choices that a little structure helps.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[1.5rem] border border-[#0B32A0]/10 bg-[rgba(255,248,241,0.88)] p-5"
              >
                <p
                  className={`text-sm font-semibold uppercase tracking-[0.22em] ${
                    index % 2 === 0 ? "text-[var(--og-orange)]" : "text-[var(--og-blue)]"
                  }`}
                >
                  {step.step}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[#0B32A0]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--og-muted)] md:text-base">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-4 py-8 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#0B32A0] md:text-5xl">
            Good to know before you start.
          </h2>
          <div className="mt-8 grid gap-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-[1.5rem] border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)] p-5"
              >
                <summary className="cursor-pointer text-lg font-semibold text-[#0B32A0]">
                  {faq.question}
                </summary>
                <p className="mt-3 text-base leading-7 text-[var(--og-muted)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to start your socks project?"
        description="Send the quantity, timing, and how you want the pairs to show up. We will help shape the right build."
        buttonLabel="Start a Project"
        buttonHref="/contact?product=socks"
      />
    </main>
  );
}
