import { Reveal } from "@/components/Reveal";

const capabilities = [
  "Screen Printing",
  "Embroidery",
  "Graphic Design",
  "Factory Direct",
  "Fulfillment",
  "Name-Branded",
  "Retail Quality",
  "USA Made",
  "Technical Apparel",
  "Quick Turnarounds",
  "Retail Finishing",
  "Trims",
  "Accessories",
  "Drinkware",
  "Packaging",
  "Upcycled Range",
  "Custom Cuts",
  "In-House Design",
];

export function Capabilities() {
  return (
    <Reveal className="px-4 py-14 md:px-8 lg:px-12">
      <section className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <p
            className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FF7F00]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Unlimited Capabilities
          </p>
          <h2
            className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-[#FF4200] md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            We&apos;ll handle it all.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-[#1C1C1C]/60">
            From idea to production &amp; delivery — every capability in-house.
          </p>
        </div>

        {/* Capability pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {capabilities.map((cap) => (
            <span
              key={cap}
              className="rounded-full border border-[#FF4200]/25 bg-[#F3EFE7] px-5 py-2.5 text-sm font-semibold text-[#1C1C1C] transition hover:border-[#FF4200] hover:bg-[#FF4200] hover:text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {cap.toUpperCase()}
            </span>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
