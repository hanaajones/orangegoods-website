type Stat = {
  value: string;
  label: string;
};

export const startProjectHref =
  "/contact";

export const buildOnlineHref = "https://orangegoods.co/goods/";

export const hatImage =
  "https://orangegoods.co/wp-content/uploads/2024/06/Hat-271x300.jpg";

export const homeHero = {
  title: "Merch people actually keep",
  description:
    "Orange Goods handles everything - product development, design, production, and delivery. One team. One process. Built for brands that care about quality",
};

export const homeStats: Stat[] = [
  { value: "100+", label: "MOQ" },
  { value: "3-6 wks", label: "Typical timeline" },
  { value: "15+", label: "Product categories" },
];

export const twoPathsTitle = "Two ways to start";

export const twoPaths = [
  {
    title: "Talk to Us",
    description:
      "Tell us what you need. We'll figure out the right product, production method, and timeline — and send you a quote. Best for custom projects, large orders, or anything with specific requirements.",
    details: ["Custom products", "Full-service", "Any complexity"],
    href: startProjectHref,
    label: "Start a Conversation",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  },
  {
    title: "Build Online",
    description:
      "Pick a product, pick a style, upload your logo. We'll send you a quote same day. Best if you know what you want and want to move fast.",
    details: ["Fast quotes", "Instant start", "Easy process"],
    href: buildOnlineHref,
    label: "Start Building",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
  },
];

export const homeGallery = [
  {
    title: "Factory Direct Headwear",
    image: hatImage,
  },
  {
    title: "Graphic Design",
    image:
      "https://orangegoods.co/wp-content/uploads/2024/07/GraphicDesign-271x300.jpg",
  },
  {
    title: "Embroidery",
    image:
      "https://orangegoods.co/wp-content/uploads/2024/07/Embroidery_2-271x300.jpg",
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
    title: "Retail Finishing",
    image:
      "https://orangegoods.co/wp-content/uploads/2024/07/HangTag-271x300.jpg",
  },
  {
    title: "Technical Apparel",
    image:
      "https://orangegoods.co/wp-content/uploads/2024/06/Overseas-271x300.jpg",
  },
  {
    title: "Quick Turnarounds",
    image:
      "https://orangegoods.co/wp-content/uploads/2024/06/QuickTurnTimes-271x300.jpg",
  },
];

export const testimonials = [
  {
    quote: "They brought our project to life in a new and unique way",
    name: "Joe K",
    role: "Field Marketing Manager",
    logo: "https://orangegoods.co/wp-content/uploads/2024/06/OrangeGoodsClients_Website_2024-36-3.png",
  },
  {
    quote: "Our go-to for giveaways and super creative options",
    name: "Robin D",
    role: "Director, Strategic Initiatives, Stanford Medicine",
    logo: "https://orangegoods.co/wp-content/uploads/2024/07/SM_Web_vert_LG.png",
  },
  {
    quote: "Truly happy with the turnout",
    name: "Sophia P",
    role: "Marketing Ops Manager, Verve Coffee",
    logo: "https://orangegoods.co/wp-content/uploads/2025/04/OrangeGoodsClients_Website_2025_VerveCoffee.avif",
  },
];

export const logos = [
  {
    name: "Google",
    image:
      "https://orangegoods.co/wp-content/uploads/2025/02/OrangeGoodsClients_Website_2024_Google.png",
  },
  {
    name: "Stanford Medicine",
    image:
      "https://orangegoods.co/wp-content/uploads/2024/07/SM_Web_vert_LG.png",
  },
  {
    name: "805 Firestone Walker",
    image:
      "https://orangegoods.co/wp-content/uploads/2024/10/OrangeGoodsClients_Website_2024-36.png",
  },
  {
    name: "Verve Coffee",
    image:
      "https://orangegoods.co/wp-content/uploads/2025/04/OrangeGoodsClients_Website_2025_VerveCoffee.avif",
  },
];

export const homeProcess = [
  {
    title: "Share your brief",
    body: "Tell us what you need. Product, quantity, timeline, budget",
  },
  {
    title: "We handle design",
    body: "Mockups, tech packs, approvals. Nothing goes to production without your sign-off",
  },
  {
    title: "Production + delivery",
    body: "Factory-direct production. Shipped to your door with tracking",
  },
];

export const hatHero = {
  title: "Fully Custom Hats",
  description: "Built from the ground up - fabric, fit, and finish",
  image: hatImage,
};

export const hatAnchorLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Pricing", href: "#pricing" },
  { label: "Styles", href: "#styles" },
  { label: "Materials", href: "#materials" },
  { label: "Decoration", href: "#decoration" },
  { label: "Gallery", href: "#gallery" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export const hatCallouts = [
  { title: "OG Crafted", body: "Fully custom, 100+ MOQ" },
  { title: "Ready Made", body: "Premium blanks, 100+ MOQ, faster turn" },
];

export const hatPricing = [
  {
    title: "Core Build",
    price: "From $13/unit",
    note: "100 qty",
    features: [
      "Custom fabric selection",
      "Custom shape + structure",
      "Interior label",
      "One front decoration",
    ],
  },
  {
    title: "Enhanced Build",
    price: "Add $1.75/unit",
    note: "2 extra details",
    features: [
      "Everything in Core Build",
      "Plus 2 of: side/back embroidery, custom interior taping, additional decoration placement",
    ],
  },
];

export const hatStyles = [
  "Structured 5-panel (OG100)",
  "Unstructured 6-panel (OG200)",
  "Trucker (OG300)",
  "Bucket Hat (OG400)",
  "Beanie (OG500)",
  "Visor (OG600)",
].map((name) => ({ name, image: hatImage }));

export const hatMaterials = [
  {
    name: "Cotton Twill",
    description: "The standard. Clean, structured, versatile",
  },
  { name: "Canvas", description: "Heavier weight. Built to last" },
  { name: "Corduroy", description: "Textured and retail-forward" },
  { name: "Nylon", description: "Lightweight and weather-resistant" },
  {
    name: "Ripstop",
    description: "Technical. Used in outdoor and performance styles",
  },
  {
    name: "Washed Denim",
    description: "Broken-in feel. Great for lifestyle brands",
  },
  { name: "Mesh", description: "Breathable. Classic trucker structure" },
  { name: "Camo", description: "Seasonal and lifestyle-ready" },
];

export const hatDecoration = [
  {
    title: "Embroidery",
    items: ["Flat embroidery", "3D puff embroidery", "Chain stitch"],
  },
  {
    title: "Patches",
    items: [
      "Woven patch",
      "Embroidered patch",
      "Leather patch",
      "PVC patch",
      "Felt patch",
      "Chenille patch",
    ],
  },
  {
    title: "Print",
    items: ["Direct print", "Sublimated patch"],
  },
];

export const hatProcess = [
  {
    title: "Brief + direction",
    body: "Share your vision. We'll align on product, materials, and timeline",
  },
  {
    title: "Mockups + approval",
    body: "We build a tech pack. Nothing moves to production without your sign-off",
  },
  {
    title: "Production + delivery",
    body: "Factory-direct production. Shipped with tracking",
  },
];

export const hatFaqs = [
  {
    question: "What's the minimum order?",
    answer: "100 pieces minimum. You can mix styles (e.g. hats + tees) as long as the same design applies across all pieces and the total hits 100",
  },
  {
    question: "How long does it take?",
    answer:
      "Custom hats typically take 3-6 weeks from final approval. Rush available on select styles",
  },
  {
    question: "What file formats do you need?",
    answer: ".ai, .eps, or .pdf with vector artwork. No artwork yet? We can help",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "We primarily ship to US addresses. Ask about international shipping when you start a project",
  },
  {
    question: "What does pricing include?",
    answer: "Sampling, production, and standard shipping to one US address",
  },
];

export const hatGallery = [
  {
    title: "Factory Direct Headwear",
    image: hatImage,
  },
  {
    title: "Graphic Design",
    image:
      "https://orangegoods.co/wp-content/uploads/2024/07/GraphicDesign-271x300.jpg",
  },
  {
    title: "Embroidery",
    image:
      "https://orangegoods.co/wp-content/uploads/2024/07/Embroidery_2-271x300.jpg",
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
    title: "Retail Finishing",
    image:
      "https://orangegoods.co/wp-content/uploads/2024/07/HangTag-271x300.jpg",
  },
];
