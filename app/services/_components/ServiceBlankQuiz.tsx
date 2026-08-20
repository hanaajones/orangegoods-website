"use client";

import Image from "next/image";
import { useState } from "react";
import { ServiceLeadForm } from "./ServiceLeadForm";

export type ScreenPrintQuestionId = "product" | "fit" | "finish" | "printMood" | "weight";
export type ScreenPrintBlankId =
  | "heavyBoxyTee"
  | "pigmentDyedTee"
  | "retailTee"
  | "heavyweightHoodie"
  | "midweightFleece"
  | "relaxedSweatpants";

export type ScreenPrintQuizAnswers = Partial<Record<ScreenPrintQuestionId, string>>;

type Question = {
  id: ScreenPrintQuestionId;
  eyebrow: string;
  title: string;
  subtext: string;
  options: string[];
};

type BlankRecommendation = {
  id: ScreenPrintBlankId;
  name: string;
  detail: string;
  image: string;
  alt: string;
  position?: string;
};

export const screenPrintQuizQuestions: Question[] = [
  {
    id: "product",
    eyebrow: "1 of 5",
    title: "What style are you going for?",
    subtext: "Start with what you want to make and we'll guide the blank, fit, and feel.",
    options: ["Tees", "Fleece", "Sweatpants", "Mix of apparel"],
  },
  {
    id: "fit",
    eyebrow: "2 of 5",
    title: "How should it feel on body?",
    subtext: "Fit changes whether something reads retail, staff, or giveaway.",
    options: ["Boxy + structured", "Broken-in + relaxed", "Classic retail fit", "Easy unisex staple"],
  },
  {
    id: "finish",
    eyebrow: "3 of 5",
    title: "What finish are you drawn to?",
    subtext: "This helps us steer toward the right wash, dye, and fabric story.",
    options: ["Pigment dyed / washed", "Clean solids", "Soft fleece face", "Open to either"],
  },
  {
    id: "printMood",
    eyebrow: "4 of 5",
    title: "What kind of print moment is this?",
    subtext: "Some blanks hold oversized graphics better, others are better for simple front hits.",
    options: ["Big graphic front/back", "Small chest + back hit", "Vintage soft-hand print", "Merch table / retail piece"],
  },
  {
    id: "weight",
    eyebrow: "5 of 5",
    title: "What weight feels right?",
    subtext: "Heavier blanks feel more premium. Lighter ones move easier for staff and events.",
    options: ["Heavyweight", "Midweight", "Soft but still premium", "Not sure yet"],
  },
];

export const screenPrintQuizRecommendations: BlankRecommendation[] = [
  {
    id: "heavyBoxyTee",
    name: "Heavy Boxy Tee",
    detail: "For graphic-led merch",
    image: "/images/gallery/apparel-verve-gd-tee-verve_grateful-dead_tshirt_101.jpg",
    alt: "Graphic tee shown as a heavy boxy tee recommendation",
    position: "center 30%",
  },
  {
    id: "pigmentDyedTee",
    name: "Pigment-Dyed Tee",
    detail: "Broken-in and washed",
    image: "/images/gallery/quiz-pigment-dyed-tee-bgxhj-12.jpg",
    alt: "Washed pigment-dyed tee folded on a wood table",
    position: "center 76%",
  },
  {
    id: "retailTee",
    name: "Clean Retail Tee",
    detail: "Versatile everyday base",
    image: "/images/gallery/quiz-clean-retail-tee-d1a6f4ae.jpg",
    alt: "Clean retail tees hanging on a rack",
    position: "center 34%",
  },
  {
    id: "heavyweightHoodie",
    name: "Heavyweight Hoodie",
    detail: "Premium fleece with structure",
    image: "/images/gallery/quiz-heavyweight-hoodie-merch-drop-2025-7.jpg",
    alt: "Heavyweight hoodie shown from the back with an oversized graphic print",
    position: "center 28%",
  },
  {
    id: "midweightFleece",
    name: "Midweight Fleece",
    detail: "Easy program hoodie or crew",
    image: "/images/gallery/quiz-midweight-fleece-pxl-20250909.jpg",
    alt: "Midweight fleece crewneck shown from the back with a blue Heal the Bay graphic print",
    position: "center 34%",
  },
  {
    id: "relaxedSweatpants",
    name: "Relaxed Sweatpants",
    detail: "Good for retail sets",
    image: "/images/gallery/screen-printing-high-st-deli-sweatpants-hsd-baywood-127-2.jpg",
    alt: "Relaxed sweatpants shown as a fleece-bottom recommendation",
    position: "center 52%",
  },
];

const scoreRules: Partial<Record<ScreenPrintQuestionId, Record<string, Partial<Record<ScreenPrintBlankId, number>>>>> = {
  product: {
    Tees: {
      heavyBoxyTee: 4,
      pigmentDyedTee: 3,
      retailTee: 3,
    },
    Fleece: {
      heavyweightHoodie: 4,
      midweightFleece: 4,
      relaxedSweatpants: 1,
    },
    Sweatpants: {
      relaxedSweatpants: 5,
      heavyweightHoodie: 2,
      midweightFleece: 1,
    },
    "Mix of apparel": {
      retailTee: 2,
      midweightFleece: 3,
      heavyweightHoodie: 2,
      relaxedSweatpants: 2,
    },
  },
  fit: {
    "Boxy + structured": {
      heavyBoxyTee: 4,
      heavyweightHoodie: 3,
      relaxedSweatpants: 2,
    },
    "Broken-in + relaxed": {
      pigmentDyedTee: 4,
      midweightFleece: 2,
      relaxedSweatpants: 3,
    },
    "Classic retail fit": {
      retailTee: 4,
      heavyweightHoodie: 1,
      midweightFleece: 2,
    },
    "Easy unisex staple": {
      retailTee: 3,
      midweightFleece: 3,
      pigmentDyedTee: 1,
    },
  },
  finish: {
    "Pigment dyed / washed": {
      pigmentDyedTee: 5,
      relaxedSweatpants: 2,
    },
    "Clean solids": {
      retailTee: 3,
      heavyBoxyTee: 2,
      heavyweightHoodie: 2,
    },
    "Soft fleece face": {
      heavyweightHoodie: 4,
      midweightFleece: 4,
      relaxedSweatpants: 3,
    },
    "Open to either": {
      retailTee: 1,
      heavyBoxyTee: 1,
      heavyweightHoodie: 1,
      midweightFleece: 1,
      pigmentDyedTee: 1,
      relaxedSweatpants: 1,
    },
  },
  printMood: {
    "Big graphic front/back": {
      heavyBoxyTee: 4,
      heavyweightHoodie: 3,
      pigmentDyedTee: 2,
    },
    "Small chest + back hit": {
      retailTee: 3,
      midweightFleece: 3,
      relaxedSweatpants: 2,
    },
    "Vintage soft-hand print": {
      pigmentDyedTee: 5,
      retailTee: 2,
      midweightFleece: 2,
    },
    "Merch table / retail piece": {
      heavyBoxyTee: 3,
      heavyweightHoodie: 3,
      relaxedSweatpants: 3,
    },
  },
  weight: {
    Heavyweight: {
      heavyBoxyTee: 4,
      heavyweightHoodie: 4,
      relaxedSweatpants: 3,
    },
    Midweight: {
      midweightFleece: 4,
      retailTee: 3,
      relaxedSweatpants: 1,
    },
    "Soft but still premium": {
      pigmentDyedTee: 3,
      retailTee: 3,
      midweightFleece: 2,
    },
    "Not sure yet": {
      retailTee: 1,
      pigmentDyedTee: 1,
      heavyweightHoodie: 1,
      midweightFleece: 1,
      relaxedSweatpants: 1,
      heavyBoxyTee: 1,
    },
  },
};

export function getScreenPrintTopRecommendations(answers: ScreenPrintQuizAnswers) {
  const scores = new Map<ScreenPrintBlankId, number>();

  screenPrintQuizRecommendations.forEach((item) => scores.set(item.id, 0));

  Object.entries(answers).forEach(([questionId, answer]) => {
    const rule = scoreRules[questionId as ScreenPrintQuestionId]?.[answer];
    if (!rule) return;

    Object.entries(rule).forEach(([blankId, points]) => {
      scores.set(
        blankId as ScreenPrintBlankId,
        (scores.get(blankId as ScreenPrintBlankId) ?? 0) + (points ?? 0),
      );
    });
  });

  return screenPrintQuizRecommendations
    .map((item) => ({ ...item, score: scores.get(item.id) ?? 0 }))
    .sort(
      (a, b) =>
        b.score - a.score
        || screenPrintQuizRecommendations.findIndex((item) => item.id === a.id)
          - screenPrintQuizRecommendations.findIndex((item) => item.id === b.id),
    )
    .slice(0, 4);
}

export function getScreenPrintRecommendationCopy(
  blankId: ScreenPrintBlankId,
  answers: ScreenPrintQuizAnswers,
) {
  const fit = answers.fit;
  const finish = answers.finish;
  const printMood = answers.printMood;
  const weight = answers.weight;

  if (blankId === "heavyBoxyTee") {
    return fit === "Boxy + structured"
      ? "This is the strongest lane when you want the tee itself to feel like part of the product, not just a surface for the print."
      : "A heavier boxy tee gives larger graphics more presence and usually reads closer to retail merch than a standard promo tee.";
  }

  if (blankId === "pigmentDyedTee") {
    return finish === "Pigment dyed / washed" || printMood === "Vintage soft-hand print"
      ? "Pigment-dyed blanks carry vintage ink treatments well and already feel broken-in, which makes the final piece easier to keep wearing."
      : "A washed tee is a good middle ground when you want the merch to feel softer and more lived-in from day one.";
  }

  if (blankId === "retailTee") {
    return weight === "Midweight" || fit === "Classic retail fit"
      ? "This is the safe premium tee lane: clean shape, easy sizing, and flexible enough for chest prints, back hits, or simple uniforms."
      : "A clean retail tee works when the print matters, but the brand still wants an easy everyday blank that does not feel overbuilt.";
  }

  if (blankId === "heavyweightHoodie") {
    return weight === "Heavyweight"
      ? "If the goal is a hoodie people actually keep, heavier fleece is usually the right move. It holds shape better and makes the print feel more intentional."
      : "This is the premium fleece answer when the piece needs structure, warmth, and enough body to feel like real merch.";
  }

  if (blankId === "midweightFleece") {
    return printMood === "Small chest + back hit"
      ? "Midweight fleece is often the easiest blank for staff programs and lighter branded apparel because it stays wearable without feeling too bulky."
      : "This is the practical fleece lane when you want comfort, easier sizing, and a piece people can wear in more settings.";
  }

  return finish === "Soft fleece face" || answers.product === "Sweatpants"
    ? "Relaxed sweatpants make the most sense when the blank itself is part of the appeal and you want the set to feel more considered than a basic add-on."
    : "A good sweatpant blank works best when the brand wants a retail-feeling fleece program instead of stopping at tees alone.";
}

function buildProjectDefault(
  answers: ScreenPrintQuizAnswers,
  topRecommendations: ReturnType<typeof getScreenPrintTopRecommendations>,
) {
  const answerLines = [
    ["Product lane", answers.product],
    ["Fit direction", answers.fit],
    ["Finish preference", answers.finish],
    ["Print mood", answers.printMood],
    ["Weight preference", answers.weight],
  ]
    .filter(([, value]) => value)
    .map(([label, value]) => `- ${label}: ${value}`);

  const recommendationLines = topRecommendations.map((item, index) => `- ${index + 1}. ${item.name}`);

  return `Screen printing blank quiz:

Top picks:
${recommendationLines.join("\n")}

What they chose:
${answerLines.join("\n")}

Project details:
Product:
Quantity:
Timeline:
Notes:`;
}

export function ServiceBlankQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<ScreenPrintQuizAnswers>({});

  const isResults = step >= screenPrintQuizQuestions.length;
  const currentQuestion = screenPrintQuizQuestions[step];
  const topRecommendations = getScreenPrintTopRecommendations(answers);
  const progress = ((Math.min(step + 1, screenPrintQuizQuestions.length) / screenPrintQuizQuestions.length) * 100);

  function selectAnswer(questionId: ScreenPrintQuestionId, option: string) {
    setAnswers((current) => ({ ...current, [questionId]: option }));

    window.setTimeout(() => {
      setStep((currentStep) => Math.min(currentStep + 1, screenPrintQuizQuestions.length));
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
    <section id="blank-quiz" className="mx-auto max-w-6xl scroll-mt-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
          Blank Quiz
        </p>
        <h2
          className="mt-3 text-[2.45rem] uppercase leading-[0.94] text-[var(--og-blue)] md:text-[4rem]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Find the right blank
          <br />
          before you quote it.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#676767] md:text-lg">
          Same quick quiz format, but tuned for screen printing. Use it to narrow the right tee,
          fleece, or sweatpant direction before the real quote starts.
        </p>
      </div>

      <div className="mt-8 overflow-hidden rounded-[2rem] border-[3px] border-[#0B32A0] bg-white shadow-[0_24px_60px_rgba(11,50,160,0.08)]">
        <div className="h-1 w-full bg-[#1C1C1C]/10">
          <div
            className="h-full bg-[var(--og-orange)] transition-all duration-500 ease-out"
            style={{ width: `${isResults ? 100 : progress}%` }}
          />
        </div>

        {!isResults && currentQuestion ? (
          <div
            key={currentQuestion.id}
            className="animate-[quizStep_0.28s_ease-out] p-6 md:p-10 lg:p-12"
          >
            <div className="mb-8 flex min-h-11 items-start justify-between gap-4">
              <div className="flex flex-col items-start gap-2">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FF7F00]">
                  30-second blank quiz
                </p>
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={goBack}
                    className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border-[3px] border-[#0B32A0] bg-white px-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#0B32A0] shadow-[3px_3px_0px_#0B32A0] transition hover:-translate-y-0.5 hover:bg-[#F7F4ED] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF4200]"
                    aria-label="Go to previous question"
                  >
                    <span aria-hidden="true" className="text-2xl leading-none">
                      ‹
                    </span>
                    <span>Go back</span>
                  </button>
                ) : null}
              </div>
              <p className="pt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1C1C1C]/42">
                {currentQuestion.eyebrow}
              </p>
            </div>

            <h3
              className="max-w-4xl text-[2rem] uppercase leading-[0.92] text-[var(--og-blue)] md:text-[3.7rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {currentQuestion.title}
            </h3>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#1C1C1C]/68 md:text-xl">
              {currentQuestion.subtext}
            </p>

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
                      className={`text-center text-[1.15rem] uppercase leading-[0.92] md:text-[1.7rem] ${
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
        ) : (
          <div className="animate-[quizStep_0.28s_ease-out] p-6 md:p-10 lg:p-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FF7F00]">
                  Blank quiz results
                </p>
                <h3
                  className="mt-3 text-[2.45rem] uppercase leading-[0.9] text-[var(--og-blue)] md:text-[4.8rem]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Here&apos;s where
                  <br />
                  we would start.
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[#676767] md:text-lg">
                  These are the first blank directions we would put in front of you based on how
                  you want the piece to feel, print, and wear.
                </p>
              </div>

              <button
                type="button"
                onClick={restart}
                className="inline-flex min-h-11 items-center justify-center rounded-full border-[3px] border-[#0B32A0] bg-white px-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#0B32A0] shadow-[3px_3px_0px_#0B32A0] transition hover:-translate-y-0.5 hover:bg-[#F7F4ED]"
              >
                Retake quiz
              </button>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {topRecommendations.map((item) => (
                <article
                  key={item.id}
                  className="flex min-h-full flex-col overflow-hidden rounded-[1.75rem] border-[3px] border-[#0B32A0] bg-white"
                >
                  <div className="relative aspect-[4/3.65] bg-[#E4DFCD]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      style={{ objectPosition: item.position ?? "center" }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4 md:p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                      {item.detail}
                    </p>
                    <h4
                      className="mt-2 text-[1.8rem] uppercase leading-[0.92] text-[var(--og-blue)] md:text-[2rem]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.name}
                    </h4>
                    <p className="mt-3 text-[0.98rem] leading-7 text-[#1C1C1C]/68">
                      {getScreenPrintRecommendationCopy(item.id, answers)}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[#0B32A0]/10 bg-[#F7F4ED] px-5 py-4 text-sm leading-6 text-[#676767]">
              Want us to turn this into a real quote path? Send the picks below and we will get
              back to you with the right blank options, quantities, and next step.
            </div>

            <div className="mt-8">
              <ServiceLeadForm
                title="Send us your blank picks."
                description="This goes into the same lead flow as the main project form, but includes the quiz answers and recommended blank directions automatically."
                projectDefault={buildProjectDefault(answers, topRecommendations)}
                hiddenFields={{
                  source: "screen-printing-blank-quiz",
                  service: "screen-printing",
                  intent: "blank-selection",
                  quizType: "screen-printing-blank-quiz",
                  quizProduct: answers.product ?? "",
                  quizFit: answers.fit ?? "",
                  quizFinish: answers.finish ?? "",
                  quizPrintMood: answers.printMood ?? "",
                  quizWeight: answers.weight ?? "",
                  recommendedBlank1: topRecommendations[0]?.name ?? "",
                  recommendedBlank2: topRecommendations[1]?.name ?? "",
                  recommendedBlank3: topRecommendations[2]?.name ?? "",
                  recommendedBlank4: topRecommendations[3]?.name ?? "",
                }}
                submitLabel="Send My Blank Picks"
                showScreenPrintFields
                showArtworkUpload
              />
            </div>
          </div>
        )}
      </div>

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
    </section>
  );
}
