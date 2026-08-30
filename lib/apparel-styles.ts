import supplierCatalogRaw from "@/data/ss-activewear/latest.catalog.json";
import { CATALOG_PRODUCTS, calcPrice, type CatalogProduct } from "@/data/catalog";

export type ApparelCatalogFamily =
  | "tees"
  | "long-sleeves"
  | "hoodies"
  | "bottoms"
  | "womens"
  | "outerwear";

export type ApparelCatalogBrand =
  | "AS Colour"
  | "Bella+Canvas"
  | "Comfort Colors"
  | "Gildan"
  | "LA Apparel"
  | "Lane Seven"
  | "Other";

export type ApparelCatalogColor =
  | "Black"
  | "White"
  | "Grey"
  | "Blue"
  | "Green"
  | "Brown"
  | "Tan"
  | "Pink"
  | "Red"
  | "Orange"
  | "Yellow";

export type ApparelCatalogStyleItem = {
  slug: string;
  family: ApparelCatalogFamily;
  brand: ApparelCatalogBrand;
  colors: ApparelCatalogColor[];
  image: string;
  title: string;
  description: string;
  fit: string;
  weight: string;
  material: string;
  timeline: string;
  name: string;
  fullName: string;
  fromPrice: number;
};

export type ApparelBuilderDataStyle = {
  slug: string;
  name: string;
  fullName: string;
  brand: string;
  category: "tees" | "hoodies" | "womens" | "fleece-bottoms" | "outerwear";
  fit: string;
  weight: string;
  material: string;
  description: string;
  printCat: CatalogProduct["printCat"];
  blank: number;
  blankMarkup: number;
  timeline: string;
  priceFrom: number;
  sizes: string[];
  colors: Array<{
    name: string;
    hex: string;
    imageUrl: string;
    images: Array<{ label: string; url: string }>;
    family: string | null;
  }>;
};

type SupplierCatalogStyle = {
  styleSlug: string;
  brandName: string;
  title: string;
  description: string;
  minPiecePrice?: number | null;
  imageUrl?: string | null;
  styleImageUrl?: string | null;
  sizes?: string[];
  variants: Array<{
    colorName: string;
    imageUrl: string | null;
    galleryImages?: Array<{
      label: string;
      url: string;
    }>;
    colorFamily: string | null;
    colorHexPrimary?: string | null;
  }>;
};

type SupplierCatalog = {
  styles: SupplierCatalogStyle[];
};

const SUPPLIER_CATALOG = supplierCatalogRaw as SupplierCatalog;
const PRODUCT_BY_SLUG: Record<string, CatalogProduct> = Object.fromEntries(
  CATALOG_PRODUCTS.map((product) => [product.slug, product]),
);

const DEFAULT_APPAREL_IMAGE = "/images/gallery/apparel-blank-people-would-buy-dscf4886.jpg";

const FAMILY_BY_CATEGORY: Record<
  Extract<CatalogProduct["category"], "tees" | "hoodies" | "fleece-bottoms" | "outerwear" | "womens">,
  ApparelCatalogFamily
> = {
  tees: "tees",
  hoodies: "hoodies",
  "fleece-bottoms": "bottoms",
  outerwear: "outerwear",
  womens: "womens",
};

const COLOR_MAP: Record<string, ApparelCatalogColor | null> = {
  Black: "Black",
  Blacks: "Black",
  White: "White",
  Whites: "White",
  Grey: "Grey",
  Greys: "Grey",
  Gray: "Grey",
  Blue: "Blue",
  Blues: "Blue",
  Green: "Green",
  Greens: "Green",
  Brown: "Brown",
  Browns: "Brown",
  Tan: "Tan",
  Neutrals: "Tan",
  Pink: "Pink",
  Pinks: "Pink",
  Red: "Red",
  Reds: "Red",
  Orange: "Orange",
  Oranges: "Orange",
  Yellow: "Yellow",
  Yellows: "Yellow",
};

const CATEGORY_ORDER: Record<ApparelBuilderDataStyle["category"], number> = {
  tees: 0,
  hoodies: 1,
  womens: 2,
  "fleece-bottoms": 3,
  outerwear: 4,
};

function isSupportedCategory(
  category: CatalogProduct["category"],
): category is ApparelBuilderDataStyle["category"] {
  return (
    category === "tees" ||
    category === "hoodies" ||
    category === "womens" ||
    category === "fleece-bottoms" ||
    category === "outerwear"
  );
}

function normalizeBrand(brandName: string): ApparelCatalogBrand {
  if (brandName === "AS Colour") return "AS Colour";
  if (brandName === "BELLA + CANVAS") return "Bella+Canvas";
  if (brandName === "Comfort Colors") return "Comfort Colors";
  if (brandName === "Gildan") return "Gildan";
  if (brandName === "Lane Seven") return "Lane Seven";
  if (brandName === "LA Apparel" || brandName === "Los Angeles Apparel") return "LA Apparel";
  return "Other";
}

function timelineForProduct(product: CatalogProduct) {
  if (product.category === "outerwear") return "3-4 weeks";
  return "2-3 weeks";
}

function familyForProduct(product: CatalogProduct, title: string): ApparelCatalogFamily {
  if (product.category === "tees" && /long sleeve|l\/s/i.test(title)) {
    return "long-sleeves";
  }

  return FAMILY_BY_CATEGORY[product.category as Extract<CatalogProduct["category"], keyof typeof FAMILY_BY_CATEGORY>];
}

export function buildApparelStyleCatalogItems(): ApparelCatalogStyleItem[] {
  return SUPPLIER_CATALOG.styles
    .map((style) => {
      const product = PRODUCT_BY_SLUG[style.styleSlug];
      if (!product || !isSupportedCategory(product.category)) return null;

      const colors = Array.from(
        new Set(
          style.variants
            .map((variant) => (variant.colorFamily ? COLOR_MAP[variant.colorFamily] : null))
            .filter((color): color is ApparelCatalogColor => Boolean(color)),
        ),
      );

      return {
        slug: style.styleSlug,
        family: familyForProduct(product, style.title),
        brand: normalizeBrand(style.brandName),
        colors,
        image: style.imageUrl ?? style.styleImageUrl ?? DEFAULT_APPAREL_IMAGE,
        title: style.title,
        description: product.description,
        fit: product.fit,
        weight: product.weight,
        material: product.material,
        timeline: timelineForProduct(product),
        name: product.name,
        fullName: product.fullName,
        fromPrice: style.minPiecePrice ?? calcPrice(product.blank, product.blankMarkup, product.printCat, 100),
      } satisfies ApparelCatalogStyleItem;
    })
    .filter((style): style is ApparelCatalogStyleItem => style !== null)
    .sort((left, right) => left.fullName.localeCompare(right.fullName));
}

export function buildApparelBuilderStyles(): ApparelBuilderDataStyle[] {
  return SUPPLIER_CATALOG.styles
    .map((style) => {
      const product = PRODUCT_BY_SLUG[style.styleSlug];
      if (!product || !isSupportedCategory(product.category)) return null;

      const colors = Array.from(
        style.variants.reduce((map, variant) => {
          const key = variant.colorName.trim();
          if (!key) return map;

          const nextImages = (variant.galleryImages ?? []).filter((image) => Boolean(image?.url));

          if (!map.has(key)) {
            map.set(key, {
              name: key,
              hex: variant.colorHexPrimary ?? "#d8d1c4",
              imageUrl: variant.imageUrl ?? "",
              images: nextImages,
              family: variant.colorFamily,
            });
            return map;
          }

          const existing = map.get(key);
          if (!existing) return map;

          const mergedImages = [...existing.images];
          const seen = new Set(mergedImages.map((image) => image.url));
          nextImages.forEach((image) => {
            if (seen.has(image.url)) return;
            seen.add(image.url);
            mergedImages.push(image);
          });

          existing.images = mergedImages;
          if (!existing.imageUrl && variant.imageUrl) {
            existing.imageUrl = variant.imageUrl;
          }
          return map;
        }, new Map<string, {
          name: string;
          hex: string;
          imageUrl: string;
          images: Array<{ label: string; url: string }>;
          family: string | null;
        }>()),
      )
        .map(([, color]) => color)
        .filter((color) => Boolean(color.imageUrl));

      if (colors.length === 0) return null;

      return {
        slug: style.styleSlug,
        name: product.name,
        fullName: product.fullName,
        brand: style.brandName,
        category: product.category,
        fit: product.fit,
        weight: product.weight,
        material: product.material,
        description: product.description,
        printCat: product.printCat,
        blank: product.blank,
        blankMarkup: product.blankMarkup,
        timeline: timelineForProduct(product),
        priceFrom: style.minPiecePrice ?? product.blank + product.blankMarkup,
        sizes: style.sizes ?? [],
        colors,
      } satisfies ApparelBuilderDataStyle;
    })
    .filter((style): style is ApparelBuilderDataStyle => style !== null)
    .sort((left, right) => {
      const categoryDelta = CATEGORY_ORDER[left.category] - CATEGORY_ORDER[right.category];
      if (categoryDelta !== 0) return categoryDelta;
      return left.name.localeCompare(right.name);
    });
}
