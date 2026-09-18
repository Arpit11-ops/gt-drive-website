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
      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-24 pt-16 md:px-10 md:pb-36 md:pt-24">
        <div className="mb-12 flex flex-col justify-between gap-8 border-y border-black/10 py-5 text-sm md:mb-16 md:flex-row md:items-center">
          <p className="max-w-md leading-[1.55] text-[var(--color-body)]">
            One range, tuned for different kinds of everyday movement.
          </p>
          <div className="flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
            <span>models</span>
            <span className="hidden h-4 w-px bg-black/15 sm:block" />
            <span>2025 / 26 range</span>
          </div>
        </div>
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-24">
          {models.map((model, index) => (
            <Reveal key={model.slug} delay={(index % 3) * 100} className={index === 0 ? "lg:col-span-2" : ""}>
              <ModelCard model={model} featured={index === 0} priority={index < 3} />
            </Reveal>
          ))}
        </div>
      </section>
      <TaglineMarquee />
      <ContactClose />
    </>
  );
}
