import Image from "next/image";
import Link from "next/link";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { startProjectHref } from "@/lib/content";

export const metadata = {
  title: "Sustainability — Orange Goods",
  description: "How Orange Goods approaches sustainability — quality over quantity, responsible sourcing, and goods built to last.",
};

const pillars = [
  {
    title: "Quality over quantity",
    description:
      "The most sustainable product is one people actually keep. We build goods to last — not to end up in a landfill six months after the event. Retail-quality construction means your merch has a longer life and a smaller footprint.",
  },
  {
    title: "Responsible sourcing",
    description:
      "We source across different blank suppliers depending on the project — from AS Colour to Stanley/Stella and other programs that carry organic and recycled ranges. The right answer depends on fit, budget, timeline, and what kind of material story a brand wants to tell.",
  },
  {
    title: "No single-use waste",
    description:
      "We don't produce runs of throwaways. Every order is made to order — no overstock, no dump runs, no warehouse full of unsold boxes. If we're making it, someone wants it and will use it.",
  },
  {
    title: "Upcycled program",
    description:
      "Our throw blanket program uses exclusively upcycled and reclaimed materials. If you're looking for goods with a recycled or upcycled material story, this is the place to start.",
  },
  {
    title: "Local production where possible",
    description:
      "We offer made-in-America solutions and do a lot of work in Los Angeles. We screen print in Hermosa Beach and embroider in downtown LA, but that is not always the path. If a project is being manufactured overseas, we may keep the full build there. It depends on the product, the timeline, and where the client wants it made.",
  },
  {
    title: "Built around the brief",
    description:
      "Tell us what you are after and we will come up with a smart solution for it. Sometimes that means organic or recycled materials, sometimes it means local production, and sometimes it just means making something better enough that people actually keep it.",
  },
];

export default function SustainabilityPage() {
  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/sustainability-heavy-hood.jpg"
          position="center 62%"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/32" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/58 via-[#1C1C1C]/42 to-[#1C1C1C]/14" />
        <div className="relative mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
              How We Think About It
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
              Sustainability
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/82 md:text-xl">
              We make goods meant to be kept. That&apos;s the whole point. Throwaway merch is the problem — we&apos;re not trying to add to it.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end lg:self-end">
            <Link href={startProjectHref} className="btn-og inline-flex">
              Start a Project
            </Link>
            <Link href="#approach" className="btn-og-white inline-flex">
              How We Approach It
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-8 text-[#1C1C1C]/70 md:text-xl">
            We don&apos;t have a sustainability certification. We&apos;re not a B Corp (yet). What we do have is a point of view:
            goods should be worth the resources it took to make them. A hat that lasts three years is more sustainable than
            a hat that lands in a donation bin three weeks later.
          </p>
          <p className="mt-5 text-lg leading-8 text-[#1C1C1C]/70 md:text-xl">
            That shapes every decision we make — what we source, how we build it, and what we recommend to clients.
          </p>
        </div>
      </section>

      <section className="px-4 pb-8 md:px-8 md:pb-12 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-[2rem] border border-[#1C1C1C]/10 bg-[#F3EFE7] p-4 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-8 md:p-6">
          <div className="order-2 px-1 py-2 md:order-1 md:px-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#1C1C1C]/45">
              Neutral Collection
            </p>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[#1C1C1C]/72 md:text-xl">
              Better merch usually starts with better blanks. Strong fabric, grounded color, and pieces people actually want to wear all help extend the life of what gets made.
            </p>
          </div>
          <div className="order-1 overflow-hidden rounded-[1.5rem] bg-[#DDD4C7] md:order-2">
            <div className="aspect-[4/5] w-full overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/images/gallery/sustainability-neutral-collection-poster.jpg"
                className="h-full w-full object-cover object-center"
              >
                <source src="/videos/sustainability/ascolour-neutral-collection.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 md:px-8 md:pb-12 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-[2rem] border border-[#1C1C1C]/10 bg-[#EEE8DC] p-4 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-8 md:p-6">
          <div className="relative aspect-square overflow-hidden rounded-[1.5rem]">
            <Image
              src="/images/gallery/sustainability-ecru-heavy-hood.jpg"
              alt="Close-up of an ecru heavyweight hoodie"
              fill
              sizes="(min-width: 768px) 38vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="px-1 py-2 md:px-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#1C1C1C]/45">
              Material Detail
            </p>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[#1C1C1C]/72 md:text-xl">
              Better materials are part of sustainability too. If something feels good, fits right, and holds up, it has a much better chance of staying in rotation.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 md:px-8 md:pb-12 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-[2rem] border border-[#1C1C1C]/10 bg-[#E8E1D4] p-4 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-8 md:p-6">
          <div className="px-1 py-2 md:px-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#1C1C1C]/45">
              Worn Again
            </p>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[#1C1C1C]/72 md:text-xl">
              Longevity is the goal. When the base garment already feels easy, durable, and good on-body, it has a much better chance of being worn on repeat instead of forgotten after one event.
            </p>
          </div>
          <div className="overflow-hidden rounded-[1.5rem] bg-[#D7CFBE]">
            <div className="aspect-[4/5] w-full overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/images/gallery/sustainability-short-clip-damo-poster.jpg"
                className="h-full w-full object-cover object-center"
              >
                <source src="/videos/sustainability/short-clip-damo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="border-t border-[#1C1C1C]/10 px-4 py-14 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-10 text-3xl uppercase text-[#FF4200] md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How we approach it
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-[1.75rem] border border-[#1C1C1C]/10 bg-[#F3EFE7] p-6">
                <h3
                  className="text-lg uppercase leading-tight text-[#2D5016]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#1C1C1C]/70">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-14 md:px-8 lg:px-12">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/sustainability-heavy-hood.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 58%" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#111111]/68" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/82 via-[#111111]/66 to-[#111111]/48" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2
            className="text-2xl uppercase text-[#FF4200] md:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The honest truth
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/84">
            Custom merch has a carbon footprint. We&apos;re not going to pretend otherwise. Our job is to make sure that
            footprint is worth it — by building things people actually use, sourcing from responsible partners, and
            being honest with clients about the tradeoffs. We&apos;re working on doing more, and we&apos;ll update this page
            as we do.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={startProjectHref} className="btn-og inline-flex">
              Start a sustainable project
            </Link>
            <Link href="/contact" className="btn-og-white inline-flex">
              Ask us directly
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 text-center md:px-8">
        <h2
          className="text-2xl uppercase text-[#FF4200] md:text-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Build something worth keeping
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base leading-7 text-[#1C1C1C]/60">
          We&apos;d rather make fewer, better things. Tell us about your project.
        </p>
        <Link href={startProjectHref} className="btn-og mt-6 inline-flex">
          Start a Project
        </Link>
      </section>
    </main>
  );
}
