import Image from "next/image";
import Link from "next/link";
import type { ScooterModel } from "@/lib/models";

export function ModelCard({ model, priority = false }: { model: ScooterModel; priority?: boolean }) {
  return (
    <Link
      href={`/models/${model.slug}/`}
      className="group flex flex-col gap-4"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-stage)]">
        <Image
          src={model.image}
          alt={model.shortName}
          fill
          sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="object-contain transition-transform duration-[250ms] ease-[var(--ease-signature)] group-hover:-translate-y-1"
        />
        {model.status === "coming-soon" && (
          <span className="absolute left-4 top-4 rounded-sm bg-[var(--color-green-deep)] px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
            Coming soon
          </span>
        )}
      </div>
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-2xl font-semibold leading-none">{model.shortName}</h3>
        {model.code && (
          <span className="text-xs font-medium text-[var(--color-muted)]">
            Model {model.code}
          </span>
        )}
      </div>
      <p className="max-w-xs text-sm leading-[1.55] text-[var(--color-body)]">
        {model.lead}
      </p>
    </Link>
  );
}
