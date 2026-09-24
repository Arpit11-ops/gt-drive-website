import { BatteryHigh, Cpu, Lightning } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { asset } from "@/lib/asset";

type Card = {
  Icon: typeof BatteryHigh;
  title: string;
  body: string;
  visual: "battery" | "motor" | "bms";
};

const cards: Card[] = [
  {
    Icon: BatteryHigh,
    title: "Lithium-ion Battery",
    body: "In-house lithium battery capability for the GT Drive electric range.",
    visual: "battery",
  },
  {
    Icon: Lightning,
    title: "Hub Motor",
    body: "A powerful BLDC hub motor across the GT Drive electric range.",
    visual: "motor",
  },
  {
    Icon: Cpu,
    title: "Electric mobility",
    body: "A shared feature set designed around everyday electric mobility.",
    visual: "bms",
  },
];

function TechVisual({ kind }: { kind: Card["visual"] }) {
  if (kind === "battery") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-[#f3f6f4]">
        <Image
          src={asset("/assets/gt-drive/technology/gt-drive-battery-clean.png")}
          alt="GT Drive lithium-ion battery pack"
          fill
          sizes="300px"
          className="object-contain p-3"
        />
      </div>
    );
  }

  if (kind === "motor") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-[#f3f6f4]">
        <Image
          src={asset("/assets/gt-drive/technology/gt-drive-motor-clean.png")}
          alt="GT Drive electric hub motor"
          fill
          sizes="300px"
          className="object-contain p-2"
        />
      </div>
    );
  }

  // bms
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg bg-[#f3f6f4]">
      <Image
        src={asset("/assets/gt-drive/technology/gt-drive-bms-clean.png")}
        alt="GT Drive smart battery management system"
        fill
        sizes="300px"
        className="object-contain p-3"
      />
    </div>
  );
}

export function ScootersTechnology() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* LEFT — copy */}
          <div className="md:col-span-4">
            <p className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-green-deep)]">
              <span className="h-[2px] w-6 bg-[var(--color-green)]" />
              Technology
            </p>
            <h2 className="font-display text-[clamp(28px,3vw,42px)] font-extrabold uppercase leading-[1.02] tracking-[-0.035em] text-[var(--color-ink)]">
              <span className="block">Technology in</span>
              <span className="block">the catalogue.</span>
            </h2>
            <span className="mt-5 block h-[3px] w-16 bg-[var(--color-green)]" />
            <p className="mt-6 max-w-xs text-[13.5px] leading-relaxed text-[var(--color-body)]">
              Lithium battery capability, hub motor performance and practical electric mobility come together across the range.
            </p>
          </div>

          {/* RIGHT — infinite marquee of the 3 tech cards */}
          <div className="group/marquee relative overflow-hidden md:col-span-8">
            {/* soft fade masks on the edges so cards enter/exit gracefully */}
            <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
            <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

            <div className="flex w-max gap-5 motion-safe:animate-[marquee_28s_linear_infinite] group-hover/marquee:[animation-play-state:paused]">
              {[...cards, ...cards].map((c, i) => (
                <div
                  key={`${c.title}-${i}`}
                  data-motion-card
                  aria-hidden={i >= cards.length}
                  className="group flex w-[300px] shrink-0 flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white p-5 shadow-[0_2px_10px_rgba(17,17,17,0.03)]"
                >
                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-green)_10%,white)]">
                      <c.Icon size={20} weight="regular" className="text-[var(--color-green-deep)]" />
                    </span>
                    <div>
                      <h3 className="font-display text-[12px] font-extrabold uppercase tracking-[0.14em] text-[var(--color-ink)]">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-[12px] leading-relaxed text-[var(--color-body)]">
                        {c.body}
                      </p>
                    </div>
                  </div>

                  <div className="relative mt-5 aspect-[5/3] w-full">
                    <TechVisual kind={c.visual} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
