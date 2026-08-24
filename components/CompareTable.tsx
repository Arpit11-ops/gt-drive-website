"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CaretDown } from "@phosphor-icons/react";
import { useState, type MouseEvent } from "react";
import { models, type ScooterModel } from "@/lib/models";

const rows = [
  { label: "Model code", key: "code" },
  { label: "Front tyre", key: "Front tyre" },
  { label: "Rear tyre", key: "Rear tyre" },
  { label: "Tyre type", key: "Tyre type" },
  { label: "Braking", key: "Braking technology" },
  { label: "Front brake", key: "Front brake" },
  { label: "Rear brake", key: "Rear brake" },
  { label: "Controller", key: "Controller" },
] as const;

function valueFor(model: ScooterModel, key: string) {
  if (key === "code") return model.code ?? "—";
  return model.specs.find((spec) => spec.label === key)?.value ?? "—";
}

export function CompareTable() {
  const [selectedSlugs, setSelectedSlugs] = useState(["gt-soul", "gt-ryd", "gt-drive-pro"]);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });
  const selectedModels = selectedSlugs.map((slug) => models.find((model) => model.slug === slug) ?? models[0]);

  function selectModel(column: number, slug: string) {
    setSelectedSlugs((current) => current.map((value, index) => (index === column ? slug : value)));
  }

  function moveSpotlight(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setSpotlight({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  }

  return (
    <section className="min-h-[100svh] bg-[var(--color-ink)] px-4 pb-24 pt-32 md:pt-40">
      <div className="mx-auto w-full max-w-6xl">
        <header className="flex flex-col items-center px-4 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-green)]/25 bg-[var(--color-green)]/10 px-3 py-1">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-green)]" />
            <span className="text-xs font-medium tracking-wide text-[#71dc8e] uppercase">Model comparison</span>
          </div>
          <h1 className="max-w-4xl text-[clamp(44px,7vw,82px)] font-medium leading-[0.92] tracking-[-0.055em] text-white">
            Compare the <span className="text-[var(--color-green)]">GT Drive</span> range.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
            Choose any three models. Every displayed specification comes from the GT Drive brochure; unavailable values remain clearly marked.
          </p>

          <div className="mt-9 flex max-w-full items-center gap-2 overflow-x-auto rounded-full border border-white/10 bg-white/5 p-1.5 shadow-inner shadow-black/30 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {selectedModels.map((model, index) => (
              <label key={index} className={`relative flex shrink-0 items-center rounded-full px-4 py-2 text-sm font-semibold transition ${index === 1 ? "bg-[var(--color-green-deep)] text-white" : "bg-white/[0.06] text-white/75"}`}>
                <span className="sr-only">Choose model for column {index + 1}</span>
                <select
                  aria-label={`Choose model for column ${index + 1}`}
                  value={model.slug}
                  onChange={(event) => selectModel(index, event.target.value)}
                  className="appearance-none bg-transparent pr-6 outline-none"
                >
                  {models.map((option) => (
                    <option key={option.slug} value={option.slug} className="bg-[var(--color-ink)] text-white">
                      {option.shortName}
                    </option>
                  ))}
                </select>
                <CaretDown size={14} weight="bold" className="pointer-events-none absolute right-3" />
              </label>
            ))}
          </div>
        </header>

        <div
          onMouseMove={moveSpotlight}
          className="group relative mt-12 w-full overflow-hidden overflow-x-auto rounded-[32px] border border-white/[0.07] bg-[#0a0a0a] shadow-2xl shadow-black/50"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: `radial-gradient(600px circle at ${spotlight.x}px ${spotlight.y}px, rgba(255,255,255,.07), transparent 40%)` }}
          />

          <div className="relative z-10 grid min-w-[920px] grid-cols-4 divide-x divide-white/[0.07] text-sm">
            <div className="flex flex-col bg-gradient-to-br from-white/10 to-transparent">
              <div className="flex min-h-[278px] flex-col justify-end border-b border-white/[0.07] px-6 pb-8 pt-12">
                <h2 className="text-2xl font-semibold tracking-tight text-white">Compare <span className="text-white/30">models</span></h2>
                <p className="mt-2 text-xs leading-relaxed text-white/35">Brochure-backed details for the selected scooters.</p>
              </div>
              {rows.map((row) => (
                <div key={row.key} className="flex min-h-16 items-center border-b border-white/[0.07] px-6 py-4 text-white/45">
                  {row.label}
                </div>
              ))}
              <div className="flex min-h-24 items-center border-b border-white/[0.07] px-6 py-4 text-white/45">Colours</div>
              <div className="h-24 border-b border-white/[0.07]" />
            </div>

            {selectedModels.map((model, columnIndex) => (
              <div key={`${columnIndex}-${model.slug}`} className={`relative flex flex-col ${columnIndex === 1 ? "bg-[var(--color-green)]/[0.045] shadow-[inset_0_0_24px_rgba(32,176,72,.1)]" : ""}`}>
                <div className={`flex h-10 items-center justify-center border-b border-white/[0.07] text-xs font-bold tracking-[0.14em] uppercase ${columnIndex === 1 ? "bg-[var(--color-green-deep)] text-white" : "bg-white/[0.04] text-[#71dc8e]"}`}>
                  {model.status === "coming-soon" ? "Coming soon" : columnIndex === 1 ? "Selected focus" : `Choice 0${columnIndex + 1}`}
                </div>
                <div className="relative flex min-h-[238px] flex-col items-center justify-end border-b border-white/[0.07] px-5 pb-6 pt-4">
                  <div className="relative h-32 w-full">
                    <Image src={model.image} alt={model.shortName} fill sizes="230px" className="object-contain transition-transform duration-500 group-hover:-translate-y-1" />
                  </div>
                  <Link href={`/models/${model.slug}/`} className="mt-3 text-center text-xl font-bold tracking-[-0.035em] text-white hover:text-[var(--color-green)]">
                    {model.shortName}
                  </Link>
                  <span className="mt-1 text-xs text-white/35">{model.code ? `Model ${model.code}` : "Code not confirmed"}</span>
                </div>

                {rows.map((row) => {
                  const value = valueFor(model, row.key);
                  return (
                    <div key={row.key} className={`flex min-h-16 items-center justify-center border-b border-white/[0.07] px-4 py-4 text-center ${value === "—" ? "text-white/25" : columnIndex === 1 ? "font-bold text-white" : "font-medium text-white/75"}`}>
                      {value}
                    </div>
                  );
                })}

                <div className="flex min-h-24 items-center justify-center border-b border-white/[0.07] px-4 py-4 text-center text-xs leading-relaxed text-white/65">
                  {model.colors.join(", ")}
                </div>
                <div className="flex h-24 items-center justify-center border-b border-white/[0.07] p-4">
                  <Link
                    href={`/models/${model.slug}/`}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-semibold tracking-wide uppercase transition-all ${columnIndex === 1 ? "bg-[var(--color-green)] text-white shadow-lg shadow-[var(--color-green)]/20 hover:bg-[var(--color-green-deep)]" : "border border-[var(--color-green)]/50 bg-[var(--color-green-deep)]/35 text-white hover:bg-[var(--color-green-deep)]"}`}
                  >
                    View model <ArrowUpRight size={14} weight="bold" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-5 text-center text-xs leading-relaxed text-white/35">
          Scroll horizontally on smaller screens. A dash means the supplied brochure does not confirm that value.
        </p>
      </div>
    </section>
  );
}
