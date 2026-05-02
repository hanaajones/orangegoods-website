type LandingPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function LandingPageTemplate({
  params,
}: LandingPageProps) {
  const { slug } = await params;

  return (
    <main className="px-4 pb-24 pt-10 md:px-8 md:pt-16 lg:px-12">
      <section className="mx-auto max-w-4xl rounded-[2rem] border border-[var(--og-sand)] bg-[rgba(255,248,241,0.88)] p-8 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
          Landing Page Template
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[var(--og-blue)]">
          {slug}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-7 text-[var(--og-muted)]">
          Scaffolded route for future campaign-specific landing pages. Content can
          be hardcoded now and extracted into a CMS later.
        </p>
      </section>
    </main>
  );
}
