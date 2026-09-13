import { calculateJolScreenPrintLocationUnitPrice } from "@/data/catalog";
import { addQuickTurnToteShippingIncludedPrice } from "@/lib/quick-turn-shipping";

export type AsColourToteStyle = {
  id: string;
  name: string;
  typeLabel: string;
  description: string;
  fabric: string;
  size: string;
  colors: string[];
  image: string;
  tier50Price: number;
};

function roundToQuarter(value: number) {
  return Math.round(value * 4) / 4;
}

function calculateBrowserFromPrice(tier50Price: number) {
  return addQuickTurnToteShippingIncludedPrice(roundToQuarter(
    tier50Price +
      calculateJolScreenPrintLocationUnitPrice({
        qty: 100,
        colorCount: 1,
        printCat: "bag",
      }),
  ));
}

export const AS_COLOUR_TOTES: Array<AsColourToteStyle & { fromPrice: number }> = [
  {
    id: "1000",
    name: "Parcel Tote",
    typeLabel: "Canvas Tote",
    description: "Heavy canvas. Squared-off everyday tote with a cleaner, narrower shape.",
    fabric: "Heavy weight, 9.4 oz, 100% cotton canvas",
    size: '13.97" x 15.35"',
    colors: ["Cream", "Black"],
    image:
      "https://cdn11.bigcommerce.com/s-qvmnxltqps/images/stencil/640w/uploaded_images/1000/WEB_THUMBNAILS/1000_PARCEL_TOTE_CREAM_THUMB.jpg",
    tier50Price: 11.25,
    fromPrice: calculateBrowserFromPrice(11.25),
  },
  {
    id: "1001",
    name: "Carrie Tote",
    typeLabel: "Canvas Tote",
    description: "Heavy canvas. The broadest AS Colour tote color range for quick-turn programs.",
    fabric: "Heavy weight, 9.4 oz, 100% cotton canvas",
    size: '16.54" x 16.54"',
    colors: [
      "Cream",
      "Pink",
      "Camel",
      "Petrol Blue",
      "Navy",
      "Army",
      "Coal",
      "Black",
      "Bone",
      "Khaki",
      "Walnut",
      "Burgundy",
      "Charity Pink",
      "Dark Chocolate",
      "Forest Green",
      "Kelly Green",
      "Liberty",
      "Mushroom",
      "Mustard",
      "Orange",
      "Pine Green",
      "Red",
      "Sunset",
    ],
    image:
      "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1001/WEB_THUMBNAILS/1001_CARRIE_TOTE_CREAM_THUMB.jpg",
    tier50Price: 13.5,
    fromPrice: calculateBrowserFromPrice(13.5),
  },
  {
    id: "1002",
    name: "Shoulder Tote",
    typeLabel: "Shoulder Tote",
    description: "Heavy canvas. Wider proportions for a roomier shoulder-carry tote.",
    fabric: "Heavy weight, 9.4 oz, 100% cotton canvas",
    size: '18.11" x 14.57"',
    colors: ["Cream", "Black"],
    image:
      "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1002/WEB_THUMBNAILS/1002_SHOULDER_TOTE_CREAM_THUMB.jpg",
    tier50Price: 15,
    fromPrice: calculateBrowserFromPrice(15),
  },
  {
    id: "1007",
    name: "Basic Tote",
    typeLabel: "Lightweight Tote",
    description: "Lighter cotton tote for simpler event, handout, and quick-grab programs.",
    fabric: "Light weight, 5.9 oz, 100% cotton",
    size: '16.54" x 16.54"',
    colors: ["Black", "Cream"],
    image:
      "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1007/WEB_THUMBNAILS/1007_BASIC_TOTE_BLACK_THUMB.jpg",
    tier50Price: 11.25,
    fromPrice: calculateBrowserFromPrice(11.25),
  },
  {
    id: "1008",
    name: "Two-Tone Carrie Tote",
    typeLabel: "Two-Tone Tote",
    description: "Heavy canvas with contrast straps for a more styled retail-ready tote option.",
    fabric: "Heavy weight, 9.4 oz, 100% cotton canvas",
    size: '16.54" x 16.54"',
    colors: ["Army / Cream", "Black / Cream", "Coal / Black", "Cream / Black", "Navy / Cream"],
    image:
      "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1008/WEB_THUMBNAILS/1008_2-TONE_CARRIE_TOTE_ARMY_CREAM_THUMB.jpg",
    tier50Price: 18.75,
    fromPrice: calculateBrowserFromPrice(18.75),
  },
  {
    id: "1012",
    name: "Carrie Denim Tote",
    typeLabel: "Denim Tote",
    description: "Heavier cotton tote with a denim finish and a slightly more fashion-led feel.",
    fabric: "Heavy weight, 10.3 oz, 100% cotton",
    size: '16.54" x 16.54"',
    colors: ["Denim", "Indigo"],
    image:
      "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1012/WEB_THUMBNAILS/1012_DENIM_CARRIE_TOTE_DENIM_THUMB.jpg",
    tier50Price: 18,
    fromPrice: calculateBrowserFromPrice(18),
  },
  {
    id: "1040",
    name: "Oversized Tote Bag",
    typeLabel: "Oversized Tote",
    description: "Heavy canvas with a larger footprint when the bag needs more real carrying capacity.",
    fabric: "Heavy weight, 9.4 oz, 100% cotton canvas",
    size: '26.77" x 14.57"',
    colors: ["Black", "Cream"],
    image:
      "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1040/WEB_THUMBNAILS/1040_OVERSIZED_TOTE_BAG_BLACK_THUMB.jpg",
    tier50Price: 18,
    fromPrice: calculateBrowserFromPrice(18),
  },
  {
    id: "1041",
    name: "Pocket Tote Bag",
    typeLabel: "Pocket Tote",
    description: "Heavy canvas tote with exterior pockets for a more functional everyday carry.",
    fabric: "Heavy weight, 9.4 oz, 100% cotton canvas",
    size: '19.69" x 15.75"',
    colors: ["Black", "Cream"],
    image:
      "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1041/WEB_THUMBNAILS/1041_POCKET_TOTE_BAG_BLACK_THUMB.jpg",
    tier50Price: 21,
    fromPrice: calculateBrowserFromPrice(21),
  },
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getAsColourToteSlug(style: Pick<AsColourToteStyle, "id" | "name">) {
  return `as-colour-${style.id}-${slugify(style.name)}`;
}

export function getAsColourToteBySlug(slug: string | null | undefined) {
  if (!slug) return undefined;
  return AS_COLOUR_TOTES.find((style) => getAsColourToteSlug(style) === slug);
}
