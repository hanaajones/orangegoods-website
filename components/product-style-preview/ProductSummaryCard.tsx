import { CustomizerBreadcrumbs } from "@/components/CustomizerBreadcrumbs";
import type { CustomizerBreadcrumbItem } from "@/lib/customizer-navigation";
import Image from "next/image";

type TopBadgeAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function ProductSummaryCard({
  activeCta,
  breadcrumbs,
  isImmersiveExperience,
  mode,
  orderDetailLabel,
  orderPriceLabel,
  shellCardClass,
  summaryDescription,
  summaryEyebrow,
  summaryTitle,
  topBadgeAsset,
  topBadgeLabel,
}: {
  activeCta: string;
  breadcrumbs: CustomizerBreadcrumbItem[];
  isImmersiveExperience: boolean;
  mode: string;
  orderDetailLabel: string;
  orderPriceLabel: string;
  shellCardClass: string;
  summaryDescription: string;
  summaryEyebrow: string;
  summaryTitle: string;
  topBadgeAsset?: TopBadgeAsset;
  topBadgeLabel?: string;
}) {
  return (
    <div className={shellCardClass}>
      <CustomizerBreadcrumbs
        items={breadcrumbs}
        className="flex flex-wrap gap-1 text-xs text-[#6b6b6b]"
      />

      <div className="mt-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            {summaryEyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                {summaryEyebrow}
              </p>
            ) : null}
            <h2 className={`mt-2 leading-none text-[var(--og-blue)] ${isImmersiveExperience ? "text-5xl" : "text-4xl"}`}>
              {summaryTitle}
            </h2>
          </div>

          {isImmersiveExperience && topBadgeLabel ? (
            topBadgeAsset ? (
              <Image
                src={topBadgeAsset.src}
                alt={topBadgeAsset.alt}
                width={topBadgeAsset.width}
                height={topBadgeAsset.height}
                className="h-10 w-auto shrink-0"
                priority
              />
            ) : (
              <span className="inline-flex min-h-10 shrink-0 items-center rounded-full border border-[#0B32A0]/14 bg-[#EFF4FF] px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B32A0]">
                {topBadgeLabel}
              </span>
            )
          ) : null}
        </div>
        <p className={isImmersiveExperience ? "mt-3 text-base leading-7 text-[#4b4b4b]" : "mt-3 text-sm leading-6 text-[#4b4b4b]"}>
          {summaryDescription}
        </p>
        {mode === "shop" && (
          <div className="mt-5 flex flex-col gap-4 border-t border-[#081E6F]/10 pt-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8a8a]">
                Price
              </p>
              <p className="mt-1 text-3xl font-semibold leading-none text-[var(--og-orange)]">
                {orderPriceLabel}
              </p>
              <p className="mt-2 text-xs leading-5 text-[#777]">
                {orderDetailLabel}
              </p>
            </div>
            <button
              type="button"
              className="flex min-h-12 items-center justify-center rounded-lg bg-[var(--og-orange)] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5"
            >
              {activeCta}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
