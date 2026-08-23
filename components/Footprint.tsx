import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { locations } from "@/lib/models";

export function Footprint() {
  return (
    <section
      aria-labelledby="footprint-headline"
      className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <div className="md:pt-6">
          <div className="text-sm font-medium text-[var(--color-green-deep)]">
            Manufacturing footprint
          </div>
          <h2
            id="footprint-headline"
            className="mt-6 text-[clamp(36px,4.5vw,72px)] leading-[0.98]"
          >
            Plants across five Indian states.
          </h2>
          <p className="mt-8 max-w-sm text-[15px] leading-[1.6] text-[var(--color-body)] md:text-base">
            GT Drive is strengthening its footprint across India to serve
            riders and business partners better.
          </p>
        </div>
        <ul className="flex flex-col divide-y divide-[var(--color-line)] border-y border-[var(--color-line)] text-right">
          {locations.map((location) => (
            <li
              key={location.state}
              className="flex items-center justify-end gap-4 py-6 md:py-8"
            >
              <span className="text-[clamp(28px,3.5vw,52px)] leading-none">
                {location.state}
              </span>
              <MapPin
                weight="fill"
                className="h-6 w-6 shrink-0 text-[var(--color-green)]"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
