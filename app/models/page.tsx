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
  description: "Compare GT Drive electric scooters by specifications, features and available colours.",
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
              Find your GT Drive.
            </MaskReveal>
          </>
        }
        lead="Explore nine electric scooters from the GT Drive range. Compare each model’s design, features, specifications and colours."
      />
      <Reveal>
      <section className="bg-white">
        <div className="mx-auto max-w-[var(--container-page)] px-6 pb-24 pt-12 md:px-10 md:pb-32 md:pt-16">
        <div className="mb-12 flex flex-col justify-between gap-8 rounded-2xl border border-black/[0.08] bg-[var(--color-stage)] px-5 py-5 text-sm shadow-[0_8px_24px_rgba(17,17,17,0.03)] md:mb-16 md:flex-row md:items-center md:px-7">
          <p className="max-w-md leading-[1.55] text-[var(--color-body)]">
            Start with the details that matter to you, then contact GT Drive for more information about a model.
          </p>
          <div className="flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
            <span>models</span>
            <span className="hidden h-4 w-px bg-black/15 sm:block" />
            <span>GT Drive catalogue</span>
          </div>
        </div>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-green-deep)]">The range</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-[-0.04em] md:text-4xl">Choose your everyday ride.</h2>
          </div>
          <span className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)] sm:block">09 models</span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((model, index) => (
            <Reveal key={model.slug} delay={(index % 3) * 70}>
              <ModelCard model={model} priority={index < 3} />
            </Reveal>
          ))}
        </div>
        </div>
      </section>
      </Reveal>
      <Reveal delay={80}><TaglineMarquee /></Reveal>
      <Reveal delay={80}><ContactClose /></Reveal>
    </>
  );
}
