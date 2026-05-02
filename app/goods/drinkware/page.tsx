import { ProductCategoryPage } from "../_components/ProductCategoryPage";

export default function DrinkwarePage() {
  return (
    <ProductCategoryPage
      title="Custom Drinkware"
      subhead="Reusable bottles, mugs, tumblers, and barware finished with the decoration method that fits the product and design."
      image="https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_18.avif"
      imageAlt="Orange Goods custom drinkware"
      products={["Tumblers", "Water Bottles", "Mugs", "Growlers", "Can Coolers"]}
      services={["Laser Engraving", "Full Wrap", "Screen Print", "Embossing"]}
      faqs={[
        {
          question: "What is the MOQ for custom drinkware?",
          answer: "Custom drinkware starts at 100+ pieces total.",
        },
        {
          question: "How long does drinkware production take?",
          answer: "Most custom drinkware projects take 2-4 weeks after product selection and proof approval.",
        },
        {
          question: "Can you add branded packaging?",
          answer: "Yes. Branded packaging is available for drinkware programs when you want a more finished gift or retail presentation.",
        },
      ]}
    />
  );
}
