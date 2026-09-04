import { BatteryHigh, Cpu, Lightning } from "@phosphor-icons/react/dist/ssr";

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
    body: "High performance and longer life.",
    visual: "battery",
  },
  {
    Icon: Lightning,
    title: "Powerful Motor",
    body: "Instant torque for a smooth ride.",
    visual: "motor",
  },
  {
    Icon: Cpu,
    title: "Smart BMS",
    body: "Intelligent protection for better efficiency.",
    visual: "bms",
  },
];

function TechVisual({ kind }: { kind: Card["visual"] }) {
  if (kind === "battery") {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-[#0f1a13] p-4">
        <div className="relative h-[72%] w-[80%] rounded-md bg-gradient-to-b from-[#1c2a22] to-[#050a07] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <div className="absolute inset-x-3 top-3 flex items-center justify-between">
            <span className="font-display text-[8px] font-bold tracking-[0.22em] text-white/85">GT DRIVE</span>
            <span className="h-1 w-1 rounded-full bg-[var(--color-green)] shadow-[0_0_6px_var(--color-green)]" />
          </div>
          <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 space-y-1">
            <div className="h-px bg-white/12" />
            <div className="h-px bg-white/12" />
            <div className="h-px bg-white/12" />
          </div>
          <div className="absolute inset-x-3 bottom-3 text-center">
            <span className="font-display text-[9px] font-extrabold tracking-[0.18em] text-white">LITHIUM-ION</span>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "motor") {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-[#0f1a13] p-4">
        <div className="relative grid h-[80%] w-[80%] place-items-center rounded-full bg-gradient-to-br from-[#1c2a22] via-[#0a120c] to-[#050a07] shadow-[inset_0_2px_0_rgba(255,255,255,0.08),inset_0_-20px_40px_rgba(0,0,0,0.6)]">
            <div className="grid h-2/3 w-2/3 place-items-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#2a3a30,#050a07)] shadow-[inset_0_0_20px_rgba(0,0,0,0.7)]">
              <div className="grid h-1/2 w-1/2 place-items-center rounded-full border border-white/10 bg-black">
                <Lightning size={18} weight="fill" className="text-[var(--color-green)]" />
              </div>
            </div>
            {/* fin marks */}
            {[...Array(12)].map((_, i) => (
              <span
                key={i}
                className="absolute inset-0 flex items-start justify-center"
                style={{ transform: `rotate(${i * 30}deg)` }}
              >
                <span className="mt-1.5 h-2 w-px bg-white/20" />
              </span>
            ))}
        </div>
      </div>
    );
  }

  // bms
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-[#0f1a13] p-4">
      <div className="relative h-[78%] w-[80%] rounded-md bg-[#0a1410] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        {/* circuit traces */}
        <svg
          aria-hidden
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <path d="M8 22 H40 V50 H70 V80 H92" stroke="var(--color-green)" strokeWidth="0.5" strokeOpacity="0.55" fill="none" />
          <path d="M8 70 H30 V38 H60 V60 H88" stroke="var(--color-green)" strokeWidth="0.5" strokeOpacity="0.35" fill="none" />
          {[
            [8, 22],
            [40, 50],
            [70, 80],
            [30, 38],
            [60, 60],
            [88, 60],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="1.4" fill="var(--color-green)" />
          ))}
        </svg>
        {/* center chip */}
        <div className="absolute left-1/2 top-1/2 grid h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-md border border-white/10 bg-gradient-to-br from-[#1a2820] to-[#050a07]">
          <span className="font-display text-[9px] font-extrabold tracking-[0.2em] text-[var(--color-green)]">BMS</span>
        </div>
      </div>
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
              <span className="font-display text-[15px] font-extrabold italic leading-none text-[var(--color-green)]">04</span>
              <span className="h-[2px] w-6 bg-[var(--color-green)]" />
              Technology
            </p>
            <h2 className="font-display text-[clamp(28px,3vw,42px)] font-extrabold uppercase leading-[1.02] tracking-[-0.035em] text-[var(--color-ink)]">
              <span className="block">Smart Technology.</span>
              <span className="block">Smoother Performance.</span>
            </h2>
            <span className="mt-5 block h-[3px] w-16 bg-[var(--color-green)]" />
            <p className="mt-6 max-w-xs text-[13.5px] leading-relaxed text-[var(--color-body)]">
              Advanced battery and motor technology delivering efficiency, reliability and power.
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
