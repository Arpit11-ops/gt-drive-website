import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { models } from "@/lib/models";

export function AboutRangeStrip() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="text-[clamp(36px,5vw,72px)] font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--color-ink)]">
                Nine electric scooters.{" "}
                <span className="text-[var(--color-green)]">One catalogue.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-body)]">
                From the everyday Soul to the flagship Drive Pro — with the
                upcoming Chetak next on the road.
              </p>
            </Reveal>
          </div>
          <Reveal delay={200} className="lg:col-span-4 lg:justify-self-end">
            <Link
              href="/models/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-green-deep)] transition-colors hover:text-[var(--color-ink)]"
            >
              Explore every model
              <ArrowRight size={16} weight="bold" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-9 lg:gap-x-2">
          {models.map((model, index) => (
            <Reveal key={model.slug} delay={60 + index * 30}>
              <Link
                href={`/models/${model.slug}/`}
                className="group flex flex-col items-start gap-3"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[var(--color-stage)] transition-colors group-hover:bg-white group-hover:ring-1 group-hover:ring-[var(--color-green)]/40">
                  <Image
                    src={model.image}
                    alt={model.shortName}
                    fill
                    sizes="(min-width: 1024px) 140px, (min-width: 640px) 30vw, 45vw"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  />
                  {model.status === "coming-soon" && (
                    <span className="absolute left-2 top-2 rounded-full bg-white/85 px-2 py-[3px] text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--color-green-deep)]">
                      Coming soon
                    </span>
                  )}
                </div>
                <div className="flex w-full items-center justify-between">
                  <span className="text-sm font-semibold tracking-tight text-[var(--color-ink)] group-hover:text-[var(--color-green-deep)]">
                    {model.shortName}
                  </span>
                  {model.code && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                      {model.code}
                    </span>
                  )}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
