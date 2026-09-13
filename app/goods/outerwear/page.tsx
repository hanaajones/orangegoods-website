import { ProductCategoryPage } from "../_components/ProductCategoryPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Custom Outerwear — Orange Goods",
  description:
    "Custom jackets, puffers, coach jackets, windbreakers, and branded outerwear programs for teams, retail, gifting, and events.",
  path: "/goods/outerwear",
  image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  imageAlt: "Orange Goods custom outerwear",
});

export default function OuterwearPage() {
  return (
    <ProductCategoryPage
      title="Custom Outerwear"
      subhead="Jackets, windbreakers, vests, and premium layers built for staff uniforms, retail drops, and high-value gifting."
      image="https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif"
      imageAlt="Orange Goods custom outerwear"
      startProjectHref="/create/outerwear"
      products={["Jackets", "Coach Jackets", "Windbreakers", "Quarter-Zips", "Vests", "Puffers"]}
      services={["Embroidery", "Screen Print", "Labels", "Patches"]}
      faqs={[
        {
          question: "What is the MOQ for custom outerwear?",
          answer: "Custom outerwear starts at 100+ pieces total.",
        },
        {
          question: "How long does custom outerwear take?",
          answer: "Fully custom outerwear typically takes 6-10 weeks after proof approval.",
        },
        {
          question: "Can you decorate Quick Turn outerwear blanks?",
          answer: "Yes. Quick Turn blank outerwear programs usually take 3-5 weeks.",
        },
      ]}
    />
  );
}
