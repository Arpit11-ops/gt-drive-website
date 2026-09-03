import type { Metadata } from "next";
import { ContactClose } from "@/components/ContactClose";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { ModelCard } from "@/components/ModelCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { TaglineMarquee } from "@/components/TaglineMarquee";
import { models } from "@/lib/models";

export const metadata: Metadata = {
  title: "Electric scooter range",
  description: "Explore every GT Drive electric scooter — full specifications, features and colour options across the range.",
};

export default function ModelsPage() {
  return (
    <>
      <PageHero
        eyebrow="The GT Drive electric range"
        headline={
          <>
            <MaskReveal as="span" className="block">
              Nine electric scooters.
            </MaskReveal>
            <MaskReveal
              as="span"
              className="block text-[var(--color-green)]"
              delay={140}
            >
              The full range.
            </MaskReveal>
          </>
        }
        lead="The full GT Drive range. Nine scooters in production, one on the way — with complete specifications, features and real colour options for each."
      />
      <section className="mx-auto max-w-[var(--container-page)] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((model, index) => (
            <Reveal key={model.slug} delay={(index % 3) * 100}>
              <ModelCard model={model} priority={index < 3} />
            </Reveal>
          ))}
        </div>
      </section>
      <TaglineMarquee />
      <ContactClose />
    </>
  );
}
