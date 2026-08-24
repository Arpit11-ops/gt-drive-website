"use client";

import Image from "next/image";
import Link from "next/link";
import { List, Phone, WhatsappLogo, X } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { contact } from "@/lib/models";
import { featuredModels, mobileLinks, primaryLinks } from "@/lib/navigation";
import { ModelMegaMenu } from "@/components/ModelMegaMenu";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [modelsOpen, setModelsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const modelsButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  const closeAll = useCallback(() => {
    setModelsOpen(false);
    setMobileOpen(false);
  }, []);

  const closeAfterNavigation = useCallback(() => {
    window.setTimeout(closeAll, 0);
  }, [closeAll]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (previousPathname.current && pathname && previousPathname.current !== pathname) closeAll();
    previousPathname.current = pathname;
  }, [closeAll, pathname]);

  useEffect(() => {
    if (!modelsOpen && !mobileOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      if (modelsOpen) {
        setModelsOpen(false);
        requestAnimationFrame(() => modelsButtonRef.current?.focus());
      }
      setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen, modelsOpen]);

  useEffect(() => {
    if (!modelsOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (!headerRef.current?.contains(target)) setModelsOpen(false);
    };
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [modelsOpen]);

  useEffect(() => {
    if (!modelsOpen) return;

    const backgroundModelLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('main a[href^="/models/"]'));
    const previousAttributes = backgroundModelLinks.map((link) => ({
      link,
      ariaHidden: link.getAttribute("aria-hidden"),
      tabIndex: link.getAttribute("tabindex"),
    }));

    backgroundModelLinks.forEach((link) => {
      link.setAttribute("aria-hidden", "true");
      link.setAttribute("tabindex", "-1");
    });

    return () => {
      previousAttributes.forEach(({ link, ariaHidden, tabIndex }) => {
        if (ariaHidden === null) link.removeAttribute("aria-hidden");
        else link.setAttribute("aria-hidden", ariaHidden);
        if (tabIndex === null) link.removeAttribute("tabindex");
        else link.setAttribute("tabindex", tabIndex);
      });
    };
  }, [modelsOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 h-11 bg-white/95 backdrop-blur-md transition-colors duration-300 ${
        scrolled || modelsOpen || mobileOpen ? "border-b border-[var(--color-line)]" : "border-b border-transparent"
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
          <div
            className="static"
            onMouseEnter={() => setModelsOpen(true)}
            onMouseLeave={() => setModelsOpen(false)}
            onFocus={() => setModelsOpen(true)}
            onBlur={(event) => {
              const nextFocused = event.relatedTarget as Node | null;
              if (nextFocused && event.currentTarget.contains(nextFocused)) return;
              const wrapper = event.currentTarget;
              requestAnimationFrame(() => {
                if (!wrapper.contains(document.activeElement)) setModelsOpen(false);
              });
            }}
          >
            <button
              ref={modelsButtonRef}
              type="button"
              aria-controls="models-mega-menu"
              aria-expanded={modelsOpen}
              className="text-[13px] font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-green-deep)]"
              onClick={() => setModelsOpen(true)}
            >
              Models
            </button>
            <ModelMegaMenu id="models-mega-menu" open={modelsOpen} onNavigate={closeAfterNavigation} />
          </div>
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeAfterNavigation}
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
            onClick={closeAfterNavigation}
          >
            Request information
          </Link>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-line)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-green-deep)] hover:text-[var(--color-green-deep)] md:hidden"
            aria-controls="mobile-nav"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X weight="bold" size={16} /> : <List weight="bold" size={16} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="fixed inset-x-0 top-11 h-[calc(100dvh-2.75rem)] overflow-y-auto border-t border-[var(--color-line)] bg-white px-6 pb-10 pt-6 md:hidden"
        >
          <div className="mx-auto max-w-[var(--container-page)]">
            <h2 className="font-display text-[18px] font-semibold text-[var(--color-ink)]">Featured models</h2>
            <div className="mt-4 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {featuredModels.map((model) => (
                <Link
                  key={model.slug}
                  href={`/models/${model.slug}/`}
                  onClick={closeAfterNavigation}
                  className="group grid grid-cols-[92px_1fr] gap-4 py-4"
                >
                  <div className="relative flex min-h-[72px] items-center justify-center bg-[var(--color-stage)]">
                    <Image
                      src={model.image}
                      alt=""
                      fill
                      sizes="92px"
                      className="object-contain p-1.5 transition-transform duration-500 ease-[var(--ease-signature)] group-hover:-translate-y-1"
                    />
                  </div>
                  <span className="flex flex-col items-start justify-center">
                    <span className="font-display text-[17px] font-semibold leading-none text-[var(--color-ink)]">
                      {model.shortName}
                    </span>
                    <span className="mt-2 text-[12px] font-semibold text-[var(--color-green-deep)]">View model →</span>
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-8 flex flex-col divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {mobileLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeAfterNavigation}
                  className="py-4 text-[15px] font-medium text-[var(--color-ink)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/contact/"
              onClick={closeAfterNavigation}
              className="mt-6 inline-block text-[15px] font-semibold text-[var(--color-green-deep)] underline underline-offset-[6px]"
            >
              Request information
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
