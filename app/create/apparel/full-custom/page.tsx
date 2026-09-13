import { CategoryCreatePage } from "@/app/create/_components/CategoryCreatePage";

export const metadata = {
  title: "Full Custom Apparel · Orange Goods",
};

export default function CreateFullCustomApparelPage() {
  return (
    <CategoryCreatePage
      backHref="/goods/apparel"
      backLabel="Back to apparel"
      eyebrow="Create apparel"
      title="Full custom apparel"
      description="Use this path when the garment itself needs to feel more proprietary through silhouette, trim, labels, materials, or custom color direction."
      image="/images/gallery/apparel-wearable-palette-bgxhj-23.jpg"
      imageAlt="Wearable apparel palette shown as a full custom apparel direction"
      imagePosition="center 44%"
      formTitle="Start a full custom apparel project"
      formDescription="Share the garment direction, quantity, timing, and any brand details so we can scope the right path."
      projectDefault={"Product: Apparel\nProgram: Full Custom Apparel"}
      formProps={{
        hiddenFields: {
          source: "create-full-custom-apparel",
          product: "apparel",
          program: "Full Custom Apparel",
          intent: "category-create",
        },
        showPhone: false,
        showArtworkUpload: true,
        submitLabel: "Start Project",
      }}
    />
  );
}
