import type { Metadata } from "next";
import { BatteryCharging, Factory, Headset, Storefront } from "@phosphor-icons/react/dist/ssr";
import { AboutDealerInvite } from "@/components/AboutDealerInvite";
import { AboutFootprintBand } from "@/components/AboutFootprintBand";
import { AboutImageHero } from "@/components/AboutImageHero";
import { AboutRangeStrip } from "@/components/AboutRangeStrip";
import { ContactClose } from "@/components/ContactClose";
import { MissionStatement } from "@/components/MissionStatement";
import { Reveal } from "@/components/Reveal";
import { TaglineMarquee } from "@/components/TaglineMarquee";

export const metadata: Metadata = {
  title: "About",
  description:
    "About GT Drive and Houstan Innovations LLP — an Indian electric two-wheeler brand headquartered in Greater Noida, with manufacturing across five states and a nine-model catalogue.",
};

const strengths = [
  {
    icon: BatteryCharging,
    title: "In-house lithium battery",
    body: "Battery capability developed and integrated within the Houstan Innovations ecosystem — a core part of every GT Drive scooter.",
  },
  {
    icon: Factory,
    title: "Advanced manufacturing",
    body: "Production and assembly across five Indian states, focused specifically on the electric two-wheeler platform.",
  },
  {
    icon: Storefront,
    title: "Wide dealer network",
    body: "A growing pan-India dealer network — the ground-level bridge between GT Drive and every rider.",
  },
  {
    icon: Headset,
    title: "Reliable service support",
    body: "Ownership backed by service and technical support designed for the long run, not just the sale.",
  },
];

export default function AboutPage() {
  return (
    <>
      <AboutImageHero />
      <MissionStatement />

      <section className="bg-white">
        <div className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <h2 className="max-w-[860px] text-[clamp(36px,5vw,80px)] leading-[0.95] tracking-[-0.03em] text-[var(--color-ink)]">
              Product, production,{" "}
              <span className="text-[var(--color-green)]">and support.</span>
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

      <AboutFootprintBand />
      <AboutRangeStrip />
      <AboutDealerInvite />

      <TaglineMarquee />
      <ContactClose />
    </>
  );
}
