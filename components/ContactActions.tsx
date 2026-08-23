import Link from "next/link";
import { EnvelopeSimple, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { contact } from "@/lib/models";

export function ContactActions({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "contact-actions compact" : "contact-actions"}>
      <a className="action-link whatsapp" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer"><WhatsappLogo weight="fill" /> WhatsApp</a>
      <a className="action-link" href={`tel:${contact.phones[0].replace(/\s/g, "")}`}><Phone weight="fill" /> Call</a>
      {!compact && <a className="action-link" href={`mailto:${contact.email}`}><EnvelopeSimple weight="fill" /> Email</a>}
      {!compact && <Link className="button button-green" href="/contact/">Request information</Link>}
    </div>
  );
}

export function MobileContactBar() {
  return (
    <div className="mobile-contact-bar" aria-label="Quick contact actions">
      <a href={`tel:${contact.phones[0].replace(/\s/g, "")}`}><Phone weight="fill" /> Call</a>
      <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer"><WhatsappLogo weight="fill" /> WhatsApp</a>
      <Link href="/contact/"><EnvelopeSimple weight="fill" /> Enquire</Link>
    </div>
  );
}
