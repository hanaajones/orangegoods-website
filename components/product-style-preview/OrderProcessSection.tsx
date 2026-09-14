import { ogEyebrowClass } from "@/components/og/visual-primitives";

type OrderProcessStep = {
  title: string;
  detail: string;
};

export function OrderProcessSection({
  isImmersiveExperience,
  processCardClass,
  sampleType,
  steps,
}: {
  isImmersiveExperience: boolean;
  processCardClass: string;
  sampleType: string;
  steps: OrderProcessStep[];
}) {
  return (
    <section className="border-t border-[#081E6F]/10 pt-8">
      <div>
        <p className={ogEyebrowClass.orange}>Order process</p>
        <p className="mt-2 text-lg font-semibold text-[var(--og-blue)]">
          What happens after you start your order
        </p>
      </div>
      <div className={`mt-4 grid gap-4 md:grid-cols-2 ${sampleType !== "none" ? "xl:grid-cols-4" : "xl:grid-cols-3"}`}>
        {steps.map((step, index) => (
          <div key={step.title} className={processCardClass}>
            <p className={ogEyebrowClass.orangeWide}>Step {index + 1}</p>
            <p className={isImmersiveExperience ? "mt-3 text-xl font-semibold leading-tight" : "mt-3 text-lg font-semibold leading-tight"}>{step.title}</p>
            <p className={isImmersiveExperience ? "mt-2 text-[15px] leading-6 text-[#4b4b4b]" : "mt-2 text-sm leading-5 text-[#4b4b4b]"}>{step.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
