import type { Metadata } from "next";
import { DealerHero } from "@/components/dealers/DealerHero";
import { DealerOpportunity } from "@/components/dealers/DealerOpportunity";
import { DealerSupport } from "@/components/dealers/DealerSupport";
import { DealerBrochureJourney } from "@/components/dealers/DealerBrochureJourney";
import { DealerApplicationForm } from "@/components/dealers/DealerApplicationForm";

export const metadata: Metadata = {
  title: "Join Dealership",
  description:
    "Explore the GT Drive dealership opportunity and its product, marketing, inventory, training and technical support areas.",
};

export default function DealersPage() {
  return (
    <>
      <DealerHero />
      <DealerOpportunity />
      <DealerSupport />
      <DealerBrochureJourney />
      <DealerApplicationForm />
    </>
  );
}
