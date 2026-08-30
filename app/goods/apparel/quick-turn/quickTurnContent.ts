export type QuickTurnApparelCard = {
  title: string;
  description: string;
  detail: string;
  image: string;
  imagePosition: string;
};

export type QuickTurnApparelStep = {
  title: string;
  href: string;
  description: string;
  image: string;
  imagePosition: string;
  imageScaleClass?: string;
  cta: string;
};

export type QuickTurnApparelFaq = {
  question: string;
  answer: string;
};

export const quickTurnApparelAnchors = [
  { href: "#garment-families", label: "Garments" },
  { href: "#why-quick-turn", label: "Why quick turn" },
  { href: "#next-steps", label: "Next steps" },
  { href: "#faq", label: "FAQ" },
  { href: "#start-project", label: "Start" },
] as const;

export const quickTurnApparelCategories: QuickTurnApparelCard[] = [
  {
    title: "Tees",
    description:
      "Garment-dyed basics, heavier retail-feeling blanks, and graphic tees that move fast without falling back to thin event shirts.",
    detail: "Best for retail merch, cafes, launches, and everyday team wear.",
    image: "/images/gallery/apparel-verve-gd-tee2.jpg",
    imagePosition: "center 48%",
  },
  {
    title: "Hoodies + Fleece",
    description:
      "Heavy pullovers, crews, and zip fleece when the order needs more weight, more generosity, and a stronger handfeel.",
    detail: "Best for gifting, cooler-weather drops, and premium uniforms.",
    image: "/images/gallery/apparel-wearable-palette-bgxhj-23.jpg",
    imagePosition: "center 48%",
  },
  {
    title: "Long Sleeves",
    description:
      "A cleaner in-between layer when the project wants more than a tee without stepping all the way into fleece or outerwear.",
    detail: "Best for events, hospitality kits, and transitional weather runs.",
    image: "/images/gallery/screen-printing-waterbased-ink-bgxhj-18.jpg",
    imagePosition: "center 42%",
  },
  {
    title: "Polos + Work Shirts",
    description:
      "A stronger quick-turn lane for hospitality, service teams, and programs that need a cleaner presentation than standard tees.",
    detail: "Best for restaurants, office teams, and polished uniforms.",
    image: "/images/gallery/apparel-polos-work-shirts-edible-slo-boh-mason-bar.jpg",
    imagePosition: "center 28%",
  },
  {
    title: "Construction Apparel",
    description:
      "Crew tees, work shirts, and harder-wearing branded layers that still feel organized enough for a real company program.",
    detail: "Best for trades, field crews, and repeat team orders.",
    image: "/images/gallery/apparel-construction-tli08604-2.jpg",
    imagePosition: "center 42%",
  },
  {
    title: "Outerwear + Layers",
    description:
      "Jackets, overshirts, and warmer pieces when the project needs an elevated staff layer or a more giftable finish.",
    detail: "Best for premium team kits, hospitality, and cooler-weather drops.",
    image: "/images/gallery/embroidery-red-bull-jacket.jpg",
    imagePosition: "center 38%",
  },
];

export const quickTurnApparelPrinciples = [
  {
    title: "Start with a better blank",
    description:
      "AS Colour, Lane Seven, Los Angeles Apparel, and other premium blank lines give the order its weight, fit, and feel before decoration does anything.",
  },
  {
    title: "Decorate locally",
    description:
      "Screen print, embroidery, labels, and finishing details keep the job fast without losing the cleanness that makes apparel feel worth wearing.",
  },
  {
    title: "Build around the use case",
    description:
      "The fast lane still works best when the garment family, placement, and quantity match the actual job: staff gear, gifting, retail, or event runs.",
  },
  {
    title: "Keep the mix realistic",
    description:
      "Quick-turn apparel can span tees, fleece, polos, and layers, but the strongest programs stay focused on the silhouettes people will actually wear.",
  },
] as const;

export const quickTurnApparelSteps: QuickTurnApparelStep[] = [
  {
    title: "Blank",
    href: "#garment-families",
    description:
      "Start with the garment family first, then narrow the weight, fit, and color palette around the job it has to do.",
    image: "/images/gallery/apparel-blank-people-would-buy-dscf4886.jpg",
    imagePosition: "center 54%",
    cta: "See garment families",
  },
  {
    title: "Decoration",
    href: "#why-quick-turn",
    description:
      "Match the garment to screen print, embroidery, labels, or finishing so the branding feels built into the piece instead of sitting on top of it.",
    image: "/images/gallery/embroidery-k1-apparel-embroidery.jpg",
    imagePosition: "center 34%",
    imageScaleClass: "scale-[1.08] group-hover:scale-[1.12]",
    cta: "Choose the method",
  },
  {
    title: "Quantity",
    href: "#faq",
    description:
      "Most quick-turn apparel programs begin at 100 pieces total, which makes it easier to mix sizes and keep the run useful.",
    image: "/images/gallery/apparel-gts-synergy.jpg",
    imagePosition: "center 46%",
    cta: "Check the basics",
  },
  {
    title: "Quote",
    href: "#start-project",
    description:
      "Once the garment direction is close, send the count, timeline, and artwork context so we can narrow blanks and price it correctly.",
    image: "/images/gallery/apparel-686-hoodie-back.jpg",
    imagePosition: "center 40%",
    cta: "Start the handoff",
  },
];

export const quickTurnApparelFaqs: QuickTurnApparelFaq[] = [
  {
    question: "What is the MOQ for quick-turn apparel?",
    answer:
      "Most quick-turn apparel programs start at 100 pieces total. That usually gives enough room to spread the order across real sizes while still keeping the lane efficient.",
  },
  {
    question: "How long does quick-turn apparel take?",
    answer:
      "Most blank-based apparel programs land in about 2-3 weeks after direction, artwork, and proof approval. Heavier fleece, specialty garments, or more complicated finishing can push past that, but the fast lane starts there.",
  },
  {
    question: "Can I mix tees, hoodies, and other apparel in one order?",
    answer:
      "Yes. Mixed apparel runs are common when one logo system needs to live across tees, fleece, polos, hats, or a few softer add-on pieces. We just want the mix to stay coherent and quoteable.",
  },
  {
    question: "Can you help choose the right blank?",
    answer:
      "Yes. That is usually one of the most useful parts of the process, especially when you know the vibe, budget, and timeline but not the exact garment yet.",
  },
  {
    question: "How do I decide between screen print and embroidery?",
    answer:
      "Screen print is usually stronger for larger graphics and fuller artwork moments. Embroidery is usually better for smaller premium placements, fleece, polos, hats, and outerwear.",
  },
];
