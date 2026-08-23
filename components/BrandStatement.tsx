export function BrandStatement() {
  return (
    <section
      aria-labelledby="brand-headline"
      className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:grid md:grid-cols-[1fr_1.4fr] md:gap-16 md:px-10 md:py-32"
    >
      <div className="text-sm font-medium text-[var(--color-green-deep)]">
        A brand from Houstan Innovations LLP.
      </div>
      <div className="mt-8 md:mt-0">
        <h2
          id="brand-headline"
          className="text-[clamp(40px,5.5vw,84px)] leading-[0.98]"
        >
          <span className="block">Nine electric scooters.</span>
          <span className="block">Built and manufactured</span>
          <span className="block text-[var(--color-green)]">in India.</span>
        </h2>
        <p className="mt-10 max-w-[560px] text-[15px] leading-[1.65] text-[var(--color-body)] md:text-base">
          Headquartered in Greater Noida, Houstan Innovations LLP builds
          GT Drive scooters with in-house lithium battery capability,
          manufacturing operations across five states, and a growing dealer
          network across India. Every specification, feature, and colour on
          this site is drawn directly from the GT Drive brochure.
        </p>
      </div>
    </section>
  );
}
