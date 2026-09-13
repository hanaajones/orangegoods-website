"use client";

import { useState, useMemo, type CSSProperties } from "react";
import Link from "next/link";
import { addQuickTurnReadyMadeHatShippingIncludedPrice } from "@/lib/quick-turn-shipping";
import type { ReadyMadeHatStyle } from "@/components/ShoppableReadyMadeHat";

// ── Filter metadata attached to each style ─────────────────────────────────
export type HatMeta = ReadyMadeHatStyle & {
  profile: "low" | "mid" | "high";
  fabric: string;
  allColors: string[];
  hatType?: string; // e.g. "Dad Hat", "Trucker", "5-Panel", "Bucket"
};

const PROFILE_LABELS = { low: "Low Profile", mid: "Mid Profile", high: "High Profile" };
const PROFILE_OPTIONS = ["all", "low", "mid", "high"] as const;
const STARTING_PRICE = `$${addQuickTurnReadyMadeHatShippingIncludedPrice(16.5).toFixed(2)}`;
const COLOR_OPTIONS = [
  "Black",
  "Cream",
  "Grey",
  "Blue",
  "Green",
  "Brown",
  "Tan",
  "Pink",
  "Burgundy",
  "Red",
  "Orange",
  "Yellow",
  "Purple",
  "White",
  "Camo",
  "Stripe",
  "Athletic Heather",
] as const;

// Simplified hat type categories
const HAT_TYPES = ["Dad Hat", "5-Panel", "Trucker", "Bucket", "Structured", "Corduroy"];

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
  "1154": {
    Blue: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1154/WEB_THUMBNAILS/1154_CLASS_TWO-TONE_CAP_NATURAL_MIDNIGHT_THUMB.jpg",
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
  "1161": {
    Cream: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1161/WEB_THUMBNAILS/1161_FRAME_TRUCKER_CAP_ECRU_THUMB.jpg",
  },
  "1164C": {
    Camo: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1164C/WEB_THUMBNAILS/1164C_FRAME_SOFT_CAMO_CAP_TREE_CAMO_THUMB.jpg",
  },
  "1165": {
    Red: "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/640w/uploaded_images/1165/WEB_THUMBNAILS/1165_FRAME_TWO-TONE_CAP_NATURAL_CARDINAL_THUMB.jpg",
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

const COLOR_SWATCH_BACKGROUNDS: Record<string, string> = {
  Black: "#1a1a1a",
  Cream: "#f0ead8",
  Grey: "#80858d",
  Blue: "#234a93",
  Green: "#647a4e",
  Brown: "#7a5a3a",
  Tan: "#c9b390",
  Pink: "#dfa7b4",
  Burgundy: "#6a1a2a",
  Red: "#c63a2a",
  Orange: "#d9793e",
  Yellow: "#e7c85f",
  Purple: "#7b61a9",
  White: "#ffffff",
  Camo: "linear-gradient(135deg, #40543a 0%, #6c7851 50%, #8a8060 100%)",
  Stripe: "linear-gradient(135deg, #1e3a5f 0%, #1e3a5f 34%, #f3efe6 34%, #f3efe6 66%, #b87060 66%, #b87060 100%)",
  "Athletic Heather": "linear-gradient(135deg, #d8d8d8 0%, #bebebe 100%)",
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

function isBlackColor(name: string): boolean {
  return name.toLowerCase().includes("black");
}

function styleColorGroups(style: HatMeta) {
  return Array.from(new Set(style.allColors.map(filterColorGroup)));
}

function colorFilterSwatchStyle(group: string): CSSProperties {
  return {
    background: COLOR_SWATCH_BACKGROUNDS[group] ?? "#d0ccc0",
  };
}

function cardHeroImage(style: HatMeta, preferredGroup?: string): string {
  const styleId = style.id.toUpperCase();
  const requestedPreview = preferredGroup
    ? STYLE_GROUP_FRONT_PREVIEWS[styleId]?.[preferredGroup]
      ?? style.colors.find((color) => filterColorGroup(color.name) === preferredGroup && color.front)?.front
    : undefined;

  if (requestedPreview) return requestedPreview;

  const defaultPreviewGroup = STYLE_DEFAULT_PREVIEW_GROUPS[styleId];
  const preferredPreview = defaultPreviewGroup
    ? STYLE_GROUP_FRONT_PREVIEWS[styleId]?.[defaultPreviewGroup]
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
  const [profile, setProfile] = useState<(typeof PROFILE_OPTIONS)[number]>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedColor, setSelectedColor] = useState<string>("all");

  const availableColors = useMemo(() => (
    COLOR_OPTIONS.filter((group) => styles.some((style) => styleColorGroups(style).includes(group)))
  ), [styles]);

  const filtered = useMemo(() => styles.filter(s => {
    if (profile !== "all" && s.profile !== profile) return false;
    if (selectedType !== "all" && getHatType(s) !== selectedType) return false;
    if (selectedColor !== "all" && !styleColorGroups(s).includes(selectedColor)) return false;
    return true;
  }), [styles, profile, selectedType, selectedColor]);

  const hasFilters = profile !== "all" || selectedType !== "all" || selectedColor !== "all";

  return (
    <div className="mx-auto max-w-6xl px-6 pb-10 md:px-12">
      <div className="mb-8 overflow-hidden rounded-[1.6rem] border border-[#0B32A0]/10 bg-[rgba(255,255,255,0.72)] shadow-[0_14px_36px_rgba(8,30,111,0.05)] backdrop-blur-sm">
        <div className="flex flex-col gap-3 px-4 py-4 md:flex-row md:items-start md:px-5">
          <p className="pt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--og-blue)]/72 md:w-[4.75rem] md:shrink-0">
            Profile
          </p>
          <div className="flex flex-1 flex-wrap gap-2.5">
            {PROFILE_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setProfile(option)}
                className={`rounded-full border px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] transition ${
                  profile === option
                    ? "border-[var(--og-orange)]/35 bg-[var(--og-orange)]/10 text-[var(--og-orange)]"
                    : "border-[#0B32A0]/12 bg-white/45 text-[var(--og-blue)]/72 hover:border-[var(--og-orange)]/28 hover:text-[var(--og-blue)]"
                }`}
              >
                <span className="relative top-px inline-block">
                  {option === "all" ? "All" : PROFILE_LABELS[option]}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-[#0B32A0]/8 px-4 py-4 md:px-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-start">
            <p className="pt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--og-blue)]/72 md:w-[4.75rem] md:shrink-0">
              Style
            </p>
            <div className="flex flex-1 flex-wrap items-start gap-2.5">
              {["all", ...HAT_TYPES].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSelectedType(option)}
                  className={`rounded-full border px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] transition ${
                    selectedType === option
                      ? "border-[var(--og-orange)]/35 bg-[var(--og-orange)]/10 text-[var(--og-orange)]"
                      : "border-[#0B32A0]/12 bg-white/45 text-[var(--og-blue)]/72 hover:border-[var(--og-orange)]/28 hover:text-[var(--og-blue)]"
                  }`}
                >
                  <span className="relative top-px inline-block">
                    {option === "all" ? "All Styles" : option}
                  </span>
                </button>
              ))}
              {hasFilters ? (
                <button
                  type="button"
                  onClick={() => {
                    setProfile("all");
                    setSelectedType("all");
                    setSelectedColor("all");
                  }}
                  className="text-[11px] font-semibold text-[var(--og-muted)]/80 transition hover:text-[var(--og-orange)] md:ml-auto md:-translate-x-[5px] md:self-center"
                >
                  Clear ✕
                </button>
              ) : null}
            </div>
          </div>
        </div>

        <div className="border-t border-[#0B32A0]/8 px-4 py-4 md:px-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-start">
            <p className="pt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--og-blue)]/72 md:w-[4.75rem] md:shrink-0">
              Color{selectedColor !== "all" ? ` · ${selectedColor}` : ""}
            </p>
            <div className="flex flex-1 flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setSelectedColor("all")}
                className={`rounded-full border px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] transition ${
                  selectedColor === "all"
                    ? "border-[var(--og-orange)]/35 bg-[var(--og-orange)]/10 text-[var(--og-orange)]"
                    : "border-[#0B32A0]/12 bg-white/45 text-[var(--og-blue)]/72 hover:border-[var(--og-orange)]/28 hover:text-[var(--og-blue)]"
                }`}
              >
                <span className="relative top-px inline-block">All Colors</span>
              </button>
              <div className="flex flex-wrap items-center gap-2.5 py-0.5">
                {availableColors.map((option) => (
                  <button
                    key={option}
                    type="button"
                    title={option}
                    aria-label={`Filter by ${option}`}
                    onClick={() => setSelectedColor(option)}
                    style={colorFilterSwatchStyle(option)}
                    className={`h-7 w-7 shrink-0 rounded-full border border-[#1C1C1C]/12 shadow-sm transition ${
                      selectedColor === option
                        ? "ring-2 ring-[var(--og-orange)] ring-offset-2"
                        : "hover:ring-2 hover:ring-[var(--og-orange)] hover:ring-offset-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="py-20 text-center text-sm text-[var(--og-muted)]">
          No styles match those filters.{" "}
          <button
            type="button"
            onClick={() => {
              setProfile("all");
              setSelectedType("all");
              setSelectedColor("all");
            }}
            className="font-semibold text-[var(--og-orange)]"
          >
            Clear
          </button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
          {filtered.map((style) => {
            const heroImg = cardHeroImage(style, selectedColor !== "all" ? selectedColor : undefined);
            const styleHref = `/goods/hats/quick-turn/${style.id.toLowerCase()}`;

            return (
              <article
                key={style.id}
                className="group relative overflow-hidden rounded-[1.9rem] border-[3px] border-transparent bg-[rgba(255,248,241,0.88)] transition hover:border-[#0B32A0] hover:shadow-lg"
              >
                <Link
                  href={styleHref}
                  aria-label={`Open ${style.name}`}
                  className="absolute inset-0 z-10 rounded-[1.9rem]"
                />
                <div className="pointer-events-none">
                  <div className="relative aspect-[4/3] bg-white">
                    {heroImg ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={heroImg}
                        alt={style.name}
                        className="h-full w-full scale-[1.1] object-cover object-bottom transition duration-300 group-hover:scale-[1.13]"
                      />
                    ) : null}
                    <span className="absolute right-3 top-3 rounded-full bg-[#0B32A0]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--og-blue)]">
                      {PROFILE_LABELS[style.profile]}
                    </span>
                  </div>
                </div>
                <div className="pointer-events-none p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--og-orange)]">
                    {style.id}
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold leading-none text-[var(--og-blue)]">
                    {style.name}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--og-muted)]">
                    {style.tagline}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[var(--og-orange)]">
                    From {STARTING_PRICE} / hat
                  </p>
                  <Link
                    href={styleHref}
                    className="pointer-events-auto relative z-20 mt-5 inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-[#0B32A0] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#0B32A0] transition hover:-translate-y-[2px] hover:border-[var(--og-orange)] hover:bg-[var(--og-orange)] hover:text-white"
                  >
                    Customize
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
