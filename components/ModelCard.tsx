import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { ScooterModel } from "@/lib/models";
import { asset } from "@/lib/asset";

export function ModelCard({
  model,
  priority = false,
  featured = false,
}: {
  model: ScooterModel;
  priority?: boolean;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/models/${model.slug}/`}
      data-motion-card
      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-black/[0.08] bg-white shadow-[0_8px_24px_rgba(17,17,17,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-green)]/40 hover:shadow-[0_18px_40px_rgba(17,17,17,0.10)]"
    >
      <div className="relative aspect-[1.25/1] overflow-hidden bg-[var(--color-stage)] transition-colors duration-500 ease-[var(--ease-signature)] group-hover:bg-[#eff2ef]">
        <Image
          src={asset(model.image)}
          alt={model.shortName}
          fill
          sizes={featured ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"}
          priority={priority}
          className="object-contain p-0 mix-blend-multiply transition-transform duration-[500ms] ease-[var(--ease-signature)] group-hover:scale-[1.035] group-hover:rotate-[-1deg]"
        />
        {model.status === "coming-soon" && (
          <span className="absolute left-4 top-4 rounded-sm bg-[var(--color-green-deep)] px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
            Coming soon
          </span>
        )}
        <span
          aria-hidden="true"
          className="absolute right-4 top-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-[var(--color-ink)] text-white opacity-0 transition-all duration-300 ease-[var(--ease-signature)] group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ArrowUpRight size={16} weight="bold" />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-[clamp(1.4rem,2vw,2rem)] font-extrabold leading-none tracking-[-0.04em]">{model.shortName}</h3>
        </div>
        {model.code && (
          <span className="text-xs font-medium text-[var(--color-muted)]">
            Model {model.code}
          </span>
        )}
        <p className="max-w-sm text-[13px] leading-[1.6] text-[var(--color-body)]">
        {model.lead}
        </p>
        <span className="mt-auto inline-flex items-center gap-2 pt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-green-deep)] transition-colors group-hover:text-[var(--color-ink)]">
          View model <ArrowUpRight size={14} weight="bold" />
        </span>
      </div>
    </Link>
  );
}
