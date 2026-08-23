"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

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
        <Link href="/contact/" className="button button-outline header-cta">
          Request information <ArrowUpRight weight="bold" />
        </Link>
        <button className="icon-button menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <List />}
        </button>
      </div>
      <nav id="mobile-menu" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation">
        {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        <Link href="/contact/" className="button button-green">Request information <ArrowUpRight weight="bold" /></Link>
      </nav>
    </header>
  );
}
