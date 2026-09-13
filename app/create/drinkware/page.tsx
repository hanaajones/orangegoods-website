import { CategoryCreatePage } from "@/app/create/_components/CategoryCreatePage";

export const metadata = {
  title: "Create Drinkware · Orange Goods",
};

export default function CreateDrinkwarePage() {
  return (
    <CategoryCreatePage
      backHref="/goods/drinkware"
      backLabel="Back to drinkware"
      eyebrow="Create drinkware"
      title="Custom drinkware"
      description="Start here when the project needs the right vessel, decoration method, and quantity nailed down before we quote the program."
      image="/images/gallery/drinkware-hero-img-7758-2026-08-13.jpg"
      imageAlt="Custom milk glass mugs used as a drinkware hero image"
      imagePosition="center 42%"
      formTitle="Start a drinkware project"
      formDescription="Share the vessel direction, quantity, timeline, and any artwork context so we can point you toward the right drinkware path."
      projectDefault={"Product: Drinkware\nProgram: Custom Drinkware"}
      formProps={{
        hiddenFields: {
          source: "create-drinkware",
          product: "drinkware",
          program: "Custom Drinkware",
          intent: "category-create",
        },
        showPhone: false,
        showArtworkUpload: true,
        submitLabel: "Start Project",
      }}
    />
  );
}
