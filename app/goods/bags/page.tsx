import { ProductCategoryPage } from "../_components/ProductCategoryPage";

export default function BagsPage() {
  return (
    <ProductCategoryPage
      title="Custom Bags + Totes"
      subhead="Carry goods that show up at markets, conferences, welcome kits, retail counters, and daily commutes."
      image="/images/product/bags-tote-hero.jpg"
      imageAlt="Orange Goods custom bags and totes"
      products={["Canvas Totes", "Backpacks", "Duffels", "Drawstring Bags", "Cinch Sacks"]}
      services={["Screen Print", "Embroidery", "Patches", "Custom Fabrication"]}
      faqs={[
        {
          question: "What is the MOQ for custom bags?",
          answer: "Custom bags and totes start at 100+ pieces total.",
        },
        {
          question: "Can I mix bag styles in one order?",
          answer: "Yes. You can mix bag styles when they use the same design.",
        },
        {
          question: "How long do custom bags take?",
          answer: "Custom bag programs typically take 3-6 weeks after proof approval.",
        },
      ]}
    />
  );
}
