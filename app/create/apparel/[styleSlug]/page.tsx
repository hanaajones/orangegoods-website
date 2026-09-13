import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ApparelBuilderPreview, type ApparelBuilderStyle } from "@/components/ApparelBuilderPreview";
import { buildApparelBuilderStyles } from "@/lib/apparel-styles";

export function generateStaticParams() {
  return buildApparelBuilderStyles().map((style) => ({ styleSlug: style.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ styleSlug: string }>;
}): Promise<Metadata> {
  const { styleSlug } = await params;
  const style = buildApparelBuilderStyles().find((item) => item.slug === styleSlug);
  if (!style) return {};

  return {
    title: `${style.fullName} — Quick Turn Apparel · Orange Goods`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function CreateQuickTurnApparelStylePage({
  params,
}: {
  params: Promise<{ styleSlug: string }>;
}) {
  const { styleSlug } = await params;
  const styles = buildApparelBuilderStyles() satisfies ApparelBuilderStyle[];
  const style = styles.find((item) => item.slug === styleSlug);

  if (!style) notFound();

  return (
    <Suspense fallback={null}>
      <ApparelBuilderPreview
        styles={styles}
        showPageHero={false}
        draftLinks={[]}
        lockedStyleSlug={style.slug}
        pageBackHref="/goods/apparel/quick-turn"
        pageBackLabel="All Quick Turn Apparel"
      />
    </Suspense>
  );
}
