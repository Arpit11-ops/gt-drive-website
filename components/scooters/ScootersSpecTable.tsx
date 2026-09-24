import Image from "next/image";
import { asset } from "@/lib/asset";
import { isPortraitProductImage } from "@/lib/productImage";

type Props = {
  image?: string;
  alt?: string;
  features?: string[];
};

export function ScootersSpecTable({
  image = "/assets/gt-drive/gt-flying-e4-real.webp",
  alt = "GT Drive scooter, side view",
  features = [],
}: Props = {}) {
  return (
    <section className="bg-[var(--color-stage)] py-16 md:py-20">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-0">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-0">
          {/* LEFT — brochure feature badges */}
          <div className="md:col-span-6 md:pl-12 md:pr-10 lg:pl-16 lg:pr-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-green-deep)]">
              Features
            </p>
            <h2 className="mt-4 max-w-md font-display text-[clamp(28px,3vw,42px)] font-extrabold uppercase leading-[1.02] tracking-[-0.035em] text-[var(--color-ink)]">
              The shared GT Drive feature set<span className="text-[var(--color-green)]">.</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {features.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center rounded-full border border-[var(--color-green)]/35 bg-[color-mix(in_srgb,var(--color-green)_11%,white)] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--color-green-deep)]"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — scooter image with subtle diagonal green accent */}
          <div className="relative md:col-span-6 md:min-h-[380px]">
            {/* subtle diagonal light-grey wedge behind the scooter */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 bg-[var(--color-stage)] md:block"
              style={{ clipPath: "polygon(0 0, 100% 30%, 100% 70%, 0 100%)" }}
            />
            {/* green vertical accent stripe just before the image */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-8 left-0 hidden w-[3px] bg-[var(--color-green)] md:block"
            />

            <div className={`relative w-full overflow-hidden rounded-2xl bg-[var(--color-stage)] ${isPortraitProductImage(image) ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
              <Image
                src={asset(image)}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
