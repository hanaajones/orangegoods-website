import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ContactPromptSection } from "@/components/ContactPromptSection";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { HatStylesCatalog } from "./HatStylesCatalog";

const hatDetailLinks = [
  {
    title: "Fabric",
    href: "/goods/hats/fabric",
    description: "Compare texture, weight, and feel before you lock the rest of the build.",
    image: "/images/gallery/headwear-fabric-mg-9425.jpg",
    imagePosition: "center 52%",
  },
  {
    title: "Decoration",
    href: "/goods/hats/decoration",
    description: "See how embroidery, patches, and print each change the read of the hat.",
    image: "/images/gallery/headwear-decoration-2s5a2148.jpg",
    imagePosition: "center 68%",
    imageScaleClass: "scale-[1.6] group-hover:scale-[1.64]",
  },
  {
    title: "Closure",
    href: "/goods/hats/closure",
    description: "Dial in the back finish, from relaxed strapbacks to cleaner snapbacks and clips.",
    image: "/images/gallery/headwear-closure-verve-larrea-hat-034.jpg",
    imagePosition: "center 70%",
  },
  {
    title: "Add-ons",
    href: "/goods/hats/add-ons",
    description: "Explore labels, extra hits, and the finishing details that push the hat further.",
    image: "/images/gallery/headwear-seam-tape-img-7639.jpg",
    imagePosition: "center 50%",
  },
];

export const metadata = {
  title: "Hat Styles — Orange Goods",
  description:
    "Start with the hat shape, then customize every part of the hat from fabric and patch to labels, rope, closure, and finishing.",
};

export default function HatStylesPage() {
  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-14 text-white md:px-8 md:py-20 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/headwear-patch-layout-mg-9412.jpg"
          inset="-0.75%"
          position="center 40%"
          speed={0.1}
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/46" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/78 via-[#1C1C1C]/58 to-[#1C1C1C]/28" />
        <div className="relative mx-auto max-w-6xl">
          <div>
            <Link
              href="/goods/hats"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/82 hover:text-[var(--og-orange)]"
            >
              ← Back to custom hats
            </Link>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
              Full custom hats
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
              Start With
              <br />
              The Hat Shape
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
              Then customize every part of your hat from fabric, color, decoration and finishing touches
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-white/78">
              100+ hats per style. Every detail is yours to choose.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/build/og-crafted-hats"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[var(--og-orange)] px-6 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5"
              >
                Customize all hat details
              </Link>
              <Link
                href="#styles-catalog"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/28 px-6 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:border-[var(--og-orange)] hover:text-[var(--og-orange)]"
              >
                Browse hat shapes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="styles-catalog" className="pt-8 md:pt-10">
        <HatStylesCatalog />
      </section>

      <section className="px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#0B32A0]/10 bg-white px-6 py-8 shadow-[0_24px_80px_rgba(8,30,111,0.08)] md:px-8 md:py-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
              What&apos;s Next
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--og-blue)] md:text-5xl">
              Start with shape, then build out the details.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--og-muted)] md:text-lg">
              Once you know the silhouette, keep narrowing the build through fabric, decoration, closure, and finishing details.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {hatDetailLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group relative overflow-hidden rounded-[1.5rem] border border-[#0B32A0]/12 bg-[#F7F4ED] transition hover:-translate-y-1 hover:border-[var(--og-orange)]/30"
              >
                <div className="relative aspect-[4/4.7]">
                  <Image
                    src={link.image}
                    alt={link.title}
                    fill
                    sizes="(min-width: 1280px) 22vw, (min-width: 768px) 44vw, 100vw"
                    className={`object-cover transition duration-300 ${link.imageScaleClass ?? "group-hover:scale-[1.03]"}`}
                    style={{ objectPosition: link.imagePosition }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(52,52,52,0.36),rgba(52,52,52,0.58)_40%,rgba(52,52,52,0.84))]" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/76">
                      Explore
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold leading-none text-white">
                      {link.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/82">
                      {link.description}
                    </p>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition group-hover:text-[var(--og-orange)]">
                      See Options
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Need your hats sooner?"
        title="See quick-turn hat styles."
        description="If you need a faster path, start with decorated blank hats and move into the quick-turn lineup."
        buttonLabel="Shop quick-turn hats"
        buttonHref="/goods/hats/quick-turn"
        backgroundImage="/images/gallery/headwear-quick-turn-reel-life-gear-car-8.jpg"
        backgroundImagePosition="left center"
        backgroundImageSize="132%"
        overlayClassName="bg-[linear-gradient(135deg,rgba(28,28,28,0.76),rgba(28,28,28,0.42))]"
      />

      <ContactPromptSection />
    </main>
  );
}
