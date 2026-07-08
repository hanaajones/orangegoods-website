import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function CTASection({
  title,
  description,
  buttonLabel,
  buttonHref,
  backgroundImage,
  backgroundImagePosition,
  showImageOverlay = true,
  overlayClassName,
  eyebrow = "Start Here",
  wrapperClassName = "",
}: {
  title: string;
  description?: string;
  buttonLabel: string;
  buttonHref: string;
  backgroundImage?: string;
  backgroundImagePosition?: string;
  showImageOverlay?: boolean;
  overlayClassName?: string;
  eyebrow?: string;
  wrapperClassName?: string;
}) {
  return (
    <Reveal className={`px-4 py-16 md:px-8 md:py-20 lg:px-12 ${wrapperClassName}`.trim()}>
      <section className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[var(--og-blue)] p-8 text-white shadow-[0_24px_80px_rgba(8,30,111,0.22)] md:p-10">
        {backgroundImage ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
              backgroundPosition: backgroundImagePosition ?? "center",
            }}
            aria-hidden="true"
          />
        ) : null}
        {backgroundImage && showImageOverlay ? (
          <div
            className={`absolute inset-0 ${overlayClassName ?? "bg-[linear-gradient(135deg,rgba(8,30,111,0.86),rgba(8,30,111,0.58))]"}`}
            aria-hidden="true"
          />
        ) : null}
        <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            {eyebrow ? (
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-4 text-base leading-7 text-white/84 md:text-lg">
                {description}
              </p>
            ) : null}
          </div>
          <Link
            href={buttonHref}
            className="btn-og-white"
          >
            {buttonLabel}
          </Link>
        </div>
      </section>
    </Reveal>
  );
}
