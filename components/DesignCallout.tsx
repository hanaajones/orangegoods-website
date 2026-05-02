import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function DesignCallout() {
  return (
    <Reveal className="px-4 py-14 md:px-8 lg:px-12">
      <section className="mx-auto max-w-6xl">
        <div className="grid gap-4 md:grid-cols-2">
          {/* Don't have artwork */}
          <div className="flex flex-col rounded-[2rem] bg-[#F3EFE7] p-8 md:p-10">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF7F00]"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              In-House Design
            </p>
            <h3
              className="mt-3 text-2xl uppercase leading-tight text-[#FF4200] md:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Don&apos;t have artwork?
            </h3>
            <p className="mt-4 flex-1 text-base leading-7 text-[#1C1C1C]/70">
              Our team creates logos, illustrations, and merch identities from scratch. Designed by humans, built for production. We&apos;ll make something your brand is proud to put its name on.
            </p>
            <Link href="/design" className="btn-og mt-8 inline-flex">
              LET&apos;S CREATE TOGETHER
            </Link>
          </div>

          {/* Already have artwork */}
          <div className="flex flex-col rounded-[2rem] border border-[#1C1C1C]/10 bg-white p-8 md:p-10">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B32A0]"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Bring Your Own
            </p>
            <h3
              className="mt-3 text-2xl uppercase leading-tight text-[#0B32A0] md:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Already have designs?
            </h3>
            <p className="mt-4 flex-1 text-base leading-7 text-[#1C1C1C]/70">
              Send us your files. We work with client-provided artwork all the time — logos, custom illustrations, whatever you&apos;ve got. We&apos;ll prep it for production and make sure it comes out right.
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center rounded-xl border-2 border-[#0B32A0] px-6 py-3 text-sm font-bold uppercase text-[#0B32A0] transition hover:-translate-y-[3px] hover:bg-[#0B32A0] hover:text-white" style={{ fontFamily: "var(--font-display)" }}>
              SEND US YOUR ARTWORK
            </Link>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
