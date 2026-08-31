import type { PrintCat } from "@/data/catalog";

const APPAREL_STANDARD_SHIPPING_UNIT_PRICE: Record<PrintCat, number> = {
  base: 0.5,
  fleece: 2,
  jacket: 3,
  bag: 0.75,
};

const READY_MADE_HAT_STANDARD_SHIPPING_UNIT_PRICE = 0.5;
const BEANIE_STANDARD_SHIPPING_UNIT_PRICE = 0.75;
const TOTE_STANDARD_SHIPPING_UNIT_PRICE = 0.75;

function roundToQuarter(value: number) {
  return Math.round(value * 4) / 4;
}

export function addQuickTurnApparelShippingIncludedPrice(unitPrice: number, printCat: PrintCat) {
  return roundToQuarter(unitPrice + APPAREL_STANDARD_SHIPPING_UNIT_PRICE[printCat]);
}

export function addQuickTurnReadyMadeHatShippingIncludedPrice(unitPrice: number) {
  return roundToQuarter(unitPrice + READY_MADE_HAT_STANDARD_SHIPPING_UNIT_PRICE);
}

export function addQuickTurnBeanieShippingIncludedPrice(unitPrice: number) {
  return roundToQuarter(unitPrice + BEANIE_STANDARD_SHIPPING_UNIT_PRICE);
}

export function addQuickTurnToteShippingIncludedPrice(unitPrice: number) {
  return roundToQuarter(unitPrice + TOTE_STANDARD_SHIPPING_UNIT_PRICE);
}

export const QUICK_TURN_FREE_SHIPPING_LABEL = "Free shipping";
