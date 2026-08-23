import Link from "next/link";
import { ModelCard } from "@/components/ModelCard";
import { models } from "@/lib/models";

export function RelatedModels({ currentSlug }: { currentSlug: string }) {
  const related = models.filter((model) => model.slug !== currentSlug).slice(0, 3);
  return (
    <section className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:px-10 md:py-32">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="text-[clamp(36px,4.5vw,72px)] leading-[0.95] tracking-[-0.03em]">
          Continue exploring.
        </h2>
        <Link
          href="/models/"
          className="text-sm font-semibold text-[var(--color-green-deep)] underline underline-offset-[6px]"
        >
          View the full range
        </Link>
      </div>
      <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((model) => (
          <ModelCard key={model.slug} model={model} />
        ))}
      </div>
    </section>
  );
}
