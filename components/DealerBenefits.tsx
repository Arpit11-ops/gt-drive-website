import {
  GraduationCap,
  Handshake,
  Megaphone,
  Package,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";

const benefits = [
  {
    title: "Dealership benefits",
    body: "A structured programme for partners entering the Indian electric two-wheeler market.",
    icon: Handshake,
  },
  {
    title: "Marketing and branding",
    body: "GT Drive brand assets, launch campaign material, and showroom identity guidance.",
    icon: Megaphone,
  },
  {
    title: "Inventory and business",
    body: "Onboarding, inventory planning, and day-to-day dealership operations support.",
    icon: Package,
  },
  {
    title: "Service and technical",
    body: "After-sales service, spare parts, and technical resources built for the range.",
    icon: Wrench,
  },
  {
    title: "Training and operations",
    body: "Ongoing product, sales, service, and operational training for dealer teams.",
    icon: GraduationCap,
  },
];

export function DealerBenefits() {
  return (
    <section className="bg-[var(--color-ink)] text-white">
      <div className="mx-auto max-w-[var(--container-page)] px-6 pt-24 md:px-10 md:pt-32">
        <Reveal className="max-w-4xl">
          <h2 className="text-[clamp(42px,5.4vw,74px)] font-semibold leading-[0.94] tracking-[-0.04em]">
            Five support areas,
            <br />
            <span className="text-white/55">from first day forward.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Every GT Drive dealership operates against the same brochure-listed
            programme — business, marketing, technical, and operational.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-[var(--container-page)] border-t border-white/12 md:mt-20">
        <ul className="grid grid-cols-1 divide-y divide-white/12 md:grid-cols-2 md:divide-y-0 md:divide-x lg:grid-cols-5">
          {benefits.map(({ icon: Icon, title, body }, index) => (
            <Reveal key={title} delay={100 + index * 70}>
              <li className="flex h-full flex-col justify-between gap-14 px-6 py-10 md:px-6 md:py-14 lg:px-7 lg:py-16">
                <div className="flex items-start justify-between gap-4">
                  <Icon
                    weight="light"
                    className="h-10 w-10 text-[var(--color-green)]"
                  />
                  <span className="font-display text-2xl font-semibold leading-none tracking-tight text-white/25">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-medium tracking-tight text-white md:text-[22px]">
                    {title}
                  </h3>
                  <p className="mt-4 text-[13px] leading-[1.6] text-white/60">
                    {body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>

      <div className="h-24 md:h-32" />
    </section>
  );
}
