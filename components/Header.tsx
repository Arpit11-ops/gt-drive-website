"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X, ArrowUpRight, Phone, WhatsappLogo } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { contact } from "@/lib/models";

const links = [
  { href: "/models/", label: "Models" },
  { href: "/dealers/", label: "For Dealers" },
  { href: "/about/", label: "About" },
  { href: "/locations/", label: "Plant Locations" },
  { href: "/contact/", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className={`site-header ${compact ? "is-compact" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="brand-link" aria-label="GT Drive home">
          <Image src="/assets/gt-drive/brand/gt-drive-logo-header.png" alt="GT Drive" width={230} height={44} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={pathname.startsWith(link.href) ? "active" : ""}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <a className="header-contact" href={`tel:${contact.phones[0].replace(/\s/g, "")}`} aria-label="Call GT Drive" title="Call GT Drive">
            <Phone weight="bold" />
          </a>
          <a className="header-contact" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp GT Drive" title="WhatsApp GT Drive">
            <WhatsappLogo weight="bold" />
          </a>
          <Link href="/contact/" className="button button-green header-cta">
            Request information <ArrowUpRight weight="bold" />
          </Link>
        </div>
        <button className="icon-button menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <List />}
        </button>
      </div>
      <nav id="mobile-menu" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!open}>
        {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        <Link href="/contact/" className="button button-green">Request information <ArrowUpRight weight="bold" /></Link>
      </nav>
    </header>
  );
}
