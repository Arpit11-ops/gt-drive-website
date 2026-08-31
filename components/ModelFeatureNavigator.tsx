"use client";

import Image from "next/image";
import { Check } from "@phosphor-icons/react";
import { useEffect, useMemo, useState } from "react";
import { ScooterReveal } from "@/components/motion/ScooterReveal";
import { Reveal } from "@/components/Reveal";
import type { ScooterModel } from "@/lib/models";
import { asset } from "@/lib/asset";

type Props = {
  model: ScooterModel;
};

const galleryImages: Partial<Record<string, string>> = {
  "gt-soul": "/assets/gt-drive/gallery/gt-soul-gallery.webp",
  "gt-soul-nxt": "/assets/gt-drive/gallery/gt-soul-nxt-gallery.webp",
  "gt-ryd": "/assets/gt-drive/gallery/gt-ryd-gallery.webp",
  "gt-ryd-plus": "/assets/gt-drive/gallery/gt-ryd-plus-gallery.webp",
  "gt-one-plus": "/assets/gt-drive/gallery/gt-one-plus-gallery.webp",
  "gt-champion": "/assets/gt-drive/gallery/gt-champion-gallery.webp",
  "gt-flying": "/assets/gt-drive/gallery/gt-flying-gallery.webp",
  "gt-drive-pro": "/assets/gt-drive/gallery/gt-drive-pro-gallery.webp",
};

const chapterDefinitions = [
  {
    label: "Smart ride",
    title: "Everyday control, kept close.",
    description: "Controls and conveniences listed in the brochure for a straightforward daily riding experience.",
    features: ["Vibrant Digital Display", "Variable Drive Modes", "Remote Lock", "Steering Lock"],
  },
  {
    label: "Road confidence",
    title: "Visibility, security, and comfort.",
    description: "Brochure-listed equipment intended to support confident use across everyday Indian roads.",
    features: ["LED Projector Head Lamp", "Anti-Theft Alarm", "Hydraulic Suspensions"],
  },
  {
    label: "Electric performance",
    title: "The essentials behind the ride.",
    description: "The electric-drive and range-related features explicitly supplied for this model.",
    features: ["Long Battery Life", "Powerful Hub Motor", "Powerful BLDC Hub Motor", "Long Range"],
  },
  {
    label: "Clean mobility",
    title: "Made for cleaner movement.",
    description: "The core mobility benefits presented across the GT Drive model range.",
    features: ["Eco Friendly", "Safe and Reliable", "Zero Pollution"],
  },
];

const imageTreatments = [
  "object-contain scale-[1.45] origin-left",
  "object-contain scale-[1.25]",
  "object-contain scale-[1.4] origin-right",
  "object-contain",
];

export function ModelFeatureNavigator({ model }: Props) {
  const chapters = useMemo(
    () =>
      chapterDefinitions
        .map((chapter) => ({
          ...chapter,
          features: chapter.features.filter((feature) => model.features.includes(feature)),
        }))
        .filter((chapter) => chapter.features.length > 0),
    [model.features],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const image = galleryImages[model.slug] ?? model.image;

  useEffect(() => {
    const sections = chapters
      .map((_, index) => document.getElementById(`model-feature-${index}`))
      .filter((section): section is HTMLElement => Boolean(section));

    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset.featureIndex);
          if (Number.isFinite(index)) setActiveIndex(index);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [chapters]);

  function goToChapter(index: number) {
    setActiveIndex(index);
    document.getElementById(`model-feature-${index}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="features" className="bg-[#fbfaf8] py-16 md:py-24">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
          <aside className="lg:w-1/3">
            <div className="lg:sticky lg:top-32">
              <div className="mb-8">
                <h2 className="max-w-sm text-[clamp(38px,4vw,60px)] leading-[0.94] tracking-[-0.045em]">
                  Built for everyday confidence.
                </h2>
              </div>
              <nav aria-label={`${model.shortName} feature chapters`} className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-2 lg:overflow-visible lg:pb-0">
                {chapters.map((chapter, index) => {
                  const active = activeIndex === index;
                  return (
                    <button
                      key={chapter.label}
                      type="button"
                      onClick={() => goToChapter(index)}
                      aria-current={active ? "true" : undefined}
                      className={`block shrink-0 border-l px-4 py-2 text-left text-base font-medium transition-colors md:py-3 md:text-xl ${
                        active
                          ? "border-[var(--color-green)] font-semibold text-[var(--color-ink)]"
                          : "border-[var(--color-line)] text-[var(--color-body)] hover:text-[var(--color-ink)]"
                      }`}
                    >
                      {chapter.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          <div className="space-y-20 lg:w-2/3 md:space-y-24">
            {chapters.map((chapter, index) => (
              <article
                key={chapter.label}
                id={`model-feature-${index}`}
                data-feature-index={index}
                className="scroll-mt-28 space-y-6 md:min-h-[850px] md:space-y-8"
              >
                <Reveal>
                  <h3 className="max-w-3xl text-[clamp(36px,5vw,68px)] font-normal leading-[0.95] tracking-[-0.045em]">
                    {chapter.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-body)] md:text-lg">
                    {chapter.description}
                  </p>
                </Reveal>

                <ScooterReveal delay={80}>
                  <div className="relative min-h-[430px] overflow-hidden rounded-3xl border border-[var(--color-line)] bg-white shadow-[0_24px_70px_rgba(17,17,17,0.07)] md:min-h-[580px]">
                    <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(32,176,72,.12),transparent_42%)]" />
                    <Image
                      src={asset(image)}
                      alt={`${model.shortName} ${chapter.label.toLowerCase()} multi-angle view`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className={`${imageTreatments[index] ?? "object-contain"} mix-blend-multiply p-5 transition-transform duration-700 md:p-8`}
                    />
                    <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/78 via-black/34 to-transparent px-5 pb-5 pt-24 md:px-8 md:pb-8">
                      <div className="flex flex-wrap gap-2">
                        {chapter.features.map((feature) => (
                          <span key={feature} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-2 text-xs font-medium text-white backdrop-blur-md md:text-sm">
                            <Check size={14} weight="bold" className="text-[var(--color-green)]" /> {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScooterReveal>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
