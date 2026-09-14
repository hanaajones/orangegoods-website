import { OGPanel, ogEyebrowClass } from "@/components/og/visual-primitives";

export function ProductQuickFacts({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {items.map((item) => (
        <OGPanel key={item.label} className="p-4">
          <p className={ogEyebrowClass.muted}>{item.label}</p>
          <p className="mt-2 text-lg font-semibold text-[var(--og-blue)]">
            {item.value}
          </p>
        </OGPanel>
      ))}
    </div>
  );
}
