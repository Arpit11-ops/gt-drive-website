import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { ScootersFeatures } from "@/components/scooters/ScootersFeatures";
import { ScootersGallery } from "@/components/scooters/ScootersGallery";
import { ScootersHero } from "@/components/scooters/ScootersHero";
import { ScootersSpecHighlight } from "@/components/scooters/ScootersSpecHighlight";
import { ScootersSpecTable } from "@/components/scooters/ScootersSpecTable";
import { ScootersTechnology } from "@/components/scooters/ScootersTechnology";
import { asset } from "@/lib/asset";
import { ContactClose } from "@/components/ContactClose";
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

  // Coming-soon models keep a minimal teaser page until they launch.
  if (model.status === "coming-soon") {
    return (
      <>
      <section className="relative overflow-hidden bg-white pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="mx-auto grid max-w-[var(--container-page)] gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10">
          <div className="relative flex items-center justify-center bg-[var(--color-stage)]">
            <Image
              src={asset(model.image)}
              alt={model.shortName}
              width={1200}
              height={800}
              priority
              className="h-auto w-full max-w-[560px] object-contain mix-blend-multiply"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-green-deep)]">
              Coming Soon
            </p>
            <h1 className="mt-4 font-display text-[clamp(48px,6vw,88px)] font-extrabold uppercase leading-[0.95] tracking-[-0.04em] text-[var(--color-ink)]">
              {model.shortName}.
            </h1>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-[var(--color-body)]">
              {model.lead}
            </p>
            <div className="mt-10">
              <Link
                href="/contact/"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-[var(--color-green)] px-6 text-[13px] font-bold text-white transition-colors hover:bg-[var(--color-green-deep)]"
              >
                Register your interest
                <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ContactClose defaultModel={model.slug} defaultType="other" />
      </>
    );
  }

  // Select audited angles by purpose, independently of gallery ordering.
  const views = model.sectionImages;
  const heroImage = views?.hero ?? model.image;
  const specImage = views?.specifications ?? model.image;
  const tableImage = views?.details ?? model.image;
  const featureImage = views?.features ?? model.image;

  return (
    <>
      <ScootersHero
        name={model.shortName}
        tagline={model.lead}
        image={heroImage}
        video={model.slug === "gt-flying" ? "/assets/gt-drive/video/gt-flying-hero.mp4" : undefined}
        alt={`${model.shortName} electric scooter, ${views ? "right-facing side profile" : "front and side views"}`}
        cta={{ href: "/contact/", label: "Book a Test Ride" }}
        secondary={{ href: "/models/", label: "Explore All Models" }}
        kicker={model.code ? `Model ${model.code}` : "Hero Product"}
        colors={model.colors}
        featureCount={model.features.length}
      />
      <ScootersSpecHighlight image={specImage} alt={`${model.shortName}, ${views ? "rear view" : "front and side views"}`} />
      <ScootersSpecTable image={tableImage} alt={`${model.shortName}, ${views ? "front view" : "front and side views"}`} />
      <ScootersFeatures image={featureImage} alt={`${model.shortName}, ${views ? "left-facing side profile" : "front and side views"} showing features`} />
      {model.gallery && <ScootersGallery images={model.gallery} name={model.shortName} />}
      <ScootersTechnology step={model.gallery ? "05" : "04"} />
      <ContactClose defaultModel={model.slug} />
    </>
  );
}
