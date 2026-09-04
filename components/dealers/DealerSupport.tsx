import { GraduationCap, Megaphone, Motorcycle, Wrench } from "@phosphor-icons/react/dist/ssr";

type Pillar = {
  Icon: typeof Motorcycle;
  title: string;
  body: string;
};

const pillars: Pillar[] = [
  {
    Icon: Motorcycle,
    title: "Product Support",
    body: "Access to GT's electric scooter portfolio.",
  },
  {
    Icon: Megaphone,
    title: "Marketing Support",
    body: "Brand communication, marketing assets and campaign support.",
  },
  {
    Icon: GraduationCap,
    title: "Training",
    body: "Product and process training for you and your team.",
  },
  {
    Icon: Wrench,
    title: "Sales & Service Support",
    body: "Guidance and support across sales and after-sales operations.",
  },
];

export function DealerSupport() {
  return (
    <section className="bg-[var(--color-stage)] py-20 md:py-28">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* LEFT — intro */}
          <div className="md:col-span-4">
            <p className="mb-6 text-[11px] font-bold tracking-[0.2em] text-[var(--color-green-deep)] uppercase">
              Our Support
            </p>
            <h2 className="font-display text-[clamp(36px,4.5vw,60px)] font-extrabold leading-[0.95] tracking-[-0.035em] text-[var(--color-ink)]">
              WE GROW<br />TOGETHER.
            </h2>
            <span className="mt-6 block h-0.5 w-16 bg-[var(--color-green)]" />
            <p className="mt-8 max-w-xs text-[14px] leading-relaxed text-[var(--color-body)]">
              From product to after-sales, we provide the support you need to establish and grow your GT dealership.
            </p>
          </div>

          {/* RIGHT — 4 pillars */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0">
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className={`relative flex flex-col items-center px-4 text-center md:px-6 ${
                    i > 0 ? "md:border-l md:border-[var(--color-line)]" : ""
                  }`}
                >
                  <p.Icon size={44} weight="regular" className="mb-6 text-[var(--color-green)]" />
                  <h3 className="font-display text-[13px] font-extrabold uppercase tracking-[0.05em] text-[var(--color-ink)]">
                    {p.title}
                  </h3>
                  <p className="mt-4 max-w-[180px] text-[12.5px] leading-relaxed text-[var(--color-body)]">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
