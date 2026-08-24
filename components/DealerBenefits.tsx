import {
  GraduationCap,
  Handshake,
  MapPin,
  Megaphone,
  Package,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";

const benefits = [
  {
    title: "Attractive dealership benefits",
    body: "A structured opportunity for partners entering India’s growing electric mobility market.",
    icon: Handshake,
  },
  {
    title: "Marketing and branding support",
    body: "Brand assets, campaign material, and showroom guidance in the GT Drive identity.",
    icon: Megaphone,
  },
  {
    title: "Inventory and business support",
    body: "Guidance for onboarding, inventory planning, and day-to-day dealership operations.",
    icon: Package,
  },
  {
    title: "Service and technical support",
    body: "Technical resources for after-sales service, spare parts, and dependable rider support.",
    icon: Wrench,
  },
  {
    title: "Training and operational guidance",
    body: "Ongoing product, sales, service, and operational guidance for dealer teams.",
    icon: GraduationCap,
  },
  {
    title: "Pan-India opportunity",
    body: "Build a local GT Drive presence within an expanding Indian electric mobility network.",
    icon: MapPin,
  },
];

export function DealerBenefits() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-ink)] px-6 py-24 text-white md:px-10 md:py-32">
      <div aria-hidden="true" className="absolute -right-48 -bottom-72 h-[620px] w-[620px] rounded-full bg-[var(--color-green)]/20 blur-[120px]" />
      <div className="relative mx-auto max-w-[var(--container-page)]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-[var(--color-green)] uppercase">
            Partner benefits
          </span>
          <h2 className="mt-7 text-[clamp(42px,6vw,78px)] leading-[0.92] tracking-[-0.05em]">
            Support built around the partnership.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
            GT Drive&apos;s dealership programme identifies the business, marketing, technical, and operational support offered to prospective partners.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const BenefitIcon = benefit.icon;
            return (
              <Reveal key={benefit.title} delay={(index % 3) * 80} className="h-full">
                <article className="group relative h-full min-h-[280px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-8 transition-colors duration-300 hover:bg-white/[0.075]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-[var(--color-green)]">
                    <BenefitIcon size={25} weight="duotone" />
                  </div>
                  <h3 className="mt-16 max-w-xs text-2xl leading-[1.02] tracking-[-0.035em]">{benefit.title}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">{benefit.body}</p>
                  <span aria-hidden="true" className="absolute right-7 bottom-7 h-2 w-2 rounded-full bg-[var(--color-green)] opacity-40 transition-all duration-300 group-hover:scale-[2] group-hover:opacity-100" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
