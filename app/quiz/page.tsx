"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type QuestionId = "purpose" | "timeline" | "budget" | "quantity" | "vibe" | "use";
type ProductId =
  | "structuredCap"
  | "dadHat"
  | "hoodie"
  | "premiumTee"
  | "tumbler"
  | "canvasTote"
  | "beanie"
  | "socks"
  | "patchKit"
  | "customFlannel";

type Answers = Partial<Record<QuestionId, string>>;

type Question = {
  id: QuestionId;
  eyebrow: string;
  title: string;
  subtext: string;
  options: string[];
};

type Product = {
  id: ProductId;
  name: string;
  image: string;
  alt: string;
  category: "caps" | "apparel" | "drinkware" | "bags" | "accessories";
};

const questions: Question[] = [
  {
    id: "purpose",
    eyebrow: "1 of 6",
    title: "WHAT'S THIS MERCH FOR?",
    subtext: "Tell us where the goods need to win first.",
    options: ["Retail / Selling", "Team & Staff", "Event Giveaway", "Corporate Gift"],
  },
  {
    id: "timeline",
    eyebrow: "2 of 6",
    title: "WHEN DO YOU NEED IT?",
    subtext: "Timing shapes what we recommend and how custom we can get.",
    options: ["ASAP (under 3 weeks)", "1-2 Months", "3+ Months", "Not Sure Yet"],
  },
  {
    id: "budget",
    eyebrow: "3 of 6",
    title: "WHAT'S YOUR BUDGET PER PIECE?",
    subtext: "A range is enough. We will steer toward the best value for it.",
    options: ["Under $10", "$10-$20", "$20-$40", "$40+"],
  },
  {
    id: "quantity",
    eyebrow: "4 of 6",
    title: "HOW MANY PIECES?",
    subtext: "Volume helps us balance impact, setup, and production method.",
    options: ["100-250", "250-500", "500-1,000", "1,000+"],
  },
  {
    id: "vibe",
    eyebrow: "5 of 6",
    title: "WHAT'S THE VIBE?",
    subtext: "Pick the direction that feels most like the brand moment.",
    options: ["Premium & Elevated", "Fun & Playful", "Clean & Minimal", "Bold & Graphic"],
  },
  {
    id: "use",
    eyebrow: "6 of 6",
    title: "PEOPLE SHOULD...",
    subtext: "The best merch has a job after the handoff.",
    options: ["Wear It Every Day", "Drink From It", "Carry It Around", "Display It"],
  },
];

const productImages = {
  caps: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
  apparel: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  drinkware: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_18.avif",
  bags: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_19.avif",
  accessories: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif",
};

const products: Product[] = [
  {
    id: "structuredCap",
    name: "Structured Cap",
    image: productImages.caps,
    alt: "Orange Goods cap",
    category: "caps",
  },
  {
    id: "dadHat",
    name: "Dad Hat",
    image: productImages.caps,
    alt: "Orange Goods hat",
    category: "caps",
  },
  {
    id: "hoodie",
    name: "Embroidered Hoodie",
    image: productImages.apparel,
    alt: "Orange Goods apparel",
    category: "apparel",
  },
  {
    id: "premiumTee",
    name: "Premium Tee",
    image: productImages.apparel,
    alt: "Orange Goods tee",
    category: "apparel",
  },
  {
    id: "tumbler",
    name: "Tumbler/Bottle",
    image: productImages.drinkware,
    alt: "Orange Goods drinkware",
    category: "drinkware",
  },
  {
    id: "canvasTote",
    name: "Canvas Tote",
    image: productImages.bags,
    alt: "Orange Goods tote",
    category: "bags",
  },
  {
    id: "beanie",
    name: "Beanie",
    image: productImages.apparel,
    alt: "Orange Goods beanie",
    category: "apparel",
  },
  {
    id: "socks",
    name: "Socks",
    image: productImages.accessories,
    alt: "Orange Goods accessories",
    category: "accessories",
  },
  {
    id: "patchKit",
    name: "Patch Kit",
    image: productImages.accessories,
    alt: "Orange Goods patch kit",
    category: "accessories",
  },
  {
    id: "customFlannel",
    name: "Custom Flannel",
    image: productImages.apparel,
    alt: "Orange Goods apparel",
    category: "apparel",
  },
];

const scoreRules: Partial<Record<QuestionId, Record<string, Partial<Record<ProductId, number>>>>> = {
  purpose: {
    "Retail / Selling": {
      structuredCap: 3,
      hoodie: 3,
      premiumTee: 2,
      canvasTote: 2,
      beanie: 2,
      customFlannel: 3,
      tumbler: 1,
    },
    "Team & Staff": {
      hoodie: 3,
      structuredCap: 2,
      premiumTee: 2,
      canvasTote: 1,
      beanie: 1,
    },
    "Event Giveaway": {
      premiumTee: 3,
      canvasTote: 3,
      structuredCap: 2,
      socks: 3,
      patchKit: 2,
      tumbler: 1,
    },
    "Corporate Gift": {
      tumbler: 4,
      patchKit: 2,
      structuredCap: 2,
      canvasTote: 2,
      hoodie: 1,
    },
  },
  timeline: {
    "ASAP (under 3 weeks)": {
      premiumTee: 2,
      canvasTote: 2,
      socks: 2,
      tumbler: 1,
    },
    "1-2 Months": {
      structuredCap: 2,
      hoodie: 2,
      beanie: 1,
    },
    "3+ Months": {
      customFlannel: 2,
      structuredCap: 2,
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
    "$10-$20": {
      structuredCap: 2,
      dadHat: 2,
      tumbler: 2,
      canvasTote: 1,
      socks: 1,
    },
    "$20-$40": {
      structuredCap: 2,
      hoodie: 2,
      tumbler: 3,
      beanie: 1,
      customFlannel: 1,
    },
    "$40+": {
      tumbler: 3,
      hoodie: 3,
      customFlannel: 3,
      structuredCap: 2,
    },
  },
  quantity: {
    "100-250": {
      structuredCap: 1,
      dadHat: 1,
      premiumTee: 1,
      canvasTote: 1,
    },
    "250-500": {
      premiumTee: 1,
      canvasTote: 1,
      socks: 1,
      tumbler: 1,
    },
    "500-1,000": {
      premiumTee: 2,
      socks: 2,
      canvasTote: 2,
      patchKit: 2,
    },
    "1,000+": {
      premiumTee: 2,
      socks: 2,
      canvasTote: 2,
      patchKit: 2,
    },
  },
  vibe: {
    "Premium & Elevated": {
      structuredCap: 3,
      hoodie: 3,
      tumbler: 3,
      customFlannel: 3,
      beanie: 2,
    },
    "Fun & Playful": {
      socks: 4,
      patchKit: 3,
      dadHat: 2,
      canvasTote: 2,
    },
    "Clean & Minimal": {
      dadHat: 3,
      premiumTee: 2,
      tumbler: 2,
      canvasTote: 2,
    },
    "Bold & Graphic": {
      premiumTee: 4,
      structuredCap: 2,
      canvasTote: 2,
      patchKit: 2,
    },
  },
  use: {
    "Wear It Every Day": {
      structuredCap: 3,
      dadHat: 3,
      hoodie: 3,
      premiumTee: 3,
      beanie: 2,
      socks: 2,
      customFlannel: 2,
    },
    "Drink From It": {
      tumbler: 5,
    },
    "Carry It Around": {
      canvasTote: 5,
    },
    "Display It": {
      patchKit: 4,
      socks: 3,
      beanie: 2,
    },
  },
};

function getTopProducts(answers: Answers) {
  const scores = new Map<ProductId, number>();

  products.forEach((product) => scores.set(product.id, 0));

  Object.entries(answers).forEach(([questionId, answer]) => {
    const rule = scoreRules[questionId as QuestionId]?.[answer];
    if (!rule) return;

    Object.entries(rule).forEach(([productId, points]) => {
      scores.set(productId as ProductId, (scores.get(productId as ProductId) ?? 0) + (points ?? 0));
    });
  });

  return products
    .map((product) => ({ ...product, score: scores.get(product.id) ?? 0 }))
    .sort((a, b) => b.score - a.score || products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id))
    .slice(0, 4);
}

function getWhyText(product: Product, answers: Answers) {
  const purpose = answers.purpose;
  const timeline = answers.timeline;
  const budget = answers.budget;
  const vibe = answers.vibe;
  const use = answers.use;

  const purposeLine =
    purpose === "Retail / Selling"
      ? "It has enough perceived value to sell, not just hand out."
      : purpose === "Team & Staff"
        ? "It gives your team something consistent, useful, and easy to keep in rotation."
        : purpose === "Event Giveaway"
          ? "It is simple to hand off, easy to understand, and built to keep your event visible afterward."
          : purpose === "Corporate Gift"
            ? "It feels considered without getting fussy, which is exactly where a good corporate gift should land."
            : "It gives you a strong merch starting point without overcomplicating the project.";

  const vibeLine =
    vibe === "Premium & Elevated"
      ? "The finish can feel premium while still staying practical."
      : vibe === "Fun & Playful"
        ? "There is plenty of room for color, personality, and a memorable design detail."
        : vibe === "Clean & Minimal"
          ? "It works well with restrained branding and clean artwork."
          : vibe === "Bold & Graphic"
            ? "It gives your artwork enough surface area and presence to do the heavy lifting."
            : "It can flex with the creative direction once the artwork is set.";

  if (product.id === "tumbler" && use === "Drink From It") {
    return "A premium tumbler with your logo gets used every single day. That means steady impressions on a desk, in a car, or on the way into work.";
  }

  if (product.id === "socks" && purpose === "Event Giveaway" && vibe === "Fun & Playful") {
    return "Socks are one of the most talked-about giveaways we make. Everyone takes them, and the right design makes them easy to wear again.";
  }

  if (product.id === "structuredCap" && purpose === "Retail / Selling" && vibe === "Premium & Elevated" && use === "Wear It Every Day") {
    return "A structured cap at this quality level sells because it feels like real retail. It is the kind of piece people actually keep wearing.";
  }

  if (product.id === "canvasTote" && use === "Carry It Around") {
    return `${purposeLine} A canvas tote keeps moving through daily routines, so your brand does too.`;
  }

  if (product.category === "apparel" && use === "Wear It Every Day") {
    return `${purposeLine} ${vibeLine} It is wearable enough to earn repeat use instead of getting buried in a drawer.`;
  }

  if (product.id === "patchKit" && use === "Display It") {
    return `${purposeLine} Patch kits make the branding feel collectible and easy to place on bags, jackets, or desk setups.`;
  }

  if (timeline === "ASAP (under 3 weeks)") {
    return `${purposeLine} This is a practical pick when the timeline is tight and the finished product still needs to feel intentional.`;
  }

  if (budget === "$40+") {
    return `${purposeLine} With a higher per-piece range, this can carry nicer materials, decoration, and packaging details.`;
  }

  return `${purposeLine} ${vibeLine}`;
}

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const isResults = step >= questions.length;
  const currentQuestion = questions[step];
  const recommendations = useMemo(() => getTopProducts(answers), [answers]);
  const progress = Math.min(
    ((isResults ? questions.length : step + 1) / questions.length) * 100,
    100,
  );

  function selectAnswer(questionId: QuestionId, option: string) {
    setAnswers((current) => ({ ...current, [questionId]: option }));

    window.setTimeout(() => {
      setStep((currentStep) => Math.min(currentStep + 1, questions.length));
    }, 180);
  }

  function goBack() {
    setStep((current) => Math.max(current - 1, 0));
  }

  function restart() {
    setAnswers({});
    setStep(0);
  }

  return (
    <main className="min-h-screen bg-[var(--og-warm-grey)] text-[var(--og-off-black)]">
      <div className="fixed left-0 top-0 z-20 h-1 w-full bg-[#1C1C1C]/10">
        <div
          className="h-full bg-[var(--og-orange)] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {!isResults && currentQuestion ? (
        <section
          key={currentQuestion.id}
          className="flex min-h-screen animate-[quizStep_0.28s_ease-out] items-center px-4 py-16"
        >
          <div className="mx-auto w-full max-w-5xl">
            <div className="mb-8 flex min-h-11 items-center justify-between gap-4">
              <p className="font-body text-sm font-semibold uppercase tracking-[0.24em] text-[#1C1C1C]/55">
                {currentQuestion.eyebrow}
              </p>
              {step > 0 ? (
                <button
                  type="button"
                  onClick={goBack}
                  className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-[var(--og-blue)] transition hover:text-[var(--og-orange)]"
                >
                  Back
                </button>
              ) : null}
            </div>

            <div className="translate-y-0 opacity-100 transition duration-300 ease-out">
              <h1 className="max-w-4xl text-[clamp(3.25rem,12vw,8.5rem)] leading-[0.82] text-[var(--og-orange)]">
                {currentQuestion.title}
              </h1>
              <p className="mt-5 max-w-2xl font-body text-lg leading-7 text-[#1C1C1C]/70 md:text-xl">
                {currentQuestion.subtext}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 md:gap-5">
              {currentQuestion.options.map((option) => {
                const selected = answers[currentQuestion.id] === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => selectAnswer(currentQuestion.id, option)}
                    className={[
                      "min-h-24 rounded-lg border-2 p-4 text-left font-body text-base font-semibold leading-tight transition duration-200 md:min-h-36 md:p-6 md:text-2xl",
                      selected
                        ? "border-[var(--og-orange)] bg-[rgba(255,66,0,0.12)] text-[var(--og-orange)]"
                        : "border-[#1C1C1C]/15 bg-white text-[var(--og-off-black)] hover:border-[var(--og-orange)] hover:bg-[rgba(255,66,0,0.06)]",
                    ].join(" ")}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="font-body text-sm font-semibold uppercase tracking-[0.24em] text-[#1C1C1C]/55">
                Results
              </p>
              <h1 className="mt-5 text-[clamp(3.25rem,10vw,8rem)] leading-[0.84] text-[var(--og-orange)]">
                HERE&apos;S WHAT WE&apos;D MAKE YOU.
              </h1>
              <p className="mt-5 max-w-2xl font-body text-lg leading-7 text-[#1C1C1C]/70 md:text-xl">
                Based on what you told us. These are real products we make.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {recommendations.map((product) => (
                <article
                  key={product.id}
                  className="flex min-h-full flex-col overflow-hidden rounded-lg border border-[#1C1C1C]/12 bg-white"
                >
                  <div className="relative aspect-[4/3] bg-[#E4DFCD]">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="text-3xl leading-none text-[var(--og-orange)]">
                      {product.name}
                    </h2>
                    <p className="mt-4 font-body text-base leading-6 text-[#1C1C1C]/72">
                      {getWhyText(product, answers)}
                    </p>
                    <Link href="/contact" className="btn-og mt-6 w-full">
                      START WITH THIS &rarr;
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-start gap-4 border-t border-[#1C1C1C]/12 pt-8 md:flex-row md:items-center md:justify-between">
              <button
                type="button"
                onClick={restart}
                className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-[var(--og-blue)] transition hover:text-[var(--og-orange)]"
              >
                Retake quiz
              </button>
              <p className="text-sm text-[#1C1C1C]/50">
                Not seeing what you&apos;re looking for?{" "}
                <Link href="/goods" className="text-[#FF4200] hover:underline">See more options</Link>
                {" or "}
                <Link href="/contact" className="text-[#FF4200] hover:underline">contact us</Link>.
              </p>
            </div>
          </div>
        </section>
      )}
      <style jsx global>{`
        @keyframes quizStep {
          from {
            opacity: 0;
            transform: translateX(18px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </main>
  );
}
