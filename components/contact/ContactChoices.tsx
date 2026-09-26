import { ArrowRight, EnvelopeSimple, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

type Channel = {
  Icon: typeof Phone;
  title: string;
  lines: string[];
  href: string;
};

const channels: Channel[] = [
  {
    Icon: Phone,
    title: "Call Us",
    lines: ["+91 9811712171", "+91 9217901112"],
    href: "tel:+919811712171",
  },
  {
    Icon: WhatsappLogo,
    title: "WhatsApp Us",
    lines: ["+91 9811712171"],
    href: "https://wa.me/919811712171",
  },
  {
    Icon: EnvelopeSimple,
    title: "Email Us",
    lines: ["info@gtdrivepro.com"],
    href: "mailto:info@gtdrivepro.com",
  },
];

export function ContactChoices() {
  return (
    <section className="bg-[var(--color-green)] py-12 md:py-16">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-12 lg:px-16">
        <div className="text-center">
          <p className="text-[11px] font-bold tracking-[0.24em] text-white/85 uppercase">
            Contact GT Drive
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-[clamp(28px,3.2vw,44px)] font-extrabold uppercase leading-[1.05] tracking-[-0.03em] text-white">
            Choose a <span className="text-white/80">direct channel</span> to reach us.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 border-y border-white/30 md:grid-cols-3">
          {channels.map(({ Icon, title, lines, href }) => (
            <a
              key={title}
              data-motion-card
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="group relative flex min-h-[200px] flex-col items-center justify-center gap-5 border-b border-white/30 px-6 py-8 text-center transition-colors hover:bg-white/10 md:border-b-0 md:border-l md:first:border-l-0"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90">
                <Icon size={28} weight="regular" className="text-[var(--color-green-deep)]" />
              </span>

              <div>
                <h3 className="font-display text-[13px] font-extrabold uppercase tracking-[0.14em] text-white">
                  {title}
                </h3>
                <div className="mt-3 flex flex-col gap-1 text-[13px] font-semibold text-white/85">
                  {lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              </div>

              <ArrowRight
                size={16}
                weight="bold"
                className="text-white transition-transform group-hover:translate-x-1"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
