import catalogRaw from "@/lib/as-colour-hats.json";
import type { ReadyMadeHatStyle, HatColor } from "@/components/ShoppableReadyMadeHat";
import type { HatMeta } from "@/components/ReadyMadeHatGrid";

type RawCatalog = Record<string, { colors: Record<string, Record<string, string>> }>;
const catalog = catalogRaw as RawCatalog;

const AS_COLOUR_THUMB_BASE = "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images";

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
  "1161": {
    Ecru: {
      front: `${AS_COLOUR_THUMB_BASE}/1161/WEB_THUMBNAILS/1161_FRAME_TRUCKER_CAP_ECRU_THUMB.jpg`,
    },
  },
  "1165": {
    "Natural / Cardinal": {
      front: `${AS_COLOUR_THUMB_BASE}/1165/WEB_THUMBNAILS/1165_FRAME_TWO-TONE_CAP_NATURAL_CARDINAL_THUMB.jpg`,
    },
  },
};

function cleanColorName(raw: string, prefix: string): string {
  let s = raw.replace(new RegExp(`^${prefix}\\s*`, "i"), "").trim();
  s = s.replace(/_/g, " ").replace(/\s+/g, " ");
  if (/^[A-Z][a-z]+ [A-Z][a-z]+$/.test(s)) s = s.replace(" ", " / ");
  return s || "Default";
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
  const raw = Object.keys(catalog[id]?.colors ?? {}).length > 0
    ? catalog[id]?.colors ?? {}
    : catalogFallbackColors[id.toUpperCase()] ?? catalogFallbackColors[id] ?? {};
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

  // Fallback hero if no per-color shots
  if (colors.length === 0) {
    colors.push({ name: "View colors →" });
  }

  const style: ReadyMadeHatStyle = { id, name, tagline, material, crown, closure, bill, colors, fit, fabricDesc };
  return { ...style, profile, fabric: material, allColors: colors.map(c => c.name) };
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
];

export const READY_MADE_HATS_BY_ID: Record<string, HatMeta> = Object.fromEntries(
  READY_MADE_HATS.map(s => [s.id.toLowerCase(), s])
);
