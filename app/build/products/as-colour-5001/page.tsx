"use client";
import Link from "next/link";
import { useState } from "react";

const colors = [
  { name: "White", hex: "#F5F5F0" },
  { name: "Black", hex: "#1C1C1C" },
  { name: "Natural", hex: "#F5F0E8" },
  { name: "Dusty Blue", hex: "#7BA7BC" },
  { name: "Forest", hex: "#2D5016" },
  { name: "Burgundy", hex: "#6B1A2A" },
  { name: "Navy", hex: "#1B2A4A" },
  { name: "Stone", hex: "#8B8070" },
  { name: "Mauve", hex: "#9B7B8B" },
  { name: "Bone", hex: "#E8E0D0" },
];

const placements = ["Front", "Back", "Sleeve", "Neck Label"];
const printColorTiers = ["1 Color", "2 Colors", "3+ Colors"];
const addons = [
  { label: "Hang Tag", price: 1.25 },
  { label: "Woven Label", price: 2.50 },
  { label: "Polybag", price: 0.75 },
  { label: "Custom Tissue", price: 0.50 },
];

const basePrice: Record<number, Record<string, number>> = {
  100:  { "1 Color": 14.00, "2 Colors": 16.00, "3+ Colors": 19.00 },
  250:  { "1 Color": 12.50, "2 Colors": 14.50, "3+ Colors": 17.00 },
  500:  { "1 Color": 11.00, "2 Colors": 13.00, "3+ Colors": 15.50 },
  1000: { "1 Color": 9.50,  "2 Colors": 11.50, "3+ Colors": 13.50 },
};
const placementAddon: Record<string, number> = { "Front": 0, "Back": 3.00, "Sleeve": 2.00, "Neck Label": 1.50 };

function getUnitPrice(qty: number, printColors: string, selectedPlacements: string[], selectedAddons: string[]) {
  const tier = [1000, 500, 250, 100].find(t => qty >= t) ?? 100;
  let price = basePrice[tier][printColors] ?? 14;
  selectedPlacements.forEach(p => { price += placementAddon[p] ?? 0; });
  selectedAddons.forEach(a => { const ao = addons.find(x => x.label === a); if (ao) price += ao.price; });
  return price;
}

export default function AS5001Page() {
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [selectedPlacements, setSelectedPlacements] = useState<string[]>(["Front"]);
  const [printColors, setPrintColors] = useState("1 Color");
  const [qty, setQty] = useState(100);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const unitPrice = getUnitPrice(qty, printColors, selectedPlacements, selectedAddons);
  const total = unitPrice * qty;

  function togglePlacement(p: string) {
    setSelectedPlacements(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]);
  }
  function toggleAddon(a: string) {
    setSelectedAddons(prev => prev.includes(a) ? prev.filter(x => x !== a) : [...prev, a]);
  }

  return (
    <main className="pb-24 md:pb-0">
      {/* Hero */}
      <section className="bg-[#0B32A0] px-4 py-10 text-white md:px-8">
        <div className="mx-auto max-w-6xl flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Ready Made · Screen Print</p>
            <h1 className="mt-2 text-3xl uppercase text-white md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>AS Colour 5001</h1>
            <p className="mt-1 text-base text-white/60">Staple Tee · 180gsm combed cotton · Item AS-5001</p>
          </div>
          <p className="text-2xl font-bold text-[#FF4200]">From <span className="text-4xl">${unitPrice.toFixed(2)}</span><span className="text-base font-normal text-white/50">/shirt</span></p>
        </div>
      </section>

      {/* Configurator */}
      <section className="px-4 py-10 md:px-8">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-[1fr_1.2fr]">
          {/* Left: shirt preview */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-[2rem]" style={{ background: activeColor.hex, border: "2px solid #1C1C1C10" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif" alt="AS Colour 5001" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
              <div className="absolute bottom-4 left-4 rounded-xl bg-black/60 px-3 py-1.5">
                <p className="text-xs text-white/80 font-semibold">{activeColor.name}</p>
              </div>
            </div>
            {/* Swatches */}
            <div className="mt-4 flex flex-wrap gap-2">
              {colors.map(c => (
                <button key={c.name} onClick={() => setActiveColor(c)} title={c.name}
                  className={`h-8 w-8 rounded-full border-2 transition ${activeColor.name === c.name ? "border-[#FF4200] scale-110" : "border-transparent"}`}
                  style={{ background: c.hex, boxShadow: "0 0 0 1px #1C1C1C20" }} />
              ))}
            </div>
          </div>

          {/* Right: options */}
          <div className="space-y-6">
            {/* Placement */}
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FF4200]">Print Placement</p>
              <div className="flex flex-wrap gap-2">
                {placements.map(p => (
                  <button key={p} onClick={() => togglePlacement(p)}
                    className={`rounded-xl px-4 py-2 text-sm font-bold uppercase transition ${selectedPlacements.includes(p) ? "bg-[#0B32A0] text-white" : "border border-[#0B32A0]/30 text-[#0B32A0]"}`}
                    style={{ fontFamily: "var(--font-display)" }}>
                    {p}{p !== "Front" && ` +$${placementAddon[p].toFixed(2)}`}
                  </button>
                ))}
              </div>
            </div>

            {/* Print colors */}
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FF4200]">Print Colors</p>
              <div className="flex gap-2">
                {printColorTiers.map(t => (
                  <button key={t} onClick={() => setPrintColors(t)}
                    className={`rounded-xl px-4 py-2 text-sm font-bold uppercase transition ${printColors === t ? "bg-[#0B32A0] text-white" : "border border-[#0B32A0]/30 text-[#0B32A0]"}`}
                    style={{ fontFamily: "var(--font-display)" }}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FF4200]">Quantity: {qty} shirts</p>
              <input type="range" min={100} max={2000} step={50} value={qty} onChange={e => setQty(Number(e.target.value))}
                className="w-full accent-[#FF4200]" />
              <div className="mt-1 flex justify-between text-xs text-[#1C1C1C]/40">
                <span>100</span><span>500</span><span>1,000</span><span>2,000+</span>
              </div>
            </div>

            {/* Add-ons */}
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FF4200]">Add-Ons</p>
              <div className="grid grid-cols-2 gap-2">
                {addons.map(a => (
                  <label key={a.label} className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 transition ${selectedAddons.includes(a.label) ? "border-[#FF4200] bg-[#FFF5F0]" : "border-[#1C1C1C]/10"}`}>
                    <input type="checkbox" checked={selectedAddons.includes(a.label)} onChange={() => toggleAddon(a.label)} className="accent-[#FF4200]" />
                    <div>
                      <p className="text-sm font-semibold">{a.label}</p>
                      <p className="text-xs text-[#1C1C1C]/50">+${a.price.toFixed(2)}/shirt</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Artwork upload */}
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FF4200]">Upload Artwork</p>
              <div className="rounded-xl border-2 border-dashed border-[#0B32A0]/30 p-6 text-center text-sm text-[#1C1C1C]/50">
                Drop your file here or click to upload<br />
                <span className="text-xs">AI, EPS, PDF, SVG preferred · PNG at 300dpi+</span>
              </div>
            </div>

            {/* Price summary */}
            <div className="rounded-[1.5rem] bg-[#F3EFE7] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#1C1C1C]/60">{qty} shirts × ${unitPrice.toFixed(2)}/shirt</p>
                  <p className="text-3xl font-bold text-[#FF4200]">${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}</p>
                </div>
                <div className="text-right text-xs text-[#1C1C1C]/40">
                  <p>2–4 week turnaround</p>
                  <p>Free digitizing setup</p>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <button disabled className="btn-og w-full cursor-not-allowed justify-center opacity-60">Add to Cart (Coming Soon)</button>
                <Link href={`/contact?product=AS-5001&qty=${qty}&total=${total.toFixed(2)}`} className="btn-og-white w-full justify-center border border-[#0B32A0]/30 text-center text-[#0B32A0]">
                  Save Quote + Email Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="border-t border-[#1C1C1C]/10 px-4 py-10 md:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-2xl uppercase text-[#FF4200]" style={{ fontFamily: "var(--font-display)" }}>FAQ</h2>
          {[
            ["What's the minimum order?", "100 pieces. Mix sizes (50 M + 50 L = 100 pieces) as long as the same design applies."],
            ["What file formats do you accept?", "AI, EPS, editable PDF preferred. PNG accepted at 300dpi minimum. Not sure? Just ask."],
            ["How long does it take?", "2–4 weeks from artwork approval. Rush available — ask when you reach out."],
            ["Can I use Pantone colors?", "Yes. Note your Pantones in the order. We match as closely as production allows."],
          ].map(([q, a]) => (
            <details key={q} className="border-b border-[#1C1C1C]/10 py-4">
              <summary className="cursor-pointer font-semibold text-[#1C1C1C]">{q}</summary>
              <p className="mt-2 text-sm leading-6 text-[#1C1C1C]/60">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
