import { ArrowRight, EnvelopeSimple, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { ChargeLine } from "@/components/motion/ChargeLine";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/Reveal";
import { contact } from "@/lib/models";

export function ContactChannelsHero() {
  const phoneHref = `tel:${contact.phones[0].replace(/\s/g, "")}`;

  return (
    <section className="bg-[var(--color-stage)] px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
      <div className="mx-auto max-w-[var(--container-page)]">
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <ChargeLine width={80} tone="green-deep" className="mb-6" />
              <h1 className="max-w-4xl text-[clamp(54px,8vw,116px)] leading-[0.84] tracking-[-0.055em] uppercase">
                <MaskReveal as="span" className="block">
                  Two ways to
                </MaskReveal>
                <MaskReveal
                  as="span"
                  className="block text-[var(--color-green)]"
                  delay={140}
                >
                  reach GT Drive.
                </MaskReveal>
              </h1>
            </div>

            <div className="max-w-sm pb-1">
              <p className="text-lg leading-snug font-medium text-[var(--color-body)]">
                Product questions or dealership enquiries — whichever you&apos;re here for,
                <span className="mt-1 block text-xl font-bold text-[var(--color-green-deep)]">
                  pick a channel and we&apos;ll answer.
                </span>
              </p>
              <a
                href="#contact-form"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-[var(--color-ink)] px-8 py-3.5 text-base font-bold text-white transition-transform hover:scale-105"
              >
                Send an enquiry <ArrowRight size={22} weight="bold" />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Reveal className="h-full">
            <article className="group relative flex min-h-[420px] h-full flex-col justify-between overflow-hidden rounded-[32px] bg-[var(--color-green)] p-8 transition-transform duration-300 hover:scale-[1.01]">
              <div aria-hidden="true" className="absolute top-8 left-8 grid h-32 w-32 grid-cols-4 gap-2">
                {Array.from({ length: 8 }).map((_, index) => (
                  <span
                    key={index}
                    className={`aspect-square rounded-full border border-white/45 ${index === 5 || index === 6 ? "bg-white" : ""}`}
                  />
                ))}
              </div>
              <div className="relative z-10 mt-auto">
                <WhatsappLogo size={34} weight="fill" className="mb-5 text-white" />
                <h2 className="mb-3 text-4xl tracking-[-0.035em] text-white uppercase">WhatsApp</h2>
                <p className="mb-6 max-w-[300px] text-sm leading-relaxed text-white/90">
                  Fastest for product questions. Message us and we&apos;ll pick it up on the primary line.
                </p>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-stage)]"
                >
                  Start a chat <ArrowRight size={16} weight="bold" />
                </a>
              </div>
            </article>
          </Reveal>

          <Reveal delay={80} className="h-full">
            <article className="group relative flex min-h-[420px] h-full flex-col justify-between overflow-hidden rounded-[32px] bg-[var(--color-green-deep)] p-8 transition-transform duration-300 hover:scale-[1.01]">
              <div aria-hidden="true" className="pointer-events-none absolute top-1/3 left-1/2 flex h-64 w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center opacity-80">
                <svg viewBox="0 0 200 100" className="h-full w-full fill-none stroke-white stroke-[1.5]">
                  <ellipse cx="100" cy="50" rx="30" ry="20" className="animate-[spin_10s_linear_infinite]" />
                  <ellipse cx="100" cy="50" rx="50" ry="30" className="animate-[spin_15s_linear_infinite_reverse] opacity-50" />
                  <ellipse cx="100" cy="50" rx="70" ry="40" className="animate-[spin_20s_linear_infinite] opacity-30" />
                </svg>
              </div>
              <div className="relative z-10 mt-auto">
                <Phone size={34} weight="fill" className="mb-5 text-white" />
                <h2 className="mb-3 text-4xl tracking-[-0.035em] text-white uppercase">Call GT Drive</h2>
                <p className="mb-6 text-sm leading-relaxed text-white/90">
                  Prefer to talk? Reach the GT Drive team on the primary line.
                </p>
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-stage)]"
                >
                  {contact.phones[0]}
                </a>
              </div>
            </article>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={160} className="h-full flex-1">
              <article className="group relative flex min-h-[198px] h-full flex-col justify-between overflow-hidden rounded-[32px] bg-white p-8 transition-transform duration-300 hover:scale-[1.01]">
                <div aria-hidden="true" className="absolute top-6 right-6 flex">
                  <span className="h-12 w-12 rounded-full bg-[var(--color-green)]/18" />
                  <span className="-ml-6 h-12 w-12 rounded-full bg-[var(--color-green)]/28" />
                </div>
                <div className="relative z-10 mt-16">
                  <EnvelopeSimple size={28} weight="fill" className="mb-4 text-[var(--color-green)]" />
                  <h2 className="mb-3 text-3xl tracking-[-0.035em] uppercase">Email</h2>
                  <a href={`mailto:${contact.email}`} className="break-all text-sm font-semibold text-[var(--color-green-deep)] underline underline-offset-4">
                    {contact.email}
                  </a>
                </div>
              </article>
            </Reveal>

            <Reveal delay={240} className="h-full flex-1">
              <article className="group relative min-h-[198px] h-full overflow-hidden rounded-[32px] bg-[var(--color-ink)] p-8 transition-transform duration-300 hover:scale-[1.01]">
                <h2 className="mb-3 max-w-xs text-3xl tracking-[-0.035em] text-white uppercase">
                  Dealership enquiry
                </h2>
                <p className="mb-12 max-w-xs text-xs leading-relaxed text-white/65">
                  Tell us where you want to open a GT Drive showroom.
                </p>
                <div className="absolute right-6 bottom-6 -rotate-6">
                  <a
                    href="#contact-form"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-bold text-[var(--color-ink)] shadow-lg transition-transform hover:scale-105"
                  >
                    Enquire now <ArrowRight size={15} weight="bold" />
                  </a>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
