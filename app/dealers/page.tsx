import type { Metadata } from "next";
import { DealerHero } from "@/components/dealers/DealerHero";
import { DealerOpportunity } from "@/components/dealers/DealerOpportunity";
import { DealerSupport } from "@/components/dealers/DealerSupport";
import { DealerBrochureJourney } from "@/components/dealers/DealerBrochureJourney";
import { DealerApplicationForm } from "@/components/dealers/DealerApplicationForm";

export const metadata: Metadata = {
  title: "Join Dealership",
  description:
    "Bring GT Drive to your city. Partner with us and build your business in India's growing electric mobility market — product, marketing, training and after-sales support included.",
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
