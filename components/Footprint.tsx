import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { locations } from "@/lib/models";

export function Footprint() {
  return (
    <section
      aria-labelledby="footprint-headline"
      className="mx-auto max-w-[var(--container-page)] px-6 py-28 md:px-10 md:py-40"
    >
      <div className="grid gap-14 md:grid-cols-[1fr_1.2fr]">
        <div className="md:pt-6">
          <Reveal>
            <div className="text-sm font-medium text-[var(--color-green-deep)]">
              Manufacturing footprint
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2
              id="footprint-headline"
              className="mt-6 text-[clamp(40px,5vw,80px)] leading-[0.94] tracking-[-0.03em]"
            >
              Plants across five Indian states.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-sm text-[15px] leading-[1.6] text-[var(--color-body)] md:text-base">
              GT Drive is strengthening its footprint across India to serve
              riders and business partners better.
            </p>
          </Reveal>
        </div>
        <ul className="flex flex-col divide-y divide-[var(--color-line)] border-y border-[var(--color-line)] text-right">
          {locations.map((location, index) => (
            <Reveal key={location.state} delay={index * 80}>
              <li className="flex items-center justify-end gap-4 py-6 md:py-8">
                <span className="text-[clamp(28px,3.6vw,56px)] leading-none tracking-[-0.02em]">
                  {location.state}
                </span>
                <MapPin
                  weight="fill"
                  className="h-6 w-6 shrink-0 text-[var(--color-green)]"
                />
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
