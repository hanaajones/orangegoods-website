"use client";

import Link from "next/link";
import { ChangeEvent, DragEvent, useMemo, useState } from "react";

const PRODUCT_IMAGE =
  "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif";

const colors = [
  { name: "White", hex: "#F5F5F0" },
  { name: "Black", hex: "#1C1C1C" },
  { name: "Natural", hex: "#F5F0E8" },
  { name: "Bone", hex: "#E8E0D0" },
  { name: "Dusty Blue", hex: "#7BA7BC" },
  { name: "Forest", hex: "#2D5016" },
  { name: "Burgundy", hex: "#6B1A2A" },
  { name: "Navy", hex: "#1B2A4A" },
  { name: "Stone", hex: "#8B8070" },
  { name: "Mauve", hex: "#9B7B8B" },
  { name: "Military Green", hex: "#4A5240" },
  { name: "Sand", hex: "#C8B99A" },
] as const;

const placements = [
  { id: "front", label: "Front", price: 0, note: "included" },
  { id: "back", label: "Back", price: 3, note: "+$3.00/shirt" },
  { id: "leftSleeve", label: "Left Sleeve", price: 2, note: "+$2.00/shirt" },
  { id: "rightSleeve", label: "Right Sleeve", price: 2, note: "+$2.00/shirt" },
  { id: "neckLabel", label: "Neck Label", price: 1.5, note: "+$1.50/shirt" },
] as const;

const techniques = [
  {
    id: "screen",
    label: "Screen Print",
    price: 0,
    description: "Classic flat ink. Best for bold graphics.",
  },
  {
    id: "water",
    label: "Water-Based Screen Print",
    price: 1.5,
    description: "Softer hand feel, soaks into fabric.",
  },
  {
    id: "puff",
    label: "Puff Print",
    price: 2.5,
    description: "Raised 3D texture. Makes logos pop.",
  },
  {
    id: "foil",
    label: "Foil Print",
    price: 3.5,
    description: "Metallic gold/silver finish.",
  },
  {
    id: "embroidery",
    label: "Embroidery",
    price: 4,
    description: "Classic stitched logo.",
  },
  {
    id: "puffEmbroidery",
    label: "3D Puff Embroidery",
    price: 5.5,
    description: "Raised embroidery with foam backing.",
  },
] as const;

const printColorTiers = [
  { id: "1", label: "1 color", priceByTier: { 100: 14, 250: 12.5, 500: 11, 1000: 9.5 } },
  { id: "2", label: "2 colors", priceByTier: { 100: 16, 250: 14.5, 500: 13, 1000: 11.5 } },
  { id: "3+", label: "3+ colors", priceByTier: { 100: 19, 250: 17, 500: 15.5, 1000: 13.5 } },
] as const;

const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"] as const;

const packagingOptions = [
  { id: "polybag", label: "Printed Polybag", price: 0.75, description: "Custom-printed polybag per shirt." },
  { id: "mailer", label: "Custom Mailer Bag", price: 1.25, description: "Branded mailing bag for direct shipment." },
  { id: "hangTag", label: "Hang Tag", price: 1.25, description: "Custom die-cut hang tag." },
  { id: "wovenLabel", label: "Woven Label", price: 2.5, description: "Replace printed label with custom woven." },
  { id: "tissue", label: "Tissue Paper", price: 0.5, description: "Custom printed tissue." },
] as const;

const details = [
  {
    id: "description",
    label: "Description",
    content:
      "The most popular blank tee in the Southern Hemisphere. 180gsm combed cotton, side-seamed, pre-shrunk. Retail-quality construction that holds up. If your brand's name goes on it, it should be worth keeping.",
  },
  {
    id: "size",
    label: "Size Guide",
    content: "",
  },
  {
    id: "care",
    label: "Care",
    content: "Machine wash cold, tumble dry low.",
  },
  {
    id: "sustainability",
    label: "Sustainability",
    content: "AS Colour produces in ethical facilities. We source from verified suppliers.",
  },
] as const;

const faqs = [
  [
    "What's the minimum order?",
    "100 pieces. Mix sizes (30 M + 40 L + 30 XL = 100 pieces) as long as same design applies.",
  ],
  [
    "What file formats do you accept?",
    "AI, EPS, editable PDF preferred. PNG at 300dpi+ accepted. Not sure? Just upload what you have — we'll tell you.",
  ],
  [
    "Can I see a proof before production?",
    "Always. Nothing goes to production without written artwork approval.",
  ],
  [
    "What's Pantone matching?",
    "If you specify a Pantone color (e.g. PMS 165 C), we match it as closely as possible during production. Note your Pantones in the order notes.",
  ],
  [
    "How does rush work?",
    "Rush cuts production to 10 business days from artwork approval. Subject to current capacity — confirm when you order.",
  ],
  [
    "What if I don't have artwork ready?",
    "No problem. Start the order, note it in the order notes. Our design team can create your artwork — just ask.",
  ],
] as const;

const crossSells = [
  { title: "AS Colour 5026 Heavy Tee", href: "/build/products/as-colour-5026", meta: "Heavyweight blank" },
  { title: "AS Colour 5101 Supply Crew", href: "/build/products/as-colour-5101", meta: "Retail fleece" },
  { title: "AS Colour 1110 Stock Cap", href: "/build/products/as-colour-1110", meta: "Embroidered headwear" },
] as const;

type Color = (typeof colors)[number];
type PlacementId = (typeof placements)[number]["id"];
type TechniqueId = (typeof techniques)[number]["id"];
type PrintColorTierId = (typeof printColorTiers)[number]["id"];
type SizeName = (typeof sizes)[number];
type PackagingId = (typeof packagingOptions)[number]["id"];

type SizeQuantities = Record<SizeName, number>;

type Artwork = {
  fileName: string;
  fileType: string;
  fileSize: number;
  previewUrl: string;
};

type InkColor = {
  name: string;
  hex: string;
};

type PriceInput = {
  qty: number;
  technique: TechniqueId;
  placements: PlacementId[];
  printColors: PrintColorTierId;
  addons: PackagingId[];
  rush: boolean;
};

type PriceBreakdown = {
  baseUnit: number;
  placementUnit: number;
  decorationUnit: number;
  packagingUnit: number;
  rushUnit: number;
  unitPrice: number;
  total: number;
};

function money(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
}

function getTier(qty: number) {
  if (qty >= 1000) return 1000;
  if (qty >= 500) return 500;
  if (qty >= 250) return 250;
  return 100;
}

function calculatePrice(input: PriceInput): PriceBreakdown {
  const tier = getTier(input.qty);
  const colorTier =
    printColorTiers.find((option) => option.id === input.printColors) ?? printColorTiers[0];
  const technique = techniques.find((option) => option.id === input.technique) ?? techniques[0];

  const baseUnit = colorTier.priceByTier[tier];
  const placementUnit = input.placements.reduce((sum, placementId) => {
    const placement = placements.find((option) => option.id === placementId);
    return sum + (placement?.price ?? 0);
  }, 0);
  const packagingUnit = input.addons.reduce((sum, addonId) => {
    const addon = packagingOptions.find((option) => option.id === addonId);
    return sum + (addon?.price ?? 0);
  }, 0);
  const decorationUnit = technique.price;
  const rushUnit = input.rush ? 3 : 0;
  const unitPrice = baseUnit + placementUnit + decorationUnit + packagingUnit + rushUnit;

  return {
    baseUnit,
    placementUnit,
    decorationUnit,
    packagingUnit,
    rushUnit,
    unitPrice,
    total: unitPrice * input.qty,
  };
}

function emptySizeQuantities(): SizeQuantities {
  return {
    XS: 0,
    S: 0,
    M: 40,
    L: 40,
    XL: 20,
    "2XL": 0,
    "3XL": 0,
    "4XL": 0,
  };
}

function distributeQuantity(target: number, current: SizeQuantities): SizeQuantities {
  const total = sizes.reduce((sum, size) => sum + current[size], 0);
  const next = Object.fromEntries(sizes.map((size) => [size, 0])) as SizeQuantities;

  if (total <= 0) {
    next.M = Math.floor(target * 0.4);
    next.L = Math.floor(target * 0.4);
    next.XL = target - next.M - next.L;
    return next;
  }

  let assigned = 0;
  sizes.forEach((size, index) => {
    if (index === sizes.length - 1) {
      next[size] = target - assigned;
      return;
    }
    next[size] = Math.floor((current[size] / total) * target);
    assigned += next[size];
  });

  return next;
}

function sectionNumber(number: number, title: string) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#FF4200] text-sm font-black text-white">
        {number}
      </span>
      <h2 className="text-xl text-[#1C1C1C] md:text-2xl">{title}</h2>
    </div>
  );
}

export default function AS5001Page() {
  const [activeColor, setActiveColor] = useState<Color>(colors[0]);
  const [selectedPlacements, setSelectedPlacements] = useState<PlacementId[]>(["front"]);
  const [technique, setTechnique] = useState<TechniqueId>("screen");
  const [printColors, setPrintColors] = useState<PrintColorTierId>("1");
  const [inkColors, setInkColors] = useState<InkColor[]>([
    { name: "Pantone 165 C", hex: "#FF4200" },
    { name: "Off Black", hex: "#1C1C1C" },
    { name: "Royal Blue", hex: "#0B32A0" },
  ]);
  const [sizeQuantities, setSizeQuantities] = useState<SizeQuantities>(emptySizeQuantities);
  const [selectedPackaging, setSelectedPackaging] = useState<PackagingId[]>([]);
  const [rush, setRush] = useState(false);
  const [notes, setNotes] = useState("");
  const [artwork, setArtwork] = useState<Artwork | null>(null);
  const [activeDetail, setActiveDetail] = useState<(typeof details)[number]["id"]>("description");
  const [quoteStatus, setQuoteStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [clipboardStatus, setClipboardStatus] = useState<"idle" | "copied" | "error">("idle");

  const qty = sizes.reduce((sum, size) => sum + sizeQuantities[size], 0);
  const selectedTechnique = techniques.find((option) => option.id === technique) ?? techniques[0];
  const showPrintColorStep = technique === "screen" || technique === "water";
  const price = useMemo(
    () =>
      calculatePrice({
        qty,
        technique,
        placements: selectedPlacements,
        printColors,
        addons: selectedPackaging,
        rush,
      }),
    [qty, technique, selectedPlacements, printColors, selectedPackaging, rush],
  );

  const activePlacementLabels = selectedPlacements
    .map((placementId) => placements.find((placement) => placement.id === placementId)?.label)
    .filter(Boolean)
    .join(", ");
  const hasPackaging = selectedPackaging.length > 0;
  const turnaroundBase =
    technique === "embroidery" || technique === "puffEmbroidery"
      ? "Est. 3–5 weeks from artwork approval"
      : "Est. 2–4 weeks from artwork approval";
  const turnaroundPackaging = hasPackaging ? "Custom packaging adds 3–5 business days" : "";

  function togglePlacement(placementId: PlacementId) {
    setSelectedPlacements((current) => {
      if (placementId === "front" && current.includes("front")) return current;
      if (current.includes(placementId)) return current.filter((id) => id !== placementId);
      return [...current, placementId];
    });
  }

  function togglePackaging(addonId: PackagingId) {
    setSelectedPackaging((current) =>
      current.includes(addonId) ? current.filter((id) => id !== addonId) : [...current, addonId],
    );
  }

  function updateSize(size: SizeName, value: string) {
    const nextValue = Math.max(0, Number(value) || 0);
    setSizeQuantities((current) => ({ ...current, [size]: nextValue }));
  }

  function updateSliderQuantity(value: string) {
    setSizeQuantities((current) => distributeQuantity(Number(value), current));
  }

  function updateInkColor(index: number, field: keyof InkColor, value: string) {
    setInkColors((current) =>
      current.map((color, colorIndex) =>
        colorIndex === index ? { ...color, [field]: value } : color,
      ),
    );
  }

  function handleArtworkFile(file: File | undefined) {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setArtwork({
        fileName: file.name,
        fileType: file.type || "Unknown",
        fileSize: file.size,
        previewUrl: typeof reader.result === "string" ? reader.result : "",
      });
    };
    reader.readAsDataURL(file);
  }

  function handleFileInput(event: ChangeEvent<HTMLInputElement>) {
    handleArtworkFile(event.target.files?.[0]);
  }

  function handleDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    handleArtworkFile(event.dataTransfer.files?.[0]);
  }

  function buildQuotePayload() {
    return {
      source: "AS Colour 5001 product configurator",
      product: {
        name: "AS Colour 5001 Staple Tee",
        item: "AS-5001",
        fabric: "180gsm 100% combed cotton, pre-shrunk, side-seamed",
      },
      color: activeColor,
      placements: selectedPlacements.map((id) => placements.find((placement) => placement.id === id)),
      technique: selectedTechnique,
      printColors,
      inkColors: showPrintColorStep ? inkColors.slice(0, printColors === "2" ? 2 : printColors === "3+" ? 3 : 1) : [],
      sizes: sizeQuantities,
      quantity: qty,
      packaging: selectedPackaging.map((id) => packagingOptions.find((addon) => addon.id === id)),
      rush,
      turnaround: [turnaroundBase, turnaroundPackaging].filter(Boolean).join("; "),
      notes,
      artwork,
      pricing: price,
    };
  }

  async function submitQuote() {
    setQuoteStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildQuotePayload()),
      });

      if (!response.ok) throw new Error("Quote submission failed");
      setQuoteStatus("success");
    } catch {
      setQuoteStatus("error");
    }
  }

  async function copyBuild() {
    const summary = [
      "AS Colour 5001 Staple Tee build",
      `Color: ${activeColor.name}`,
      `Placements: ${activePlacementLabels}`,
      `Technique: ${selectedTechnique.label}`,
      `Quantity: ${qty}`,
      `Packaging: ${
        selectedPackaging.length
          ? selectedPackaging
              .map((id) => packagingOptions.find((addon) => addon.id === id)?.label)
              .filter(Boolean)
              .join(", ")
          : "None"
      }`,
      `Rush: ${rush ? "Yes" : "No"}`,
      `Unit Price: ${money(price.unitPrice)}`,
      `Total: ${money(price.total)}`,
      notes ? `Notes: ${notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      await navigator.clipboard.writeText(summary);
      setClipboardStatus("copied");
    } catch {
      setClipboardStatus("error");
    }
  }

  const selectedInkCount = printColors === "1" ? 1 : printColors === "2" ? 2 : 3;

  return (
    <main className="bg-[#F3EFE7] pb-28 text-[#1C1C1C] lg:pb-0">
      <section className="bg-[#1C1C1C] px-4 py-10 text-white md:px-8 md:py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-5">
          <div className="flex flex-wrap gap-2">
            {["ITEM AS-5001", "180gsm Cotton", "Ready Made", "2–4 Weeks"].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-white/70"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="max-w-4xl text-4xl leading-none text-white md:text-7xl">
                AS Colour 5001 Staple Tee
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/62 md:text-base">
                180gsm 100% combed cotton, pre-shrunk and side-seamed for a blank that feels
                retail before the decoration goes on.
              </p>
            </div>
            <div className="shrink-0">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/45">
                Starting at
              </p>
              <p className="text-4xl font-black text-[#FF4200] md:text-5xl">$9.50/shirt</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:px-8 md:py-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(360px,0.92fr)_minmax(420px,1fr)_340px]">
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div
              className="relative overflow-hidden rounded-2xl border border-[#1C1C1C]/10 shadow-[0_20px_70px_rgba(28,28,28,0.12)]"
              style={{ backgroundColor: activeColor.hex }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PRODUCT_IMAGE}
                alt="AS Colour 5001 Staple Tee"
                className="aspect-square h-full w-full object-cover opacity-85 mix-blend-multiply"
              />
              {selectedPlacements.includes("front") && (
                <div className="absolute left-[38%] top-[28%] h-[24%] w-[24%] rounded border border-dashed border-white/80 bg-white/8 shadow-[0_0_0_1px_rgba(28,28,28,0.18)]" />
              )}
              {selectedPlacements.includes("back") && (
                <div className="absolute left-[34%] top-[18%] h-[36%] w-[32%] rounded border border-dashed border-[#FF4200]/90 bg-[#FF4200]/8" />
              )}
              {selectedPlacements.includes("leftSleeve") && (
                <div className="absolute left-[20%] top-[31%] h-[16%] w-[11%] rotate-[-12deg] rounded border border-dashed border-white/75 bg-white/8" />
              )}
              {selectedPlacements.includes("rightSleeve") && (
                <div className="absolute right-[20%] top-[31%] h-[16%] w-[11%] rotate-[12deg] rounded border border-dashed border-white/75 bg-white/8" />
              )}
              {selectedPlacements.includes("neckLabel") && (
                <div className="absolute left-[43%] top-[17%] h-[7%] w-[14%] rounded border border-dashed border-[#0B32A0]/85 bg-[#0B32A0]/10" />
              )}
              <div className="absolute bottom-4 left-4 rounded-full bg-[#1C1C1C]/78 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white">
                {activeColor.name}
              </div>
            </div>

            <label
              onDragOver={(event) => event.preventDefault()}
              onDrop={handleDrop}
              className="mt-4 block cursor-pointer rounded-2xl border-2 border-dashed border-[#0B32A0]/25 bg-white/55 p-5 text-center transition hover:border-[#FF4200]"
            >
              <input
                type="file"
                accept=".ai,.eps,.pdf,.svg,.png,image/png,image/svg+xml,application/pdf"
                onChange={handleFileInput}
                className="sr-only"
              />
              {artwork ? (
                <div className="flex items-center justify-center gap-4 text-left">
                  {artwork.previewUrl.startsWith("data:image") ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={artwork.previewUrl}
                      alt=""
                      className="h-14 w-14 rounded-lg border border-[#1C1C1C]/10 object-cover"
                    />
                  ) : (
                    <div className="grid h-14 w-14 place-items-center rounded-lg bg-[#0B32A0] text-xs font-black text-white">
                      FILE
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-[#0B32A0]">✓ {artwork.fileName}</p>
                    <p className="text-xs text-[#1C1C1C]/55">
                      Full mockup preview coming — we&apos;ll send a proof before production.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <p className="font-semibold text-[#0B32A0]">
                    Drop your artwork here or click to upload
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.08em] text-[#1C1C1C]/50">
                    AI, EPS, PDF, SVG, PNG
                  </p>
                  <p className="mt-3 text-xs text-[#1C1C1C]/55">
                    Full mockup preview coming — we&apos;ll send a proof before production.
                  </p>
                </>
              )}
            </label>

            <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
              {colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  title={color.name}
                  onClick={() => setActiveColor(color)}
                  className={`h-10 w-10 shrink-0 rounded-full border transition ${
                    activeColor.name === color.name
                      ? "border-[#FF4200] ring-4 ring-[#FF4200]/20"
                      : "border-[#1C1C1C]/15"
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
          </aside>

          <div className="space-y-5">
            <section className="rounded-2xl border border-[#1C1C1C]/10 bg-white/72 p-5 md:p-6">
              {sectionNumber(1, "Color")}
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setActiveColor(color)}
                    className={`rounded-xl border p-2 text-left transition ${
                      activeColor.name === color.name
                        ? "border-[#FF4200] bg-[#FF4200]/7 shadow-[inset_0_0_0_1px_#FF4200]"
                        : "border-[#1C1C1C]/10 bg-white"
                    }`}
                  >
                    <span
                      className="mb-2 block h-9 rounded-lg border border-[#1C1C1C]/10"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="block text-xs font-semibold">{color.name}</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-[#1C1C1C]/10 bg-white/72 p-5 md:p-6">
              {sectionNumber(2, "Print Placement")}
              <div className="grid gap-2 sm:grid-cols-2">
                {placements.map((placement) => {
                  const active = selectedPlacements.includes(placement.id);
                  return (
                    <button
                      key={placement.id}
                      type="button"
                      onClick={() => togglePlacement(placement.id)}
                      className={`rounded-xl border p-4 text-left transition ${
                        active
                          ? "border-[#0B32A0] bg-[#0B32A0] text-white"
                          : "border-[#1C1C1C]/10 bg-white text-[#1C1C1C]"
                      }`}
                    >
                      <span className="block font-semibold">{placement.label}</span>
                      <span className={active ? "text-sm text-white/72" : "text-sm text-[#1C1C1C]/55"}>
                        {placement.note}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="rounded-2xl border border-[#1C1C1C]/10 bg-white/72 p-5 md:p-6">
              {sectionNumber(3, "Decoration Technique")}
              <div className="grid gap-3">
                {techniques.map((option) => {
                  const active = technique === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setTechnique(option.id)}
                      className={`rounded-xl border p-4 text-left transition ${
                        active
                          ? "border-[#FF4200] bg-[#FFF2EC] shadow-[inset_0_0_0_1px_#FF4200]"
                          : "border-[#1C1C1C]/10 bg-white"
                      }`}
                    >
                      <span className="flex items-start justify-between gap-4">
                        <span>
                          <span className="block font-semibold">{option.label}</span>
                          <span className="mt-1 block text-sm leading-5 text-[#1C1C1C]/58">
                            {option.description}
                          </span>
                        </span>
                        <span className="shrink-0 rounded-full bg-[#1C1C1C] px-3 py-1 text-xs font-semibold text-white">
                          {option.price ? `+${money(option.price)}` : "included"}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {showPrintColorStep && (
              <section className="rounded-2xl border border-[#1C1C1C]/10 bg-white/72 p-5 md:p-6">
                {sectionNumber(4, "Print Colors")}
                <div className="grid grid-cols-3 gap-2">
                  {printColorTiers.map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setPrintColors(tier.id)}
                      className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                        printColors === tier.id
                          ? "border-[#0B32A0] bg-[#0B32A0] text-white"
                          : "border-[#1C1C1C]/10 bg-white text-[#1C1C1C]"
                      }`}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>
                {selectedInkCount > 1 && (
                  <div className="mt-4 grid gap-3">
                    {inkColors.slice(0, selectedInkCount).map((color, index) => (
                      <div key={index} className="grid gap-2 sm:grid-cols-[1fr_76px]">
                        <input
                          value={color.name}
                          onChange={(event) => updateInkColor(index, "name", event.target.value)}
                          className="min-h-11 rounded-xl border border-[#1C1C1C]/12 bg-white px-3 text-sm outline-none focus:border-[#0B32A0]"
                          placeholder={`Color ${index + 1} name or Pantone`}
                        />
                        <input
                          type="color"
                          value={color.hex}
                          onChange={(event) => updateInkColor(index, "hex", event.target.value)}
                          className="h-11 w-full cursor-pointer rounded-xl border border-[#1C1C1C]/12 bg-white p-1"
                          aria-label={`Color ${index + 1} hex`}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )}

            <section className="rounded-2xl border border-[#1C1C1C]/10 bg-white/72 p-5 md:p-6">
              {sectionNumber(showPrintColorStep ? 5 : 4, "Sizes + Quantity")}
              <div className="grid grid-cols-4 gap-2 md:grid-cols-8">
                {sizes.map((size) => (
                  <label key={size} className="block">
                    <span className="mb-1 block text-center text-xs font-bold text-[#1C1C1C]/60">
                      {size}
                    </span>
                    <input
                      type="number"
                      min={0}
                      value={sizeQuantities[size]}
                      onChange={(event) => updateSize(size, event.target.value)}
                      className="h-12 w-full rounded-xl border border-[#1C1C1C]/12 bg-white text-center font-semibold outline-none focus:border-[#FF4200]"
                    />
                  </label>
                ))}
              </div>
              <div className="mt-5 rounded-xl bg-[#F3EFE7] p-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold">Total: {qty} pieces</p>
                  {qty < 100 && (
                    <p className="text-sm font-semibold text-[#FF4200]">Minimum order: 100 pieces</p>
                  )}
                </div>
                <input
                  type="range"
                  min={100}
                  max={2000}
                  step={50}
                  value={Math.min(2000, Math.max(100, qty))}
                  onChange={(event) => updateSliderQuantity(event.target.value)}
                  className="mt-4 w-full accent-[#FF4200]"
                />
                <div className="mt-1 flex justify-between text-xs text-[#1C1C1C]/45">
                  <span>100</span>
                  <span>500</span>
                  <span>1,000</span>
                  <span>2,000</span>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-[#1C1C1C]/10 bg-white/72 p-5 md:p-6">
              {sectionNumber(showPrintColorStep ? 6 : 5, "Packaging Upgrades")}
              <div className="grid gap-3 sm:grid-cols-2">
                {packagingOptions.map((option) => {
                  const active = selectedPackaging.includes(option.id);
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => togglePackaging(option.id)}
                      className={`rounded-xl border p-4 text-left transition ${
                        active
                          ? "border-[#0B32A0] bg-[#EEF2FF]"
                          : "border-[#1C1C1C]/10 bg-white"
                      }`}
                    >
                      <span className="block font-semibold">{option.label}</span>
                      <span className="mt-1 block text-sm text-[#1C1C1C]/55">
                        {option.description}
                      </span>
                      <span className="mt-3 inline-block text-sm font-semibold text-[#FF4200]">
                        +{money(option.price)}/shirt
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="rounded-2xl border border-[#1C1C1C]/10 bg-white/72 p-5 md:p-6">
              {sectionNumber(showPrintColorStep ? 7 : 6, "Turnaround + Rush")}
              <div className="rounded-xl bg-[#1C1C1C] p-4 text-white">
                <p className="font-semibold">{turnaroundBase}</p>
                {turnaroundPackaging && (
                  <p className="mt-1 text-sm text-white/65">{turnaroundPackaging}</p>
                )}
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  { id: false, label: "Standard", description: "Included" },
                  {
                    id: true,
                    label: "Rush",
                    description: "+$3.00/shirt — Cuts production to 10 business days. Subject to availability.",
                  },
                ].map((option) => (
                  <button
                    key={String(option.id)}
                    type="button"
                    onClick={() => setRush(option.id)}
                    className={`rounded-xl border p-4 text-left transition ${
                      rush === option.id
                        ? "border-[#FF4200] bg-[#FFF2EC]"
                        : "border-[#1C1C1C]/10 bg-white"
                    }`}
                  >
                    <span className="block font-semibold">{option.label}</span>
                    <span className="mt-1 block text-sm text-[#1C1C1C]/55">{option.description}</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-[#1C1C1C]/10 bg-white/72 p-5 md:p-6">
              {sectionNumber(showPrintColorStep ? 8 : 7, "Order Notes")}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">Notes for your order</span>
                <textarea
                  value={notes}
                  maxLength={500}
                  onChange={(event) => setNotes(event.target.value)}
                  placeholder={'e.g. Front logo centered at left chest, approx 3.5" wide. Back text centered between shoulder blades. Match Pantone 165 C for orange.'}
                  className="min-h-36 w-full resize-y rounded-xl border border-[#1C1C1C]/12 bg-white p-4 text-sm leading-6 outline-none focus:border-[#0B32A0]"
                />
              </label>
              <p className="mt-2 text-right text-xs text-[#1C1C1C]/45">{notes.length}/500</p>
            </section>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-6 rounded-2xl border border-[#1C1C1C]/10 bg-white p-5 shadow-[0_20px_70px_rgba(28,28,28,0.12)]">
              <PriceSummary
                qty={qty}
                price={price}
                disabled={qty < 100}
                quoteStatus={quoteStatus}
                clipboardStatus={clipboardStatus}
                onSubmit={submitQuote}
                onCopy={copyBuild}
              />
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-[#1C1C1C]/10 bg-white/45 px-4 py-10 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-wrap gap-2">
            {details.map((detail) => (
              <button
                key={detail.id}
                type="button"
                onClick={() => setActiveDetail(detail.id)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  activeDetail === detail.id
                    ? "border-[#1C1C1C] bg-[#1C1C1C] text-white"
                    : "border-[#1C1C1C]/12 bg-white text-[#1C1C1C]"
                }`}
              >
                {detail.label}
              </button>
            ))}
          </div>
          {activeDetail === "size" ? (
            <div className="overflow-x-auto rounded-2xl border border-[#1C1C1C]/10 bg-white">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="bg-[#1C1C1C] text-white">
                  <tr>
                    <th className="px-4 py-3">Measurement</th>
                    {sizes.map((size) => (
                      <th key={size} className="px-4 py-3">
                        {size}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Chest", "45", "48", "51", "54", "57", "60", "63", "66"],
                    ["Length", "68", "71", "74", "77", "80", "83", "85", "87"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-t border-[#1C1C1C]/8">
                      {row.map((cell) => (
                        <td key={cell} className="px-4 py-3">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="max-w-3xl text-lg leading-8 text-[#1C1C1C]/72">
              {details.find((detail) => detail.id === activeDetail)?.content}
            </p>
          )}
        </div>
      </section>

      <section className="px-4 py-10 md:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-5 text-3xl text-[#0B32A0] md:text-5xl">FAQ</h2>
          <div className="divide-y divide-[#1C1C1C]/10 rounded-2xl border border-[#1C1C1C]/10 bg-white/70">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {question}
                  <span className="text-xl text-[#FF4200] group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#1C1C1C]/62">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-5 text-3xl text-[#1C1C1C] md:text-5xl">Also Popular</h2>
          <div className="flex gap-4 overflow-x-auto pb-3">
            {crossSells.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="min-w-[260px] rounded-2xl border border-[#1C1C1C]/10 bg-white p-5 transition hover:-translate-y-1"
              >
                <div className="mb-4 aspect-[4/3] rounded-xl bg-[#0B32A0]" />
                <p className="text-xl font-black uppercase text-[#FF4200]">{product.title}</p>
                <p className="mt-1 text-sm text-[#1C1C1C]/55">{product.meta}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#1C1C1C]/10 bg-white p-3 shadow-[0_-18px_40px_rgba(28,28,28,0.12)] lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#1C1C1C]/45">
              {qty} pieces
            </p>
            <p className="text-xl font-black text-[#FF4200]">{money(price.total)}</p>
          </div>
          <button
            type="button"
            onClick={submitQuote}
            disabled={qty < 100 || quoteStatus === "sending"}
            className="btn-og shrink-0 disabled:cursor-not-allowed disabled:opacity-45"
          >
            {quoteStatus === "success" ? "Quote Sent" : "Send Quote"}
          </button>
        </div>
      </div>
    </main>
  );
}

function PriceSummary({
  qty,
  price,
  disabled,
  quoteStatus,
  clipboardStatus,
  onSubmit,
  onCopy,
}: {
  qty: number;
  price: PriceBreakdown;
  disabled: boolean;
  quoteStatus: "idle" | "sending" | "success" | "error";
  clipboardStatus: "idle" | "copied" | "error";
  onSubmit: () => void;
  onCopy: () => void;
}) {
  return (
    <div>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#FF4200]">
        Live Price Summary
      </p>
      <div className="space-y-3 text-sm">
        <SummaryRow label="Base price" value={`${money(price.baseUnit)} × ${qty}`} />
        <SummaryRow label="Placement additions" value={`+${money(price.placementUnit)} × ${qty}`} />
        {price.decorationUnit > 0 && (
          <SummaryRow label="Decoration upgrade" value={`+${money(price.decorationUnit)} × ${qty}`} />
        )}
        {price.packagingUnit > 0 && (
          <SummaryRow label="Packaging" value={`+${money(price.packagingUnit)} × ${qty}`} />
        )}
        {price.rushUnit > 0 && <SummaryRow label="Rush" value={`+${money(price.rushUnit)} × ${qty}`} />}
      </div>
      <div className="my-5 h-px bg-[#1C1C1C]/10" />
      <div className="space-y-2">
        <SummaryRow label="Unit Price" value={`${money(price.unitPrice)}/shirt`} strong />
        <div className="flex items-end justify-between gap-4">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#1C1C1C]/50">Total</p>
          <p className="text-4xl font-black text-[#FF4200]">{money(price.total)}</p>
        </div>
      </div>
      <div className="mt-5 grid gap-2">
        <button
          type="button"
          disabled
          title="Shopify checkout coming soon"
          className="btn-og w-full cursor-not-allowed opacity-45"
        >
          Add to Cart
        </button>
        <button
          type="button"
          onClick={onSubmit}
          disabled={disabled || quoteStatus === "sending"}
          className="btn-og-white w-full border border-[#0B32A0]/20 text-[#0B32A0] disabled:cursor-not-allowed disabled:opacity-45"
        >
          {quoteStatus === "sending"
            ? "Sending..."
            : quoteStatus === "success"
              ? "Quote Sent"
              : "Save Quote + Send to Us"}
        </button>
        {disabled && <p className="text-xs font-semibold text-[#FF4200]">Minimum order: 100 pieces</p>}
        {quoteStatus === "error" && (
          <p className="text-xs font-semibold text-[#FF4200]">Quote failed. Try again in a moment.</p>
        )}
        <button
          type="button"
          onClick={onCopy}
          className="mt-1 text-center text-xs font-semibold text-[#1C1C1C]/55 underline underline-offset-4"
        >
          {clipboardStatus === "copied"
            ? "Build copied"
            : clipboardStatus === "error"
              ? "Copy failed"
              : "Not ready? Save your build"}
        </button>
      </div>
    </div>
  );
}

function SummaryRow({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className={strong ? "font-bold text-[#1C1C1C]" : "text-[#1C1C1C]/58"}>{label}</p>
      <p className={strong ? "font-black text-[#1C1C1C]" : "font-semibold text-[#1C1C1C]"}>{value}</p>
    </div>
  );
}
