import Image from "next/image";
import Link from "next/link";
import { EnvelopeSimple, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { contact, models } from "@/lib/models";
import { asset } from "@/lib/asset";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-white">
      <div className="mx-auto grid max-w-[var(--container-page)] gap-14 px-6 pt-20 pb-8 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Image
            src={asset("/assets/gt-drive/brand/gt-drive-logo-primary-lockup.png")}
            alt="GT Drive · Drive Clean, Go Green"
            width={220}
            height={54}
            className="h-auto w-52"
          />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-[var(--color-body)]">
            The electric two-wheeler brand from Houstan Innovations LLP, headquartered in Greater Noida.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-green-deep)]">
            Explore
          </h3>
          <Link href="/models/" className="text-sm text-[var(--color-body)] hover:text-[var(--color-green-deep)]">Models</Link>
          <Link href="/dealers/" className="text-sm text-[var(--color-body)] hover:text-[var(--color-green-deep)]">For dealers</Link>
          <Link href="/about/" className="text-sm text-[var(--color-body)] hover:text-[var(--color-green-deep)]">About</Link>
          <Link href="/locations/" className="text-sm text-[var(--color-body)] hover:text-[var(--color-green-deep)]">Plant locations</Link>
          <Link href="/contact/" className="text-sm text-[var(--color-body)] hover:text-[var(--color-green-deep)]">Contact</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-green-deep)]">
            Range
          </h3>
          {models.slice(0, 6).map((model) => (
            <Link
              key={model.slug}
              href={`/models/${model.slug}/`}
              className="text-sm text-[var(--color-body)] hover:text-[var(--color-green-deep)]"
            >
              {model.shortName}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-green-deep)]">
            Connect
          </h3>
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-body)] hover:text-[var(--color-green-deep)]"
          >
            <WhatsappLogo size={16} /> WhatsApp
          </a>
          {contact.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-sm text-[var(--color-body)] hover:text-[var(--color-green-deep)]"
            >
              <Phone size={16} /> {phone}
            </a>
          ))}
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 text-sm text-[var(--color-body)] hover:text-[var(--color-green-deep)]"
          >
            <EnvelopeSimple size={16} /> {contact.email}
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-[var(--container-page)] items-center justify-between border-t border-[var(--color-line)] px-6 py-6">
        <span className="text-xs text-[var(--color-muted)]">© 2026 Houstan Innovations LLP</span>
        <span className="text-xs text-[var(--color-muted)]">Drive Clean · Go Green</span>
      </div>
    </footer>
  );
}
