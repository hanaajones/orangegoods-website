import { hatStyles, type HatStyle } from "@/app/goods/hats/style-data";
import {
  buildApparelStyleCatalogItems,
  type ApparelCatalogStyleItem,
} from "@/lib/apparel-styles";
import { BEANIE_STYLES, type BeanieStyle } from "@/lib/beanie-styles";
import { READY_MADE_HATS, type HatMeta } from "@/lib/ready-made-hats";

export type GoodsBrowserCategory =
  | "hats"
  | "beanies"
  | "apparel"
  | "blankets"
  | "drinkware"
  | "bags"
  | "accessories"
  | "socks";

export type GoodsBrowserKind = "style" | "entry";
export type GoodsBrowserProductionPath = "full-custom" | "quick-turn";
export type GoodsBrowserColor = string;

export type GoodsBrowserItem = {
  id: string;
  kind: GoodsBrowserKind;
  category: GoodsBrowserCategory;
  productionPath: GoodsBrowserProductionPath;
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  ctaLabel: string;
  image: string;
  imagePosition?: string;
  imageAspectClass?: string;
  brand?: string;
  typeLabel?: string;
  fit?: string;
  weight?: string;
  material?: string;
  decorationOptions?: string[];
  colors: GoodsBrowserColor[];
  fromPrice?: number;
  priceLabel?: string;
  searchText: string;
};

export const GOODS_BROWSER_CATEGORY_LABELS: Record<GoodsBrowserCategory, string> = {
  hats: "Hats",
  beanies: "Beanies",
  apparel: "Apparel",
  blankets: "Blankets",
  drinkware: "Drinkware",
  bags: "Bags",
  accessories: "Accessories",
  socks: "Socks",
};

export const GOODS_BROWSER_PRODUCTION_PATH_LABELS: Record<GoodsBrowserProductionPath, string> = {
  "full-custom": "Full Custom",
  "quick-turn": "Quick Turn",
};

function buildApparelSpecs(style: ApparelCatalogStyleItem) {
  const fit = style.fit ? `${style.fit} fit` : "";
  return [fit, style.weight, style.material].filter(Boolean).join(". ") + ".";
}

function getHatType(style: HatStyle) {
  const title = style.title.toLowerCase();
  const selector = style.selectorDescription.toLowerCase();

  if (title.includes("bucket")) return "Bucket";
  if (title.includes("trucker")) return "Trucker";
  if (title.includes("dad")) return "Dad Hat";
  if (title.includes("perform")) return "Performance";
  if (selector.includes("5-panel") || selector.includes("camper")) return "5-Panel";
  if (selector.includes("6-panel")) return "6-Panel";
  return "Cap";
}

function buildHatSpecs(style: HatStyle) {
  return [style.profile, style.closure, style.bestFor].filter(Boolean).join(". ") + ".";
}

function buildApparelItem(style: ApparelCatalogStyleItem): GoodsBrowserItem {
  return {
    id: `apparel:${style.slug}`,
    kind: "style",
    category: "apparel",
    productionPath: "full-custom",
    categoryLabel: GOODS_BROWSER_CATEGORY_LABELS.apparel,
    title: style.title,
    subtitle: style.brand,
    description: buildApparelSpecs(style),
    href: `/build/og-crafted-apparel?style=${encodeURIComponent(style.slug)}`,
    ctaLabel: "Customize",
    image: style.image,
    imageAspectClass: "aspect-[4/4.4]",
    brand: style.brand,
    typeLabel: style.family === "long-sleeves"
      ? "Long Sleeve"
      : style.family === "hoodies"
        ? "Fleece"
        : style.family === "bottoms"
          ? "Bottoms"
          : style.family === "womens"
            ? "Women's"
            : style.family === "outerwear"
              ? "Outerwear"
              : "T-Shirt",
    fit: style.fit,
    weight: style.weight,
    material: style.material,
    colors: style.colors,
    fromPrice: style.fromPrice,
    priceLabel: `From $${style.fromPrice.toFixed(2)} / piece with printing`,
    searchText: [
      style.brand,
      style.name,
      style.fullName,
      style.title,
      style.family,
      style.fit,
      style.weight,
      style.material,
      "apparel",
      "tee",
      "fleece",
      "outerwear",
    ].join(" ").toLowerCase(),
  };
}

function buildBeanieItem(style: BeanieStyle): GoodsBrowserItem {
  return {
    id: `beanie:${style.slug}`,
    kind: "style",
    category: "beanies",
    productionPath: "full-custom",
    categoryLabel: GOODS_BROWSER_CATEGORY_LABELS.beanies,
    title: style.title,
    subtitle: style.model,
    description: style.description,
    href: `/build/og-crafted-beanies?style=${encodeURIComponent(style.slug)}`,
    ctaLabel: "Customize",
    image: style.image,
    imagePosition: style.imagePosition,
    imageAspectClass: "aspect-[4/4.4]",
    brand: "AS Colour",
    typeLabel: style.typeLabel,
    fit: style.fit,
    material: style.material,
    decorationOptions: style.decorationOptions,
    colors: [],
    searchText: [
      style.model,
      style.title,
      style.typeLabel,
      style.fit,
      style.material,
      "beanie",
      "beanies",
      "headwear",
      "as colour",
      ...style.decorationOptions,
    ].join(" ").toLowerCase(),
  };
}

function buildHatItem(style: HatStyle): GoodsBrowserItem {
  const typeLabel = getHatType(style);

  return {
    id: `hat:${style.slug}`,
    kind: "style",
    category: "hats",
    productionPath: "full-custom",
    categoryLabel: GOODS_BROWSER_CATEGORY_LABELS.hats,
    title: style.title,
    subtitle: style.model,
    description: buildHatSpecs(style),
    href: `/build/og-crafted-hats?hatStyle=${encodeURIComponent(style.slug)}`,
    ctaLabel: "Customize",
    image: style.image,
    imagePosition: style.imagePosition,
    imageAspectClass: "aspect-[4/3]",
    typeLabel,
    fit: style.profile,
    colors: [],
    fromPrice: 13,
    priceLabel: "From $13.00 / hat",
    searchText: [
      style.model,
      style.title,
      style.selectorDescription,
      style.profile,
      style.closure,
      style.bestFor,
      typeLabel,
      "hats",
      "headwear",
    ].join(" ").toLowerCase(),
  };
}

function getQuickTurnHatType(style: HatMeta) {
  const name = style.name.toLowerCase();
  const crown = style.crown.toLowerCase();

  if (name.includes("bucket") || name.includes("terry")) return "Bucket";
  if (name.includes("dad")) return "Dad Hat";
  if (name.includes("trucker")) return "Trucker";
  if (name.includes("cord")) return "Corduroy";
  if (crown.includes("structured")) return "Structured";
  return "5-Panel";
}

function buildQuickTurnHatSpecs(style: HatMeta) {
  return [style.crown, style.closure, style.fabricDesc].filter(Boolean).join(". ") + ".";
}

function buildQuickTurnHatItem(style: HatMeta): GoodsBrowserItem {
  const heroColor = style.colors.find((color) => color.front || color.back || color.side || color.turn);
  const typeLabel = getQuickTurnHatType(style);

  return {
    id: `quick-turn-hat:${style.id.toLowerCase()}`,
    kind: "style",
    category: "hats",
    productionPath: "quick-turn",
    categoryLabel: GOODS_BROWSER_CATEGORY_LABELS.hats,
    title: style.name,
    subtitle: "Quick Turn Hats",
    description: buildQuickTurnHatSpecs(style),
    href: `/goods/hats/quick-turn/${style.id.toLowerCase()}`,
    ctaLabel: "View style",
    image:
      heroColor?.front ??
      heroColor?.back ??
      heroColor?.side ??
      heroColor?.turn ??
      "/images/gallery/headwear-quick-turn-reel-life-gear-film-10.jpg",
    imageAspectClass: "aspect-[4/3]",
    brand: "AS Colour",
    typeLabel,
    fit: style.profile === "high" ? "High Profile" : style.profile === "mid" ? "Mid Profile" : "Low Profile",
    material: style.fabric,
    colors: style.allColors,
    fromPrice: 16.5,
    priceLabel: "From $16.50 / hat with decoration",
    searchText: [
      style.id,
      style.name,
      style.tagline,
      style.material,
      style.crown,
      style.closure,
      style.bill,
      style.fabricDesc,
      ...style.allColors,
      typeLabel,
      "quick turn",
      "ready made",
      "premium blanks",
      "hats",
      "headwear",
    ].join(" ").toLowerCase(),
  };
}

const entryItems: GoodsBrowserItem[] = [
  {
    id: "entry:quick-turn-hats",
    kind: "entry",
    category: "hats",
    productionPath: "quick-turn",
    categoryLabel: GOODS_BROWSER_CATEGORY_LABELS.hats,
    title: "Quick Turn Hats",
    subtitle: "Premium blanks",
    description:
      "Premium blanks with embroidery, print, or patches when you want a faster path without building every detail from scratch.",
    href: "/goods/hats/quick-turn",
    ctaLabel: "Explore quick turn hats",
    image: "/images/gallery/headwear-quick-turn-hickerson-20220208-2344.jpg",
    imagePosition: "center 52%",
    imageAspectClass: "aspect-[4/3]",
    typeLabel: "Quick Turn",
    colors: [],
    priceLabel: "Faster decorated blank path",
    searchText: "quick turn hats premium blanks embroidery print patches faster headwear".toLowerCase(),
  },
  {
    id: "entry:blankets",
    kind: "entry",
    category: "blankets",
    productionPath: "full-custom",
    categoryLabel: GOODS_BROWSER_CATEGORY_LABELS.blankets,
    title: "Blankets",
    subtitle: "Soft Goods",
    description: "Blanket styles will fold into the same browser while still keeping their own landing page.",
    href: "/goods/blankets",
    ctaLabel: "Explore blankets",
    image: "/images/gallery/blankets-sundream-jarritos-1013-2.jpg",
    imagePosition: "center 50%",
    imageAspectClass: "aspect-[4/3]",
    colors: [],
    searchText: "blankets picnic throws fleece woven soft goods".toLowerCase(),
  },
  {
    id: "entry:drinkware",
    kind: "entry",
    category: "drinkware",
    productionPath: "full-custom",
    categoryLabel: GOODS_BROWSER_CATEGORY_LABELS.drinkware,
    title: "Drinkware",
    subtitle: "Mugs + Bottles",
    description: "Drinkware lives in the same discovery layer even before every style is loaded into filters.",
    href: "/goods/drinkware",
    ctaLabel: "Explore drinkware",
    image: "/images/gallery/drinkware-layla-stacked-mugs-img-7776-2026-08-20.jpg",
    imagePosition: "center 64%",
    imageAspectClass: "aspect-[4/3]",
    colors: [],
    searchText: "drinkware mugs tumblers bottles cups".toLowerCase(),
  },
  {
    id: "entry:bags",
    kind: "entry",
    category: "bags",
    productionPath: "full-custom",
    categoryLabel: GOODS_BROWSER_CATEGORY_LABELS.bags,
    title: "Bags + Totes",
    subtitle: "Carry Goods",
    description: "Totes, utility bags, and carry goods should sit inside the same browse system.",
    href: "/goods/bags",
    ctaLabel: "Explore bags",
    image: "/images/gallery/totes-bags-boatsetter-dscf3148.jpg",
    imagePosition: "center 50%",
    imageAspectClass: "aspect-[4/3]",
    colors: [],
    searchText: "bags totes carry goods utility".toLowerCase(),
  },
  {
    id: "entry:accessories",
    kind: "entry",
    category: "accessories",
    productionPath: "full-custom",
    categoryLabel: GOODS_BROWSER_CATEGORY_LABELS.accessories,
    title: "Accessories",
    subtitle: "Smaller Goods",
    description: "Accessories stay visible in the master browser even before every subcategory gets its own style inventory.",
    href: "/goods/accessories",
    ctaLabel: "Explore accessories",
    image: "/images/gallery/accessories-bandana-lalo-trio.png",
    imagePosition: "center 32%",
    imageAspectClass: "aspect-[4/3]",
    colors: [],
    searchText: "accessories bandanas small goods extras".toLowerCase(),
  },
  {
    id: "entry:socks",
    kind: "entry",
    category: "socks",
    productionPath: "full-custom",
    categoryLabel: GOODS_BROWSER_CATEGORY_LABELS.socks,
    title: "Socks",
    subtitle: "Accessories",
    description: "Socks should live in the shared browser too, even if they currently route through the accessories lane.",
    href: "/goods/accessories",
    ctaLabel: "Explore socks",
    image: "/images/gallery/accessories-bandana-lalo-trio.png",
    imagePosition: "center 32%",
    imageAspectClass: "aspect-[4/3]",
    colors: [],
    searchText: "socks accessories knit crew ankle".toLowerCase(),
  },
];

export function buildGoodsBrowserItems() {
  const apparelItems = buildApparelStyleCatalogItems().map(buildApparelItem);
  const beanieItems = BEANIE_STYLES.map(buildBeanieItem);
  const hatItems = hatStyles.map(buildHatItem);
  const quickTurnHatItems = READY_MADE_HATS.map(buildQuickTurnHatItem);

  return [...hatItems, ...quickTurnHatItems, ...beanieItems, ...apparelItems, ...entryItems];
}
