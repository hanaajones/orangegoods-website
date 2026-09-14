import type { ReactNode } from "react";

type OptionChoice<T extends string> = {
  id: T;
  label: ReactNode;
  sub?: ReactNode;
};

type OptionButtonGridProps<T extends string> = {
  options: readonly OptionChoice<T>[];
  value: T;
  onChange: (value: T) => void;
  gridClassName: string;
  buttonClassName: (selected: boolean, option: OptionChoice<T>) => string;
  contentClassName?: string;
  labelClassName?: string;
  subClassName?: (selected: boolean, option: OptionChoice<T>) => string;
};

export function OptionButtonGrid<T extends string>({
  options,
  value,
  onChange,
  gridClassName,
  buttonClassName,
  contentClassName,
  labelClassName,
  subClassName,
}: OptionButtonGridProps<T>) {
  const renderOptionContent = (option: OptionChoice<T>, selected: boolean) => (
    <>
      {labelClassName ? <span className={labelClassName}>{option.label}</span> : option.label}
      {option.sub ? (
        <span className={subClassName?.(selected, option)}>
          {option.sub}
        </span>
      ) : null}
    </>
  );

  return (
    <div className={gridClassName}>
      {options.map((option) => {
        const selected = value === option.id;

        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className={buttonClassName(selected, option)}
          >
            {contentClassName ? (
              <span className={contentClassName}>{renderOptionContent(option, selected)}</span>
            ) : renderOptionContent(option, selected)}
          </button>
        );
      })}
    </div>
  );
}

type CatalogPrintColorControlProps = {
  label: string;
  helperText: string;
  value: number;
  ariaLabel: string;
  onAdjust: (delta: number) => void;
  onChange: (value: string) => void;
};

export function CatalogPrintColorControl({
  label,
  helperText,
  value,
  ariaLabel,
  onAdjust,
  onChange,
}: CatalogPrintColorControlProps) {
  return (
    <div className="rounded-lg border border-[#081E6F]/10 bg-white px-3 py-3">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-[var(--og-blue)]">{label}</p>
          <p className="mt-1 text-[11px] text-[#8a8a8a]">
            {helperText}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onAdjust(-1)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#081E6F]/15 text-[var(--og-blue)] transition hover:border-[var(--og-blue)]"
          >
            −
          </button>
          <input
            type="number"
            min={1}
            max={8}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className="h-10 w-16 rounded-lg border border-[#081E6F]/15 text-center text-sm font-semibold text-[var(--og-blue)] focus:border-[var(--og-blue)] focus:outline-none"
            aria-label={ariaLabel}
          />
          <button
            type="button"
            onClick={() => onAdjust(1)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#081E6F]/15 text-[var(--og-blue)] transition hover:border-[var(--og-blue)]"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
