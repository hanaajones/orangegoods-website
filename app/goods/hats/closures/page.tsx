import { HatsOptionCategoryPage } from "../HatsOptionCategoryPage";
import { closureOptions } from "../options-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Custom Hat Closures — Orange Goods",
  description:
    "Compare custom hat closure options including snapbacks, straps, buckles, and other back-closure details that change the feel of the finished cap.",
  path: "/goods/hats/closures",
  image: "/images/gallery/headwear-buckle-closure.jpg",
  imageAlt: "Custom hat closure detail",
});

export default function HatClosuresPage() {
  return (
    <HatsOptionCategoryPage
      eyebrow="Closures"
      title="Choose your closures"
      description="The back closures change the feel more than people think. Start here if you want the hat to lean more relaxed, more technical, or more structured."
      cards={closureOptions}
    />
  );
}
