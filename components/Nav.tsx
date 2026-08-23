"use client";

import Image from "next/image";
import Link from "next/link";
import { List, Phone, WhatsappLogo, X } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contact } from "@/lib/models";

const links = [
  { href: "/models/", label: "Models" },
  { href: "/compare/", label: "Compare" },
  { href: "/dealers/", label: "For dealers" },
  { href: "/locations/", label: "Locations" },
  { href: "/contact/", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-11 bg-white/95 backdrop-blur-md transition-colors duration-300 ${
        scrolled || open ? "border-b border-[var(--color-line)]" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[var(--container-page)] items-center gap-6 px-6">
        <Link href="/" className="flex items-center" aria-label="GT Drive home">
          <Image
            src="/assets/gt-drive/brand/gt-drive-logo-header.png"
            alt="GT Drive"
            width={140}
            height={27}
            priority
          />
        </Link>

        <nav aria-label="Primary" className="hidden flex-1 justify-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-green-deep)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <a
            href={`tel:${contact.phones[0].replace(/\s/g, "")}`}
            aria-label="Call GT Drive"
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-line)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-green-deep)] hover:text-[var(--color-green-deep)]"
          >
            <Phone weight="bold" size={15} />
          </a>
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            aria-label="WhatsApp GT Drive"
            target="_blank"
            rel="noreferrer"
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-line)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-green-deep)] hover:text-[var(--color-green-deep)]"
          >
            <WhatsappLogo weight="bold" size={15} />
          </a>
          <Link
            href="/contact/"
            className="hidden text-[13px] font-semibold text-[var(--color-green-deep)] underline underline-offset-[6px] md:inline-block"
          >
            Request information
          </Link>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-line)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-green-deep)] hover:text-[var(--color-green-deep)] md:hidden"
            aria-controls="mobile-nav"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X weight="bold" size={16} /> : <List weight="bold" size={16} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        aria-hidden={!open}
        className={`absolute left-0 right-0 top-11 origin-top border-b border-[var(--color-line)] bg-white transition-[opacity,transform] duration-300 md:hidden ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <ul className="flex flex-col divide-y divide-[var(--color-line)] px-6 py-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-4 text-[15px] font-medium text-[var(--color-ink)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact/"
              className="block py-4 text-[15px] font-semibold text-[var(--color-green-deep)] underline underline-offset-[6px]"
            >
              Request information
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
