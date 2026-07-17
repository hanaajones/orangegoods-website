import Image from "next/image";
import Link from "next/link";
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee";
import { CTASection } from "@/components/CTASection";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import { logos, startProjectHref } from "@/lib/content";

export const metadata = {
  title: "About - Orange Goods",
  description:
    "Orange Goods is a founder-led custom merch studio built on product taste, production experience, and clear communication.",
};

const trustPoints = [
  {
    title: "Better product",
    body: "We help shape goods people actually want to keep, not filler that gets tossed after one event.",
    icon: (
      <svg
        aria-hidden="true"
        className="h-9 w-9"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 7h10" />
        <path d="m11 4 3 3-3 3" />
        <path d="M20 17H10" />
        <path d="m13 14-3 3 3 3" />
      </svg>
    ),
  },
  {
    title: "Close communication",
    body: "You stay in touch with a real team that answers, follows up, and keeps the job moving.",
    icon: (
      <svg
        aria-hidden="true"
        className="h-9 w-9"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12a8 8 0 0 1-8 8H6l-4 3 1.5-5A8 8 0 1 1 21 12Z" />
        <path d="M8 11h8" />
        <path d="M8 15h5" />
      </svg>
    ),
  },
  {
    title: "Follow-through",
    body: "We know where production slips happen, and we stay on the project until the final goods land right.",
    icon: (
      <svg
        aria-hidden="true"
        className="h-9 w-9"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m5 13 4 4L19 7" />
      </svg>
    ),
  },
];

const aboutProcess = [
  {
    title: "Start with the right lane",
    body: "We narrow the product, quantity, budget, and timeline before the project gets messy.",
  },
  {
    title: "Dial the details",
    body: "Artwork, decoration, trims, packaging, and approvals get tightened before production moves.",
  },
  {
    title: "Keep it moving",
    body: "We stay close through sourcing, production, and delivery so the finished goods show up the way they should.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-14 text-white md:px-8 md:py-20 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/design-built-production-dscf1585.jpg"
          position="center 44%"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/38" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/64 via-[#1C1C1C]/44 to-[#1C1C1C]/16" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
            Founder-Led Custom Merch
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
            Personal enough
            <br />
            to stay close.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            Orange Goods helps brands make better merch with stronger product judgment, tighter
            follow-through, and clearer communication than the usual big-box process.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={startProjectHref} className="btn-og inline-flex">
              Start a Project
            </Link>
            <Link href="/goods" className="btn-og-white inline-flex">
              Explore Goods
            </Link>
          </div>
        </div>
      </section>

      <Reveal className="border-y border-[#0B32A0]/12 bg-[#FBF8F1] px-4 py-6 md:px-8 md:py-7 lg:px-12">
        <section className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3 md:items-center">
          <div className="mx-auto max-w-[16rem] text-center md:px-3">
            <p
              className="text-[1.7rem] uppercase leading-none text-[#0B32A0] md:text-[1.95rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Over a decade in merch
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--og-muted)]">
              around custom merch, graphics, apparel, and production.
            </p>
          </div>
          <div className="mx-auto max-w-[16rem] text-center md:border-x md:border-[#0B32A0]/12 md:px-5">
            <p
              className="text-[1.7rem] uppercase leading-none text-[#0B32A0] md:text-[1.95rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Built on referrals
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--og-muted)]">
              built the business before larger client programs followed.
            </p>
          </div>
          <div className="mx-auto max-w-[16rem] text-center md:px-3">
            <p
              className="text-[1.7rem] uppercase leading-none text-[#0B32A0] md:text-[1.95rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Detail-driven
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--og-muted)]">
              because good merch comes from tighter calls, not just more options.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal className="bg-white px-4 py-14 md:px-8 md:py-18 lg:px-12">
        <section className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-[#D8CCB7] bg-[#FBF8F1] p-6 md:p-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:p-10">
          <div className="relative min-h-[25rem] overflow-hidden rounded-[2rem] border-[3px] border-[#0B32A0] bg-[#E8E0D2] lg:min-h-[34rem]">
            <Image
              src="/images/gallery/about-casey-easton.jpg"
              alt="Easton and Casey in the early Orange Goods founder story"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="scale-[1.28] object-cover"
              style={{ objectPosition: "calc(50% - 20px) 24%" }}
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
              Where OG came from
            </p>
            <h2 className="mt-4 max-w-xl text-3xl uppercase leading-none text-[#0B32A0] md:text-4xl">
              Started by two friends.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--og-muted)] md:text-lg">
              <p>
                In 2013, Easton started a surf clothing brand and learned the full process
                firsthand, from building the brand and website to figuring out manufacturing and
                making product people actually wanted.
              </p>
              <p>
                That early work led local businesses to ask for hats and shirts of their own.
                Through word of mouth and strong product, Orange Goods grew from local projects
                into programs for names like Stanford Medicine, Synergy Kombucha, and other larger
                brands.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal className="bg-white px-4 pb-12 md:px-8 md:pb-16 lg:px-12">
        <section className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-[#D8CCB7] bg-[#F7F4ED] p-6 md:p-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
              Started in California
            </p>
            <h2 className="mt-4 max-w-xl text-3xl uppercase leading-none text-[#0B32A0] md:text-4xl">
              South Bay roots. West Coast process.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--og-muted)] md:text-lg">
              <p>
                Orange Goods grew out of the South Bay in California, where product taste, surf
                culture, and a hands-on way of working still shape how the team approaches every
                project.
              </p>
              <p>
                The goal has never been to feel like a faceless merch pipeline. OG stays close to
                the process, works with a smaller-batch mindset, and genuinely likes being part of
                the build from first idea to final product.
              </p>
            </div>
          </div>

          <div className="relative min-h-[20rem] overflow-hidden rounded-[2rem] border-[3px] border-[#0B32A0]/15 bg-[#D9D0C1] lg:min-h-[27rem]">
            <Image
              src="/images/gallery/design-hero-ocean-ocean-hoodie.jpg"
              alt="California coast-inspired Orange Goods product photography"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "center 46%" }}
            />
          </div>
        </section>
      </Reveal>

      <Reveal className="bg-white px-4 pb-12 pt-2 md:px-8 md:pb-16 lg:px-12">
        <section className="mx-auto max-w-6xl rounded-[2rem] border border-[#D8CCB7] bg-[#F8F1E3] p-6 md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
                Brands choose OG
              </p>
              <h2 className="mt-4 max-w-xl text-3xl uppercase leading-none text-[#0B32A0] md:text-4xl">
                Personal service. Real standards.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[var(--og-muted)] md:text-lg">
                We are not a faceless upload-and-order merch site, and we are not a loose little
                shop either. The goal is to stay personal while still delivering work that feels
                thoughtful, dialed, and ready for serious brands.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative min-h-[15rem] overflow-hidden rounded-[1.75rem] border-[3px] border-[#0B32A0]/15 bg-[#E8E0D2]">
                <Image
                  src="/images/gallery/bags-boatsetter-dscf3238.jpg"
                  alt="Boatsetter custom bag program by Orange Goods"
                  fill
                  sizes="(min-width: 1024px) 26vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: "center 50%" }}
                />
              </div>
              <div className="relative min-h-[15rem] overflow-hidden rounded-[1.75rem] border-[3px] border-[#0B32A0]/15 bg-[#E8E0D2]">
                <Image
                  src="/images/gallery/design-ready-to-create-mg-6305.jpg"
                  alt="Orange Goods team and creative process"
                  fill
                  sizes="(min-width: 1024px) 26vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: "center 42%" }}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {trustPoints.map((card) => (
              <article
                key={card.title}
                className="flex min-h-[17rem] flex-col items-center justify-start rounded-[2rem] border-[3px] border-[#B8AA8E] bg-[#F7F4ED] p-6 pt-8 text-center text-[#081E6F] shadow-[5px_5px_0px_#0B32A0] md:min-h-[18rem] md:p-8 md:pt-10"
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

      <Reveal className="bg-white px-4 pb-12 pt-0 md:px-8 md:pb-16 lg:px-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#D8CCB7] bg-white">
          <ClientLogoMarquee
            logos={logos}
            label="Trusted by teams that care how the merch lands"
            className="border-0"
          />
        </div>
      </Reveal>

      <ProcessSteps
        eyebrow="How we work"
        title="Real team. Close process."
        description="You are not getting passed through a giant system. We help shape the goods, dial the details, and keep production moving until it lands."
        steps={aboutProcess}
        buttonHref={startProjectHref}
        heroImage="/images/gallery/design-ready-to-create-mg-6305.jpg"
        heroImagePosition="center 46%"
        heroOverlayClassName="bg-[linear-gradient(135deg,rgba(28,28,28,0.16),rgba(28,28,28,0.52))]"
      />

      <CTASection
        title="Ready to make something worth keeping?"
        description="Tell us what you are making, how many you need, and when it has to land."
        buttonLabel="Start a Project"
        buttonHref={startProjectHref}
        backgroundImage="/images/gallery/outerwear-high-st-deli-puffer-mg-2257.jpg"
        backgroundImagePosition="center 34%"
        showImageOverlay
        overlayClassName="bg-[linear-gradient(135deg,rgba(28,28,28,0.24),rgba(28,28,28,0.52))]"
        eyebrow=""
        wrapperClassName="border-t border-[#0B32A0]/15"
      />
    </main>
  );
}
