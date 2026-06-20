import Image from "next/image";
import { Reveal } from "@/components/Reveal";

type Logo = {
  name: string;
  image: string;
};

export function Testimonials({
  logos,
}: {
  logos: Logo[];
}) {
  return (
    <Reveal className="bg-white py-12 md:py-16">
      <section className="overflow-hidden">
        <div className="mx-auto mb-6 max-w-6xl px-4 text-center md:px-8 lg:px-12">
          <p className="font-noir-alt text-sm font-bold uppercase tracking-[0.28em] text-[#FF4200]">
            Trusted by top brands
          </p>
        </div>
        <div className="overflow-hidden bg-white py-7">
          <div className="animate-marquee flex w-max items-center gap-16 px-10">
            {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="relative h-12 w-40 flex-none opacity-[0.72] grayscale transition hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  fill
                  sizes="160px"
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
