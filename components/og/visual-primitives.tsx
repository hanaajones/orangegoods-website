import { type ReactNode } from "react";

export function ogClassNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const ogPanelClass = {
  base: "rounded-lg border border-[#081E6F]/10 bg-white",
  soft: "rounded-[1.5rem] border border-[#081E6F]/10 bg-[#FBF7F1]",
  elevated: "rounded-lg border border-[#081E6F]/10 bg-white shadow-[0_20px_50px_rgba(8,30,111,0.05)]",
} as const;

export const ogEyebrowClass = {
  muted: "text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]",
  orange: "text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--og-orange)]",
  orangeWide: "text-xs font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]",
} as const;

export function OGPanel({
  children,
  className,
  variant = "base",
}: {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof ogPanelClass;
}) {
  return <div className={ogClassNames(ogPanelClass[variant], className)}>{children}</div>;
}

export function OGBadge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={ogClassNames("inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]", className)}>
      {children}
    </span>
  );
}
