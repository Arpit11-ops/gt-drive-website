"use client";

import Image from "next/image";
import {
  CheckCircle,
  Gauge,
  Lightning,
  Palette,
  ShieldCheck,
  Sparkle,
} from "@phosphor-icons/react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ScooterModel } from "@/lib/models";

type Props = {
  model: ScooterModel;
  image: string;
};

type Tab = {
  label: string;
  title: string;
  accent: string;
  description: string;
  details: { label: string; value: string }[];
  icon: typeof Gauge;
};

function specValue(model: ScooterModel, label: string) {
  return model.specs.find((spec) => spec.label === label)?.value;
}

export function ModelTechnicalTabs({ model, image }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicator, setIndicator] = useState({ left: 12, width: 120 });
  const tabsRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const tabs = useMemo<Tab[]>(
    () => [
      {
        label: "Tyres",
        title: "A planted everyday stance",
        accent: "starts at the road.",
        description:
          "Brochure-listed tyre dimensions and construction for this GT Drive model.",
        icon: Gauge,
        details: [
          { label: "Front tyre", value: specValue(model, "Front tyre") ?? "To be confirmed" },
          { label: "Rear tyre", value: specValue(model, "Rear tyre") ?? "To be confirmed" },
          { label: "Tyre type", value: specValue(model, "Tyre type") ?? "To be confirmed" },
        ],
      },
      {
        label: "Braking",
        title: "Control designed for",
        accent: "everyday confidence.",
        description:
          "The braking configuration below is transcribed directly from the GT Drive brochure.",
        icon: ShieldCheck,
        details: [
          { label: "Braking technology", value: specValue(model, "Braking technology") ?? "To be confirmed" },
          { label: "Front brake", value: specValue(model, "Front brake") ?? "To be confirmed" },
          { label: "Rear brake", value: specValue(model, "Rear brake") ?? "To be confirmed" },
        ],
      },
      {
        label: "Electrical",
        title: "The electric system",
        accent: "behind the ride.",
        description:
          "Only the electrical information explicitly listed in the brochure is shown here.",
        icon: Lightning,
        details: [
          { label: "Controller", value: specValue(model, "Controller") ?? "To be confirmed" },
          {
            label: "Motor",
            value: model.features.includes("Powerful BLDC Hub Motor")
              ? "Powerful BLDC hub motor"
              : model.features.includes("Powerful Hub Motor")
                ? "Powerful hub motor"
                : "To be confirmed",
          },
          {
            label: "Ride modes",
            value: model.features.includes("Variable Drive Modes") ? "Variable drive modes" : "To be confirmed",
          },
        ],
      },
      {
        label: "Colours",
        title: "A finish for",
        accent: "your road presence.",
        description:
          "Available colour names are reproduced from the model information currently supplied by GT Drive.",
        icon: Palette,
        details: model.colors.map((colour, index) => ({
          label: model.colors.length > 1 ? `Colour ${String(index + 1).padStart(2, "0")}` : "Availability",
          value: colour,
        })),
      },
    ],
    [model],
  );

  useEffect(() => {
    function updateIndicator() {
      const container = tabsRef.current;
      const button = buttonRefs.current[activeIndex];
      if (!container || !button) return;
      const containerRect = container.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();
      setIndicator({
        left: buttonRect.left - containerRect.left + 12,
        width: Math.max(28, buttonRect.width - 24),
      });
    }

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeIndex]);

  const activeTab = tabs[activeIndex];

  return (
    <section className="bg-[var(--color-ink)] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[var(--container-page)] rounded-[28px] border border-white/10 bg-white/[0.045] px-5 py-10 shadow-2xl shadow-black/30 backdrop-blur-sm md:px-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          <header className="mb-8 text-center md:mb-10">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-white/80">
              <Sparkle size={14} weight="fill" className="text-[var(--color-green)]" />
              <span>Brochure-verified details</span>
            </div>
            <h2 className="mx-auto mt-4 max-w-4xl text-[clamp(40px,6vw,72px)] font-semibold leading-[0.94] tracking-[-0.05em] text-white">
              Explore the engineering behind {model.shortName}.
            </h2>
          </header>

          <div className="flex justify-center">
            <div className="relative max-w-full">
              <div
                ref={tabsRef}
                role="tablist"
                aria-label={`${model.shortName} technical details`}
                className="flex max-w-full items-center gap-2 overflow-x-auto rounded-[24px] border border-white/10 bg-white/5 p-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {tabs.map((tab, index) => {
                  const TabIcon = tab.icon;
                  const active = activeIndex === index;
                  return (
                    <button
                      key={tab.label}
                      ref={(node) => { buttonRefs.current[index] = node; }}
                      id={`technical-tab-${index}`}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      aria-controls="technical-tab-panel"
                      onClick={() => setActiveIndex(index)}
                      className={`relative inline-flex shrink-0 items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 text-sm font-medium transition ${
                        active ? "bg-white/10 text-white" : "bg-white/[0.025] text-white/65 hover:bg-white/[0.07] hover:text-white"
                      }`}
                    >
                      <span className={`inline-flex h-6 w-6 items-center justify-center rounded-lg ring-1 transition ${active ? "bg-[var(--color-green)] text-white ring-white/20" : "bg-white/5 text-white/70 ring-white/10"}`}>
                        <TabIcon size={14} weight="bold" />
                      </span>
                      {tab.label}
                    </button>
                  );
                })}
              </div>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-2 h-0.5 rounded-full transition-all duration-300 ease-out"
                style={{
                  left: indicator.left,
                  width: indicator.width,
                  background: "linear-gradient(90deg, rgba(32,176,72,0), rgba(32,176,72,.95) 28%, rgba(113,220,142,.9) 72%, rgba(113,220,142,0))",
                }}
              />
              <span aria-hidden="true" className="pointer-events-none absolute right-0 -bottom-2 left-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            </div>
          </div>

          <div
            id="technical-tab-panel"
            role="tabpanel"
            aria-labelledby={`technical-tab-${activeIndex}`}
            className="mt-10 rounded-[28px] border border-white/10 p-6 backdrop-blur-sm md:p-10"
          >
            <div key={activeTab.label} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 motion-safe:animate-[technical-panel-in_.45s_ease-out]">
              <div>
                <h3 className="text-[clamp(38px,5vw,62px)] font-semibold leading-[0.98] tracking-[-0.045em] text-white">
                  {activeTab.title}{" "}
                  <span className="text-white/35">{activeTab.accent}</span>
                </h3>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
                  {activeTab.description}
                </p>
                <div className="mt-7 flex flex-col gap-3">
                  {activeTab.details.map((detail) => (
                    <div
                      key={`${detail.label}-${detail.value}`}
                      className="flex w-full max-w-[580px] items-center gap-4 rounded-2xl border border-white/10 px-4 py-3 shadow-[inset_0_-12px_24px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.04)]"
                    >
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ring-white/10">
                        <CheckCircle size={19} weight="duotone" className="text-[var(--color-green)]" />
                      </span>
                      <span className="min-w-0 text-sm text-white/75">
                        <span className="block text-xs font-semibold tracking-[0.1em] text-white/40 uppercase">{detail.label}</span>
                        <span className="mt-1 block font-medium text-white/90">{detail.value}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d120f] shadow-lg aspect-[4/3]">
                <div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:linear-gradient(0deg,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:24px_24px]" />
                <div aria-hidden="true" className="absolute inset-[12%] rounded-[28px] border border-white/10 bg-white/[0.025]" />
                <div aria-hidden="true" className="absolute inset-[16%] rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.08),transparent_70%)]" />
                <Image
                  src={image}
                  alt={`${model.shortName} technical view`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="relative z-10 object-contain p-7 drop-shadow-[0_24px_24px_rgba(0,0,0,.5)] md:p-10"
                />
                <div aria-hidden="true" className="pointer-events-none absolute -inset-1 bg-[radial-gradient(60%_60%_at_70%_20%,rgba(32,176,72,.24),transparent_70%)] opacity-70 blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
