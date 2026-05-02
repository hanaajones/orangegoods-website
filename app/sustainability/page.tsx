import Link from "next/link";
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
      "We source from suppliers who hold themselves to ethical labor and environmental standards. Our primary blank supplier, AS Colour, publishes a transparency report and manufactures in certified ethical facilities. We're expanding our preferred supplier list with the same criteria.",
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
      "Our decoration is done locally in Southern California. Keeping decoration local cuts shipping emissions, supports local employment, and means we can QC in person. Not everything is made in LA, but the finishing is.",
  },
  {
    title: "Packaging that doesn't embarrass us",
    description:
      "We offer poly-free mailers, recycled tissue, and minimal packaging options. If your brand cares about how things arrive, we can match that. Just ask.",
  },
];

export default function SustainabilityPage() {
  return (
    <main className="pb-24 md:pb-0">
      {/* Hero */}
      <section className="bg-[#2D5016] px-4 py-16 text-white md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p
            className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            How We Think About It
          </p>
          <h1
            className="mt-4 text-4xl uppercase leading-tight text-white md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Sustainability
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-7 text-white/70">
            We make goods meant to be kept. That's the whole point. Throwaway merch is the problem — we're not trying to add to it.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-4 py-14 md:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-8 text-[#1C1C1C]/70 md:text-xl">
            We don't have a sustainability certification. We're not a B Corp (yet). What we do have is a point of view:
            goods should be worth the resources it took to make them. A hat that lasts three years is more sustainable than
            a hat that lands in a donation bin three weeks later.
          </p>
          <p className="mt-5 text-lg leading-8 text-[#1C1C1C]/70 md:text-xl">
            That shapes every decision we make — what we source, how we build it, and what we recommend to clients.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-[#1C1C1C]/10 px-4 py-14 md:px-8 lg:px-12">
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

      {/* Honest note */}
      <section className="bg-[#F3EFE7] px-4 py-14 md:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-2xl uppercase text-[#FF4200] md:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The honest truth
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#1C1C1C]/70">
            Custom merch has a carbon footprint. We're not going to pretend otherwise. Our job is to make sure that
            footprint is worth it — by building things people actually use, sourcing from responsible partners, and
            being honest with clients about the tradeoffs. We're working on doing more, and we'll update this page
            as we do.
          </p>
          <p className="mt-4 text-sm text-[#1C1C1C]/40">
            Questions about our sourcing or production practices?{" "}
            <Link href="/contact" className="text-[#FF4200] hover:underline">
              Ask us directly.
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-14 text-center md:px-8">
        <h2
          className="text-2xl uppercase text-[#FF4200] md:text-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Build something worth keeping
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base leading-7 text-[#1C1C1C]/60">
          We'd rather make fewer, better things. Tell us about your project.
        </p>
        <Link href={startProjectHref} className="btn-og mt-6 inline-flex">
          Start a Project
        </Link>
      </section>
    </main>
  );
}
