import { CategoryCreatePage } from "@/app/create/_components/CategoryCreatePage";

export const metadata = {
  title: "Create Blankets · Orange Goods",
};

export default function CreateBlanketsPage() {
  return (
    <CategoryCreatePage
      backHref="/goods/blankets"
      backLabel="Back to blankets"
      eyebrow="Create blankets"
      title="Custom blankets"
      description="Start here when the textile format, size, handfeel, and finishing details matter as much as the artwork."
      image="/images/gallery/blankets-sunrise-lifestyle-3.png"
      imageAlt="Sunrise towel shown as a blankets category hero image"
      imagePosition="center 28%"
      formTitle="Start a blanket project"
      formDescription="Share the textile type, quantity, timing, and any artwork or packaging context so we can narrow the right route."
      projectDefault={"Product: Blankets\nProgram: Custom Blankets"}
      formProps={{
        hiddenFields: {
          source: "create-blankets",
          product: "blankets",
          program: "Custom Blankets",
          intent: "category-create",
        },
        showPhone: false,
        showArtworkUpload: true,
        submitLabel: "Start Project",
      }}
    />
  );
}
