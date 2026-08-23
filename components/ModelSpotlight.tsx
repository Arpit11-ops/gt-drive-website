import Image from "next/image";
import Link from "next/link";
import { getModel } from "@/lib/models";

export function ModelSpotlight() {
  const model = getModel("gt-drive-pro")!;
  const featuredSpecs = model.specs.filter((spec) =>
    ["Front tyre", "Rear tyre", "Braking technology", "Controller"].includes(spec.label),
  );

  return (
    <section
      aria-labelledby="spotlight-name"
      className="bg-[var(--color-stage)]"
    >
      <div className="mx-auto grid max-w-[var(--container-page)] gap-10 px-6 py-24 md:grid-cols-[1.4fr_1fr] md:gap-20 md:px-10 md:py-32">
        <div className="relative flex items-center justify-center">
          <Image
            src="/assets/gt-drive/generated/hero-drive-pro.png"
            alt={model.shortName}
            width={1536}
            height={1024}
            className="h-auto w-full max-w-[680px] object-contain"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-sm text-[var(--color-muted)]">
            Model 08 · Nine total
          </div>
          <h2
            id="spotlight-name"
            className="mt-4 text-[clamp(40px,4.5vw,72px)] leading-[0.95]"
          >
            GT — Drive Pro
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-[1.6] text-[var(--color-body)] md:text-base">
            {model.lead} Verified specifications, features, and available
            colours are presented on the dedicated model page.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-[var(--color-line)] pt-8">
            {featuredSpecs.map((spec) => (
              <div key={spec.label}>
                <dt className="text-xs font-medium text-[var(--color-muted)]">
                  {spec.label}
                </dt>
                <dd className="mt-2 text-base font-semibold text-[var(--color-ink)]">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
          <Link
            href={`/models/${model.slug}/`}
            className="mt-10 self-start text-sm font-semibold text-[var(--color-green-deep)] underline underline-offset-[6px]"
          >
            See full GT — Drive Pro specifications
          </Link>
        </div>
      </div>
    </section>
  );
}
