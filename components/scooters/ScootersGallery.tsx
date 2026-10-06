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
    <section aria-label={`${name} gallery`} className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 md:gap-7">
          {images.map((image, index) => (
            <figure key={image} className="overflow-hidden rounded-2xl bg-[#ececec]">
              <div className={`relative w-full overflow-hidden bg-[#ececec] ${isPortraitProductImage(image) ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <Image
                  src={asset(image)}
                  alt={`${name} ${angleLabels[index]?.toLowerCase() ?? "view"}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
