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
    body: "Access to the GT Drive electric scooter portfolio.",
  },
  {
    Icon: Megaphone,
    title: "Marketing Support",
    body: "Marketing and branding support for your showroom.",
  },
  {
    Icon: GraduationCap,
    title: "Training",
    body: "Training and operational guidance for you and your team.",
  },
  {
    Icon: Wrench,
    title: "Sales & Service Support",
    body: "Service and technical support for your operations.",
  },
];

export function DealerSupport() {
  return (
    <section className="bg-[var(--color-green)] py-20 md:py-28">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* LEFT — intro */}
          <div className="md:col-span-4">
            <p className="mb-6 text-[11px] font-bold tracking-[0.2em] text-[var(--color-green-deep)] uppercase">
              Our Support
            </p>
            <h2 className="font-display text-[clamp(36px,4.5vw,60px)] font-extrabold leading-[0.95] tracking-[-0.035em] text-[var(--color-ink)]">
              BUILD WITH<br />GT DRIVE.
            </h2>
            <span className="mt-6 block h-0.5 w-16 bg-[var(--color-green)]" />
            <p className="mt-8 max-w-xs text-[14px] leading-relaxed text-[var(--color-body)]">
              GT Drive supports dealer partners across product, marketing, inventory, service and training.
            </p>
          </div>

          {/* RIGHT — 4 pillars */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  data-motion-card
                  className="relative flex min-h-[210px] flex-col items-center rounded-[1.25rem] border border-[var(--color-line)] bg-white px-5 py-8 text-center shadow-[0_8px_24px_rgba(17,17,17,0.04)] transition-all hover:-translate-y-1 hover:border-[var(--color-green)]/40 hover:shadow-[0_16px_34px_rgba(17,17,17,0.08)]"
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
