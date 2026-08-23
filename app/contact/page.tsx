import type { Metadata } from "next";
import { EnvelopeSimple, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { contact } from "@/lib/models";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:px-10">
      <h1 className="text-[clamp(48px,7vw,88px)]">Get in touch.</h1>
      <p className="mt-6 max-w-xl text-[var(--color-body)]">
        Reach out for product information or dealership enquiries.
      </p>

      <ul className="mt-16 space-y-4">
        <li>
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-[var(--color-ink)] hover:text-[var(--color-green-deep)]"
          >
            <WhatsappLogo size={22} weight="regular" />
            <span>WhatsApp · {contact.phones[0]}</span>
          </a>
        </li>
        {contact.phones.map((phone) => (
          <li key={phone}>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 text-[var(--color-ink)] hover:text-[var(--color-green-deep)]"
            >
              <Phone size={22} weight="regular" />
              <span>{phone}</span>
            </a>
          </li>
        ))}
        <li>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-3 text-[var(--color-ink)] hover:text-[var(--color-green-deep)]"
          >
            <EnvelopeSimple size={22} weight="regular" />
            <span>{contact.email}</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
