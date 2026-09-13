import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const immersiveCustomizerPageClass =
  "bg-[linear-gradient(180deg,#F5F1E8_0%,#EFF3F9_48%,#F5F1E8_100%)] text-[#1C1C1C]";
export const immersiveCustomizerHeaderClass =
  "border-b border-[#081E6F]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(247,249,252,0.96)_100%)]";
export const immersiveCustomizerShellCardClass =
  "rounded-lg border border-[#081E6F]/12 bg-white p-6 shadow-[0_18px_42px_rgba(28,28,28,0.07)]";
export const immersiveCustomizerProcessCardClass =
  "rounded-lg border border-[#081E6F]/12 bg-[linear-gradient(180deg,#FFF9F2_0%,#F7F4ED_100%)] p-5 text-[var(--og-blue)] shadow-[0_16px_40px_rgba(8,30,111,0.07)]";
export const immersiveCustomizerInsetPanelClass =
  "rounded-xl border border-[#0B32A0]/10 bg-[#FAF7F1] p-5";
export const immersiveCustomizerLabelTextClass =
  "text-[13px] font-semibold uppercase tracking-[0.16em] text-[#6b6b6b]";
export const immersiveCustomizerHelperTextClass = "text-sm leading-6 text-[#8a8a8a]";
export const immersiveCustomizerSummaryLabelClass = "text-[12px] uppercase tracking-[0.12em] text-[#7a7a7a]";
export const immersiveCustomizerSummaryValueClass = "text-right text-[15px] font-semibold text-[#171717]";
export const immersiveCustomizerSelectedOptionClass =
  "border-[#FF4200] bg-[#FF4200] text-white shadow-[0_12px_28px_rgba(255,66,0,0.2)]";
export const immersiveCustomizerSecondarySelectedOptionClass = "border-[#0B32A0] bg-[#0B32A0] text-white";
export const immersiveCustomizerUnselectedOptionClass =
  "border-[#081E6F]/12 bg-[#FBF7F1] text-[#0B32A0] hover:border-[#FF4200]";
export const immersiveCustomizerSelectInputClass =
  "h-12 w-full appearance-none rounded-[1rem] border border-[#0B32A0]/12 bg-[#F5F7FC] bg-[length:14px_14px] bg-[right_1rem_center] bg-no-repeat px-4 pr-11 text-[15px] font-semibold text-[#0B32A0] transition focus:border-[#FF4200] focus:outline-none";
export const immersiveCustomizerTextInputClass =
  "min-h-12 rounded-[1rem] border border-[#0B32A0]/12 bg-[#F5F7FC] px-4 text-[15px] font-medium text-[#0B32A0] outline-none transition placeholder:text-[#8a8a8a] focus:border-[#FF4200]";
export const immersiveCustomizerGhostLinkClass =
  "inline-flex min-h-12 items-center rounded-[1rem] border border-dashed border-[#081E6F]/20 bg-[#F5F7FC] px-5 text-sm font-semibold text-[#0B32A0] transition hover:border-[#FF4200] hover:text-[#FF4200]";
const CUSTOMIZER_TOP_BADGE_ASSETS: Record<string, {
  src: string;
  alt: string;
  width: number;
  height: number;
}> = {
  "Full Custom": {
    src: "/graphics/services/full-custom-orange.svg",
    alt: "Full Custom badge",
    width: 172,
    height: 40,
  },
  "Quick Turn": {
    src: "/graphics/services/quick-turn.svg",
    alt: "Quick Turn badge",
    width: 164,
    height: 40,
  },
};

function joinClassNames(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function getCustomizerTopBadgeAsset(badgeLabel?: string) {
  if (!badgeLabel) return null;
  return CUSTOMIZER_TOP_BADGE_ASSETS[badgeLabel] ?? null;
}

export function CustomizerPageHeader({
  backHref,
  backLabel,
  badgeLabel,
  eyebrow,
  title,
  description,
  children,
}: {
  backHref: string;
  backLabel: string;
  badgeLabel?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
}) {
  const hasHeroContent = Boolean(eyebrow || title || description);
  const badgeAsset = getCustomizerTopBadgeAsset(badgeLabel);

  return (
    <>
      <Link
        href={backHref}
        className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[#0B32A0] transition hover:text-[#FF4200]"
      >
        ← {backLabel}
      </Link>

      {badgeLabel ? (
        badgeAsset ? (
          <Image
            src={badgeAsset.src}
            alt={badgeAsset.alt}
            width={badgeAsset.width}
            height={badgeAsset.height}
            className="h-10 w-auto"
            priority
          />
        ) : (
          <span className="inline-flex min-h-10 items-center rounded-full border border-[#0B32A0]/14 bg-[#EFF4FF] px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B32A0]">
            {badgeLabel}
          </span>
        )
      ) : null}

      {hasHeroContent ? (
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-8">
          <div className="max-w-3xl">
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF4200]">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h1 className="mt-2 text-4xl leading-none text-[#0B32A0] md:text-6xl">
                {title}
              </h1>
            ) : null}
          </div>

          {description ? (
            <p className="max-w-2xl text-base leading-7 text-[#4b4b4b]">
              {description}
            </p>
          ) : null}
        </div>
      ) : null}

      {children ? (
        <div className="flex flex-wrap gap-3">
          {children}
        </div>
      ) : null}
    </>
  );
}

export function MasterCustomizerShell({
  header,
  children,
  compactHeader = false,
  gridClassName = "xl:grid-cols-[minmax(0,0.92fr)_minmax(390px,450px)_minmax(300px,340px)]",
}: {
  header: ReactNode;
  children: ReactNode;
  compactHeader?: boolean;
  gridClassName?: string;
}) {
  return (
    <main className={immersiveCustomizerPageClass}>
      <section className={immersiveCustomizerHeaderClass}>
        <div
          className={joinClassNames(
            "mx-auto flex max-w-[90rem] flex-col px-4 sm:px-6 lg:px-8",
            compactHeader ? "justify-start pb-3 pt-6" : "gap-5 py-6",
          )}
        >
          {header}
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className={joinClassNames("mx-auto grid max-w-[94rem] gap-4", gridClassName)}>
          {children}
        </div>
      </section>
    </main>
  );
}
