/**
 * DRAFT PAGE — sandbox for new sections before they go live.
 * Does NOT affect any existing pages.
 * View at: /draft
 */

import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { ShoppableProduct } from "@/components/ShoppableProduct";
import { CTASection } from "@/components/CTASection";

// ─── Process steps data ──────────────────────────────────────────────────────

const processSteps = [
  {
    number: "01",
    title: "Tell us what you need",
    body: "Product, quantity, timeline, budget. We'll take it from there. No deck required.",
    icon: "✏️",
  },
  {
    number: "02",
    title: "We handle design",
    body: "Mockups, tech packs, material selection. Nothing goes to production without your final sign-off.",
    icon: "🎨",
  },
  {
    number: "03",
    title: "Production + delivery",
    body: "Factory-direct production. Shipped to your door with full tracking.",
    icon: "📦",
  },
];

// ─── Hat product data ─────────────────────────────────────────────────────────

const hatAddOnGroups = [
  {
    heading: "Decoration Upgrades",
    note: "One front decoration included. Upgrades apply per hat.",
    items: [
      { label: "Flat Embroidery", price: "Included" },
      { label: "Woven Patch", price: "Included" },
      { label: "Embroidered Patch", price: "Included" },
      { label: "Woven Label", price: "Included" },
      { label: "Printed", price: "Included" },
      { label: "3D Raised Embroidery", price: "+$0.50" },
      { label: "Felt Patch", price: "+$0.50" },
      { label: "Chain-Stitch Embroidery", price: "+$0.50" },
      { label: "Printed Patch", price: "+$0.50" },
      { label: "Chenille Patch", price: "+$0.50" },
      { label: "PVC Rubber Patch", price: "+$0.75" },
      { label: "Leather Patch", price: "+$1.00" },
    ],
  },
  {
    heading: "Branding Add-Ons",
    note: "Choose any 2 for $1.75/each in Hat Core Deluxe.",
    items: [
      { label: "Interior Woven Label", price: "Included" },
      { label: "Interior Taping", price: "+$1.00" },
      { label: "Back Embroidery", price: "+$1.00" },
      { label: "Side Embroidery", price: "+$1.00" },
      { label: "Brim Rope", price: "+$1.00" },
      { label: "Strap Flag Label", price: "+$1.00" },
    ],
  },
  {
    heading: "Closure Upgrades",
    items: [
      { label: "Plastic Snapback", price: "Included" },
      { label: "Metal Clasp", price: "Included" },
      { label: "Velcro", price: "Included" },
      { label: "Plastic Clasp", price: "Included" },
      { label: "Metal Slide", price: "Included" },
      { label: "Leather / Metal Clasp", price: "+$1.00" },
    ],
  },
];

const hatTiers = [
  {
    label: "100 – 249 units",
    corePrice: "$13.00 / hat",
    deluxePrice: "$14.75 / hat",
    note: "Lead time: 6–8 weeks from kickoff",
    coreFeatures: [
      "One front decoration (embroidery, patch, or label)",
      "Sweatband woven label",
      "Custom fabric & color",
      "Custom shape & structure",
      "Free shipping",
      "Free mockups · No hidden fees",
    ],
    deluxeFeatures: [
      "Everything in Hat Core",
      "2 branding add-ons of your choice",
      "Back/side embroidery, branded taping, rope, closure flag, strap label",
      "Free shipping",
      "Free mockups · No hidden fees",
    ],
  },
  {
    label: "250 – 499 units",
    corePrice: "$12.50 / hat",
    deluxePrice: "$14.25 / hat",
    note: "Lead time: 6–8 weeks from kickoff",
    coreFeatures: [
      "One front decoration (embroidery, patch, or label)",
      "Sweatband woven label",
      "Custom fabric & color",
      "Custom shape & structure",
      "Free shipping",
      "Free mockups · No hidden fees",
    ],
    deluxeFeatures: [
      "Everything in Hat Core",
      "2 branding add-ons of your choice",
      "Back/side embroidery, branded taping, rope, closure flag, strap label",
      "Free shipping",
      "Free mockups · No hidden fees",
    ],
  },
  {
    label: "500 – 999 units",
    corePrice: "$11.50 / hat",
    deluxePrice: "$13.25 / hat",
    note: "Lead time: 6–8 weeks from kickoff",
    coreFeatures: [
      "One front decoration (embroidery, patch, or label)",
      "Sweatband woven label",
      "Custom fabric & color",
      "Custom shape & structure",
      "Free shipping",
      "Free mockups · No hidden fees",
    ],
    deluxeFeatures: [
      "Everything in Hat Core",
      "2 branding add-ons of your choice",
      "Back/side embroidery, branded taping, rope, closure flag, strap label",
      "Free shipping",
      "Free mockups · No hidden fees",
    ],
  },
  {
    label: "1,000 – 1,999 units",
    corePrice: "$10.50 / hat",
    deluxePrice: "$12.25 / hat",
    note: "Contact us for 2,000+ pricing",
    coreFeatures: [
      "Everything in smaller tiers",
      "Volume price lock",
      "Free shipping",
      "Free mockups · No hidden fees",
    ],
    deluxeFeatures: [
      "Everything in Hat Core",
      "2 branding add-ons of your choice",
      "Volume price lock",
      "Free shipping",
      "Free mockups · No hidden fees",
    ],
  },
];

const hatVariants = [
  {
    name: "Dad Hat",
    modelNum: "OG100",
    description: "Your go-to hat. 6-panel unstructured, mid profile, slightly curved bill. Made for every occasion — the everyday workhorse.",
    image: "/images/product/hat-lifestyle-hero.jpg",
  },
  {
    name: "Standard Cap",
    modelNum: "OG110",
    description: "5-panel unstructured mid profile. Clean lines, relaxed fit — works for nearly any brand.",
    image: "/images/product/hat-lifestyle-secondary.jpg",
  },
  {
    name: "Coast Cap",
    modelNum: "OG120",
    description: "6-panel unstructured, low profile. Soft construction with a laid-back, coastal feel.",
    image: "/images/product/hat-lifestyle-hero.jpg",
  },
  {
    name: "Setter Cap",
    modelNum: "OG130",
    description: "5-panel structured cap. Clean, bold profile with a flat bill. Great for patches and statement logos.",
    image: "/images/product/hat-bucket-hero.jpg",
  },
  {
    name: "Surf Trucker",
    modelNum: "OG140",
    description: "Unstructured front with mesh back. Relaxed trucker profile with a worn-in feel — great for lifestyle brands.",
    image: "/images/product/hat-lifestyle-hero.jpg",
  },
  {
    name: "Stock Trucker",
    modelNum: "OG150",
    description: "Structured front, mesh back. The classic trucker silhouette — bold, breathable, and versatile.",
    image: "/images/product/hat-lifestyle-secondary.jpg",
  },
  {
    name: "Field Trucker",
    modelNum: "OG160",
    description: "6-panel structured trucker with mesh back. More real estate for your logo or art.",
    image: "/images/product/hat-bucket-hero.jpg",
  },
  {
    name: "Foam Trucker",
    modelNum: "OG170",
    description: "High-profile foam front trucker. Bold, tall crown — built for brands that make a statement.",
    image: "/images/product/hat-lifestyle-hero.jpg",
  },
  {
    name: "Trail Cap",
    modelNum: "OG180",
    description: "5-panel camper cap. Soft brim, relaxed crown. Adventure-ready and outdoor-approved.",
    image: "/images/product/hat-lifestyle-secondary.jpg",
  },
  {
    name: "Highline Cap",
    modelNum: "OG190",
    description: "5-panel structured high profile. Makes a visual statement — a favorite for streetwear and music brands.",
    image: "/images/product/hat-bucket-hero.jpg",
  },
  {
    name: "Perform Cap",
    modelNum: "OG200",
    description: "Lightweight, breathable performance polyester. Built for active use without sacrificing the look.",
    image: "/images/product/hat-lifestyle-hero.jpg",
  },
  {
    name: "Bucket Hat",
    modelNum: "OG210",
    description: "Fully custom bucket hat silhouette. Corduroy, canvas, denim — your call. Perfect for summer drops and outdoor brands.",
    image: "/images/product/hat-bucket-hero.jpg",
  },
];

const hatTabs = [
  {
    label: "Description",
    content:
      "All OG custom hats are built from scratch — your fabric, your shape, your finish. 12 fabric options, 12 decoration types, and full control over every detail from brim color to sweatband label. We handle design in-house and manage production start to finish. No guessing, no middlemen. MOQ: 100 hats per style.",
  },
  {
    label: "Hat Guide",
    content:
      "12 silhouettes available — from classic 6-panel dad hats (OG100) to high-profile foam truckers (OG170) and bucket hats (OG210). Not sure which fits your brand? Dad hat (OG100) is our most versatile. Trucker styles (OG140–OG160) are great for outdoor and active brands. OG190 high-profile structured is bold — streetwear and music-ready. Bucket (OG210) is perfect for summer drops.",
  },
  {
    label: "Production & Delivery",
    content:
      "8–10 weeks from kickoff to delivery. That includes: design approval, mockups, tech pack sign-off, and factory production. Free shipping on all orders. Physical sample available once your full order is confirmed ($40 shipping covered by you). Every hat ships with full tracking.",
  },
  {
    label: "Templates",
    content: (
      <div className="space-y-3">
        <p>Download our tech pack template to prep your artwork or brief your designer. Includes placement guides for all 12 hat styles.</p>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-lg border border-[#0B32A0]/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--og-blue)] transition hover:border-[var(--og-orange)] hover:text-[var(--og-orange)]"
        >
          ↓ Download Tech Pack Template
        </a>
      </div>
    ),
  },
  {
    label: "Swatches",
    content: (
      <div className="space-y-3">
        <p>12 fabric options including cotton twill, canvas, corduroy, denim, faux suede, ripstop, performance poly, nylon, camo, and mesh. Dozens of additional colors available. Download our swatch library to share with your team.</p>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-lg border border-[#0B32A0]/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--og-blue)] transition hover:border-[var(--og-orange)] hover:text-[var(--og-orange)]"
        >
          ↓ Download Fabric Swatches
        </a>
      </div>
    ),
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function DraftPage() {
  return (
    <main className="pb-24 md:pb-0">
      {/* ── 1. ANNOUNCEMENT BAR ─────────────────────────────────────────── */}
      <AnnouncementBar message="Quality merch built to last" />

      {/* Draft label */}
      <div className="border-b border-dashed border-[#FF4200]/30 bg-[#FFF3EE] px-4 py-2 text-center text-xs text-[#FF4200]/70">
        🚧 Draft — sandbox page for new sections. Not linked in nav.
      </div>

      {/* ── 2. HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="px-4 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
            The Process
          </p>
          <h2
            className="mt-4 text-4xl font-semibold leading-tight text-[var(--og-blue)] md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            From brief to your door — one team, start to finish
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[var(--og-muted)]">
            No vendor juggling. No broken phone games. We handle design,
            production, and delivery under one roof.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="relative rounded-[1.75rem] border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)] p-7"
              >
                <p
                  className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--og-orange)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.number}
                </p>
                <div className="mt-4 text-3xl">{step.icon}</div>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--og-blue)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--og-muted)]">
                  {step.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center rounded-xl bg-[var(--og-orange)] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d73b05]"
            >
              Start a Project
            </Link>
            <Link
              href="/build"
              className="inline-flex min-h-12 items-center rounded-xl border border-[#0B32A0]/20 px-6 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--og-blue)] transition hover:border-[var(--og-orange)] hover:text-[var(--og-orange)]"
            >
              Build Online
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-[#0B32A0]/10" />

      {/* ── 3. SHOPPABLE PRODUCT (Hats) ──────────────────────────────────── */}
      <section className="px-4 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto mb-10 max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
            Featured Product
          </p>
          <h2
            className="mt-3 text-4xl font-semibold text-[var(--og-blue)] md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Custom Hats
          </h2>
        </div>
        <ShoppableProduct
          name="Custom Headwear"
          tagline="Pick your style, pick your quantity — we'll build the rest."
          image="/images/product/hat-lifestyle-hero.jpg"
          tiers={hatTiers}
          variants={hatVariants}
          tabs={hatTabs}
          addOnGroups={hatAddOnGroups}
          ctaHref="/contact"
          ctaLabel="Start My Hat Order"
        />
      </section>

      <CTASection
        title="Ready to make something worth keeping?"
        description="Tell us what you're making, how many you need, and when it has to land."
        buttonLabel="Start a Project"
        buttonHref="/contact"
      />
    </main>
  );
}
