// ── Pricing engine ────────────────────────────────────────────────────────────

export type PrintCat = "base" | "fleece" | "jacket";
export type CatalogFrontDecoration = "screenPrint" | "embroidery";
export type CatalogSpecialtyPrintUpgrade = "Water-Based Ink" | "Discharge Print" | "Puff Print";
export type CatalogPackagingUpgrade = "Printed neck label" | "Woven label" | "Folded + poly bagged";

type JolColorCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

type JolTier = {
  min: number;
  max: number | null;
  rates: Record<JolColorCount, number>;
};

const JOL_SCREEN_PRINT_TIERS: JolTier[] = [
  { min: 1, max: 23, rates: { 1: 4.75, 2: 5.0, 3: 5.35, 4: 5.5, 5: 5.75, 6: 6.0, 7: 6.5, 8: 7.0 } },
  { min: 24, max: 47, rates: { 1: 3.15, 2: 3.35, 3: 3.55, 4: 3.65, 5: 3.8, 6: 3.95, 7: 4.3, 8: 4.6 } },
  { min: 48, max: 95, rates: { 1: 2.45, 2: 2.65, 3: 2.9, 4: 3.15, 5: 3.5, 6: 3.8, 7: 4.2, 8: 4.9 } },
  { min: 96, max: 143, rates: { 1: 2.3, 2: 2.4, 3: 2.65, 4: 2.9, 5: 3.1, 6: 3.4, 7: 3.8, 8: 4.5 } },
  { min: 144, max: 287, rates: { 1: 2.1, 2: 2.3, 3: 2.55, 4: 2.75, 5: 2.9, 6: 3.1, 7: 3.5, 8: 4.25 } },
  { min: 288, max: 503, rates: { 1: 1.75, 2: 2.0, 3: 2.2, 4: 2.3, 5: 2.5, 6: 2.65, 7: 2.95, 8: 3.45 } },
  { min: 504, max: 791, rates: { 1: 1.6, 2: 1.7, 3: 1.9, 4: 2.05, 5: 2.25, 6: 2.45, 7: 2.55, 8: 2.85 } },
  { min: 792, max: 1199, rates: { 1: 1.5, 2: 1.75, 3: 1.8, 4: 1.9, 5: 2.0, 6: 2.15, 7: 2.3, 8: 2.75 } },
  { min: 1200, max: 1999, rates: { 1: 1.4, 2: 1.6, 3: 1.75, 4: 1.8, 5: 1.9, 6: 2.0, 7: 2.1, 8: 2.4 } },
  { min: 2000, max: 2499, rates: { 1: 1.25, 2: 1.4, 3: 1.5, 4: 1.7, 5: 1.8, 6: 1.85, 7: 1.9, 8: 2.1 } },
];

export const JOL_SETUP_SCREEN_COST = 25;
export const JOL_SETUP_FILM_COST = 10;
export const JOL_FLASH_CURE_PRICE = 0.5;
export const JOL_FLEECE_OR_SLEEVE_PRICE = 0.25;
export const JOL_SPECIALTY_INK_PRICE = 0.75;
export const JOL_CUSTOMER_SUPPLIED_GOODS_PRICE = 0.25;
export const JOL_PRINT_MARKUP_MULTIPLIER = 1.1;

export const jolRates: Record<number, number> = {
  100: 2.30, 250: 2.10, 500: 1.75, 1000: 1.50, 1500: 1.40, 2000: 1.25,
};

export const screens: Record<number, number> = {
  100: 0.50, 250: 0.20, 500: 0.10, 1000: 0.05, 1500: 0.0333, 2000: 0.025,
};

export const margins: Record<number, number> = {
  100: 3.00, 250: 2.75, 500: 2.50, 1000: 2.50, 1500: 2.50, 2000: 2.50,
};

export const CATALOG_PACKAGING_PRICES: Record<CatalogPackagingUpgrade, number> = {
  "Printed neck label": 2,
  "Woven label": 3.5,
  "Folded + poly bagged": 1,
};

function roundToQuarter(value: number) {
  return Math.round(value * 4) / 4;
}

function clampColorCount(colorCount: number): JolColorCount {
  return Math.max(1, Math.min(8, Math.round(colorCount || 1))) as JolColorCount;
}

function getMarginForQty(qty: number) {
  if (qty >= 2000) return margins[2000];
  if (qty >= 1500) return margins[1500];
  if (qty >= 1000) return margins[1000];
  if (qty >= 500) return margins[500];
  if (qty >= 250) return margins[250];
  return margins[100];
}

function getJolTier(qty: number) {
  return JOL_SCREEN_PRINT_TIERS.find((tier) => qty >= tier.min && (tier.max === null || qty <= tier.max))
    ?? JOL_SCREEN_PRINT_TIERS[JOL_SCREEN_PRINT_TIERS.length - 1];
}

export function getJolPrintRate(qty: number, colorCount: number) {
  return getJolTier(qty).rates[clampColorCount(colorCount)];
}

export function getJolSetupAmortizedPerUnit(qty: number, totalScreenColors: number) {
  return ((JOL_SETUP_SCREEN_COST + JOL_SETUP_FILM_COST) * Math.max(0, totalScreenColors)) / Math.max(qty, 1);
}

type JolLocationPriceInput = {
  qty: number;
  colorCount: number;
  printCat: PrintCat;
  isSleeveOrSide?: boolean;
};

export function calculateJolScreenPrintLocationUnitPrice({
  qty,
  colorCount,
  printCat,
  isSleeveOrSide = false,
}: JolLocationPriceInput) {
  const catUpcharge = printCat === "fleece" ? JOL_FLEECE_OR_SLEEVE_PRICE : printCat === "jacket" ? 0.75 : 0;
  const placementUpcharge = isSleeveOrSide ? JOL_FLEECE_OR_SLEEVE_PRICE : 0;
  const printRate = getJolPrintRate(qty, colorCount);
  const setupAmortization = getJolSetupAmortizedPerUnit(qty, clampColorCount(colorCount));

  return (printRate + JOL_FLASH_CURE_PRICE + catUpcharge + placementUpcharge) * JOL_PRINT_MARKUP_MULTIPLIER + setupAmortization;
}

export type CatalogBuilderPricingInput = {
  blank: number;
  blankMarkup: number;
  printCat: PrintCat;
  qty: number;
  frontDecoration: CatalogFrontDecoration;
  frontColors?: number;
  backPrintColors?: number;
  sidePrintColors?: number;
  printUpgrade?: CatalogSpecialtyPrintUpgrade | null;
  packagingUpgrades?: CatalogPackagingUpgrade[];
  rush?: boolean;
  customerSuppliedGoods?: boolean;
};

export type CatalogBuilderPricingBreakdown = {
  baseUnitPrice: number;
  addOnUnitPrice: number;
  unitPrice: number;
  frontDecorationUnitPrice: number;
  frontExtraColorUnitPrice: number;
  backPrintUnitPrice: number;
  sidePrintUnitPrice: number;
  specialtyUpgradeUnitPrice: number;
  packagingUnitPrice: number;
  rushUnitPrice: number;
  customerSuppliedGoodsUnitPrice: number;
  marginUnitPrice: number;
};

export function calculateCatalogBuilderPricing({
  blank,
  blankMarkup,
  printCat,
  qty,
  frontDecoration,
  frontColors = 1,
  backPrintColors = 0,
  sidePrintColors = 0,
  printUpgrade = null,
  packagingUpgrades = [],
  rush = false,
  customerSuppliedGoods = false,
}: CatalogBuilderPricingInput): CatalogBuilderPricingBreakdown {
  const marginUnitPrice = getMarginForQty(qty);
  const baseBlankUnitPrice = blank + blankMarkup;
  const frontBasePrintUnitPrice = frontDecoration === "screenPrint"
    ? calculateJolScreenPrintLocationUnitPrice({ qty, colorCount: 1, printCat })
    : 0;
  const frontFullPrintUnitPrice = frontDecoration === "screenPrint"
    ? calculateJolScreenPrintLocationUnitPrice({ qty, colorCount: frontColors, printCat })
    : 0;
  const frontExtraColorUnitPrice = frontDecoration === "screenPrint"
    ? Math.max(0, frontFullPrintUnitPrice - frontBasePrintUnitPrice)
    : 0;
  const frontDecorationUnitPrice = frontDecoration === "embroidery" ? 3 : frontBasePrintUnitPrice;
  const backPrintUnitPrice = backPrintColors > 0
    ? calculateJolScreenPrintLocationUnitPrice({ qty, colorCount: backPrintColors, printCat })
    : 0;
  const sidePrintUnitPrice = sidePrintColors > 0
    ? calculateJolScreenPrintLocationUnitPrice({ qty, colorCount: sidePrintColors, printCat, isSleeveOrSide: true })
    : 0;
  const screenPrintedPlacements =
    (frontDecoration === "screenPrint" ? 1 : 0) +
    (backPrintColors > 0 ? 1 : 0) +
    (sidePrintColors > 0 ? 1 : 0);
  const specialtyUpgradeUnitPrice = printUpgrade ? JOL_SPECIALTY_INK_PRICE * screenPrintedPlacements : 0;
  const packagingUnitPrice = packagingUpgrades.reduce(
    (total, label) => total + (CATALOG_PACKAGING_PRICES[label] ?? 0),
    0
  );
  const rushUnitPrice = rush ? 3 : 0;
  const customerSuppliedGoodsUnitPrice = customerSuppliedGoods ? JOL_CUSTOMER_SUPPLIED_GOODS_PRICE : 0;

  const baseUnitPrice = roundToQuarter(baseBlankUnitPrice + frontDecorationUnitPrice + marginUnitPrice);
  const addOnUnitPrice = roundToQuarter(
    frontExtraColorUnitPrice +
      backPrintUnitPrice +
      sidePrintUnitPrice +
      specialtyUpgradeUnitPrice +
      packagingUnitPrice +
      rushUnitPrice +
      customerSuppliedGoodsUnitPrice
  );

  return {
    baseUnitPrice,
    addOnUnitPrice,
    unitPrice: roundToQuarter(baseUnitPrice + addOnUnitPrice),
    frontDecorationUnitPrice: roundToQuarter(frontDecorationUnitPrice),
    frontExtraColorUnitPrice: roundToQuarter(frontExtraColorUnitPrice),
    backPrintUnitPrice: roundToQuarter(backPrintUnitPrice),
    sidePrintUnitPrice: roundToQuarter(sidePrintUnitPrice),
    specialtyUpgradeUnitPrice: roundToQuarter(specialtyUpgradeUnitPrice),
    packagingUnitPrice: roundToQuarter(packagingUnitPrice),
    rushUnitPrice: roundToQuarter(rushUnitPrice),
    customerSuppliedGoodsUnitPrice: roundToQuarter(customerSuppliedGoodsUnitPrice),
    marginUnitPrice: roundToQuarter(marginUnitPrice),
  };
}

export function calcPrice(
  blank: number,
  blankMarkup: number,
  printCat: PrintCat,
  qty: number
): number {
  return calculateCatalogBuilderPricing({
    blank,
    blankMarkup,
    printCat,
    qty,
    frontDecoration: "screenPrint",
    frontColors: 1,
  }).unitPrice;
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
