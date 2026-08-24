"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Reveal } from "@/components/Reveal";
import { models } from "@/lib/models";

function Arrow({ reverse = false }: { reverse?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`size-4 ${reverse ? "rotate-180" : ""}`}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function ModelStoryRail() {
  const railRef = useRef<HTMLDivElement>(null);

  const moveRail = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;

    rail.scrollBy({
      left: direction * Math.min(760, rail.clientWidth * 0.9),
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-labelledby="model-story-title"
      className="bg-[var(--color-stage)] px-6 py-20 md:px-16 md:py-28"
    >
      <div className="mx-auto max-w-[var(--container-page)]">
        <div className="flex flex-col items-start gap-16 lg:flex-row">
          <Reveal className="shrink-0 pt-8 lg:w-[390px]">
            <div className="mb-8 flex items-center gap-4 font-mono text-xs text-[var(--color-muted)]">
              <span>01</span>
              <span className="h-px w-12 bg-[var(--color-line)]" />
              <span>02 · 03 · 04 · 05 · 06 · 07 · 08 · 09</span>
            </div>

            <h2
              id="model-story-title"
              className="mb-8 text-[clamp(2.75rem,4.2vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.05em]"
            >
              Nine confirmed models. One truth.
            </h2>

            <p className="mb-10 max-w-sm text-[15px] leading-7 text-[var(--color-muted)]">
              Every scooter on the range is drawn from the GT Drive brochure —
              nothing invented, nothing borrowed.
            </p>

            <Link
              href="/models/"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-ink)] py-2 pl-6 pr-2 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(0,0,0,0.18)] transition-colors hover:bg-[var(--color-green-deep)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-green-deep)]"
            >
              View all models
              <span className="flex size-8 items-center justify-center rounded-full bg-white text-[var(--color-ink)] transition-transform duration-300 group-hover:rotate-45">
                <Arrow />
              </span>
            </Link>
          </Reveal>

          <div className="w-full min-w-0 flex-1">
            <div
              ref={railRef}
              data-testid="model-story-rail"
              className="-mx-6 overflow-x-auto scroll-smooth px-6 pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:px-0"
            >
              <div className="flex min-w-max snap-x snap-mandatory gap-6">
                {models.map((model, index) => (
                  <article
                    key={model.slug}
                    data-testid="model-story-card"
                    className={`group relative h-[400px] w-[82vw] max-w-[350px] shrink-0 snap-start overflow-hidden rounded-3xl bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 md:w-[350px] ${
                      index === 1 ? "opacity-60 hover:opacity-100" : ""
                    }`}
                  >
                    <Image
                      src={model.image}
                      alt={model.shortName}
                      fill
                      sizes="(min-width: 768px) 350px, 82vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/45 transition-colors duration-500 group-hover:bg-black/25" />

                    <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                      <h3 className="max-w-[230px] text-2xl font-medium leading-tight tracking-[-0.035em]">
                        {model.shortName}
                      </h3>

                      <div>
                        <p className="mb-4 text-sm text-white/80">
                          {model.status === "coming-soon"
                            ? "Coming soon"
                            : model.code
                              ? `Model ${model.code}`
                              : "GT Drive range"}
                        </p>
                        <Link
                          href={`/models/${model.slug}/`}
                          className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                          View model
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-3.5"
                          >
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </Link>
                      </div>
                    </div>

                    <span
                      aria-hidden="true"
                      className="absolute bottom-7 right-7 font-serif text-6xl font-light italic text-white/20"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-8 hidden justify-end gap-4 pr-4 md:flex">
              <button
                type="button"
                aria-label="Previous models"
                onClick={() => moveRail(-1)}
                className="flex size-10 items-center justify-center rounded-full border border-[var(--color-line)] bg-transparent transition-colors hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-green-deep)]"
              >
                <Arrow reverse />
              </button>
              <button
                type="button"
                aria-label="Next models"
                onClick={() => moveRail(1)}
                className="flex size-10 items-center justify-center rounded-full bg-[var(--color-ink)] text-white transition-colors hover:bg-[var(--color-green-deep)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-green-deep)]"
              >
                <Arrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
