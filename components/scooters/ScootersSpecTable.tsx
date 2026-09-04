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

export function ScootersSpecTable() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-0">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-0">
          {/* LEFT — stacked spec list */}
          <div className="md:col-span-6 md:pl-12 md:pr-10 lg:pl-16 lg:pr-14">
            <ul className="flex flex-col">
              {specs.map(({ Icon, label, value, sub }, i) => (
                <li
                  key={label}
                  className={`grid grid-cols-[56px_1fr_auto] items-center gap-6 py-5 ${
                    i > 0 ? "border-t border-[var(--color-line)]" : ""
                  }`}
                >
                  <Icon size={30} weight="regular" className="text-[var(--color-green)]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-ink)]">
                    {label}
                  </span>
                  <div className="text-right">
                    <div className="font-display text-[20px] font-extrabold leading-none tracking-[-0.02em] text-[var(--color-ink)]">
                      {value}
                    </div>
                    {sub && (
                      <div className="mt-1.5 text-[11px] text-[var(--color-body)]">{sub}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — scooter image with subtle diagonal green accent */}
          <div className="relative md:col-span-6 md:min-h-[380px]">
            {/* subtle diagonal light-grey wedge behind the scooter */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 bg-[var(--color-stage)] md:block"
              style={{ clipPath: "polygon(0 0, 100% 30%, 100% 70%, 0 100%)" }}
            />
            {/* green vertical accent stripe just before the image */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-8 left-0 hidden w-[3px] bg-[var(--color-green)] md:block"
            />

            <div className="relative aspect-[5/4] w-full">
              <Image
                src={asset("/assets/gt-drive/gt-flying-e4-real.webp")}
                alt="GT Flying electric scooter, side view"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
