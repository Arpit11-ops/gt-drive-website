import { ModelCard } from "@/components/ModelCard";
import { models } from "@/lib/models";

export function ModelRange() {
  return (
    <section
      aria-labelledby="range-headline"
      className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
        <h2
          id="range-headline"
          className="max-w-[720px] text-[clamp(40px,5.5vw,84px)] leading-[0.98]"
        >
          Nine confirmed models. <span className="text-[var(--color-green)]">One truth.</span>
        </h2>
        <p className="max-w-sm text-[15px] leading-[1.6] text-[var(--color-body)] md:text-base">
          Every scooter on the range is drawn from the GT Drive brochure —
          nothing invented, nothing borrowed.
        </p>
      </div>
      <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {models.map((model, index) => (
          <ModelCard key={model.slug} model={model} priority={index < 3} />
        ))}
      </div>
    </section>
  );
}
