import {
  ReadyMadeServicePage,
  type ReadyMadeServicePageContent,
} from "../_components/ReadyMadeServicePage";

const screenPrintingHeroImage =
  "https://orangegoods.co/wp-content/uploads/2024/06/Overseas-271x300.jpg";

const placeholderImage =
  "https://orangegoods.co/wp-content/uploads/2024/07/Embroidery_2-271x300.jpg";

const galleryImages = [
  {
    title: "Embroidery",
    image: placeholderImage,
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
    title: "Ready Made Screen Printing",
    description:
      "Premium blanks. Screen printed in downtown LA. In your hands in 1-2 weeks",
    image: screenPrintingHeroImage,
    alt: "Orange Goods screen printing work",
    primaryHref:
      "mailto:hello@orangegoods.co?subject=Ready%20Made%20Screen%20Printing",
  },
  overview: {
    title: "Bold prints. Fast turns",
    cards: [
      {
        title: "Downtown LA",
        body: "Printed 10 minutes from our office. Local quality control, no international shipping guesswork",
      },
      {
        title: "1-2 Week Turn",
        body: "From approved artwork to finished goods in 7-14 days. Rush available",
      },
    ],
  },
  process: {
    title: "Simple from start to finish",
    steps: [
      {
        title: "Choose your blanks",
        body: "Tees, hoodies, sweatpants, totes, and more. Premium-weight blanks only",
      },
      {
        title: "Share your artwork",
        body: "Vector files preferred. Up to 6 colors per design. We handle screen setup and color matching",
      },
      {
        title: "Delivered fast",
        body: "In-hand in 1-2 weeks. Shipped direct or available for LA pickup",
      },
    ],
  },
  products: {
    title: "What we print on",
    items: [
      {
        name: "Tees",
        description: "Classic and premium-weight cotton",
        image: placeholderImage,
      },
      {
        name: "Hoodies",
        description: "Pullover and zip-up",
        image: placeholderImage,
      },
      {
        name: "Sweatpants",
        description: "Fleece and French terry",
        image: placeholderImage,
      },
      {
        name: "Long Sleeves",
        description: "Crew and raglan",
        image: placeholderImage,
      },
      {
        name: "Totes",
        description: "Cotton canvas",
        image: placeholderImage,
      },
      {
        name: "Tote bags",
        description: "Recycled and natural canvas",
        image: placeholderImage,
      },
    ],
  },
  pricing: {
    title: "Transparent pricing",
    description:
      "Screen printing pricing depends on product, ink colors, and quantity. More colors = slightly higher cost per unit",
    cards: [
      {
        title: "100 Piece Minimum",
        body: "Mix styles across the same design. 50 tees + 50 hoodies = one order, one graphic",
      },
      {
        title: "Quote-Based Pricing",
        body: "We'll send an exact quote within 1 business day",
      },
    ],
    ctaHref:
      "mailto:hello@orangegoods.co?subject=Ready%20Made%20Screen%20Print%20Quote",
  },
  gallery: {
    title: "From the shop",
    items: galleryImages,
  },
  faqs: [
    {
      question: "What's the minimum order?",
      answer: "100 pieces. Mix styles - same artwork, different products",
    },
    {
      question: "How many ink colors can I use?",
      answer:
        "Up to 6 spot colors. More colors may affect pricing - we'll detail it in your quote",
    },
    {
      question: "How long does it take?",
      answer: "1-2 weeks from artwork approval. Rush available on select orders",
    },
    {
      question: "What file formats do you need?",
      answer:
        ".ai or .eps vector files preferred. RGB/Pantone color callouts appreciated",
    },
    {
      question: "What's the difference between Ready Made and OG Crafted?",
      answer:
        "Ready Made is fast - premium blanks, decorated locally, quick turns. OG Crafted is built from scratch for brands that want fully custom materials and construction",
    },
  ],
  finalCta: {
    title: "In your hands in 1-2 weeks",
    description:
      "Send us your artwork, quantity, and preferred blanks. We'll quote the print run fast",
    href: "mailto:hello@orangegoods.co?subject=Ready%20Made%20Screen%20Printing",
  },
};

export default function ScreenPrintingPage() {
  return <ReadyMadeServicePage content={content} />;
}
