import { CategoryCreatePage } from "@/app/create/_components/CategoryCreatePage";

export const metadata = {
  title: "Full Custom Bags · Orange Goods",
};

export default function CreateFullCustomBagsPage() {
  return (
    <CategoryCreatePage
      backHref="/goods/bags"
      backLabel="Back to bags"
      eyebrow="Create bags"
      title="Full custom bags"
      description="Use this path when the bag itself needs custom shape, trim, handles, pockets, fabric, or a more proprietary build than a decorated blank can provide."
      image="/images/gallery/bags-fabric-swatches-mg-9430.jpg"
      imageAlt="Fabric swatch book showing material and color options for a fully custom bag build"
      imagePosition="center 52%"
      formTitle="Start a full custom bag project"
      formDescription="Share the bag type, use case, quantity, and any construction notes so we can scope the right route."
      projectDefault={"Product: Bags + Totes\nProgram: Full Custom Bags"}
      formProps={{
        hiddenFields: {
          source: "create-full-custom-bags",
          product: "bags",
          program: "Full Custom Bags",
          intent: "category-create",
        },
        showPhone: false,
        showArtworkUpload: true,
        submitLabel: "Start Project",
      }}
    />
  );
}
