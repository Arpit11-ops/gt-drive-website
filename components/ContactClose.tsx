import { EnvelopeSimple, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { InquiryForm } from "@/components/InquiryForm";
import { Reveal } from "@/components/Reveal";
import { contact } from "@/lib/models";

type Props = {
  defaultModel?: string;
  defaultType?: string;
  id?: string;
  headline?: React.ReactNode;
  intro?: string;
};

export function ContactClose({
  defaultModel,
  defaultType,
  id,
  headline,
  intro,
}: Props) {
  return (
    <section
      id={id}
      aria-labelledby="contact-headline"
      className="scroll-mt-20 border-t border-[var(--color-line)] bg-white"
    >
      <div className="mx-auto grid max-w-[var(--container-page)] gap-16 px-6 py-28 md:grid-cols-[1fr_1.4fr] md:gap-20 md:px-10 md:py-40">
        <div>
          <Reveal>
            <h2
              id="contact-headline"
              className="text-[clamp(44px,5.5vw,92px)] leading-[0.94] tracking-[-0.03em] text-[var(--color-ink)]"
            >
              {headline ?? (
                <>
                  Talk to <span className="text-[var(--color-green)]">GT Drive.</span>
                </>
              )}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-8 max-w-sm text-[15px] leading-[1.6] text-[var(--color-body)] md:text-base">
              {intro ??
                "GT Drive works with dealerships, fleet operators, and service partners across India. Call, WhatsApp, email, or send us a note below."}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <ul className="mt-12 flex flex-col gap-5">
              <li>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-[var(--color-ink)] hover:text-[var(--color-green-deep)]"
                >
                  <WhatsappLogo size={20} weight="regular" className="text-[var(--color-green)]" />
                  <span className="text-base">WhatsApp · {contact.phones[0]}</span>
                </a>
              </li>
              {contact.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-3 text-[var(--color-ink)] hover:text-[var(--color-green-deep)]"
                  >
                    <Phone size={20} weight="regular" className="text-[var(--color-green)]" />
                    <span className="text-base">{phone}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-3 text-[var(--color-ink)] hover:text-[var(--color-green-deep)]"
                >
                  <EnvelopeSimple size={20} weight="regular" className="text-[var(--color-green)]" />
                  <span className="text-base">{contact.email}</span>
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <InquiryForm defaultModel={defaultModel} defaultType={defaultType} />
        </Reveal>
      </div>
    </section>
  );
}
