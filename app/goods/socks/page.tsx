import { ProductCategoryPage } from "../_components/ProductCategoryPage";

export default function SocksPage() {
  return (
    <ProductCategoryPage
      title="Custom Socks"
      subhead="Wearable brand pieces with full-pattern knit options, label details, and designs people actually keep."
      image="https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif"
      imageAlt="Orange Goods custom socks"
      products={["Crew Socks", "Ankle Socks", "No-Show Socks", "Knee High", "Compression"]}
      services={["Custom Knit (full design)", "Woven Label", "Jacquard Pattern"]}
      highlight="Most talked-about giveaway item we make. MOQ 100+, 4-6 weeks."
      faqs={[
        {
          question: "What is the MOQ for custom socks?",
          answer: "Custom socks start at 100+ pieces total.",
        },
        {
          question: "How long do custom socks take?",
          answer: "Custom socks typically take 4-6 weeks after design and proof approval.",
        },
        {
          question: "Can the sock design cover the full product?",
          answer: "Yes. Custom knit socks can use a full-design knit pattern, woven label, or jacquard pattern depending on the brief.",
        },
      ]}
    />
  );
}
