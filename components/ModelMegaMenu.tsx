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
  return (
    <div
      id={id}
      role="group"
      aria-label="Models menu"
      aria-hidden={!open}
      inert={!open}
      className={`absolute left-1/2 top-[calc(100%-8px)] z-40 w-[760px] -translate-x-1/2 overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_24px_70px_rgba(24,35,28,0.16)] transition-[opacity,transform] duration-300 ease-[var(--ease-signature)] ${
        open ? "visible translate-y-0 opacity-100" : "invisible pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <div className="grid grid-cols-12">
        <div className="col-span-8 grid grid-cols-2 gap-2 p-5">
          {featuredModels.map((model, index) => (
            <Link
              key={model.slug}
              href={`/models/${model.slug}/`}
              onClick={onNavigate}
              className={`group/item flex min-w-0 items-center gap-3 rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-[color-mix(in_srgb,var(--color-green)_18%,transparent)] hover:bg-[color-mix(in_srgb,var(--color-green)_6%,white)] ${
                index === featuredModels.length - 1 ? "col-span-2" : ""
              }`}
            >
              <span className="relative h-13 w-13 shrink-0 overflow-hidden rounded-xl border border-black/[0.05] bg-[var(--color-stage)] shadow-sm">
                <Image
                  src={model.image}
                  alt=""
                  fill
                  sizes="52px"
                  className="object-contain p-1.5 transition-transform duration-500 ease-[var(--ease-signature)] group-hover/item:scale-110"
                />
              </span>
              <span className="min-w-0">
                <strong className="block truncate text-[14px] font-bold text-[var(--color-ink)] transition-colors group-hover/item:text-[var(--color-green-deep)]">
                  {model.shortName}
                </strong>
                <span className="mt-1 line-clamp-2 block text-[11px] font-medium leading-[1.45] text-[var(--color-muted)]">
                  {model.lead}
                </span>
              </span>
            </Link>
          ))}
        </div>

        <aside className="relative col-span-4 flex min-h-[246px] flex-col justify-between overflow-hidden border-l border-black/[0.05] bg-[#f4f7f4] p-6">
          <Image
            src={featuredModels[0].image}
            alt=""
            width={280}
            height={210}
            className="pointer-events-none absolute -bottom-10 -right-12 h-auto w-[245px] object-contain opacity-[0.11] mix-blend-multiply"
          />
          <div className="relative z-10">
            <span className="inline-flex rounded bg-[var(--color-ink)] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white">
              GT Drive range
            </span>
            <h3 className="mt-4 font-display text-[22px] font-bold leading-[1.05] tracking-[-0.04em] text-[var(--color-ink)]">
              Find your ride.
            </h3>
            <p className="mt-2 max-w-[205px] text-[11px] font-medium leading-[1.55] text-[var(--color-muted)]">
              Explore the complete electric scooter range and compare models side by side.
            </p>
          </div>

          <div className="relative z-10 mt-5 space-y-2">
            <Link
              href="/models/"
              onClick={onNavigate}
              className="group/action relative flex w-full items-center justify-between overflow-hidden rounded-xl bg-[var(--color-ink)] px-4 py-3 text-[12px] font-bold text-white shadow-lg"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-[var(--color-green-deep)] transition-transform duration-300 group-hover/action:scale-x-100" />
              <span className="relative z-10">View all models</span>
              <ArrowRight className="relative z-10 transition-transform group-hover/action:translate-x-1" size={14} weight="bold" />
            </Link>
            <Link
              href="/compare/"
              onClick={onNavigate}
              className="flex items-center justify-between rounded-xl border border-black/[0.08] bg-white/75 px-4 py-2.5 text-[12px] font-bold text-[var(--color-ink)] transition-colors hover:border-[var(--color-green-deep)] hover:text-[var(--color-green-deep)]"
            >
              Compare models
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
