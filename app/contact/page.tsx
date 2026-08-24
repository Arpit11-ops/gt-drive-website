import type { Metadata } from "next";
import { ContactChannelsHero } from "@/components/ContactChannelsHero";
import { InquiryForm } from "@/components/InquiryForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact GT Drive for product information or dealership enquiries. WhatsApp, call, email or send a note through the form.",
};

export default function ContactPage() {
  return (
    <>
      <ContactChannelsHero />
      <section id="contact-form" className="border-t border-[var(--color-line)] bg-white scroll-mt-24">
        <div className="mx-auto grid max-w-[1100px] gap-12 px-6 py-24 md:grid-cols-[0.7fr_1.3fr] md:gap-20 md:px-10 md:py-32">
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
            <Reveal delay={120}>
              <p className="mt-8 max-w-xs text-sm leading-[1.7] text-[var(--color-body)]">
                Share your city, enquiry type, and the model you are interested in.
                The team can then direct your request to the right GT Drive contact.
              </p>
            </Reveal>
          </div>
          <Reveal delay={160} className="md:pt-10">
            <InquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
