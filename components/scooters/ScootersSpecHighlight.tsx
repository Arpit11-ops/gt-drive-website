import Image from "next/image";
import {
  BatteryHigh,
  Gauge,
  Path,
  PlugCharging,
} from "@phosphor-icons/react/dist/ssr";
import { asset } from "@/lib/asset";

type Spec = {
  Icon: typeof Gauge;
  label: string;
  value: string;
  sub?: string;
};

const specs: Spec[] = [
  { Icon: Path, label: "Range", value: "100 km", sub: "Per Charge" },
  { Icon: Gauge, label: "Top Speed", value: "70 km/h" },
  { Icon: BatteryHigh, label: "Battery", value: "2.5 kWh", sub: "Lithium-ion" },
  { Icon: PlugCharging, label: "Charging Time", value: "4-5 hrs", sub: "(0-100%)" },
];

type Props = {
  image?: string;
  alt?: string;
};

export function ScootersSpecHighlight({
  image = "/assets/gt-drive/gt-flying-e4-real.webp",
  alt = "GT Drive scooter",
}: Props = {}) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-0">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-0">
          {/* LEFT — kicker + scooter image */}
          <div className="relative md:col-span-6 md:pl-12 lg:pl-16">
            <p className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-green-deep)]">
              <span className="font-display text-[15px] font-extrabold italic leading-none text-[var(--color-green)]">02</span>
              <span className="h-[2px] w-6 bg-[var(--color-green)]" />
              Specifications
            </p>

            <div className="relative aspect-[5/4] w-full">
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
          <div className="relative md:col-span-6 md:border-l md:border-[var(--color-line)] md:pl-10 md:pr-12 lg:pl-14 lg:pr-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Everything That
            </p>
            <h2 className="mt-3 font-display text-[clamp(28px,3.2vw,44px)] font-extrabold uppercase leading-[1.05] tracking-[-0.03em] text-[var(--color-ink)]">
              Powers Your Ride<span className="text-[var(--color-green)]">.</span>
            </h2>
            <span className="mt-4 block h-[3px] w-16 bg-[var(--color-green)]" />

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-4">
              {specs.map(({ Icon, label, value, sub }) => (
                <div key={label} className="flex flex-col items-center text-center">
                  <Icon size={30} weight="regular" className="mb-4 text-[var(--color-green)]" />
                  <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                    {label}
                  </div>
                  <div className="mt-3 font-display text-[20px] font-extrabold leading-none tracking-[-0.02em] text-[var(--color-ink)]">
                    {value}
                  </div>
                  {sub && (
                    <div className="mt-2 text-[11px] text-[var(--color-body)]">{sub}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
