import { OGPanel, ogEyebrowClass } from "@/components/og/visual-primitives";

type TimelineItem = {
  label: string;
  value: string;
  note?: string;
};

export function OrderTimelinePanel({
  estimatedDeliveryLabel,
  isImmersiveExperience,
  items,
}: {
  estimatedDeliveryLabel: string;
  isImmersiveExperience: boolean;
  items: TimelineItem[];
}) {
  return (
    <OGPanel className={isImmersiveExperience ? "p-6" : "p-5"} variant={isImmersiveExperience ? "elevated" : "base"}>
      <p className={ogEyebrowClass.muted}>From order to delivery</p>
      <div className="relative mt-4 space-y-3 before:absolute before:bottom-[22px] before:left-[9px] before:top-[22px] before:w-px before:bg-[#0B32A0]/18">
        {items.map((item) => (
          <div key={item.label} className="relative grid grid-cols-[20px_1fr] items-center gap-3">
            <span className="z-10 h-2.5 w-2.5 justify-self-center rounded-full bg-[var(--og-orange)]" />
            <div className={`flex flex-1 items-center justify-between gap-4 rounded-lg px-4 py-3 ${isImmersiveExperience ? "bg-[#FFF7EF]" : "bg-[#F7F4ED]"}`}>
              <span className={isImmersiveExperience ? "text-[15px] font-medium text-[#4b4b4b]" : "text-sm font-medium text-[#4b4b4b]"}>
                {item.label}
                {item.note ? <span className="ml-2 text-xs italic text-[#8a8a8a]">{item.note}</span> : null}
              </span>
              <span className={isImmersiveExperience ? "text-[15px] font-semibold text-[var(--og-blue)]" : "text-sm font-semibold text-[var(--og-blue)]"}>{item.value}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-[#4b4b4b]">
        <span className="font-semibold text-[var(--og-blue)]">Estimated delivery if ordered today:</span>{" "}
        {estimatedDeliveryLabel}
      </p>
    </OGPanel>
  );
}
