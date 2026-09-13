import Image from "next/image";
import { ServiceLeadForm } from "@/app/services/_components/ServiceLeadForm";
import type { ServiceSnapCarouselItem } from "@/app/services/_components/ServiceSnapCarousel";
import { Reveal } from "@/components/Reveal";
import {
  ProductCategoryFaqSection,
  ProductCategoryPage,
} from "../_components/ProductCategoryPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Custom Drinkware — Orange Goods",
  description:
    "Custom mugs, tumblers, bottles, and branded drinkware programs for gifting, retail, hospitality, launches, and everyday use.",
  path: "/goods/drinkware",
  image: "/images/gallery/drinkware-verve-milk-glass-mug-2026-08-13.jpg",
  imageAlt: "Custom drinkware by Orange Goods",
});

const drinkwareProducts = [
  {
    title: "Mugs",
    description: "Desk staples, cafe merch, hospitality goods, and daily-use pieces that keep showing up.",
  },
  {
    title: "Tumblers",
    description: "Insulated drinkware for teams, gifting, events, and higher-value brand programs.",
  },
  {
    title: "Water Bottles",
    description: "Gym, wellness, office, campus, and outdoor bottles with longer shelf life and real utility.",
  },
  {
    title: "Camp Cups",
    description: "A softer, lifestyle-leaning shape for coffee programs, welcome kits, and outdoor brands.",
  },
  {
    title: "Can Coolers",
    description: "Easy add-ons for launches, mailers, parties, and event moments where price point matters.",
  },
  {
    title: "Barware",
    description: "Glassware and drink service pieces for restaurants, hospitality groups, and retail shelves.",
  },
];

const drinkwareCarouselItems: ServiceSnapCarouselItem[] = [
  {
    title: "Diner Mugs",
    detail: "Daybreak Coffee Club",
    src: "/images/gallery/drinkware-coastal-mugs-2026-08-13.jpg",
    alt: "Two Daybreak Coffee Club diner mugs sitting in wet sand near the shore",
    position: "center 42%",
    activeScaleClass: "scale-[1.16]",
    thumbnailScaleClass: "scale-[1.12]",
    activeHoverScaleClass: "group-hover:scale-[1.2]",
  },
  {
    title: "Bamboo Bottles",
    detail: "Goodonya",
    src: "/images/gallery/drinkware-goodonya-bottles-mg-2294-2026-08-13.jpg",
    alt: "Goodonya branded bamboo bottles lined up on a shelf",
    position: "center 58%",
    activePosition: "center 58%",
  },
  {
    title: "Milk Glass Mugs",
    detail: "Verve Coffee",
    src: "/images/gallery/drinkware-verve-milk-glass-mug-2026-08-13.jpg",
    alt: "Verve Coffee custom milk glass mug photographed in front of lush green plants",
    position: "center 60%",
    activePosition: "center 60%",
    activeScaleClass: "scale-[1.02]",
    activeHoverScaleClass: "group-hover:scale-[1.045]",
  },
  {
    title: "Beer Can Glasses",
    detail: "Firestone Walker / 805",
    src: "/images/gallery/drinkware-high-st-pilsners-2026-08-13.jpg",
    alt: "Two High Street Deli beer glasses filled and arranged side by side",
    position: "center 42%",
  },
  {
    title: "Matte Tumblers",
    detail: "Stanford Medicine",
    src: "/images/gallery/drinkware-stanford-tumblers-ai-1020-2026-08-13.jpg",
    alt: "Matte blue Stanford Medicine tumblers lined up on a table",
    position: "center 46%",
  },
  {
    title: "Bamboo Bottles",
    detail: "Stanford Medicine",
    src: "/images/gallery/drinkware-stanford-bamboo-bottles-2026-08-13.jpg",
    alt: "Stanford Medicine bamboo bottles grouped together on a white background",
    position: "center 48%",
    activeScaleClass: "scale-[1.02]",
    activeHoverScaleClass: "group-hover:scale-[1.05]",
  },
  {
    title: "Milk Glass Mugs",
    detail: "Layla Bagels & Coffee",
    src: "/images/gallery/drinkware-milk-glass-mug-1-2026-08-14.jpg",
    alt: "A row of pastel custom milk glass mugs arranged on a tabletop",
    position: "center 52%",
    activeScaleClass: "scale-[1.03]",
    activeHoverScaleClass: "group-hover:scale-[1.06]",
  },
  {
    title: "Beer Glasses",
    detail: "High Street Deli",
    src: "/images/gallery/drinkware-lifestyle-table-2026-08-13.jpg",
    alt: "High Street Deli beer glasses arranged in a tabletop lifestyle product shot",
    position: "center 50%",
  },
];

const introSection = {
  eyebrow: "Best For",
  title: "Drinkware people actually keep",
  description:
    "The best programs start with a vessel that fits real life. Pick the right shape, match the imprint to the material, and the piece feels useful before it ever feels branded.",
  items: [
    {
      title: "Hospitality + Cafe",
      description: "Counter mugs, takeaway cups, retail-ready glassware, and pieces that feel natural in a real service setting.",
      imageSrc: "/images/gallery/drinkware-milk-glass-mug-1-2026-08-14.jpg",
      imageAlt: "Five pastel milk glass mugs arranged on a tabletop",
      imagePosition: "center 50%",
      imageScaleClass: "scale-[1.03]",
    },
    {
      title: "Teams + Offices",
      description: "Desk bottles, onboarding kits, client gifts, and everyday office pieces people keep within reach.",
      imageSrc: "/videos/drinkware/drinkware-verve-tumbler-2026-08-14.mp4",
      imageAlt: "Verve tumbler video showing branded tumblers in an office-friendly lifestyle setting",
      imagePosition: "center 50%",
      imageScaleClass: "scale-[1.02]",
      mediaType: "video",
      videoPoster: "/images/gallery/drinkware-verve-tumbler-poster-2026-08-14.jpg",
    },
    {
      title: "Events + Launches",
      description: "Pop-ups, mailers, welcome kits, and handout moments that still feel worth keeping after the event ends.",
      imageSrc: "/images/gallery/drinkware-lifestyle-table-2026-08-13.jpg",
      imageAlt: "A tabletop mix of custom drinkware and branded goods arranged for a lifestyle product shot",
      imagePosition: "center 50%",
      imageScaleClass: "scale-[1.04]",
    },
  ],
} as const;

const brandSection = {
  eyebrow: "Premium Drinkware",
  title: "We use the good stuff",
  description:
    "If you want the premium name brands, we can source them. If you want a similar look and feel at a different price point, we can also source strong white-label options that get you close.",
  backgroundImage: "/images/gallery/drinkware-lifestyle-table-2026-08-13.jpg",
  backgroundPosition: "center 52%",
  brands: [
    {
      name: "Stanley",
      src: "/logos/drinkware-brands/stanley-official.svg",
      alt: "Stanley logo",
      width: 260,
      height: 46,
      imageClassName: "h-8 w-auto md:h-9",
    },
    {
      name: "MiiR",
      src: "/logos/drinkware-brands/miir-wordmark-official.svg",
      alt: "MiiR logo",
      width: 200,
      height: 41,
      imageClassName: "h-8 w-auto md:h-9",
    },
    {
      name: "Owala",
      src: "/logos/drinkware-brands/owala-official-black-transparent.png",
      alt: "Owala logo",
      width: 980,
      height: 320,
      wrapClassName: "bg-white p-4 md:p-4",
      imageClassName: "h-[44px] w-auto md:h-[56px]",
    },
  ],
  footer:
    "Some projects want the recognizable brand. Others want the same lane without paying for the label. We can help sort out which route makes the most sense before the branding starts.",
} as const;

const detailSection = {
  eyebrow: "A Few Things To Know",
  eyebrowClassName: "text-[var(--og-orange)]",
  title: "What makes a drinkware program work",
  description:
    "The best results usually come from narrowing the product choice early, matching the artwork to the vessel, and keeping the finish practical for real use.",
  itemTone: "light",
  items: [
    {
      title: "Start with the vessel",
      description: "Mug, tumbler, bottle, or barware each push the branding in a different direction, so product choice comes first.",
    },
    {
      title: "Decoration changes the feel",
      description: "A one-color print, a wrap, and an engraved finish can make the same piece feel promotional, premium, or more retail.",
    },
    {
      title: "Packaging can finish it",
      description: "For gifting, launches, and welcome kits, branded packaging helps drinkware land like part of a fuller program.",
    },
  ],
  backgroundImage: "/videos/drinkware/drinkware-verve-cup-2026-08-14.mp4",
  backgroundMediaType: "video",
  backgroundVideoPoster: "/images/gallery/drinkware-verve-cup-poster-2026-08-14.jpg",
  backgroundPosition: "center 42%",
} as const;

const drinkwareFaqs = [
  {
    question: "What is the MOQ for custom drinkware?",
    answer: "Most custom drinkware programs start at 100 pieces total, though exact minimums depend on the vessel and decoration method.",
  },
  {
    question: "How long does drinkware production take?",
    answer: "Most drinkware projects land in the 3-5 week range after product selection and proof approval, with some premium options running longer.",
  },
  {
    question: "Can you help choose the right vessel?",
    answer: "Yes. That is usually the first call, especially when you are deciding between mugs, tumblers, bottles, or something more gift-driven.",
  },
  {
    question: "Can you add branded packaging?",
    answer: "Yes. Packaging is available when you want the drinkware to feel more finished for gifting, retail, or launch kits.",
  },
] as const;

export default function DrinkwarePage() {
  return (
    <>
      <ProductCategoryPage
        title="Custom Drinkware"
        subhead="Reusable bottles, milk glass mugs, tumblers, and barware built to feel useful first, branded second, and worth keeping either way."
        image="/images/gallery/drinkware-hero-img-7758-2026-08-13.jpg"
        imageAlt="Custom Layla Bagels milk glass mugs used as the custom drinkware hero image"
        startProjectHref="/create/drinkware"
        heroEyebrow="Daily Use Goods"
        heroImagePosition="center 42%"
        heroSubnote={null}
        introSection={introSection}
        brandSection={brandSection}
        products={drinkwareProducts}
        productSectionEyebrow="What We Make"
        productSectionTitle="Drinkware worth picking up"
        productSectionDescription="A quick photo-led look at the kinds of vessels this page is really about, without turning the section into a huge catalog."
        productSnapCarouselItems={drinkwareCarouselItems}
        detailSection={detailSection}
        showBottomCta={false}
        faqs={[...drinkwareFaqs]}
        showFaqSection={false}
      />
      <Reveal className="bg-[var(--og-cream)] px-4 pb-16 md:px-8 md:pb-24 lg:px-12">
        <section
          id="start-project"
          className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-[#0B32A0]/14 bg-[linear-gradient(180deg,#FFF8F1_0%,#FFFDF8_100%)] p-4 shadow-[0_24px_80px_rgba(8,30,111,0.08)] md:grid-cols-[0.94fr_1.06fr] md:p-5"
        >
          <div className="relative min-h-[26rem] overflow-hidden rounded-[1.7rem] border border-[#0B32A0]/12 bg-[#1234A6]">
            <Image
              src="/images/gallery/drinkware-stanford-tumblers-ai-1020-2026-08-13.jpg"
              alt="Blue Stanford Medicine tumblers lined up on a table"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
              style={{ objectPosition: "center 46%" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,30,111,0.12)_0%,rgba(8,30,111,0.26)_42%,rgba(8,30,111,0.86)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.24em] text-[#FFB38E]">
                Get a Quote
              </p>
              <h2 className="mt-3 font-display text-4xl uppercase leading-none md:text-5xl">
                Ready to build the right vessel?
              </h2>
              <p className="mt-4 max-w-lg font-body text-sm leading-7 text-white/84 md:text-base">
                Share the product, quantity, and any logo or artwork context so we can point you
                toward the right fit faster.
              </p>
            </div>
          </div>

          <ServiceLeadForm
            title="Get a Quote"
            description="We will follow up with recommended vessels, decoration options, and a clear next step."
            projectDefault=""
            projectLabel="What drinkware are you looking for?"
            projectPlaceholder="Tell us what you want to make: mugs, bottles, tumblers, glassware, quantity split, imprint notes, or anything else that helps us quote the right vessel."
            hiddenFields={{
              source: "drinkware-page",
              product: "drinkware",
              intent: "landing-page-inquiry",
            }}
            captureAttributionFields
            submitLabel="Get a Drinkware Quote"
            showPhone={false}
            showTimeline={false}
            showDesignHelp={false}
            showArtworkUpload
          />
        </section>
      </Reveal>
      <ProductCategoryFaqSection
        faqs={[...drinkwareFaqs]}
        className="bg-[var(--og-cream)] px-4 pt-10 pb-16 md:px-8 md:pt-12 md:pb-24 lg:px-12"
      />
    </>
  );
}
