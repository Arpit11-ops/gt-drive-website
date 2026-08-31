import Link from "next/link";
import {
  ArrowUpRight,
  Handshake,
  Megaphone,
  Package,
  Wrench,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";

const supportAreas = [
  { icon: Handshake, label: "Dealership benefits" },
  { icon: Megaphone, label: "Marketing and branding" },
  { icon: Package, label: "Inventory and business support" },
  { icon: Wrench, label: "Service and technical support" },
  { icon: UsersThree, label: "Training and operational guidance" },
];

export function AboutDealerInvite() {
  return (
    <section className="bg-[var(--color-stage)]">
      <div className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-[clamp(36px,4.8vw,68px)] font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--color-ink)]">
                Build the electric two-wheeler business,{" "}
                <span className="text-[var(--color-green)]">together.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-[var(--color-body)]">
                Partner with GT Drive on the five support areas that carry a
                dealership from first enquiry to daily operation.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <Link
                href="/dealers/"
                className="mt-10 inline-flex h-[52px] items-center gap-2 rounded-sm bg-[var(--color-green)] px-6 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-deep)]"
              >
                See the dealership opportunity
                <ArrowUpRight size={16} weight="bold" />
              </Link>
            </Reveal>
          </div>

          <ul className="lg:col-span-6 lg:col-start-7">
            {supportAreas.map(({ icon: Icon, label }, index) => (
              <Reveal key={label} delay={80 + index * 60}>
                <li className="flex items-center gap-5 border-t border-[var(--color-line)] py-6 last:border-b">
                  <Icon
                    weight="light"
                    className="h-6 w-6 flex-none text-[var(--color-green)]"
                  />
                  <span className="text-xl font-medium tracking-tight text-[var(--color-ink)]">
                    {label}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
