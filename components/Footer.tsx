import Image from "next/image";
import Link from "next/link";
import { EnvelopeSimple, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { contact, models } from "@/lib/models";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Image src="/assets/gt-drive/brand/gt-drive-logo-primary-lockup.png" alt="GT Drive, Drive Clean Go Green" width={310} height={77} />
          <p>The electric two-wheeler brand of Houstan Innovations LLP.</p>
        </div>
        <div className="footer-column"><h3>Explore</h3><Link href="/models/">Models</Link><Link href="/dealers/">For Dealers</Link><Link href="/locations/">Plant Locations</Link><Link href="/contact/">Contact</Link></div>
        <div className="footer-column"><h3>Models</h3>{models.slice(0, 5).map((model) => <Link key={model.slug} href={`/models/${model.slug}/`}>{model.shortName}</Link>)}</div>
        <div className="footer-column"><h3>Connect</h3><a href={`https://wa.me/${contact.whatsapp}`}><WhatsappLogo /> WhatsApp</a><a href={`tel:${contact.phones[0].replace(/\s/g, "")}`}><Phone /> {contact.phones[0]}</a><a href={`mailto:${contact.email}`}><EnvelopeSimple /> {contact.email}</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Houstan Innovations LLP</span><span>Drive Clean, Go Green</span></div>
    </footer>
  );
}
