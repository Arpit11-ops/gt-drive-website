"use client";

import Link from "next/link";
import { MapPin } from "@phosphor-icons/react";
import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { locations } from "@/lib/models";

const markerPositions: Record<string, { left: string; top: string }> = {
  "Uttar Pradesh": { left: "47%", top: "31%" },
  Bihar: { left: "63%", top: "35%" },
  Maharashtra: { left: "32%", top: "58%" },
  "Madhya Pradesh": { left: "43%", top: "48%" },
  Telangana: { left: "46%", top: "67%" },
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
      className="bg-[var(--color-stage)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-10">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <Reveal className="w-full lg:w-1/3">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-green-deep)]">
              Our locations
            </span>
            <h2
              id="india-footprint-title"
              className="mb-8 text-[clamp(2.75rem,4.5vw,4.75rem)] leading-[0.94] tracking-[-0.045em]"
            >
              Plants across five Indian states.
            </h2>

            <div
              id="active-location"
              data-testid="active-location"
              className="mb-8 min-h-[238px] border-l-4 border-[var(--color-green)] bg-white p-8 shadow-[0_12px_35px_rgba(0,0,0,0.07)]"
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
                className="mt-5 inline-block border-b-2 border-[var(--color-green)]/30 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-green-deep)] transition-colors hover:border-[var(--color-green-deep)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-green-deep)]"
              >
                View all locations
              </Link>
            </div>

            <div>
              <div className="text-5xl font-extrabold tracking-[-0.05em] text-[var(--color-ink)]">
                05
              </div>
              <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--color-muted)]">
                Brochure-listed manufacturing locations across India.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="w-full lg:w-2/3">
            <div className="relative min-h-[560px] overflow-hidden rounded-lg border border-[var(--color-line)] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:min-h-[650px]">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-40 [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:48px_48px]"
              />

              <div className="absolute inset-8 md:inset-12">
                <svg
                  aria-label="Simplified map of India"
                  role="img"
                  viewBox="0 0 500 600"
                  className="h-full w-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M185 37 215 49 239 38 264 56 294 50 319 69 350 67 378 82 404 103 430 110 417 128 440 144 426 163 397 170 385 193 363 208 341 221 329 250 316 274 306 307 297 340 286 376 273 414 256 451 238 487 217 529 200 503 188 474 178 444 164 420 152 389 136 360 120 335 103 310 88 287 67 267 84 243 101 221 99 198 80 182 61 163 53 142 69 125 93 117 112 101 139 95 151 74 175 65Z"
                    fill="var(--color-stage)"
                    stroke="var(--color-ink)"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M360 208 Q405 188 438 144 M217 529 Q204 554 195 570"
                    fill="none"
                    stroke="var(--color-ink)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M234 188 Q278 213 318 214 M318 214 Q260 275 220 291 M220 291 Q174 320 168 355 M220 291 Q228 355 230 402"
                    fill="none"
                    stroke="var(--color-green-deep)"
                    strokeWidth="2"
                    strokeDasharray="6 7"
                    opacity="0.35"
                  />
                </svg>

                {locations.map((location) => {
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
                      className="group absolute -translate-x-1/2 -translate-y-1/2 focus-visible:outline-none"
                      style={position}
                    >
                      {active ? (
                        <span className="absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[var(--color-green)]/40" />
                      ) : null}
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

              <span className="absolute bottom-5 right-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                India
              </span>
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
