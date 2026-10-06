import Image from "next/image";
import { asset } from "@/lib/asset";
import { isPortraitProductImage } from "@/lib/productImage";

type Props = {
  images: string[];
  name: string;
};

const angleLabels = ["Left side", "Right side", "Front", "Back"] as const;

export function ScootersGallery({ images, name }: Props) {
  return (
    <section className="bg-white py-20 md:py-28">
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
            Four clear views of the {name}: both sides, front and back.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 md:gap-7">
          {images.map((image, index) => (
            <figure key={image} className="overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_12px_30px_rgba(17,17,17,0.05)]">
              <div className={`relative w-full overflow-hidden bg-[#ececec] ${isPortraitProductImage(image) ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <Image
                  src={asset(image)}
                  alt={`${name} ${angleLabels[index]?.toLowerCase() ?? "view"}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="px-5 py-4 font-display text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-ink)]">
                {angleLabels[index] ?? `View ${index + 1}`}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
