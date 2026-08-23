import { ModelCard } from "@/components/ModelCard";
import { Reveal } from "@/components/Reveal";
import { models } from "@/lib/models";

export function ModelRange() {
  return (
    <section
      aria-labelledby="range-headline"
      className="mx-auto max-w-[var(--container-page)] px-6 py-28 md:px-10 md:py-40"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
        <Reveal>
          <h2
            id="range-headline"
            className="max-w-[720px] text-[clamp(44px,6vw,96px)] leading-[0.94] tracking-[-0.03em]"
          >
            Nine confirmed models. <span className="text-[var(--color-green)]">One truth.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="max-w-sm text-[15px] leading-[1.6] text-[var(--color-body)] md:text-base">
            Every scooter on the range is drawn from the GT Drive brochure —
            nothing invented, nothing borrowed.
          </p>
        </Reveal>
      </div>
      <div className="mt-20 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {models.map((model, index) => (
          <Reveal key={model.slug} delay={(index % 3) * 100}>
            <ModelCard model={model} priority={index < 3} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
