import type { Metadata } from "next";
import { EnvelopeSimple, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { contact } from "@/lib/models";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact GT Drive for product information or dealership enquiries. WhatsApp, call, email or send a note through the form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Product and partnership enquiries"
        headline={
          <>
            <span className="block">Let&apos;s</span>
            <span className="block text-[var(--color-green)]">connect.</span>
          </>
        }
        lead="Reach out for product information, dealership enquiries or company details. Choose the channel that works for you."
      />
      <section className="border-t border-[var(--color-line)] bg-white">
        <div className="mx-auto grid max-w-[var(--container-page)] gap-16 px-6 py-24 md:grid-cols-[1fr_1.4fr] md:gap-20 md:px-10 md:py-32">
          <div>
            <Reveal>
              <div className="text-sm font-medium text-[var(--color-green-deep)]">
                Direct channels
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-[clamp(36px,4.5vw,72px)] leading-[0.95] tracking-[-0.03em]">
                Choose the channel that works for you.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <ul className="mt-12 flex flex-col divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
                <li>
                  <a
                    href={`https://wa.me/${contact.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 py-5 text-[var(--color-ink)] hover:text-[var(--color-green-deep)]"
                  >
                    <WhatsappLogo size={22} weight="regular" className="text-[var(--color-green)]" />
                    <span className="flex flex-col">
                      <span className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-muted)]">
                        WhatsApp
                      </span>
                      <span className="text-base">{contact.phones[0]}</span>
                    </span>
                  </a>
                </li>
                {contact.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-4 py-5 text-[var(--color-ink)] hover:text-[var(--color-green-deep)]"
                    >
                      <Phone size={22} weight="regular" className="text-[var(--color-green)]" />
                      <span className="flex flex-col">
                        <span className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-muted)]">
                          Phone
                        </span>
                        <span className="text-base">{phone}</span>
                      </span>
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-4 py-5 text-[var(--color-ink)] hover:text-[var(--color-green-deep)]"
                  >
                    <EnvelopeSimple size={22} weight="regular" className="text-[var(--color-green)]" />
                    <span className="flex flex-col">
                      <span className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-muted)]">
                        Email
                      </span>
                      <span className="text-base">{contact.email}</span>
                    </span>
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <div className="text-sm font-medium text-[var(--color-green-deep)]">
                Send us a note
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-[clamp(28px,3.5vw,52px)] leading-[0.95] tracking-[-0.02em]">
                Tell us about your enquiry.
              </h2>
            </Reveal>
            <Reveal delay={160} className="mt-10">
              <InquiryForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
