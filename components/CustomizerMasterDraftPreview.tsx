import Image from "next/image";
import Link from "next/link";
import { CustomizerBreadcrumbs } from "@/components/CustomizerBreadcrumbs";
import {
  CustomizerPageHeader,
  MasterCustomizerShell,
  immersiveCustomizerGhostLinkClass,
  immersiveCustomizerHelperTextClass,
  immersiveCustomizerInsetPanelClass,
  immersiveCustomizerLabelTextClass,
  immersiveCustomizerProcessCardClass,
  immersiveCustomizerSelectInputClass,
  immersiveCustomizerShellCardClass,
  immersiveCustomizerSummaryLabelClass,
  immersiveCustomizerSummaryValueClass,
  immersiveCustomizerTextInputClass,
} from "@/components/MasterCustomizerShell";

const selectArrowSvg = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 20 20' fill='none'><path d='M5 7.5L10 12.5L15 7.5' stroke='%230B32A0' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/></svg>"
)}")`;

function DraftSection({
  label,
  title,
  children,
  description,
  first = false,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
  description?: string;
  first?: boolean;
}) {
  return (
    <section className={first ? "" : "border-t border-[#081E6F]/10 pt-8"}>
      <div className="mb-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF4200]">
          {label}
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-[#0B32A0]">
          {title}
        </h3>
        {description ? (
          <p className="mt-2 text-[15px] leading-7 text-[#4b4b4b]">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function PillButton({
  label,
  sub,
  active = false,
}: {
  label: string;
  sub?: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`rounded-[1rem] border p-4 text-left transition ${
        active
          ? "border-[#0B32A0] bg-[#0B32A0] text-white"
          : "border-[#081E6F]/12 bg-[#FBF7F1] text-[#0B32A0] hover:border-[#FF4200]"
      }`}
    >
      <span className="block text-sm font-semibold uppercase tracking-[0.14em]">
        {label}
      </span>
      {sub ? (
        <span className={`mt-1 block text-xs leading-5 ${active ? "text-white/76" : "text-[#8a8a8a]"}`}>
          {sub}
        </span>
      ) : null}
    </button>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 border-t border-[#081E6F]/10 px-3.5 py-2 first:border-t-0">
      <span className={immersiveCustomizerSummaryLabelClass}>{label}</span>
      <span className={immersiveCustomizerSummaryValueClass}>{value}</span>
    </div>
  );
}

export function CustomizerMasterDraftPreview() {
  const previewLinks = [
    { label: "Live hats builder", href: "/build/og-crafted-hats" },
    { label: "Live apparel builder", href: "/build/og-crafted-apparel" },
    { label: "Live totes builder", href: "/build/og-crafted-totes" },
  ];

  return (
    <MasterCustomizerShell
      header={(
        <CustomizerPageHeader
          backHref="/goods/all"
          backLabel="Back to customize"
          eyebrow="Draft direction"
          title="Shared Builder Master"
          description="One modular builder system for hats, apparel, totes, and the next categories after that. The goal here is one shared rhythm with product-specific sections turning on only when they are actually needed."
        >
          {previewLinks.map((link) => (
            <Link key={link.href} href={link.href} className={immersiveCustomizerGhostLinkClass}>
              {link.label}
            </Link>
          ))}
        </CustomizerPageHeader>
      )}
      gridClassName="xl:grid-cols-[minmax(0,0.86fr)_minmax(430px,520px)_minmax(320px,360px)]"
    >
      <div className="space-y-6">
        <div className="grid gap-4">
          {[
            {
              src: "/images/product/hats/og-crafted-styles/2026-07-uploaded/og170-navy-front.jpg",
              alt: "Full custom hat sample",
            },
            {
              src: "/images/gallery/apparel-verve-gd-tee2.jpg",
              alt: "Printed apparel sample",
            },
          ].map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-lg border border-[#081E6F]/10 bg-white ${
                index === 0 ? "aspect-[5/4]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1280px) 30vw, (min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className={immersiveCustomizerShellCardClass}>
          <p className={immersiveCustomizerLabelTextClass}>What this draft is testing</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className={immersiveCustomizerInsetPanelClass}>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0B32A0]">Shared everywhere</p>
              <p className="mt-2 text-[15px] leading-6 text-[#4b4b4b]">
                Product, color, quantity, decoration method, Pantones, upload, notes, timeline, summary rail.
              </p>
            </div>
            <div className={immersiveCustomizerInsetPanelClass}>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0B32A0]">Only when needed</p>
              <p className="mt-2 text-[15px] leading-6 text-[#4b4b4b]">
                Hat details, apparel size runs, tote construction, and other category-specific controls.
              </p>
            </div>
          </div>
        </div>

        <section className="border-t border-[#081E6F]/10 pt-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF4200]">
              Order process
            </p>
            <p className="mt-2 text-lg font-semibold text-[#0B32A0]">
              Clear modules first, product-specific decisions second
            </p>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Start with shared sections",
                detail: "Every builder begins with the same top-level structure so the experience feels consistent across categories.",
              },
              {
                title: "Turn on only needed modules",
                detail: "Apparel gets size runs, hats get brim and closure, totes get tote-specific build details.",
              },
              {
                title: "Keep the summary stable",
                detail: "The sticky price summary, CTA block, and page rhythm should stay recognizable even when product questions change.",
              },
            ].map((step, index) => (
              <div key={step.title} className={immersiveCustomizerProcessCardClass}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF4200]">
                  Step {index + 1}
                </p>
                <p className="mt-3 text-xl font-semibold leading-tight text-[#0B32A0]">{step.title}</p>
                <p className="mt-3 text-[15px] leading-6 text-[#4b4b4b]">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <aside className="space-y-4 lg:self-start">
        <div className={immersiveCustomizerShellCardClass}>
          <CustomizerBreadcrumbs
            items={[
              { label: "Goods", href: "/goods/all" },
              { label: "Shared Builder" },
            ]}
            className="flex flex-wrap gap-1 text-xs text-[#6b6b6b]"
          />

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF4200]">
              Shared master
            </p>
            <h2 className="mt-2 text-5xl leading-none text-[#0B32A0]">
              Modular question system
            </h2>
            <p className="mt-3 text-base leading-7 text-[#4b4b4b]">
              One draft page showing the full library of section types, while keeping each section visually separated so the page reads clean instead of turning into a wall of controls.
            </p>
          </div>
        </div>

        <div className={immersiveCustomizerShellCardClass}>
          <DraftSection
            first
            label="Core"
            title="Product + program"
            description="These are the shared top-of-builder decisions every product family should start with."
          >
            <div className="grid gap-5">
              <div>
                <label className={`mb-3 block ${immersiveCustomizerLabelTextClass}`}>Production path</label>
                <div className="grid grid-cols-2 gap-3">
                  <PillButton label="Quick Turn" sub="Premium blanks · faster turns" active />
                  <PillButton label="Full Custom" sub="Built more specifically from scratch" />
                </div>
              </div>
              <div>
                <label className={`mb-3 block ${immersiveCustomizerLabelTextClass}`}>Product family</label>
                <select className={immersiveCustomizerSelectInputClass} defaultValue="apparel" style={{ backgroundImage: selectArrowSvg }}>
                  <option value="apparel">Apparel</option>
                  <option value="hats">Hats</option>
                  <option value="totes">Bags + Totes</option>
                  <option value="beanies">Beanies</option>
                </select>
              </div>
              <div>
                <label className={`mb-3 block ${immersiveCustomizerLabelTextClass}`}>Style</label>
                <select className={immersiveCustomizerSelectInputClass} defaultValue="as-colour-5083" style={{ backgroundImage: selectArrowSvg }}>
                  <option value="as-colour-5083">AS Colour 5083 - Heavy Faded Long Sleeve Tee</option>
                  <option value="og-170">OG 170 - Foamie Trucker</option>
                  <option value="asc-1001">AS Colour 1001 - Carrie Tote</option>
                </select>
                <p className={`mt-3 ${immersiveCustomizerHelperTextClass}`}>
                  The exact style title should live here and in the page title, not in the breadcrumb.
                </p>
              </div>
            </div>
          </DraftSection>

          <DraftSection
            label="Shared"
            title="Color + quantity"
            description="Core selection patterns stay the same even when the actual color list or MOQ changes by product."
          >
            <div className="space-y-6">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <p className={immersiveCustomizerLabelTextClass}>Color</p>
                  <p className="text-base font-semibold text-[#0B32A0]">FADED BLACK</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    ["Faded Black", "#2E2B2A", true],
                    ["Bone", "#E6DDCF", false],
                    ["Petrol", "#2C4F5A", false],
                    ["Clay", "#B46D57", false],
                  ].map(([label, color, active]) => (
                    <button
                      key={String(label)}
                      type="button"
                      className={`flex min-w-[7rem] items-center gap-3 rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                        active
                          ? "border-[#0B32A0] bg-[#0B32A0] text-white"
                          : "border-[#081E6F]/12 bg-[#FBF7F1] text-[#0B32A0]"
                      }`}
                    >
                      <span className="h-4 w-4 rounded-full border border-black/10" style={{ backgroundColor: String(color) }} />
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className={immersiveCustomizerLabelTextClass}>Quantity</p>
                  <div className="flex items-center gap-2">
                    <input defaultValue="250" className="h-12 w-28 rounded-xl border border-[#081E6F]/12 bg-white px-3 text-right text-base font-semibold text-[#0B32A0] outline-none" />
                    <span className="text-sm font-medium text-[#8a8a8a]">pieces</span>
                  </div>
                </div>
                <div className="rounded-[1rem] border border-[#081E6F]/10 bg-[#FBF7F1]/65 px-4 py-5">
                  <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">
                    <span>100</span>
                    <span>250</span>
                    <span>500</span>
                    <span>1000</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-[#D8E0F0]">
                    <div className="h-2 w-[36%] rounded-full bg-[#0B32A0]" />
                  </div>
                </div>
              </div>
            </div>
          </DraftSection>

          <DraftSection
            label="Shared"
            title="Apparel size runs"
            description="This module should appear only when the product family actually needs sizing."
          >
            <div className="rounded-[1.5rem] border border-[#081E6F]/10 bg-[#FBF8F1] p-5">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                    Sizes + quantity
                  </p>
                  <p className="mt-1 text-[11px] leading-5 text-[#8a8a8a]">
                    Example of the apparel-only size breakdown block living inside the shared system.
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-[#FF4200] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                  Apparel only
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2 md:grid-cols-8">
                {[
                  ["XS", "8"],
                  ["S", "32"],
                  ["M", "70"],
                  ["L", "70"],
                  ["XL", "40"],
                  ["2XL", "18"],
                  ["3XL", "10"],
                  ["4XL", "2"],
                ].map(([size, qty]) => (
                  <label key={size} className="block">
                    <span className="mb-1.5 block text-center text-[11px] font-semibold uppercase tracking-[0.08em] text-[#7d7d7d]">
                      {size}
                    </span>
                    <input
                      defaultValue={qty}
                      className="h-14 w-full rounded-2xl border border-[#081E6F]/10 bg-white px-2 text-center text-xl font-semibold text-[#0B32A0] outline-none"
                    />
                  </label>
                ))}
              </div>
            </div>
          </DraftSection>

          <DraftSection
            label="Shared"
            title="Decoration + print colors"
            description="The shared builder should hold one clean decoration module, then reveal the color/Pantone inputs that support it."
          >
            <div className="space-y-6">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <p className={immersiveCustomizerLabelTextClass}>Decoration method</p>
                  <span className="inline-flex rounded-full border border-[#0B32A0]/12 bg-[#F5F7FC] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0B32A0]">
                    Shared
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <PillButton label="Screen print" sub="Best for tees, larger artwork, and multi-color art" active />
                  <PillButton label="Embroidery" sub="Best for fleece, hats, and quieter logo applications" />
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-[#081E6F]/10 bg-[#FBF7F1] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                  Placement colors + Pantones
                </p>
                <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">
                  This is the shared color-spec area for front, back, sleeve, or embroidery color calls.
                </p>
                <div className="mt-4 grid gap-4">
                  {["Front print", "Back print"].map((placement, index) => (
                    <div key={placement} className={index > 0 ? "border-t border-[#081E6F]/10 pt-4" : ""}>
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B32A0]/58">
                        {placement}
                      </p>
                      <div className="grid gap-3">
                        <div className="grid gap-2 sm:grid-cols-[minmax(0,0.96fr)_minmax(104px,0.48fr)]">
                          <input
                            defaultValue={placement === "Front print" ? "Pantone 295 C" : "Warm Gray 8 C"}
                            className={immersiveCustomizerTextInputClass}
                          />
                          <label className="group relative flex h-12 cursor-pointer items-center gap-2.5 rounded-[1rem] border border-[#0B32A0]/12 bg-[#F5F7FC] px-3 transition hover:border-[#FF4200]">
                            <span className="h-6 w-6 shrink-0 rounded-[0.8rem] border border-[#0B32A0]/16 shadow-sm" style={{ backgroundColor: placement === "Front print" ? "#003A70" : "#A8998A" }} />
                            <span className="min-w-0 flex-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0B32A0]">
                              Pick hex
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DraftSection>

          <DraftSection
            label="Conditional"
            title="Product-specific modules"
            description="Instead of separate masters, this is where each product family exposes only the extra controls it truly needs."
          >
            <div className="space-y-4">
              <div className={immersiveCustomizerInsetPanelClass}>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0B32A0]">
                    Hats
                  </p>
                  <span className="rounded-full bg-[#FF4200] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                    Conditional
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <PillButton label="Snapback" active />
                  <PillButton label="Strapback" />
                  <PillButton label="Slight curve" active />
                  <PillButton label="Flat brim" />
                </div>
              </div>

              <div className={immersiveCustomizerInsetPanelClass}>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0B32A0]">
                    Apparel
                  </p>
                  <span className="rounded-full bg-[#FF4200] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                    Conditional
                  </span>
                </div>
                <p className="text-[15px] leading-6 text-[#4b4b4b]">
                  Size runs, additional print placements, and packaging add-ons live here when the builder is apparel.
                </p>
              </div>

              <div className={immersiveCustomizerInsetPanelClass}>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0B32A0]">
                    Totes
                  </p>
                  <span className="rounded-full bg-[#FF4200] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                    Conditional
                  </span>
                </div>
                <p className="text-[15px] leading-6 text-[#4b4b4b]">
                  Tote-specific construction or finishing questions turn on here without changing the overall builder rhythm.
                </p>
              </div>
            </div>
          </DraftSection>

          <DraftSection
            label="Handoff"
            title="Artwork + notes"
            description="The final sections stay consistent so every product ends with the same clean handoff behavior."
          >
            <div className="space-y-6">
              <section className="rounded-[1.6rem] border border-dashed border-[#081E6F]/22 bg-[linear-gradient(180deg,#F8FAFD_0%,#F3F6FB_100%)] p-5">
                <div className="flex flex-col gap-3">
                  <div>
                    <p className={immersiveCustomizerLabelTextClass}>Upload your logo</p>
                    <p className="mt-2 text-sm text-[#8a8a8a]">Vector files preferred: AI, PDF, EPS, SVG</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex min-h-12 cursor-pointer items-center justify-center rounded-[1rem] bg-[#F5F7FC] px-5 text-base font-semibold text-[#0B32A0] ring-1 ring-[#081E6F]/15 transition hover:ring-[#0B32A0]">
                      Upload artwork
                    </label>
                    <button type="button" className="flex min-h-12 items-center justify-center gap-2.5 rounded-[1rem] border border-[#081E6F]/12 bg-[#F5F7FC] px-5 text-base font-semibold text-[#0B32A0]">
                      Need artwork?
                    </button>
                  </div>
                </div>
              </section>

              <div>
                <label className={`mb-3 block ${immersiveCustomizerLabelTextClass}`}>Additional notes</label>
                <p className={`mb-3 ${immersiveCustomizerHelperTextClass}`}>
                  Flag Pantones, split color/style requests, packaging asks, or anything else we should build around.
                </p>
                <textarea
                  rows={4}
                  defaultValue="Example: Keep the front art bold, use Pantone 295 C, and let us know if the same art can split across tees and hoodies."
                  className="w-full rounded-[1.2rem] border border-[#081E6F]/15 bg-[#F5F7FC] px-4 py-4 text-[15px] font-normal text-[#0B32A0] outline-none"
                />
              </div>
            </div>
          </DraftSection>
        </div>
      </aside>

      <aside className="xl:sticky xl:top-24 xl:self-start">
        <div className={`${immersiveCustomizerShellCardClass} overflow-hidden xl:flex xl:max-h-[calc(100vh-8.5rem)] xl:flex-col`}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8a8a]">
              Master summary pattern
            </p>
            <p className="mt-2 text-[15px] leading-6 text-[#4b4b4b]">
              This rail should stay stable across categories while the section modules above change by product.
            </p>
          </div>

          <div className="mt-6 rounded-[1rem] border border-[#081E6F]/10 bg-[#FBF7F1]/65 text-sm xl:min-h-0 xl:flex-1 xl:overflow-y-auto xl:pr-1">
            <SummaryRow label="Production path" value="Quick Turn" />
            <SummaryRow label="Product family" value="Apparel" />
            <SummaryRow label="Style" value="AS Colour 5083" />
            <SummaryRow label="Color" value="Faded Black" />
            <SummaryRow label="Total quantity" value="250 units" />
            <SummaryRow label="Size breakdown" value="XS 8 / S 32 / M 70 / L 70 / XL 40" />
            <SummaryRow label="Decoration method" value="Screen print" />
            <SummaryRow label="Front colors" value="Pantone 295 C" />
            <SummaryRow label="Back colors" value="Warm Gray 8 C" />
            <SummaryRow label="Conditional modules" value="Sizes on · Hat extras off · Tote extras off" />
            <SummaryRow label="Turnaround" value="2-3 weeks" />
            <SummaryRow label="Estimated delivery" value="Sep 19 - Sep 28" />
          </div>

          <div className="mt-5 border-t border-[#081E6F]/10 pt-5">
            <div className="mb-3 flex items-end justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8a8a]">
                Unit price
              </p>
              <p className="text-xl font-semibold leading-none text-[#0B32A0]">
                $19.75
              </p>
            </div>
            <div className="flex items-end justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8a8a]">
                Total
              </p>
              <p className="text-3xl font-semibold leading-none text-[#FF4200]">
                $4,937.50
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="mt-5 flex min-h-12 w-full items-center justify-center rounded-lg bg-[#FF4200] px-5 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5"
          >
            Submit order for review
          </a>
          <div className="mt-3 rounded-lg border border-[#081E6F]/10 bg-[#F7F9FC] px-3.5 py-3 text-left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7a7a7a]">
              Next steps
            </p>
            <p className="mt-1 text-xs leading-5 text-[#4b4b4b]">
              Each live product page should inherit this same summary block while only changing the rows that actually apply.
            </p>
          </div>
          <a
            href="/contact"
            className="mt-3 flex min-h-11 w-full items-center justify-center rounded-lg border border-[#081E6F]/12 bg-white px-5 text-center text-sm font-semibold text-[#0B32A0] transition hover:border-[#0B32A0] hover:bg-[#F7F9FC]"
          >
            Talk to our team
          </a>
        </div>
      </aside>
    </MasterCustomizerShell>
  );
}
