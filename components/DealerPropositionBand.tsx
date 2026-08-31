import {
  BatteryCharging,
  Factory,
  Storefront,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";

const pillars = [
  {
    icon: BatteryCharging,
    title: "In-house battery",
    line: "A lithium battery capability developed inside the Houstan Innovations ecosystem, not sourced third-party.",
  },
  {
    icon: Factory,
    title: "Five-state manufacturing",
    line: "Production and assembly across Uttar Pradesh, Bihar, Maharashtra, Madhya Pradesh, and Telangana.",
  },
  {
    icon: Storefront,
    title: "Nine-model catalogue",
    line: "A complete Indian electric scooter range — from the everyday Soul to the flagship Drive Pro.",
  },
];

export function DealerPropositionBand() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-[clamp(36px,5vw,72px)] font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--color-ink)]">
                An Indian EV brand with{" "}
                <span className="text-[var(--color-green)]">
                  product, plant, and programme
                </span>{" "}
                already in place.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-[var(--color-body)]">
                Before we get to benefits and paperwork — this is what backs
                every GT Drive dealership on day one.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {pillars.map(({ icon: Icon, title, line }) => (
                <Reveal key={title} delay={100}>
                  <li className="grid grid-cols-[auto_1fr] items-start gap-6 py-8">
                    <Icon
                      weight="light"
                      className="mt-1 h-7 w-7 text-[var(--color-green)]"
                    />
                    <div>
                      <h3 className="text-2xl font-medium tracking-tight text-[var(--color-ink)]">
                        {title}
                      </h3>
                      <p className="mt-3 max-w-lg text-[15px] leading-[1.6] text-[var(--color-body)]">
                        {line}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
