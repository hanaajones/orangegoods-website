import { ProductCategoryPage } from "../_components/ProductCategoryPage";

export default function ApparelPage() {
  return (
    <ProductCategoryPage
      title="Custom Apparel"
      subhead="Tees, fleece, polos, flannels, and branded layers made for launches, teams, events, and retail programs."
      image="https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif"
      imageAlt="Orange Goods custom apparel"
      products={["Tees", "Hoodies", "Flannels", "Polos", "Long Sleeves", "Crewnecks"]}
      services={["Screen Printing", "Embroidery", "Heat Transfer", "Custom Cut + Sew"]}
      faqs={[
        {
          question: "What is the MOQ for custom apparel?",
          answer: "Our custom apparel MOQ starts at 100+ pieces total.",
        },
        {
          question: "Can I mix tees and hoodies in one order?",
          answer: "Yes. You can mix styles, such as 50 hats + 50 tees or tees + hoodies, when the same design is used.",
        },
        {
          question: "How long does custom apparel take?",
          answer: "Custom apparel typically takes 3-6 weeks. Ready Made blank programs usually take 2-4 weeks.",
        },
      ]}
    />
  );
}
