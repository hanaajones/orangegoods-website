import Image from "next/image";

type Logo = {
  name: string;
  image: string;
};

const logoFrameClass: Record<string, string> = {
  "Stanford Medicine": "h-36 w-[24.75rem]",
  "Red Bull": "h-36 w-[20.25rem]",
  "Supergoop!": "h-36 w-[24.75rem]",
  "GT's": "h-36 w-[20.25rem]",
  "Capital One": "h-36 w-[24.75rem]",
  "Pura Vida": "h-36 w-[24.75rem]",
  Google: "h-[7.875rem] w-[20.25rem]",
  "Verve Coffee": "h-[7.875rem] w-[24.75rem]",
  "Water Wells for Africa": "h-[11.25rem] w-[22.5rem]",
  "Vive Organic": "h-36 w-[22.5rem]",
  Hobie: "h-[7.875rem] w-[24.75rem]",
  "High Street": "h-[11.25rem] w-[22.5rem]",
  Tripadvisor: "h-[7.875rem] w-[29.25rem]",
  Jarritos: "h-[10.125rem] w-[22.5rem]",
  "Channel Islands": "h-36 w-[24.75rem]",
  "Eye Glove": "h-[11.25rem] w-[22.5rem]",
  "Health-Ade": "h-36 w-[29.25rem]",
  "Mountain Valley": "h-[11.25rem] w-[24.75rem]",
  Bell: "h-[7.875rem] w-[24.75rem]",
  "Climate Lead": "h-[7.875rem] w-[29.25rem]",
  "Nitro Circus": "h-36 w-[27rem]",
  "Field Day Coffee": "h-36 w-[24.75rem]",
  Fantastic: "h-36 w-[24.75rem]",
  iFIT: "h-[7.875rem] w-[20.25rem]",
  "South Congress Hotel": "h-36 w-[24.75rem]",
  "Crooked Hammock": "h-[7.875rem] w-[29.25rem]",
  Thrasher: "h-[7.875rem] w-[27rem]",
  "New Era": "h-36 w-[24.75rem]",
  "805 Firestone Walker": "h-[11.25rem] w-[24.75rem]",
  "Firestone Walker": "h-[10.125rem] w-[27rem]",
  Marriott: "h-36 w-[24.75rem]",
  Outerknown: "h-[7.875rem] w-[29.25rem]",
  Islands: "h-[7.875rem] w-[29.25rem]",
  Microsoft: "h-36 w-[29.25rem]",
};

export function ClientLogoMarquee({
  logos,
  className = "",
  label,
}: {
  logos: Logo[];
  className?: string;
  label?: string;
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
      <div className="animate-logo-marquee flex w-max items-center gap-12 px-8 md:gap-16 md:px-10">
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
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
