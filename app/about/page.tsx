import type { Metadata } from "next";
import { BatteryCharging, Factory, Headset, Storefront } from "@phosphor-icons/react/dist/ssr";
import { ContactClose } from "@/components/ContactClose";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { TaglineMarquee } from "@/components/TaglineMarquee";

export const metadata: Metadata = {
  title: "About",
  description: "About GT Drive and Houstan Innovations LLP — an Indian electric two-wheeler brand headquartered in Greater Noida.",
};

const strengths = [
  {
    icon: BatteryCharging,
    title: "In-house lithium battery",
    body: "A core capability supporting the electric two-wheeler ecosystem, developed and integrated in-house.",
  },
  {
    icon: Factory,
    title: "Advanced manufacturing",
    body: "Infrastructure focused on electric two-wheeler production across five Indian states.",
  },
  {
    icon: Storefront,
    title: "Wide dealer network",
    body: "A growing network connecting the brand with riders and business partners across India.",
  },
  {
    icon: Headset,
    title: "Reliable service support",
    body: "Support designed around dependable ownership and long-term partnership.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Houstan Innovations LLP"
        headline={
          <>
            <span className="block">Driving a</span>
            <span className="block text-[var(--color-green)]">cleaner tomorrow.</span>
          </>
        }
        lead="GT Drive is the electric two-wheeler brand of Houstan Innovations LLP, headquartered in Greater Noida. Built around in-house battery capability, manufacturing infrastructure, and a growing dealer network."
      />

      <section className="border-t border-[var(--color-line)] bg-white">
        <div className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:grid md:grid-cols-[1fr_1.4fr] md:gap-16 md:px-10 md:py-32">
          <Reveal>
            <div className="text-sm font-medium text-[var(--color-green-deep)]">
              Who we are
            </div>
          </Reveal>
          <div className="mt-10 md:mt-0">
            <Reveal>
              <h2 className="text-[clamp(36px,5vw,80px)] leading-[0.95] tracking-[-0.03em]">
                An Indian electric mobility brand.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-10 max-w-[600px] text-[clamp(18px,1.8vw,24px)] leading-[1.6] text-[var(--color-body)]">
                GT Drive is building electric scooters backed by in-house
                battery capability, manufacturing infrastructure, and a growing
                network across India — driven by innovation, sustainability and
                a vision for a cleaner tomorrow.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-stage)]">
        <div className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <div className="text-sm font-medium text-[var(--color-green-deep)]">
              Our foundation
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 max-w-[860px] text-[clamp(36px,5vw,80px)] leading-[0.95] tracking-[-0.03em]">
              Product, production, and support.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {strengths.map(({ icon: Icon, title, body }, index) => (
              <Reveal key={title} delay={(index % 2) * 80}>
                <div className="flex flex-col gap-5 border-t border-[var(--color-line)] pt-10">
                  <Icon
                    weight="light"
                    className="h-8 w-8 text-[var(--color-green)]"
                  />
                  <h3 className="text-2xl font-semibold text-[var(--color-ink)]">
                    {title}
                  </h3>
                  <p className="max-w-md text-[15px] leading-[1.6] text-[var(--color-body)]">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-green-deep)] text-white">
        <div className="mx-auto grid max-w-[var(--container-page)] gap-16 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
          <div>
            <Reveal>
              <div className="text-sm font-medium text-white/70">Mission</div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-[clamp(32px,4vw,60px)] leading-[0.95] tracking-[-0.03em]">
                Accessible electric mobility.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-md text-[15px] leading-[1.65] text-white/80 md:text-base">
                To make electric mobility more accessible with reliable
                products, strong technology, and dependable support for riders
                and business partners across India.
              </p>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <div className="text-sm font-medium text-white/70">Vision</div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-[clamp(32px,4vw,60px)] leading-[0.95] tracking-[-0.03em]">
                A trusted Indian EV brand.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-md text-[15px] leading-[1.65] text-white/80 md:text-base">
                To build a trusted Indian electric mobility brand with a strong
                product, manufacturing, and dealership ecosystem that makes EV
                adoption simpler and more accessible.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <TaglineMarquee />
      <ContactClose />
    </>
  );
}
