import type { Metadata } from "next";
import { CompareTable } from "@/components/CompareTable";
import { ContactClose } from "@/components/ContactClose";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Compare all nine",
  description: "Side-by-side comparison of every GT Drive electric scooter, brochure-verified.",
};

export default function ComparePage() {
  return (
    <>
      <PageHero
        eyebrow="Decision tool"
        headline={
          <>
            <span className="block">Compare all</span>
            <span className="block text-[var(--color-green)]">nine models.</span>
          </>
        }
        lead="Every specification, colour and status side-by-side, drawn from the GT Drive brochure. Missing values show a dash until the brochure confirms them — nothing invented, nothing borrowed."
      />
      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-24 md:px-10 md:pb-32">
        <Reveal>
          <CompareTable />
        </Reveal>
      </section>
      <ContactClose />
    </>
  );
}
