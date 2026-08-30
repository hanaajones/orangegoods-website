"use client";

import Image from "next/image";
import { useState } from "react";
import { ServiceLeadForm } from "./ServiceLeadForm";

export type EmbroideryQuestionId = "product" | "feel" | "placement" | "finish" | "priority";
export type EmbroideryRecommendationId =
  | "premiumCap"
  | "truckerHat"
  | "beanie"
  | "heavyFleece"
  | "outerwear"
  | "toteBag";

export type EmbroideryQuizAnswers = Partial<Record<EmbroideryQuestionId, string>>;

type Question = {
  id: EmbroideryQuestionId;
  eyebrow: string;
  title: string;
  subtext: string;
  options: string[];
};

type EmbroideryRecommendation = {
  id: EmbroideryRecommendationId;
  name: string;
  detail: string;
  image: string;
  alt: string;
  position?: string;
};

export const embroideryQuizQuestions: Question[] = [
  {
    id: "product",
    eyebrow: "1 of 5",
    title: "What are you trying to make?",
    subtext: "Start with the product lane and we will help narrow the right base.",
    options: ["Hats", "Beanies", "Crewnecks", "Jackets", "Totes", "Mixed program"],
  },
  {
    id: "feel",
    eyebrow: "2 of 5",
    title: "How should it feel?",
    subtext: "This tells us whether the product should lean retail, rugged, or everyday easy.",
    options: ["Clean + premium", "Structured + durable", "Soft everyday", "Classic team staple"],
  },
  {
    id: "placement",
    eyebrow: "3 of 5",
    title: "What kind of logo moment is it?",
    subtext: "Placement changes what product and embroidery style make the most sense.",
    options: ["Front logo", "Side or back hit", "Small chest hit", "Patch or mixed detail"],
  },
  {
    id: "finish",
    eyebrow: "4 of 5",
    title: "What finish are you drawn to?",
    subtext: "This helps us steer toward flat embroidery, puff, patches, or cleaner trims.",
    options: ["Flat embroidery", "3D puff", "Patch application", "Open to guidance"],
  },
  {
    id: "priority",
    eyebrow: "5 of 5",
    title: "What matters most?",
    subtext: "This helps us balance feel, visibility, and practicality before the quote starts.",
    options: ["Premium feel", "Logo visibility", "Versatile program", "Fast easy choice"],
  },
];

export const embroideryQuizRecommendations: EmbroideryRecommendation[] = [
  {
    id: "premiumCap",
    name: "Premium Cap",
    detail: "Clean front logo",
    image: "/images/gallery/embroidery-premium-cap-feeling-swell-labbet.jpg",
    alt: "Blue and green embroidered cap photographed on a surfboard by the beach",
    position: "center 76%",
  },
  {
    id: "truckerHat",
    name: "Trucker Hat",
    detail: "Good for puff hits",
    image: "/images/gallery/embroidery-3d-embroidery-img-7457.jpg",
    alt: "Brown and white trucker hat with raised embroidery",
    position: "center 50%",
  },
  {
    id: "beanie",
    name: "Beanie",
    detail: "Tight stitched logo",
    image: "/images/gallery/embroidery-fish-at-sea-beanies.jpg",
    alt: "Fish At Sea branded knit beanies photographed on the coastline",
    position: "center 62%",
  },
  {
    id: "heavyFleece",
    name: "Crewneck",
    detail: "Easy everyday crew",
    image: "/images/gallery/embroidery-crewneck-heal-the-bay-pxl-20250909.jpg",
    alt: "Heal the Bay crewneck shown from the back with a blue graphic print",
    position: "center 34%",
  },
  {
    id: "outerwear",
    name: "Jacket",
    detail: "Layer-ready embroidery",
    image: "/images/gallery/embroidery-red-bull-jacket.jpg",
    alt: "Black Red Bull embroidered jacket shown on-model in a studio",
    position: "center 38%",
  },
  {
    id: "toteBag",
    name: "Tote or Bag",
    detail: "Easy branded utility piece",
    image: "/images/gallery/embroidery-tote-bag-verve-evergreen-sunday.jpg",
    alt: "Oversized Verve tote carried on shoulder with embroidered California to Tokyo detail",
    position: "center 58%",
  },
];

const scoreRules: Partial<
  Record<EmbroideryQuestionId, Record<string, Partial<Record<EmbroideryRecommendationId, number>>>>
> = {
  product: {
    Hats: {
      premiumCap: 4,
      truckerHat: 3,
    },
    Beanies: {
      beanie: 5,
    },
    Crewnecks: {
      heavyFleece: 5,
      outerwear: 1,
    },
    Jackets: {
      outerwear: 5,
      heavyFleece: 1,
    },
    Totes: {
      toteBag: 5,
    },
    "Mixed program": {
      premiumCap: 2,
      heavyFleece: 2,
      toteBag: 2,
      outerwear: 2,
    },
  },
  feel: {
    "Clean + premium": {
      premiumCap: 4,
      heavyFleece: 3,
      outerwear: 2,
    },
    "Structured + durable": {
      truckerHat: 3,
      outerwear: 4,
      toteBag: 2,
    },
    "Soft everyday": {
      beanie: 3,
      heavyFleece: 4,
      premiumCap: 1,
    },
    "Classic team staple": {
      premiumCap: 2,
      outerwear: 3,
      toteBag: 3,
    },
  },
  placement: {
    "Front logo": {
      premiumCap: 4,
      truckerHat: 3,
      heavyFleece: 2,
    },
    "Side or back hit": {
      premiumCap: 3,
      truckerHat: 3,
      beanie: 2,
    },
    "Small chest hit": {
      heavyFleece: 4,
      outerwear: 4,
    },
    "Patch or mixed detail": {
      truckerHat: 4,
      outerwear: 3,
      toteBag: 3,
    },
  },
  finish: {
    "Flat embroidery": {
      premiumCap: 4,
      beanie: 3,
      heavyFleece: 3,
    },
    "3D puff": {
      truckerHat: 5,
      premiumCap: 2,
    },
    "Patch application": {
      outerwear: 3,
      toteBag: 4,
      truckerHat: 3,
    },
    "Open to guidance": {
      premiumCap: 1,
      truckerHat: 1,
      beanie: 1,
      heavyFleece: 1,
      outerwear: 1,
      toteBag: 1,
    },
  },
  priority: {
    "Premium feel": {
      premiumCap: 4,
      heavyFleece: 4,
      outerwear: 2,
    },
    "Logo visibility": {
      truckerHat: 4,
      premiumCap: 3,
      toteBag: 2,
    },
    "Versatile program": {
      premiumCap: 3,
      heavyFleece: 3,
      toteBag: 3,
      outerwear: 2,
    },
    "Fast easy choice": {
      premiumCap: 2,
      toteBag: 3,
      beanie: 2,
    },
  },
};

export function getEmbroideryTopRecommendations(answers: EmbroideryQuizAnswers) {
  const scores = new Map<EmbroideryRecommendationId, number>();

  embroideryQuizRecommendations.forEach((item) => scores.set(item.id, 0));

  Object.entries(answers).forEach(([questionId, answer]) => {
    const rule = scoreRules[questionId as EmbroideryQuestionId]?.[answer];
    if (!rule) return;

    Object.entries(rule).forEach(([recommendationId, points]) => {
      scores.set(
        recommendationId as EmbroideryRecommendationId,
        (scores.get(recommendationId as EmbroideryRecommendationId) ?? 0) + (points ?? 0),
      );
    });
  });

  return embroideryQuizRecommendations
    .map((item) => ({ ...item, score: scores.get(item.id) ?? 0 }))
    .sort(
      (a, b) =>
        b.score - a.score
        || embroideryQuizRecommendations.findIndex((item) => item.id === a.id)
          - embroideryQuizRecommendations.findIndex((item) => item.id === b.id),
    )
    .slice(0, 4);
}

export function getEmbroideryRecommendationCopy(
  recommendationId: EmbroideryRecommendationId,
  answers: EmbroideryQuizAnswers,
) {
  const finish = answers.finish;
  const placement = answers.placement;
  const priority = answers.priority;

  if (recommendationId === "premiumCap") {
    return placement === "Front logo" || priority === "Premium feel"
      ? "This is the cleanest starting point when the embroidery needs to feel sharp, premium, and easy to wear."
      : "A premium cap is usually the safest embroidery lane when you want a logo-forward piece that still feels elevated.";
  }

  if (recommendationId === "truckerHat") {
    return finish === "3D puff" || priority === "Logo visibility"
      ? "This is the strongest lane when the logo wants more lift, more structure, and a little more presence from the front panel."
      : "A trucker shape works well when the embroidery should feel bolder and a little less quiet than a softer cap.";
  }

  if (recommendationId === "beanie") {
    return placement === "Side or back hit"
      ? "Beanies are great when the logo can stay tight and simple but the product still needs to feel like real merch people keep."
      : "A beanie is an easy embroidery piece when you want a seasonal staple with a smaller stitched moment.";
  }

  if (recommendationId === "heavyFleece") {
    return placement === "Small chest hit" || priority === "Premium feel"
      ? "A crewneck is the right move when the embroidery is supposed to feel subtle, wearable, and worth keeping."
      : "This is the clean apparel answer when the stitch hit is smaller and the product itself needs to carry more of the value.";
  }

  if (recommendationId === "outerwear") {
    return finish === "Patch application"
      ? "A jacket makes the most sense when the brand wants a more built-out piece with room for patches, sleeve hits, or cleaner utility details."
      : "This is the stronger team or event lane when the product needs more structure and a little more weight behind it.";
  }

  return priority === "Fast easy choice"
    ? "A tote or bag is a simple branded piece that still feels useful, and it gives the embroidery room without overcomplicating the program."
    : "Totes and bags are a good lane when the brand wants utility first, but still wants the stitched logo to feel considered.";
}

function buildProjectDefault(
  answers: EmbroideryQuizAnswers,
  topRecommendations: ReturnType<typeof getEmbroideryTopRecommendations>,
) {
  const answerLines = [
    ["Product lane", answers.product],
    ["Feel direction", answers.feel],
    ["Logo moment", answers.placement],
    ["Finish preference", answers.finish],
    ["Main priority", answers.priority],
  ]
    .filter(([, value]) => value)
    .map(([label, value]) => `- ${label}: ${value}`);

  const recommendationLines = topRecommendations.map((item, index) => `- ${index + 1}. ${item.name}`);

  return `Embroidery quiz:

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

export function ServiceEmbroideryQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<EmbroideryQuizAnswers>({});

  const isResults = step >= embroideryQuizQuestions.length;
  const currentQuestion = embroideryQuizQuestions[step];
  const topRecommendations = getEmbroideryTopRecommendations(answers);
  const progress = ((Math.min(step + 1, embroideryQuizQuestions.length) / embroideryQuizQuestions.length) * 100);

  function selectAnswer(questionId: EmbroideryQuestionId, option: string) {
    setAnswers((current) => ({ ...current, [questionId]: option }));

    window.setTimeout(() => {
      setStep((currentStep) => Math.min(currentStep + 1, embroideryQuizQuestions.length));
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
    <section id="embroidery-quiz" className="mx-auto max-w-6xl scroll-mt-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
          Embroidery Quiz
        </p>
        <h2
          className="mt-3 text-[2.45rem] uppercase leading-[0.94] text-[var(--og-blue)] md:text-[4rem]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Find the right product
          <br />
          before you quote it.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#676767] md:text-lg">
          Same quick quiz format, but tuned for embroidery. Use it to narrow the right hat,
          crewneck, beanie, jacket, or tote direction before the real quote starts.
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
                  30-second embroidery quiz
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
                  Embroidery quiz results
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
                  These are the first product directions we would put in front of you based on how
                  you want the embroidery to feel, land, and wear.
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
                      {getEmbroideryRecommendationCopy(item.id, answers)}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10">
              <ServiceLeadForm
                title="Want us to quote from here?"
                description="This goes into the same lead flow as the main project form, but includes the quiz answers and recommended product directions automatically."
                projectDefault={buildProjectDefault(answers, topRecommendations)}
                hiddenFields={{
                  source: "embroidery-quiz",
                  service: "embroidery",
                  quizType: "embroidery-quiz",
                  quizProduct: answers.product ?? "",
                  quizFeel: answers.feel ?? "",
                  quizPlacement: answers.placement ?? "",
                  quizFinish: answers.finish ?? "",
                  quizPriority: answers.priority ?? "",
                }}
                submitLabel="Get My Quote"
                showEmbroideryFields
                showArtworkUpload
              />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes quizStep {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
