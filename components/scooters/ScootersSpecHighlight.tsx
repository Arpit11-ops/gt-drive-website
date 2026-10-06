import Image from "next/image";
import {
  BatteryHigh,
  Gauge,
  Path,
  PlugCharging,
} from "@phosphor-icons/react/dist/ssr";
import { asset } from "@/lib/asset";
import { colourSwatchStyle } from "@/lib/colour";
import { isPortraitProductImage } from "@/lib/productImage";
import type { ModelRideSpecs } from "@/lib/models";

type Spec = {
  Icon: typeof Gauge;
  label: string;
  value: string;
  sub?: string;
};

type Props = {
  image?: string;
  alt?: string;
  specs?: ModelRideSpecs;
  colors?: string[];
};

export function ScootersSpecHighlight({
  image = "/assets/gt-drive/gt-flying-e4-real.webp",
  alt = "GT Drive scooter",
  specs: rideSpecs,
  colors = [],
}: Props = {}) {
  const specs: Spec[] = [
    { Icon: Path, label: "Range", value: rideSpecs?.range ?? "Not provided", sub: "Per charge" },
    { Icon: Gauge, label: "Low Speed", value: "Non-RTO" },
    { Icon: BatteryHigh, label: "Battery", value: rideSpecs?.battery ?? "Not provided" },
    { Icon: PlugCharging, label: "Charging Time", value: rideSpecs?.chargingTime ?? "Not provided" },
  ];

  return (
    <section className="bg-white py-10 md:py-16">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-10">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-10">
          {/* LEFT — kicker + scooter image */}
          <div className="relative md:col-span-5">
            <p className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-green-deep)]">
              <span className="h-[2px] w-6 bg-[var(--color-green)]" />
              Specifications
            </p>

            <div className={`relative mt-0 w-full max-w-[22rem] overflow-hidden rounded-[1.25rem] border border-black/[0.08] bg-white shadow-[0_12px_30px_rgba(17,17,17,0.06)] md:mt-0 ${isPortraitProductImage(image) ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
              <Image
                src={asset(image)}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-center"
              />
            </div>
          </div>

          {/* RIGHT — spec highlight panel */}
          <div className="gt-card relative rounded-[1.5rem] bg-white p-6 shadow-[0_12px_30px_rgba(17,17,17,0.05)] md:col-span-7 md:mt-8 md:p-8 lg:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Everything That
            </p>
            <h2 className="mt-3 font-display text-[clamp(28px,3.2vw,44px)] font-extrabold uppercase leading-[1.05] tracking-[-0.03em] text-[var(--color-ink)]">
              Powers Your Ride<span className="text-[var(--color-green)]">.</span>
            </h2>
            <span className="mt-4 block h-[3px] w-16 bg-[var(--color-green)]" />

            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-4 sm:gap-x-3">
              {specs.map(({ Icon, label, value, sub }) => (
                <div key={label} className="flex flex-col items-center text-center">
                  <Icon size={30} weight="regular" className="mb-4 text-[var(--color-green)]" />
                  <div className="whitespace-pre-line text-[10px] font-bold uppercase leading-tight tracking-[0.16em] text-[var(--color-muted)]">
                    {label}
                  </div>
                  {value && (
                    <div className="mt-3 font-display text-[20px] font-extrabold leading-none tracking-[-0.02em] text-[var(--color-ink)]">
                      {value}
                    </div>
                  )}
                  {sub && (
                    <div className="mt-2 text-[11px] text-[var(--color-body)]">{sub}</div>
                  )}
                </div>
              ))}
            </div>

            {colors.length > 0 && (
              <div className="mt-8 rounded-xl border border-[var(--color-green)]/25 bg-[#f4faf5] px-4 py-4 sm:px-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-green-deep)]">Colour options</p>
                    <p className="mt-1 text-xs text-[var(--color-body)]">Available GT Drive finishes</p>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">{colors.length} finishes</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {colors.map((color) => (
                    <span key={color} className="group relative inline-flex h-8 w-8 rounded-full border border-black/15 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)]" style={colourSwatchStyle(color)} role="img" aria-label={`${color} finish`} tabIndex={0}>
                      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[var(--color-ink)] px-2 py-1 text-[10px] font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">{color}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
