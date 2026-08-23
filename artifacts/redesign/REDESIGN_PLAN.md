# GT Drive Redesign — Shape Doc

Captured: 2026-08-23
Baseline commit: `14c3848` (rollback point)
Approved hero comp: `artifacts/redesign/comps/2026-08-23_gt-drive_hero-v4/hero.png`

---

## 1. Direction Contract

**Thesis.** GT Drive is a real Indian electric two-wheeler brand from Houstan Innovations LLP with nine confirmed scooters. The site presents it with editorial-premium restraint — the product is the subject, the brochure is the truth, and nothing is invented.

**Refuses.** Every AI-mockup default the earlier passes fell into: tracked eyebrows, mono-font captions, numbered chips, icon-plus-heading-plus-text card grids, twin CTA pill patterns, italic serif display with highlighted-phrase-underline devices, hairline micro-grids, cream grounds, floating WhatsApp/phone circles bolted onto corners, fake statistics, ecommerce controls.

**Own-World.** Pure Showroom White canvas. One heavy workhorse industrial sans doing all display work — no italic display serif, no condensed automotive italic. Inter for body. GT green (#20B048) appears in exactly two roles per surface: (a) the italic "T" flourish of the GT Drive wordmark; (b) one deliberate content-carrying use — a colored word in the tagline, an underline on the primary link, or a small badge on a status. Green never becomes decoration.

**Story.** Visitor lands, reads the brand's own tagline elevated to statement scale ("Drive Clean." black / "Go Green." in GT green), sees the scooter at monumental scale as evidence, and takes one of three paths — explore the range, compare all nine, become a dealer. Total time to grasp who this is: six seconds.

**First Viewport.** Approved v4 comp. Full-canvas white composition, no column split. Scooter dominates upper zone at monumental scale on a photography stage (soft reflection, no colored backdrop). Tagline anchors the lower zone as a two-line editorial statement. Small identifier top-left, small model featured mark top-right. Three plain text links + a supporting paragraph on the right of the tagline. Persistent Request-information text link + phone/WA icon buttons live in the nav — no CTA button in the hero body.

**Form.** Editorial-premium single-surface hero, not left-text/right-image split. Reference tradition: Vespa Elettrica, Cake Bikes, Zero Motorcycles, Loewe, Bottega Veneta. Every below-the-fold section commits to the same restraint — one idea per section, no card grids.

---

## 2. Global System

### Colors

- **Ground:** Showroom White `#FFFFFF` — the material.
- **Ink:** Near-black `#111111` for headlines and controls; body ink `#4A4E4C`; muted `#6E756F` for supporting type.
- **Line:** Hairline `#E4E8E4` for divisions where absolutely earned (spec tables, nav underlines on hover). Never as a card border.
- **Stage:** Warm off-white `#F5F7F5` for photography floors and subtle zone shifts — used sparingly.
- **GT Green:** `#20B048` — used in two roles per surface only. Never as decoration, never as a section background wash.
- **Deep Green:** `#087D36` — used for text-link color and its underline. Never as a hover-only accent.

No other colors. No gradients. No glass. No blur backgrounds.

### Type

**Display: Neue Haas Grotesk Display Bold** (or, if licensing is a blocker at build time, **Söhne Breit Kräftig** or open-source workhorse **Inter Display 800**). Heavy, industrial, sentence-case. Never italic. Never letter-spaced positive. Letter-spacing floor -0.035em at display scale.

**Body: Inter** (400 / 500 / 600). Sentence case. Line-height 1.55 for prose. Max measure 65–75ch.

**No mono** anywhere on the site — not for callouts, not for footnotes, not for spec labels. Data lives in spec tables set in Inter Medium, not mono.

Type scale (rem, root=16px):
- Display XL: `9rem` (144px) — hero tagline only
- Display L: `4.5rem` (72px) — section headline
- Display M: `3rem` (48px) — subsection
- Title L: `1.5rem` (24px) — card / spec title
- Title M: `1.125rem` (18px) — card / list header
- Body: `1rem` (16px)
- Small: `0.875rem` (14px)
- Micro: `0.75rem` (12px) — attribution, footnotes only, never as a tracked label

### Spacing

Base unit 4px. Increments: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. More space above a heading than below it.

Section padding: mobile `4rem 1.25rem`, desktop `8rem max(2rem, calc((100vw - 90rem) / 2))`.

### Motion

**Premium personality.** 350–600ms, `cubic-bezier(0.2, 0.8, 0.2, 1)` as the one signature ease. One authored moment per surface — not scattered hover effects.

- Hero on load: no entrance animation on the tagline (weight carries it). One subtle 400ms fade-up on the scooter photograph. No stagger.
- Section reveals on scroll: single 400ms fade-up from `translateY(16px)`, once per section, `prefers-reduced-motion` → skip.
- Hover states: 200ms transform, no elaborate scale.
- Route transitions: not implemented in phase one; deferred.

No parallax. No pinned scroll storytelling (deferred to a possible v2). No cursor followers.

### Radii & shape

- Buttons and cards: `4px` (tight, industrial).
- Icon buttons: `999px` circles only when the shape earns it (phone / WhatsApp affordances in nav).
- No large pills anywhere. No decorative shapes.

### Forbidden patterns (system-wide)

- Tracked uppercase eyebrow tags over sections
- Monospace anywhere
- Numbered "01 / 02 / 03" section markers
- Icon-plus-heading-plus-text card grids
- Twin-CTA pill patterns
- Section backgrounds in GT green (green stays inline / accent)
- Fake metrics, testimonials, star ratings, dealer counts
- Ecommerce controls: cart, price, checkout, "Book now"
- Floating WhatsApp/phone circles in corners (nav owns those)
- Glassmorphism, gradient text, decorative gradient blobs

---

## 3. Information Architecture

Eight routes total (seven existing + one new):

| Route | Purpose |
|---|---|
| `/` | Brand landing — approved v4 hero + supporting scroll |
| `/models/` | Full 9-model catalogue |
| `/models/[slug]/` | Individual model deep dive (×9) |
| `/compare/` | **New.** All 9 models side by side — the site's power tool |
| `/dealers/` | Dealership opportunity |
| `/about/` | Houstan Innovations LLP + brand narrative |
| `/locations/` | Plant footprint across 5 states |
| `/contact/` | Direct contact + inquiry form |

Nav order: Models · Compare · For dealers · Locations · Contact. About is footer-only; discoverable but not top-level (it earns its place through content, not header prominence).

---

## 4. Homepage Section Inventory

### 4.1 Nav (persistent, sticky)

44px tall, flush at top, no bottom border. GT Drive wordmark left (green italic "T"), five sentence-case nav words center, phone + WhatsApp thin-outline circular icon buttons right, plain green underlined text link "Request information" rightmost. Sticky with a subtle white-blur backdrop after 40px scroll — border appears at 40px.

### 4.2 Hero (v4, approved)

Full-canvas white. Monumental scooter in upper zone on a photography stage with soft reflection. Small identifier block top-left, model featured mark top-right. Two-line tagline "Drive Clean. / Go Green." (black / GT green) anchors lower-left; supporting three-line paragraph plus three underlined text links (Explore the range · Compare all nine · Become a dealer) sit lower-right. Scooter is the rotating featured model (Drive Pro, One Plus, Champion — three-model rotation on visit; each visit shows one, chosen deterministically by day-of-week).

### 4.3 The Brand Statement (below hero)

Not an icon-card strip. Instead: an editorial single-column moment. Roughly 60vh tall.

- Left 40% of section: an overline of one line in Inter Medium sentence-case near-black ("A brand from Houstan Innovations LLP").
- Center-left, a 3-line Display L headline: "Nine electric scooters. / Built and manufactured / in India." Line breaks matter.
- Below headline, one paragraph of body copy (~60 words) about the LLP, Greater Noida HQ, in-house lithium battery capability, growing dealer network. Human sentences, not brochure copy-paste.
- No CTA. This section is a paragraph, not an ad.

### 4.4 Featured Model Spotlight

One large model presented editorially. Not a card. Not a carousel. A landscape composition split roughly 60/40 with the model photograph on the left (in a similar photography-stage treatment as the hero) and a right column that carries:

- Small model attribution: "Model 08 / 09"
- Display M model name: "GT — Drive Pro"
- Two-sentence lead from `lib/models.ts`
- Four brochure-verified spec pairs presented as a plain two-column list, no card, no icons: Front tyre / Rear tyre / Braking / Controller
- One text link: "See full specifications →"

Model in this section is different from the hero's featured model — this is an *editorial* spotlight, not the branded hero moment. Rotates independently or is manually set to Drive Pro as canonical.

### 4.5 The Nine-Model Range

The specimen strip that failed as a hero device *earns* its place here. Introduced by a single Display L headline ("Nine confirmed models. One truth.") and a short lead, followed by a real 3-column grid of nine model cards. Each card:

- Large photograph on a warm off-white stage
- Sentence-case model name (Display M)
- Brochure code in small Inter Medium (SL, DL, CS, etc.)
- Tiny caption line describing the audience ("Everyday commute", "Family and cargo", etc.) — brochure-supported only
- Hover: photograph subtly lifts (translateY -4px, 250ms), no shadow bloom, no green wash

Grid: 3 × 3 desktop, 2 × 5 tablet, single column mobile (scroll-snap horizontal alternative on mobile — decide during build).

### 4.6 Dealer Opportunity Band

A distinct visual moment. Full-width band with a warm off-white background (`#F5F7F5`) — the first tonal shift in the page. Two-column split inside:

- Left: Display L headline "Grow with an Indian EV brand." One paragraph explaining the pan-India dealership opportunity. Five bullet points of support (brochure-verified: dealership benefits, marketing/branding, inventory/business, service/technical, training/operational). Bullets are text lines with a small green bullet char, not icon cards.
- Right: one photograph or brand image — the dealer program is a proposition, not just support text. Could be a scooter at a dealership floor context if imagery becomes available; extract-brochure imagery as scaffolding.
- Below the band: one solid green button ("Enquire about dealership") + one text link ("View plant locations"). This IS one place a green button earns its use — dealer conversion is high-intent.

### 4.7 Manufacturing Footprint

A quiet section. Just the five state names as large plain text, one per line, with a small map-pin glyph in GT green next to each. Sentence-case, Display M scale. Right-aligned to create a rhythm change against the left-aligned dealer band above.

Above the list: one short headline "Plants across five Indian states." No card, no map illustration, no fake pin-drop marketing map. Text-as-data.

### 4.8 Contact Close

Full-width, generous padding. Display L headline "Get in touch." Below: two columns — left is direct-contact list (WhatsApp, phone × 4 numbers, email) as plain type with a small icon before each; right is the inquiry form (name, phone, email, city, enquiry type, model interest, message, consent, submit). Form is styled minimally — Inter labels above inputs, 1px `#E4E8E4` bottom-borders on inputs (not full boxes), 52px submit button in solid GT green. This is the second earned green button on the page.

### 4.9 Footer

70px top padding, 24px bottom padding. Three columns:
- Left: GT Drive wordmark + one-line brand statement + Houstan Innovations LLP + Greater Noida
- Center: three sub-columns of links (Explore · Models · Company)
- Right: contact strip — WhatsApp, phone, email as plain text links

Bottom row: copyright left, "Drive Clean · Go Green" right. Single 1px `#E4E8E4` top border on the footer only.

---

## 5. Model Detail Page (`/models/[slug]/`)

### 5.1 Hero

Not the same shape as the homepage hero. Model detail hero is a **specification-forward composition**:

- Top: breadcrumb (Models / [Model name]) in Inter Small
- Left column: Display M model name (e.g., "GT — Drive Pro"), model code, one-paragraph lead from `lib/models.ts`, one solid green "Request this model" button + one text link "Ask about availability"
- Right column: main product photograph on a photography stage with soft reflection (same treatment as home hero, smaller scale)
- Below the split: a color-swatch row showing the available colors as inline colored pills with the color name below (real color values from the brochure, not decorative). Only for models with confirmed colors; Chetak shows "Colours to be announced" as plain text.

### 5.2 Specifications

Plain two-column data table. No cards, no icons.
- Front tyre / Rear tyre / Tyre type / Braking / Front brake / Rear brake / Controller
- If a value is missing (Chetak), the row shows "—" (em-dash) and the section closes with "Full specification will publish when the brochure confirms."

Above the table: single Display M headline "Specifications." No eyebrow.

### 5.3 Features shown in the brochure

A distinct visual moment — the brochure-verified feature list. Two-column plain text list, one feature per line, with a small green tick glyph before each. NO icon+heading+text cards. Feature titles alone, no invented body copy.

### 5.4 Related models (three cards)

Same visual language as the homepage nine-model range but limited to three. "Related" is deterministic — sibling model codes.

### 5.5 Contact close

Same shared contact-close section as homepage 4.8, with `defaultModel` pre-selected in the form.

---

## 6. Compare Page (`/compare/`) — NEW

The site's power tool. Buyers use it to decide; dealers use it in showrooms.

### 6.1 Header

Display L "Compare all nine." One-sentence lead about brochure-verified comparison, no invented data.

### 6.2 Filter bar

Sticky under the nav. Chips for filtering visible columns: Everyday commute · Family · Sport · Coming soon. A "Reset" text link right. No sort dropdowns (nothing to sort against without prices).

### 6.3 The table

Sticky first column with model names + thumbnail. Horizontal scroll for the other columns on tablet/mobile. Rows:

- Model name
- Model code
- Front tyre
- Rear tyre
- Tyre type
- Braking
- Front brake
- Rear brake
- Controller
- Available colors (small colored dots + count)
- Status (Coming Soon badge only for Chetak)

Cells that are missing show "—" not blank. Chetak's row is honest — most cells are "—" with a small "To be announced" chip.

### 6.4 Below table

One line: "See a full model page for lead and features." Nine mini-links to each model page.

No CTA button on this page. The comparison IS the value.

---

## 7. Dealers, About, Locations, Contact

Documented in condensed form; each follows the system rules.

### 7.1 `/dealers/`

Full editorial page with the homepage dealer band expanded into three sections: opportunity, support, next steps. The inquiry form at the bottom is the shared component with dealership pre-selected. Real dealership language throughout — no invented incentives.

### 7.2 `/about/`

Company story. Structured as: who we are, mission, vision, brand strengths. Uses brochure-quoted language for the mission and vision statements. No made-up founding dates, employee counts, revenue figures.

### 7.3 `/locations/`

Five plant-address cards, each a plain type block with the state name (Display M), full address (Inter Regular), and a small map-pin glyph. No embedded Google Map (privacy-preserving default). No fake driving-time claims.

### 7.4 `/contact/`

Same as homepage contact close, but expanded — every phone number listed individually, email as a mailto link, WhatsApp link, and an office hours line (only if confirmed).

---

## 8. Component Inventory

**Build custom (nine components):**

1. `Nav` — sticky, 44px, minimal
2. `Hero` — the v4 approved composition, model-rotating
3. `TaglineStatement` — the two-color tagline as a reusable block (used on About, Contact)
4. `SectionHeadline` — Display L + optional short lead, left-aligned by default, no eyebrow
5. `ModelCard` — the range-grid card (photograph, name, code, caption)
6. `ModelSpotlight` — the editorial featured-model split section
7. `SpecTable` — plain two-column brochure-verified spec table
8. `FeatureList` — two-column feature list with green tick glyphs
9. `ColorSwatchRow` — color pills + names for model detail
10. `CompareTable` — sticky-first-column table for /compare
11. `DealerBand` — the dealer opportunity moment (reused on / and /dealers)
12. `ContactClose` — the shared contact-close section with form
13. `InquiryForm` — the form itself (name/phone/email/city/type/model/message/consent)
14. `Footer` — three-column footer + bottom row

No card wrapper component. Cards are not the page's grammar.

**Deleted from the old build:**

- `ShowroomHero.tsx` (replaced by new `Hero`)
- `ModelRunway.tsx` (drag carousel replaced by editorial specimen grid — the drag-runway pattern is out)
- `ProductMediaGallery.tsx` (replaced by single-photograph model detail hero + one color swatch row)
- `ProductCard.tsx` (replaced by `ModelCard`)
- `Reveal.tsx` (replaced by a leaner single scroll-reveal hook)
- `ContactActions.tsx` (folded into `Nav` and `ContactClose`)

Old CSS in `app/globals.css` will be scrapped entirely and replaced by Tailwind v4 tokens + minimal `@layer` overrides.

---

## 9. Content Voice Rules

Written from the outside — no "designer language."

- **Never in copy:** "brochure truth", "premium", "showroom", "engineered restraint", "eyebrow", "specimen strip", "north star", or any word from the design process.
- **Always factual.** "GT Drive is the electric two-wheeler brand from Houstan Innovations LLP." not "Meet GT Drive."
- **Numbers from the brochure only.** Nine scooters. Five states. Contact numbers as listed. If we can't source it, we don't write it.
- **Tagline is fixed.** "Drive Clean. Go Green." Written exactly this way. Not "Drive Clean, Go Green" (comma) — the period sets rhythm.
- **Model names.** As the brochure spells them: GT — Soul, GT — Soul NXT, GT — RYD, GT — RYD Plus, GT — One Plus, GT — Champion, GT — Flying, GT — Drive Pro, GT — Chetak. Long em-dash (—) between "GT" and the model.
- **Coming Soon.** For Chetak, always "Coming Soon" — capital C, capital S, no colon before.
- **BMW code.** GT — One Plus's brochure code is "BMW". Not shown in customer copy until Arpit confirms with the owner. Model page shows just "GT — One Plus" until then.
- **Hydrabad vs Hyderabad.** Address shows the exact brochure spelling until owner confirms; a small footnote on `/locations/` acknowledges: "As printed in the GT Drive brochure."

---

## 10. Build Order

1. **Tailwind v4 setup + tokens.** `postcss.config.js`, `app/globals.css` gets Tailwind `@import` and CSS-variable-driven theme. Delete existing globals CSS. Wire fonts (Inter + one heavy display face) via `next/font`.
2. **Layout + Nav + Footer.** The persistent shell.
3. **Homepage sections 4.2 → 4.8** in order. Approve each in the browser before proceeding to the next.
4. **`/models/` catalogue** and `ModelCard` component.
5. **`/models/[slug]/`** individual model page + `SpecTable`, `FeatureList`, `ColorSwatchRow`.
6. **`/compare/`** new route + `CompareTable`.
7. **`/dealers/`**, **`/about/`**, **`/locations/`**, **`/contact/`** in that order.
8. **Motion pass** — Reveal-hook, scroll-triggered fades, reduced-motion path.
9. **Responsive audit** at 390 × 844, 768 × 1024, 1440 × 900.
10. **Accessibility audit** — WCAG contrast, keyboard focus, form labels, aria on the nav.
11. **Lighthouse + Playwright.** Update `tests/site.spec.ts` for the new headings and sections.
12. **`git commit` at each milestone.** Baseline is `14c3848`.

---

## 11. Deliverables Still Needed From Owner

Same list as before, unchanged by this redesign:

- Official individual scooter image ZIP (nine photographs, matched framing/lighting).
- Official final GT Drive logo / vector brand kit.
- Confirmation on: BMW model code visibility, Hydrabad/Hyderabad address spelling, Variable Drive Modes vs Multiple Drive Modes.
- Confirmed social profile URLs (currently only icon shown, no destination).
- Any confirmed technical specs the brochure doesn't provide (range, top speed, battery, warranty, motor wattage, charging time).
- Confirmation whether inquiry submissions land in an email box or a CRM — form delivery is unwired until this is decided.

The build ships without these using brochure-extracted scaffolding, with clear placeholder handling (Coming Soon states, "as printed in brochure" footnotes, disabled social icons).
