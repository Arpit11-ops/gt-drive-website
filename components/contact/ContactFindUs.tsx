import { ArrowRight, Factory, MapPin, NavigationArrow, Plug } from "@phosphor-icons/react/dist/ssr";

type Plant = {
  n: string;
  name: string;
  address: string;
};

const HEAD_OFFICE = {
  name: "Head Office",
  address: "Plot No. 266, Kasna Ecotech-XI, Gautam Buddha Nagar, Uttar Pradesh - 201310",
};

const plants: Plant[] = [
  {
    n: "1",
    name: "Houstan Innovations LLP",
    address: "Plot No. 266, Kasna Ecotech-XI, Gautam Buddha Nagar, Uttar Pradesh - 201310",
  },
  {
    n: "2",
    name: "Bihar Plant",
    address:
      "Khata No. 113, Mohi-Mohudinpur, Near Punpun River, (Opp. Bakhpur Bagicha) Sakraicha, P.O Punpun, Dist Patna, Bihar - 804453",
  },
  {
    n: "4",
    name: "Madhya Pradesh Plant",
    address: "Khasra No. 246/12, Sanwer Indore, Madhya Pradesh - 453551",
  },
  {
    n: "5",
    name: "Telangana Plant",
    address:
      "Plot No.17, Phase-V, Navodaya Society, IDA Cherlapally, Near Hindustan Cables Ltd. Uppal, Medchal Malkajgiri Hyderabad, Telangana - 500051",
  },
];

const HEAD_OFFICE_QUERY = encodeURIComponent(
  "Plot No. 266, Kasna Ecotech-XI, Gautam Buddha Nagar, Uttar Pradesh 201310",
);
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${HEAD_OFFICE_QUERY}&output=embed`;
const MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${HEAD_OFFICE_QUERY}`;

export function ContactFindUs() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-12 lg:px-16">
        {/* header */}
        <div>
          <p className="text-[11px] font-bold tracking-[0.24em] text-[var(--color-green-deep)] uppercase">
            Find Us
          </p>
          <h2 className="mt-4 font-display text-[clamp(30px,3.6vw,50px)] font-extrabold uppercase leading-[1.05] tracking-[-0.035em] text-[var(--color-ink)]">
            <span className="block">We&apos;re here.</span>
            <span className="block text-[var(--color-green)]">Let&apos;s meet.</span>
          </h2>
          <div className="mt-5 flex items-center gap-2">
            <span className="h-[3px] w-[110px] bg-[var(--color-green)]" />
            <span className="h-[3px] w-[22px] bg-[var(--color-green)]" />
            <Plug size={15} weight="fill" className="-ml-1 text-[var(--color-green)]" />
          </div>
        </div>

        {/* locations */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {/* LEFT — Head Office */}
          <div>
            <div className="flex items-start gap-4 rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-[0_2px_10px_rgba(17,17,17,0.03)]">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-green)_10%,white)]">
                <MapPin size={22} weight="regular" className="text-[var(--color-green-deep)]" />
              </span>
              <div>
                <h3 className="font-display text-[13px] font-extrabold uppercase tracking-[0.14em] text-[var(--color-ink)]">
                  {HEAD_OFFICE.name}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-body)]">
                  {HEAD_OFFICE.address}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — 4 numbered plant cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {plants.map((p) => (
              <div
                key={p.n}
                className="flex items-start gap-4 rounded-2xl border border-[var(--color-line)] bg-white p-5 shadow-[0_2px_10px_rgba(17,17,17,0.03)]"
              >
                <div className="relative shrink-0">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-green)_10%,white)]">
                    <Factory size={18} weight="regular" className="text-[var(--color-green-deep)]" />
                  </span>
                  <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-[var(--color-green)] font-display text-[10px] font-extrabold text-white">
                    {p.n}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-[12px] font-extrabold uppercase tracking-[0.12em] text-[var(--color-ink)]">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-[var(--color-body)]">
                    {p.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* map + Get Directions */}
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-stage)]">
          <iframe
            title="GT Drive Head Office location"
            src={MAP_EMBED_SRC}
            loading="lazy"
            className="block h-[380px] w-full border-0 md:h-[420px]"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            href={MAP_DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="group absolute bottom-6 right-6 z-10 inline-flex h-12 items-center gap-2 rounded-full bg-white px-5 text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--color-ink)] shadow-[0_10px_30px_rgba(17,17,17,0.14)] transition-colors hover:bg-[var(--color-ink)] hover:text-white"
          >
            <NavigationArrow size={14} weight="bold" className="text-[var(--color-green)] group-hover:text-white" />
            Get Directions
            <ArrowRight size={13} weight="bold" className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
