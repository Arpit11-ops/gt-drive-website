import Image from "next/image";
import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { asset } from "@/lib/asset";
import { SectionKicker } from "@/components/about/SectionKicker";

// Green network dots dropped over the India map silhouette (percentages).
const networkDots = [
  { l: "47%", t: "34%" }, // Delhi / NCR
  { l: "27%", t: "58%" }, // Mumbai
  { l: "39%", t: "70%" }, // Bengaluru
  { l: "35%", t: "48%" }, // Indore
  { l: "58%", t: "40%" }, // Patna
  { l: "40%", t: "62%" }, // Hyderabad
  { l: "31%", t: "42%" }, // Ahmedabad
  { l: "48%", t: "76%" }, // Chennai
  { l: "60%", t: "56%" }, // Kolkata
  { l: "44%", t: "28%" }, // Chandigarh
  { l: "51%", t: "44%" }, // Kanpur
  { l: "26%", t: "48%" }, // Surat
];

export function AboutDirectorAndNetwork() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-14">
          {/* 04 — DIRECTOR */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-6">
            <div className="md:col-span-3">
              <SectionKicker n="04" />
              <h2 className="font-display text-[clamp(28px,2.6vw,36px)] font-extrabold uppercase leading-[1] tracking-[-0.025em] text-[var(--color-ink)]">
                Our Director
              </h2>

              <Quotes size={38} weight="fill" className="mt-8 text-[var(--color-green)]" />

              <p className="mt-4 max-w-md text-[13.5px] leading-relaxed text-[var(--color-body)]">
                GT Drive is building an electric mobility brand for riders and business partners
                across India.
              </p>
              <p className="mt-4 max-w-md text-[13.5px] leading-relaxed text-[var(--color-body)]">
                The aim is straightforward: reliable products, strong technology and dependable
                support from the first conversation onward.
              </p>

              {/* signature (script placeholder — swap for a real signature SVG later) */}
              <p
                className="mt-8 text-[26px] leading-none text-[var(--color-ink)]"
                style={{ fontFamily: '"Brush Script MT", "Segoe Script", cursive' }}
              >
                K. Ahmad
              </p>

              <p className="mt-3 font-display text-[13px] font-extrabold uppercase tracking-[0.08em] text-[var(--color-green-deep)]">
                Md. Kaif Ahmad
              </p>
              <p className="mt-1 text-[12px] text-[var(--color-body)]">
                Director, Houstan Innovations LLP
              </p>
            </div>

            {/* Leadership profile card — kept typographic until an approved portrait is available. */}
            <div className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-2xl bg-[color-mix(in_srgb,var(--color-ink)_92%,white)] p-6 md:col-span-2 md:aspect-auto md:min-h-[360px]">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-green)]">Leadership profile</span>
              <div>
                <div className="font-display text-[112px] font-extrabold leading-none tracking-[-0.08em] text-white/[0.12]">KA</div>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85">Md. Kaif Ahmad</p>
                <p className="mt-1 text-[11px] text-white/55">Director · Houstan Innovations LLP</p>
              </div>
            </div>
          </div>

          {/* 05 — NATIONWIDE NETWORK */}
          <div>
            <SectionKicker n="05" />
            <h2 className="font-display text-[clamp(28px,2.6vw,36px)] font-extrabold uppercase leading-[1] tracking-[-0.025em] text-[var(--color-ink)]">
              Our Nationwide Network
            </h2>

            <p className="mt-4 max-w-md text-[13px] leading-relaxed text-[var(--color-body)]">
              Sales, service and channel partners help bring GT Drive closer to riders across India.
            </p>

            {/* India network map */}
            <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden">
              <Image
                src={asset("/assets/gt-drive/india-states-premium.svg")}
                alt="GT Drive nationwide network across India"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain opacity-30"
              />
              {/* connection lines from Delhi/NCR out to a few hubs */}
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {networkDots.slice(1).map((d, i) => (
                  <line
                    key={i}
                    x1="47"
                    y1="34"
                    x2={parseFloat(d.l)}
                    y2={parseFloat(d.t)}
                    stroke="var(--color-green)"
                    strokeWidth="0.15"
                    strokeOpacity="0.35"
                  />
                ))}
              </svg>
              {networkDots.map((d, i) => (
                <span
                  key={i}
                  className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-green)] shadow-[0_0_8px_var(--color-green)]"
                  style={{ left: d.l, top: d.t }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
