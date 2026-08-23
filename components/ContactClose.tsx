import { EnvelopeSimple, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { InquiryForm } from "@/components/InquiryForm";
import { contact } from "@/lib/models";

type Props = { defaultModel?: string; defaultType?: string; heading?: string };

export function ContactClose({
  defaultModel,
  defaultType,
  heading = "Get in touch.",
}: Props) {
  return (
    <section
      aria-labelledby="contact-headline"
      className="border-t border-[var(--color-line)] bg-white"
    >
      <div className="mx-auto grid max-w-[var(--container-page)] gap-16 px-6 py-24 md:grid-cols-[1fr_1.4fr] md:gap-20 md:px-10 md:py-32">
        <div>
          <h2
            id="contact-headline"
            className="text-[clamp(40px,5vw,84px)] leading-[0.98]"
          >
            {heading}
          </h2>
          <p className="mt-8 max-w-sm text-[15px] leading-[1.6] text-[var(--color-body)] md:text-base">
            Reach out for product information or dealership enquiries. Direct
            channels below, or send a note through the form.
          </p>
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
        </div>
        <div>
          <InquiryForm defaultModel={defaultModel} defaultType={defaultType} />
        </div>
      </div>
    </section>
  );
}
