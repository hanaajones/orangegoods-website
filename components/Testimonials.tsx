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
            Trusted by our clients.
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

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {logos.map((logo) => (
            <div key={logo.name} className="relative h-16 rounded-xl border border-[#1C1C1C]/8 bg-white p-3">
              <Image
                src={logo.image}
                alt={logo.name}
                fill
                sizes="160px"
                className="object-contain p-3"
              />
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
