import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ColorSwatchRow } from "@/components/ColorSwatchRow";
import { ContactClose } from "@/components/ContactClose";
import { FeatureList } from "@/components/FeatureList";
import { RelatedModels } from "@/components/RelatedModels";
import { Reveal } from "@/components/Reveal";
import { SpecTable } from "@/components/SpecTable";
import { getModel, models } from "@/lib/models";

export function generateStaticParams() {
  return models.map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const model = getModel((await params).slug);
  return model ? { title: model.shortName, description: model.lead } : {};
}

export default async function ModelPage({ params }: { params: Promise<{ slug: string }> }) {
  const model = getModel((await params).slug);
  if (!model) notFound();

  const heroImage =
    model.slug === "gt-drive-pro"
      ? "/assets/gt-drive/generated/hero-drive-pro.png"
      : model.image;

  return (
    <>
      {/* PRODUCT HERO */}
      <section className="relative overflow-hidden bg-white pt-24 md:pt-32">
        <div className="mx-auto grid max-w-[var(--container-page)] gap-12 px-6 pb-20 md:grid-cols-[1.3fr_1fr] md:gap-16 md:px-10 md:pb-28">
          <Reveal className="relative flex items-center justify-center bg-[var(--color-stage)]">
            <Image
              src={heroImage}
              alt={model.shortName}
              width={1536}
              height={1024}
              priority
              className="h-auto w-full max-w-[720px] object-contain"
            />
          </Reveal>
          <div className="flex flex-col justify-center">
            <Reveal className="text-xs">
              <Link
                href="/models/"
                className="font-medium uppercase tracking-wider text-[var(--color-muted)] hover:text-[var(--color-green-deep)]"
              >
                ← Range
              </Link>
            </Reveal>
            <Reveal delay={60}>
              <div className="mt-6 text-sm font-medium text-[var(--color-green-deep)]">
                {model.status === "coming-soon"
                  ? "Coming soon"
                  : model.code
                  ? `Model ${model.code}`
                  : "GT Drive model"}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-4 text-[clamp(48px,6vw,108px)] leading-[0.94] tracking-[-0.035em]">
                {model.shortName}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-md text-[15px] leading-[1.65] text-[var(--color-body)] md:text-base">
                {model.lead}
              </p>
            </Reveal>
            {model.note && (
              <Reveal delay={260}>
                <p className="mt-6 max-w-md border-l-2 border-[var(--color-line)] pl-4 text-[13px] italic leading-[1.6] text-[var(--color-muted)]">
                  {model.note}
                </p>
              </Reveal>
            )}
            <Reveal delay={320}>
              <div className="mt-10">
                <div className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
                  Available colours
                </div>
                <div className="mt-4">
                  <ColorSwatchRow colors={model.colors} />
                </div>
              </div>
            </Reveal>
            <Reveal delay={380}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href="/contact/"
                  className="inline-flex h-[52px] items-center justify-center gap-2 rounded-sm bg-[var(--color-green)] px-6 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-deep)]"
                >
                  Request information <ArrowUpRight weight="bold" size={16} />
                </Link>
                <Link
                  href="/compare/"
                  className="text-sm font-semibold text-[var(--color-green-deep)] underline underline-offset-[6px]"
                >
                  Compare with the range
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="border-t border-[var(--color-line)] bg-white">
        <div className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:grid md:grid-cols-[1fr_1.6fr] md:gap-16 md:px-10 md:py-32">
          <div className="md:sticky md:top-24 md:self-start">
            <Reveal>
              <div className="text-sm font-medium text-[var(--color-green-deep)]">
                Brochure-verified
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-[clamp(36px,4vw,64px)] leading-[0.95] tracking-[-0.03em]">
                Specifications.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-sm text-[15px] leading-[1.6] text-[var(--color-body)]">
                These details are transcribed from the GT Drive brochure.
                Unlisted performance figures have not been estimated or added.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 md:mt-0">
            <Reveal>
              <SpecTable specs={model.specs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[var(--color-stage)]">
        <div className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:grid md:grid-cols-[1fr_1.6fr] md:gap-16 md:px-10 md:py-32">
          <div className="md:sticky md:top-24 md:self-start">
            <Reveal>
              <div className="text-sm font-medium text-[var(--color-green-deep)]">
                Features shown in the brochure
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-[clamp(36px,4vw,64px)] leading-[0.95] tracking-[-0.03em]">
                Built for everyday confidence.
              </h2>
            </Reveal>
          </div>
          <div className="mt-14 md:mt-0">
            <Reveal>
              <FeatureList features={model.features} />
            </Reveal>
          </div>
        </div>
      </section>

      <RelatedModels currentSlug={model.slug} />
      <ContactClose defaultModel={model.slug} />
    </>
  );
}
