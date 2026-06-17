import { ProductCategoryPage } from "../_components/ProductCategoryPage";

export default function ApparelPage() {
  return (
    <ProductCategoryPage
      title="Apparel"
      subhead="Tees, fleece, polos, flannels, and branded layers made for launches, teams, events, and retail programs."
      image="/images/product/apparel-tshirt-hero.jpg"
      imageAlt="Orange Goods apparel"
      products={["Tees", "Hoodies", "Flannels", "Polos", "Long Sleeves", "Crewnecks"]}
      services={["Screen Printing", "Embroidery", "Heat Transfer", "Custom Cut + Sew"]}
      faqs={[
        {
          question: "What is the MOQ for apparel?",
          answer: "Our apparel MOQ starts at 100+ pieces total.",
        },
        {
          question: "Can I mix tees and hoodies in one order?",
          answer: "Yes. You can mix styles, such as 50 hats + 50 tees or tees + hoodies, when the same design is used.",
        },
        {
          question: "How long does apparel take?",
          answer: "Apparel typically takes 3-6 weeks. Ready Made blank programs usually take 2-4 weeks.",
        },
      ]}
    />
  );
}
