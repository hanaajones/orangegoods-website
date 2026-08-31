import catalogRaw from "@/lib/as-colour-hats.json";
import { LIVE_CATALOG_HAT_SEEDS, type LiveCatalogHatSeed } from "@/lib/as-colour-hat-additions";
import type { ReadyMadeHatStyle, HatColor } from "@/components/ShoppableReadyMadeHat";
import type { HatMeta } from "@/components/ReadyMadeHatGrid";

export type { HatMeta } from "@/components/ReadyMadeHatGrid";

type RawCatalog = Record<string, { colors: Record<string, Record<string, string>> }>;
const catalog = catalogRaw as RawCatalog;

const AS_COLOUR_THUMB_BASE = "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images";

const browserImageFallbacks: Record<string, { primaryImage: string; hoverImage?: string }> = {
  "1114": {
    primaryImage: "/images/product/hats/as-colour/1114-cap-front.jpg",
    hoverImage: "/images/product/hats/as-colour/1114-cap-turn.jpg",
  },
  "1123": {
    primaryImage: "/images/product/hats/as-colour/1123-rope-cap-front.jpg",
    hoverImage: "/images/product/hats/as-colour/1123-rope-cap-turn.jpg",
  },
  "1110": {
    primaryImage: `${AS_COLOUR_THUMB_BASE}/1110/WEB_THUMBNAILS/1110_STOCK_CONTRAST_TRUCKER_NAVY_ECRU_THUMB.jpg`,
  },
  "1150": {
    primaryImage: `${AS_COLOUR_THUMB_BASE}/1150/WEB_THUMBNAILS/1150_CLASS_CAP_EUCALYPTUS_THUMB_1B.jpg`,
  },
  "1152": {
    primaryImage: `${AS_COLOUR_THUMB_BASE}/1152/WEB_THUMBNAILS/1152_CLASS_CORD_CAP_HAZY_PINK_THUMB_1B.jpg`,
  },
  "1156": {
    primaryImage: `${AS_COLOUR_THUMB_BASE}/1156/WEB_THUMBNAILS/1156_CLASS_CANVAS_CAP_BONE_THUMB.jpg`,
  },
  "1160": {
    primaryImage: `${AS_COLOUR_THUMB_BASE}/1160/WEB_THUMBNAILS/1160_FRAME_CAP_BONE_THUMB_1B.jpg`,
  },
  "1161": {
    primaryImage: `${AS_COLOUR_THUMB_BASE}/1161/WEB_THUMBNAILS/1161_FRAME_TRUCKER_CAP_ECRU_THUMB.jpg`,
  },
  "1164c": {
    primaryImage: "/images/product/hats/as-colour/1164c-soft-camo-cap-front.jpg",
    hoverImage: "/images/product/hats/as-colour/1164c-soft-camo-cap-turn.jpg",
  },
  "1165": {
    primaryImage:
      "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/1072/images/18283/1165_FRAME_TWO-TONE_CAP_NATURAL_CARDINAL__34518.1742762785.1280.1280.jpg?c=1",
    hoverImage:
      "https://cdn11.bigcommerce.com/s-hsi95a83fz/products/1072/images/25359/1165_TWO-TONE_FRAME_CAP_NATURAL_RED_SIDE__05740.1781666524.1280.1280.jpg?c=1",
  },
};

const liveCatalogFallbackColors: Record<string, Record<string, Partial<HatColor>>> = Object.fromEntries(
  LIVE_CATALOG_HAT_SEEDS.map((seed) => [seed.id, seed.colors]),
);

const catalogFallbackColors: Record<string, Record<string, Partial<HatColor>>> = {
  "1110": {
    "Navy / Ecru": {
      front: `${AS_COLOUR_THUMB_BASE}/1110/WEB_THUMBNAILS/1110_STOCK_CONTRAST_TRUCKER_NAVY_ECRU_THUMB.jpg`,
    },
  },
  "1150": {
    Eucalyptus: {
      front: `${AS_COLOUR_THUMB_BASE}/1150/WEB_THUMBNAILS/1150_CLASS_CAP_EUCALYPTUS_THUMB_1B.jpg`,
    },
  },
  "1152": {
    "Hazy Pink": {
      front: `${AS_COLOUR_THUMB_BASE}/1152/WEB_THUMBNAILS/1152_CLASS_CORD_CAP_HAZY_PINK_THUMB_1B.jpg`,
    },
  },
  "1154": {
    "Natural / Midnight": {
      front: `${AS_COLOUR_THUMB_BASE}/1154/WEB_THUMBNAILS/1154_CLASS_TWO-TONE_CAP_NATURAL_MIDNIGHT_THUMB.jpg`,
    },
  },
  "1156": {
    Black: {
      front: "/images/product/hats/as-colour/1156-canvas-cap-front.jpg",
      turn: "/images/product/hats/as-colour/1156-canvas-cap-turn.jpg",
    },
  },
  "1161": {
    White: {
      front: `${AS_COLOUR_THUMB_BASE}/1161/WEB_THUMBNAILS/1161_FRAME_FOAM_TRUCKER_CAP_WHITE_THUMB.jpg`,
    },
    Ecru: {
      front: `${AS_COLOUR_THUMB_BASE}/1161/WEB_THUMBNAILS/1161_FRAME_TRUCKER_CAP_ECRU_THUMB.jpg`,
    },
    Bone: {
      front: `${AS_COLOUR_THUMB_BASE}/1161/WEB_THUMBNAILS/1161_FRAME_FOAM_TRUCKER_CAP_BONE_THUMB.jpg`,
    },
    Khaki: {
      front: `${AS_COLOUR_THUMB_BASE}/1161/WEB_THUMBNAILS/1161_FRAME_TRUCKER_CAP_KHAKI_THUMB.jpg`,
    },
    Sunset: {
      front: `${AS_COLOUR_THUMB_BASE}/1161/WEB_THUMBNAILS/1161_FRAME_FOAM_TRUCKER_CAP_SUNSET_THUMB.jpg`,
    },
    Fire: {
      front: `${AS_COLOUR_THUMB_BASE}/1161/WEB_THUMBNAILS/1161_FRAME_FOAM_TRUCKER_CAP_FIRE_THUMB.jpg`,
    },
    Walnut: {
      front: `${AS_COLOUR_THUMB_BASE}/1161/WEB_THUMBNAILS/1161_FRAME_FOAM_TRUCKER_CAP_WALNUT_THUMB.jpg`,
    },
    "Forest Green": {
      front: `${AS_COLOUR_THUMB_BASE}/1161/WEB_THUMBNAILS/1161_FRAME_FOAM_TRUCKER_CAP_FOREST_GREEN_THUMB.jpg`,
    },
    Cypress: {
      front: `${AS_COLOUR_THUMB_BASE}/1161/WEB_THUMBNAILS/1161_FRAME_FOAM_TRUCKER_CAP_CYPRESS_THUMB.jpg`,
    },
    Liberty: {
      front: `${AS_COLOUR_THUMB_BASE}/1161/WEB_THUMBNAILS/1161_FRAME_FOAM_TRUCKER_CAP_LIBERTY_THUMB.jpg`,
    },
    Navy: {
      front: `${AS_COLOUR_THUMB_BASE}/1161/WEB_THUMBNAILS/1161_FRAME_TRUCKER_CAP_NAVY_THUMB_1B.jpg`,
    },
    Black: {
      front: `${AS_COLOUR_THUMB_BASE}/1161/WEB_THUMBNAILS/1161_FRAME_TRUCKER_CAP_BLACK_THUMB_1B.jpg`,
    },
  },
  "1160": {
    Bone: {
      front: `${AS_COLOUR_THUMB_BASE}/1160/WEB_THUMBNAILS/1160_FRAME_CAP_BONE_THUMB_1B.jpg`,
      turn: "/images/product/hats/as-colour/1160-cap-turn.jpg",
    },
    Black: {
      front: "/images/product/hats/as-colour/1160-cap-front.jpg",
      turn: "/images/product/hats/as-colour/1160-cap-turn.jpg",
    },
  },
  "1164C": {
    "Tree Camo": {
      front: "/images/product/hats/as-colour/1164c-soft-camo-cap-front.jpg",
      turn: "/images/product/hats/as-colour/1164c-soft-camo-cap-turn.jpg",
    },
  },
  "1165": {
    "Natural / Cardinal": {
      front: `${AS_COLOUR_THUMB_BASE}/1165/WEB_THUMBNAILS/1165_FRAME_TWO-TONE_CAP_NATURAL_CARDINAL_THUMB.jpg`,
    },
  },
  ...liveCatalogFallbackColors,
};

const catalogFallbackAllColors: Record<string, string[]> = {
  "1161": ["Black", "Bone", "Cypress", "Ecru", "Fire", "Forest Green", "Khaki", "Liberty", "Navy", "Sunset", "Walnut", "White"],
};

function normalizeColorNameKey(rawName: string) {
  return rawName.replace(/\s*\/\s*/g, " / ").replace(/\s+/g, " ").trim();
}

function normalizeColorNameForMatching(rawName: string) {
  return rawName.toLowerCase().replace(/[/_-]+/g, " ").replace(/\s+/g, " ").trim();
}

type BrowserColorFamily =
  | "blue"
  | "green"
  | "brown"
  | "red"
  | "orange"
  | "yellow"
  | "pink"
  | "purple"
  | "grey"
  | "natural"
  | "camo"
  | "black";

const BROWSER_COLOR_ROTATION: BrowserColorFamily[] = [
  "blue",
  "green",
  "brown",
  "red",
  "orange",
  "grey",
  "natural",
];

function hashId(value: string) {
  let hash = 0;

  for (const char of value) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }

  return hash;
}

function classifyBrowserColorFamily(rawName: string): BrowserColorFamily {
  const normalized = normalizeColorNameForMatching(rawName);

  if (normalized.includes("camo")) return "camo";
  if (normalized.includes("black") || normalized.includes("coal") || normalized.includes("midnight")) return "black";
  if (normalized.includes("blue") || normalized.includes("navy") || normalized.includes("atlantic") || normalized.includes("ink") || normalized.includes("liberty")) return "blue";
  if (normalized.includes("green") || normalized.includes("forest") || normalized.includes("cypress") || normalized.includes("eucalyptus") || normalized.includes("army") || normalized.includes("sage") || normalized.includes("olive")) return "green";
  if (normalized.includes("brown") || normalized.includes("walnut") || normalized.includes("camel") || normalized.includes("mushroom") || normalized.includes("chocolate")) return "brown";
  if (normalized.includes("red") || normalized.includes("cardinal") || normalized.includes("burgundy")) return "red";
  if (normalized.includes("orange") || normalized.includes("fire") || normalized.includes("sunset") || normalized.includes("clay")) return "orange";
  if (normalized.includes("yellow") || normalized.includes("gold")) return "yellow";
  if (normalized.includes("pink") || normalized.includes("hazy pink")) return "pink";
  if (normalized.includes("purple") || normalized.includes("plum") || normalized.includes("violet")) return "purple";
  if (normalized.includes("grey") || normalized.includes("gray") || normalized.includes("charcoal") || normalized.includes("storm") || normalized.includes("silver")) return "grey";
  return "natural";
}

function getBrowserFamilyPreferenceOrder(id: string) {
  const startIndex = hashId(id.toLowerCase()) % BROWSER_COLOR_ROTATION.length;

  return BROWSER_COLOR_ROTATION.map((_, index) => BROWSER_COLOR_ROTATION[(startIndex + index) % BROWSER_COLOR_ROTATION.length]);
}

function scoreBrowserFeaturedColor(
  id: string,
  color: Partial<HatColor> & { name: string },
) {
  const family = classifyBrowserColorFamily(color.name);
  const familyPreference = getBrowserFamilyPreferenceOrder(id);
  const preferredIndex = familyPreference.indexOf(family);

  return (
    (color.front ? 18 : 0) +
    (color.turn || color.side ? 7 : 0) +
    (color.back ? 2 : 0) +
    (color.main ? 1 : 0) +
    (family === "black" ? -12 : 0) +
    (family === "natural" ? -4 : 0) +
    (preferredIndex === 0 ? 10 : preferredIndex === 1 ? 6 : preferredIndex === 2 ? 3 : 0)
  );
}

function getFallbackAllColors(id: string) {
  return catalogFallbackAllColors[id.toUpperCase()] ?? catalogFallbackAllColors[id] ?? [];
}

function normalizeRawColorMap(raw: Record<string, Partial<HatColor>>) {
  const normalized: Record<string, Partial<HatColor>> = {};

  for (const [rawName, rawAngles] of Object.entries(raw)) {
    const angles = { ...rawAngles };
    let colorName = normalizeColorNameKey(rawName);

    if (/ back$/i.test(colorName) && angles.front && !angles.back) {
      angles.back = angles.front;
      delete angles.front;
      colorName = colorName.replace(/ back$/i, "");
    } else if (/ side$/i.test(colorName) && angles.front && !angles.side) {
      angles.side = angles.front;
      delete angles.front;
      colorName = colorName.replace(/ side$/i, "");
    } else if (/ turn$/i.test(colorName) && angles.front && !angles.turn) {
      angles.turn = angles.front;
      delete angles.front;
      colorName = colorName.replace(/ turn$/i, "");
    }

    normalized[colorName] = {
      ...normalized[colorName],
      ...angles,
    };
  }

  return normalized;
}

function getRawColors(id: string) {
  const raw =
    Object.keys(catalog[id]?.colors ?? {}).length > 0
      ? catalog[id]?.colors ?? {}
      : catalogFallbackColors[id.toUpperCase()] ?? catalogFallbackColors[id] ?? {};

  return normalizeRawColorMap(raw);
}

export function getReadyMadeHatBrowserImages(id: string) {
  const normalizedId = id.toLowerCase();
  const raw = getRawColors(id);
  const colorEntries = Object.entries(raw).map(([name, color]) => ({
    name,
    ...color,
  })) as Array<Partial<HatColor> & { name: string }>;
  const fallback = browserImageFallbacks[normalizedId];
  const featuredColor =
    colorEntries
      .slice()
      .sort((a, b) => scoreBrowserFeaturedColor(id, b) - scoreBrowserFeaturedColor(id, a))[0];

  const primaryImage =
    featuredColor?.front ??
    fallback?.primaryImage ??
    featuredColor?.turn ??
    featuredColor?.side ??
    featuredColor?.back ??
    featuredColor?.main;

  const hoverImage =
    (featuredColor?.turn && featuredColor.turn !== primaryImage ? featuredColor.turn : undefined) ??
    (featuredColor?.side && featuredColor.side !== primaryImage ? featuredColor.side : undefined) ??
    (featuredColor?.back && featuredColor.back !== primaryImage ? featuredColor.back : undefined) ??
    (featuredColor?.front && featuredColor.front !== primaryImage ? featuredColor.front : undefined) ??
    (featuredColor?.main && featuredColor.main !== primaryImage ? featuredColor.main : undefined) ??
    fallback?.hoverImage;

  return {
    primaryImage,
    hoverImage,
  };
}

function cleanColorName(raw: string, prefix: string): string {
  let s = raw.replace(new RegExp(`^${prefix}\\s*`, "i"), "").trim();
  s = s.replace(/_/g, " ").replace(/\s+/g, " ");

  // Surf Rope colors come through as "Black White" etc. The browser swatch
  // logic understands two-tone names best when the secondary trim color is
  // separated with a slash.
  if (/^rope cap$/i.test(prefix) && /^(black|ecru|navy|powder|fire|army)\s+white$/i.test(s)) {
    s = s.replace(/\s+white$/i, " / White");
  }

  return s || "Default";
}

function normalizeCatalogTitle(title: string) {
  return title.replace(/\bAccess\b/g, "Dad");
}

function titleizePhrase(value: string) {
  return value
    .toLowerCase()
    .replace(/\b[a-z]/g, (char) => char.toUpperCase())
    .replace(/\bAs\b/g, "AS")
    .replace(/\bUpf\b/g, "UPF")
    .replace(/\bT800\b/g, "T800");
}

function materialFromFabric(fabric: string) {
  return titleizePhrase(
    fabric
      .replace(/^light-mid weight,?\s*/i, "")
      .replace(/^light-?mid weight,?\s*/i, "")
      .replace(/^light weight,?\s*/i, "")
      .replace(/^mid weight,?\s*/i, "")
      .replace(/^mid-weight,?\s*/i, "")
      .replace(/^heavy weight,?\s*/i, "")
      .trim(),
  );
}

function profileFromFit(customFit: string, title: string): HatMeta["profile"] {
  const fit = customFit.toLowerCase();
  if (fit.includes("high")) return "high";
  if (fit.includes("mid")) return "mid";
  if (fit.includes("low")) return "low";
  if (title.toLowerCase().includes("bucket")) return "low";
  return "mid";
}

function billFromConstruction(title: string, construction: string) {
  const haystack = `${title} ${construction}`.toLowerCase();
  if (haystack.includes("bucket")) return "Brim";
  if (haystack.includes("curved")) return "Curved";
  return "Flat";
}

function closureFromConstruction(title: string, construction: string) {
  const haystack = `${title} ${construction}`.toLowerCase();
  if (haystack.includes("bucket")) return "";
  if (haystack.includes("metal clasp") || haystack.includes("metal buckle")) return "Metal Clasp Strapback";
  if (haystack.includes("velcro")) return "Velcro Strap";
  if (haystack.includes("stretch strapback")) return "Stretch Strapback";
  if (haystack.includes("elastic straps")) return "Elastic Strapback";
  if (haystack.includes("plastic snapback")) return "Plastic Snapback";
  if (haystack.includes("toggle")) return "Adjustable Chin Strap";
  return "Adjustable Closure";
}

function panelLabel(title: string, construction: string) {
  const haystack = `${title} ${construction}`.toLowerCase();
  if (haystack.includes("bucket")) return "Bucket";
  if (haystack.includes("7-panel") || haystack.includes("seven panel")) return "7-Panel";
  if (haystack.includes("6-panel") || haystack.includes("six panel")) return "6-Panel";
  if (haystack.includes("5-panel") || haystack.includes("five panel")) return "5-Panel";
  if (haystack.includes("trucker")) return "5-Panel";
  return "Cap";
}

function structureLabel(title: string, construction: string) {
  const haystack = `${title} ${construction}`.toLowerCase();
  if (haystack.includes("bucket")) return "Unstructured";
  if (haystack.includes("unstructured")) return "Unstructured";
  if (
    haystack.includes("structured") ||
    haystack.includes("foam") ||
    haystack.includes("frame") ||
    haystack.includes("stock") ||
    haystack.includes("icon") ||
    haystack.includes("mesh trucker")
  ) {
    return "Structured";
  }
  return "Unstructured";
}

function crownFromSeed(seed: LiveCatalogHatSeed) {
  if (seed.title.toLowerCase().includes("bucket")) return "Bucket · Unstructured";

  const profileLabel =
    seed.customFit || (profileFromFit(seed.customFit ?? "", seed.title) === "high"
      ? "High Profile"
      : profileFromFit(seed.customFit ?? "", seed.title) === "low"
        ? "Low Profile"
        : "Mid Profile");

  return `${profileLabel} · ${panelLabel(seed.title, seed.construction)} · ${structureLabel(seed.title, seed.construction)}`;
}

function buildCatalogTagline(seed: LiveCatalogHatSeed, material: string) {
  const title = normalizeCatalogTitle(seed.title).toLowerCase();
  if (title.includes("bucket")) {
    if (title.includes("wide brim")) return `${material}. Bucket shape with extra sun coverage.`;
    if (title.includes("terry")) return `${material}. Soft bucket shape for warmer days.`;
    if (title.includes("cord")) return `${material}. Textured bucket shape with a richer hand feel.`;
    if (title.includes("camo")) return `${material}. Bucket hat with an outdoor camo lean.`;
    return `${material}. Easy bucket shape for everyday wear.`;
  }
  if (title.includes("dad")) return `${material}. Easy everyday dad cap with a clean profile.`;
  if (title.includes("five panel")) return `${material}. Classic five-panel shape built for easy decoration.`;
  if (title.includes("rope")) return `${material}. Front rope detail with an easy decorated shape.`;
  if (title.includes("foam")) return `${material}. Foam-front trucker with bigger promo energy.`;
  if (title.includes("trucker")) return `${material}. Mesh-back trucker built for easy decoration.`;
  if (title.includes("perforated")) return `${material}. Technical cap with extra airflow through the side panels.`;
  if (title.includes("active")) return `${material}. Lighter active cap made for faster outdoor programs.`;
  if (title.includes("nylon") || title.includes("surf")) return `${material}. Lightweight technical cap built for quick-turn programs.`;
  if (title.includes("canvas")) return `${material}. Canvas build with a sturdier hand feel.`;
  if (title.includes("cord")) return `${material}. Cord texture with a premium finish.`;
  if (title.includes("linen")) return `${material}. Linen build with an airy feel.`;
  if (title.includes("wool")) return `${material}. Wool blend with a slightly more elevated finish.`;
  if (title.includes("kids")) return `${material}. Youth-friendly fit for smaller programs.`;
  if (title.includes("camo")) return `${material}. Camo build with a broken-in outdoor feel.`;
  if (title.includes("two-tone")) return `${material}. Contrast colorblocking with a clean decorated shape.`;
  if (title.includes("frame")) return `${material}. Structured crown with more front-logo presence.`;
  if (title.includes("icon")) return `${material}. Everyday structured cap with a clean retail shape.`;
  if (title.includes("stock")) return `${material}. Classic cap shape with more of a streetwear feel.`;
  if (title.includes("james")) return `${material}. Clean flat-peak cap with a laid-back shape.`;
  return `${material}. Clean headwear option for quick-turn decoration.`;
}

function fitCopyFromSeed(seed: LiveCatalogHatSeed) {
  const title = seed.title.toLowerCase();
  const construction = seed.construction.toLowerCase();
  if (title.includes("bucket")) {
    return title.includes("kids") ? "One size fits most youth." : "One size fits most.";
  }
  if (title.includes("kids")) return "Youth fit. Adjustable closure.";
  if (construction.includes("stretch strapback")) return "One size fits most. Stretch strapback closure.";
  if (construction.includes("elastic straps")) return "One size fits most. Elastic strap closure.";
  if (construction.includes("velcro")) return "One size fits most. Velcro strap closure.";
  return FIT_DEFAULT;
}

function buildCatalogStyle(seed: LiveCatalogHatSeed): HatMeta {
  const raw = getRawColors(seed.id);
  const normalizedTitle = normalizeCatalogTitle(seed.title);
  const material = materialFromFabric(seed.fabric);
  const colors: HatColor[] = (Object.entries(raw)
    .map(([name, angles]) => ({
      name: normalizeColorNameKey(name),
      ...angles,
    })) as HatColor[])
    .filter((color) => color.front || color.side || color.turn || color.back)
    .sort((a, b) => {
      const score = (color: HatColor) =>
        (color.name.toLowerCase().includes("black") ? 0 : 8) +
        (color.back ? 4 : 0) +
        (color.front ? 2 : 0) +
        (color.turn || color.side ? 1 : 0);
      return score(b) - score(a);
    });
  const allColors = Array.from(
    new Set([...colors.map((color) => color.name), ...getFallbackAllColors(seed.id).map(normalizeColorNameKey)]),
  );

  const style: ReadyMadeHatStyle = {
    id: seed.id,
    name: normalizedTitle,
    tagline: buildCatalogTagline(seed, material),
    material,
    crown: crownFromSeed(seed),
    closure: closureFromConstruction(seed.title, seed.construction),
    bill: billFromConstruction(seed.title, seed.construction),
    colors,
    fit: fitCopyFromSeed(seed),
    fabricDesc: `${material}.`,
  };

  return {
    ...style,
    profile: profileFromFit(seed.customFit ?? "", normalizedTitle),
    fabric: material,
    allColors,
  };
}

function build(
  id: string,
  name: string,
  tagline: string,
  material: string,
  crown: string,
  closure: string,
  bill: string,
  prefix: string,
  profile: HatMeta["profile"],
  fit: string,
  fabricDesc: string,
): HatMeta {
  const raw = getRawColors(id);
  const colors: HatColor[] = (Object.entries(raw)
    .map(([rawName, angles]) => ({
      name: cleanColorName(rawName, prefix),
      ...angles,
    })) as HatColor[])
    .filter(c => (c.back || c.front || c.turn || c.side) && !(c.main && !c.back))
    .sort((a, b) => {
      const score = (c: HatColor) =>
        (c.name.toLowerCase().includes("black") ? 0 : 8) +
        (c.back ? 4 : 0) +
        (c.front ? 2 : 0) +
        (c.turn || c.side ? 1 : 0);
      return score(b) - score(a);
    });
  const allColors = Array.from(
    new Set([
      ...colors.map((color) => color.name),
      ...getFallbackAllColors(id).map((color) => normalizeColorNameKey(color.replace(/_/g, " "))),
    ]),
  );

  // Fallback hero if no per-color shots
  if (colors.length === 0) {
    colors.push({ name: "View colors →" });
  }

  const style: ReadyMadeHatStyle = { id, name, tagline, material, crown, closure, bill, colors, fit, fabricDesc };
  return { ...style, profile, fabric: material, allColors };
}

const FIT_DEFAULT = "One size fits most. Adjustable closure.";

export const READY_MADE_HATS: HatMeta[] = [
  // ── Low profile ──────────────────────────────────────────────────────────
  build("1130","Dad Hat",            "Unstructured cotton. The everyday go-to.",                   "100% Cotton",                "Low Profile · 6-Panel · Unstructured","Metal Clasp Strapback",  "Curved","Cap",          "low", FIT_DEFAULT, "100% Cotton. Soft, breathable, breaks in over time."),
  build("1134","Dad Hat Faded",      "Garment-washed for a vintage look from day one.",            "100% Cotton (garment washed)","Low Profile · 6-Panel · Unstructured","Metal Clasp Strapback",  "Curved","Faded Cap",    "low", FIT_DEFAULT, "100% Cotton, garment washed for a faded, worn-in finish."),
  build("1150","Class Cap Twill",    "Clean 6-panel twill with a metal clasp.",                   "100% Cotton Twill",          "Low Profile · 6-Panel · Unstructured","Metal Clasp Strapback",  "Flat",  "Cap Twill",    "low", FIT_DEFAULT, "100% Cotton Twill. Structured yet lightweight."),
  build("1152","Corduroy Strapback", "Corduroy texture with a classic metal clasp.",              "100% Cotton Corduroy",       "Mid Profile · 6-Panel · Unstructured","Metal Clasp Strapback",  "Flat",  "Strapback",    "low", FIT_DEFAULT, "100% Cotton Corduroy. Textured, tactile, and premium."),
  build("1153","Class Five Panel",   "Clean 5-panel with a metal clasp — minimal and sharp.",     "100% Cotton",                "Mid Profile · 5-Panel · Unstructured","Metal Clasp Strapback",  "Flat",  "Cap",          "low", FIT_DEFAULT, "100% Cotton. A versatile 5-panel with a clean, minimal profile."),
  build("1164C","Camo Cap",          "Soft unstructured camo with velcro closure.",               "55% Cotton · 45% Polyester", "Low Profile · 6-Panel · Unstructured","Elastic Velcro Closure", "Curved","Soft Camo Cap","low", FIT_DEFAULT, "55% Cotton, 45% Polyester. Soft build with authentic camo print."),

  // ── Mid profile ───────────────────────────────────────────────────────────
  build("1114","Surf Snapback",      "Recycled nylon in 50+ colors. Lightweight and clean.",      "100% Recycled Nylon",        "Mid Profile · 5-Panel · Unstructured","Plastic Snapback",       "Flat",  "Cap",          "mid", FIT_DEFAULT, "100% Recycled Nylon. Lightweight, water-resistant, quick-dry."),
  build("1123","Surf Rope Snapback", "Recycled nylon with a front rope detail. Two-tone combos.", "100% Recycled Nylon",        "Mid Profile · 5-Panel · Unstructured","Plastic Snapback",       "Flat",  "Rope Cap",     "mid", FIT_DEFAULT, "100% Recycled Nylon with front rope accent."),
  build("1154","Two-Tone Cap",       "Two contrasting panels. Bold and graphic.",                 "100% Cotton",                "Mid Profile · 5-Panel · Unstructured","Plastic Snapback",       "Flat",  "Two Tone Cap", "mid", FIT_DEFAULT, "100% Cotton. Contrasting front and back panels for a graphic look."),
  build("1156","Class Canvas Cap",   "Waxed canvas construction — rugged and refined.",           "100% Cotton Canvas",         "Mid Profile · 5-Panel · Unstructured","Plastic Snapback",       "Flat",  "Canvas Cap",   "mid", FIT_DEFAULT, "100% Cotton Canvas. Durable, waxed finish with a rugged hand feel."),
  build("1104","Finn Nylon Cap",     "Premium nylon with a clean mid profile.",                   "100% Nylon",                 "Mid Profile · 5-Panel · Unstructured","Plastic Snapback",       "Flat",  "Nylon Cap",    "mid", FIT_DEFAULT, "100% Nylon. Smooth, durable, and lightweight."),
  build("1110","Stock Trucker",      "Classic structured trucker with mesh back.",                "Cotton Front · Mesh Back",   "Mid Profile · 5-Panel · Structured",  "Plastic Snapback",       "Flat",  "Trucker",      "mid", FIT_DEFAULT, "Cotton front panel with breathable mesh back. Classic trucker construction."),
  build("1141","Icon Trucker Cap",   "Premium trucker with a clean front panel.",                 "Cotton Front · Mesh Back",   "Mid Profile · 5-Panel · Unstructured","Plastic Snapback",       "Curved","Trucker",      "mid", FIT_DEFAULT, "Cotton front with mesh back. Relaxed trucker silhouette."),
  build("1157","Class Cord Trucker", "Corduroy front with mesh back. Unique texture.",            "Corduroy Front · Mesh Back", "Mid Profile · 5-Panel · Unstructured","Plastic Snapback",       "Curved","Cord Trucker", "mid", FIT_DEFAULT, "Corduroy front panel with mesh back. Textured and breathable."),

  // ── High profile ──────────────────────────────────────────────────────────
  build("1160","Frame Cap",          "High-profile structured cap. Bold and sharp.",              "100% Cotton",                "High Profile · 5-Panel · Structured", "Plastic Snapback",       "Curved","Cap",          "high",FIT_DEFAULT, "100% Cotton. Firm front panel holds its shape perfectly."),
  build("1161","Foam Trucker",       "High-profile foam front trucker. Makes a statement.",       "Foam Front · Mesh Back",     "High Profile · 5-Panel · Structured", "Plastic Snapback",       "Curved","Foam Trucker", "high",FIT_DEFAULT, "Foam front panel with mesh back. Tall, bold profile."),
  build("1165","Frame Cap Two-Tone", "High-profile two-tone structured cap.",                     "100% Cotton",                "High Profile · 5-Panel · Structured", "Plastic Snapback",       "Curved","Two Tone",     "high",FIT_DEFAULT, "100% Cotton. High-profile structured crown with two-tone colorblocking."),

  // ── Bucket hats ───────────────────────────────────────────────────────────
  build("1117","Bucket Hat",         "Classic cotton bucket. Packable and versatile.",            "100% Cotton",                "Bucket · Unstructured",               "—",                      "Brim",  "Bucket",       "low", "One size fits most.", "100% Cotton. Classic construction, packable, and UV-protective."),
  build("1175","Terry Bucket Hat",   "Terry cloth bucket hat. Summer-ready.",                     "100% Cotton Terry",          "Bucket · Unstructured",               "—",                      "Brim",  "Terry",        "low", "One size fits most.", "100% Cotton Terry. Soft, absorbent, and made for summer."),
  build("1176","Cord Bucket Hat",    "Corduroy bucket hat. Rich texture, cozy feel.",             "100% Cotton Corduroy",       "Bucket · Unstructured",               "—",                      "Brim",  "Cord Bucket",  "low", "One size fits most.", "100% Cotton Corduroy. Textured bucket with a premium hand feel."),
  ...LIVE_CATALOG_HAT_SEEDS.map(buildCatalogStyle),
];

export const READY_MADE_HATS_BY_ID: Record<string, HatMeta> = Object.fromEntries(
  READY_MADE_HATS.map(s => [s.id.toLowerCase(), s])
);
