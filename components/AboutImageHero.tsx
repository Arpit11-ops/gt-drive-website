import Image from "next/image";
import Link from "next/link";
import { ChargeLine } from "@/components/motion/ChargeLine";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/Reveal";

export function AboutImageHero() {
  return (
    <section className="relative flex h-screen min-h-[700px] items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/gt-drive/gt-drive-hero-showroom-ai-v1.webp"
          alt="GT Drive electric scooter in a contemporary showroom setting"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/45" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[var(--container-page)] px-6 pt-20 md:px-10">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-4 text-sm font-medium text-white/70">
            <ChargeLine width={64} tone="green" />
            Houstan Innovations LLP
          </div>
          <MaskReveal
            as="h1"
            className="mt-6 text-[clamp(48px,6.4vw,100px)] leading-[0.94] tracking-[-0.045em] text-white uppercase"
            delay={120}
          >
            Engineered in <span className="text-[var(--color-green)]">Greater Noida.</span>
          </MaskReveal>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/78 md:text-lg">
            GT Drive is the electric two-wheeler brand of Houstan Innovations LLP,
            headquartered in Greater Noida and built around battery capability,
            manufacturing infrastructure, and a growing dealer network.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/models/"
              className="inline-flex h-[52px] items-center justify-center rounded-sm bg-[var(--color-green)] px-8 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-deep)]"
            >
              Explore models
            </Link>
            <Link
              href="/dealers/"
              className="inline-flex h-[52px] items-center justify-center rounded-sm border border-white/35 px-8 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Dealer opportunity
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
