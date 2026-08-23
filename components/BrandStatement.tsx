import { Reveal } from "@/components/Reveal";

export function BrandStatement() {
  return (
    <section
      aria-labelledby="brand-headline"
      className="mx-auto max-w-[var(--container-page)] px-6 py-28 md:grid md:grid-cols-[1fr_1.4fr] md:gap-16 md:px-10 md:py-40"
    >
      <Reveal className="text-sm font-medium text-[var(--color-green-deep)]">
        A brand from Houstan Innovations LLP.
      </Reveal>
      <div className="mt-14 md:mt-0">
        <Reveal>
          <h2
            id="brand-headline"
            className="text-[clamp(64px,12vw,196px)] leading-[0.86] tracking-[-0.04em]"
          >
            <span className="block">Nine models.</span>
            <span className="block">Five states.</span>
            <span className="block text-[var(--color-green)]">One India.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-14 max-w-[560px] text-[15px] leading-[1.65] text-[var(--color-body)] md:text-base">
            Headquartered in Greater Noida, Houstan Innovations LLP builds
            GT Drive scooters with in-house lithium battery capability,
            manufacturing operations across five states, and a growing dealer
            network. Every specification, feature, and colour on this site is
            drawn directly from the GT Drive brochure.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
