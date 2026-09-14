import Image from "next/image";

export type ProductStyleMediaItem = {
  src: string;
  alt: string;
  label: string;
  imagePosition?: string;
  imageClassName?: string;
};

export function ProductMediaGallery({
  items,
  useSingleColumnMedia,
  onOpenLightbox,
}: {
  items: ProductStyleMediaItem[];
  useSingleColumnMedia: boolean;
  onOpenLightbox: (index: number) => void;
}) {
  return (
    <div className={useSingleColumnMedia ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
      {items.map((item, index) => (
        <button
          key={item.src}
          type="button"
          onClick={() => onOpenLightbox(index)}
          className={`group relative overflow-hidden rounded-lg bg-white text-left ${
            useSingleColumnMedia
              ? index === 0
                ? "aspect-[4/5] sm:aspect-[5/4]"
                : "aspect-[4/5] sm:aspect-[3/2]"
              : "aspect-square"
          }`}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes={useSingleColumnMedia
              ? "(min-width: 1280px) 34vw, (min-width: 1024px) 46vw, 100vw"
              : "(min-width: 1024px) 32vw, (min-width: 768px) 50vw, 100vw"}
            className={item.imageClassName ?? "object-cover transition duration-500 group-hover:scale-[1.02]"}
            style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
            priority={index === 0}
          />
        </button>
      ))}
    </div>
  );
}
