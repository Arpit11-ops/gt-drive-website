"use client";

import Image from "next/image";
import { useState } from "react";
import { asset } from "@/lib/asset";

type Hotspot = {
  id: string;
  title: string;
  body: string;
  /** dot position on the scooter image, as % of the container */
  dot: { x: number; y: number };
  /** label position, as % of the container */
  label: { x: number; y: number };
  side: "left" | "right";
};

const hotspots: Hotspot[] = [
  {
    id: "digital-display",
    title: "Digital Display",
    body: "All essential ride info at a glance.",
    // Side-profile studio views place the display just below the handlebar cluster.
    dot: { x: 39, y: 20 },
    label: { x: 2, y: 6 },
    side: "left",
  },
  {
    id: "led-headlamp",
    title: "LED Headlamp",
    body: "High visibility for safer rides.",
    // The lamp sits on the leading edge of the front cowl, above the front wheel.
    dot: { x: 31, y: 27 },
    label: { x: 2, y: 44 },
    side: "left",
  },
  {
    id: "front-disc-brake",
    title: "Front Disc Brake",
    body: "Better control, greater safety.",
    // The disc and caliper are visible at the centre of the front wheel.
    dot: { x: 18, y: 76 },
    label: { x: 2, y: 82 },
    side: "left",
  },
  {
    id: "spacious-seat",
    title: "Spacious Seat",
    body: "Comfortable for you and your pillion.",
    dot: { x: 68, y: 35 },
    label: { x: 98, y: 12 },
    side: "right",
  },
  {
    id: "large-storage",
    title: "Large Storage",
    body: "More space for your everyday needs.",
    dot: { x: 78, y: 57 },
    label: { x: 98, y: 64 },
    side: "right",
  },
];

type Props = {
  image?: string;
  alt?: string;
};

export function ScootersFeatures({
  image = "/assets/gt-drive/gt-flying-e4-real.webp",
  alt = "GT Drive features",
}: Props = {}) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
          {/* LEFT — copy */}
          <div className="md:col-span-4">
            <p className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-green-deep)]">
              <span className="font-display text-[15px] font-extrabold italic leading-none text-[var(--color-green)]">03</span>
              <span className="h-[2px] w-6 bg-[var(--color-green)]" />
              Features
            </p>
            <h2 className="font-display text-[clamp(30px,3.4vw,46px)] font-extrabold uppercase leading-[1.02] tracking-[-0.035em] text-[var(--color-ink)]">
              <span className="block">Built Around</span>
              <span className="block text-[var(--color-green)]">Your Ride.</span>
            </h2>
            <span className="mt-5 block h-[3px] w-16 bg-[var(--color-green)]" />
            <p className="mt-6 max-w-xs text-[13.5px] leading-relaxed text-[var(--color-body)]">
              Hover / Tap on the scooter to explore its features.
            </p>
          </div>

          {/* RIGHT — interactive feature explorer */}
          <div className="md:col-span-8">
            <div className="relative aspect-[4/3] w-full">
              {/* scooter image */}
              <Image
                src={asset(image)}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-contain object-center"
              />

              {/* SVG connector lines from label to dot */}
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {hotspots.map((h) => {
                  const isActive = activeId === h.id;
                  return isActive ? (
                    <line
                      key={h.id}
                      x1={h.side === "left" ? h.label.x + 14 : h.label.x - 14}
                      y1={h.label.y + 3}
                      x2={h.dot.x}
                      y2={h.dot.y}
                      stroke="var(--color-green-deep)"
                      strokeWidth={isActive ? "0.32" : "0.24"}
                      strokeOpacity={isActive ? 1 : 0.78}
                      strokeDasharray="0.8 0.45"
                    />
                  ) : null;
                })}
              </svg>

              {/* hotspot dots */}
              {hotspots.map((h) => {
                const isActive = activeId === h.id;
                return (
                  <button
                    key={`dot-${h.id}`}
                    type="button"
                    onClick={() => setActiveId((current) => (current === h.id ? null : h.id))}
                    aria-expanded={isActive}
                    aria-label={h.title}
                    className="absolute z-[2] -translate-x-1/2 -translate-y-1/2 outline-none"
                    style={{ left: `${h.dot.x}%`, top: `${h.dot.y}%` }}
                  >
                    <span
                      className={`relative grid h-4 w-4 place-items-center rounded-full bg-[var(--color-green)] transition-transform ${
                        isActive ? "scale-125" : ""
                      }`}
                    >
                      <span className="absolute inset-0 rounded-full bg-[var(--color-green)] opacity-40 motion-safe:animate-ping" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                  </button>
                );
              })}

              {/* labels */}
              {hotspots.map((h) => {
                const isActive = activeId === h.id;
                return isActive ? (
                  <div
                    key={`label-${h.id}`}
                    className={`absolute z-[3] max-w-[165px] rounded-md bg-white/95 px-3 py-2 shadow-[0_4px_14px_rgba(17,17,17,0.08)] backdrop-blur-sm transition-opacity ${
                      h.side === "left" ? "-translate-x-0" : "-translate-x-full"
                    } ${isActive ? "opacity-100" : "opacity-90"}`}
                    style={{
                      left: `${h.label.x}%`,
                      top: `${h.label.y}%`,
                      textAlign: h.side === "left" ? "left" : "right",
                    }}
                  >
                    <div
                      className={`flex items-center gap-1.5 font-display text-[11px] font-extrabold uppercase leading-tight tracking-[0.08em] text-[var(--color-ink)] ${
                        h.side === "right" ? "justify-end" : ""
                      }`}
                    >
                      {h.side === "left" && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)]" />
                      )}
                      {h.title}
                      {h.side === "right" && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)]" />
                      )}
                    </div>
                    <p className="mt-1.5 text-[11px] leading-snug text-[var(--color-ink)]/75">
                      {h.body}
                    </p>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
