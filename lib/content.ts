type Stat = {
  value: string;
  label: string;
};

export const homeHero = {
  title: "Custom branded goods and designs",
  description:
    "We’ll make your brand stand out with quality, unique merch for corporate gifting, retail, and events. Crafted to be kept and loved, our California team handles the production from idea to delivery.",
};

export const homeStats: Stat[] = [
  { value: "100", label: "MOQ minimum" },
  { value: "3–6 weeks", label: "Typical timeline" },
  { value: "15+", label: "Product categories" },
];

export const twoPaths = [
  {
    title: "OG Crafted",
    description:
      "Fully custom fabrics, materials, designs, and finishes, tailored to your brand from the ground up.",
    details: ["100 MOQ", "3–6 weeks", "Exact vision"],
    href: "/goods/hats",
    label: "Explore Custom",
  },
  {
    title: "Ready Made",
    description:
      "Premium blanks, faster turns, and lower order counts for teams that want quality without a full custom build.",
    details: ["50+ MOQ", "Faster path", "Build online"],
    href: "https://orangegoods.co/goods/",
    label: "Build Online",
  },
];

export const homeGallery = [
  {
    title: "Factory Direct Headwear",
    image: "https://orangegoods.co/wp-content/uploads/2024/06/Hat-271x300.jpg",
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
    name: "Joe K.",
    role: "Field Marketing Manager",
    logo: "https://orangegoods.co/wp-content/uploads/2024/06/OrangeGoodsClients_Website_2024-36-3.png",
  },
  {
    quote: "Our go-to for giveaways and super creative options",
    name: "Robin D.",
    role: "Director, Strategic Initiatives, Stanford Medicine",
    logo: "https://orangegoods.co/wp-content/uploads/2024/07/SM_Web_vert_LG.png",
  },
  {
    quote: "Truly happy with the turnout",
    name: "Sophia P.",
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
    title: "Give Us The Deets",
    body: "Share your project details on the form. Select products from the catalog or collaborate on a unique idea.",
  },
  {
    title: "Artwork + Design",
    body: "Orange Goods can develop 100% original artwork in-house, or work from existing assets you already have.",
  },
  {
    title: "Production + Delivery",
    body: "On time, on budget, on brand. The team keeps you informed and ships finished goods directly to you.",
  },
  {
    title: "Fulfillment If Needed",
    body: "The current site also highlights fulfillment as part of the broader offer when projects need a longer tail.",
  },
];

export const hatHero = {
  eyebrow: "Custom Hats",
  title: "Fully branded headwear, built from the ground up",
  description:
    "Custom fabrics, colors, taping, labels, and decoration from the ground up, with Orange Goods guiding the full process.",
  image:
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods-Hat-8.avif",
  stats: [
    { value: "100 pcs", label: "MOQ per style" },
    { value: "30 days", label: "Quick custom turn" },
    { value: "8–10 weeks", label: "Full project window" },
  ] satisfies Stat[],
};

export const hatSelectorStyles = [
  {
    id: "dad-hat",
    name: "Dad Hat",
    description:
      "A classic low-profile shape suited for washed fabrics, embroidery, and metal clasp details like the Verve Coffee example.",
    shape: "Low profile",
    fit: "Relaxed fit",
  },
  {
    id: "snapback",
    name: "Snapback",
    description:
      "Structured front panels with a sharper shape for bold branding, patches, and higher crown builds.",
    shape: "Structured crown",
    fit: "Classic street fit",
  },
  {
    id: "trucker",
    name: "Trucker",
    description:
      "Foam or structured front with breathable rear panels for event, retail, and hospitality programs.",
    shape: "Mesh-backed",
    fit: "High crown",
  },
  {
    id: "beanie",
    name: "Beanie",
    description:
      "A knit headwear option for colder weather, woven labels, folded cuffs, and softer logo applications.",
    shape: "Soft knit",
    fit: "Close fit",
  },
];

export const hatOptions = [
  {
    title: "Embroidery",
    description: "Front, back, or side embroidery with sizing and placement dialed in per style.",
  },
  {
    title: "Patches",
    description: "Woven, leather, rubber, or specialty patch treatments for more dimensional branding.",
  },
  {
    title: "Interior Labels",
    description: "Custom taping, woven labels, and inside branding that make the hat feel finished.",
  },
  {
    title: "Closures + Trims",
    description: "Metal clasps, snap closures, fabric choices, and finishing details matched to the build.",
  },
];

export const hatProcess = [
  {
    title: "Submit Brief",
    body: "Share your quantity, style direction, timeline, and target budget so the quote is grounded from the start.",
  },
  {
    title: "Design Proof",
    body: "Artwork, placement, fabrics, labels, and trims get translated into a production-ready plan.",
  },
  {
    title: "Sample Review",
    body: "Standard builds sample in about 2 weeks, with photos for approval and optional physical shipment.",
  },
  {
    title: "Production + Delivery",
    body: "Most hat projects run 8 to 10 weeks from kickoff to delivery depending on complexity and approvals.",
  },
];

export const hatGallery = [
  {
    title: "Orange Goods Hat 8",
    image:
      "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods-Hat-8.avif",
  },
  {
    title: "Orange Goods Hat 7",
    image:
      "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods-Hat-7.avif",
  },
  {
    title: "Sundream Supply Hat",
    image:
      "https://orangegoods.co/wp-content/uploads/2025/03/SundreamSupply_Hat_12-e1744953909670.avif",
  },
  {
    title: "Fox Mercantile Hat",
    image:
      "https://orangegoods.co/wp-content/uploads/2024/06/IMG6732-R01-021A-e1719280438860.jpg",
  },
  {
    title: "Customer Hat Detail",
    image:
      "https://orangegoods.co/wp-content/uploads/2024/06/Customer_2.jpg",
  },
  {
    title: "Hat Back Detail",
    image:
      "https://orangegoods.co/wp-content/uploads/2024/07/BGxHJ-23.jpg",
  },
  {
    title: "Hat Project Still",
    image:
      "https://orangegoods.co/wp-content/uploads/2024/06/BGxHJ-89.jpg",
  },
  {
    title: "Sundream Supply Alt",
    image:
      "https://orangegoods.co/wp-content/uploads/2025/03/SundreamSupply_Hat_17.avif",
  },
];
