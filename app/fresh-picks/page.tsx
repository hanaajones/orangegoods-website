import { FreshPicksBoardPreview } from "@/components/FreshPicksBoardPreview";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Fresh Picks - Orange Goods",
  description: "Orange Goods monthly fresh picks, on trend and always moving.",
  path: "/fresh-picks",
  image: "/images/gallery/apparel-verve-gd-tee2.jpg",
  imageAlt: "Orange Goods fresh picks",
});

export default function FreshPicksPage() {
  return <FreshPicksBoardPreview />;
}
