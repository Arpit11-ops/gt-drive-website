import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { getModel } from "@/lib/models";

export function ModelSpotlight() {
  const model = getModel("gt-drive-pro")!;
  const featuredSpecs = model.specs.filter((spec) =>
    ["Front tyre", "Rear tyre", "Braking technology", "Controller"].includes(spec.label),
  );

  return (
    <section
      aria-labelledby="spotlight-name"
      className="relative overflow-hidden bg-[var(--color-green-deep)] text-white"
    >
      <div className="mx-auto grid max-w-[var(--container-page)] gap-10 px-6 py-28 md:grid-cols-[1.4fr_1fr] md:gap-20 md:px-10 md:py-40">
        <Reveal className="relative flex items-center justify-center">
          <Image
            src="/assets/gt-drive/generated/hero-drive-pro.png"
            alt={model.shortName}
            width={1536}
            height={1024}
            className="h-auto w-full max-w-[720px] object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.25)]"
          />
        </Reveal>
        <div className="flex flex-col justify-center">
          <Reveal>
            <div className="text-sm text-white/60">Model 08 · Nine total</div>
          </Reveal>
          <Reveal delay={80}>
            <h2
              id="spotlight-name"
              className="mt-4 text-[clamp(44px,5vw,84px)] leading-[0.95] tracking-[-0.03em]"
            >
              GT — Drive Pro
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-md text-[15px] leading-[1.6] text-white/80 md:text-base">
              {model.lead} Verified specifications, features, and available
              colours are presented on the dedicated model page.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/20 pt-8">
              {featuredSpecs.map((spec) => (
                <div key={spec.label}>
                  <dt className="text-xs font-medium text-white/60">
                    {spec.label}
                  </dt>
                  <dd className="mt-2 text-base font-semibold text-white">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={280}>
            <Link
              href={`/models/${model.slug}/`}
              className="mt-10 inline-block self-start text-sm font-semibold text-white underline underline-offset-[6px] decoration-white/60 hover:decoration-white"
            >
              See full GT — Drive Pro specifications
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
