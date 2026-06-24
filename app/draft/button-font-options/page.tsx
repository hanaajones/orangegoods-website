const options = [
  {
    name: "Tenon",
    className: "font-noir-alt",
    note: "Clean, modern, still branded. My pick for CTAs.",
    sampleClass: "text-sm font-bold uppercase tracking-[0.1em]",
  },
  {
    name: "Noir Pro",
    className: "font-body",
    note: "Most straightforward and utilitarian. Good if we want buttons to disappear more.",
    sampleClass: "text-sm font-semibold uppercase tracking-[0.08em]",
  },
  {
    name: "Moret",
    className: "font-subtitle-alt",
    note: "Softer/editorial. Nice for secondary links, probably too delicate for main CTAs.",
    sampleClass: "text-base font-bold normal-case tracking-normal",
  },
  {
    name: "Fat Frank",
    className: "font-display",
    note: "Current loud display style. Strong, but heavy for buttons.",
    sampleClass: "text-base font-bold uppercase tracking-normal",
  },
];

export default function ButtonFontOptionsPage() {
  return (
    <main className="min-h-screen bg-[#F3EFE7] px-4 py-12 text-[#1C1C1C] md:px-8 lg:px-12">
      <section className="mx-auto max-w-5xl">
        <p className="font-noir-alt text-sm font-bold uppercase tracking-[0.18em] text-[#FF4200]">
          Button Font Test
        </p>
        <h1 className="mt-3 max-w-3xl text-5xl leading-none text-[#0B32A0] md:text-7xl">
          CTA type options.
        </h1>
        <p className="font-noir-alt mt-5 max-w-2xl text-base leading-7 text-[#1C1C1C]/66 md:text-lg">
          Same button shapes, different font treatments for buttons like Start a Project, Contact our team,
          and Find my goods.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {options.map((option) => (
            <article
              key={option.name}
              className="rounded-lg border border-[#E4DFCD] bg-white p-5 shadow-[0_18px_50px_rgba(28,28,28,0.06)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-noir-alt text-lg font-bold text-[#0B32A0]">{option.name}</h2>
                  <p className="font-noir-alt mt-1 text-sm leading-5 text-[#1C1C1C]/58">{option.note}</p>
                </div>
                {option.name === "Tenon" ? (
                  <span className="font-noir-alt rounded-full bg-[#FF4200]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#FF4200]">
                    Pick
                  </span>
                ) : null}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="/contact"
                  className={`${option.className} ${option.sampleClass} inline-flex min-h-11 items-center justify-center rounded-xl bg-[#FF4200] px-6 text-white transition hover:-translate-y-[3px]`}
                >
                  Start a Project
                </a>
                <a
                  href="/contact"
                  className={`${option.className} ${option.sampleClass} inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-[#0B32A0]/20 bg-white px-6 text-[#0B32A0] transition hover:-translate-y-[3px]`}
                >
                  Contact our team
                </a>
              </div>

              <div className="mt-5 rounded-lg bg-[#F3EFE7] p-4">
                <p className={`${option.className} ${option.sampleClass} text-[#1C1C1C]`}>
                  Find my goods
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
