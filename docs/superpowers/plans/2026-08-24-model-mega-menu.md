# Model Mega-Menu Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current Models navbar link and mobile dropdown with an accessible image-led mega-menu featuring GT — Drive Pro, GT — Soul NXT, and GT — RYD Plus, plus View all and Compare actions.

**Architecture:** Keep navigation state and dismissal behavior in the existing client `Nav` component. Move route and featured-model selection into `lib/navigation.ts`, and render the desktop product panel through a focused `ModelMegaMenu` component. The mobile sheet reuses the same authoritative featured-model data and retains every current primary route.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript 5, Tailwind CSS v4, `next/image`, `next/link`, Phosphor Icons, Playwright.

---

## File Structure

- Create `lib/navigation.ts`: primary route definitions and the three validated featured-model records.
- Create `components/ModelMegaMenu.tsx`: desktop-only image-led Models panel; no local state.
- Modify `components/Nav.tsx`: owns desktop/mobile open state, focus restoration, outside-click dismissal, route-change dismissal, hover/focus behavior, and mobile body-scroll locking.
- Create `tests/nav.spec.ts`: desktop and mobile behavior contracts for the new navigation.
- Do not modify `lib/models.ts`, `next.config.ts`, dependencies, the hero, or unrelated homepage sections.

### Task 1: Lock desktop and mobile behavior with failing Playwright coverage

**Files:**
- Create: `tests/nav.spec.ts`

- [ ] **Step 1: Write the failing navigation tests**

Create `tests/nav.spec.ts` with:

```ts
import { expect, test } from "@playwright/test";

test.describe("model mega-menu", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });
  });

  test("opens from Models and exposes the approved product links", async ({ page }) => {
    const trigger = page.getByRole("button", { name: "Models" });
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await trigger.click();

    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    const menu = page.getByRole("navigation", { name: "Models menu" });
    await expect(menu).toBeVisible();
    await expect(menu.getByRole("link", { name: /GT Drive Pro/i })).toBeVisible();
    await expect(menu.getByRole("link", { name: /GT Soul NXT/i })).toBeVisible();
    await expect(menu.getByRole("link", { name: /GT RYD Plus/i })).toBeVisible();
    await expect(menu.getByRole("link", { name: "View all models" })).toHaveAttribute("href", "/models/");
    await expect(menu.getByRole("link", { name: "Compare models" })).toHaveAttribute("href", "/compare/");
  });

  test("Escape closes the menu and restores focus to Models", async ({ page }) => {
    const trigger = page.getByRole("button", { name: "Models" });
    await trigger.click();
    await page.keyboard.press("Escape");

    await expect(page.getByRole("navigation", { name: "Models menu" })).toBeHidden();
    await expect(trigger).toBeFocused();
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  test("keyboard focus opens the menu and enters the first model card", async ({ page }) => {
    const trigger = page.getByRole("button", { name: "Models" });
    await trigger.focus();

    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: /GT Drive Pro/i })).toBeFocused();
  });

  test("clicking outside closes the menu", async ({ page }) => {
    const trigger = page.getByRole("button", { name: "Models" });
    await trigger.click();
    await page.getByRole("heading", { name: /Drive Clean\. Go Green\./i }).click();

    await expect(page.getByRole("navigation", { name: "Models menu" })).toBeHidden();
  });

  test("choosing a utility route closes the menu", async ({ page }) => {
    await page.getByRole("button", { name: "Models" }).click();
    await page.getByRole("navigation", { name: "Models menu" })
      .getByRole("link", { name: "View all models" })
      .click();

    await expect(page).toHaveURL(/\/models\/$/);
    await expect(page.getByRole("navigation", { name: "Models menu" })).toBeHidden();
  });

  test("mobile menu shows featured models, complete routes, and locks body scroll", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload({ waitUntil: "networkidle" });

    const menuButton = page.getByRole("button", { name: "Open menu" });
    await menuButton.click();

    const mobileNav = page.getByRole("navigation", { name: "Mobile" });
    await expect(mobileNav).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: /GT Drive Pro/i })).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: /GT Soul NXT/i })).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: /GT RYD Plus/i })).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: "Models", exact: true })).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: "Compare" })).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: "For dealers" })).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: "Locations" })).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: "Contact" })).toBeVisible();
    await expect.poll(() => page.evaluate(() => document.body.style.overflow)).toBe("hidden");

    await page.getByRole("button", { name: "Close menu" }).click();
    await expect(mobileNav).toBeHidden();
    await expect.poll(() => page.evaluate(() => document.body.style.overflow)).toBe("");

    await menuButton.click();
    await page.keyboard.press("Escape");
    await expect(mobileNav).toBeHidden();
    await expect.poll(() => page.evaluate(() => document.body.style.overflow)).toBe("");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
  });
});
```

- [ ] **Step 2: Run the navigation tests to verify they fail**

Run:

```powershell
npx playwright test tests/nav.spec.ts
```

Expected: FAIL because the current Models control is a link, no navigation named `Models menu` exists, and the current mobile menu has no featured model links.

- [ ] **Step 3: Commit the failing contract**

Run:

```powershell
git add -- tests/nav.spec.ts
git -c user.name="Arpit" -c user.email="pcsaini@gmail.com" commit -m "Test: define model mega-menu behavior"
```

Expected: one commit containing only `tests/nav.spec.ts`.

### Task 2: Add authoritative navigation data

**Files:**
- Create: `lib/navigation.ts`

- [ ] **Step 1: Create the navigation data module**

Create `lib/navigation.ts` with:

```ts
import { getModel, type ScooterModel } from "@/lib/models";

export const primaryLinks = [
  { href: "/compare/", label: "Compare" },
  { href: "/dealers/", label: "For dealers" },
  { href: "/locations/", label: "Locations" },
  { href: "/contact/", label: "Contact" },
] as const;

export const mobileLinks = [
  { href: "/models/", label: "Models" },
  ...primaryLinks,
] as const;

const featuredModelSlugs = [
  "gt-drive-pro",
  "gt-soul-nxt",
  "gt-ryd-plus",
] as const;

export const featuredModels: ScooterModel[] = featuredModelSlugs.map((slug) => {
  const model = getModel(slug);
  if (!model) {
    throw new Error(`Featured navigation model not found: ${slug}`);
  }
  return model;
});
```

- [ ] **Step 2: Verify the module passes TypeScript and lint checks**

Run:

```powershell
npm run lint
```

Expected: PASS with no ESLint errors.

- [ ] **Step 3: Commit the navigation data**

Run:

```powershell
git add -- lib/navigation.ts
git -c user.name="Arpit" -c user.email="pcsaini@gmail.com" commit -m "Add featured navigation model data"
```

Expected: one commit containing only `lib/navigation.ts`.

### Task 3: Build the desktop Model mega-menu

**Files:**
- Create: `components/ModelMegaMenu.tsx`
- Modify: `components/Nav.tsx`

- [ ] **Step 1: Create the stateless mega-menu component**

Create `components/ModelMegaMenu.tsx` with:

```tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { featuredModels } from "@/lib/navigation";

type ModelMegaMenuProps = {
  id: string;
  open: boolean;
  onNavigate: () => void;
};

export function ModelMegaMenu({ id, open, onNavigate }: ModelMegaMenuProps) {
  if (!open) return null;

  return (
    <nav
      id={id}
      aria-label="Models menu"
      className="absolute left-0 right-0 top-11 hidden border-y border-[var(--color-line)] bg-white shadow-[0_24px_50px_rgba(17,17,17,0.08)] md:block"
    >
      <div className="mx-auto grid max-w-[var(--container-page)] grid-cols-[1fr_280px] gap-10 px-10 py-8">
        <div className="grid grid-cols-3 gap-5">
          {featuredModels.map((model) => (
            <Link
              key={model.slug}
              href={`/models/${model.slug}/`}
              onClick={onNavigate}
              className="group grid grid-cols-[116px_1fr] gap-4 border-r border-[var(--color-line)] pr-5 last:border-r-0"
            >
              <span className="grid min-h-[112px] place-items-center overflow-hidden bg-[var(--color-stage)]">
                <Image
                  src={model.image}
                  alt=""
                  width={320}
                  height={240}
                  className="h-auto w-full object-contain transition-transform duration-500 ease-[var(--ease-signature)] group-hover:scale-[1.04]"
                />
              </span>
              <span className="flex flex-col justify-center">
                <strong className="font-display text-lg leading-tight tracking-[-0.03em]">
                  {model.shortName}
                </strong>
                <span className="mt-2 line-clamp-2 text-xs leading-[1.55] text-[var(--color-muted)]">
                  {model.lead}
                </span>
                <span className="mt-3 text-xs font-semibold text-[var(--color-green-deep)]">
                  View model →
                </span>
              </span>
            </Link>
          ))}
        </div>

        <div className="flex flex-col justify-center border-l border-[var(--color-line)] pl-8">
          <p className="text-xs font-medium text-[var(--color-muted)]">
            Explore the complete GT Drive electric scooter range.
          </p>
          <Link
            href="/models/"
            onClick={onNavigate}
            className="mt-5 flex items-center justify-between border-t border-[var(--color-line)] py-4 text-sm font-semibold hover:text-[var(--color-green-deep)]"
          >
            View all models <ArrowRight size={16} weight="bold" />
          </Link>
          <Link
            href="/compare/"
            onClick={onNavigate}
            className="flex items-center justify-between border-y border-[var(--color-line)] py-4 text-sm font-semibold hover:text-[var(--color-green-deep)]"
          >
            Compare models <ArrowRight size={16} weight="bold" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Replace `components/Nav.tsx` with the desktop-enabled version**

Replace `components/Nav.tsx` with:

```tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { List, Phone, WhatsappLogo, X } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ModelMegaMenu } from "@/components/ModelMegaMenu";
import { contact } from "@/lib/models";
import { featuredModels, mobileLinks, primaryLinks } from "@/lib/navigation";

const modelsMenuId = "models-mega-menu";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [modelsOpen, setModelsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const modelsTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setModelsOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!modelsOpen && !mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const restoreModelsFocus = modelsOpen;
      setModelsOpen(false);
      setMobileOpen(false);
      if (restoreModelsFocus) requestAnimationFrame(() => modelsTriggerRef.current?.focus());
    };

    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setModelsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [modelsOpen, mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const closeAll = () => {
    setModelsOpen(false);
    setMobileOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 h-11 bg-white/95 backdrop-blur-md transition-colors duration-300 ${
        scrolled || modelsOpen || mobileOpen
          ? "border-b border-[var(--color-line)]"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[var(--container-page)] items-center gap-6 px-6">
        <Link href="/" onClick={closeAll} className="flex items-center" aria-label="GT Drive home">
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
            onMouseEnter={() => setModelsOpen(true)}
            onMouseLeave={() => setModelsOpen(false)}
            onBlur={(event) => {
              const nextTarget = event.relatedTarget as Node | null;
              if (!event.currentTarget.contains(nextTarget)) setModelsOpen(false);
            }}
          >
            <button
              ref={modelsTriggerRef}
              type="button"
              aria-expanded={modelsOpen}
              aria-controls={modelsMenuId}
              onFocus={() => setModelsOpen(true)}
              onClick={() => setModelsOpen(true)}
              className="h-11 text-[13px] font-medium transition-colors hover:text-[var(--color-green-deep)]"
            >
              Models
            </button>
            <ModelMegaMenu id={modelsMenuId} open={modelsOpen} onNavigate={closeAll} />
          </div>

          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeAll}
              className="flex h-11 items-center text-[13px] font-medium transition-colors hover:text-[var(--color-green-deep)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <a
            href={`tel:${contact.phones[0].replace(/\s/g, "")}`}
            aria-label="Call GT Drive"
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-line)] hover:border-[var(--color-green-deep)] hover:text-[var(--color-green-deep)]"
          >
            <Phone weight="bold" size={15} />
          </a>
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            aria-label="WhatsApp GT Drive"
            target="_blank"
            rel="noreferrer"
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-line)] hover:border-[var(--color-green-deep)] hover:text-[var(--color-green-deep)]"
          >
            <WhatsappLogo weight="bold" size={15} />
          </a>
          <Link
            href="/contact/"
            onClick={closeAll}
            className="hidden text-[13px] font-semibold text-[var(--color-green-deep)] underline underline-offset-[6px] md:inline-block"
          >
            Request information
          </Link>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-line)] hover:border-[var(--color-green-deep)] hover:text-[var(--color-green-deep)] md:hidden"
            aria-controls="mobile-nav"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((current) => !current)}
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
          <p className="text-xs font-medium text-[var(--color-green-deep)]">Featured models</p>
          <div className="mt-4 grid gap-3">
            {featuredModels.map((model) => (
              <Link
                key={model.slug}
                href={`/models/${model.slug}/`}
                onClick={closeAll}
                className="grid grid-cols-[92px_1fr] items-center gap-4 border-b border-[var(--color-line)] pb-3"
              >
                <span className="grid min-h-[72px] place-items-center bg-[var(--color-stage)]">
                  <Image src={model.image} alt="" width={240} height={180} className="h-auto w-full object-contain" />
                </span>
                <span>
                  <strong className="font-display text-lg leading-tight">{model.shortName}</strong>
                  <span className="mt-1 block text-xs text-[var(--color-muted)]">View model →</span>
                </span>
              </Link>
            ))}
          </div>
          <ul className="mt-6 flex flex-col divide-y divide-[var(--color-line)] border-t border-[var(--color-line)]">
            {mobileLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={closeAll} className="block py-4 text-[15px] font-medium">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact/"
                onClick={closeAll}
                className="block py-4 text-[15px] font-semibold text-[var(--color-green-deep)] underline underline-offset-[6px]"
              >
                Request information
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
```

- [ ] **Step 3: Run lint and the navigation tests**

Run:

```powershell
npm run lint
npx playwright test tests/nav.spec.ts
```

Expected: lint passes and all six desktop/mobile navigation tests pass.

- [ ] **Step 4: Commit the desktop mega-menu**

Run:

```powershell
git add -- components/ModelMegaMenu.tsx components/Nav.tsx
git -c user.name="Arpit" -c user.email="pcsaini@gmail.com" commit -m "Add image-led model mega-menu"
```

Expected: one commit containing the new component and Nav integration.

### Task 4: Verify the mobile full-screen navigation against the existing suite

**Files:**
- Test: `tests/nav.spec.ts`
- Test: `tests/site.spec.ts`

- [ ] **Step 1: Run the navigation suite**

Run:

```powershell
npx playwright test tests/nav.spec.ts
```

Expected: all six tests pass. If the mobile test fails, fix only the behavior asserted by this test before proceeding.

- [ ] **Step 2: Run the existing site suite to detect regressions**

Run:

```powershell
npx playwright test tests/site.spec.ts
```

Expected: all existing tests pass, including the original mobile navigation and route checks.

- [ ] **Step 3: Confirm the existing mobile test still finds `Models`**

Run:

```powershell
npx playwright test tests/site.spec.ts -g "mobile hamburger"
```

Expected: PASS because the mobile route list retains the established `Models` label.

### Task 5: Visual, accessibility, and production verification

**Files:**
- Modify only if verification finds an issue: `components/Nav.tsx`, `components/ModelMegaMenu.tsx`, `tests/nav.spec.ts`

- [ ] **Step 1: Verify the desktop route context**

Run the dev server on the established port:

```powershell
npm run dev -- --hostname 127.0.0.1 --port 3010
```

At 1920 by 800, verify:

- The closed header remains 44px tall.
- The panel does not cover the Models trigger.
- All three featured cards fit without clipping.
- View all models and Compare models are visually separate.
- Hovering from the trigger into the panel does not close it.
- Keyboard focus remains visible on the trigger, cards, and utility actions.
- No page-level horizontal scrollbar appears.

- [ ] **Step 2: Verify the mobile route context**

At 390 by 844, verify:

- The sheet fills the viewport below the 44px header.
- The three featured models appear before route links.
- The sheet itself scrolls while the page body remains fixed.
- Closing the sheet restores normal page scrolling.
- Long model names and route labels do not clip.

- [ ] **Step 3: Verify reduced-motion and keyboard dismissal**

In browser developer tools, emulate `prefers-reduced-motion: reduce` and verify that transitions become effectively immediate under the existing global rule. Navigate entirely by keyboard and verify Escape returns focus to Models.

- [ ] **Step 4: Run final automated checks**

Stop the dev server before the production build so `.next` is not shared by two Next.js processes. Then run:

```powershell
npm run lint
npm run build
npx playwright test
```

Expected:

- ESLint passes.
- Static export generates all 19 pages.
- The complete Playwright suite passes.

- [ ] **Step 5: Commit any verification fixes**

If verification required changes, run:

```powershell
git add -- components/Nav.tsx components/ModelMegaMenu.tsx tests/nav.spec.ts
git -c user.name="Arpit" -c user.email="pcsaini@gmail.com" commit -m "Polish model mega-menu interactions"
```

If no verification fixes were needed, do not create an empty commit.

## Completion Criteria

- Models is a button with correct expanded and controls state on desktop.
- The mega-menu exposes exactly Drive Pro, Soul NXT, and RYD Plus.
- View all models and Compare models lead to their existing routes.
- Hover, click, keyboard focus, Escape, outside click, and route changes behave as specified.
- Mobile uses a body-locking full-screen sheet with the featured models and complete route list.
- No unsupported product content is introduced.
- No new dependency or route is added.
- Lint, static export, and the full Playwright suite pass.
