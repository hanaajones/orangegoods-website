"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { ReadyMadeHatStyle } from "@/components/ShoppableReadyMadeHat";

// ── Filter metadata attached to each style ─────────────────────────────────
export type HatMeta = ReadyMadeHatStyle & {
  profile: "low" | "mid" | "high";
  fabric: string;
  allColors: string[];
  hatType?: string; // e.g. "Dad Hat", "Trucker", "5-Panel", "Bucket"
};

const PROFILE_LABELS = { low: "Low Profile", mid: "Mid Profile", high: "High Profile" };

// Simplified hat type categories
const HAT_TYPES = ["Dad Hat", "5-Panel", "Trucker", "Bucket", "Structured", "Corduroy"];
const FILTER_COLOR_ORDER = [
  "Black",
  "Blue",
  "White",
  "Brown",
  "Green",
  "Tan",
  "Grey",
  "Pink",
  "Stripe",
  "Yellow",
  "Athletic Heather",
  "Camo",
  "Purple",
  "Orange",
  "Red",
  "Cream",
  "Burgundy",
];

const FILTER_COLOR_HEX: Record<string, string> = {
  Black: "#1a1a1a",
  Blue: "#2255bb",
  White: "#ffffff",
  Brown: "#7a5a3a",
  Green: "#4a5a2a",
  Tan: "#c4a276",
  Grey: "#9a9a9a",
  Pink: "#e8a0b4",
  Stripe: "#f5f1e8",
  Yellow: "#f0d870",
  "Athletic Heather": "#b7b5ad",
  Camo: "#6f7651",
  Purple: "#8d75b5",
  Orange: "#e05a1a",
  Red: "#cc2222",
  Cream: "#e8e0d0",
  Burgundy: "#6b1f2a",
};

function getHatType(style: HatMeta): string {
  const name = style.name.toLowerCase();
  const crown = style.crown.toLowerCase();
  if (name.includes("bucket") || name.includes("terry") || name.includes("cord bucket")) return "Bucket";
  if (name.includes("dad")) return "Dad Hat";
  if (name.includes("trucker")) return "Trucker";
  if (name.includes("corduroy") || name.includes("cord")) return "Corduroy";
  if (crown.includes("structured")) return "Structured";
  return "5-Panel";
}

const STYLE_FRONT_PREVIEWS: Record<string, string> = {
  "1110": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1110/WEB_THUMBNAILS/1110_STOCK_CONTRAST_TRUCKER_NAVY_ECRU_THUMB.jpg",
  "1114": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1114/WEB_THUMBNAILS/1114_SURF_CAP_ECRU_THUMB_1B.jpg",
  "1123": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1123/WEB_THUMBNAILS/1123_SURF_ROPE_CAP_ECRU_WHITE_THUMB.jpg",
  "1150": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1150/WEB_THUMBNAILS/1150_CLASS_CAP_EUCALYPTUS_THUMB_1B.jpg",
  "1152": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1152/WEB_THUMBNAILS/1152_CLASS_CORD_CAP_HAZY_PINK_THUMB_1B.jpg",
  "1154": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1154/WEB_THUMBNAILS/1154_CLASS_TWO-TONE_CAP_NATURAL_MIDNIGHT_THUMB.jpg",
  "1156": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1156/WEB_THUMBNAILS/1156_CLASS_CANVAS_CAP_BONE_THUMB.jpg",
  "1157": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1157/WEB_THUMBNAILS/1157_CLASS_CORD_TRUCKER_CAP_BONE_THUMB.jpg",
  "1160": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1160/WEB_THUMBNAILS/1160_FRAME_CAP_BONE_THUMB_1B.jpg",
  "1161": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1161/WEB_THUMBNAILS/1161_FRAME_TRUCKER_CAP_ECRU_THUMB.jpg",
  "1164C": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1164C/WEB_THUMBNAILS/1164C_FRAME_SOFT_CAMO_CAP_TREE_CAMO_THUMB.jpg",
  "1165": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1165/WEB_THUMBNAILS/1165_FRAME_TWO-TONE_CAP_NATURAL_CARDINAL_THUMB.jpg",
  "1117": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1117/WEB_THUMBNAILS/1117_BUCKET_HAT_BUTTER_THUMB_1B.jpg",
  "1175": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1175/WEB_THUMBNAILS/1175_TERRY_BUCKET_HAT_WHITE_THUMB.jpg",
  "1176": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1176/WEB_THUMBNAILS/1176_CORD_BUCKET_HAT_BONE_THUMB.jpg",
};

const STYLE_GROUP_FRONT_PREVIEWS: Record<string, Partial<Record<string, string>>> = {
  "1104": {
    Black: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1104/WEB_THUMBNAILS/1104_FINN_NYLON_CAP_BLACK_THUMB.jpg",
    Cream: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1104/WEB_THUMBNAILS/1104_FINN_NYLON_CAP_ECRU_THUMB.jpg",
    Blue: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1104/WEB_THUMBNAILS/1104_FINN_NYLON_CAP_LAPIS_THUMB.jpg",
    Grey: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1104/WEB_THUMBNAILS/1104_FINN_NYLON_CAP_SMOKE_THUMB.jpg",
    Green: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1104/WEB_THUMBNAILS/1104_FINN_NYLON_CAP_MINT_THUMB.jpg",
  },
  "1110": {
    Blue: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1110/WEB_THUMBNAILS/1110_STOCK_CONTRAST_TRUCKER_NAVY_ECRU_THUMB.jpg",
  },
  "1114": {
    Black: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1114/WEB_THUMBNAILS/1114_SURF_CAP_BLACK_THUMB_1B.jpg",
    Cream: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1114/WEB_THUMBNAILS/1114_SURF_CAP_ECRU_THUMB_1B.jpg",
    Grey: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1114/WEB_THUMBNAILS/1114_SURF_CAP_STORM_THUMB_1B.jpg",
    Blue: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1114/WEB_THUMBNAILS/1114_SURF_CAP_ATLANTIC_THUMB_1B.jpg",
    Green: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1114/WEB_THUMBNAILS/1114_SURF_CAP_KHAKI_THUMB_1B.jpg",
    Brown: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1114/WEB_THUMBNAILS/1114_SURF_CAP_WALNUT_THUMB.jpg",
    Pink: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1114/WEB_THUMBNAILS/1114_SURF_CAP_HAZY_PINK_THUMB_1B.jpg",
    Red: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1114/WEB_THUMBNAILS/1114_SURF_CAP_BURGUNDY_THUMB.jpg",
    Orange: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1114/WEB_THUMBNAILS/1114_SURF_CAP_CLAY_THUMB_1B.jpg",
    Yellow: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1114/WEB_THUMBNAILS/1114_SURF_CAP_BUTTER_THUMB_1B.jpg",
    Purple: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1114/WEB_THUMBNAILS/1114_SURF_CAP_ORCHID_THUMB_1B.jpg",
  },
  "1117": {
    Black: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1117/WEB_THUMBNAILS/1117_BUCKET_HAT_BLACK_THUMB_1B.jpg",
    Cream: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1117/WEB_THUMBNAILS/1117_BUCKET_HAT_ECRU_THUMB_1B.jpg",
    Grey: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1117/WEB_THUMBNAILS/1117_BUCKET_HAT_STORM_THUMB.jpg",
    Blue: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1117/WEB_THUMBNAILS/1117_BUCKET_HAT_NAVY_THUMB_1B.jpg",
    Green: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1117/WEB_THUMBNAILS/1117_BUCKET_HAT_ARMY_THUMB_1B.jpg",
    Brown: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1117/WEB_THUMBNAILS/1117_BUCKET_HAT_WALNUT_THUMB_1B.jpg",
    Pink: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1117/WEB_THUMBNAILS/1117_BUCKET_HAT_HAZY_PINK_THUMB.jpg",
    Yellow: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1117/WEB_THUMBNAILS/1117_BUCKET_HAT_BUTTER_THUMB_1B.jpg",
    Purple: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1117/WEB_THUMBNAILS/1117_BUCKET_HAT_ORCHID_THUMB_1B.jpg",
  },
  "1123": {
    Black: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1123/WEB_THUMBNAILS/1123_SURF_ROPE_CAP_BLACK_WHITE_THUMB.jpg",
    Cream: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1123/WEB_THUMBNAILS/1123_SURF_ROPE_CAP_ECRU_WHITE_THUMB.jpg",
    Blue: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1123/WEB_THUMBNAILS/1123_SURF_ROPE_CAP_NAVY_WHITE_THUMB.jpg",
    Green: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1123/WEB_THUMBNAILS/1123_SURF_ROPE_CAP_ARMY_WHITE_THUMB.jpg",
    Orange: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1123/WEB_THUMBNAILS/1123_SURF_ROPE_CAP_FIRE_WHITE_THUMB.jpg",
  },
  "1150": {
    Green: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1150/WEB_THUMBNAILS/1150_CLASS_CAP_EUCALYPTUS_THUMB_1B.jpg",
  },
  "1152": {
    Pink: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1152/WEB_THUMBNAILS/1152_CLASS_CORD_CAP_HAZY_PINK_THUMB_1B.jpg",
  },
  "1154": {
    Blue: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1154/WEB_THUMBNAILS/1154_CLASS_TWO-TONE_CAP_NATURAL_MIDNIGHT_THUMB.jpg",
  },
  "1161": {
    Cream: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1161/WEB_THUMBNAILS/1161_FRAME_TRUCKER_CAP_ECRU_THUMB.jpg",
  },
  "1164C": {
    Camo: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1164C/WEB_THUMBNAILS/1164C_FRAME_SOFT_CAMO_CAP_TREE_CAMO_THUMB.jpg",
  },
  "1165": {
    Red: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1165/WEB_THUMBNAILS/1165_FRAME_TWO-TONE_CAP_NATURAL_CARDINAL_THUMB.jpg",
  },
  "1130": {
    Black: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1130/WEB_THUMBNAILS/1130_ACCESS_CAP_BLACK_THUMB_1B.jpg",
    Cream: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1130/WEB_THUMBNAILS/1130_ACCESS_CAP_ECRU_THUMB_1B.jpg",
    Grey: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1130/WEB_THUMBNAILS/1130_ACCESS_CAP_COAL_THUMB.jpg",
    Blue: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1130/WEB_THUMBNAILS/1130_ACCESS_CAP_MIDNIGHT_BLUE_THUMB_1B.jpg",
    Green: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1130/WEB_THUMBNAILS/1130_ACCESS_CAP_CYPRESS_THUMB_1B.jpg",
    Brown: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1130/WEB_THUMBNAILS/1130_ACCESS_CAP_WALNUT_THUMB.jpg",
    Pink: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1130/WEB_THUMBNAILS/1130_ACCESS_CAP_HAZY_PINK_THUMB_1B.jpg",
  },
  "1134": {
    Black: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1134/WEB_THUMBNAILS/1134_ACCESS_FADED_CAP_FADED_BLACK_THUMB.jpg",
    Cream: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1134/WEB_THUMBNAILS/1134_ACCESS_FADED_CAP_FADED_BONE_THUMB.jpg",
    Grey: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1134/WEB_THUMBNAILS/1134_ACCESS_FADED_CAP_FADED_GREY_THUMB.jpg",
  },
  "1141": {
    Black: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1141/WEB_THUMBNAILS/1141_ICON_TRUCKER_CAP_BLACK_THUMB_1B.jpg",
    Cream: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1141/WEB_THUMBNAILS/1141_ICON_TRUCKER_CAP_BONE_THUMB_1B.jpg",
    Blue: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1141/WEB_THUMBNAILS/1141_ICON_TRUCKER_CAP_PETROL_BLUE_THUMB_1B.jpg",
    Green: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1141/WEB_THUMBNAILS/1141_ICON_TRUCKER_CAP_ARMY_THUMB_1B.jpg",
  },
  "1153": {
    Black: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1153/WEB_THUMBNAILS/1153_CLASS_FIVE_PANEL_CAP_BLACK_THUMB_1B.jpg",
    Cream: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1153/WEB_THUMBNAILS/1153_CLASS_FIVE_PANEL_CAP_BONE_THUMB_1B.jpg",
    Blue: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1153/WEB_THUMBNAILS/1153_CLASS_FIVE_PANEL_CAP_MIDNIGHT_BLUE_THUMB_1B.jpg",
    Brown: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1153/WEB_THUMBNAILS/1153_CLASS_FIVE_PANEL_CAP_WALNUT_THUMB_1B.jpg",
  },
  "1156": {
    Black: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1156/WEB_THUMBNAILS/1156_CLASS_CANVAS_CAP_BLACK_THUMB.jpg",
    Cream: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1156/WEB_THUMBNAILS/1156_CLASS_CANVAS_CAP_BONE_THUMB.jpg",
    Grey: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1156/WEB_THUMBNAILS/1156_CLASS_CANVAS_CAP_SMOKE_THUMB.jpg",
    Blue: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1156/WEB_THUMBNAILS/1156_CLASS_CANVAS_CAP_MIDNIGHT_BLUE_THUMB.jpg",
    Green: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1156/WEB_THUMBNAILS/1156_CLASS_CANVAS_CAP_CYPRESS_THUMB.jpg",
    Brown: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1156/WEB_THUMBNAILS/1156_CLASS_CANVAS_CAP_WALNUT_THUMB.jpg",
  },
  "1157": {
    Black: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1157/WEB_THUMBNAILS/1157_CLASS_CORD_TRUCKER_CAP_BLACK_THUMB.jpg",
    Cream: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1157/WEB_THUMBNAILS/1157_CLASS_CORD_TRUCKER_CAP_BONE_THUMB.jpg",
    Blue: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1157/WEB_THUMBNAILS/1157_CLASS_CORD_TRUCKER_CAP_MIDNIGHT_BLUE_THUMB.jpg",
  },
  "1160": {
    Black: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1160/WEB_THUMBNAILS/1160_FRAME_CAP_BLACK_THUMB_1B.jpg",
    Cream: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1160/WEB_THUMBNAILS/1160_FRAME_CAP_BONE_THUMB_1B.jpg",
    Grey: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1160/WEB_THUMBNAILS/1160_FRAME_CAP_STORM_THUMB_1B.jpg",
    Blue: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1160/WEB_THUMBNAILS/1160_FRAME_CAP_NAVY_THUMB_1B.jpg",
    Brown: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1160/WEB_THUMBNAILS/1160_FRAME_CAP_WALNUT_THUMB_1B.jpg",
  },
  "1175": {
    Black: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1175/WEB_THUMBNAILS/1175_TERRY_BUCKET_HAT_BLACK_THUMB.jpg",
    White: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1175/WEB_THUMBNAILS/1175_TERRY_BUCKET_HAT_WHITE_THUMB.jpg",
    Blue: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1175/WEB_THUMBNAILS/1175_TERRY_BUCKET_HAT_NAVY_THUMB.jpg",
    Green: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1175/WEB_THUMBNAILS/1175_TERRY_BUCKET_HAT_CYPRESS_THUMB.jpg",
  },
  "1176": {
    Black: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1176/WEB_THUMBNAILS/1176_CORD_BUCKET_HAT_BLACK_THUMB.jpg",
    Cream: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1176/WEB_THUMBNAILS/1176_CORD_BUCKET_HAT_BONE_THUMB.jpg",
    Brown: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1176/WEB_THUMBNAILS/1176_CORD_BUCKET_HAT_WALNUT_THUMB.jpg",
    Pink: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1176/WEB_THUMBNAILS/1176_CORD_BUCKET_HAT_HAZY_PINK_THUMB.jpg",
  },
};

const STYLE_DEFAULT_PREVIEW_GROUPS: Record<string, string> = {
  "1130": "Blue",
  "1134": "Grey",
  "1150": "Green",
  "1152": "Pink",
  "1153": "Blue",
  "1164C": "Camo",
  "1114": "Blue",
  "1123": "Green",
  "1154": "Blue",
  "1156": "Brown",
  "1104": "Blue",
  "1110": "Blue",
  "1141": "Green",
  "1157": "Blue",
  "1160": "Brown",
  "1161": "Cream",
  "1165": "Red",
  "1117": "Yellow",
  "1175": "Blue",
  "1176": "Pink",
};

function filterColorGroup(name: string): string {
  const normalized = name.toLowerCase().replace(/[^a-z]+/g, " ");

  if (normalized.includes("camo")) return "Camo";
  if (/\b(stripe|striped)\b/.test(normalized)) return "Stripe";
  if (normalized.includes("black")) return "Black";
  if (/\b(athletic heather|heather|ash)\b/.test(normalized)) return "Athletic Heather";
  if (/\b(blue|navy|atlantic|royal|cobalt|powder|hydro|topaz|lapis|charlotte|mineral|petrol|slate)\b/.test(normalized)) return "Blue";
  if (/\b(green|army|khaki|forest|cypress|sage|mint|eucalyptus|pistachio|pine|lime|seafoam)\b/.test(normalized)) return "Green";
  if (/\b(grey|gray|coal|asphalt|silver|storm|smoke)\b/.test(normalized)) return "Grey";
  if (/\b(brown|walnut|chestnut)\b/.test(normalized)) return "Brown";
  if (/\b(tan|natural|camel|mushroom|taupe)\b/.test(normalized)) return "Tan";
  if (/\b(pink|rose|hazy|bubblegum|charity)\b/.test(normalized)) return "Pink";
  if (/\b(burgundy)\b/.test(normalized)) return "Burgundy";
  if (/\b(red|cardinal)\b/.test(normalized)) return "Red";
  if (/\b(orange|fire|sunset|autumn|clay)\b/.test(normalized)) return "Orange";
  if (/\b(yellow|butter|mustard|lemonade|citrus)\b/.test(normalized)) return "Yellow";
  if (/\b(purple|orchid|grape|violet|liberty)\b/.test(normalized)) return "Purple";
  if (/\b(white)\b/.test(normalized)) return "White";
  if (/\b(ecru|bone|cream)\b/.test(normalized)) return "Cream";
  return "Cream";
}

function filterSwatchBg(name: string): React.CSSProperties {
  if (name === "Stripe") {
    return {
      background: "repeating-linear-gradient(90deg, #ffffff 0 5px, #d8d2c7 5px 10px)",
    };
  }

  return { background: FILTER_COLOR_HEX[name] ?? "#d0ccc0" };
}

function isBlackColor(name: string): boolean {
  return name.toLowerCase().includes("black");
}

function cardHeroImage(style: HatMeta, selectedColor: string): string {
  const styleId = style.id.toUpperCase();

  if (selectedColor !== "all") {
    const selectedFront = style.colors.find(color =>
      filterColorGroup(color.name) === selectedColor && color.front
    );

    return selectedFront?.front ??
      STYLE_GROUP_FRONT_PREVIEWS[styleId]?.[selectedColor] ??
      "";
  }

  const preferredGroup = STYLE_DEFAULT_PREVIEW_GROUPS[styleId];
  const preferredPreview = preferredGroup
    ? STYLE_GROUP_FRONT_PREVIEWS[styleId]?.[preferredGroup]
    : undefined;

  if (preferredPreview) return preferredPreview;

  const displayColor = style.colors.find(color =>
    !isBlackColor(color.name) && color.front && filterColorGroup(color.name) !== "Cream"
  ) ?? style.colors.find(color =>
    !isBlackColor(color.name) && color.front
  );

  return displayColor?.front ?? STYLE_FRONT_PREVIEWS[styleId] ?? "";
}

export function ReadyMadeHatGrid({ styles }: { styles: HatMeta[] }) {
  const [profile, setProfile] = useState<"all" | "low" | "mid" | "high">("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedColor, setSelectedColor] = useState<string>("all");

  // Unique filter color families with dedup
  const allColorNames = useMemo(() => {
    const set = new Set<string>();
    styles.forEach(s =>
      s.allColors
        .filter(c => c !== "Default" && !c.includes("→"))
        .forEach(c => set.add(filterColorGroup(c)))
    );
    return FILTER_COLOR_ORDER.filter(color => set.has(color));
  }, [styles]);

  const filtered = useMemo(() => styles.filter(s => {
    if (profile !== "all" && s.profile !== profile) return false;
    if (selectedType !== "all" && getHatType(s) !== selectedType) return false;
    if (selectedColor !== "all" && !s.allColors.some(color => filterColorGroup(color) === selectedColor)) return false;
    return true;
  }), [styles, profile, selectedType, selectedColor]);

  const hasFilters = profile !== "all" || selectedType !== "all" || selectedColor !== "all";

  return (
    <div className="mx-auto max-w-6xl px-6 pb-10 md:px-12">
      {/* ── Profile filter bar (top) ── */}
      <div className="mb-6 flex flex-wrap items-center gap-2 border-b border-[#0B32A0]/10 pb-4">
        {(["all", "low", "mid", "high"] as const).map(p => (
          <button key={p} type="button" onClick={() => setProfile(p)}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] transition ${
              profile === p
                ? "border-[var(--og-orange)] bg-[var(--og-orange)] text-white"
                : "border-[#0B32A0]/20 text-[var(--og-blue)] hover:border-[var(--og-orange)]"
            }`}>
            {p === "all" ? "All" : PROFILE_LABELS[p]}
          </button>
        ))}
        {hasFilters && (
          <button type="button" onClick={() => { setProfile("all"); setSelectedType("all"); setSelectedColor("all"); }}
            className="ml-auto text-xs font-semibold text-[var(--og-muted)] hover:text-[var(--og-orange)]">
            Clear ✕
          </button>
        )}
      </div>

      <div className="flex gap-8">
        {/* ── Left sidebar ── */}
        <aside className="hidden w-40 shrink-0 space-y-6 lg:block">
          {/* Hat type */}
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--og-blue)]">Style</p>
            <ul className="space-y-0.5">
              {["all", ...HAT_TYPES].map(t => (
                <li key={t}>
                  <button type="button" onClick={() => setSelectedType(t)}
                    className={`w-full rounded-lg px-3 py-1.5 text-left text-xs transition ${
                      selectedType === t
                        ? "bg-[var(--og-orange)] font-semibold text-white"
                        : "text-[var(--og-muted)] hover:text-[var(--og-orange)]"
                    }`}>
                    {t === "all" ? "All Styles" : t}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Color swatches */}
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--og-blue)]">Color</p>
            <div className="flex max-h-56 flex-wrap gap-2 overflow-y-auto p-1">
              {/* All colors reset swatch */}
              <button type="button" title="All colors" onClick={() => setSelectedColor("all")}
                className={`h-7 w-7 shrink-0 rounded-full border-2 bg-white text-[9px] font-bold text-[var(--og-blue)] transition ${
                  selectedColor === "all" ? "border-[var(--og-blue)] ring-2 ring-[var(--og-blue)]/20 ring-offset-1" : "border-[#0B32A0]/20 hover:border-[var(--og-blue)]"
                }`}>
                ✓
              </button>
              {allColorNames.map(c => (
                <button key={c} type="button" title={c} onClick={() => setSelectedColor(c)}
                  className={`h-7 w-7 shrink-0 rounded-full border-2 transition ${
                    selectedColor === c ? "border-[var(--og-orange)] ring-2 ring-[var(--og-orange)]/25 ring-offset-1" : "border-white hover:border-[var(--og-orange)]"
                  } shadow-sm`}
                  style={filterSwatchBg(c)}
                />
              ))}
            </div>
            {selectedColor !== "all" && (
              <p className="mt-1 text-[11px] text-[var(--og-muted)]">{selectedColor}</p>
            )}
          </div>
        </aside>

        {/* ── Grid ── */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="py-20 text-center text-sm text-[var(--og-muted)]">
              No styles match those filters.{" "}
              <button type="button" onClick={() => { setProfile("all"); setSelectedType("all"); setSelectedColor("all"); }} className="font-semibold text-[var(--og-orange)]">Clear</button>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map(style => {
                const heroImg = cardHeroImage(style, selectedColor);
                return (
                  <Link
                    key={style.id}
                    href={`/goods/hats/ready-made/${style.id.toLowerCase()}`}
                    className="group overflow-hidden rounded-[1.75rem] border border-[#0B32A0]/15 bg-[rgba(255,248,241,0.88)] transition hover:border-[var(--og-orange)] hover:shadow-lg"
                  >
                    <div className="relative aspect-square bg-white">
                      {heroImg && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={heroImg}
                          alt={style.name}
                          className="h-full w-full object-contain p-6 transition duration-300 group-hover:scale-[1.04]"
                        />
                      )}
                      <span className="absolute right-3 top-3 rounded-full bg-[#0B32A0]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--og-blue)]">
                        {PROFILE_LABELS[style.profile]}
                      </span>
                    </div>
                    <div className="p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--og-orange)]">#{style.id}</p>
                      <h3 className="mt-1 text-xl font-semibold text-[var(--og-blue)]">{style.name}</h3>
                      <p className="mt-1 text-sm text-[var(--og-muted)]">{style.tagline}</p>
                      <p className="mt-2 text-xs text-[var(--og-muted)]">{style.colors.length} color{style.colors.length !== 1 ? "s" : ""}</p>
                      <p className="mt-3 text-sm font-semibold text-[var(--og-orange)]">From $16.50 / hat →</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
