import type { Metadata } from "next";
import { ScootersFeatures } from "@/components/scooters/ScootersFeatures";
import { ScootersHero } from "@/components/scooters/ScootersHero";
import { ScootersSpecHighlight } from "@/components/scooters/ScootersSpecHighlight";
import { ScootersSpecTable } from "@/components/scooters/ScootersSpecTable";
import { ScootersTechnology } from "@/components/scooters/ScootersTechnology";
import { getModel } from "@/lib/models";
import { ContactClose } from "@/components/ContactClose";

export const metadata: Metadata = {
  title: "GT Drive — Electric two-wheeler brand from Houstan Innovations LLP",
  description:
    "Discover GT Drive electric scooters for everyday city travel, led by the sporty GT Flying.",
};

export default function HomePage() {
  const flagship = getModel("gt-flying");
  const views = flagship?.sectionImages;
  const image = views?.hero ?? flagship?.image ?? "/assets/gt-drive/gt-flying-e4-real.webp";
  const name = flagship?.shortName ?? "GT Flying";

  return (
    <>
      <ScootersHero
        name={name}
        tagline={"Built for everyday city rides.\nReady for what’s next."}
        image={image}
        video="/assets/gt-drive/video/gt-flying-hero-2026.mp4"
        alt={`${name} electric scooter`}
        cta={{ href: `/models/${flagship?.slug ?? "gt-flying"}/`, label: `Explore ${name}` }}
      />
      <ScootersSpecHighlight specs={flagship?.rideSpecs} image={views?.specifications ?? image} alt={`${name} rear three-quarter view`} />
      <ScootersSpecTable features={flagship?.features} image={views?.details ?? image} alt={`${name} side view`} />
      <ScootersFeatures image={views?.features ?? image} alt={`${name} features`} />
      <ScootersTechnology />
      <ContactClose />
    </>
  );
}
