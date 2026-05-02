import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

const startProjectHref = "mailto:hello@orangegoods.co?subject=Start%20a%20Project";

const sections = [
  {
    title: "A Passion for Quality",
    eyebrow: "Easton's Story",
    body: "Easton Jones founded Orange Goods in Southern California after more than 15 years in custom merch, product design, and manufacturing. Family, surfing, quality, and craft shape how he works: make goods worth keeping, pay attention to the details, and treat every project like it belongs to a real person",
  },
  {
    title: "Product Experts",
    eyebrow: "End-User First",
    body: "We do not build mass-produced junk or cheap giveaway trash. We think about who will wear it, carry it, wash it, gift it, and keep it, then design the product around that real use",
  },
  {
    title: "Design Experts",
    eyebrow: "In House",
    body: "Our designers create custom artwork, hand-drawn illustrations, timeless emblems, and production-ready layouts that feel like they belong to your brand instead of a template library",
  },
  {
    title: "Sustainability",
    eyebrow: "Less Waste",
    body: "Quality goods stay in rotation longer, which means less waste. We also support upcycled materials programs for projects that need a more responsible path from concept to delivery",
  },
  {
    title: "Small Town Service, Global Reach",
    eyebrow: "Personal Attention",
    body: "Orange Goods is a small team, not a corporate warehouse. You get direct communication and dependable execution for projects ranging from Fortune 500 brand programs to startup launches",
  },
];

export default function AboutPage() {
  return (
    <main className="pb-24 md:pb-0">
      <section className="bg-[var(--og-orange)] px-4 py-20 text-white md:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
            Southern California Custom Goods
          </p>
          <h1 className="mt-5 text-6xl leading-none text-white md:text-8xl lg:text-9xl">
            ABOUT US
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
            A small team making custom goods with product knowledge, design
            taste, and real care for what people keep
          </p>
        </div>
      </section>

      <Reveal className="bg-[var(--og-warm-grey)] px-4 py-16 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
              The Meaning of Orange Goods
            </p>
            <h2 className="mt-4 text-4xl leading-tight md:text-6xl">
              Not random. Not trendy
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[var(--og-muted)]">
            <p>
              &quot;Orange Goods&quot; is an actual retail term. Specialty goods are
              moderately durable items, like clothing, that need periodic
              replacement due to regular use
            </p>
            <p>
              They sit between yellow goods, which are convenience items, and
              red goods, which are shopping items. That is the name because it
              literally describes what we make: useful goods built to live with
              your audience
            </p>
          </div>
        </section>
      </Reveal>

      <section className="px-4 py-8 md:px-8 md:py-12 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {sections.map((section, index) => (
            <Reveal key={section.title} className={index === 4 ? "md:col-span-2" : ""}>
              <article className="h-full border border-[#0B32A0]/20 bg-white/75 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--og-blue)]">
                  {section.eyebrow}
                </p>
                <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                  {section.title}
                </h2>
                <p className="mt-5 text-base leading-7 text-[var(--og-muted)] md:text-lg md:leading-8">
                  {section.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal className="px-4 py-10 md:px-8 md:py-14 lg:px-12">
        <section className="mx-auto grid max-w-6xl overflow-hidden border border-[#0B32A0]/20 bg-[var(--og-blue)] md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[24rem] bg-[var(--og-sand)] md:min-h-[34rem]">
            <Image
              src="https://orangegoods.co/wp-content/uploads/2024/07/OrangeGoods_ABoutUs_5-1.jpg"
              alt="Orange Goods team and custom goods"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
              Made With Care
            </p>
            <h2 className="mt-4 text-4xl leading-tight text-white md:text-6xl">
              Goods worth keeping
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/78">
              The best branded goods do not feel disposable. They feel useful,
              specific, and considered from the first sketch to the last box
            </p>
            <Link
              href={startProjectHref}
              className="mt-8 inline-flex min-h-12 w-fit items-center rounded-full bg-[var(--og-orange)] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d73b05]"
            >
              Start a Project
            </Link>
          </div>
        </section>
      </Reveal>

      <CTASection
        title="Ready to make something worth keeping?"
        description="Tell us what you are making, how many you need, and when it has to land"
        buttonLabel="Start a Project"
        buttonHref={startProjectHref}
      />
    </main>
  );
}
