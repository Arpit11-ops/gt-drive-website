import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { ScooterModel } from "@/lib/models";

export function ModelCard({ model, priority = false }: { model: ScooterModel; priority?: boolean }) {
  return (
    <Link
      href={`/models/${model.slug}/`}
      className="group flex flex-col gap-4"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[var(--color-stage)] transition-all duration-500 ease-[var(--ease-signature)] group-hover:bg-[#eff2ef] group-hover:shadow-[0_18px_40px_rgba(17,17,17,0.10)]">
        <Image
          src={model.image}
          alt={model.shortName}
          fill
          sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="object-contain mix-blend-multiply transition-transform duration-[500ms] ease-[var(--ease-signature)] group-hover:-translate-y-2 group-hover:rotate-[-1.5deg]"
        />
        {model.status === "coming-soon" && (
          <span className="absolute left-4 top-4 rounded-sm bg-[var(--color-green-deep)] px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
            Coming soon
          </span>
        )}
        <span
          aria-hidden="true"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-ink)] text-white opacity-0 translate-y-2 transition-all duration-300 ease-[var(--ease-signature)] group-hover:opacity-100 group-hover:translate-y-0"
        >
          <ArrowUpRight size={16} weight="bold" />
        </span>
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
