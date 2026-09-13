import { CategoryCreatePage } from "@/app/create/_components/CategoryCreatePage";

export const metadata = {
  title: "Create Outerwear · Orange Goods",
};

export default function CreateOuterwearPage() {
  return (
    <CategoryCreatePage
      backHref="/goods/outerwear"
      backLabel="Back to outerwear"
      eyebrow="Create outerwear"
      title="Custom outerwear"
      description="Start here when the program needs the right jacket or layer direction before we narrow decoration, quantity, and timeline."
      image="https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif"
      imageAlt="Orange Goods custom outerwear"
      imagePosition="center 50%"
      formTitle="Start an outerwear project"
      formDescription="Share the garment direction, quantity, timing, and any logo or artwork context so we can guide the right next step."
      projectDefault={"Product: Outerwear\nProgram: Custom Outerwear"}
      formProps={{
        hiddenFields: {
          source: "create-outerwear",
          product: "outerwear",
          program: "Custom Outerwear",
          intent: "category-create",
        },
        showPhone: false,
        showArtworkUpload: true,
        submitLabel: "Start Project",
      }}
    />
  );
}
