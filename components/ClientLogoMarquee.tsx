import Image from "next/image";

type Logo = {
  name: string;
  image: string;
};

const logoFrameClass: Record<string, string> = {
  "Stanford Medicine": "h-[7.2rem] w-[19.8rem]",
  "Red Bull": "h-[8.1rem] w-[18.25rem]",
  "Supergoop!": "h-36 w-[24.75rem]",
  "Synergy Kombucha": "h-36 w-[20.25rem]",
  GoodOnya: "h-36 w-[20.25rem]",
  "Islands Restaurant": "h-[7.875rem] w-[29.25rem]",
  "Oak Essentials": "h-[9.45rem] w-[37.2rem]",
  "Primally Pure": "h-[9.45rem] w-[37.2rem]",
  "Pura Vida": "h-36 w-[24.75rem]",
  Google: "h-[8.65rem] w-[22.25rem]",
  "Verve Coffee": "h-[8.65rem] w-[28.6rem]",
  "Vive Organic": "h-36 w-[22.5rem]",
  Hobie: "h-[7.875rem] w-[24.75rem]",
  "High Street": "h-[10.5rem] w-[21rem]",
  Jarritos: "h-[9.5rem] w-[21rem]",
  "Channel Islands": "h-36 w-[24.75rem]",
  "Eye Glove": "h-[9.75rem] w-[19.5rem]",
  "Mountain Valley": "h-[9.75rem] w-[21.5rem]",
  "Nitro Circus": "h-36 w-[27rem]",
  "Field Day Coffee": "h-36 w-[24.75rem]",
  Fantastic: "h-36 w-[24.75rem]",
  "South Congress Hotel": "h-36 w-[24.75rem]",
  "Crooked Hammock": "h-[7.875rem] w-[29.25rem]",
  Thrasher: "h-[7.875rem] w-[27rem]",
  "805 Firestone Walker": "h-[10.125rem] w-[22.25rem]",
  "Firestone Walker": "h-[10.125rem] w-[27rem]",
  Marriott: "h-36 w-[24.75rem]",
  Outerknown: "h-[7.875rem] w-[29.25rem]",
  Microsoft: "h-36 w-[29.25rem]",
};

export function ClientLogoMarquee({
  logos,
  className = "",
  label,
  trackClassName = "",
}: {
  logos: Logo[];
  className?: string;
  label?: string;
  trackClassName?: string;
}) {
  return (
    <div
      className={`relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-white pb-2 md:pb-3 ${
        label ? "pt-10 md:pt-12" : "pt-6"
      } ${className}`}
    >
      {label ? (
        <p className="mb-5 text-center text-sm font-semibold uppercase tracking-[0.28em] text-[#1C1C1C]/50 md:mb-6">
          {label}
        </p>
      ) : null}
      <div
        className={`animate-logo-marquee flex w-max items-center gap-5 px-5 md:gap-6 md:px-6 ${trackClassName}`}
      >
        {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className={`relative flex-none opacity-[0.76] grayscale transition hover:opacity-100 hover:grayscale-0 ${
              logoFrameClass[logo.name] ?? "h-[6.75rem] w-[22.5rem]"
            }`}
          >
            <Image
              src={logo.image}
              alt={logo.name}
              fill
              sizes="396px"
              className={`object-contain ${
                logo.name === "Synergy Kombucha" ||
                logo.name === "Stanford Medicine"
                  ? "brightness-0"
                  : ""
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
