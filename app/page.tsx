import type { Metadata } from "next";
import { ScootersFeatures } from "@/components/scooters/ScootersFeatures";
import { ScootersHero } from "@/components/scooters/ScootersHero";
import { ScootersSpecHighlight } from "@/components/scooters/ScootersSpecHighlight";
import { ScootersSpecTable } from "@/components/scooters/ScootersSpecTable";
import { ScootersTechnology } from "@/components/scooters/ScootersTechnology";
import { getModel } from "@/lib/models";

export const metadata: Metadata = {
  title: "GT Drive — Electric two-wheeler brand from Houstan Innovations LLP",
  description:
    "Explore the GT Drive electric scooter range — GT Flying leads a lineup designed for the city and built for the future.",
};

export default function HomePage() {
  const flagship = getModel("gt-flying");
  const image = flagship?.image ?? "/assets/gt-drive/gt-flying-e4-real.webp";
  const name = flagship?.shortName ?? "GT Flying";

  return (
    <>
      <ScootersHero
        name={name}
        tagline={"Designed for the city.\nBuilt for the future."}
        image={image}
        alt={`${name} electric scooter`}
        cta={{ href: `/models/${flagship?.slug ?? "gt-flying"}/`, label: `Explore ${name}` }}
      />
      <ScootersSpecHighlight image={image} alt={`${name} rear three-quarter view`} />
      <ScootersSpecTable image={image} alt={`${name} side view`} />
      <ScootersFeatures image={image} alt={`${name} features`} />
      <ScootersTechnology />
    </>
  );
}
