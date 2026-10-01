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
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-10">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] md:gap-10 lg:gap-16">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-green-deep)]">Features</p>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(28px,3vw,42px)] font-extrabold uppercase leading-[1.02] tracking-[-0.035em] text-[var(--color-ink)]">
              GT Drive features<span className="text-[var(--color-green)]">.</span>
            </h2>
            <ul className="mt-7 grid grid-cols-2 gap-x-4 sm:gap-x-8" aria-label="Scooter features">
              {features.map((feature) => (
                <li key={feature} className="flex min-h-11 items-center gap-2 border-b border-[var(--color-line)] py-2 text-[11px] font-bold uppercase leading-snug tracking-[0.06em] text-[var(--color-ink)] sm:text-xs">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-green)]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className={`relative mx-auto w-full max-w-[22rem] overflow-hidden rounded-[1.25rem] border border-black/[0.08] bg-[var(--color-stage)] shadow-[0_12px_30px_rgba(17,17,17,0.05)] md:justify-self-end ${isPortraitProductImage(image) ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
            <Image
              src={asset(image)}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, 35vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
