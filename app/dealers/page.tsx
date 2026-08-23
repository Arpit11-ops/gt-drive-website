import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ContactClose } from "@/components/ContactClose";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { TaglineMarquee } from "@/components/TaglineMarquee";

export const metadata: Metadata = {
  title: "Dealership opportunity",
  description: "Explore the GT Drive pan-India dealership opportunity from Houstan Innovations LLP.",
};

const support = [
  {
    title: "Attractive dealership benefits",
    body: "A partnership opportunity in India's growing electric mobility market, structured around brochure-listed benefits for dealer partners.",
  },
  {
    title: "Marketing and branding support",
    body: "Brand assets, campaign material, and showroom guidance in the GT Drive white-and-green identity.",
  },
  {
    title: "Inventory and business support",
    body: "Business support for onboarding, inventory planning, and day-to-day dealership operations.",
  },
  {
    title: "Service and technical support",
    body: "Technical resources for after-sales service, spare parts, and reliable rider support.",
  },
  {
    title: "Training and operational guidance",
    body: "Ongoing training and operational guidance covering product, sales and service through the dealer partnership.",
  },
];

export default function DealersPage() {
  return (
    <>
      <PageHero
        theme="dark"
        eyebrow="Pan-India dealership opportunity"
        headline={
          <>
            <span className="block">Grow with an</span>
            <span className="block text-[var(--color-green)]">Indian EV</span>
            <span className="block">brand.</span>
          </>
        }
        lead="Partner with GT Drive and be part of India's growing electric mobility revolution. The brochure identifies five areas of support for prospective dealer partners."
      >
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="#dealer-enquiry"
            className="inline-flex h-[52px] items-center justify-center gap-2 rounded-sm bg-[var(--color-green)] px-6 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-deep)]"
          >
            Enquire about dealership <ArrowUpRight weight="bold" size={16} />
          </Link>
          <Link
            href="/locations/"
            className="text-sm font-semibold text-white underline underline-offset-[6px] decoration-white/50 hover:decoration-white"
          >
            View plant locations
          </Link>
        </div>
      </PageHero>

      <section className="bg-white">
        <div className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
            <div className="md:sticky md:top-24 md:self-start">
              <Reveal>
                <div className="text-sm font-medium text-[var(--color-green-deep)]">
                  Partner support
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 text-[clamp(36px,5vw,80px)] leading-[0.95] tracking-[-0.03em]">
                  A network built to move forward.
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 max-w-sm text-[15px] leading-[1.6] text-[var(--color-body)]">
                  The brochure identifies five areas of support for prospective
                  dealer partners. Each is presented below.
                </p>
              </Reveal>
            </div>
            <div className="mt-12 grid gap-y-1 md:mt-0">
              {support.map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <div className="grid grid-cols-[40px_1fr] gap-6 border-b border-[var(--color-line)] py-8">
                    <span className="text-[13px] font-medium text-[var(--color-muted)]">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--color-ink)] md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-md text-[14px] leading-[1.6] text-[var(--color-body)]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TaglineMarquee />
      <div id="dealer-enquiry">
        <ContactClose defaultType="dealer" />
      </div>
    </>
  );
}
