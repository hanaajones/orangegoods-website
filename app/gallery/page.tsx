import Image from "next/image";

export const metadata = {
  title: "Gallery — Orange Goods",
  description: "A look at the custom goods, finishes, and projects we've made for brands across the country.",
};

const photos = [
  "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
  "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_18.avif",
  "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_19.avif",
  "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif",
  "https://orangegoods.co/wp-content/uploads/2024/07/OrangeGoods_ABoutUs_5-1.jpg",
  "https://orangegoods.co/wp-content/uploads/2024/07/Namebrands_2.jpg",
  "https://orangegoods.co/wp-content/uploads/2024/07/GraphicDesign-271x300.jpg",
  "https://orangegoods.co/wp-content/uploads/2024/06/Hat-271x300.jpg",
  "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
  "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_18.avif",
  "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_19.avif",
  "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif",
  "https://orangegoods.co/wp-content/uploads/2024/07/OrangeGoods_ABoutUs_5-1.jpg",
  "https://orangegoods.co/wp-content/uploads/2024/07/Namebrands_2.jpg",
  "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
  "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_18.avif",
  "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_19.avif",
  "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif",
  "https://orangegoods.co/wp-content/uploads/2024/07/OrangeGoods_ABoutUs_5-1.jpg",
  "https://orangegoods.co/wp-content/uploads/2024/07/Namebrands_2.jpg",
  "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
  "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_18.avif",
  "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_19.avif",
  "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif",
];

export default function GalleryPage() {
  return (
    <main className="pb-24 md:pb-0">
      {/* Hero */}
      <section className="bg-[#0B32A0] px-4 py-14 text-white md:px-8 md:py-16 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h1
            className="text-4xl uppercase leading-tight text-white md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Gallery
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/70">
            A look at the goods we've made — hats, apparel, drinkware, bags, and everything in between.
          </p>
        </div>
      </section>

      {/* Photo grid */}
      <section className="px-4 py-12 md:px-8 lg:px-12">
        <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
          {photos.map((src, i) => (
            <div
              key={i}
              className="relative mb-4 overflow-hidden rounded-[1.25rem] bg-[#E4DFCD]"
              style={{ breakInside: "avoid" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Orange Goods project ${i + 1}`}
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16 text-center md:px-8">
        <p className="text-base text-[#1C1C1C]/60">
          Like what you see?{" "}
          <a href="/contact" className="font-semibold text-[#FF4200] hover:underline">
            Start a project →
          </a>
        </p>
        <p className="mt-2 text-sm text-[#1C1C1C]/40">
          Photos updated as new projects ship. More coming soon.
        </p>
      </section>
    </main>
  );
}
