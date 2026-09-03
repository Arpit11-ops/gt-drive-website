import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ChargeLine } from "@/components/motion/ChargeLine";
import { CountUp } from "@/components/motion/CountUp";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/Reveal";
import { asset } from "@/lib/asset";

const stats = [
  { value: "9", label: "Models in the range" },
  { value: "5", label: "Plant states" },
  { value: "5", label: "Dealer support areas" },
];

export function DealerOpportunityHero() {
  return (
    <section className="bg-white px-4 pb-12 pt-24 md:px-8 md:pb-20 md:pt-28">
      <Reveal className="mx-auto max-w-[var(--container-page)]">
        <div className="group relative h-[680px] overflow-hidden rounded-[28px] bg-[var(--color-ink)] shadow-[0_24px_70px_rgba(17,17,17,0.16)] md:h-[600px]">
          <Image
            src={asset("/assets/gt-drive/gt-drive-pro-real.webp")}
            alt="GT Drive Pro electric scooter"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1440px"
            className="object-cover object-[64%_center] transition-transform duration-1000 ease-out group-hover:scale-[1.025] md:object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,24,15,0.96)_0%,rgba(8,24,15,0.82)_38%,rgba(8,24,15,0.18)_72%,rgba(8,24,15,0.08)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,24,15,0.82)_0%,transparent_48%)] md:bg-[linear-gradient(0deg,rgba(8,24,15,0.42)_0%,transparent_46%)]" />

          <div className="relative z-10 flex h-full flex-col justify-between px-7 py-9 md:px-14 md:py-14 lg:px-20">
            <div className="max-w-3xl pt-6 md:pt-10">
              <p className="mb-7 flex items-center gap-4 text-xs font-semibold tracking-[0.2em] text-white/75 uppercase">
                <ChargeLine width={56} tone="green" />
                Pan-India dealership opportunity
              </p>
              <MaskReveal
                as="h1"
                className="max-w-[760px] text-[clamp(48px,7vw,96px)] leading-[0.88] tracking-[-0.055em] text-white"
                delay={80}
              >
                Open a GT Drive <span className="text-[var(--color-green)]">showroom.</span>
              </MaskReveal>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-white/72 md:text-lg">
                Partner with GT Drive and become part of India&apos;s growing electric mobility network.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <Link
                  href="#dealer-enquiry"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-[var(--color-green)] px-6 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-deep)]"
                >
                  Enquire about dealership <ArrowUpRight size={16} weight="bold" />
                </Link>
                <Link
                  href="/locations/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/45 underline-offset-[6px] transition-colors hover:decoration-white"
                >
                  View plant locations <ArrowUpRight size={16} weight="bold" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 md:hidden">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/15 bg-black/25 p-3 backdrop-blur-md">
                  <div className="text-2xl font-bold text-white">
                    <CountUp to={Number(stat.value)} />
                  </div>
                  <div className="mt-1 text-[10px] leading-tight text-white/65">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/models/"
            className="absolute top-9 right-9 z-20 hidden w-[250px] overflow-hidden rounded-2xl border border-white/35 bg-white/88 p-3 shadow-xl backdrop-blur-lg transition-transform hover:-translate-y-1 lg:block motion-safe:animate-[dealer-card-float_4s_ease-in-out_infinite]"
          >
            <div className="relative h-36 overflow-hidden rounded-xl bg-[var(--color-stage)]">
              <Image
                src={asset("/assets/gt-drive/gt-flying-e4-real.webp")}
                alt="GT Flying electric scooter"
                fill
                sizes="250px"
                className="object-cover mix-blend-multiply"
              />
            </div>
            <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-4">
              <div>
                <div className="text-[11px] font-semibold tracking-[0.12em] text-[var(--color-green-deep)] uppercase">Explore the range</div>
                <div className="mt-1 text-sm font-bold text-[var(--color-ink)]">Nine models in production</div>
              </div>
              <ArrowUpRight size={19} weight="bold" className="shrink-0 text-[var(--color-ink)]" />
            </div>
          </Link>

          <div className="absolute right-9 bottom-9 z-20 hidden overflow-hidden rounded-2xl border border-white/45 bg-white/88 shadow-xl backdrop-blur-lg md:flex">
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex items-center">
                {index > 0 && <span className="h-12 w-px bg-black/10" />}
                <div className="min-w-[145px] px-6 py-4">
                  <div className="text-2xl font-bold tracking-[-0.04em] text-[var(--color-ink)]">
                    <CountUp to={Number(stat.value)} />
                  </div>
                  <div className="mt-1 text-[11px] text-[var(--color-body)]">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
