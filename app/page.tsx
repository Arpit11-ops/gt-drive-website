import type { Metadata } from "next";
import { ScootersFeatures } from "@/components/scooters/ScootersFeatures";
import { ScootersHero } from "@/components/scooters/ScootersHero";
import { ScootersSpecHighlight } from "@/components/scooters/ScootersSpecHighlight";
import { ScootersSpecTable } from "@/components/scooters/ScootersSpecTable";
import { ScootersTechnology } from "@/components/scooters/ScootersTechnology";
import { getModel } from "@/lib/models";
import { ContactClose } from "@/components/ContactClose";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "GT Drive — Electric two-wheeler brand from Houstan Innovations LLP",
  description:
    "Explore GT Drive electric scooters, including the sporty GT Flying, and learn about the brand behind the range.",
};

export default function HomePage() {
  const flagship = getModel("gt-flying");
  const views = flagship?.sectionImages;
  const image = views?.hero ?? flagship?.image ?? "/assets/gt-drive/gt-flying-e4-real.webp";
  const name = flagship?.shortName ?? "GT Flying";

  return (
    <>
      <Reveal className="motion-page-enter">
      <ScootersHero
        name={name}
        tagline={"A sporty electric scooter from GT Drive’s nine-model range."}
        image={image}
        video="/assets/gt-drive/video/gt-flying-hero-2026.mp4"
        alt={`${name} electric scooter`}
        cta={{ href: `/models/${flagship?.slug ?? "gt-flying"}/`, label: `Explore ${name}` }}
      />
      </Reveal>
      <Reveal delay={100}><ScootersSpecHighlight specs={flagship?.specs} image={views?.specifications ?? image} alt={`${name} rear three-quarter view`} /></Reveal>
      <Reveal delay={80}><ScootersSpecTable features={flagship?.features} image={views?.details ?? image} alt={`${name} side view`} /></Reveal>
      <Reveal delay={80}><ScootersFeatures image={views?.features ?? image} alt={`${name} features`} /></Reveal>
      <Reveal delay={80}><ScootersTechnology /></Reveal>
      <Reveal delay={80}><ContactClose /></Reveal>
    </>
  );
}
