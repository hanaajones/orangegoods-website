import Link from "next/link";
import type { CustomizerBreadcrumbItem } from "@/lib/customizer-navigation";

export function CustomizerBreadcrumbs({
  items,
  className = "flex flex-wrap gap-1.5 text-xs uppercase tracking-[0.12em] text-[#6b6b6b]",
}: {
  items: CustomizerBreadcrumbItem[];
  className?: string;
}) {
  return (
    <nav className={className} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="contents">
          {item.href ? (
            <Link
              href={item.href}
              className="transition hover:text-[#0B32A0]"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-[#0B32A0]">{item.label}</span>
          )}
          {index < items.length - 1 ? <span>/</span> : null}
        </span>
      ))}
    </nav>
  );
}
