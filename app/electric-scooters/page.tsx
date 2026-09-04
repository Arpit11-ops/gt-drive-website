import type { Metadata } from "next";
import { ScootersFeatures } from "@/components/scooters/ScootersFeatures";
import { ScootersHero } from "@/components/scooters/ScootersHero";
import { ScootersSpecHighlight } from "@/components/scooters/ScootersSpecHighlight";
import { ScootersSpecTable } from "@/components/scooters/ScootersSpecTable";
import { ScootersTechnology } from "@/components/scooters/ScootersTechnology";

export const metadata: Metadata = {
  title: "Electric Scooters",
  description:
    "Explore the GT Drive electric scooter range — GT Flying leads a lineup designed for the city and built for the future.",
};

export default function ElectricScootersPage() {
  return (
    <>
      <ScootersHero />
      <ScootersSpecHighlight />
      <ScootersSpecTable />
      <ScootersFeatures />
      <ScootersTechnology />
    </>
  );
}
