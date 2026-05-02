import {
  ReadyMadeServicePage,
  type ReadyMadeServicePageContent,
} from "../_components/ReadyMadeServicePage";

const embroideryHeroImage =
  "https://orangegoods.co/wp-content/uploads/2024/07/Embroidery_2-271x300.jpg";

const galleryImages = [
  {
    title: "Embroidery",
    image: embroideryHeroImage,
  },
  {
    title: "Hat",
    image: "https://orangegoods.co/wp-content/uploads/2024/06/Hat-271x300.jpg",
  },
  {
    title: "Graphic Design",
    image:
      "https://orangegoods.co/wp-content/uploads/2024/07/GraphicDesign-271x300.jpg",
  },
  {
    title: "Packaging",
    image:
      "https://orangegoods.co/wp-content/uploads/2025/01/Packaging_Stanford-271x300.jpg",
  },
  {
    title: "Drinkware",
    image:
      "https://orangegoods.co/wp-content/uploads/2024/07/Drinkware-1-271x300.jpg",
  },
  {
    title: "Hang Tag",
    image:
      "https://orangegoods.co/wp-content/uploads/2024/07/HangTag-271x300.jpg",
  },
];

const content: ReadyMadeServicePageContent = {
  eyebrow: "Ready Made",
  hero: {
    title: "Ready Made Embroidery",
    description:
      "Premium blanks. Embroidered in downtown LA. In your hands in 1-2 weeks",
    image: embroideryHeroImage,
    alt: "Orange Goods embroidery detail",
    primaryHref:
      "mailto:hello@orangegoods.co?subject=Ready%20Made%20Embroidery",
  },
  overview: {
    title: "Fast. Local. Done right",
    cards: [
      {
        title: "Downtown LA",
        body: "Our embroidery partner is 10 minutes from our office. No overseas delays. No lost shipments",
      },
      {
        title: "1-2 Week Turn",
        body: "From approved artwork to finished goods in 7-14 days. Rush available on select items",
      },
    ],
  },
  process: {
    title: "Simple from start to finish",
    steps: [
      {
        title: "Choose your blanks",
        body: "Pick from our curated lineup of premium blanks. Hats, tees, hoodies, totes, and more",
      },
      {
        title: "Share your artwork",
        body: ".ai, .eps, or .pdf. Clean vector. We handle the rest - digitizing, color matching, placement",
      },
      {
        title: "Pick up or ship",
        body: "In-hand in 1-2 weeks. Delivered to your door or available for local pickup in LA",
      },
    ],
  },
  products: {
    title: "What we embroider",
    items: [
      {
        name: "Hats",
        description: "Structured, unstructured, truckers, beanies",
        image: embroideryHeroImage,
      },
      {
        name: "Tees",
        description: "100% cotton, fleece, performance styles",
        image: embroideryHeroImage,
      },
      {
        name: "Hoodies",
        description: "Pullover and zip-up",
        image: embroideryHeroImage,
      },
      {
        name: "Jackets",
        description: "Midlayer, coach, varsity",
        image: embroideryHeroImage,
      },
      {
        name: "Totes",
        description: "Cotton canvas and recycled options",
        image: embroideryHeroImage,
      },
      {
        name: "Polos",
        description: "Pique and performance",
        image: embroideryHeroImage,
      },
    ],
  },
  pricing: {
    title: "Transparent pricing",
    description:
      "Pricing depends on product, stitch count, and quantity. Request a quote for exact numbers",
    cards: [
      {
        title: "100 Piece Minimum",
        body: "Mix and match styles. As long as the design is the same, you can split across products. (e.g., 60 hats + 40 tees = one 100-piece order)",
      },
      {
        title: "Quote-Based Pricing",
        body: "Every project is different. We'll send a detailed quote within 1 business day",
      },
    ],
    ctaHref:
      "mailto:hello@orangegoods.co?subject=Ready%20Made%20Embroidery%20Quote",
  },
  gallery: {
    title: "From the shop",
    items: galleryImages,
  },
  faqs: [
    {
      question: "What's the minimum order?",
      answer:
        "100 pieces. You can mix styles - 50 hats and 50 tees counts as one order - as long as the artwork is the same",
    },
    {
      question: "How long does it take?",
      answer:
        "1-2 weeks from artwork approval. Rush options available - ask when you start your project",
    },
    {
      question: "Do I need to provide artwork?",
      answer:
        "Yes - vector files preferred (.ai, .eps, .pdf). No artwork yet? We can help with design",
    },
    {
      question: "Can I pick up locally?",
      answer:
        "Yes. We're based in downtown Los Angeles. Local pickup available",
    },
    {
      question: "What's the difference between Ready Made and OG Crafted?",
      answer:
        "Ready Made uses premium blanks decorated locally for fast turns. OG Crafted is fully custom - your fabric, your shape, built from scratch",
    },
  ],
  finalCta: {
    title: "Ready in 1-2 weeks",
    description:
      "Send us your artwork, quantity, and preferred blanks. We'll get the project moving",
    href: "mailto:hello@orangegoods.co?subject=Ready%20Made%20Embroidery",
  },
};

export default function EmbroideryPage() {
  return <ReadyMadeServicePage content={content} />;
}
