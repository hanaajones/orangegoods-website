"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  getMainQuizTopProducts,
  getMainQuizWhyText,
  type MainQuizAnswers,
  type MainQuizQuestionId,
  mainQuizQuestions,
} from "./quiz-data";

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<MainQuizAnswers>({});
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const isLeadStep = step === mainQuizQuestions.length;
  const isResults = step > mainQuizQuestions.length;
  const currentQuestion = mainQuizQuestions[step];
  const recommendations = useMemo(() => getMainQuizTopProducts(answers), [answers]);
  const totalSteps = mainQuizQuestions.length + 1;
  const canViewResults =
    leadName.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadEmail.trim());
  const progress = Math.min(
    ((isResults ? totalSteps : step + 1) / totalSteps) * 100,
    100,
  );

  function selectAnswer(questionId: MainQuizQuestionId, option: string) {
    setAnswers((current) => ({ ...current, [questionId]: option }));

    window.setTimeout(() => {
      setStep((currentStep) => Math.min(currentStep + 1, mainQuizQuestions.length));
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
    setStep(mainQuizQuestions.length + 1);
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
                className="max-w-4xl text-[2.1rem] uppercase leading-[0.92] text-[var(--og-blue)] md:text-[3.9rem]"
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
                      style={{ objectPosition: product.position ?? "center" }}
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
                      {getMainQuizWhyText(product, answers)}
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
