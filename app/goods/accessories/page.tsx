import { ProductCategoryPage } from "../_components/ProductCategoryPage";

export default function AccessoriesPage() {
  return (
    <ProductCategoryPage
      title="Custom Accessories"
      subhead="Small-format brand pieces that round out kits, retail drops, event tables, and high-use giveaway programs."
      image="https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif"
      imageAlt="Orange Goods custom accessories"
      products={["Socks", "Patches", "Keychains", "Lanyards", "Stickers", "Pins"]}
      services={["Custom Knit", "Woven", "Die Cut", "Embroidery"]}
      faqs={[
        {
          question: "What is the MOQ for custom accessories?",
          answer: "Custom accessories start at 100+ pieces total.",
        },
        {
          question: "Can I mix accessory types?",
          answer: "Yes. You can mix accessory types in the same order when the program uses the same design direction.",
        },
        {
          question: "How long do custom accessories take?",
          answer: "Most custom accessory programs take 3-5 weeks after proof approval.",
        },
      ]}
    />
  );
}
