import { notFound, redirect } from "next/navigation";
import { getHatStyleBySlug, hatStyles } from "../../style-data";

type HatStyleDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return hatStyles.map((style) => ({ slug: style.slug }));
}

export default async function HatStyleDetailPage({
  params,
}: HatStyleDetailPageProps) {
  const { slug } = await params;
  const style = getHatStyleBySlug(slug);

  if (!style) {
    notFound();
  }

  redirect(`/build/og-crafted-hats?hatStyle=${encodeURIComponent(style.slug)}`);
}
