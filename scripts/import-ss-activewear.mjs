import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const OUTPUT_DIR = path.join(ROOT, "data", "ss-activewear");
const AS_COLOUR_SOURCE_DIR = path.join(ROOT, "data", "as-colour-source", "US");
const AS_COLOUR_PRICE_LIST_PATH = path.join(ROOT, "data", "as-colour-source", "reference", "gold_9286.csv");
const DEFAULT_BASE_URL = process.env.SS_ACTIVEWEAR_BASE_URL || "https://api.ssactivewear.com/v2";
const SS_IMAGE_BASE_URL = "https://cdn.ssactivewear.com";
const STYLE_ID_BATCH_SIZE = 8;
const STYLE_TARGETS = [
  {
    query: "Bella+Canvas 3001",
    slug: "bella-canvas-3001",
    family: "Tees",
    brandAliases: ["BELLA + CANVAS", "Bella+Canvas", "Bella + Canvas"],
    styleAliases: ["3001"],
  },
  {
    query: "Gildan 8000",
    slug: "gildan-8000",
    family: "Tees",
    brandAliases: ["Gildan"],
    styleAliases: ["8000"],
  },
  {
    query: "AS Colour 5026",
    slug: "as-colour-5026",
    family: "Tees",
    brandAliases: ["AS Colour", "ASCOLOUR", "AS Colour Apparel"],
    styleAliases: ["5026"],
  },
  {
    query: "Comfort Colors 1717",
    slug: "comfort-colors-1717",
    family: "Tees",
    brandAliases: ["Comfort Colors"],
    styleAliases: ["1717"],
  },
  {
    query: "LA Apparel 1801",
    slug: "la-apparel-1801",
    family: "Tees",
    brandAliases: ["LA Apparel", "Los Angeles Apparel"],
    styleAliases: ["1801"],
  },
  {
    query: "Lane Seven LS16005GD",
    slug: "lane-seven-ls16005gd",
    family: "Tees",
    brandAliases: ["Lane Seven"],
    styleAliases: ["LS16005GD", "LS16005"],
  },
  {
    query: "AS Colour 5083",
    slug: "as-colour-5083",
    family: "Long Sleeves",
    brandAliases: ["AS Colour", "ASCOLOUR", "AS Colour Apparel"],
    styleAliases: ["5083"],
  },
  {
    query: "AS Colour 5101",
    slug: "as-colour-5101",
    family: "Hoodies + Fleece",
    brandAliases: ["AS Colour", "ASCOLOUR", "AS Colour Apparel"],
    styleAliases: ["5101"],
  },
  {
    query: "AS Colour 5100",
    slug: "as-colour-5100",
    family: "Hoodies + Fleece",
    brandAliases: ["AS Colour", "ASCOLOUR", "AS Colour Apparel"],
    styleAliases: ["5100"],
  },
  {
    query: "Bella+Canvas 3719",
    slug: "bella-canvas-3719",
    family: "Hoodies + Fleece",
    brandAliases: ["BELLA + CANVAS", "Bella+Canvas", "Bella + Canvas"],
    styleAliases: ["3719"],
  },
  {
    query: "Comfort Colors 1566",
    slug: "comfort-colors-1566",
    family: "Hoodies + Fleece",
    brandAliases: ["Comfort Colors"],
    styleAliases: ["1566"],
  },
  {
    query: "AS Colour 5120",
    slug: "as-colour-5120",
    family: "Hoodies + Fleece",
    brandAliases: ["AS Colour", "ASCOLOUR", "AS Colour Apparel"],
    styleAliases: ["5120"],
  },
  {
    query: "AS Colour 5120 Crew",
    slug: "as-colour-5120-crew",
    family: "Hoodies + Fleece",
    brandAliases: ["AS Colour", "ASCOLOUR", "AS Colour Apparel"],
    styleAliases: ["5120 Crew", "5120"],
  },
  {
    query: "AS Colour 5921",
    slug: "as-colour-5921",
    family: "Bottoms",
    brandAliases: ["AS Colour", "ASCOLOUR", "AS Colour Apparel"],
    styleAliases: ["5921"],
  },
  {
    query: "AS Colour 5942",
    slug: "as-colour-5942",
    family: "Bottoms",
    brandAliases: ["AS Colour", "ASCOLOUR", "AS Colour Apparel"],
    styleAliases: ["5942"],
  },
  {
    query: "AS Colour 5933",
    slug: "as-colour-5933",
    family: "Bottoms",
    brandAliases: ["AS Colour", "ASCOLOUR", "AS Colour Apparel"],
    styleAliases: ["5933"],
  },
  {
    query: "AS Colour 5903",
    slug: "as-colour-5903",
    family: "Bottoms",
    brandAliases: ["AS Colour", "ASCOLOUR", "AS Colour Apparel"],
    styleAliases: ["5903"],
  },
  {
    query: "AS Colour 4001",
    slug: "as-colour-4001",
    family: "Women's",
    brandAliases: ["AS Colour", "ASCOLOUR", "AS Colour Apparel"],
    styleAliases: ["4001"],
  },
  {
    query: "AS Colour 4030",
    slug: "as-colour-4030",
    family: "Women's",
    brandAliases: ["AS Colour", "ASCOLOUR", "AS Colour Apparel"],
    styleAliases: ["4030"],
  },
  {
    query: "AS Colour 4072",
    slug: "as-colour-4072",
    family: "Women's",
    brandAliases: ["AS Colour", "ASCOLOUR", "AS Colour Apparel"],
    styleAliases: ["4072"],
  },
  {
    query: "AS Colour 4007",
    slug: "as-colour-4007",
    family: "Women's",
    brandAliases: ["AS Colour", "ASCOLOUR", "AS Colour Apparel"],
    styleAliases: ["4007"],
  },
  {
    query: "AS Colour 5520",
    slug: "as-colour-5520",
    family: "Outerwear",
    brandAliases: ["AS Colour", "ASCOLOUR", "AS Colour Apparel"],
    styleAliases: ["5520"],
  },
  {
    query: "Independent Trading Co. EXP54LWP",
    slug: "exp54lwp",
    family: "Outerwear",
    brandAliases: ["Independent Trading Co.", "Independent Trading Co"],
    styleAliases: ["EXP54LWP"],
  },
  {
    query: "AS Colour 5522",
    slug: "as-colour-5522",
    family: "Outerwear",
    brandAliases: ["AS Colour", "ASCOLOUR", "AS Colour Apparel"],
    styleAliases: ["5522"],
  },
];

function loadLocalEnvFile() {
  const envPath = path.join(ROOT, ".env.local");
  if (!existsSync(envPath)) return;

  const source = readFileSync(envPath, "utf8");
  for (const line of source.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separator = trimmed.indexOf("=");
    if (separator === -1) continue;

    const key = trimmed.slice(0, separator).trim();
    const rawValue = trimmed.slice(separator + 1).trim();
    const unwrapped = rawValue.replace(/^['"]|['"]$/g, "");

    if (!(key in process.env)) {
      process.env[key] = unwrapped;
    }
  }
}

function printUsage() {
  console.log(`Usage:
  npm run catalog:ss-sync

Required environment:
  SS_ACTIVEWEAR_ACCOUNT_NUMBER
  SS_ACTIVEWEAR_API_KEY

Optional environment:
  SS_ACTIVEWEAR_BASE_URL (defaults to ${DEFAULT_BASE_URL})`);
}

function parseArgs(argv) {
  const args = new Set(argv.slice(2));
  return {
    help: args.has("--help") || args.has("-h"),
  };
}

function requireEnv(name) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function pickFirst(record, keys) {
  for (const key of keys) {
    const value = record?.[key];
    if (value !== undefined && value !== null && value !== "") {
      return value;
    }
  }
  return undefined;
}

function asArray(payload) {
  if (Array.isArray(payload)) return payload;
  if (!payload || typeof payload !== "object") return [];

  for (const value of Object.values(payload)) {
    if (Array.isArray(value)) return value;
  }

  return [];
}

function toNumber(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value !== "string") return undefined;

  const numeric = Number.parseFloat(value.replace(/[^0-9.-]/g, ""));
  return Number.isFinite(numeric) ? numeric : undefined;
}

function toSlug(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function splitIntoChunks(items, size) {
  const chunks = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

function normalizeLoose(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function normalizeCompact(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

function stripHtml(value) {
  return String(value || "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/li>/gi, "; ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&#39;/gi, "'")
    .replace(/&amp;/gi, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function categoryMatchesFamily(baseCategory, family) {
  const normalizedCategory = normalizeLoose(baseCategory);

  switch (family) {
    case "Tees":
      return normalizedCategory.includes("t shirts") || normalizedCategory.includes("tanks");
    case "Long Sleeves":
      return normalizedCategory.includes("long sleeve");
    case "Hoodies + Fleece":
      return normalizedCategory.includes("fleece");
    case "Bottoms":
      return normalizedCategory.includes("pants") || normalizedCategory.includes("shorts");
    case "Women's":
      return normalizedCategory.includes("womens") || normalizedCategory.includes("ladies");
    case "Outerwear":
      return normalizedCategory.includes("outerwear");
    default:
      return false;
  }
}

function resolveImageUrl(value) {
  if (!value) return null;
  if (String(value).startsWith("http")) return String(value);
  return `${SS_IMAGE_BASE_URL}/${String(value).replace(/^\/+/, "")}`;
}

function uniqueGalleryImages(entries) {
  const seen = new Set();
  const images = [];

  for (const entry of entries) {
    const url = resolveImageUrl(entry?.url);
    if (!url || seen.has(url)) continue;
    seen.add(url);
    images.push({
      label: entry?.label || "View",
      url,
    });
  }

  return images;
}

function parseCsv(text) {
  const source = String(text || "").replace(/^\uFEFF/, "");
  const rows = [];
  let currentRow = [];
  let currentField = "";
  let inQuotes = false;

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    const next = source[index + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        currentField += '"';
        index += 1;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        currentField += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
      continue;
    }

    if (char === ",") {
      currentRow.push(currentField);
      currentField = "";
      continue;
    }

    if (char === "\n") {
      currentRow.push(currentField);
      rows.push(currentRow);
      currentRow = [];
      currentField = "";
      continue;
    }

    if (char !== "\r") {
      currentField += char;
    }
  }

  if (currentField !== "" || currentRow.length > 0) {
    currentRow.push(currentField);
    rows.push(currentRow);
  }

  const [header = [], ...records] = rows;
  return records
    .filter((record) => record.some((value) => value !== ""))
    .map((record) =>
      Object.fromEntries(
        header.map((key, index) => [key, record[index] ?? ""])
      )
    );
}

function readCsvFile(filePath) {
  if (!existsSync(filePath)) {
    return [];
  }

  return parseCsv(readFileSync(filePath, "utf8"));
}

function readLooseCsvFile(filePath) {
  if (!existsSync(filePath)) {
    return [];
  }

  const lines = readFileSync(filePath, "utf8")
    .replace(/^\uFEFF/, "")
    .split(/\r?\n/)
    .filter(Boolean);

  const [headerLine = "", ...rowLines] = lines;
  const header = headerLine.split(",");

  return rowLines
    .map((line) => line.split(","))
    .filter((columns) => columns.length >= header.length)
    .map((columns) =>
      Object.fromEntries(header.map((key, index) => [key, columns[index] ?? ""]))
    );
}

function cleanDelimitedLabel(value) {
  return String(value || "")
    .split("|")[0]
    .replace(/\s+/g, " ")
    .trim();
}

function targetUsesAsColourFallback(target) {
  return target.brandAliases.some((alias) => normalizeCompact(alias) === "ascolour");
}

function mapAsColourColorFamily(color) {
  const value = normalizeLoose(color);
  if (!value) return null;
  if (/(black|coal|asphalt)/.test(value)) return "Black";
  if (/(white|natural|bone|cream)/.test(value)) return "White";
  if (/(grey|gray|marle|heather|charcoal|silver)/.test(value)) return "Grey";
  if (/(blue|navy|atlantic|cobalt|royal)/.test(value)) return "Blue";
  if (/(green|forest|sage|olive|army)/.test(value)) return "Green";
  if (/(pink|rose)/.test(value)) return "Pink";
  if (/(red|burgundy|maroon)/.test(value)) return "Red";
  if (/(orange|rust|apricot)/.test(value)) return "Orange";
  if (/(yellow|gold|mustard)/.test(value)) return "Yellow";
  if (/(brown|chocolate|walnut)/.test(value)) return "Brown";
  if (/(tan|khaki|sand|beige)/.test(value)) return "Tan";
  return null;
}

function buildAsColourStyleFromRows(target, rows, productRow, categoryRow, priceRow) {
  const sortedRows = [...rows].sort((left, right) => {
    return `${left.colour} ${left.sizeCode}`.localeCompare(`${right.colour} ${right.sizeCode}`);
  });
  const representativeRow =
    sortedRows.find((row) => row.imageFrontURL || row.imageURL_zoom || row.imageURL_standard) || sortedRows[0];
  const styleCode = representativeRow?.styleCode || target.styleAliases[0] || null;
  const styleName = styleCode ? String(styleCode) : null;
  const title = cleanDelimitedLabel(productRow?.styleName || representativeRow?.styleName || target.query);
  const description = stripHtml(productRow?.description || representativeRow?.description || productRow?.short_description || representativeRow?.shortDescription || "");
  const wholesalePrice = toNumber(priceRow?.PRICE) ?? toNumber(representativeRow?.priceExTax) ?? null;
  const baseCategory = priceRow?.CATEGORY || categoryRow?.description || representativeRow?.productType || target.family;
  const variants = sortedRows.map((row) => ({
    productId: row.stockCode || null,
    colorName: cleanDelimitedLabel(row.colour) || "Unknown",
    sizeName: cleanDelimitedLabel(row.sizeCode) || null,
    piecePrice: wholesalePrice,
    inventory: null,
    imageUrl: row.imageFrontURL || row.imageURL_zoom || row.imageURL_standard || null,
    galleryImages: uniqueGalleryImages([
      { label: "Front", url: row.imageFrontURL || row.imageURL_zoom || row.imageURL_standard },
      { label: "Back", url: row.imageBackURL },
      { label: "Side", url: row.imageSideURL },
    ]),
    colorFamily: mapAsColourColorFamily(row.colour),
    colorHexPrimary: row.HexCode1 || null,
    colorHexSecondary: row.HexCode2 || null,
    baseCategory,
    colorSwatchImageUrl: null,
    warehouses: [],
  }));
  const piecePrices = variants
    .map((variant) => variant.piecePrice)
    .filter((price) => typeof price === "number");

  return {
    source: "as-colour-csv",
    styleId: styleCode ? String(styleCode) : null,
    styleSlug: target.slug || (styleCode ? toSlug(`as-colour-${styleCode}`) : toSlug(target.query)),
    brandName: "AS Colour",
    styleName,
    title,
    categoryName: target.family,
    baseCategory,
    description,
    colors: [...new Set(variants.map((variant) => variant.colorName))],
    sizes: [...new Set(variants.map((variant) => variant.sizeName).filter(Boolean))],
    imageUrl:
      representativeRow?.imageFrontURL ||
      representativeRow?.imageURL_zoom ||
      representativeRow?.imageURL_standard ||
      null,
    styleImageUrl:
      representativeRow?.imageFrontURL ||
      representativeRow?.imageURL_zoom ||
      representativeRow?.imageURL_standard ||
      null,
    colorSwatchImageUrl: null,
    minPiecePrice: piecePrices.length > 0 ? Math.min(...piecePrices) : null,
    maxPiecePrice: piecePrices.length > 0 ? Math.max(...piecePrices) : null,
    totalInventory: null,
    variants,
  };
}

function loadAsColourFallbackCatalog() {
  if (!existsSync(AS_COLOUR_SOURCE_DIR)) {
    return {
      source: "as-colour-csv",
      resolvedTargets: [],
      counts: { styles: 0, products: 0 },
      styles: [],
    };
  }

  const products = readCsvFile(path.join(AS_COLOUR_SOURCE_DIR, "Products-V1.csv"));
  const stockItems = readCsvFile(path.join(AS_COLOUR_SOURCE_DIR, "StockItems-V1.csv"));
  const productCategories = readCsvFile(path.join(AS_COLOUR_SOURCE_DIR, "ProductCategory-V1.csv"));
  const priceRows = readLooseCsvFile(AS_COLOUR_PRICE_LIST_PATH);
  const productsByStyleCode = new Map(products.map((row) => [String(row.styleCode || "").trim(), row]));
  const categoriesByStyleCode = new Map(productCategories.map((row) => [String(row.styleCode || "").trim(), row]));
  const pricesByStyleCode = new Map(priceRows.map((row) => [String(row.STYLECODE || "").trim(), row]));
  const asColourTargets = STYLE_TARGETS.filter(targetUsesAsColourFallback);
  const resolvedTargets = [];
  const styles = [];

  for (const target of asColourTargets) {
    const styleAliasSet = new Set(target.styleAliases.map((alias) => normalizeCompact(alias)));
    const matchingRows = stockItems.filter((row) => styleAliasSet.has(normalizeCompact(row.styleCode)));

    if (matchingRows.length === 0) {
      resolvedTargets.push({
        ...target,
        found: false,
        styleId: null,
        styleName: null,
        brandName: "AS Colour",
        title: null,
        baseCategory: null,
        score: 0,
        source: "as-colour-csv",
        error: "No matching style found in the attached AS Colour CSV catalog.",
      });
      continue;
    }

    const styleCode = String(matchingRows[0].styleCode || "").trim();
    const productRow = productsByStyleCode.get(styleCode) || null;
    const categoryRow = categoriesByStyleCode.get(styleCode) || null;
    const priceRow = pricesByStyleCode.get(styleCode) || null;
    const style = buildAsColourStyleFromRows(target, matchingRows, productRow, categoryRow, priceRow);

    styles.push(style);
    resolvedTargets.push({
      ...target,
      found: true,
      styleId: style.styleId,
      styleName: style.styleName,
      brandName: style.brandName,
      title: style.title,
      baseCategory: style.baseCategory,
      score: 100,
      source: "as-colour-csv",
      error: null,
    });
  }

  return {
    source: "as-colour-csv",
    resolvedTargets,
    counts: {
      styles: styles.length,
      products: styles.reduce((total, style) => total + style.variants.length, 0),
    },
    styles,
  };
}

function mergeResolvedTargets(primaryTargets, secondaryTargets) {
  const secondaryByQuery = new Map(secondaryTargets.map((target) => [target.query, target]));

  return primaryTargets.map((target) => {
    const fallback = secondaryByQuery.get(target.query);
    if (!fallback) return target;
    if (target.found) return target;
    return fallback;
  });
}

function mergeCatalogs(primaryCatalog, secondaryCatalog) {
  const mergedResolvedTargets = mergeResolvedTargets(primaryCatalog.resolvedTargets, secondaryCatalog.resolvedTargets);
  const stylesById = new Map();

  for (const style of [...primaryCatalog.styles, ...secondaryCatalog.styles]) {
    const key = style.styleId || style.styleSlug || `${style.brandName}-${style.styleName}`;
    stylesById.set(key, style);
  }

  const mergedStyles = Array.from(stylesById.values()).sort((left, right) => {
    return `${left.brandName} ${left.styleName}`.localeCompare(`${right.brandName} ${right.styleName}`);
  });

  return {
    syncedAt: new Date().toISOString(),
    source: "supplier-catalog",
    targetStyles: STYLE_TARGETS,
    resolvedTargets: mergedResolvedTargets,
    counts: {
      brands: primaryCatalog.counts.brands,
      styles: primaryCatalog.counts.styles,
      resolvedTargetStyles: mergedResolvedTargets.filter((target) => target.found).length,
      products: primaryCatalog.counts.products + secondaryCatalog.counts.products,
      apparelProducts: primaryCatalog.counts.apparelProducts + secondaryCatalog.counts.products,
      apparelStyles: mergedStyles.length,
      ssActivewearStyles: primaryCatalog.styles.length,
      asColourCsvStyles: secondaryCatalog.styles.length,
    },
    styles: mergedStyles,
  };
}

function scoreStyleMatch(style, target) {
  const brandName = pickFirst(style, ["brandName", "BrandName", "name", "Name"]) || "";
  const styleName = pickFirst(style, ["styleName", "StyleName", "uniqueStyleName", "UniqueStyleName"]) || "";
  const title = pickFirst(style, ["title", "Title"]) || "";
  const baseCategory = pickFirst(style, ["baseCategory", "BaseCategory"]) || "";
  const styleLoose = normalizeLoose(styleName);
  const styleCompact = normalizeCompact(styleName);
  const titleLoose = normalizeLoose(title);
  const brandLoose = normalizeLoose(brandName);
  const queryLoose = normalizeLoose(target.query);
  const styleAliasesLoose = target.styleAliases.map((alias) => normalizeLoose(alias));
  const styleAliasesCompact = target.styleAliases.map((alias) => normalizeCompact(alias));
  const brandAliasesLoose = target.brandAliases.map((alias) => normalizeLoose(alias));
  let brandScore = 0;
  let styleScore = 0;
  let score = 0;

  if (brandAliasesLoose.includes(brandLoose)) {
    brandScore = 40;
  } else if (brandAliasesLoose.some((alias) => brandLoose.includes(alias) || alias.includes(brandLoose))) {
    brandScore = 24;
  }

  if (styleAliasesLoose.includes(styleLoose) || styleAliasesCompact.includes(styleCompact)) {
    styleScore = 40;
  } else if (
    styleAliasesCompact.some((alias) => styleCompact.startsWith(alias) || alias.startsWith(styleCompact))
  ) {
    styleScore = 28;
  } else if (styleAliasesLoose.some((alias) => titleLoose.includes(alias))) {
    styleScore = 12;
  }

  if (brandScore === 0 || styleScore === 0) {
    return 0;
  }

  score += brandScore + styleScore;

  if (normalizeLoose(`${brandName} ${styleName}`) === queryLoose) {
    score += 20;
  }

  if (queryLoose.includes("crew") && titleLoose.includes("crew")) {
    score += 8;
  }

  if (categoryMatchesFamily(baseCategory, target.family)) {
    score += 10;
  }

  return score;
}

function buildStyleLookup(styles) {
  const lookup = new Map();

  for (const style of styles) {
    const styleId = pickFirst(style, ["styleID", "StyleID"]);
    if (!styleId) continue;
    lookup.set(String(styleId), style);
  }

  return lookup;
}

function resolveTargetStyles(styles) {
  return STYLE_TARGETS.map((target) => {
    const candidates = styles
      .map((style) => ({
        style,
        score: scoreStyleMatch(style, target),
      }))
      .filter((candidate) => candidate.score >= 50)
      .sort((left, right) => right.score - left.score);

    const bestMatch = candidates[0];

    if (!bestMatch) {
      return {
        ...target,
        found: false,
        styleId: null,
        styleName: null,
        brandName: null,
        title: null,
        baseCategory: null,
        score: 0,
        error: "No matching style found in the S&S styles catalog for this account.",
      };
    }

    return {
      ...target,
      found: true,
      styleId: String(pickFirst(bestMatch.style, ["styleID", "StyleID"])),
      styleName: pickFirst(bestMatch.style, ["styleName", "StyleName"]) || null,
      brandName: pickFirst(bestMatch.style, ["brandName", "BrandName", "name", "Name"]) || null,
      title: pickFirst(bestMatch.style, ["title", "Title"]) || null,
      baseCategory: pickFirst(bestMatch.style, ["baseCategory", "BaseCategory"]) || null,
      score: bestMatch.score,
      error: null,
    };
  });
}

function normalizeProduct(product, targetLookup, styleLookup) {
  const styleId = pickFirst(product, ["StyleID", "styleID", "StyleCode", "styleCode"]);
  const productId = pickFirst(product, ["ProductID", "productID", "ID", "id"]);
  const resolvedTarget = targetLookup.get(String(styleId || "")) || null;
  const resolvedStyle = styleLookup.get(String(styleId || "")) || null;
  const brandName =
    pickFirst(product, ["BrandName", "brandName", "Brand", "brand"]) ||
    pickFirst(resolvedStyle, ["brandName", "BrandName", "name", "Name"]) ||
    "Unknown";
  const styleName =
    pickFirst(product, ["StyleName", "styleName", "ProductTitle", "productTitle", "Title", "title"]) ||
    pickFirst(product, ["ProductName", "productName", "Name", "name"]) ||
    `${brandName} ${styleId || productId || ""}`.trim();
  const description = stripHtml(
    pickFirst(resolvedStyle, ["description", "Description", "title", "Title"]) ||
      pickFirst(product, ["Description", "description", "ProductDescription", "productDescription"]) ||
      ""
  );
  const colorName =
    pickFirst(product, ["ColorName", "colorName", "Color", "color", "ColorDescription", "colorDescription"]) ||
    "Unknown";
  const sizeName = pickFirst(product, ["SizeName", "sizeName", "Size", "size"]);
  const imageUrl = resolveImageUrl(
    pickFirst(product, [
      "ColorFrontImage",
      "colorFrontImage",
      "MainImageURL",
      "mainImageURL",
      "ImageURL",
      "imageURL",
      "Image",
      "image",
    ])
  );
  const galleryImages = uniqueGalleryImages([
    { label: "Front", url: pickFirst(product, ["ColorFrontImage", "colorFrontImage", "MainImageURL", "mainImageURL", "ImageURL", "imageURL", "Image", "image"]) },
    { label: "Back", url: pickFirst(product, ["ColorBackImage", "colorBackImage"]) },
    { label: "Side", url: pickFirst(product, ["ColorSideImage", "colorSideImage"]) },
    { label: "Side", url: pickFirst(product, ["ColorDirectSideImage", "colorDirectSideImage"]) },
    { label: "Model", url: pickFirst(product, ["ColorOnModelFrontImage", "colorOnModelFrontImage"]) },
    { label: "Model side", url: pickFirst(product, ["ColorOnModelSideImage", "colorOnModelSideImage"]) },
    { label: "Model back", url: pickFirst(product, ["ColorOnModelBackImage", "colorOnModelBackImage"]) },
    { label: "Style", url: pickFirst(resolvedStyle, ["styleImage", "StyleImage"]) || resolvedStyle?.mediaAssets?.find((asset) => asset.assetType === "Style")?.image },
  ]);

  return {
    productId: productId ? String(productId) : null,
    styleId: styleId ? String(styleId) : null,
    styleSlug: resolvedTarget?.slug || toSlug(`${brandName}-${styleName}`),
    brandName,
    styleName,
    categoryName: resolvedTarget?.family ?? "Other",
    description,
    title:
      pickFirst(resolvedStyle, ["title", "Title"]) ||
      pickFirst(product, ["Title", "title", "ProductTitle", "productTitle"]) ||
      styleName,
    colorName: String(colorName),
    sizeName: sizeName ? String(sizeName) : null,
    piecePrice:
      toNumber(pickFirst(product, ["Price", "price", "PiecePrice", "piecePrice", "NetPrice", "netPrice"])) ?? null,
    msrp:
      toNumber(pickFirst(product, ["MSRP", "msrp", "RetailPrice", "retailPrice"])) ?? null,
    imageUrl,
    galleryImages,
    colorSwatchImageUrl: resolveImageUrl(pickFirst(product, ["ColorSwatchImage", "colorSwatchImage"])),
    colorFamily: pickFirst(product, ["ColorFamily", "colorFamily"]) || null,
    colorHexPrimary: pickFirst(product, ["Color1", "color1"]) || null,
    colorHexSecondary: pickFirst(product, ["Color2", "color2"]) || null,
    totalStyleInventory: toNumber(pickFirst(product, ["Qty", "qty", "Quantity", "quantity"])) ?? null,
    baseCategory: pickFirst(resolvedStyle, ["baseCategory", "BaseCategory"]) || null,
    styleImageUrl: resolveImageUrl(
      pickFirst(resolvedStyle, ["styleImage", "StyleImage"]) ||
        resolvedStyle?.mediaAssets?.find((asset) => asset.assetType === "Style")?.image
    ),
    warehouses: Array.isArray(product.warehouses)
      ? product.warehouses.map((warehouse) => ({
          warehouseAbbr: pickFirst(warehouse, ["WarehouseAbbr", "warehouseAbbr"]) || null,
          qty: toNumber(pickFirst(warehouse, ["Qty", "qty", "Quantity", "quantity"])) ?? 0,
        }))
      : [],
    raw: product,
  };
}
function normalizeCatalog({ brands, styles: sourceStyles, products, resolvedTargets }) {
  const targetLookup = new Map(
    resolvedTargets.filter((target) => target.styleId).map((target) => [String(target.styleId), target])
  );
  const styleLookup = buildStyleLookup(sourceStyles);

  const normalizedProducts = products
    .map((product) => normalizeProduct(product, targetLookup, styleLookup))
    .filter((product) => product.categoryName !== "Other");

  const stylesByKey = new Map();

  for (const product of normalizedProducts) {
    const key = product.styleId || product.styleName;
    if (!key) continue;

    const existing = stylesByKey.get(key);
    const targetSlug = targetLookup.get(String(key))?.slug || product.styleSlug;

    if (!existing) {
      stylesByKey.set(key, {
        source: "ss-activewear",
        styleId: product.styleId,
        styleSlug: targetSlug,
        brandName: product.brandName,
        styleName: product.styleName,
        title: product.title,
        categoryName: product.categoryName,
        baseCategory: product.baseCategory,
        description: product.description,
        colors: [product.colorName],
        sizes: product.sizeName ? [product.sizeName] : [],
        imageUrl: product.imageUrl || product.styleImageUrl,
        styleImageUrl: product.styleImageUrl,
        colorSwatchImageUrl: product.colorSwatchImageUrl,
        minPiecePrice: product.piecePrice,
        maxPiecePrice: product.piecePrice,
        totalInventory: product.totalStyleInventory ?? 0,
        variants: [
          {
            productId: product.productId,
            colorName: product.colorName,
            sizeName: product.sizeName,
            piecePrice: product.piecePrice,
            inventory: product.totalStyleInventory,
            imageUrl: product.imageUrl,
            galleryImages: product.galleryImages,
            colorFamily: product.colorFamily,
            colorHexPrimary: product.colorHexPrimary,
            colorHexSecondary: product.colorHexSecondary,
            baseCategory: product.baseCategory,
            colorSwatchImageUrl: product.colorSwatchImageUrl,
            warehouses: product.warehouses,
          },
        ],
      });
      continue;
    }

    if (!existing.colors.includes(product.colorName)) {
      existing.colors.push(product.colorName);
    }

    if (product.sizeName && !existing.sizes.includes(product.sizeName)) {
      existing.sizes.push(product.sizeName);
    }

    if (!existing.imageUrl && product.imageUrl) {
      existing.imageUrl = product.imageUrl;
    }

    if (!existing.styleSlug && targetSlug) {
      existing.styleSlug = targetSlug;
    }

    if (!existing.styleImageUrl && product.styleImageUrl) {
      existing.styleImageUrl = product.styleImageUrl;
    }

    if (!existing.colorSwatchImageUrl && product.colorSwatchImageUrl) {
      existing.colorSwatchImageUrl = product.colorSwatchImageUrl;
    }

    if (product.piecePrice !== null) {
      existing.minPiecePrice =
        existing.minPiecePrice === null ? product.piecePrice : Math.min(existing.minPiecePrice, product.piecePrice);
      existing.maxPiecePrice =
        existing.maxPiecePrice === null ? product.piecePrice : Math.max(existing.maxPiecePrice, product.piecePrice);
    }

    existing.totalInventory += product.totalStyleInventory ?? 0;
    existing.variants.push({
      productId: product.productId,
      colorName: product.colorName,
      sizeName: product.sizeName,
      piecePrice: product.piecePrice,
      inventory: product.totalStyleInventory,
      imageUrl: product.imageUrl,
      galleryImages: product.galleryImages,
      colorFamily: product.colorFamily,
      colorHexPrimary: product.colorHexPrimary,
      colorHexSecondary: product.colorHexSecondary,
      baseCategory: product.baseCategory,
      colorSwatchImageUrl: product.colorSwatchImageUrl,
      warehouses: product.warehouses,
    });
  }

  const catalogStyles = Array.from(stylesByKey.values()).sort((left, right) => {
    return `${left.brandName} ${left.styleName}`.localeCompare(`${right.brandName} ${right.styleName}`);
  });

  return {
    syncedAt: new Date().toISOString(),
    source: "ss-activewear",
    targetStyles: STYLE_TARGETS,
    resolvedTargets,
    counts: {
      brands: brands.length,
      styles: sourceStyles.length,
      resolvedTargetStyles: resolvedTargets.filter((target) => target.found).length,
      products: products.length,
      apparelProducts: normalizedProducts.length,
      apparelStyles: catalogStyles.length,
    },
    styles: catalogStyles,
  };
}

async function fetchJson(baseUrl, endpoint, authHeader) {
  const response = await fetch(`${baseUrl}${endpoint}`, {
    headers: {
      Authorization: authHeader,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`S&S request failed for ${endpoint}: ${response.status} ${response.statusText}\n${body.slice(0, 500)}`);
  }

  return response.json();
}

async function fetchProductsByStyleIds(baseUrl, authHeader, styleIds) {
  if (styleIds.length === 0) return [];

  const response = await fetch(`${baseUrl}/products/?styleid=${styleIds.join(",")}`, {
    headers: {
      Authorization: authHeader,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `S&S request failed for style IDs ${styleIds.join(",")}: ${response.status} ${response.statusText}\n${body.slice(0, 500)}`
    );
  }

  const payload = await response.json();
  return asArray(payload);
}

async function main() {
  loadLocalEnvFile();
  const args = parseArgs(process.argv);

  if (args.help) {
    printUsage();
    return;
  }

  const accountNumber = requireEnv("SS_ACTIVEWEAR_ACCOUNT_NUMBER");
  const apiKey = requireEnv("SS_ACTIVEWEAR_API_KEY");
  const authHeader = `Basic ${Buffer.from(`${accountNumber}:${apiKey}`).toString("base64")}`;

  mkdirSync(OUTPUT_DIR, { recursive: true });

  const [brandsPayload, stylesPayload] = await Promise.all([
    fetchJson(DEFAULT_BASE_URL, "/brands/", authHeader),
    fetchJson(DEFAULT_BASE_URL, "/styles/", authHeader),
  ]);

  const brands = asArray(brandsPayload);
  const styles = asArray(stylesPayload);
  const resolvedTargets = resolveTargetStyles(styles);
  const resolvedStyleIds = resolvedTargets
    .filter((target) => target.styleId)
    .map((target) => target.styleId);
  const productBatches = await Promise.all(
    splitIntoChunks(resolvedStyleIds, STYLE_ID_BATCH_SIZE).map((styleIdBatch) =>
      fetchProductsByStyleIds(DEFAULT_BASE_URL, authHeader, styleIdBatch)
    )
  );
  const products = productBatches.flat();
  const ssCatalog = normalizeCatalog({ brands, styles, products, resolvedTargets });
  const asColourFallbackCatalog = loadAsColourFallbackCatalog();
  const normalizedCatalog = mergeCatalogs(ssCatalog, asColourFallbackCatalog);
  const missingStyles = normalizedCatalog.resolvedTargets
    .filter((target) => !target.found)
    .map(({ query, family, error }) => ({
      query,
      family,
      error,
    }));

  writeFileSync(
    path.join(OUTPUT_DIR, "latest.catalog.json"),
    JSON.stringify(normalizedCatalog, null, 2)
  );
  writeFileSync(
    path.join(OUTPUT_DIR, "latest.styles.raw.json"),
    JSON.stringify(stylesPayload, null, 2)
  );
  writeFileSync(
    path.join(OUTPUT_DIR, "latest.brands.raw.json"),
    JSON.stringify(brandsPayload, null, 2)
  );
  writeFileSync(
    path.join(OUTPUT_DIR, "latest.products.raw.json"),
    JSON.stringify(products, null, 2)
  );
  writeFileSync(
    path.join(OUTPUT_DIR, "latest.as-colour-fallback.json"),
    JSON.stringify(asColourFallbackCatalog, null, 2)
  );
  writeFileSync(
    path.join(OUTPUT_DIR, "latest.missing-styles.json"),
    JSON.stringify(missingStyles, null, 2)
  );
  writeFileSync(
    path.join(OUTPUT_DIR, "latest.resolved-targets.json"),
    JSON.stringify(resolvedTargets, null, 2)
  );

  console.log(`S&S sync complete.
Resolved targets: ${normalizedCatalog.counts.resolvedTargetStyles}/${STYLE_TARGETS.length}
Catalog styles: ${normalizedCatalog.counts.apparelStyles}
Catalog products: ${normalizedCatalog.counts.apparelProducts}
Missing styles: ${missingStyles.length}
S&S styles: ${normalizedCatalog.counts.ssActivewearStyles}
AS Colour CSV styles: ${normalizedCatalog.counts.asColourCsvStyles}
Output: ${OUTPUT_DIR}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
