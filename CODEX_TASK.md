# Codex Task — Shoppable Product Catalog + Quote Flow

Branch: `feat/shoppable-catalog`
Do NOT merge the PR. Open it and stop.

---

## Goal

Build a shoppable product catalog on the Orange Goods website. Clients should be able to browse products, configure their order (qty, decoration), see live pricing, and either:
1. **Request a Quote** → sends details to Hello@OrangeGoods.co via a `mailto:` link or a form POST to `/api/quote`
2. **Add to Cart** → Shopify checkout (scaffold the button/flow; Shopify credentials not yet wired, so disable/stub gracefully)

This is a B2B catalog, not a consumer shop. Clients are ordering branded goods in bulk (minimum 100 units).

---

## Pages to Build

### 1. `/catalog` — Catalog index page

A browsable grid of all products, filterable by category. Categories:
- Tees
- Hoodies & Crewnecks
- Fleece Bottoms
- Outerwear
- Women's
- Headwear
- Socks

Each product card shows:
- Product name + blank style number
- Starting price ("From $XX/ea at 100 units")
- 1–2 tags (e.g. `Retail Fit`, `Garment Dyed`)
- Thumbnail image (use existing OG site images or placeholder)
- Link to product detail page `/catalog/[slug]`

### 2. `/catalog/[slug]` — Product detail + configurator

Each product page has:
- Product name, blank info (brand, style, weight, fit)
- Short description + 1–2 call-outs
- **Live pricing configurator:**
  - Qty selector: 100 / 250 / 500 / 1,000 / 1,500 / 2,000 / Let's Talk (2,500+)
  - Add-on checkboxes (see add-ons below)
  - Price updates live as qty/add-ons change
  - Shows per-unit price + estimated total
- **What's included** section
- **Add-ons** section
- **Turnaround:** 2–3 weeks
- Two CTAs:
  - "Request a Quote" → opens mailto or form with pre-filled product/qty/add-ons
  - "Add to Cart" → stubbed (disabled with tooltip "Shopify checkout coming soon")

---

## Product Data

Build a `data/catalog.ts` file with all products. Use this exact data:

### Pricing Formula (for the configurator)

```ts
// Jol print rates (1-color screen print, includes $0.50 flash)
const jolRates: Record<number, number> = {
  100: 2.30, 250: 2.10, 500: 1.75, 1000: 1.50, 1500: 1.40, 2000: 1.25
};
// Screen amortized ($50 setup / qty)
const screens: Record<number, number> = {
  100: 0.50, 250: 0.20, 500: 0.10, 1000: 0.05, 1500: 0.0333, 2000: 0.025
};
// Flat margins
const margins: Record<number, number> = {
  100: 3.00, 250: 2.75, 500: 2.50, 1000: 2.50, 1500: 2.50, 2000: 2.50
};

function calcPrice(
  blank: number,
  blankMarkup: number,
  printCat: 'base' | 'fleece' | 'jacket',
  qty: number
): number {
  const catUpcharge = printCat === 'fleece' ? 0.25 : printCat === 'jacket' ? 0.75 : 0;
  const sell =
    (blank + blankMarkup) +
    (jolRates[qty] + 0.50 + 0.25 + catUpcharge) * 1.10 +
    screens[qty] +
    margins[qty];
  return Math.round(sell * 4) / 4; // round to nearest $0.25
}
```

For qty=2500+ → show "Let's Talk" (no numeric price).

### Add-on pricing (applied on top of base price per unit)

```ts
const addons = {
  extraColor:      { label: 'Additional print color',  price: 1.00 },
  backPrint:       { label: 'Back print',               price: 3.00 },
  waterBasedPuff:  { label: 'Water-based / puff ink',   price: 1.00 },
  embroidery:      { label: 'Embroidery (instead of print)', price: 3.00 },
  neckLabel:       { label: 'Printed neck label',       price: 2.00 },
  wovenLabel:      { label: 'Woven label',              price: 3.50 },
  polybagged:      { label: 'Polybagged + folded',      price: 1.00 },
};
```

### Products (use exactly these)

```ts
export const CATALOG_PRODUCTS = [
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
    description: 'AS Colour\'s flagship tee. Heavier than BC 3001, boxier fit, excellent for retail programs.',
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
    description: 'AS Colour\'s flagship hoodie. Heavy, premium, and retail-ready.',
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
    fullName: 'AS Colour 4001 — Maple Tee',
    tags: ['Women\'s', 'Relaxed'],
    weight: '5.1 oz',
    fit: 'Relaxed',
    material: '100% cotton',
    description: 'Women\'s relaxed tee. Slightly cropped, works as a unisex oversized option too.',
    blank: 9.50, blankMarkup: 1.50, printCat: 'base',
  },
  {
    slug: 'as-colour-4030',
    category: 'womens',
    name: 'AS Colour 4030',
    fullName: 'AS Colour 4030 — Women\'s Box Tee',
    tags: ['Women\'s', 'Boxy'],
    weight: '5.3 oz',
    fit: 'Boxy',
    material: '100% cotton',
    description: 'Boxy silhouette, women\'s-specific. Great for brands with a strong female customer.',
    blank: 9.50, blankMarkup: 1.50, printCat: 'base',
  },
  {
    slug: 'as-colour-4072',
    category: 'womens',
    name: 'AS Colour 4072',
    fullName: 'AS Colour 4072 — Women\'s Classic Crop Tee',
    tags: ['Women\'s', 'Crop'],
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
    tags: ['Women\'s', 'Tank'],
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
```

Note on Lane Seven blank cost: I've used `11.50` as the blank cost since the deck guide shows it's a 7.5oz premium GD tee — positioned between CC 1717 ($7.20) and LA Apparel 1801 ($14.50). If the actual blank cost comes in differently, update `data/catalog.ts` — the formula handles the rest.

---

## Quote flow

When "Request a Quote" is clicked, generate a `mailto:` link:

```
mailto:Hello@OrangeGoods.co
  ?subject=Quote Request — [Product Name]
  &body=Hi Orange Goods team,%0A%0AI'm interested in a quote for:%0A%0AProduct: [Product Name]%0AQty: [qty]%0AAdd-ons: [comma list of selected add-ons, or "None"]%0AEstimated price shown: $[price]/ea%0A%0APlease reach out to discuss details.
```

Alternatively, wire to `/api/quote` if you prefer a server-side approach — POST body `{ product, qty, addons, estimatedPrice }` and respond with a redirect to a `/thank-you?source=quote` page. Either approach is fine.

---

## Shopify stub

Add a disabled "Add to Cart" button with tooltip text: "Shopify checkout coming soon — reach out to order now."
Do NOT wire Shopify keys. Just scaffold the UI so it's ready to enable.

---

## Nav + routing

- Add "Catalog" link to main nav (next to or replacing "Goods") — or add it as a sub-nav item under "Goods"
- Route: `/catalog` and `/catalog/[slug]`

---

## Style guide

Match existing OG site:
- `var(--og-orange)` = `#FF4200`
- `var(--og-blue)` = `#1C1C1C` (dark)
- `var(--og-sand)` = `#E4DFCD`
- Font display: Bebas/display var
- Font body: Figtree
- Rounded cards, generous padding, clean hierarchy
- Tags: small pill badges, orange or muted

Reference existing pages (e.g., `app/goods/hats/page.tsx`, `app/shop/page.tsx`) for component patterns and style conventions.

---

## What to deliver

1. `data/catalog.ts` — all product data + pricing logic
2. `app/catalog/page.tsx` — filterable product grid
3. `app/catalog/[slug]/page.tsx` — product detail + live configurator + quote CTA
4. Nav update to include Catalog link
5. `app/api/quote/route.ts` (optional) — if using server-side quote handler
6. Working dev build (no TypeScript errors, no lint errors)

Do NOT merge the PR. Open it and stop.
