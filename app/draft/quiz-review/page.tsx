"use client";

import Image from "next/image";
import {
  getMainQuizTopProducts,
  getMainQuizWhyText,
  type MainQuizAnswers,
  mainQuizProducts,
  mainQuizQuestions,
} from "@/app/quiz/quiz-data";
import {
  type EmbroideryQuizAnswers,
  embroideryQuizQuestions,
  embroideryQuizRecommendations,
  getEmbroideryRecommendationCopy,
  getEmbroideryTopRecommendations,
} from "@/app/services/_components/ServiceEmbroideryQuiz";
import {
  type ScreenPrintQuizAnswers,
  getScreenPrintRecommendationCopy,
  getScreenPrintTopRecommendations,
  screenPrintQuizQuestions,
  screenPrintQuizRecommendations,
} from "@/app/services/_components/ServiceBlankQuiz";

function buildAnswerPaths<TQuestion extends { id: string; options: string[] }>(
  questions: TQuestion[],
) {
  const paths: Array<Record<string, string>> = [];

  function walk(index: number, current: Record<string, string>) {
    if (index >= questions.length) {
      paths.push(current);
      return;
    }

    const question = questions[index];
    question.options.forEach((option) => {
      walk(index + 1, { ...current, [question.id]: option });
    });
  }

  walk(0, {});

  return paths;
}

function formatPath(
  questions: Array<{ id: string; title: string }>,
  answers: Record<string, string>,
) {
  return questions
    .map((question) => `${question.title}: ${answers[question.id]}`)
    .join(" | ");
}

function uniqueStrings(values: string[]) {
  return Array.from(new Set(values));
}

const screenPrintAnswerPaths = buildAnswerPaths(screenPrintQuizQuestions) as ScreenPrintQuizAnswers[];
const embroideryAnswerPaths = buildAnswerPaths(embroideryQuizQuestions) as EmbroideryQuizAnswers[];
const mainQuizAnswerPaths = buildAnswerPaths(mainQuizQuestions) as MainQuizAnswers[];

const screenPrintReview = screenPrintQuizRecommendations.map((recommendation) => {
  const matches = screenPrintAnswerPaths.filter(
    (answers) => getScreenPrintTopRecommendations(answers)[0]?.id === recommendation.id,
  );

  return {
    ...recommendation,
    topResultCount: matches.length,
    copyVariants: uniqueStrings(
      matches.map((answers) => getScreenPrintRecommendationCopy(recommendation.id, answers)),
    ),
    examplePaths: uniqueStrings(
      matches.map((answers) => formatPath(screenPrintQuizQuestions, answers as Record<string, string>)),
    ).slice(0, 4),
  };
});

const embroideryReview = embroideryQuizRecommendations.map((recommendation) => {
  const matches = embroideryAnswerPaths.filter(
    (answers) => getEmbroideryTopRecommendations(answers)[0]?.id === recommendation.id,
  );

  return {
    ...recommendation,
    topResultCount: matches.length,
    copyVariants: uniqueStrings(
      matches.map((answers) => getEmbroideryRecommendationCopy(recommendation.id, answers)),
    ),
    examplePaths: uniqueStrings(
      matches.map((answers) => formatPath(embroideryQuizQuestions, answers as Record<string, string>)),
    ).slice(0, 4),
  };
});

const mainQuizReview = mainQuizProducts.map((product) => {
  const matches = mainQuizAnswerPaths.filter(
    (answers) => getMainQuizTopProducts(answers)[0]?.id === product.id,
  );

  return {
    ...product,
    detail: product.category,
    position: product.position ?? "center",
    topResultCount: matches.length,
    copyVariants: uniqueStrings(
      matches.map((answers) => getMainQuizWhyText(product, answers)),
    ),
    examplePaths: uniqueStrings(
      matches.map((answers) => formatPath(mainQuizQuestions, answers as Record<string, string>)),
    ).slice(0, 4),
  };
});

function QuestionBlock({
  title,
  questions,
}: {
  title: string;
  questions: Array<{ eyebrow: string; title: string; subtext: string; options: string[] }>;
}) {
  return (
    <section className="rounded-3xl border border-[#d7d0c5] bg-white p-6">
      <h2 className="text-2xl font-semibold text-[#0B32A0]">{title}</h2>
      <div className="mt-5 grid gap-4">
        {questions.map((question) => (
          <article key={question.title} className="rounded-2xl border border-[#ece7de] bg-[#faf7f1] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF4200]">
              {question.eyebrow}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-[#0B32A0]">{question.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#5e5a54]">{question.subtext}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {question.options.map((option) => (
                <span
                  key={option}
                  className="rounded-full border border-[#cfd8f6] bg-white px-3 py-1.5 text-sm text-[#0B32A0]"
                >
                  {option}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ResultBlock({
  title,
  items,
}: {
  title: string;
  items: Array<{
    id: string;
    name: string;
    detail: string;
    image: string;
    alt: string;
    position?: string;
    topResultCount: number;
    copyVariants: string[];
    examplePaths: string[];
  }>;
}) {
  return (
    <section className="rounded-3xl border border-[#d7d0c5] bg-white p-6">
      <h2 className="text-2xl font-semibold text-[#0B32A0]">{title}</h2>
      <div className="mt-5 grid gap-5">
        {items.map((item) => (
          <article key={item.id} className="overflow-hidden rounded-3xl border border-[#e5ddd2] bg-[#faf7f1]">
            <div className="grid gap-0 lg:grid-cols-[22rem_1fr]">
              <div className="relative aspect-[4/3] bg-[#e9dfcf]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 22rem"
                  className="object-cover"
                  style={{ objectPosition: item.position ?? "center" }}
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF4200]">
                  {item.detail}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-[#0B32A0]">{item.name}</h3>
                <p className="mt-2 text-sm text-[#5e5a54]">
                  Top result on {item.topResultCount} full answer paths
                </p>

                <div className="mt-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0B32A0]">
                    Copy variants
                  </p>
                  <div className="mt-2 grid gap-2">
                    {item.copyVariants.map((copy) => (
                      <p key={copy} className="rounded-2xl border border-[#ece7de] bg-white p-3 text-sm leading-6 text-[#1C1C1C]">
                        {copy}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0B32A0]">
                    Example answer paths
                  </p>
                  <div className="mt-2 grid gap-2">
                    {item.examplePaths.map((path) => (
                      <p key={path} className="rounded-2xl border border-[#ece7de] bg-white p-3 text-sm leading-6 text-[#5e5a54]">
                        {path}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function QuizReviewPage() {
  return (
    <main className="min-h-screen bg-[#f3efe7] px-4 py-10 text-[#1C1C1C] md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-[#d7d0c5] bg-white p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF4200]">
            Internal Draft
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-[#0B32A0] md:text-5xl">
            Quiz review page
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-7 text-[#5e5a54]">
            This page is just for approving the current quiz logic. It shows each question, every
            answer option, every result card, the current photo/title/detail, the copy variants,
            and example answer paths that make that result rise to the top.
          </p>
        </div>

        <div className="mt-8 grid gap-8">
          <QuestionBlock title="Screen print quiz questions" questions={screenPrintQuizQuestions} />
          <ResultBlock title="Screen print result cards" items={screenPrintReview} />
          <QuestionBlock title="Embroidery quiz questions" questions={embroideryQuizQuestions} />
          <ResultBlock title="Embroidery result cards" items={embroideryReview} />
          <QuestionBlock title="Main merch quiz questions" questions={mainQuizQuestions} />
          <ResultBlock title="Main merch quiz result cards" items={mainQuizReview} />
        </div>
      </div>
    </main>
  );
}
