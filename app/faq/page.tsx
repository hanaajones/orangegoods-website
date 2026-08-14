import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { Reveal } from "@/components/Reveal";

const sections = [
  {
    title: "ORDERING",
    questions: [
      {
        question: "What's the minimum order quantity?",
        answer:
          "Most custom programs start at 100 pieces. We usually keep that within one product style and one decoration setup.",
      },
      {
        question: "How long does it take?",
        answer:
          "Quick Turn is usually 1-2 weeks once artwork is approved. Full Custom typically takes 3-6 weeks from final approval, depending on the product, materials, and production path.",
      },
      {
        question: "What's the difference between Full Custom and Quick Turn?",
        answer:
          "Full Custom is fully custom - your fabric, your shape, built from scratch. Quick Turn uses premium blanks decorated locally in downtown LA for faster turns.",
      },
    ],
  },
  {
    title: "DESIGN",
    questions: [
      {
        question: "Do I need to have artwork ready?",
        answer:
          "No. We can work from a rough idea, a brief, screenshots, or a strong reference folder. If you already have art, vector files (.ai, .eps, .pdf) are best.",
      },
      {
        question: "Can you design my merch for me?",
        answer:
          "Yes. We offer in-house design support for merch graphics, packaging, labels, trims, and production-ready artwork.",
      },
    ],
  },
  {
    title: "PROCESS",
    questions: [
      {
        question: "How do I place an order?",
        answer:
          "Once we align on product, quantity, decoration, and pricing, we invoice the order and collect payment in full.",
      },
      {
        question: "What are the next steps?",
        answer:
          "After payment, we start the tech pack, confirm artwork and specs, send approvals, then move into production and delivery.",
      },
    ],
  },
  {
    title: "PRICING",
    questions: [
      {
        question: "How is pricing determined?",
        answer:
          "Pricing depends on product, quantity, materials, decoration method, and complexity. We quote every project individually so the number reflects the actual build.",
      },
      {
        question: "Are there hidden fees?",
        answer:
          "No. We quote the project clearly up front so you can see the real number before moving forward.",
      },
      {
        question: "What's your payment structure?",
        answer: "We take payment in full, then we start on the tech pack and approval process.",
      },
    ],
  },
  {
    title: "SHIPPING",
    questions: [
      {
        question: "Do you ship internationally?",
        answer:
          "We primarily ship within the US, but we can quote international delivery when the project calls for it.",
      },
      {
        question: "Can you split ship orders to multiple locations?",
        answer:
          "Yes. We can usually break shipments across offices, stores, teams, or event locations when the project calls for it. Let us know early so we can build it into the quote and delivery plan.",
      },
    ],
  },
  {
    title: "PRODUCTS",
    questions: [
      {
        question: "What products do you offer?",
        answer:
          "Hats, apparel, socks, drinkware, bags, accessories, packaging, blankets, towels, and more. If it fits the brand, we can usually source or build it.",
      },
      {
        question: "Can I see samples before ordering?",
        answer:
          "Yes. We can usually provide blanks, references, or product samples depending on the category and timeline.",
      },
    ],
  },
];

const spotlightCards = [
  {
    title: "Need it fast?",
    body: "Quick Turn programs can move in 1-2 weeks with local embroidery or screen print.",
    image: "/images/gallery/design-ready-to-create-mg-6305.jpg",
    href: "/goods",
    cta: "Explore Goods",
    className: "lg:col-span-6",
    imagePosition: "center 62%",
  },
  {
    title: "Building from scratch?",
    body: "Full Custom is where we dial in materials, trims, shape, and finishing details from the ground up.",
    image: "/images/gallery/full-custom-materials-mg-9406.jpg",
    href: "/goods",
    cta: "Explore Goods",
    className: "lg:col-span-6",
    imagePosition: "center 48%",
  },
];

const nextSteps = [
  {
    title: "Explore goods",
    body: "See the categories, materials, and product lanes first.",
    href: "/goods",
    cta: "Explore Goods",
    image: "/images/gallery/bags-boatsetter-tote-angle.jpg",
    imagePosition: "center 48%",
  },
  {
    title: "Design help",
    body: "Need graphics, merch art, or production-ready cleanup?",
    href: "/design",
    cta: "View Design",
    image: "/images/gallery/design-graphics-mcalister-088.jpg",
    imagePosition: "center 42%",
  },
  {
    title: "Start a project",
    body: "Send the idea, quantity, and timing. We will guide the next move.",
    href: "/contact",
    cta: "Start a Project",
    image: "/images/gallery/full-custom-materials-mg-9406.jpg",
    imagePosition: "center 50%",
  },
];

export default function FaqPage() {
  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/packaging-stanford-medicine-thinkhealth-craft-1.jpg"
          position="center 42%"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/38" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/62 via-[#1C1C1C]/44 to-[#1C1C1C]/16" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
            Before You Start
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            Straight answers on minimums, timelines, design help, product types, and what the process actually looks like.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="btn-og inline-flex"
            >
              Start a Project
            </Link>
            <Link
              href="/goods"
              className="btn-og-white inline-flex"
            >
              Explore Goods
            </Link>
          </div>
        </div>
      </section>

      <Reveal className="bg-white px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <div className="grid gap-4 lg:grid-cols-12">
            {spotlightCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className={`group relative min-h-[20rem] overflow-hidden rounded-[1.9rem] border-[3px] border-[#0B32A0] ${card.className}`}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  style={{ objectPosition: card.imagePosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/90 via-[#1C1C1C]/58 to-[#1C1C1C]/16" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/72">
                    Quick Read
                  </p>
                  <h2 className="mt-3 max-w-md text-3xl uppercase leading-none text-[var(--og-orange)] md:text-[2.15rem]">
                    {card.title}
                  </h2>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-white/84 md:text-base">
                    {card.body}
                  </p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-white">
                    {card.cta}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="relative overflow-hidden bg-[#F7F4ED] px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto max-w-4xl">
          <div className="grid gap-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-4xl uppercase leading-none text-[var(--og-orange)] md:text-5xl">
                  {section.title}
                </h2>
                <div className="mt-5 grid gap-3">
                  {section.questions.map((item) => (
                    <details
                      key={item.question}
                      className="group rounded-[1.25rem] border border-[#0B32A0]/14 bg-white px-5 py-5 transition open:border-[#FF4200]/45"
                    >
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold leading-7 text-[#0B32A0] marker:hidden md:text-[1.05rem]">
                        <span>{item.question}</span>
                        <span className="mt-0.5 text-2xl leading-none text-[var(--og-orange)] transition group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-4 border-t border-[#0B32A0]/10 pt-4 text-[0.98rem] leading-7 text-[var(--og-muted)]">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="bg-white px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0B32A0]/72">
              Next Steps
            </p>
            <h2 className="mt-4 text-4xl uppercase leading-none text-[#0B32A0] md:text-5xl">
              Ready to start?
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {nextSteps.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative min-h-[21rem] overflow-hidden rounded-[1.8rem] border-[3px] border-[#0B32A0] transition hover:border-[#FF4200]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  style={{ objectPosition: item.imagePosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/88 via-[#1C1C1C]/34 to-[#1C1C1C]/10" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="text-[1.9rem] uppercase leading-none text-white md:text-[2.05rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-white/84 md:text-base">
                    {item.body}
                  </p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--og-orange)]">
                    {item.cta}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Reveal>

      <CTASection
        title="Still have questions?"
        description="Send us a note and we’ll point you in the right direction."
        buttonLabel="Contact Us"
        buttonHref="/contact"
        backgroundImage="/images/gallery/hat-og-patch-lifestyle.jpg"
        backgroundImagePosition="center 52%"
        showImageOverlay={false}
        eyebrow=""
        wrapperClassName="border-t border-[#0B32A0]/15"
      />
    </main>
  );
}
