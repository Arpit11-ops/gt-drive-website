import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { featuredModels } from "@/lib/navigation";

type ModelMegaMenuProps = {
  id: string;
  open: boolean;
  onNavigate: () => void;
};

export function ModelMegaMenu({ id, open, onNavigate }: ModelMegaMenuProps) {
  if (!open) return null;

  return (
    <nav
      id={id}
      aria-label="Models menu"
      className="absolute left-0 right-0 top-11 hidden border-y border-[var(--color-line)] bg-white shadow-[0_24px_50px_rgba(17,17,17,0.08)] md:block"
    >
      <div className="mx-auto grid max-w-[var(--container-page)] grid-cols-[1fr_280px] gap-10 px-10 py-8">
        <div className="grid grid-cols-3 divide-x divide-[var(--color-line)]">
          {featuredModels.map((model) => (
            <Link
              key={model.slug}
              href={`/models/${model.slug}/`}
              onClick={onNavigate}
              className="group grid grid-cols-[116px_1fr] gap-4 px-5 first:pl-0 last:pr-0"
            >
              <div className="relative flex min-h-28 items-center justify-center bg-[var(--color-stage)]">
                <Image
                  src={model.image}
                  alt=""
                  fill
                  sizes="116px"
                  className="object-contain p-2 transition-transform duration-500 ease-[var(--ease-signature)] group-hover:-translate-y-1"
                />
              </div>
              <div className="flex min-w-0 flex-col items-start justify-center">
                <span className="font-display text-[17px] font-semibold leading-none text-[var(--color-ink)] group-hover:text-[var(--color-green-deep)]">
                  {model.shortName}
                </span>
                <span className="mt-2 line-clamp-2 text-[12px] leading-[1.45] text-[var(--color-body)]">
                  {model.lead}
                </span>
                <span className="mt-3 text-[12px] font-semibold text-[var(--color-green-deep)]">
                  View model →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="border-l border-[var(--color-line)] pl-8">
          <div className="flex flex-col gap-3">
            <Link
              href="/models/"
              onClick={onNavigate}
              className="flex items-center justify-between border border-[var(--color-line)] px-4 py-4 text-[13px] font-semibold text-[var(--color-ink)] transition-colors duration-300 ease-[var(--ease-signature)] hover:border-[var(--color-green-deep)] hover:text-[var(--color-green-deep)]"
            >
              View all models
              <ArrowRight size={16} weight="bold" aria-hidden="true" />
            </Link>
            <Link
              href="/compare/"
              onClick={onNavigate}
              className="flex items-center justify-between border border-[var(--color-line)] px-4 py-4 text-[13px] font-semibold text-[var(--color-ink)] transition-colors duration-300 ease-[var(--ease-signature)] hover:border-[var(--color-green-deep)] hover:text-[var(--color-green-deep)]"
            >
              Compare models
              <ArrowRight size={16} weight="bold" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
