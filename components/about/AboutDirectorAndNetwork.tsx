import Image from "next/image";
import { HeartStraight, MapPin, Quotes, UserCircle, UsersThree, Wrench } from "@phosphor-icons/react/dist/ssr";
import { asset } from "@/lib/asset";
import { SectionKicker } from "@/components/about/SectionKicker";

type Stat = {
  Icon: typeof UsersThree;
  value: string;
  label: string;
};

const stats: Stat[] = [
  { Icon: UsersThree, value: "500+", label: "Channel\nPartners" },
  { Icon: MapPin, value: "100+", label: "Cities\nCovered" },
  { Icon: Wrench, value: "50+", label: "Service\nCenters" },
  { Icon: HeartStraight, value: "5000+", label: "Happy\nCustomers" },
];

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
                At GT Drive, our vision is simple yet powerful — to build a cleaner, smarter and
                more sustainable India through electric mobility.
              </p>
              <p className="mt-4 max-w-md text-[13.5px] leading-relaxed text-[var(--color-body)]">
                We are driven by innovation, guided by responsibility and committed to creating
                value for our customers, partners and society.
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

            {/* Portrait — placeholder until real photo lands */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[color-mix(in_srgb,var(--color-ink)_92%,white)] md:col-span-2 md:aspect-auto md:min-h-[360px]">
              <div className="absolute inset-0 grid place-items-center">
                <UserCircle size={110} weight="thin" className="text-white/25" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85">
                <span>Md. Kaif Ahmad</span>
                <span className="rounded-full border border-white/25 px-2 py-0.5 text-[9px] text-white/60">
                  Photo pending
                </span>
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
              A robust network that powers our presence and brings GT Drive closer to you.
            </p>

            {/* 2×2 stat grid */}
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
              {stats.map(({ Icon, value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center rounded-xl bg-[color-mix(in_srgb,var(--color-green)_6%,white)] px-3 py-5 text-center"
                >
                  <Icon size={26} weight="regular" className="mb-3 text-[var(--color-green-deep)]" />
                  <div className="font-display text-[22px] font-extrabold leading-none tracking-[-0.02em] text-[var(--color-ink)]">
                    {value}
                  </div>
                  <div className="mt-2 whitespace-pre-line text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-body)]">
                    {label}
                  </div>
                </div>
              ))}
            </div>

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
