import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Gallery } from "@/components/Gallery";
import { Reveal } from "@/components/Reveal";
import { ShoppableProduct } from "@/components/ShoppableProduct";
import {
  hatAnchorLinks,
  hatFaqs,
  hatGallery,
  hatProcess,
} from "@/lib/content";

const startHatsHref = "/contact";

// ─── Shoppable hat data ───────────────────────────────────────────────────────

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
      "Free shipping · Free mockups",
      "No hidden fees · OG quality guarantee",
    ],
    deluxeFeatures: [
      "Everything in Hat Core",
      "2 branding add-ons of your choice",
      "Back/side embroidery, branded taping, rope, closure flag, strap label",
      "Free shipping · Free mockups",
      "No hidden fees · OG quality guarantee",
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
      "Free shipping · Free mockups",
      "No hidden fees · OG quality guarantee",
    ],
    deluxeFeatures: [
      "Everything in Hat Core",
      "2 branding add-ons of your choice",
      "Back/side embroidery, branded taping, rope, closure flag, strap label",
      "Free shipping · Free mockups",
      "No hidden fees · OG quality guarantee",
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
      "Free shipping · Free mockups",
      "No hidden fees · OG quality guarantee",
    ],
    deluxeFeatures: [
      "Everything in Hat Core",
      "2 branding add-ons of your choice",
      "Back/side embroidery, branded taping, rope, closure flag, strap label",
      "Free shipping · Free mockups",
      "No hidden fees · OG quality guarantee",
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
      "Free shipping · Free mockups",
      "No hidden fees · OG quality guarantee",
    ],
    deluxeFeatures: [
      "Everything in Hat Core",
      "2 branding add-ons of your choice",
      "Volume price lock",
      "Free shipping · Free mockups",
      "No hidden fees · OG quality guarantee",
    ],
  },
];

const hatVariants = [
  { name: "Dad Hat", modelNum: "OG100", description: "Your go-to hat. 6-panel unstructured, mid profile, slightly curved bill. Made for every occasion — the everyday workhorse.", image: "/images/product/hats/og100-dad-front.jpg" },
  { name: "Standard Cap", modelNum: "OG110", description: "5-panel unstructured mid profile. Clean lines, relaxed fit — works for nearly any brand.", image: "/images/product/hats/feb-snapback-nylon-front.jpg" },
  { name: "Coast Cap", modelNum: "OG120", description: "6-panel unstructured, low profile. Soft construction with a laid-back, coastal feel.", image: "/images/product/hats/feb-snapback-twotone-front.jpg" },
  { name: "Setter Cap", modelNum: "OG130", description: "5-panel structured cap. Clean, bold profile with a flat bill. Great for patches and statement logos.", image: "/images/product/hats/feb-canvas-snapback-front.jpg" },
  { name: "Surf Trucker", modelNum: "OG140", description: "Unstructured front with mesh back. Relaxed trucker profile — great for lifestyle brands.", image: "/images/product/hats/feb-trucker-patch-front.jpg" },
  { name: "Stock Trucker", modelNum: "OG150", description: "Structured front, mesh back. The classic trucker silhouette — bold, breathable, and versatile.", image: "/images/product/hats/feb-trucker-black-front.jpg" },
  { name: "Field Trucker", modelNum: "OG160", description: "6-panel structured trucker with mesh back. More real estate for your logo or art.", image: "/images/product/hats/feb-trucker-7panel-front.jpg" },
  { name: "Foam Trucker", modelNum: "OG170", description: "High-profile foam front trucker. Bold, tall crown — built for brands that make a statement.", image: "/images/product/hats/og170-foam-trucker-front.jpg" },
  { name: "Trail Cap", modelNum: "OG180", description: "5-panel camper cap. Soft brim, relaxed crown. Adventure-ready and outdoor-approved.", image: "/images/product/hats/client-boatsetter-boat.jpg" },
  { name: "Highline Cap", modelNum: "OG190", description: "5-panel structured high profile. Makes a visual statement — a favorite for streetwear and music brands.", image: "/images/product/hats/feb-highline-navy-front.jpg" },
  { name: "Perform Cap", modelNum: "OG200", description: "Lightweight, breathable performance polyester. Built for active use without sacrificing the look.", image: "/images/product/hats/feb-perform-black-front.jpg" },
  { name: "Bucket Hat", modelNum: "OG210", description: "Fully custom bucket hat silhouette. Corduroy, canvas, denim — your call. Perfect for summer drops and outdoor brands.", image: "/images/product/hats/feb-bucket-brown-front.jpg" },
];

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
    note: "2 included free in Hat Core Deluxe.",
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
    heading: "Closure Options",
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

const hatProductTabs = [
  {
    label: "Description",
    content: "All OG custom hats are built from scratch — your fabric, your shape, your finish. 12 fabric options, 12 decoration types, and full control over every detail from brim color to sweatband label. We handle design in-house and manage production start to finish. MOQ: 100 hats per style.",
  },
  {
    label: "Hat Guide",
    content: "12 silhouettes available — from classic dad hats (OG100) to high-profile foam truckers (OG170) and bucket hats (OG210). Dad hat (OG100) is the most versatile. Trucker styles (OG140–OG160) are great for outdoor and active brands. OG190 high-profile structured is bold — streetwear and music-ready. Bucket (OG210) is perfect for summer drops.",
  },
  {
    label: "Production & Delivery",
    content: "6–8 weeks from kickoff to delivery — includes design approval, mockups, tech pack sign-off, and factory production. Free shipping on all orders. Every hat ships with full tracking.",
  },
  {
    label: "Templates",
    content: "Download our tech pack template to prep your artwork or brief your designer. Includes placement guides for all 12 hat styles.",
  },
  {
    label: "Swatches",
    content: "12 fabric options including cotton twill, canvas, corduroy, denim, faux suede, ripstop, performance poly, nylon, camo, and mesh. Download our swatch library to share with your team.",
  },
];

function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--og-blue)] md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

export default function HatsPage() {
  return (
    <main className="pb-24 md:pb-0">
      {/* Split hero — headline left, photo right, no CTAs */}
      <section className="px-4 pb-8 pt-10 md:px-8 md:pt-16 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-[2rem] border border-[var(--og-sand)] bg-[rgba(255,248,241,0.86)] p-6 shadow-[0_24px_80px_rgba(8,30,111,0.08)] backdrop-blur md:grid-cols-[1fr_0.9fr] md:p-8">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
              OG Crafted
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.04em] text-[var(--og-blue)] md:text-7xl">
              Custom Hats
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-7 text-[var(--og-muted)]">
              Build your hat from scratch. Choose your silhouette, fabric, and decoration — we handle everything from design to delivery.
            </p>
            <p className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--og-muted)]/50">
              <span className="animate-bounce inline-block">↓</span> Scroll to explore
            </p>
          </div>
          <div className="relative min-h-[24rem] overflow-hidden rounded-[1.75rem] bg-[#d5bba2]">
            <Image
              src="/images/product/hats/client-boatsetter-boat.jpg"
              alt="Orange Goods custom hat"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-[center_40%]"
              priority
            />
          </div>
        </div>
      </section>
      <div className="sticky top-[5.75rem] z-30 border-y border-[#0B32A0]/20 bg-[rgba(251,247,241,0.9)] px-4 py-3 backdrop-blur md:px-8 lg:px-12">
        <nav className="mx-auto flex max-w-6xl gap-2 overflow-x-auto">
          {hatAnchorLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-10 shrink-0 items-center rounded-xl border border-[#0B32A0]/20 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--og-blue)] transition hover:border-[var(--og-orange)] hover:text-[var(--og-orange)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <Reveal className="px-4 py-10 md:px-8 lg:px-12">
        <section id="overview" className="mx-auto max-w-6xl">
          {/* OG Crafted — full-width hero card */}
          <article className="relative overflow-hidden rounded-[2rem] border-2 border-[var(--og-orange)] bg-[var(--og-dark-blue)] p-8 text-white md:p-10">
            <span className="mb-3 inline-block rounded-full bg-[var(--og-orange)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white">OG Crafted</span>
            <h3 className="text-4xl font-semibold md:text-5xl">Built from scratch — your way.</h3>
            <p className="mt-3 max-w-2xl text-lg leading-7 text-white/70">
              Choose your silhouette, fabric, and every last detail. We handle design, production, and delivery. Nothing ships until you love it.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
              {["12 silhouettes", "12 fabrics", "12 decoration types", "From 100 units", "6–8 week lead time", "Free mockups + shipping"].map(f => (
                <span key={f} className="flex items-center gap-1.5 text-sm text-white/80">
                  <span className="text-[var(--og-orange)]">&#10003;</span>{f}
                </span>
              ))}
            </div>
            <Link
              href="#pricing"
              scroll={false}
              className="mt-8 inline-flex min-h-12 items-center rounded-xl bg-[var(--og-orange)] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d73b05]"
            >
              Start Customizing &#8595;
            </Link>
          </article>

          {/* Ready Made — subtle footnote */}
          <div className="mt-4 flex items-center justify-between rounded-[1.25rem] border border-[#0B32A0]/15 bg-white/60 px-6 py-4">
            <p className="text-sm text-[var(--og-muted)]">
              <span className="font-semibold text-[var(--og-blue)]">Need it sooner?</span> Ready Made hats ship in 2–3 weeks — premium blanks with your embroidery, less customization.
            </p>
            <Link
              href="/goods/hats/ready-made"
              className="ml-6 shrink-0 text-sm font-semibold text-[var(--og-orange)] transition hover:underline"
            >
              See Ready Made →
            </Link>
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section id="pricing" className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Pricing & Styles" title="Pick your style. Pick your quantity." />
          <div className="mt-8">
            <ShoppableProduct
              name="Custom Hats"
              tagline="12 silhouettes, 12 fabrics, endless finishes. Built to your spec from 100 units."
              image="/images/product/hats/og-patch-front.jpg"
              tiers={hatTiers}
              variants={hatVariants}
              tabs={hatProductTabs}
              addOnGroups={hatAddOnGroups}
              ctaHref={startHatsHref}
              ctaLabel="Start My Hat Order"
            />
          </div>
        </section>
      </Reveal>


      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section id="materials" className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Materials & Decoration" title="What it’s made of. How it’s branded." />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Fabrics */}
            <div className="rounded-[1.75rem] border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)] p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--og-blue)]">12 Fabrics</p>
              <div className="flex flex-wrap gap-2">
                {["Cotton Twill","Canvas","Corduroy","Nylon","Washed Denim","Faux Suede","Ripstop","Performance Poly","Mesh","Camo","Terry","Fleece"].map(f => (
                  <span key={f} className="rounded-lg border border-[#0B32A0]/15 bg-white px-3 py-1.5 text-xs font-semibold text-[var(--og-blue)]">{f}</span>
                ))}
              </div>
            </div>
            {/* Decoration */}
            <div className="rounded-[1.75rem] border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)] p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--og-blue)]">12 Decoration Types</p>
              <div className="flex flex-wrap gap-2">
                {["Flat Embroidery","3D Puff","Chain Stitch","Woven Patch","Embroidered Patch","Leather Patch","PVC Patch","Chenille Patch","Felt Patch","Printed Patch","Direct Print","Woven Label"].map(d => (
                  <span key={d} className="rounded-lg border border-[#0B32A0]/15 bg-white px-3 py-1.5 text-xs font-semibold text-[var(--og-blue)]">{d}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Gallery
        id="gallery"
        eyebrow="From the shop"
        title="From the shop"
        description="Recent product, decoration, packaging, and finishing work"
        items={hatGallery}
      />

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section id="process" className="mx-auto max-w-6xl">
          <SectionHeader title="How it works" />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {hatProcess.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[1.75rem] border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)] p-6"
              >
                <p
                  className={`text-sm font-semibold uppercase tracking-[0.22em] ${
                    index % 2 === 0 ? "text-[var(--og-orange)]" : "text-[var(--og-blue)]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[var(--og-blue)]">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--og-muted)]">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section id="faq" className="mx-auto max-w-6xl">
          <SectionHeader title="FAQ" />
          <div className="mt-8 grid gap-3">
            {hatFaqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-[1.5rem] border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)] p-5"
              >
                <summary className="cursor-pointer text-lg font-semibold text-[var(--og-blue)]">
                  {faq.question}
                </summary>
                <p className="mt-3 text-base leading-7 text-[var(--og-muted)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </Reveal>

      <CTASection
        title="Ready to start your hat project?"
        description="Share your style, quantity, timeline, and artwork. We'll shape the plan from there"
        buttonLabel="Start a Project"
        buttonHref={startHatsHref}
      />
    </main>
  );
}
