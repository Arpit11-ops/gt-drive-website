import Image from "next/image";
import { asset } from "@/lib/asset";
import { isPortraitProductImage } from "@/lib/productImage";

type Props = {
  images: string[];
  name: string;
};

export function ScootersGallery({ images, name }: Props) {
  return (
    <section className="bg-[color-mix(in_srgb,var(--color-green)_7%,white)] py-20 md:py-28">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-10">
        <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-green-deep)]">
              <span className="h-[2px] w-6 bg-[var(--color-green)]" />
              The range
            </p>
            <h2 className="font-display text-[clamp(30px,4vw,56px)] font-extrabold uppercase leading-[0.98] tracking-[-0.04em] text-[var(--color-ink)]">
              See it from<br /><span className="text-[var(--color-green)]">every angle.</span>
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm leading-relaxed text-[var(--color-body)] md:block">
            {images.length} product views of the {name} range, prepared for closer inspection.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {images.map((image, index) => (
            <div key={image} className={`relative overflow-hidden rounded-2xl bg-white ${isPortraitProductImage(image) ? "aspect-[3/4]" : "aspect-[4/3]"} ${index === 0 ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2" : ""}`}>
              <Image
                src={asset(image)}
                alt={`${name} view ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
