// ── Pricing engine ────────────────────────────────────────────────────────────

// Jol print rates (1-color screen print, includes $0.50 flash)
export const jolRates: Record<number, number> = {
  100: 2.30, 250: 2.10, 500: 1.75, 1000: 1.50, 1500: 1.40, 2000: 1.25,
};
// Screen amortized ($50 setup / qty)
export const screens: Record<number, number> = {
  100: 0.50, 250: 0.20, 500: 0.10, 1000: 0.05, 1500: 0.0333, 2000: 0.025,
};
// Flat margins
export const margins: Record<number, number> = {
  100: 3.00, 250: 2.75, 500: 2.50, 1000: 2.50, 1500: 2.50, 2000: 2.50,
};

export type PrintCat = 'base' | 'fleece' | 'jacket';

export function calcPrice(
  blank: number,
  blankMarkup: number,
  printCat: PrintCat,
  qty: number
): number {
  const catUpcharge =
    printCat === 'fleece' ? 0.25 : printCat === 'jacket' ? 0.75 : 0;
  const sell =
    (blank + blankMarkup) +
    (jolRates[qty] + 0.50 + 0.25 + catUpcharge) * 1.10 +
    screens[qty] +
    margins[qty];
  return Math.round(sell * 4) / 4; // round to nearest $0.25
}

export const QTY_OPTIONS = [100, 250, 500, 1000, 1500, 2000] as const;
export type QtyOption = (typeof QTY_OPTIONS)[number];

// ── Add-ons ───────────────────────────────────────────────────────────────────

export type AddonKey =
  | 'extraColor'
  | 'backPrint'
  | 'waterBasedPuff'
  | 'embroidery'
  | 'neckLabel'
  | 'wovenLabel'
  | 'polybagged';

export const ADDONS: Record<AddonKey, { label: string; price: number }> = {
  extraColor:     { label: 'Additional print color',         price: 1.00 },
  backPrint:      { label: 'Back print',                     price: 3.00 },
  waterBasedPuff: { label: 'Water-based / puff ink',         price: 1.00 },
  embroidery:     { label: 'Embroidery (instead of print)',  price: 3.00 },
  neckLabel:      { label: 'Printed neck label',             price: 2.00 },
  wovenLabel:     { label: 'Woven label',                    price: 3.50 },
  polybagged:     { label: 'Polybagged + folded',            price: 1.00 },
};

// ── Product type ──────────────────────────────────────────────────────────────

export type CatalogCategory =
  | 'tees'
  | 'hoodies'
  | 'fleece-bottoms'
  | 'outerwear'
  | 'womens'
  | 'headwear'
  | 'socks';

export interface CatalogProduct {
  slug: string;
  category: CatalogCategory;
  name: string;
  fullName: string;
  tags: string[];
  weight: string;
  fit: string;
  material: string;
  description: string;
  blank: number;
  blankMarkup: number;
  printCat: PrintCat;
}

// ── Products ──────────────────────────────────────────────────────────────────

export const CATALOG_PRODUCTS: CatalogProduct[] = [
  // ── TEES ──────────────────────────────────────────────────────────────────
  {
    slug: 'bella-canvas-3001',
    category: 'tees',
    name: 'Bella+Canvas 3001',
    fullName: 'Bella+Canvas 3001 — Unisex Jersey Tee',
    tags: ['Soft Hand', 'Retail Fit'],
    weight: '4.2 oz',
    fit: 'Slim/retail',
    material: '100% Airlume combed and ring-spun cotton',
    description: 'The most popular retail-quality blank in the game. Soft, slim, and prints beautifully.',
    blank: 4.62, blankMarkup: 1.50, printCat: 'base',
  },
  {
    slug: 'gildan-8000',
    category: 'tees',
    name: 'Gildan 8000',
    fullName: 'Gildan 8000 — DryBlend T-Shirt',
    tags: ['Value', 'Durable'],
    weight: '5.5 oz',
    fit: 'Classic',
    material: '50% cotton, 50% polyester',
    description: 'Workhorse tee. Built for volume orders where durability and price matter.',
    blank: 3.20, blankMarkup: 1.50, printCat: 'base',
  },
  {
    slug: 'as-colour-5026',
    category: 'tees',
    name: 'AS Colour 5026',
    fullName: 'AS Colour 5026 — Classic Tee',
    tags: ['Premium', 'Retail Fit'],
    weight: '5.3 oz',
    fit: 'Boxy/relaxed',
    material: '100% combed ring-spun cotton',
    description: "AS Colour's flagship tee. Heavier than BC 3001, boxier fit, excellent for retail programs.",
    blank: 8.30, blankMarkup: 1.50, printCat: 'base',
  },
  {
    slug: 'as-colour-5083',
    category: 'tees',
    name: 'AS Colour 5083',
    fullName: 'AS Colour 5083 — Heavy Faded Long Sleeve Tee',
    tags: ['Faded', 'Long Sleeve'],
    weight: '8.0 oz',
    fit: 'Relaxed',
    material: '100% cotton, garment washed',
    description: 'Heavy, faded, lived-in feel. Great for lifestyle brands and premium streetwear programs.',
    blank: 12.60, blankMarkup: 1.50, printCat: 'base',
  },
  {
    slug: 'comfort-colors-1717',
    category: 'tees',
    name: 'Comfort Colors 1717',
    fullName: 'Comfort Colors 1717 — Garment Dyed Tee',
    tags: ['Garment Dyed', 'Most Popular'],
    weight: '6.1 oz',
    fit: 'Relaxed',
    material: '100% ring-spun cotton, garment dyed',
    description: 'The garment-dyed staple. Soft, broken-in feel right out of the bag. Clients love these.',
    blank: 7.20, blankMarkup: 1.50, printCat: 'base',
  },
  {
    slug: 'la-apparel-1801',
    category: 'tees',
    name: 'LA Apparel 1801',
    fullName: 'LA Apparel 1801 — Garment Dyed Tee',
    tags: ['Made in USA', 'Garment Dyed'],
    weight: '6.5 oz',
    fit: 'Boxy',
    material: '100% cotton, garment dyed, Made in USA',
    description: 'Made in Los Angeles. Heavyweight, boxy, and premium. For brands that want to say something.',
    blank: 14.50, blankMarkup: 1.50, printCat: 'base',
  },
  {
    slug: 'lane-seven-ls16005gd',
    category: 'tees',
    name: 'Lane Seven LS16005GD',
    fullName: 'Lane Seven LS16005GD — Urban Heavy Tee Garment Dyed',
    tags: ['Garment Dyed', 'Oversized Fit'],
    weight: '7.5 oz',
    fit: 'Oversized/boxy, streetwear silhouette',
    material: '100% ring-spun cotton, garment dyed',
    description: 'Heavier and more premium than the 1717. The luxury garment-dyed option for streetwear and lifestyle clients.',
    blank: 11.50, blankMarkup: 1.50, printCat: 'base',
  },
  // ── HOODIES & CREWNECKS ───────────────────────────────────────────────────
  {
    slug: 'as-colour-5101',
    category: 'hoodies',
    name: 'AS Colour 5101',
    fullName: 'AS Colour 5101 — Premium Hoodie',
    tags: ['Premium', 'Retail Weight'],
    weight: '12 oz',
    fit: 'Relaxed',
    material: '80% cotton, 20% polyester fleece',
    description: "AS Colour's flagship hoodie. Heavy, premium, and retail-ready.",
    blank: 38.00, blankMarkup: 5.00, printCat: 'fleece',
  },
  {
    slug: 'as-colour-5100',
    category: 'hoodies',
    name: 'AS Colour 5100',
    fullName: 'AS Colour 5100 — Supply Hood',
    tags: ['Classic Fit', 'Versatile'],
    weight: '10 oz',
    fit: 'Classic',
    material: '80% cotton, 20% polyester fleece',
    description: 'The everyday hoodie. Clean, versatile, works for any program.',
    blank: 28.50, blankMarkup: 5.00, printCat: 'fleece',
  },
  {
    slug: 'bella-canvas-3719',
    category: 'hoodies',
    name: 'Bella+Canvas 3719',
    fullName: 'Bella+Canvas 3719 — Unisex Sponge Fleece Pullover Hoodie',
    tags: ['Soft', 'Retail Fit'],
    weight: '7.2 oz',
    fit: 'Slim/retail',
    material: '52% Airlume cotton, 48% poly fleece',
    description: 'Softest hoodie in the lineup. Retail-slim fit, great for lifestyle and fashion brands.',
    blank: 24.50, blankMarkup: 5.00, printCat: 'fleece',
  },
  {
    slug: 'comfort-colors-1566',
    category: 'hoodies',
    name: 'Comfort Colors 1566',
    fullName: 'Comfort Colors 1566 — Garment Dyed Hoodie',
    tags: ['Garment Dyed', 'Vintage Feel'],
    weight: '10 oz',
    fit: 'Relaxed',
    material: '100% ring-spun cotton, garment dyed',
    description: 'Garment-dyed hoodie. Same broken-in softness as the 1717 tee, now in a pullover.',
    blank: 28.00, blankMarkup: 5.00, printCat: 'fleece',
  },
  {
    slug: 'as-colour-5120',
    category: 'hoodies',
    name: 'AS Colour 5120',
    fullName: 'AS Colour 5120 — Stencil Hood',
    tags: ['Zip-Up', 'Clean Look'],
    weight: '10 oz',
    fit: 'Classic',
    material: '80% cotton, 20% polyester fleece',
    description: 'Full-zip hoodie for programs that want layering options.',
    blank: 32.00, blankMarkup: 5.00, printCat: 'fleece',
  },
  {
    slug: 'as-colour-5120-crew',
    category: 'hoodies',
    name: 'AS Colour 5120 Crew',
    fullName: 'AS Colour 5120 — Crew Sweatshirt',
    tags: ['Crewneck', 'Clean Minimal'],
    weight: '10 oz',
    fit: 'Classic',
    material: '80% cotton, 20% polyester fleece',
    description: 'Clean crewneck. Goes with everything. Works for corporate, lifestyle, and retail programs.',
    blank: 28.00, blankMarkup: 5.00, printCat: 'fleece',
  },
  // ── FLEECE BOTTOMS ────────────────────────────────────────────────────────
  {
    slug: 'as-colour-5921',
    category: 'fleece-bottoms',
    name: 'AS Colour 5921',
    fullName: 'AS Colour 5921 — Stencil Track Pant',
    tags: ['Track Pant', 'Set-Ready'],
    weight: '10 oz',
    fit: 'Relaxed',
    material: '80% cotton, 20% polyester fleece',
    description: 'The matching pant to pair with AS Colour hoodies and crews.',
    blank: 28.00, blankMarkup: 5.00, printCat: 'fleece',
  },
  {
    slug: 'as-colour-5942',
    category: 'fleece-bottoms',
    name: 'AS Colour 5942',
    fullName: 'AS Colour 5942 — Relax Cuffless Track Pant',
    tags: ['Relaxed Leg', 'Streetwear'],
    weight: '10 oz',
    fit: 'Relaxed, open hem',
    material: '80% cotton, 20% polyester fleece',
    description: 'Open-hem track pant. Streetwear-forward, pairs well with heavier tees.',
    blank: 30.00, blankMarkup: 5.00, printCat: 'fleece',
  },
  {
    slug: 'as-colour-5933',
    category: 'fleece-bottoms',
    name: 'AS Colour 5933',
    fullName: 'AS Colour 5933 — Relax Track Short 18"',
    tags: ['Shorts', '18 Inch'],
    weight: '10 oz',
    fit: 'Relaxed',
    material: '80% cotton, 20% polyester fleece',
    description: 'Longer-length fleece short. Resort and lifestyle programs love these.',
    blank: 26.00, blankMarkup: 5.00, printCat: 'fleece',
  },
  {
    slug: 'as-colour-5903',
    category: 'fleece-bottoms',
    name: 'AS Colour 5903',
    fullName: 'AS Colour 5903 — Beach Short 17"',
    tags: ['Beach', 'Summer'],
    weight: '10 oz',
    fit: 'Relaxed',
    material: '80% cotton, 20% polyester fleece',
    description: 'Made for summer programs, beach clubs, and resort gift shops.',
    blank: 26.00, blankMarkup: 5.00, printCat: 'fleece',
  },
  // ── WOMEN'S ───────────────────────────────────────────────────────────────
  {
    slug: 'as-colour-4001',
    category: 'womens',
    name: 'AS Colour 4001',
    fullName: "AS Colour 4001 — Maple Tee",
    tags: ["Women's", 'Relaxed'],
    weight: '5.1 oz',
    fit: 'Relaxed',
    material: '100% cotton',
    description: "Women's relaxed tee. Slightly cropped, works as a unisex oversized option too.",
    blank: 9.50, blankMarkup: 1.50, printCat: 'base',
  },
  {
    slug: 'as-colour-4030',
    category: 'womens',
    name: 'AS Colour 4030',
    fullName: "AS Colour 4030 — Women's Box Tee",
    tags: ["Women's", 'Boxy'],
    weight: '5.3 oz',
    fit: 'Boxy',
    material: '100% cotton',
    description: "Boxy silhouette, women's-specific. Great for brands with a strong female customer.",
    blank: 9.50, blankMarkup: 1.50, printCat: 'base',
  },
  {
    slug: 'as-colour-4072',
    category: 'womens',
    name: 'AS Colour 4072',
    fullName: "AS Colour 4072 — Women's Classic Crop Tee",
    tags: ["Women's", 'Crop'],
    weight: '5.3 oz',
    fit: 'Cropped',
    material: '100% cotton',
    description: 'Crop tee. Lifestyle, fitness, and fashion programs.',
    blank: 9.80, blankMarkup: 1.50, printCat: 'base',
  },
  {
    slug: 'as-colour-4007',
    category: 'womens',
    name: 'AS Colour 4007',
    fullName: 'AS Colour 4007 — Bowery Tank',
    tags: ["Women's", 'Tank'],
    weight: '4.5 oz',
    fit: 'Relaxed',
    material: '100% cotton',
    description: 'Relaxed tank. Gym, beach, resort.',
    blank: 8.50, blankMarkup: 1.50, printCat: 'base',
  },
  // ── OUTERWEAR ─────────────────────────────────────────────────────────────
  {
    slug: 'as-colour-5520',
    category: 'outerwear',
    name: 'AS Colour 5520',
    fullName: 'AS Colour 5520 — Coach Jacket',
    tags: ['Coach Jacket', 'Premium'],
    weight: 'Woven shell',
    fit: 'Relaxed',
    material: '100% nylon shell, polyester lining',
    description: 'Clean, premium coach jacket. Retail-quality outerwear for brands that want to go beyond the hoodie.',
    blank: 54.00, blankMarkup: 5.00, printCat: 'jacket',
  },
  {
    slug: 'exp54lwp',
    category: 'outerwear',
    name: 'EXP54LWP',
    fullName: 'EXP54LWP — Lightweight Windbreaker',
    tags: ['Windbreaker', 'Packable'],
    weight: 'Ultra-light shell',
    fit: 'Regular',
    material: '100% polyester, packable',
    description: 'Lightweight, packable windbreaker. Great for outdoor, tech, and active lifestyle brands.',
    blank: 38.00, blankMarkup: 5.00, printCat: 'jacket',
  },
  {
    slug: 'as-colour-5522',
    category: 'outerwear',
    name: 'AS Colour 5522',
    fullName: 'AS Colour 5522 — Chore Jacket',
    tags: ['Chore Coat', 'Workwear Aesthetic'],
    weight: '10 oz canvas',
    fit: 'Relaxed',
    material: '100% cotton canvas',
    description: 'Heavy canvas chore jacket. For brands with a craft, trade, or workwear identity.',
    blank: 58.00, blankMarkup: 5.00, printCat: 'jacket',
  },
];

// ── Category display map ──────────────────────────────────────────────────────

export const CATEGORY_LABELS: Record<CatalogCategory, string> = {
  tees: 'Tees',
  hoodies: 'Hoodies & Crewnecks',
  'fleece-bottoms': 'Fleece Bottoms',
  outerwear: 'Outerwear',
  womens: "Women's",
  headwear: 'Headwear',
  socks: 'Socks',
};

export const CATEGORY_ORDER: CatalogCategory[] = [
  'tees',
  'hoodies',
  'fleece-bottoms',
  'outerwear',
  'womens',
  'headwear',
  'socks',
];
