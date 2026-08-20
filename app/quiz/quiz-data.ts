export type MainQuizQuestionId = "purpose" | "timeline" | "budget" | "quantity" | "vibe" | "use";
export type MainQuizProductId =
  | "unstructuredCap"
  | "dadHat"
  | "hoodie"
  | "premiumTee"
  | "tumbler"
  | "milkGlassMug"
  | "beachTowel"
  | "canvasTote"
  | "beanie"
  | "socks"
  | "patchKit"
  | "heavyBoxTee";

export type MainQuizAnswers = Partial<Record<MainQuizQuestionId, string>>;

type Question = {
  id: MainQuizQuestionId;
  eyebrow: string;
  title: string;
  subtext: string;
  options: string[];
};

type Product = {
  id: MainQuizProductId;
  name: string;
  image: string;
  alt: string;
  category: "caps" | "apparel" | "drinkware" | "bags" | "accessories";
  position?: string;
};

export const mainQuizQuestions: Question[] = [
  {
    id: "purpose",
    eyebrow: "1 of 6",
    title: "Where will the merch go?",
    subtext: "Tell us where the goods need to do their job first.",
    options: ["Retail / Selling", "Team + Staff", "Event Giveaway", "Corporate Gift"],
  },
  {
    id: "timeline",
    eyebrow: "2 of 6",
    title: "When do you need it?",
    subtext: "Timing shapes what we recommend and how custom we can get.",
    options: ["ASAP (under 2 weeks)", "1-2 Months", "3+ Months", "No rush"],
  },
  {
    id: "budget",
    eyebrow: "3 of 6",
    title: "What's your budget per item?",
    subtext: "A range is enough. We will steer toward the best value for it.",
    options: ["Under $10", "$10-$25", "$25-$50", "$50+"],
  },
  {
    id: "quantity",
    eyebrow: "4 of 6",
    title: "How many pieces?",
    subtext: "A rough quantity helps us point you in the right direction.",
    options: ["100-250", "250-500", "500-1,000", "1,000+"],
  },
  {
    id: "vibe",
    eyebrow: "5 of 6",
    title: "What's the vibe?",
    subtext: "Pick the direction that feels most like the brand moment.",
    options: ["Premium + Elevated", "Fun + Playful", "Clean + Minimal", "Bold + Graphic"],
  },
  {
    id: "use",
    eyebrow: "6 of 6",
    title: "People should...",
    subtext: "The best merch has a job after the handoff.",
    options: ["Wear It Every Day", "Drink From It", "Carry It Around", "Display It"],
  },
];

export const mainQuizProducts: Product[] = [
  {
    id: "unstructuredCap",
    name: "Unstructured Cap",
    image: "/images/gallery/quiz-unstructured-cap-verve-larrea.jpg",
    alt: "Blue unstructured hat with Verve Coffee embroidery",
    category: "caps",
    position: "center 32%",
  },
  {
    id: "dadHat",
    name: "Dad Hat",
    image: "/images/gallery/quiz-dad-hat-jd19470.jpg",
    alt: "Black dad hat with pink embroidered graphic",
    category: "caps",
    position: "center 24%",
  },
  {
    id: "hoodie",
    name: "Embroidered Jacket",
    image: "/images/gallery/quiz-embroidered-jacket-k1-holiday-party-2022.jpg",
    alt: "Black embroidered jackets displayed on a retail shelf",
    category: "apparel",
    position: "center 62%",
  },
  {
    id: "premiumTee",
    name: "Premium Tee",
    image: "/images/gallery/quiz-premium-tee-img-8184.jpg",
    alt: "Charcoal premium pocket tee worn outdoors at golden hour",
    category: "apparel",
    position: "center 30%",
  },
  {
    id: "tumbler",
    name: "Tumbler/Bottle",
    image: "/images/gallery/quiz-tumbler-bottle-verve-holiday-merch.jpg",
    alt: "Green branded tumbler held in front of dark foliage",
    category: "drinkware",
    position: "center 48%",
  },
  {
    id: "milkGlassMug",
    name: "Milk Glass Mug",
    image: "/images/gallery/quiz-milk-glass-mug-img-7739.jpg",
    alt: "Three stacked Layla Bagels & Coffee milk glass mugs in pink, white, and blue",
    category: "drinkware",
    position: "center 62%",
  },
  {
    id: "beachTowel",
    name: "Beach Towel",
    image: "/images/gallery/quiz-beach-towel-267a5393.jpg",
    alt: "Apteka custom beach towel laid out on sand at the beach",
    category: "accessories",
    position: "center 54%",
  },
  {
    id: "canvasTote",
    name: "Canvas Tote",
    image: "/images/gallery/quiz-canvas-tote-img-1172.jpg",
    alt: "Field Day Coffee canvas tote set on sand beside a surfboard",
    category: "bags",
    position: "74% 52%",
  },
  {
    id: "beanie",
    name: "Beanie",
    image: "/images/gallery/quiz-beanie-img-3607.jpg",
    alt: "Gray and brown knit beanie resting on a rocky shoreline above the ocean",
    category: "apparel",
    position: "46% center",
  },
  {
    id: "socks",
    name: "Socks",
    image: "/images/gallery/quiz-socks-mg-2460.jpg",
    alt: "Assorted custom socks laid out on concrete",
    category: "accessories",
    position: "center 44%",
  },
  {
    id: "patchKit",
    name: "Patch Kit",
    image: "/images/gallery/quiz-patch-kit-whole-shoot-copy.jpg",
    alt: "Stack of embroidered Nitro Circus patches",
    category: "accessories",
    position: "center 52%",
  },
  {
    id: "heavyBoxTee",
    name: "Heavy Box Tee",
    image: "/images/gallery/quiz-heavy-box-tee-verve-grateful-dead.jpg",
    alt: "Black heavyweight boxy tee with Grateful Dead graphic worn indoors",
    category: "apparel",
    position: "center 34%",
  },
];

const scoreRules: Partial<Record<MainQuizQuestionId, Record<string, Partial<Record<MainQuizProductId, number>>>>> = {
  purpose: {
    "Retail / Selling": {
      unstructuredCap: 3,
      hoodie: 3,
      premiumTee: 2,
      canvasTote: 2,
      beanie: 2,
      heavyBoxTee: 3,
      tumbler: 1,
      milkGlassMug: 3,
      beachTowel: 2,
    },
    "Team + Staff": {
      hoodie: 3,
      unstructuredCap: 2,
      premiumTee: 2,
      canvasTote: 1,
      beanie: 1,
      milkGlassMug: 2,
      beachTowel: 1,
    },
    "Event Giveaway": {
      premiumTee: 3,
      canvasTote: 3,
      unstructuredCap: 2,
      socks: 3,
      patchKit: 2,
      tumbler: 1,
      milkGlassMug: 1,
      beachTowel: 3,
    },
    "Corporate Gift": {
      tumbler: 4,
      milkGlassMug: 2,
      patchKit: 2,
      unstructuredCap: 2,
      canvasTote: 2,
      hoodie: 1,
      beachTowel: 2,
    },
  },
  timeline: {
    "ASAP (under 2 weeks)": {
      premiumTee: 2,
      canvasTote: 2,
      socks: 2,
      tumbler: 1,
    },
    "1-2 Months": {
      unstructuredCap: 2,
      hoodie: 2,
      beanie: 1,
    },
    "3+ Months": {
      heavyBoxTee: 2,
      unstructuredCap: 2,
      hoodie: 1,
    },
  },
  budget: {
    "Under $10": {
      premiumTee: 3,
      socks: 3,
      canvasTote: 2,
      patchKit: 2,
    },
    "$10-$25": {
      unstructuredCap: 2,
      dadHat: 2,
      tumbler: 2,
      milkGlassMug: 3,
      canvasTote: 1,
      socks: 1,
      beachTowel: 2,
    },
    "$25-$50": {
      unstructuredCap: 2,
      hoodie: 2,
      tumbler: 3,
      milkGlassMug: 2,
      beanie: 1,
      heavyBoxTee: 1,
      beachTowel: 2,
    },
    "$50+": {
      tumbler: 3,
      hoodie: 3,
      heavyBoxTee: 3,
      unstructuredCap: 2,
      beachTowel: 1,
    },
  },
  quantity: {
    "100-250": {
      unstructuredCap: 1,
      dadHat: 1,
      premiumTee: 1,
      canvasTote: 1,
    },
    "250-500": {
      premiumTee: 1,
      canvasTote: 1,
      socks: 1,
      tumbler: 1,
      milkGlassMug: 1,
      beachTowel: 1,
    },
    "500-1,000": {
      premiumTee: 2,
      socks: 2,
      canvasTote: 2,
      patchKit: 2,
      milkGlassMug: 1,
      beachTowel: 2,
    },
    "1,000+": {
      premiumTee: 2,
      socks: 2,
      canvasTote: 2,
      patchKit: 2,
      milkGlassMug: 1,
      beachTowel: 2,
    },
  },
  vibe: {
    "Premium + Elevated": {
      unstructuredCap: 3,
      hoodie: 3,
      tumbler: 3,
      milkGlassMug: 2,
      heavyBoxTee: 3,
      beanie: 2,
      beachTowel: 1,
    },
    "Fun + Playful": {
      socks: 4,
      patchKit: 3,
      dadHat: 2,
      canvasTote: 2,
      milkGlassMug: 2,
      beachTowel: 3,
    },
    "Clean + Minimal": {
      dadHat: 3,
      premiumTee: 2,
      tumbler: 2,
      milkGlassMug: 3,
      canvasTote: 2,
      beachTowel: 1,
    },
    "Bold + Graphic": {
      premiumTee: 4,
      unstructuredCap: 2,
      canvasTote: 2,
      patchKit: 2,
      milkGlassMug: 1,
      beachTowel: 3,
    },
  },
  use: {
    "Wear It Every Day": {
      unstructuredCap: 3,
      dadHat: 3,
      hoodie: 3,
      premiumTee: 3,
      beanie: 2,
      socks: 2,
      heavyBoxTee: 2,
    },
    "Drink From It": {
      tumbler: 5,
      milkGlassMug: 4,
    },
    "Carry It Around": {
      canvasTote: 5,
      beachTowel: 2,
    },
    "Display It": {
      patchKit: 4,
      socks: 3,
      beanie: 2,
      beachTowel: 1,
    },
  },
};

export function getMainQuizTopProducts(answers: MainQuizAnswers) {
  const scores = new Map<MainQuizProductId, number>();

  mainQuizProducts.forEach((product) => scores.set(product.id, 0));

  Object.entries(answers).forEach(([questionId, answer]) => {
    const rule = scoreRules[questionId as MainQuizQuestionId]?.[answer];
    if (!rule) return;

    Object.entries(rule).forEach(([productId, points]) => {
      scores.set(
        productId as MainQuizProductId,
        (scores.get(productId as MainQuizProductId) ?? 0) + (points ?? 0),
      );
    });
  });

  return mainQuizProducts
    .map((product) => ({ ...product, score: scores.get(product.id) ?? 0 }))
    .sort(
      (a, b) =>
        b.score - a.score
        || mainQuizProducts.findIndex((item) => item.id === a.id)
          - mainQuizProducts.findIndex((item) => item.id === b.id),
    )
    .slice(0, 4);
}

export function getMainQuizWhyText(product: Product, answers: MainQuizAnswers) {
  const purpose = answers.purpose;
  const timeline = answers.timeline;
  const budget = answers.budget;
  const vibe = answers.vibe;
  const use = answers.use;

  const purposeLine =
    purpose === "Retail / Selling"
      ? "It has enough perceived value to sell, not just hand out"
      : purpose === "Team + Staff"
        ? "It gives your team something consistent, useful, and easy to keep in rotation"
        : purpose === "Event Giveaway"
          ? "It is simple to hand off, easy to understand, and built to keep your event visible afterward"
          : purpose === "Corporate Gift"
            ? "It feels considered without getting fussy, which is exactly where a good corporate gift should land"
            : "It gives you a strong merch starting point without overcomplicating the project";

  const vibeLine =
    vibe === "Premium + Elevated"
      ? "The finish can feel premium while still staying practical"
      : vibe === "Fun + Playful"
        ? "There is plenty of room for color, personality, and a memorable design detail"
        : vibe === "Clean + Minimal"
          ? "It works well with restrained branding and clean artwork"
          : vibe === "Bold + Graphic"
            ? "It gives your artwork enough surface area and presence to do the heavy lifting"
            : "It can flex with the creative direction once the artwork is set";

  if (product.id === "tumbler" && use === "Drink From It") {
    return "A premium tumbler with your logo gets used every single day. That means steady impressions on a desk, in a car, or on the way into work";
  }

  if (product.id === "milkGlassMug" && use === "Drink From It") {
    return "A milk glass mug feels more edited than generic promo drinkware and gives the brand a stronger cafe, retail, or hospitality angle";
  }

  if (product.id === "beachTowel" && purpose === "Event Giveaway") {
    return "A good beach towel feels bigger than standard giveaway merch and gives the brand a product people actually bring into a real outdoor setting";
  }

  if (product.id === "socks" && purpose === "Event Giveaway" && vibe === "Fun + Playful") {
    return "Socks are one of the most talked-about giveaways we make. Everyone takes them, and the right design makes them easy to wear again";
  }

  if (product.id === "unstructuredCap" && purpose === "Retail / Selling" && vibe === "Premium + Elevated" && use === "Wear It Every Day") {
    return "An unstructured cap at this quality level sells because it feels easy, retail-ready, and actually wearable day to day";
  }

  if (product.id === "canvasTote" && use === "Carry It Around") {
    return `${purposeLine} A canvas tote keeps moving through daily routines, so your brand does too`;
  }

  if (product.category === "apparel" && use === "Wear It Every Day") {
    return `${purposeLine} ${vibeLine} It is wearable enough to earn repeat use instead of getting buried in a drawer`;
  }

  if (product.id === "patchKit" && use === "Display It") {
    return `${purposeLine} Patch kits make the branding feel collectible and easy to place on bags, jackets, or desk setups`;
  }

  if (timeline === "ASAP (under 2 weeks)") {
    return `${purposeLine} This is a practical pick when the timeline is tight and the finished product still needs to feel intentional`;
  }

  if (budget === "$50+") {
    return `${purposeLine} With a higher per-piece range, this can carry nicer materials, decoration, and packaging details`;
  }

  return `${purposeLine} ${vibeLine}`;
}
