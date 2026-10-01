import type { Metadata } from "next";
import { EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How GT Drive collects, uses, stores, and protects personal information.",
};

const privacySections = [
  ["1. Information we collect", "Depending on how you interact with our website, we may collect your full name, mobile or phone number, email address, chassis number, product or scooter details, purchase or dealership details, support or complaint information, dealership enquiry information, and any other information you voluntarily provide through our forms. We may also collect basic technical information such as IP address, browser type, device information, and website usage data."],
  ["2. How we use your information", "We may use the information provided by you to respond to product and customer support queries; provide technical assistance; process service, maintenance, and warranty requests; assist with genuine spare-parts enquiries; respond to dealership enquiries; connect customers with the relevant GT Drive dealer; improve our products, services, and customer experience; communicate with you regarding your enquiry or request; and maintain records and comply with applicable legal requirements."],
  ["3. Sharing of information", "We do not sell or rent your personal information. Where necessary to provide our services, your information may be shared with authorised GT Drive dealers, service or support personnel, technology or communication service providers, or other parties working with us for legitimate business purposes. We may also disclose information where required by applicable law or a lawful government request."],
  ["4. Data security", "We take reasonable technical and organisational measures to protect your personal information from unauthorised access, misuse, alteration, disclosure, or loss. However, no method of transmitting or storing information electronically can be guaranteed to be completely secure."],
  ["5. Data retention", "We retain personal information only for as long as reasonably necessary to fulfil the purposes for which it was collected, provide services, resolve requests, maintain business records, and meet applicable legal or regulatory requirements."],
  ["6. Cookies and website technologies", "Our website may use cookies or similar technologies to improve website functionality, understand website usage, and enhance your browsing experience. You may manage or disable cookies through your browser settings. Certain website features may not function properly if cookies are disabled."],
  ["7. Third-party links", "Our website may contain links to third-party websites or services. GT Drive is not responsible for the privacy practices or content of those third-party websites. We recommend reviewing their respective privacy policies before providing personal information."],
  ["8. Your privacy rights", "Subject to applicable law, you may request information about the personal data we hold about you and may request correction or other appropriate action regarding your personal information. You may also contact us regarding concerns about the use of your personal information."],
  ["9. Children’s privacy", "Our website is not intended to knowingly collect personal information from children. If we become aware that personal information has been submitted by a child without appropriate consent, we will take reasonable steps to address the situation."],
  ["10. Changes to this privacy policy", "We may update this Privacy Policy from time to time to reflect changes in our services, technology, or applicable laws. Any updated version will be published on this page with the revised effective date."],
];

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-[#f5f8f5] px-4 py-14 text-[var(--color-ink)] md:px-10 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-green-deep)]">Privacy policy</p>
          <h1 className="mt-4 text-5xl leading-[0.95] md:text-7xl">Your information,<br /><span className="text-[var(--color-green-deep)]">handled with care.</span></h1>
          <p className="mt-5 text-sm text-[var(--color-muted)]">Effective date: 30 September 2026</p>
        </div>

        <div className="mt-12 grid gap-5 md:mt-16">
          {privacySections.map(([heading, text]) => (
            <article key={heading} className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(17,17,17,0.04)] md:p-8">
              <h2 className="font-display text-xl font-bold">{heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-body)]">{text}</p>
            </article>
          ))}
        </div>

        <section className="mt-5 rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(17,17,17,0.04)] md:p-8">
          <h2 className="font-display text-xl font-bold">11. Contact us</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-body)]">For questions, concerns, or requests regarding this Privacy Policy or your personal information, contact:</p>
          <div className="mt-5 grid gap-3 text-sm font-semibold text-[var(--color-body)] sm:grid-cols-3">
            <span>HOUSTAN INNOVATIONS LLP<br /><small className="font-normal">Brand: GT Drive</small></span>
            <a href="mailto:info@gtdrivepro.com" className="inline-flex items-center gap-2 hover:text-[var(--color-green-deep)]"><EnvelopeSimple size={16} /> info@gtdrivepro.com</a>
            <a href="tel:+917011206686" className="inline-flex items-center gap-2 hover:text-[var(--color-green-deep)]"><Phone size={16} /> 7011206686</a>
          </div>
        </section>
      </div>
    </section>
  );
}
