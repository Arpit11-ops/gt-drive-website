import type { Metadata } from "next";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { ContactClose } from "@/components/ContactClose";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { locations } from "@/lib/models";

export const metadata: Metadata = {
  title: "Plant locations",
  description: "GT Drive manufacturing footprint across five Indian states.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing footprint"
        headline={
          <>
            <span className="block">Plants across</span>
            <span className="block text-[var(--color-green)]">five Indian states.</span>
          </>
        }
        lead="GT Drive is strengthening its manufacturing footprint across India to serve riders and business partners better."
      />
      <section className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:px-10 md:py-32">
        <ul className="grid gap-x-10 gap-y-2">
          {locations.map((location, index) => (
            <Reveal key={location.state} delay={index * 60}>
              <li className="border-b border-[var(--color-line)] py-10 md:flex md:items-baseline md:gap-16 md:py-14">
                <div className="flex items-baseline gap-4 md:w-[340px] md:shrink-0">
                  <MapPin weight="fill" className="h-6 w-6 shrink-0 translate-y-1 text-[var(--color-green)]" />
                  <h2 className="text-[clamp(28px,3vw,44px)] leading-[0.95] tracking-[-0.02em]">
                    {location.state}
                  </h2>
                </div>
                <p className="mt-6 max-w-xl text-[15px] leading-[1.65] text-[var(--color-body)] md:mt-0 md:text-base">
                  {location.address}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
        <p className="mt-16 max-w-2xl text-[13px] italic leading-[1.6] text-[var(--color-muted)]">
          Addresses shown as printed in the GT Drive brochure.
        </p>
      </section>
      <ContactClose />
    </>
  );
}
