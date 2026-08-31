import { addQuickTurnBeanieShippingIncludedPrice } from "@/lib/quick-turn-shipping";

export type BeanieColor = {
  name: string;
  image: string;
  swatch?: string;
};

export type BeanieStyle = {
  slug: string;
  model: string;
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
  typeLabel: string;
  fit: string;
  material: string;
  decorationOptions: string[];
  colors: BeanieColor[];
  fromPrice: number;
};

const sharedDecorationOptions = ["Embroidery", "Patch", "Woven Label"];

export const BEANIE_STYLES: BeanieStyle[] = [
  {
    slug: "as-colour-1107-cuff-beanie",
    model: "AS Colour 1107",
    title: "Cuff Beanie",
    description: "Classic cuffed beanie with a longer body and a clean front area for decoration.",
    image:
      "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/132/images/22772/1107_CUFF_BEANIE_ARMY__26127.1753052017.1280.1280.jpg?c=1",
    imagePosition: "center 50%",
    typeLabel: "Cuffed Beanie",
    fit: "Relaxed Fit",
    material: "Mid-weight 100% acrylic",
    decorationOptions: sharedDecorationOptions,
    colors: [
      { name: "Army", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/132/images/22772/1107_CUFF_BEANIE_ARMY__26127.1753052017.1280.1280.jpg?c=1", swatch: "#4e4a36" },
      { name: "Asphalt Heather", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/132/images/460/1107_CUFF_BEANIE_ASPHALT_MARLE__96456.1750913225.1280.1280.jpg?c=1", swatch: "#50504b" },
      { name: "Black", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/132/images/461/1107_CUFF_BEANIE_BLACK__75156.1750913225.1280.1280.jpg?c=1", swatch: "#000000" },
      { name: "Bone", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/132/images/6682/1107_CUFF_BEANIE_BONE__17332.1715296225.1280.1280.jpg?c=1", swatch: "#D1CDCA" },
      { name: "Camel", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/132/images/4747/1107_CUFF_BEANIE_CAMEL__48789.1753052017.1280.1280.jpg?c=1", swatch: "#A67A3F" },
      { name: "Cobalt", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/132/images/23258/1107_CUFF_BEANIE_COBALT__38436.1753052017.1280.1280.jpg?c=1", swatch: "#212b51" },
      { name: "Ecru", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/132/images/4749/1107_CUFF_BEANIE_ECRU__82816.1753052017.1280.1280.jpg?c=1", swatch: "#e4e0d4" },
      { name: "Gold", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/132/images/2753/1107_CUFF_BEANIE_GOLD__27268.1753052017.1280.1280.jpg?c=1", swatch: "#f8ac32" },
      { name: "Athletic Heather", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/132/images/463/1107_CUFF_BEANIE_GREY_MARLE__69257.1750913225.1280.1280.jpg?c=1", swatch: "#a4a4a2" },
      { name: "Mushroom", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/132/images/19533/1107_CUFF_BEANIE_MUSHROOM__62789.1753052017.1280.1280.jpg?c=1", swatch: "#b2a795" },
      { name: "Navy", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/132/images/464/1107_CUFF_BEANIE_NAVY__65349.1750913225.1280.1280.jpg?c=1", swatch: "#1e202c" },
      { name: "Orchid", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/132/images/11517/1107_CUFF_BEANIE_ORCHID__71324.1715296225.1280.1280.jpg?c=1", swatch: "#e3dde3" },
      { name: "Petrol Blue", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/132/images/2752/1107_CUFF_BEANIE_PETROL_BLUE__37930.1753052017.1280.1280.jpg?c=1", swatch: "#404a53" },
      { name: "Pine Green", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/132/images/23315/1107_CUFF_BEANIE_PINE_GREEN__74964.1753052018.1280.1280.jpg?c=1", swatch: "#1d342a" },
      { name: "Pink", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/132/images/4752/1107_CUFF_BEANIE_PINK__58744.1753052017.1280.1280.jpg?c=1", swatch: "#f0d2d4" },
      { name: "Powder", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/132/images/6689/1107_CUFF_BEANIE_POWDER__42854.1750913225.1280.1280.jpg?c=1", swatch: "#989fb1" },
      { name: "White Heather", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/132/images/467/1107_CUFF_BEANIE_WHITE_MARLE__57971.1753052017.1280.1280.jpg?c=1", swatch: "#e4e4e6" },
    ],
    fromPrice: addQuickTurnBeanieShippingIncludedPrice(16),
  },
  {
    slug: "as-colour-1107f-cuff-safety-beanie",
    model: "AS Colour 1107F",
    title: "Cuff Safety Beanie",
    description: "Hi-vis cuff beanie with a longer body for crews, events, and colder outdoor use.",
    image:
      "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/945/images/13920/1107F_CUFF_SAFETY_BEANIE_SAFETY_ORANGE__86408.1715820052.1280.1280.jpg?c=1",
    imagePosition: "center 50%",
    typeLabel: "Safety Beanie",
    fit: "Hi-Vis",
    material: "Mid-weight 100% acrylic",
    decorationOptions: sharedDecorationOptions,
    colors: [
      { name: "Safety Orange", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/945/images/13920/1107F_CUFF_SAFETY_BEANIE_SAFETY_ORANGE__86408.1715820052.1280.1280.jpg?c=1", swatch: "#ff6b07" },
      { name: "Safety Yellow", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/945/images/13921/1107F_CUFF_SAFETY_BEANIE_SAFETY_YELLOW__28337.1715820052.1280.1280.jpg?c=1", swatch: "#eff162" },
    ],
    fromPrice: addQuickTurnBeanieShippingIncludedPrice(16),
  },
  {
    slug: "as-colour-1115-knit-beanie",
    model: "AS Colour 1115",
    title: "Knit Beanie",
    description: "Ribbed knit beanie with a more fitted feel and a softer wool-blend handfeel.",
    image:
      "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/137/images/509/1115_KNIT_BEANIE_ASPHALT_MARLE__97233.1715821286.1280.1280.jpg?c=1",
    imagePosition: "center 50%",
    typeLabel: "Knit Beanie",
    fit: "Fitted Style",
    material: "Mid-weight 50% wool, 50% acrylic",
    decorationOptions: sharedDecorationOptions,
    colors: [
      { name: "Asphalt Heather", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/137/images/509/1115_KNIT_BEANIE_ASPHALT_MARLE__97233.1715821286.1280.1280.jpg?c=1", swatch: "#50504b" },
      { name: "Athletic Heather", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/137/images/510/1115_KNIT_BEANIE_GREY_MARLE__00623.1715821286.1280.1280.jpg?c=1", swatch: "#a4a4a2" },
    ],
    fromPrice: addQuickTurnBeanieShippingIncludedPrice(20),
  },
  {
    slug: "as-colour-1120-cable-beanie",
    model: "AS Colour 1120",
    title: "Cable Beanie",
    description: "Fisherman-style cable knit with a snugger fit and stronger knit texture.",
    image:
      "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/326/images/22803/1120_CABLE_BEANIE_ARMY__49969.1751586062.1280.1280.jpg?c=1",
    imagePosition: "center 50%",
    typeLabel: "Cable Beanie",
    fit: "Fitted",
    material: "Mid-weight 100% acrylic",
    decorationOptions: sharedDecorationOptions,
    colors: [
      { name: "Army", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/326/images/22803/1120_CABLE_BEANIE_ARMY__49969.1751586062.1280.1280.jpg?c=1", swatch: "#4e4a36" },
      { name: "Black", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/326/images/2611/1120_CABLE_BEANIE_BLACK__42448.1715821440.1280.1280.jpg?c=1", swatch: "#000000" },
      { name: "Coal", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/326/images/23055/1120_CABLE_BEANIE_COAL__10645.1751586064.1280.1280.jpg?c=1", swatch: "#323031" },
      { name: "Cypress", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/326/images/4428/1120_CABLE_BEANIE_CYPRESS__48614.1751586062.1280.1280.jpg?c=1", swatch: "#51594a" },
      { name: "Ecru", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/326/images/4429/1120_CABLE_BEANIE_ECRU__48329.1751586062.1280.1280.jpg?c=1", swatch: "#e4e0d4" },
      { name: "Eucalyptus", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/326/images/6684/1120_CABLE_BEANIE_EUCALYPTUS__57919.1681342021.1280.1280.jpg?c=1", swatch: "#938e71" },
      { name: "Gold", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/326/images/2612/1120_CABLE_BEANIE_GOLD__70014.1715821440.1280.1280.jpg?c=1", swatch: "#f8ac32" },
      { name: "Athletic Heather", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/326/images/2613/1120_CABLE_BEANIE_GREY_MARLE__48095.1715821440.1280.1280.jpg?c=1", swatch: "#a4a4a2" },
      { name: "Jade", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/326/images/4430/1120_CABLE_BEANIE_JADE__17427.1751586062.1280.1280.jpg?c=1", swatch: "#084037" },
      { name: "Lime", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/326/images/6685/1120_CABLE_BEANIE_LIME__57149.1681342021.1280.1280.jpg?c=1", swatch: "#dde0a7" },
      { name: "Navy", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/326/images/8850/1120_CABLE_BEANIE_NAVY__12544.1751586062.1280.1280.jpg?c=1", swatch: "#1e202c" },
      { name: "Petrol Blue", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/326/images/4214/1120_CABLE_BEANIE_PETROL_BLUE__60942.1715821440.1280.1280.jpg?c=1", swatch: "#404a53" },
      { name: "Plum", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/326/images/4433/1120_CABLE_BEANIE_PLUM__26655.1751586062.1280.1280.jpg?c=1", swatch: "#433238" },
      { name: "Powder", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/326/images/6686/1120_CABLE_BEANIE_POWDER__71351.1681342021.1280.1280.jpg?c=1", swatch: "#989fb1" },
      { name: "Red", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/326/images/2615/1120_CABLE_BEANIE_RED__38048.1715821440.1280.1280.jpg?c=1", swatch: "#bb1016" },
      { name: "Walnut", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/326/images/22904/1120_CABLE_BEANIE_WALNUT__63425.1751586062.1280.1280.jpg?c=1", swatch: "#6b5a4a" },
    ],
    fromPrice: addQuickTurnBeanieShippingIncludedPrice(16),
  },
  {
    slug: "as-colour-1124-pom-pom-beanie",
    model: "AS Colour 1124",
    title: "Pom Pom Beanie",
    description: "Double-layer knit pom beanie with a relaxed shape and colder-weather feel.",
    image:
      "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/787/images/10805/1124_POM_POM_BEANIE_BLACK__95596.1681768459.1280.1280.jpg?c=1",
    imagePosition: "center 50%",
    typeLabel: "Pom Pom Beanie",
    fit: "Relaxed Fit",
    material: "Mid-weight 100% recycled acrylic",
    decorationOptions: sharedDecorationOptions,
    colors: [
      { name: "Black", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/787/images/10805/1124_POM_POM_BEANIE_BLACK__95596.1681768459.1280.1280.jpg?c=1", swatch: "#000000" },
      { name: "Ecru", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/787/images/10806/1124_POM_POM_BEANIE_ECRU__11647.1681768459.1280.1280.jpg?c=1", swatch: "#e4e0d4" },
      { name: "Athletic Heather", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/787/images/10807/1124_POM_POM_BEANIE_GREY_MARLE__96076.1681768459.1280.1280.jpg?c=1", swatch: "#a4a4a2" },
    ],
    fromPrice: addQuickTurnBeanieShippingIncludedPrice(16),
  },
  {
    slug: "as-colour-1125-gauge-beanie",
    model: "AS Colour 1125",
    title: "Gauge Beanie",
    description: "Heavy-weight ribbed beanie with a longer body and a recycled wool blend.",
    image:
      "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/788/images/10812/1125_GAUGE_BEANIE_BLACK__61910.1681768587.1280.1280.jpg?c=1",
    imagePosition: "center 50%",
    typeLabel: "Gauge Beanie",
    fit: "Longer Body",
    material: "Heavy-weight 50% recycled wool, 50% recycled acrylic",
    decorationOptions: sharedDecorationOptions,
    colors: [
      { name: "Black", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/788/images/10812/1125_GAUGE_BEANIE_BLACK__61910.1681768587.1280.1280.jpg?c=1", swatch: "#000000" },
      { name: "Ecru", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/788/images/10813/1125_GAUGE_BEANIE_ECRU__59110.1681768587.1280.1280.jpg?c=1", swatch: "#e4e0d4" },
      { name: "Athletic Heather", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/788/images/10814/1125_GAUGE_BEANIE_GREY_MARLE__37502.1681768587.1280.1280.jpg?c=1", swatch: "#a4a4a2" },
      { name: "Walnut", image: "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/788/images/22906/1125_GAUGE_BEANIE_WALNUT__83358.1751497699.1280.1280.jpg?c=1", swatch: "#6b5a4a" },
    ],
    fromPrice: addQuickTurnBeanieShippingIncludedPrice(20),
  },
];

export const BEANIE_STYLES_BY_SLUG: Record<string, BeanieStyle> = Object.fromEntries(
  BEANIE_STYLES.map((style) => [style.slug, style]),
);

export function getBeanieStyleBySlug(slug: string | null | undefined) {
  return (slug ? BEANIE_STYLES_BY_SLUG[slug] : undefined) ?? BEANIE_STYLES[0];
}
