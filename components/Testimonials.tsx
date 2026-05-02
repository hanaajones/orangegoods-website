import Image from "next/image";
import { Reveal } from "@/components/Reveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  logo: string;
};

type Logo = {
  name: string;
  image: string;
};

export function Testimonials({
  testimonials,
  logos,
}: {
  testimonials: Testimonial[];
  logos: Logo[];
}) {
  return (
    <Reveal className="px-4 py-14 md:px-8 lg:px-12">
      <section className="mx-auto max-w-6xl rounded-[2rem] border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)] p-6 md:p-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
            Trusted By Real Brands
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--og-blue)] md:text-5xl">
            Trusted by the greats
          </h2>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-[1.75rem] border border-[#0B32A0]/20 bg-white/80 p-5"
            >
              <div className="relative h-12 w-28">
                <Image
                  src={item.logo}
                  alt={item.name}
                  fill
                  sizes="112px"
                  className="object-contain object-left"
                />
              </div>
              <p className="mt-6 text-2xl font-semibold leading-tight text-[var(--og-blue)]">
                “{item.quote}”
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.14em] text-[var(--og-muted)]">
                {item.name}
              </p>
              <p className="mt-1 text-sm text-[var(--og-muted)]">{item.role}</p>
            </article>
          ))}
        </div>

        {/* Logo marquee */}
        <div className="mt-8 overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-12">
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div key={`${logo.name}-${i}`} className="relative h-10 w-32 flex-none opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
