"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin } from "@phosphor-icons/react";
import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { locations } from "@/lib/models";

const markerPositions: Record<string, { left: string; top: string }> = {
  "Uttar Pradesh": { left: "47%", top: "34%" },
  Bihar: { left: "59%", top: "39%" },
  Maharashtra: { left: "25%", top: "57%" },
  "Madhya Pradesh": { left: "36%", top: "48%" },
  Telangana: { left: "38%", top: "63%" },
};

type IndiaFootprintProps = {
  showAllAddresses?: boolean;
};

export function IndiaFootprint({
  showAllAddresses = false,
}: IndiaFootprintProps) {
  const [activeState, setActiveState] = useState(locations[0].state);
  const activeLocation =
    locations.find((location) => location.state === activeState) ??
    locations[0];

  return (
    <section
      aria-labelledby="india-footprint-title"
      className="bg-[var(--color-stage)] py-20 md:py-16"
    >
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-10">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <Reveal className="w-full lg:w-1/3">
            <h2
              id="india-footprint-title"
              className="mb-8 text-[clamp(2.75rem,4.5vw,4.75rem)] leading-[0.94] tracking-[-0.045em] text-[var(--color-ink)]"
            >
              Plants across{" "}
              <span className="text-[var(--color-green)]">
                five Indian states.
              </span>
            </h2>

            <div
              id="active-location"
              data-testid="active-location"
              className="mb-8 min-h-[238px] border-t border-[var(--color-line)] bg-white p-8"
              aria-live="polite"
            >
              <h3 className="flex items-center gap-2 text-xl font-bold leading-tight tracking-[-0.02em]">
                <MapPin
                  weight="fill"
                  className="size-5 shrink-0 text-[var(--color-green)]"
                />
                {activeLocation.state}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[var(--color-body)]">
                {activeLocation.address}
              </p>
              <Link
                href="/locations/"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-green-deep)] transition-colors hover:text-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-green-deep)]"
              >
                View all locations →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100} className="w-full lg:w-2/3">
            <div className="relative min-h-[560px] overflow-hidden rounded-lg border border-[var(--color-line)] bg-[radial-gradient(circle_at_50%_45%,#ffffff_0%,#f7f9f7_68%,#eef2ef_100%)] shadow-[0_16px_45px_rgba(0,0,0,0.06)] md:min-h-[780px]">
              <div className="absolute left-1/2 top-1/2 aspect-[690/830] w-[88%] -translate-x-1/2 -translate-y-1/2 md:h-[92%] md:w-auto">
                <Image
                  src="/assets/gt-drive/india-states-premium.svg"
                  alt="Map of India with state and union territory borders and names"
                  fill
                  sizes="(min-width: 768px) 600px, 88vw"
                  className="object-contain"
                />

                {locations.map((location, index) => {
                  const position = markerPositions[location.state];
                  const active = activeState === location.state;

                  return (
                    <button
                      key={location.state}
                      type="button"
                      aria-label={`Show ${location.state} location`}
                      aria-pressed={active}
                      aria-controls="active-location"
                      onClick={() => setActiveState(location.state)}
                      onFocus={() => setActiveState(location.state)}
                      onMouseEnter={() => setActiveState(location.state)}
                      className="group absolute -translate-x-1/2 -translate-y-1/2 focus-visible:outline-none motion-safe:animate-[pin-drop_500ms_cubic-bezier(0.16,1,0.3,1)_both]"
                      style={{ ...position, animationDelay: `${300 + index * 90}ms` }}
                    >
                      <span
                        className={`relative block size-4 rounded-full border-2 border-white shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition-transform group-hover:scale-125 group-focus-visible:scale-125 ${
                          active
                            ? "scale-125 bg-[var(--color-green)]"
                            : "bg-[var(--color-green-deep)]"
                        }`}
                      />
                      <span
                        className={`absolute left-1/2 top-6 -translate-x-1/2 whitespace-nowrap rounded-sm bg-[var(--color-ink)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white transition-opacity ${
                          active
                            ? "opacity-100"
                            : "pointer-events-none opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                        }`}
                      >
                        {location.state}
                      </span>
                    </button>
                  );
                })}
              </div>

              <a
                href="https://commons.wikimedia.org/wiki/File:States_of_India_(Survey_of_India).svg"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-5 right-6 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                Map source · Survey of India
              </a>
            </div>
          </Reveal>
        </div>

        {showAllAddresses ? (
          <div className="mt-20 border-t border-[var(--color-line)]">
            <h3 className="py-8 text-2xl font-bold tracking-[-0.03em]">
              All plant addresses
            </h3>
            <ul className="grid md:grid-cols-2">
              {locations.map((location, index) => {
                const active = activeState === location.state;

                return (
                  <li
                    key={location.state}
                    className={`border-t border-[var(--color-line)] md:[&:nth-child(odd)]:border-r ${
                      index < 2 ? "md:border-t-0" : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveState(location.state)}
                      onFocus={() => setActiveState(location.state)}
                      onMouseEnter={() => setActiveState(location.state)}
                      className={`h-full w-full p-7 text-left transition-colors md:p-9 ${
                        active ? "bg-white" : "hover:bg-white/70"
                      }`}
                    >
                      <span className="flex items-center gap-3 text-xl font-bold text-[var(--color-ink)]">
                        <MapPin
                          weight="fill"
                          className={`size-5 ${
                            active
                              ? "text-[var(--color-green)]"
                              : "text-[var(--color-muted)]"
                          }`}
                        />
                        {location.state}
                      </span>
                      <span className="mt-4 block text-sm leading-6 text-[var(--color-body)]">
                        {location.address}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="mt-8 text-[13px] italic leading-6 text-[var(--color-muted)]">
              Addresses shown as printed in the GT Drive brochure.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
