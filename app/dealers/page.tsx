import type { Metadata } from "next";
import { ContactClose } from "@/components/ContactClose";
import { DealerBenefits } from "@/components/DealerBenefits";
import { DealerJourney } from "@/components/DealerJourney";
import { DealerOpportunityHero } from "@/components/DealerOpportunityHero";
import { DealerPropositionBand } from "@/components/DealerPropositionBand";
import { DealerRangeShowcase } from "@/components/DealerRangeShowcase";

export const metadata: Metadata = {
  title: "Dealership opportunity",
  description:
    "Partner with GT Drive on a pan-India electric two-wheeler dealership — nine-model range, five-state manufacturing, and a five-area support programme from Houstan Innovations LLP.",
};

export default function DealersPage() {
  return (
    <>
      <DealerOpportunityHero />
      <DealerPropositionBand />
      <DealerRangeShowcase />
      <DealerBenefits />
      <DealerJourney />
      <ContactClose
        id="dealer-enquiry"
        defaultType="dealership"
        headline={
          <>
            Start the <span className="text-[var(--color-green)]">conversation.</span>
          </>
        }
        intro="Tell us about your city, current business, and dealership plans. We'll come back on the primary line."
      />
    </>
  );
}
