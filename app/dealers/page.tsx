import type { Metadata } from "next";
import { DealerBenefits } from "@/components/DealerBenefits";
import { DealerOpportunityHero } from "@/components/DealerOpportunityHero";
import { DealerPartnership } from "@/components/DealerPartnership";

export const metadata: Metadata = {
  title: "Dealership opportunity",
  description: "Explore the GT Drive pan-India dealership opportunity from Houstan Innovations LLP.",
};

export default function DealersPage() {
  return (
    <>
      <DealerOpportunityHero />
      <DealerBenefits />
      <DealerPartnership />
    </>
  );
}
