import { CategoryCreatePage } from "@/app/create/_components/CategoryCreatePage";

export const metadata = {
  title: "Create Accessories · Orange Goods",
};

export default function CreateAccessoriesPage() {
  return (
    <CategoryCreatePage
      backHref="/goods/accessories"
      backLabel="Back to accessories"
      eyebrow="Create accessories"
      title="Custom accessories"
      description="Start here when the accessory is helping finish a larger merch idea or needs the right use case, format, and perceived value from the start."
      image="/images/gallery/accessories-bandana-verve-culture-yellow.webp"
      imageAlt="Yellow custom bandana styled as an accessories hero image"
      imagePosition="center 34%"
      formTitle="Start an accessories project"
      formDescription="Share the product lane, quantity, timing, and any brand context so we can point you toward the right accessory format."
      projectDefault={"Product: Accessories\nProgram: Custom Accessories"}
      formProps={{
        hiddenFields: {
          source: "create-accessories",
          product: "accessories",
          program: "Custom Accessories",
          intent: "category-create",
        },
        showPhone: false,
        showArtworkUpload: true,
        submitLabel: "Start Project",
      }}
    />
  );
}
