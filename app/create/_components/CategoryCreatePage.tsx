import type { ComponentProps } from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceLeadForm } from "@/app/services/_components/ServiceLeadForm";

type CategoryCreatePageProps = {
  backHref: string;
  backLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  formTitle: string;
  formDescription: string;
  projectDefault: string;
  formProps?: Omit<ComponentProps<typeof ServiceLeadForm>, "title" | "description" | "projectDefault">;
};

export function CategoryCreatePage({
  backHref,
  backLabel,
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imagePosition,
  formTitle,
  formDescription,
  projectDefault,
  formProps,
}: CategoryCreatePageProps) {
  return (
    <main className="min-h-screen bg-[#F7F4ED] pb-16 text-[var(--og-ink)] md:pb-24">
      <section className="bg-[#1C1C1C] px-4 py-14 text-white md:px-8 md:py-18 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/82 hover:text-[var(--og-orange)]"
          >
            ← {backLabel}
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            {description}
          </p>
        </div>
      </section>

      <section className="px-4 pt-8 md:px-8 md:pt-10 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-[#0B32A0]/14 bg-white p-4 shadow-[0_24px_80px_rgba(8,30,111,0.08)] md:grid-cols-[0.92fr_1.08fr] md:p-5">
          <div className="relative min-h-[24rem] overflow-hidden rounded-[1.7rem] border border-[#0B32A0]/12 bg-[#1234A6]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover"
              style={{ objectPosition: imagePosition ?? "center" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,30,111,0.12)_0%,rgba(8,30,111,0.26)_42%,rgba(8,30,111,0.86)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.24em] text-[#FFB38E]">
                Create
              </p>
              <h2 className="mt-3 font-display text-4xl uppercase leading-none md:text-5xl">
                Start the right project
              </h2>
              <p className="mt-4 max-w-lg font-body text-sm leading-7 text-white/84 md:text-base">
                Share the use case, quantity, timing, and artwork context so we can point you
                toward the cleanest next step faster.
              </p>
            </div>
          </div>

          <ServiceLeadForm
            title={formTitle}
            description={formDescription}
            projectDefault={projectDefault}
            {...formProps}
          />
        </div>
      </section>
    </main>
  );
}
