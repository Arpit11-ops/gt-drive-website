import Image from "next/image";
import { asset } from "@/lib/asset";

type Block = {
  title: string;
  body: string;
  visual: React.ReactNode;
};

const blocks: Block[] = [
  {
    title: "A GROWING\nPRODUCT PORTFOLIO",
    body: "A nine-model electric scooter catalogue for different customer needs.",
    visual: (
      <Image
        src={asset("/assets/gt-drive/cleaned/Flying_E4_IMG_4006_clean.webp")}
        alt="GT Drive scooter"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover object-center"
      />
    ),
  },
  {
    title: "IN-HOUSE\nBATTERY CAPABILITY",
    body: "In-house lithium battery capability within the GT Drive ecosystem.",
    visual: (
      <div className="absolute inset-0 flex items-end justify-center bg-[#0f1a13] p-6">
        <div className="relative h-[55%] w-[85%] rounded-md bg-gradient-to-b from-[#1a2820] to-[#050a07] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_40px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-x-6 top-4 flex items-center justify-between">
            <span className="font-display text-[10px] font-bold tracking-[0.25em] text-white/80">GT DRIVE</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)] shadow-[0_0_8px_var(--color-green)]" />
          </div>
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 space-y-1.5">
            <div className="h-px bg-white/10" />
            <div className="h-px bg-white/10" />
            <div className="h-px bg-white/10" />
          </div>
          <div className="absolute inset-x-6 bottom-4 text-center">
            <span className="font-display text-[13px] font-extrabold tracking-[0.2em] text-white">LITHIUM-ION</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "A GROWING\nEV OPPORTUNITY",
    body: "Partner with GT Drive as electric mobility grows across India.",
    visual: (
      <Image
        src={asset("/assets/gt-drive/one-india-atmosphere.webp")}
        alt="Indian urban EV opportunity"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover object-center"
      />
    ),
  },
];

export function DealerOpportunity() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          {/* LEFT — intro */}
          <div className="md:col-span-4">
            <p className="mb-6 text-[11px] font-bold tracking-[0.2em] text-[var(--color-green-deep)] uppercase">
              The Opportunity
            </p>
            <h2 className="font-display text-[clamp(36px,4.5vw,60px)] font-extrabold leading-[0.95] tracking-[-0.035em] text-[var(--color-ink)]">
              A BUSINESS BUILT<br />FOR A GREENER<br />TOMORROW.
            </h2>
            <span className="mt-6 block h-0.5 w-16 bg-[var(--color-green)]" />
            <p className="mt-8 max-w-xs text-[14px] leading-relaxed text-[var(--color-body)]">
              Partner with GT Drive and be part of India&apos;s growing electric mobility revolution.
            </p>
          </div>

          {/* RIGHT — 3 tiles clipped as parallelograms so their edges chain into
              one continuous diagonal band. Each tile overlaps the next horizontally
              so the shared diagonals interlock. */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-0">
              {blocks.map((b, i) => {
                // First tile: straight left, diagonal right.
                // Middle tiles: parallelogram (diagonal both sides, same slope).
                // Last tile: diagonal left, straight right.
                const clipPath =
                  i === 0
                    ? "polygon(0 0, 100% 0, 88% 100%, 0 100%)"
                    : i === blocks.length - 1
                      ? "polygon(12% 0, 100% 0, 100% 100%, 0 100%)"
                      : "polygon(12% 0, 100% 0, 88% 100%, 0 100%)";
                return (
                  <div
                    key={b.title}
                    data-motion-card
                    className={`relative aspect-[3/4] overflow-hidden bg-[var(--color-stage)] ${
                      i > 0 ? "sm:-ml-[13%]" : ""
                    }`}
                    style={{ clipPath }}
                  >
                    {/* full-bleed image — fills the parallelogram edge to edge */}
                    {b.visual}

                    {/* Contrast veil keeps the labels legible over product and landscape imagery. */}
                    <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/10" />

                    {/* Text sits in a translucent panel so it remains readable at every breakpoint. */}
                    <div
                      className={`absolute top-5 z-[1] max-w-[84%] bg-black/60 px-4 py-4 shadow-lg md:top-6 md:px-5 md:py-5 ${
                        i === 0 ? "left-0 md:pl-6" : "left-[10%] md:pl-4"
                      }`}
                    >
                      <h3 className="mt-2 whitespace-pre-line font-display text-[15px] font-extrabold uppercase leading-[1.15] tracking-[-0.005em] text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.55)]">
                        {b.title}
                      </h3>
                      <p className="mt-3 max-w-[190px] text-[12.5px] leading-relaxed text-white/90 [text-shadow:0_1px_3px_rgba(0,0,0,0.55)]">
                        {b.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
