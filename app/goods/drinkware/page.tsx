import type { ServiceSnapCarouselItem } from "@/app/services/_components/ServiceSnapCarousel";
import { ProductCategoryPage } from "../_components/ProductCategoryPage";

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
    detail: "Firestone Walker",
    src: "/images/gallery/drinkware-high-st-pilsners-2026-08-13.jpg",
    alt: "Two Firestone Walker faux beer can glasses filled with beer",
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
  title: "What makes a drinkware program work",
  description:
    "The best results usually come from narrowing the product choice early, matching the artwork to the vessel, and keeping the finish practical for real use.",
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

export default function DrinkwarePage() {
  return (
    <ProductCategoryPage
      title="Custom Drinkware"
      subhead="Reusable bottles, milk glass mugs, tumblers, and barware built to feel useful first, branded second, and worth keeping either way."
      image="/images/gallery/drinkware-hero-img-7758-2026-08-13.jpg"
      imageAlt="Custom Layla Bagels milk glass mugs used as the custom drinkware hero image"
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
      faqs={[
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
      ]}
    />
  );
}
