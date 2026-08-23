# GT Drive Website — Handoff to Codex

Handed off: 2026-08-23
Author of handoff: Claude (Opus 4.7)
Owner: Arpit (pcsaini@gmail.com)

You are picking up an active production Next.js 15 website rebuild for **GT Drive**, the electric two-wheeler brand of Houstan Innovations LLP. The site is a **product-information + dealership enquiry** experience — never ecommerce, never direct-to-customer purchase, never anything the brochure doesn't back.

Read this document top to bottom before touching code. Every rule here was earned during the rebuild — not aspirational.

---

## 1. Read First (in this order)

1. **This file** — orientation, tech, conventions, current state, next work
2. `PRODUCT.md` — product truth, audiences, brand commitments
3. `GT_DRIVE_BROCHURE_CONTENT.md` — content source of truth; every fact on the site comes from here
4. `artifacts/redesign/REDESIGN_PLAN.md` — direction contract, section inventory, forbidden patterns
5. `DESIGN.md` — durable design system rules (partially stale; see §11)
6. `lib/models.ts` — implementation data source

Do NOT re-read the older `NEXT_SESSION_HANDOFF.md` — it describes the pre-rebuild direction that got fully reset. Its screenshots in `artifacts/screenshots/*` are the OLD design and should be treated as anti-references.

---

## 2. Current State (2026-08-23)

**Fully built and shipping** as a static export:

| Route | Status | Component |
|---|---|---|
| `/` | Complete | 8-section homepage (Hero → BrandStatement → ModelSpotlight → ModelRange → DealerBand → Footprint → TaglineMarquee → ContactClose) |
| `/models/` | Complete | 3×3 catalogue |
| `/models/[slug]/` | Complete ×9 | Product hero + SpecTable + FeatureList + RelatedModels + ContactClose |
| `/compare/` | Complete | Sticky-first-column comparison table (NEW route, added during rebuild) |
| `/dealers/` | Complete | Dark PageHero + 5-item support ladder + dealer-preset form |
| `/about/` | Complete | Editorial + strengths grid + green Mission/Vision moment |
| `/locations/` | Complete | 5 states as address rows with map pins |
| `/contact/` | Complete | Two-column direct channels + full form |

**Verification snapshot (this commit):**

- `npm run lint` — clean
- `npm run build` — passes, 19 static pages
- `npx playwright test` — 6/6 pass
- Screenshots in `artifacts/redesign/screenshots/{desktop-1920x800,mobile-390}-*.png`

---

## 3. Rollback Trail (git)

Every milestone is one commit. All on `master`.

```
69af763 Polish: Locations layout, InquiryForm a11y, tests, port move to 3010
c5e4033 Inner pages: models catalogue, model detail x9, compare, dealers, about, locations, contact
2b0d79b Depth pass: color moments, editorial scale, motion
bafe715 Hero: cursor-parallax tilt on the scooter
28e060f Hero: compact tagline + scooter for real browser viewports
c686895 Hero: fit both zones in first viewport
ce7097f Homepage sections 4.3–4.8
24b1981 Shell + Hero: Nav, Footer, approved v4 hero
b5d5542 Foundation: Tailwind v4 + Archivo/Inter
14c3848 Baseline: pre-redesign snapshot   ← everything before this is the OLD design
```

Rollback: `git reset --hard <sha>`. Baseline is `14c3848`.

---

## 4. Tech Stack

- **Next.js 15** (App Router), static export (`output: "export"`)
- **React 19**, TypeScript 5
- **Tailwind CSS v4** (via `@tailwindcss/postcss`, config-less — all tokens live in `@theme` inside `app/globals.css`)
- **Fonts** via `next/font/google`: **Archivo** (display, weights 500/600/700/800) + **Inter** (body, 400/500/600/700)
- **Icons**: `@phosphor-icons/react`
- **GSAP** installed but currently unused (Reveal uses IntersectionObserver + CSS transitions instead — much lighter)
- **Playwright** for e2e (6 specs)

Do not add libraries without a real reason. In particular: no CSS-in-JS, no motion libraries beyond what's already here, no state managers, no analytics/CMS/DB. Static-export contract must hold.

---

## 5. Source of Truth Hierarchy

Order matters. Never invent past this list.

1. **`GT DRIVE BROCHURE.pdf`** — owner's original PDF, treat as absolute truth
2. **`GT_DRIVE_BROCHURE_CONTENT.md`** — the transcribed extraction
3. **`PRODUCT.md`** — durable product context, audiences, brand commitments
4. **`lib/models.ts`** — implementation data (models, locations, contact)
5. **Everything else** must derive from the above

If a fact isn't in tiers 1-4, do not put it on the site. This includes range in km, top speed, battery capacity, prices, warranty terms, dealer counts, testimonials, awards, review scores.

---

## 6. Content Voice Rules (bans encoded from real user feedback)

Enforced by conversation and reviewed at commit time.

### Never write in customer copy
- `brochure truth`, `showroom`, `premium`, `engineered restraint`, `north star`, `eyebrow`, `specimen strip` — designer-team language, not brand voice
- Fake statistics (`1 lakh+ riders`, `1300+ dealers`, `India's #1`)
- Ecommerce vocabulary (`buy now`, `add to cart`, `checkout`, `discount`, `book online`, `sale`)
- Invented technical performance figures

### Always write as
- Factual, sentence case, human sentences
- Brochure-quoted whenever possible ("Drive Clean. Go Green." is the exact tagline)
- Model names as brochure spells them: `GT — Soul`, `GT — Soul NXT`, `GT — RYD`, `GT — RYD Plus`, `GT — One Plus`, `GT — Champion`, `GT — Flying`, `GT — Drive Pro`, `GT — Chetak` (em-dash between)
- `Coming Soon` for Chetak — exact capitalization
- Address for Telangana spelled `Hydrabad` as printed in brochure (footnoted on `/locations/`; do NOT auto-correct to Hyderabad until owner confirms)

### Anti-slop rules that survived
From `impeccable`'s `craft-floor.md`. All actively enforced.

- No tracked uppercase eyebrows over sections
- No monospace anywhere (not for labels, callouts, footnotes, mocks — nothing)
- No numbered chip callouts (01 / 02 / 03) unless the sequence carries real information
- No icon+heading+text card grids as section structure
- No twin-CTA patterns (green pill next to outline pill)
- No italic display serif + highlighted-phrase-with-underline device
- No hairline micro-grid / drafting-paper texture / blueprint background
- No cream, ivory, warm off-white grounds — pure white only
- No decorative outlined watermark glyphs (huge "GT" behind the product)
- No floating WhatsApp/phone circles bolted onto corners — the nav owns those
- No glassmorphism, gradient text, or decorative color-halos

---

## 7. Design System Tokens

Locked in `app/globals.css` inside `@theme { }`. Use these as CSS variables — do not add new colors without explicit approval.

### Colors

| Token | Value | Role |
|---|---|---|
| `--color-white` | `#ffffff` | Page ground (the material) |
| `--color-ink` | `#111111` | Headlines, primary text, dark section grounds |
| `--color-body` | `#4a4e4c` | Body prose |
| `--color-muted` | `#6e756f` | Supporting labels, attributions |
| `--color-line` | `#e4e8e4` | Hairline dividers |
| `--color-stage` | `#f5f7f5` | Warm off-white for photography stages and one tonal shift moment |
| `--color-green` | `#20b048` | GT green — used for one material moment per surface + type meaning (the "Green" word) + primary CTAs |
| `--color-green-deep` | `#087d36` | Text-link color, saturated section backgrounds (ModelSpotlight), dark section accent word (DealerBand "Indian EV") |

**The two-role rule**: on any given surface, GT green appears in exactly two places — the italic "T" of the wordmark, and one deliberate content-carrying moment. Never as decoration.

### Typography

| Token | Class | Use |
|---|---|---|
| `--font-display` (Archivo) | `font-display` | h1/h2/h3/h4 (applied via `@layer base`), display-scale tagline |
| `--font-body` (Inter) | `font-body` | Body prose, form controls, nav, buttons |

Display type: heavy weights (700-800), letter-spacing `-0.035em`, tight leading `0.92-0.98`. Never italic. Never letter-spaced positive.

Body: 400-600, sentence case, line-height 1.55.

### Motion

- **One signature ease**: `cubic-bezier(0.2, 0.8, 0.2, 1)` (exposed as `--ease-signature` token in `@theme`)
- **Duration**: 350-700ms across the site. Reveal uses 700ms. Hovers 200-500ms.
- **Reveal**: `IntersectionObserver` fade + translateY(24px→0). Respects `prefers-reduced-motion` (sets visible=true immediately). Has a 2s safety fallback for environments where IO doesn't fire.
- **Hero scooter**: cursor-parallax tilt via rAF-throttled ref-based transform. Max ±4°/±6° with 6px lateral. Skips on touch/pen and reduced-motion.
- **Marquee**: pure CSS `@keyframes marquee` in globals, 45s linear infinite.

### Spacing

4px base unit. Common increments: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. More space above a heading than below it.

Section padding: mobile `4rem 1.5rem`, desktop `8rem max(2.5rem, calc((100vw - 90rem) / 2))`.

### Radii

- Buttons/cards: `4px` (tight, industrial)
- Icons: `999px` only when the shape earns it (phone/WA circles in nav)

---

## 8. Component Inventory

All under `components/`. Server components by default; client marked below.

| Component | Client? | Purpose |
|---|---|---|
| `Nav` | ● client | 44px sticky nav, hamburger sheet on mobile, scroll-triggered border |
| `Footer` | server | 4-column brand/explore/range/connect + bottom row |
| `Hero` | ● client | v4 approved: monumental scooter (cursor-parallax) + two-color tagline + supporting paragraph + 3 links |
| `BrandStatement` | server | Massive editorial "Nine models. Five states. One India." |
| `ModelSpotlight` | server | GT deep-green section, featured Drive Pro with 4 brochure specs |
| `ModelCard` | server | Range grid card — photograph + name + code + lead. Hover: -8px + rotate(-1.5deg) |
| `ModelRange` | server | Homepage 3×3 grid with staggered Reveal delays |
| `DealerBand` | server | Near-black cinematic section, 5 brochure-listed support items, one earned green button |
| `Footprint` | server | Right-aligned 5-state list with green MapPin |
| `TaglineMarquee` | server | Horizontal "Drive Clean. Go Green." marquee, "Go Green." in GT green |
| `ContactClose` | server (uses client `InquiryForm`) | Reusable end-of-page section: heading, direct channels list, form |
| `InquiryForm` | ● client | Bottom-border-style inputs, useId htmlFor associations, defaultModel/defaultType props |
| `Reveal` | ● client | IntersectionObserver fade-up with reduced-motion + 2s fallback |
| `PageHero` | server (Reveals inside) | Reusable inner-page hero: eyebrow + display headline + lead + actions, `light`/`dark`/`green` themes |
| `SpecTable` | server | 2-column brochure-verified spec table with graceful empty state |
| `FeatureList` | server | 2-column feature list with green checks |
| `ColorSwatchRow` | server | Color pill row |
| `RelatedModels` | server | 3-card cross-sell |
| `CompareTable` | server | Sticky first column, horizontal scroll on narrow viewports |

Deleted from the old build during the rebuild: `Header`, `ShowroomHero`, `ModelRunway`, `ProductCard`, `ProductMediaGallery`, `ContactActions`. Do not reintroduce.

---

## 9. Commands

Dev is on **port 3010** on this machine (Steam owns 3000 as `SteamDaddy.exe`).

```powershell
npm install
npm run dev -- --hostname 127.0.0.1 --port 3010
npm run lint
npm run build
npx playwright test
```

Screenshots — `node scripts/screenshot-pages.mjs` — captures every route at desktop 1920×800 and mobile 390. Set `SCREENSHOT_BASE=http://127.0.0.1:3010` env if the port ever moves.

The Playwright config auto-starts a dev server on 3010 with `reuseExistingServer: true`, so `npx playwright test` works whether or not a server is already up.

---

## 10. Assets

### Confirmed and in-repo

- Brochure content: `GT DRIVE BROCHURE.pdf`, `GT_DRIVE_BROCHURE_CONTENT.md`
- Brochure PNGs (extracted, city backgrounds baked in): `public/assets/gt-drive/gt-*.png` — used by ModelCard, ModelSpotlight, CompareTable
- Hero scooter cutout (Codex-generated, clean white bg): `public/assets/gt-drive/generated/hero-drive-pro.png` — used by `Hero` and `/models/gt-drive-pro/`
- Brand marks: `public/assets/gt-drive/brand/gt-drive-logo-*.png`

### Coming Monday (2026-08-25)

Owner delivering a ZIP of official scooter product photography. **When it arrives**:

- Drop files into `public/assets/gt-drive/` under the same filenames `lib/models.ts` already points at (`gt-soul-sl.png`, `gt-soul-nxt-dl.png`, `gt-ryd-cs.png`, `gt-ryd-plus-fh.png`, `gt-one-plus-bmw.png`, `gt-champion-cj.png`, `gt-flying-e4.png`, `gt-drive-pro.png`, `gt-chetak.png`).
- No code changes needed if filenames match. If they don't, update `image` fields in `lib/models.ts` (single authoritative pointer).
- Chetak stays honest — brochure says no photo yet, so if the ZIP includes an invented Chetak render, do NOT ship it. Keep the placeholder.
- After swap, rebuild and reshoot screenshots.

### Do not create

- More Codex renders of models. Arpit explicitly killed the 7-model batch on 2026-08-23 pending the ZIP. See `.claude/projects/*/memory/project_owner_photo_zip_monday.md`.

### Comps and history

- Direction v4 (approved hero): `artifacts/redesign/comps/2026-08-23_gt-drive_hero-v4/hero.png`
- Failed earlier passes (v1, v2, v3) kept in `artifacts/redesign/comps/` as anti-references — showing what got called out as slop and why. Do not resurrect any of those layouts.

---

## 11. Open Product Questions (owner confirmation pending)

Do not resolve these without Arpit checking with the owner.

- **BMW model code**: brochure prints "BMW" for GT — One Plus. Currently hidden from public copy (`code` field on that entry left undefined). Show only after owner confirmation that using "BMW" as a public code is intentional.
- **Hydrabad vs Hyderabad**: brochure spells "Hydrabad". Currently rendered as-printed with a footnote on `/locations/`. Do not silently normalize.
- **Variable Drive Modes vs Multiple Drive Modes**: brochure lists both. `sharedFeatures` in `lib/models.ts` keeps both — do not deduplicate.
- **Social profile URLs**: brochure shows icons only, no destinations. Not currently rendered. Do not invent URLs.
- **Form delivery**: inquiry form has no backend. Currently placeholder — submission shows a status message. Wire to owner's chosen email/CRM before launch.

---

## 12. Known Gaps and Nice-to-Haves

Ordered by real value, not urgency.

1. **Model photography swap** (Monday) — the biggest visual jump the site will get. See §10.
2. **Motion polish pass** — Reveal is wired on most sections but not every atom. Homepage BrandStatement, Compare table entrance, and ModelCard grid could get one more layer of authored motion. Motion budget is set: single moment per surface, signature ease, 350-700ms, reduced-motion path.
3. **Lighthouse audit** — never run. Do a Lighthouse mobile + desktop pass on a production build (`npm run build` then serve `out/`). LCP is the hero-drive-pro.png at 1536×1024; consider a smaller `srcset` if it hurts LCP.
4. **Metadata + og:image** — page `<title>` and `description` set per route. No og:image yet. When owner-provided photography arrives, generate a 1200×630 og:image from a hero shot and drop it into `public/`, then wire `openGraph.images` in `app/layout.tsx` metadata.
5. **Sitemap + robots** — not generated. Add `app/sitemap.ts` and `app/robots.ts` before public launch.
6. **Accessibility deep audit** — form has proper labels now, nav has aria, headings are hierarchical. Not fully audited: contrast on GT green over white (borderline for body text — currently only used on chunky display type where it clears WCAG AA), focus rings on all interactive elements, skip-to-content link.
7. **Legal footer** — no privacy policy, terms, or refund policy pages exist. Add before launch if the enquiry form collects data — which it does — GDPR/DPDP considerations apply.
8. **`GT_DRIVE_BROCHURE.html`** — a converted HTML of the brochure lives at the repo root; used only as a source-of-truth cross-check. Do not link or serve it.

---

## 13. Files That Are Yours to Change / Not to Change

### Change freely
- Everything under `components/`, `app/`, `lib/`
- `tests/site.spec.ts` — extend as you add features
- `scripts/*` — helper scripts

### Change carefully
- `app/globals.css` — token layer. Changing colors or fonts is a brand decision; ask.
- `lib/models.ts` — brochure-derived data. Every edit needs a brochure citation.
- `PRODUCT.md`, `DESIGN.md`, `artifacts/redesign/REDESIGN_PLAN.md` — durable direction docs. Update when a real decision changes them, not as an aftercare step.

### Do not change without asking
- `next.config.ts` — static export contract
- `package.json` dependencies — don't add libs without a reason
- `.claude/` — Claude Code artifacts

### Do not touch
- `GT DRIVE BROCHURE.pdf` — owner's original
- `artifacts/redesign/comps/*` — historical direction record, including failed passes (deliberately kept as anti-references)
- `artifacts/screenshots/*` (note: OLD path from pre-rebuild, kept as anti-reference; the current screenshots live under `artifacts/redesign/screenshots/`)
- `.git/` obviously

---

## 14. Working Preferences (from real user feedback)

Learned during the rebuild. Please honor.

- **Less talk, more action.** Arpit gets frustrated by comps that iterate on the same composition; commits to real distinct directions land better than "here are three variations of the same thing."
- **Named slop, not vague quality complaints.** When something's off, cite the specific `craft-floor.md` refuse rule you violated.
- **Real distinct compositions per section, not template variations.** If two sections have the same structural layout, one of them isn't earning its keep.
- **Screenshots at real viewports.** Test at 1920×800 (real Chrome window on a 1920×1080 monitor with UI chrome), not 1920×1080. Don't design for empty viewport dimensions.
- **Codex CLI is available for image gen** if it becomes needed. Binary at `C:/Users/arpit/AppData/Local/OpenAI/Codex/bin/110b3d66a02d864e/codex.exe`. Do not use Higgsfield (user explicitly excluded it). Do not batch-generate scooters pending the Monday ZIP.
- **Video prompts**: user will render videos in Google Flow. Hand them a written prompt when a moment calls for video — don't try to generate video from this environment.

---

## 15. First Task Suggestions (pick one)

If you're picking this up on Monday after the ZIP arrives:

1. **Swap in the owner photography** — drop files, verify each model's card, reshoot screenshots, commit.

If the ZIP is delayed:

2. **Lighthouse pass** — run against production build, share findings.
3. **`app/sitemap.ts` + `app/robots.ts`** — needed pre-launch anyway.
4. **og:image** — pick the best owner scooter shot and generate a 1200×630 og image.
5. **Wire the inquiry form to a real destination** — needs owner decision (SMTP endpoint / Formspree / owner's CRM). Ask before implementing.

**Do NOT** without asking:
- Redesign anything already accepted
- Add new routes
- Introduce dependencies
- Move ports back to 3000 (Steam)
- Batch-generate scooter renders (blocked pending Monday ZIP)

---

## 16. Handoff Summary in Three Sentences

The GT Drive website is a static Next.js 15 site with 8 routes fully built to a "technical showroom" premium direction on white with GT green as the single accent — every fact on it comes from the brochure at `GT_DRIVE_BROCHURE_CONTENT.md`, and every design rule was earned by rejecting an AI-slop pattern during the rebuild. Everything shipping today is committed on `master` with `69af763` as HEAD; the pre-rebuild baseline `14c3848` is the rollback point. The single most impactful next task is swapping in owner scooter photography when Monday's ZIP arrives — file paths already point at the destinations, so a drop-in replacement finishes the visual polish.

— End of handoff —
