import { CategoryCreatePage } from "@/app/create/_components/CategoryCreatePage";

export const metadata = {
  title: "Create Socks · Orange Goods",
};

export default function CreateSocksPage() {
  return (
    <CategoryCreatePage
      backHref="/goods/socks"
      backLabel="Back to socks"
      eyebrow="Create socks"
      title="Custom socks"
      description="Start here when the project needs the right sock cut, knit direction, quantity, and packaging plan before we quote it."
      image="/images/gallery/socks-verve-gd.jpg"
      imageAlt="Graphic custom socks shown as the hero image for the socks category"
      imagePosition="center 44%"
      formTitle="Start a sock project"
      formDescription="Share the sock style, quantity, timing, and any packaging or artwork notes so we can shape the right direction."
      projectDefault={"Product: Socks\nProgram: Custom Socks"}
      formProps={{
        hiddenFields: {
          source: "create-socks",
          product: "socks",
          program: "Custom Socks",
          intent: "category-create",
        },
        showPhone: false,
        showArtworkUpload: true,
        submitLabel: "Start Project",
      }}
    />
  );
}
