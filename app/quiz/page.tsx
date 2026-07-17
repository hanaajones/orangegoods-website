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
    "Team + Staff": {
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
    "ASAP (under 2 weeks)": {
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
    "$10-$25": {
      structuredCap: 2,
      dadHat: 2,
      tumbler: 2,
      canvasTote: 1,
      socks: 1,
    },
    "$25-$50": {
      structuredCap: 2,
      hoodie: 2,
      tumbler: 3,
      beanie: 1,
      customFlannel: 1,
    },
    "$50+": {
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
    "Premium + Elevated": {
      structuredCap: 3,
      hoodie: 3,
      tumbler: 3,
      customFlannel: 3,
      beanie: 2,
    },
    "Fun + Playful": {
      socks: 4,
      patchKit: 3,
      dadHat: 2,
      canvasTote: 2,
    },
    "Clean + Minimal": {
      dadHat: 3,
      premiumTee: 2,
      tumbler: 2,
      canvasTote: 2,
    },
    "Bold + Graphic": {
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

  if (product.id === "socks" && purpose === "Event Giveaway" && vibe === "Fun + Playful") {
    return "Socks are one of the most talked-about giveaways we make. Everyone takes them, and the right design makes them easy to wear again";
  }

  if (product.id === "structuredCap" && purpose === "Retail / Selling" && vibe === "Premium + Elevated" && use === "Wear It Every Day") {
    return "A structured cap at this quality level sells because it feels like real retail. It is the kind of piece people actually keep wearing";
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

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const isLeadStep = step === questions.length;
  const isResults = step > questions.length;
  const currentQuestion = questions[step];
  const recommendations = useMemo(() => getTopProducts(answers), [answers]);
  const totalSteps = questions.length + 1;
  const canViewResults =
    leadName.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadEmail.trim());
  const progress = Math.min(
    ((isResults ? totalSteps : step + 1) / totalSteps) * 100,
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
    setLeadName("");
    setLeadEmail("");
    setStep(0);
  }

  function viewResults(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canViewResults) return;
    setStep(questions.length + 1);
  }

  return (
    <main className="min-h-screen bg-[#F7F4ED] text-[var(--og-off-black)]">
      <div className="fixed left-0 top-0 z-20 h-1 w-full bg-[#1C1C1C]/10">
        <div
          className="h-full bg-[var(--og-orange)] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {!isLeadStep && !isResults && currentQuestion ? (
        <section
          key={currentQuestion.id}
          className="flex min-h-screen animate-[quizStep_0.28s_ease-out] items-center px-4 py-16 md:px-8 md:py-20"
        >
          <div className="mx-auto w-full max-w-5xl rounded-[2rem] border-[3px] border-[#0B32A0] bg-white p-6 shadow-[0_24px_60px_rgba(11,50,160,0.08)] md:p-10 lg:p-12">
            <div className="mb-8 flex min-h-11 items-start justify-between gap-4">
              <div className="flex flex-col items-start gap-2">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FF7F00]">
                  30-second merch quiz
                </p>
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={goBack}
                    title="Go to previous page"
                    className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border-[3px] border-[#0B32A0] bg-white px-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#0B32A0] shadow-[3px_3px_0px_#0B32A0] transition hover:-translate-y-0.5 hover:bg-[#F7F4ED] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF4200]"
                    aria-label="Go to previous page"
                  >
                    <span aria-hidden="true" className="text-2xl leading-none">
                      ‹
                    </span>
                    <span>Go back</span>
                  </button>
                ) : null}
              </div>
              <div className="pt-1">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#1C1C1C]/42">
                  {currentQuestion.eyebrow}
                </p>
              </div>
            </div>

            <div className="translate-y-0 opacity-100 transition duration-300 ease-out">
              <h1
                className="max-w-4xl text-[2.8rem] uppercase leading-[0.9] text-[var(--og-blue)] md:text-[5.1rem]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {currentQuestion.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#1C1C1C]/68 md:text-xl">
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
                      "flex min-h-24 items-center justify-center rounded-[1.4rem] border-[3px] p-4 text-center transition duration-200 md:min-h-36 md:p-6",
                      selected
                        ? "border-[var(--og-orange)] bg-[rgba(255,66,0,0.10)]"
                        : "border-[#0B32A0] bg-[#F7F4ED] hover:-translate-y-0.5 hover:bg-white",
                    ].join(" ")}
                  >
                    <p
                      className={`text-center text-[1.35rem] uppercase leading-[0.92] md:text-[1.9rem] ${
                        selected ? "text-[var(--og-orange)]" : "text-[var(--og-blue)]"
                      }`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {option}
                    </p>
                  </button>
                );
              })}
            </div>

          </div>
        </section>
      ) : isLeadStep ? (
        <section className="flex min-h-screen animate-[quizStep_0.28s_ease-out] items-center px-4 py-16 md:px-8 md:py-20">
          <div className="mx-auto w-full max-w-5xl rounded-[2rem] border-[3px] border-[#0B32A0] bg-white p-6 shadow-[0_24px_60px_rgba(11,50,160,0.08)] md:p-10 lg:p-12">
            <div className="mb-8 flex min-h-11 items-start justify-between gap-4">
              <div className="flex flex-col items-start gap-2">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FF7F00]">
                  30-second merch quiz
                </p>
                <button
                  type="button"
                  onClick={goBack}
                  title="Go to previous page"
                  className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border-[3px] border-[#0B32A0] bg-white px-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#0B32A0] shadow-[3px_3px_0px_#0B32A0] transition hover:-translate-y-0.5 hover:bg-[#F7F4ED] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF4200]"
                  aria-label="Go to previous page"
                >
                  <span aria-hidden="true" className="text-2xl leading-none">
                    ‹
                  </span>
                  <span>Go back</span>
                </button>
              </div>
              <div className="pt-1">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#1C1C1C]/42">
                  One last thing
                </p>
              </div>
            </div>

            <div className="translate-y-0 opacity-100 transition duration-300 ease-out">
              <h1
                className="max-w-4xl text-[2.8rem] uppercase leading-[0.9] text-[var(--og-blue)] md:text-[5.1rem]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ready to see your results?
                <br />
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#1C1C1C]/68 md:text-xl">
                Drop in your name and email to see your results on the next page, and we will send you a copy too.
              </p>
            </div>

            <form onSubmit={viewResults} className="mt-10 max-w-3xl">
              <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C1C1C]/42">
                    Name
                  </span>
                  <input
                    type="text"
                    value={leadName}
                    onChange={(event) => setLeadName(event.target.value)}
                    placeholder="Your name"
                    className="min-h-14 rounded-[1rem] border-[3px] border-[#0B32A0] bg-[#F7F4ED] px-4 text-base text-[#1C1C1C] outline-none transition focus:border-[#FF4200] focus:bg-white"
                    autoComplete="name"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C1C1C]/42">
                    Email
                  </span>
                  <input
                    type="email"
                    value={leadEmail}
                    onChange={(event) => setLeadEmail(event.target.value)}
                    placeholder="you@company.com"
                    className="min-h-14 rounded-[1rem] border-[3px] border-[#0B32A0] bg-[#F7F4ED] px-4 text-base text-[#1C1C1C] outline-none transition focus:border-[#FF4200] focus:bg-white"
                    autoComplete="email"
                  />
                </label>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={!canViewResults}
                  className={[
                    "inline-flex min-h-14 items-center justify-center rounded-full border-[3px] px-6 text-sm font-semibold uppercase tracking-[0.16em] transition",
                    canViewResults
                      ? "border-[#0B32A0] bg-[#0B32A0] text-white shadow-[4px_4px_0px_#FF4200] hover:-translate-y-0.5"
                      : "border-[#0B32A0]/20 bg-[#0B32A0]/10 text-[#0B32A0]/45",
                  ].join(" ")}
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </section>
      ) : (
        <section className="px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FF7F00]">
                Find My Goods
              </p>
              <h1
                className="mt-5 text-[2.8rem] uppercase leading-[0.9] text-[var(--og-blue)] md:text-[5.1rem]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Here&apos;s where
                <br />
                we would start.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#1C1C1C]/68 md:text-xl">
                Based on what you told us, these are the first goods we would put on the table for
                your brand.
              </p>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-2">
              {recommendations.map((product) => (
                <article
                  key={product.id}
                  className="flex min-h-full flex-col overflow-hidden rounded-[1.75rem] border-[3px] border-[#0B32A0] bg-white"
                >
                  <div className="relative aspect-[4/3.65] bg-[#E4DFCD]">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4 md:p-5">
                    <h2
                      className="text-[1.7rem] uppercase leading-[0.92] text-[var(--og-blue)] md:text-[1.85rem]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {product.name}
                    </h2>
                    <p className="mt-3 text-[0.98rem] leading-7 text-[#1C1C1C]/68">
                      {getWhyText(product, answers)}
                    </p>
                    <Link href="/contact" className="btn-og mt-5 w-full">
                      START WITH THIS
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 rounded-[2rem] border-[3px] border-[#0B32A0] bg-white p-6 md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7F00]">
                    Need a second opinion?
                  </p>
                  <h2
                    className="mt-3 text-[2.2rem] uppercase leading-[0.92] text-[var(--og-blue)] md:text-[3.6rem]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Let&apos;s narrow it down for you.
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-7 text-[#1C1C1C]/68 md:text-lg">
                    If the shortlist is close but not quite there, reach out and we will help you
                    pick the right path.
                  </p>
                </div>
                <div className="flex flex-col gap-3 md:items-end">
                  <Link href="/contact" className="btn-og inline-flex">
                    Talk it through
                  </Link>
                  <button
                    type="button"
                    onClick={restart}
                    className="font-noir-alt text-sm font-bold uppercase tracking-[0.12em] text-[var(--og-blue)] transition hover:text-[var(--og-orange)]"
                  >
                    Retake quiz
                  </button>
                </div>
              </div>
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
