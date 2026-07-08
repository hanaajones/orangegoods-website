import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Ready Made Screen Printing - Orange Goods",
  description:
    "Premium blank screen printing in Hermosa Beach, California. Fast local turns, vivid graphics, and goods in hand in 1-2 weeks.",
};

const anchorLinks = [
  { label: "Overview", href: "#overview" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Products", href: "#products" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
];

const processSteps = [
  {
    number: "01",
    title: "Pick the right blank",
    body: "Tees, hoodies, crews, totes, and other premium ready-made goods.",
  },
  {
    number: "02",
    title: "Approve the artwork",
    body: "We check scale, placements, ink count, and what will actually print well.",
  },
  {
    number: "03",
    title: "Print fast and clean",
    body: "Local production in Hermosa Beach, then straight to delivery or pickup.",
  },
];

const productCards = [
  {
    name: "Tees",
    description: "Big fronts, backs, sleeves, and retail-feeling graphic programs.",
    image: "/images/gallery/apparel-verve-gd-tee-verve_grateful-dead_tshirt_101.jpg",
    href: "/catalog/comfort-colors-1717",
    className: "lg:col-span-2 lg:min-h-[20rem]",
    position: "center 24%",
    imageClassName: "scale-[1.06] group-hover:scale-[1.12]",
  },
  {
    name: "Hoodies + fleece",
    description: "Pullover and zip styles that can carry a stronger graphic moment.",
    image: "/images/gallery/apparel-686-hoodie-front.jpg",
    href: "/catalog/as-colour-5101",
    className: "lg:min-h-[20rem]",
    position: "center 30%",
    imageClassName: "scale-[1.02] group-hover:scale-[1.08]",
  },
  {
    name: "Totes + bags",
    description: "Canvas programs where screen print gives you scale and clarity.",
    image: "/images/gallery/bags-boatsetter-tote-angle.jpg",
    href: "/goods/bags",
    className: "lg:min-h-[18rem]",
    position: "center 36%",
  },
  {
    name: "Long sleeves",
    description: "Good for event apparel, teams, and easy wearable layers.",
    image: "/images/gallery/apparel-upgrade-the-handfeel-img-1172.jpg",
    href: "/catalog/as-colour-5083",
    className: "lg:min-h-[18rem]",
    position: "center 40%",
  },
  {
    name: "Heavyweight blanks",
    description: "Better materials so the print has something worth sitting on.",
    image: "/images/gallery/apparel-blank-people-would-buy-dscf4886.jpg",
    href: "/goods/apparel",
    className: "lg:col-span-3 lg:min-h-[17rem]",
    position: "center 44%",
    imageClassName: "scale-[1.02] group-hover:scale-[1.06]",
  },
];

const galleryImages = [
  {
    title: "Verve tee",
    detail: "Graphic tee",
    image: "/images/gallery/apparel-verve-gd-tee2.jpg",
    href: "/catalog/comfort-colors-1717",
    className: "md:col-span-2 md:row-span-2",
    position: "center 32%",
  },
  {
    title: "Hoodie detail",
    detail: "Print close-up",
    image: "/images/gallery/apparel-686-hoodie-detail.jpg",
    href: "/catalog/as-colour-5101",
    className: "",
    position: "center 42%",
  },
  {
    title: "Boatsetter tote",
    detail: "Tote program",
    image: "/images/gallery/bags-boatsetter-tote.jpg",
    href: "/goods/bags",
    className: "",
    position: "center 38%",
  },
  {
    title: "Wearable palette",
    detail: "Merch styling",
    image: "/images/gallery/apparel-wearable-palette-bgxhj-23.jpg",
    href: "/goods/apparel",
    className: "md:col-span-2",
    position: "center 40%",
  },
];

const faqs = [
  {
    question: "What is the minimum order?",
    answer:
      "100 pieces. This path is meant for real merch runs, not tiny one-off prints.",
  },
  {
    question: "How fast can we get started?",
    answer:
      "Once the artwork, quantities, and blanks are approved, most jobs move in 1-2 weeks.",
  },
  {
    question: "Can you help us choose the right product?",
    answer:
      "Yes. If you know the vibe but not the exact blank yet, we can narrow it down for you.",
  },
  {
    question: "What files do you need?",
    answer:
      "Vector files are best: AI, EPS, SVG, or a clean PDF. If you do not have that yet, send what you have and we will tell you what is workable.",
  },
  {
    question: "When should we do screen print instead of embroidery?",
    answer:
      "Usually when the artwork wants more scale, more color, or a bigger graphic moment. Screen print is strongest for tees, fleece, and totes. Embroidery is better for smaller premium logo placements.",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className="mt-3 text-[2.45rem] uppercase leading-[0.94] text-[var(--og-blue)] md:text-[4rem]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#676767] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function ScreenPrintingPage() {
  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/apparel-verve-gd-tee-verve_grateful-dead_tshirt_101.jpg"
          position="center 26%"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/34" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/62 via-[#1C1C1C]/42 to-[#1C1C1C]/18" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
            Ready Made Service
          </p>
          <h1
            className="mt-5 text-[3.4rem] uppercase leading-[0.92] text-[var(--og-orange)] md:text-[5.25rem]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Screen Printing
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            Premium blank screen printing for brands that want a cleaner process, stronger visuals,
            and a fast path to quote.
          </p>
        </div>
      </section>

      <section className="px-4 pb-8 pt-8 md:px-8 md:pt-12 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-[2rem] border border-[var(--og-sand)] bg-[rgba(255,248,241,0.92)] p-6 shadow-[0_24px_80px_rgba(8,30,111,0.08)] md:grid-cols-[1fr_0.9fr] md:p-8">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
              Ready Made
            </p>
            <h2
              className="mt-4 text-5xl leading-none text-[var(--og-blue)] md:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready Made
              <br />
              Screen Printing
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-7 text-[var(--og-muted)] md:text-xl">
              Premium blank screen printing in Hermosa Beach, California. In your hands in 1-2
              weeks.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-og inline-flex">
                Start a Project
              </Link>
              <Link href="#pricing" className="btn-og-white inline-flex">
                See Pricing
              </Link>
            </div>
          </div>
          <div className="relative min-h-[24rem] overflow-hidden rounded-[1.75rem] bg-[#d5bba2]">
            <Image
              src="/images/gallery/apparel-verve-gd-tee-verve_grateful-dead_tshirt_040.jpg"
              alt="Screen printed Orange Goods apparel"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: "center 28%" }}
              priority
            />
          </div>
        </div>
      </section>

      <div className="sticky top-[5.75rem] z-30 border-y border-[#0B32A0]/20 bg-[rgba(251,247,241,0.9)] px-4 py-3 backdrop-blur md:px-8 lg:px-12">
        <nav className="mx-auto flex max-w-6xl justify-center gap-2 overflow-x-auto">
          {anchorLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-10 shrink-0 items-center rounded-xl border border-[#0B32A0]/20 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--og-blue)] transition hover:border-[var(--og-orange)] hover:text-[var(--og-orange)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <Reveal className="px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <section
          id="overview"
          className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1.04fr_0.96fr] md:items-stretch"
        >
          <article className="relative overflow-hidden rounded-[1.75rem] border-[3px] border-white bg-[#E4DFCD] shadow-[7px_7px_0px_#0B32A0]">
            <div className="relative min-h-[24rem] md:min-h-[30rem]">
              <Image
                src="/images/gallery/apparel-verve-gd-tee2.jpg"
                alt="Screen printed tee by Orange Goods"
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover"
                style={{ objectPosition: "center 34%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/72 via-[#1C1C1C]/14 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-7">
                <p className="font-noir-alt text-xs font-bold uppercase tracking-[0.18em] text-[var(--og-tangerine)]">
                  Ready Made Screen Printing
                </p>
                <h3
                  className="mt-2 text-[2.2rem] uppercase leading-none md:text-[3.5rem]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Show it
                  <br />
                  don&apos;t sell it
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-white/82 md:text-base">
                  This path is strongest when the graphic needs more scale, more color, and more
                  room to actually make an impression.
                </p>
              </div>
            </div>
          </article>

          <div className="grid gap-4">
            <article className="rounded-[1.6rem] border border-[#0B32A0]/14 bg-white p-6 md:p-7">
              <SectionHeader
                eyebrow="Overview"
                title="Fast, local, and product-led."
                description="Built for tees, fleece, totes, and other blanks where the print needs to feel clean and the turnaround needs to stay realistic."
              />
            </article>

            <div className="grid gap-4 sm:grid-cols-3">
              <article className="rounded-[1.45rem] border border-[#0B32A0]/14 bg-[#081E6F] p-5 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF7F00]">
                  Good prices
                </p>
                <p className="mt-3 text-sm leading-6 text-white/84">
                  Better quote logic, better blanks, and no bloated custom-from-scratch pricing when you do not need it.
                </p>
              </article>
              <article className="rounded-[1.45rem] border border-[#0B32A0]/14 bg-[rgba(255,248,241,0.86)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF7F00]">
                  Good turnaround
                </p>
                <p className="mt-3 text-sm leading-6 text-[#676767]">
                  Most ready-made print runs move quickly once artwork and blanks are approved.
                </p>
              </article>
              <article className="rounded-[1.45rem] border border-[#0B32A0]/14 bg-[rgba(255,248,241,0.86)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF7F00]">
                  Better blank options
                </p>
                <p className="mt-3 text-sm leading-6 text-[#676767]">
                  Tees, fleece, totes, and other premium ready-made goods that are actually worth printing on.
                </p>
              </article>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal className="bg-white px-4 py-14 md:px-8 md:py-18 lg:px-12">
        <section id="how-it-works" className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="How It Works"
            title="A simple path to quote"
            description="Less talk, fewer steps, and a faster way to get from rough idea to a real print run."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-[1.75rem] border border-[#0B32A0]/14 bg-[#F7F4ED] p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7F00]">
                  {step.number}
                </p>
                <h3
                  className="mt-4 text-[2rem] leading-none text-[var(--og-blue)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#676767]">{step.body}</p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <section id="products" className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Products"
            title="What we can print on"
            description="Better blanks first. Then the right graphic, scale, and placement."
          />
          <div className="mt-8 grid grid-flow-row-dense grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productCards.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className={`group relative min-h-[17rem] overflow-hidden rounded-[1.75rem] border-[3px] border-transparent transition duration-200 hover:border-[#0B32A0] ${product.className}`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className={`object-cover transition duration-500 ${product.imageClassName ?? "group-hover:scale-105"}`}
                  style={{ objectPosition: product.position }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/82 via-[#1C1C1C]/22 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#FF7F00]">
                    Ready Made
                  </p>
                  <h3
                    className="mt-2 text-[2rem] uppercase leading-none md:text-[2.5rem]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {product.name}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/82">
                    {product.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/92">
                    View product options
                    <span className="text-[#FF7F00]">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="bg-[#EFE7DA] px-4 py-14 md:px-8 md:py-18 lg:px-12">
        <section id="pricing" className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Pricing"
            title="How pricing actually works"
            description="No fake calculator here. Screen print pricing depends on the blank, quantity, placements, and number of ink colors."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
            <article className="rounded-[2rem] border border-[#FF7F00] bg-[#081E6F] p-7 text-white shadow-[0_24px_60px_rgba(8,30,111,0.18)] md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7F00]">
                Quote logic
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.35rem] border border-white/14 bg-white/6 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/82">
                    Blank
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/72">
                    The base garment or tote matters first.
                  </p>
                </div>
                <div className="rounded-[1.35rem] border border-white/14 bg-white/6 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/82">
                    Ink colors
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/72">
                    More colors usually means more setup.
                  </p>
                </div>
                <div className="rounded-[1.35rem] border border-white/14 bg-white/6 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/82">
                    Placements
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/72">
                    Front only is simpler than front + back + sleeve.
                  </p>
                </div>
                <div className="rounded-[1.35rem] border border-white/14 bg-white/6 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/82">
                    Quantity
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/72">
                    Bigger runs usually improve the math.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-[2rem] border border-[#0B32A0]/14 bg-white p-7 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7F00]">
                What to send
              </p>
              <ul className="mt-5 space-y-3 text-base leading-7 text-[#676767]">
                <li>Quantity target</li>
                <li>Preferred blank or product direction</li>
                <li>Print placement(s)</li>
                <li>Artwork or references</li>
                <li>In-hand date</li>
              </ul>
              <p className="mt-6 text-sm leading-6 text-[#1C1C1C]/66">
                We will turn that into a real quote instead of making you guess from a pricing
                table.
              </p>
              <Link href="/contact" className="btn-og mt-7 inline-flex">
                Get a Quote
              </Link>
            </article>
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <section id="gallery" className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Gallery"
            title="From the shop"
            description="More visual proof. Less explaining."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-[1.14fr_0.86fr]">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {galleryImages.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`relative overflow-hidden rounded-[1.6rem] border-[3px] border-white bg-[#E4DFCD] shadow-[6px_6px_0px_#0B32A0] ${item.className}`}
                >
                  <div className="relative min-h-[16rem] md:min-h-[18rem]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      style={{ objectPosition: item.position }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/68 via-[#1C1C1C]/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#FF7F00]">
                        {item.detail}
                      </p>
                      <p className="mt-1 text-sm font-medium">{item.title}</p>
                      <span className="mt-3 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/92">
                        Shop this direction
                        <span className="text-[#FF7F00]">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="grid gap-4">
              <article className="rounded-[1.75rem] border border-[#FF7F00] bg-[#081E6F] p-6 text-white shadow-[0_20px_50px_rgba(8,30,111,0.16)] md:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7F00]">
                  In your hands in 2 weeks
                </p>
                <h3
                  className="mt-4 text-[2.2rem] uppercase leading-[0.94] text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Fast enough
                  <br />
                  to move on
                </h3>
                <p className="mt-4 text-base leading-7 text-white/78">
                  The point is not just speed. It is getting a strong print run moving without a
                  messy process or a long chain of back-and-forth.
                </p>
                <Link href="/contact" className="btn-og-white mt-6 inline-flex">
                  Start a Project
                </Link>
              </article>

              <article className="overflow-hidden rounded-[1.75rem] border-[3px] border-white bg-[#E4DFCD] shadow-[6px_6px_0px_#0B32A0]">
                <div className="relative min-h-[18rem]">
                  <Image
                    src="/images/gallery/apparel-686-hoodie-back.jpg"
                    alt="Screen printed hoodie by Orange Goods"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    style={{ objectPosition: "center 40%" }}
                  />
                </div>
              </article>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal className="bg-white px-4 py-14 md:px-8 md:py-18 lg:px-12">
        <section id="faq" className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="FAQ" title="A few quick answers" />
          <div className="mt-8 grid gap-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-[1.5rem] border border-[#0B32A0]/14 bg-[#F7F4ED] p-5"
              >
                <summary className="cursor-pointer text-lg font-semibold text-[var(--og-blue)]">
                  {faq.question}
                </summary>
                <p className="mt-3 text-base leading-7 text-[#676767]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <section className="mx-auto max-w-6xl overflow-hidden rounded-[1.9rem] border border-[#0B32A0]/14 bg-[rgba(255,248,241,0.9)] shadow-[0_18px_50px_rgba(8,30,111,0.08)]">
          <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr] md:items-stretch">
            <div className="p-7 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7F00]">
                Another route
              </p>
              <h3
                className="mt-4 text-[2.35rem] uppercase leading-[0.94] text-[var(--og-blue)] md:text-[3.5rem]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Need embroidery?
                <br />
                We do that too.
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#676767] md:text-lg">
                Same ready-made idea. Different decoration path. If the project wants a more
                premium stitched finish instead of a larger print, head to embroidery.
              </p>
              <Link href="/services/embroidery" className="btn-og mt-7 inline-flex">
                View Embroidery
              </Link>
            </div>

            <Link
              href="/services/embroidery"
              className="group relative block min-h-[18rem] overflow-hidden bg-[#D5BBA2]"
              aria-label="View the Orange Goods ready made embroidery page"
            >
              <Image
                src="/images/gallery/headwear-verve-roasters-dscf3088.jpg"
                alt="Orange Goods embroidery detail"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                style={{ objectPosition: "center 40%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/54 via-[#1C1C1C]/8 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#FF7F00]">
                  Ready Made Embroidery
                </p>
                <p className="mt-2 text-sm font-medium text-white/88">
                  Premium blanks. Stitched locally. Same fast path.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </Reveal>

      <CTASection
        title="Ready to start a screen print run?"
        description="Send the quantity, product, artwork, and timing. We will guide the rest from there."
        buttonLabel="Get a Quote"
        buttonHref="/contact"
        backgroundImage="/images/gallery/apparel-686-hoodie-back.jpg"
        backgroundImagePosition="center 42%"
        overlayClassName="bg-[linear-gradient(135deg,rgba(8,30,111,0.82),rgba(8,30,111,0.54))]"
        eyebrow="Ready Made Screen Printing"
      />
    </main>
  );
}
