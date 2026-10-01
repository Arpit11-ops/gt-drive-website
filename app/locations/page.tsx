import type { Metadata } from "next";
import { Factory, MapPin } from "@phosphor-icons/react/dist/ssr";
import { ContactClose } from "@/components/ContactClose";
import { Reveal } from "@/components/Reveal";
import { locations } from "@/lib/models";

export const metadata: Metadata = {
  title: "Locations",
  description: "GT Drive plants and operating locations across India.",
};

export default function LocationsPage() {
  return (
    <>
      <section className="bg-[var(--color-stage)] px-6 pb-16 pt-36 md:px-12 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-[var(--container-page)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-green-deep)]">GT Drive locations</p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(48px,8vw,112px)] font-extrabold leading-[0.88] tracking-[-0.06em]">Plants across <span className="text-[var(--color-green)]">India.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-[var(--color-body)]">Our operating locations support GT Drive manufacturing, distribution and dealership enquiries across five Indian states.</p>
        </div>
      </section>
      <Reveal>
        <main className="bg-white px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto grid max-w-[var(--container-page)] gap-5 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((location, index) => (
              <article key={location.state} className="gt-card rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(17,17,17,0.05)]">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-green)_12%,white)] text-[var(--color-green-deep)]"><span className="relative"><MapPin size={22} weight="regular" /><Factory className="absolute -bottom-1 -right-2 rounded-full bg-white" size={11} weight="fill" /></span></span>
                  <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-green-deep)]">{index === 0 ? "Head office" : "Plant"}</p><h2 className="mt-1 font-display text-2xl font-bold">{location.state}</h2></div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-[var(--color-body)]">{location.address}</p>
              </article>
            ))}
          </div>
        </main>
      </Reveal>
      <ContactClose />
    </>
  );
}
