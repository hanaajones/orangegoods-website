import Image from "next/image";
import type { CSSProperties } from "react";

type Logo = {
  name: string;
  image: string;
};

type LogoFrameSize = {
  h: number;
  w: number;
};

const logoFrameSizes: Record<string, LogoFrameSize> = {
  "Stanford Medicine": { h: 7.2, w: 19.8 },
  "Red Bull": { h: 8.1, w: 18.25 },
  "Supergoop!": { h: 9, w: 24.75 },
  "Synergy Kombucha": { h: 9, w: 20.25 },
  GoodOnya: { h: 9, w: 20.25 },
  "Islands Restaurant": { h: 7.875, w: 29.25 },
  "Oak Essentials": { h: 9.45, w: 37.2 },
  "Primally Pure": { h: 9.45, w: 37.2 },
  "Pura Vida": { h: 9, w: 24.75 },
  Google: { h: 8.65, w: 22.25 },
  "Verve Coffee": { h: 8.65, w: 28.6 },
  "Vive Organic": { h: 9, w: 22.5 },
  Hobie: { h: 7.875, w: 24.75 },
  "High Street": { h: 10.5, w: 21 },
  Jarritos: { h: 9.5, w: 21 },
  "Channel Islands": { h: 9, w: 24.75 },
  "Eye Glove": { h: 9.75, w: 19.5 },
  "Mountain Valley": { h: 9.75, w: 21.5 },
  "Nitro Circus": { h: 9, w: 27 },
  "Field Day Coffee": { h: 9, w: 24.75 },
  Fantastic: { h: 9, w: 24.75 },
  "South Congress Hotel": { h: 9, w: 24.75 },
  "Crooked Hammock": { h: 7.875, w: 29.25 },
  Thrasher: { h: 7.875, w: 27 },
  "805 Firestone Walker": { h: 10.125, w: 22.25 },
  "Firestone Walker": { h: 10.125, w: 27 },
  Marriott: { h: 9, w: 24.75 },
  Outerknown: { h: 7.875, w: 29.25 },
  Microsoft: { h: 9, w: 29.25 },
};

const defaultLogoFrameSize: LogoFrameSize = { h: 6.75, w: 22.5 };
const MOBILE_LOGO_SCALE = 0.3;

export function ClientLogoMarquee({
  logos,
  className = "",
  label,
  labelClassName = "",
  trackClassName = "",
  mobileCompact = false,
}: {
  logos: Logo[];
  className?: string;
  label?: string;
  labelClassName?: string;
  trackClassName?: string;
  mobileCompact?: boolean;
}) {
  return (
    <div
      className={`relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-white pb-2 md:pb-3 ${
        label ? "pt-10 md:pt-12" : "pt-6"
      } ${className}`}
    >
      {label ? (
        <p
          className={`mb-5 text-center text-sm font-semibold uppercase tracking-[0.28em] text-[#1C1C1C]/50 md:mb-6 ${labelClassName}`}
        >
          {label}
        </p>
      ) : null}
      <div
        className={`animate-logo-marquee flex w-max items-center ${
          mobileCompact ? "gap-2 px-3 md:gap-6 md:px-6" : "gap-5 px-5 md:gap-6 md:px-6"
        } ${trackClassName}`}
      >
        {[...logos, ...logos, ...logos, ...logos].map((logo, i) => {
          const isSvg = logo.image.endsWith(".svg");

          const frameSize = logoFrameSizes[logo.name] ?? defaultLogoFrameSize;
          const compactMobileStyle = mobileCompact
            ? ({
                "--logo-h": `${frameSize.h}rem`,
                "--logo-w": `${frameSize.w}rem`,
                "--logo-h-mobile": `${frameSize.h * MOBILE_LOGO_SCALE}rem`,
                "--logo-w-mobile": `${frameSize.w * MOBILE_LOGO_SCALE}rem`,
              } as CSSProperties)
            : undefined;

          return (
            <div
              key={`${logo.name}-${i}`}
              className={`relative flex-none opacity-[0.76] grayscale transition hover:opacity-100 hover:grayscale-0 ${
                mobileCompact
                  ? "h-[var(--logo-h-mobile)] w-[var(--logo-w-mobile)] md:h-[var(--logo-h)] md:w-[var(--logo-w)]"
                  : "h-[7rem] w-[22.5rem] md:h-[var(--logo-h)] md:w-[var(--logo-w)]"
              }`}
              style={{
                ...(compactMobileStyle ?? {}),
                ...(!mobileCompact
                  ? ({
                      "--logo-h": `${frameSize.h}rem`,
                      "--logo-w": `${frameSize.w}rem`,
                    } as CSSProperties)
                  : {}),
              }}
            >
              <Image
                src={logo.image}
                alt={logo.name}
                fill
                sizes="396px"
                loading={isSvg ? "eager" : undefined}
                unoptimized={isSvg}
                className={`object-contain ${
                  logo.name === "Synergy Kombucha" ||
                  logo.name === "Stanford Medicine"
                    ? "brightness-0"
                    : ""
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
