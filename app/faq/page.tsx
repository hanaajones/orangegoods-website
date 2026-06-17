import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

const sections = [
  {
    title: "ORDERING",
    questions: [
      {
        question: "What's the minimum order quantity?",
        answer:
          "100 pieces minimum across the board. You can mix styles — for example, hats and tees in the same order — as long as the design is consistent and the total hits 100. Ready Made orders follow the same rule",
      },
      {
        question: "How long does it take?",
        answer:
          "OG Crafted typically takes 3-6 weeks from final approval. Ready Made (local embroidery or screen print) is 1-2 weeks",
      },
      {
        question: "What's the difference between OG Crafted and Ready Made?",
        answer:
          "OG Crafted is fully custom - your fabric, your shape, built from scratch. Ready Made uses premium blanks decorated locally in downtown LA for faster turns",
      },
    ],
  },
  {
    title: "DESIGN",
    questions: [
      {
        question: "Do I need to have artwork ready?",
        answer:
          "No. We offer full graphic design services. We can work from a brief, reference images, or from scratch. Vector files (.ai, .eps, .pdf) are preferred for existing artwork",
      },
      {
        question: "Can you design my merch for me?",
        answer: "Yes. Check out our Design page for packages and pricing",
      },
    ],
  },
  {
    title: "PRICING",
    questions: [
      {
        question: "How is pricing determined?",
        answer:
          "Pricing depends on product, quantity, materials, and decoration. We quote every project individually to make sure it's accurate",
      },
      {
        question: "Are there hidden fees?",
        answer:
          "No. Our quotes are all-in - product, decoration, and standard US shipping included. No setup fees, no surprise charges",
      },
      {
        question: "What's your payment structure?",
        answer: "We require a deposit to start. Full payment before shipment",
      },
    ],
  },
  {
    title: "SHIPPING",
    questions: [
      {
        question: "Do you ship internationally?",
        answer:
          "We primarily ship to US addresses. Ask about international shipping when you start a project",
      },
      {
        question: "Can I pick up locally in LA?",
        answer:
          "Yes. We're based in downtown Los Angeles. Local pickup is available for Ready Made orders",
      },
    ],
  },
  {
    title: "PRODUCTS",
    questions: [
      {
        question: "What products do you offer?",
        answer:
          "Hats, apparel, socks, drinkware, bags, accessories, packaging, blankets, and more. Check our goods pages for specifics",
      },
      {
        question: "Can I see samples before ordering?",
        answer:
          "Yes. We can provide samples for most products. Ask about sample availability when you start your project",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <main className="pb-24 md:pb-0">
      <section className="bg-[var(--og-blue)] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-5xl text-5xl leading-none text-white md:text-6xl lg:text-7xl">
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </div>
      </section>

      <Reveal className="bg-[var(--og-warm-grey)] px-4 py-16 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto max-w-4xl">
          <div className="grid gap-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-4xl leading-none text-[var(--og-orange)] md:text-5xl">
                  {section.title}
                </h2>
                <div className="mt-5 grid gap-3">
                  {section.questions.map((item) => (
                    <details
                      key={item.question}
                      className="group border border-[#0B32A0]/20 bg-white/75 p-5"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-[var(--og-blue)] marker:hidden">
                        <span>{item.question}</span>
                        <span className="text-2xl text-[var(--og-orange)] transition group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-4 border-t border-[#0B32A0]/15 pt-4 text-base leading-7 text-[var(--og-muted)]">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <CTASection
        title="Still have questions?"
        description="Send us a note and we'll point you in the right direction"
        buttonLabel="Contact Us"
        buttonHref="/contact"
      />
    </main>
  );
}
