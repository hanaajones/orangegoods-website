import Link from "next/link";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";

export const metadata = {
  title: "Legal — Orange Goods",
  description: "Terms + Conditions, Privacy Policy, and Cookie Notice for Orange Goods",
};

const sections = [
  {
    title: "Terms + Conditions",
    items: [
      {
        heading: "1. Orders + Production",
        body: "All goods are made-to-order unless otherwise stated. Full payment is required before production begins unless agreed in writing. Production starts only after written artwork approval and payment confirmation. Once production has begun, orders cannot be canceled or modified",
      },
      {
        heading: "2. Artwork Approval",
        body: "All artwork, placement, spelling, sizing, colors, and specifications must be approved in writing before production. Approved proofs are final. Orange Goods is not responsible for errors present in approved artwork",
      },
      {
        heading: "3. Production Variations",
        body: "Custom manufacturing includes normal industry tolerances. Minor variations are not considered defects, including slight color differences between screens and physical goods, fabric shade differences between dye lots, placement tolerances, embroidery density or thread variation, size tolerances, and natural material inconsistencies. These variations are inherent in custom production and are accepted upon approval",
      },
      {
        heading: "4. Turnaround + Delivery",
        body: "Estimated timelines are not guaranteed. Delays may occur due to production complexity, material shortages, freight delays, customs processing, carrier issues, weather events, or other circumstances outside our control. While certain delays may be outside our control, we take proactive steps to communicate clearly, problem-solve quickly, and ensure the best possible outcome for your project",
      },
      {
        heading: "5. Shipping + Risk of Loss",
        body: "Risk transfers to the client once goods are delivered to the carrier. Orange Goods is not responsible for carrier delays, lost shipments, or delivery issues caused by incorrect addresses provided by the client. If an issue arises in transit, we assist in filing claims, communicating with carriers, and working toward a resolution whenever possible",
      },
      {
        heading: "6. Defects + Returns",
        body: "If you believe your order contains a manufacturing defect, notify us within 3 days of delivery and provide clear photos. Defective items must be returned to Orange Goods before replacements or credits are issued. Custom goods are otherwise non-returnable due to their made-to-order nature. If a legitimate production issue occurs, we will review it promptly and determine the best path forward to make it right",
      },
      {
        heading: "7. Payment Terms",
        body: "We accept payment via Stripe, QuickBooks, Melio, or other approved processors. By submitting payment, you authorize Orange Goods to charge your selected payment method. Overdue invoices may accrue interest at the maximum rate permitted by law",
      },
      {
        heading: "8. Chargebacks",
        body: "By placing an order, you agree not to initiate a chargeback once production has begun. Written approvals and confirmed invoices constitute contractual agreement. Improper chargebacks may result in collections and recovery of associated fees",
      },
      {
        heading: "9. Intellectual Property",
        body: "You represent that you own or have the legal right to use all submitted artwork. You agree to indemnify Orange Goods against any claims related to intellectual property infringement arising from client-provided designs",
      },
      {
        heading: "10. Content + Marketing Usage",
        body: "Unless otherwise agreed in writing, Orange Goods may photograph, film, or otherwise document completed products for use in website galleries, social media, email marketing, advertising, internal portfolio use, and sales materials. If your project is confidential, please notify us in writing before production begins",
      },
      {
        heading: "11. Limitation of Liability",
        body: "To the fullest extent permitted by law, Orange Goods' total liability shall not exceed the amount paid for the specific order in question. We are not liable for indirect or consequential damages such as lost profits or missed events",
      },
      {
        heading: "12. Governing Law",
        body: "These Terms are governed by the laws of the State of California. Any disputes shall be resolved in California",
      },
    ],
  },
  {
    title: "Privacy Policy",
    items: [
      {
        heading: "1. Information We Collect",
        body: "We may collect name, email address, phone number, company name, billing and shipping address, IP address, and website usage data. Payment information is securely processed by third-party providers including Stripe, QuickBooks, and Melio. Orange Goods does not store full credit card information",
      },
      {
        heading: "2. How We Use Information",
        body: "We use collected information to process orders, communicate about projects, provide customer support, improve our website, send marketing communications (if opted in), and run advertising campaigns",
      },
      {
        heading: "3. Marketing Communications",
        body: "If you opt in, we may send promotional emails or SMS messages. You may unsubscribe at any time using the link in emails or by replying STOP to SMS messages",
      },
      {
        heading: "4. Cookies + Tracking",
        body: "We use cookies and tracking technologies including Google Analytics and Meta Pixel to measure performance and improve advertising. You may disable cookies in your browser settings",
      },
      {
        heading: "5. Third-Party Services",
        body: "We may share necessary information with trusted service providers including Stripe, QuickBooks, Melio, HubSpot, Typeform, Klaviyo, shipping carriers, and advertising platforms. We do not sell personal data",
      },
      {
        heading: "6. Data Security",
        body: "We implement commercially reasonable safeguards. While no system is completely secure, we take reasonable steps to protect your information",
      },
      {
        heading: "7. California Privacy Rights",
        body: "California residents may request access, deletion, or correction of personal data by contacting hello@orangegoods.co",
      },
      {
        heading: "8. Updates",
        body: "We may update this Legal page periodically. Continued use of the website constitutes acceptance of updates",
      },
    ],
  },
  {
    title: "Cookie Notice",
    items: [
      {
        heading: "",
        body: "Orange Goods uses cookies and tracking technologies to enhance your browsing experience, analyze traffic, and measure advertising performance. By continuing to use this website, you consent to our use of cookies as described above. You may manage or disable cookies in your browser settings",
      },
    ],
  },
];

export default function LegalPage() {
  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/faq-fish-at-sea-mg-6314.jpg"
          position="center 42%"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/42" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/62 via-[#1C1C1C]/46 to-[#1C1C1C]/20" />
        <div className="relative mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
              Policies + Terms
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
              Legal
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/82 md:text-xl">
              Last updated: February 12, 2026. By accessing or using orangegoods.co, you agree to the following terms and policies.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-14 md:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl space-y-16">
          {sections.map((section) => (
            <div key={section.title}>
              <h2
                className="mb-8 text-2xl font-extrabold uppercase tracking-tight text-[#FF4200]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {section.title}
              </h2>
              <div className="space-y-8">
                {section.items.map((item, i) => (
                  <div key={i} className="border-t border-[#1C1C1C]/10 pt-6">
                    {item.heading && (
                      <h3 className="mb-2 text-sm font-bold uppercase tracking-[0.15em] text-[#1C1C1C]">
                        {item.heading}
                      </h3>
                    )}
                    <p className="text-base leading-7 text-[#1C1C1C]/70">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1C1C1C]/10 px-4 py-12 text-center md:px-8">
        <p className="text-base text-[#1C1C1C]/60">
          Questions? Email us at{" "}
          <a href="mailto:hello@orangegoods.co" className="text-[#FF4200] hover:underline">
            hello@orangegoods.co
          </a>{" "}
          or{" "}
          <Link href="/contact" className="text-[#FF4200] hover:underline">
            contact us here
          </Link>
          
        </p>
      </section>
    </main>
  );
}
