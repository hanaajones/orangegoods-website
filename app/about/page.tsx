import Image from "next/image";
import Link from "next/link";
import { AboutTimelineCards } from "@/components/AboutTimelineCards";
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee";
import { CTASection } from "@/components/CTASection";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import { logos, startProjectHref } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About - Orange Goods",
  description:
    "Orange Goods is a founder-led custom merch studio built on product taste, production experience, and clear communication.",
  path: "/about",
  image: "/images/gallery/about-team-hana-headshot-2026-08-13.jpg",
  imageAlt: "Orange Goods team",
});

const trustPoints = [
  {
    title: "Better product",
    body: "We help shape goods people actually want to keep, not filler that gets tossed after one event.",
    icon: (
      <Image
        src="/graphics/about/better-product.svg"
        alt=""
        aria-hidden="true"
        width={294}
        height={288}
        loading="eager"
        unoptimized
        className="h-12 w-auto"
      />
    ),
  },
  {
    title: "Close communication",
    body: "You stay in touch with a real team that answers, follows up, and keeps the job moving.",
    icon: (
      <Image
        src="/graphics/about/close-communication.svg"
        alt=""
        aria-hidden="true"
        width={183}
        height={238}
        loading="eager"
        unoptimized
        className="h-12 w-auto"
      />
    ),
  },
  {
    title: "Follow-through",
    body: "We know where production slips happen, and we stay on the project until the final goods land right.",
    icon: (
      <Image
        src="/graphics/about/follow-through.svg"
        alt=""
        aria-hidden="true"
        width={262}
        height={277}
        loading="eager"
        unoptimized
        className="h-12 w-auto"
      />
    ),
  },
];

const aboutProcess = [
  {
    stepLabel: "1",
    title: "Set the direction",
    body: "We narrow the product, quantity, budget, and timeline before the project gets messy.",
  },
  {
    stepLabel: "2",
    title: "Dial in the details",
    body: "Artwork, decoration, trims, packaging, and approvals get tightened before production moves.",
  },
  {
    stepLabel: "3",
    title: "Keep it moving",
    body: "We stay close through sourcing, production, and delivery so the finished goods show up the way they should.",
  },
];

const aboutHighlights = [
  {
    title: "Over a decade",
    body: "15 years around custom merch, graphics, apparel, and production shaped how we make better calls now.",
  },
  {
    title: "Built on referrals",
    body: "OG grew through repeat clients, word of mouth, and good product before the larger brand programs followed.",
  },
  {
    title: "All in the details",
    body: "Good merch comes from tighter product judgment, clearer communication, and sharper execution at every step.",
  },
];

const founderTimeline = [
  {
    year: "2013",
    title: "Starting a brand in college",
    body: "Easton started a surf clothing brand in college, sold 1,000s of products online, got into local shops, and learned production while working at a surf brand in LA.",
  },
  {
    year: "Early runs",
    title: "By referral only",
    body: "Then local businesses started reaching out for hats, shirts, and branded goods of their own. At that point, it was all run by Easton, and that turning point pushed things from a clothing brand into the early merch business through word of mouth and strong product.",
  },
  {
    year: "Today",
    title: "Orange Goods",
    body: "That same hands-on approach became Orange Goods: a close team making better merch from first idea to final delivery. Today, we make merch for everyone from neighborhood coffee shops to Ivy League schools and beverage brands.",
  },
];

const aboutTeamMock = [
  {
    name: "Easton",
    initials: "E",
    title: "Founder + Owner",
    imageSrc: "/images/gallery/about-team-easton-headshot-2026-08-13.jpg",
    imageAlt: "Easton headshot placeholder for the Orange Goods about page mockup",
    imageClassName: "object-cover scale-[1.78]",
    imageStyle: { objectPosition: "50% -17%" },
  },
  {
    name: "Hana",
    initials: "H",
    title: "Co-Owner",
    imageSrc: "/images/gallery/about-team-hana-portrait-dscf9957-2026-08-13.jpg",
    imageAlt: "Hana headshot placeholder for the Orange Goods about page mockup",
    imageClassName: "object-cover scale-[1.48]",
    imageStyle: { objectPosition: "88% 35%" },
  },
  {
    name: "Josh",
    initials: "J",
    title: "Lead Designer",
    imageSrc: "/images/gallery/about-team-josh-headshot-2026-08-13.jpg",
    imageAlt: "Josh headshot placeholder for the Orange Goods about page mockup",
    imageClassName: "object-cover scale-[1.14]",
    imageStyle: { objectPosition: "44% 36%" },
  },
  {
    name: "Michaela",
    initials: "M",
    title: "Growth Marketing Manager",
    imageSrc: "/images/gallery/about-team-michaela-headshot-2026-08-13.jpg",
    imageAlt: "Michaela headshot placeholder for the Orange Goods about page mockup",
    imageClassName: "object-cover scale-[1.18]",
    imageStyle: { objectPosition: "46% 34%" },
  },
  {
    name: "Rinnah",
    initials: "R",
    title: "Social Media Manager",
    imageSrc: "/images/gallery/about-team-rinnah-headshot-2026-08-13.jpg",
    imageAlt: "Rinnah headshot placeholder for the Orange Goods about page mockup",
    imageClassName: "object-cover scale-[2.65]",
    imageStyle: { objectPosition: "52% 38%" },
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-14 text-white md:px-8 md:py-20 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/about-process-header-stanford-backpack-dscf8350.jpg"
          position="center 50%"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/38" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/64 via-[#1C1C1C]/44 to-[#1C1C1C]/16" />
        <div className="relative mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
              Founder-Led Custom Merch
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
              Hands-on from
              <br />
              start to finish
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
              Orange Goods helps brands make better merch with stronger product judgment, tighter
              follow-through, and clearer communication than the usual big-box process.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end lg:self-end">
            <Link href={startProjectHref} className="btn-og inline-flex">
              Start a Project
            </Link>
            <Link href="/goods" className="btn-og-white inline-flex">
              Explore Goods
            </Link>
          </div>
        </div>
      </section>

      <Reveal className="border-y border-[#0B32A0]/12 bg-[#F7F4ED] px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-3">
            {aboutHighlights.map((highlight, index) => (
              <article
                key={highlight.title}
                className={`rounded-[1.75rem] border border-[#D8CCB7] bg-white p-6 text-center shadow-[4px_4px_0px_rgba(11,50,160,0.08)] ${
                  index === 1 ? "md:-translate-y-1" : ""
                }`}
              >
                <p
                  className="text-[1.9rem] uppercase leading-none text-[#0B32A0] md:text-[2.15rem]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {highlight.title}
                </p>
                <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-[#1C1C1C]/68 md:text-[0.95rem]">
                  {highlight.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <section className="mx-auto max-w-6xl rounded-[2rem] border border-[#DCCDB8] bg-white p-6 md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
            <div className="flex h-full flex-col">
              <div className="relative min-h-[20rem] flex-1 overflow-hidden rounded-[1.75rem] border-[3px] border-[#0B32A0]/15 bg-[#D9E8EA] lg:min-h-[32rem]">
                <Image
                  src="/images/gallery/about-timeline-first-order-img-2996.jpg"
                  alt="Easton carrying boxes from an early Fish At Sea order pickup"
                  fill
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  className="origin-bottom object-cover scale-[1.34]"
                  style={{ objectPosition: "center bottom" }}
                />
                <div className="absolute left-4 top-4 inline-flex items-center justify-center rounded-full bg-[#081E6F]/45 px-4 py-1.5 text-center text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm md:left-5 md:top-5">
                  <span className="translate-y-[2px]">First order pickup, age 19</span>
                </div>
              </div>
            </div>

            <AboutTimelineCards items={founderTimeline} />
          </div>
        </section>
      </Reveal>

      <Reveal className="bg-white px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#D8CCB7] bg-white">
          <ClientLogoMarquee
            logos={logos}
            label="Trusted by teams that care how the merch lands"
            className="border-0"
            trackClassName="gap-3 px-3 md:gap-4 md:px-4"
          />
        </div>
      </Reveal>

      <Reveal className="bg-[#F7F4ED] px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <section className="mx-auto grid max-w-6xl gap-6 rounded-[2rem] border-[3px] border-[#0B32A0] bg-white p-5 text-[#1C1C1C] md:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FF7F00]">
              The Meaning of Orange Goods
            </p>
            <h2
              className="mt-3 text-[2.2rem] uppercase leading-[0.92] text-[#081E6F] md:text-[4rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What OG
              <br />
              actually means.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-[#1C1C1C]/72 md:text-lg">
              <span className="text-[#FF4200]">Orange Goods</span>, or <em className="text-[#1C1C1C]">&quot;specialty goods,&quot;</em>{" "}
              are moderately durable items like clothing that need periodic replacement through
              regular use.
            </p>
            <p className="mt-4 max-w-lg text-base leading-7 text-[#1C1C1C]/72 md:text-lg">
              They sit between yellow goods, which are convenience items, and red goods, which are
              more considered shopping items.{" "}
              <em>
                <span className="text-[#FF4200]">Orange Goods</span> live in that middle lane
              </em>
              : useful, lived-in products people come back to over time.
            </p>
          </div>

          <div className="relative min-h-[20rem] overflow-hidden rounded-[1.6rem] border-[3px] border-[#0B32A0] bg-white md:min-h-[24rem] lg:min-h-[28rem]">
            <Image
              src="/images/gallery/about-og-meaning-baywood-131.jpg"
              alt="A group wearing branded goods made by Orange Goods"
              fill
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "center center" }}
            />
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <section className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-[#DCCDB8] bg-white p-6 md:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
              South Bay roots
            </p>
            <h2 className="mt-4 max-w-xl text-3xl uppercase leading-none text-[#0B32A0] md:text-4xl">
              Built to stay personal
              <br />
              to each project.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--og-muted)] md:text-lg">
              <p>
                Orange Goods grew out of the South Bay and was built to stay close to the work,
                with tighter communication, better judgment, and fewer layers.
              </p>
              <p>
                We take the work personally and guide it from details to delivery.
              </p>
            </div>
          </div>

          <div className="relative min-h-[24rem] overflow-hidden rounded-[1.75rem] border-[3px] border-[#0B32A0]/15 bg-white lg:min-h-[31rem]">
            <Image
              src="/images/gallery/about-family-img-9935-2026-08-13.jpg"
              alt="Easton Jones with his family outdoors"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="scale-x-[-1] object-cover"
              style={{ objectPosition: "center 30%" }}
            />
          </div>
        </section>
      </Reveal>

      <Reveal className="bg-[#F7F4ED] px-4 pt-12 pb-6 md:px-8 md:pt-16 md:pb-8 lg:px-12">
        <section className="mx-auto max-w-6xl rounded-[2rem] border border-[#DCCDB8] bg-white p-6 md:p-8 lg:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
              Small team
            </p>
            <h2 className="mt-4 text-3xl uppercase leading-none text-[#0B32A0] md:text-4xl">
              Real people. Close process.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--og-muted)] md:text-lg">
              A tight crew across product, design, marketing, social, and ops. Small enough to
              stay personal, experienced enough to keep the work moving.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {aboutTeamMock.map((person) => (
              <article
                key={person.name}
                className="rounded-[1.75rem] border border-[#D8CCB7] bg-white p-5 text-center shadow-[4px_4px_0px_rgba(11,50,160,0.08)]"
              >
                <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border-[3px] border-[#0B32A0]/12 bg-white">
                  {person.imageSrc ? (
                    <Image
                      src={person.imageSrc}
                      alt={person.imageAlt ?? `${person.name} placeholder headshot`}
                      fill
                      sizes="96px"
                      className={person.imageClassName ?? "object-cover"}
                      style={person.imageStyle}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-3xl text-[#0B32A0]">
                      {person.initials}
                    </div>
                  )}
                </div>
                <h3 className="mt-5 text-[1.45rem] leading-none text-[#0B32A0]">
                  {person.name}
                </h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#1C1C1C]/55">
                  {person.title}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="bg-[#F7F4ED] px-4 pt-6 pb-12 md:px-8 md:pt-8 md:pb-16 lg:px-12">
        <section className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#E5D6C2] p-6 md:p-8 lg:p-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source
              src="/videos/about-personal-service-whatsapp-2026-03-09.mp4"
              type="video/mp4"
            />
          </video>

          <div className="relative">
            <div className="w-full rounded-[1.5rem] border-[3px] border-[#B8AA8E] bg-white/92 p-5 backdrop-blur-[3px] md:p-6 lg:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
                Brands choose OG
              </p>
              <h2 className="mt-4 max-w-xl text-3xl uppercase leading-none text-[#0B32A0] md:text-4xl">
                Personal service.
                <br />
                Real standards.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[var(--og-muted)] md:text-lg">
                We are not a faceless upload-and-order merch site, and we are not a loose little
                shop either. The goal is to stay personal while still delivering work that feels
                thoughtful, dialed, and ready for serious brands.
              </p>
            </div>
          </div>

          <div className="relative mt-8 grid gap-4 md:grid-cols-3">
            {trustPoints.map((card) => (
              <article
                key={card.title}
                className="flex min-h-[17rem] flex-col items-center justify-start rounded-[2rem] border-[3px] border-[#B8AA8E] bg-white/94 p-6 pt-8 text-center text-[#081E6F] shadow-[5px_5px_0px_#0B32A0] backdrop-blur-[3px] md:min-h-[18rem] md:p-8 md:pt-10"
              >
                <div className="flex h-12 w-12 items-center justify-center text-[#FF4200]">
                  {card.icon}
                </div>
                <h3 className="font-display mt-6 flex min-h-[4.2rem] max-w-full items-center justify-center text-[1.75rem] font-normal normal-case leading-none tracking-normal text-[#0B32A0] md:min-h-[4.7rem] md:text-[1.9rem] lg:text-[2.1rem]">
                  {card.title}
                </h3>
                <p className="font-noir-alt mt-4 max-w-sm text-base font-medium leading-7 text-[#1C1C1C]/70">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </section>

      </Reveal>

      <ProcessSteps
        eyebrow="How we work"
        title="Real team. Close process."
        description="You are not getting passed through a giant system. We help shape the goods, dial the details, and keep production moving until it lands."
        steps={aboutProcess}
        heroImage="/images/gallery/design-ready-to-create-mg-6305.jpg"
        heroImagePosition="center 46%"
        heroOverlayClassName="bg-[linear-gradient(135deg,rgba(28,28,28,0.16),rgba(28,28,28,0.52))]"
        wrapperClassName="bg-[#F2EFEB]"
      />

      <CTASection
        title="Ready to make something worth keeping?"
        buttonLabel="Start a Project"
        buttonHref={startProjectHref}
        buttonClassName="md:self-center"
        backgroundImage="/images/gallery/about-cta-highst-deli-jenjoi-0970-2026-08-13.jpg"
        backgroundImagePosition="center 52%"
        showImageOverlay
        overlayClassName="bg-[linear-gradient(135deg,rgba(28,28,28,0.24),rgba(28,28,28,0.52))]"
        eyebrow=""
        wrapperClassName="border-t border-[#0B32A0]/15"
      />
    </main>
  );
}
