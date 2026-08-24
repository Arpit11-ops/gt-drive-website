import type { Metadata } from "next";
import { BatteryCharging, Factory, Headset, Storefront } from "@phosphor-icons/react/dist/ssr";
import { AboutImageHero } from "@/components/AboutImageHero";
import { ContactClose } from "@/components/ContactClose";
import { MissionStatement } from "@/components/MissionStatement";
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
      <AboutImageHero />
      <MissionStatement />

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

      <TaglineMarquee />
      <ContactClose />
    </>
  );
}
