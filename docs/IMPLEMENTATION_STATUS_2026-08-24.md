# GT Drive Component Integration — Implementation Record

Date: 2026-08-24
Status: Implemented and locally verified
Committed through: `3f741d3`

## Scope completed

This record covers the component-library implementation approved during the GT Drive redesign. Library structures were retained while source branding, unsupported copy, fake statistics, pricing, ecommerce controls, external people imagery, and unrelated product behavior were removed.

All implementation consumes GT Drive data from `lib/models.ts` or supplied owner assets. No new runtime dependency was added and the static-export contract remains intact.

## Homepage and global components

| Selection | Implementation | Placement | Notes |
| --- | --- | --- | --- |
| N8 image-led mega-menu | `ModelMegaMenu.tsx` | Global navigation | Three featured models plus View all and Compare; desktop and mobile behavior integrated through `Nav.tsx`. |
| P4 alternating chapters | `StoryChapters.tsx` | Homepage | Replaced the isolated spotlight with editorial model/feature chapters. |
| P5 horizontal story rail | `ModelStoryRail.tsx` | Homepage | Manual controls and native mobile scrolling; all nine models remain reachable. |
| C4 map-led footprint | `IndiaFootprint.tsx` | Homepage and Locations | Rebuilt around a genuine India states SVG and the five brochure-listed plant states. |
| F4 bold marquee | `TaglineMarquee.tsx` | Homepage and supporting pages | Exact tagline retained; restrained GT green treatment. |

F5 was selected but is not currently implemented. `RelatedModels.tsx` remains on model-detail pages.

## Inner-page components

### H2 — Contact hero

- File: `components/ContactChannelsHero.tsx`
- Route: `/contact/`
- Structure retained: split headline/intro and asymmetric channel cards.
- GT adaptation: WhatsApp, primary phone, email, and dealership enquiry using real contacts.
- Commit: `edf7a02`

### H3 and A3 — About page

- Files: `components/AboutImageHero.tsx`, `components/MissionStatement.tsx`
- Route: `/about/`
- H3 supplies the full-screen image hero.
- A3 supplies the mission statement and genuine brochure lineup image.
- Existing four brochure-supported strengths remain below.
- Commit: `58d7f25`

### H4, R4, and R5 — Dealership page

- Files: `DealerOpportunityHero.tsx`, `DealerBenefits.tsx`, `DealerPartnership.tsx`
- Route: `/dealers/`
- H4 retains the full-width image hero, floating product card, and bottom statistics bar.
- Verified figures used: nine models, five plant states, five partner-support areas.
- R4 presents six partner-benefit cards using GT green instead of the source gradient.
- R5 retains the two-column form/partnership structure, removes fake people and metrics, and uses real GT contacts.
- Commit: `6bac6fd`

### D9 — Interactive technical tabs

- Library source: Aura free, internal ID `444`, public component `2ACAC`.
- Source: https://www.aura.build/components/2ACAC
- File: `components/ModelTechnicalTabs.tsx`
- Routes: every `/models/[slug]/` page.
- Tabs: Tyres, Braking, Electrical, Colours.
- Behavior retained: active tab styles, moving gradient indicator, animated feature panel.
- Data rule: only model specs/features/colors from `lib/models.ts`; unavailable Chetak values say `To be confirmed`.
- Commit: `452afb1`

### D6 — Sticky feature navigation

- Library source: LandingHero prompt supplied by Arpit.
- File: `components/ModelFeatureNavigator.tsx`
- Routes: every `/models/[slug]/` page.
- Behavior retained: left sticky navigation, long feature chapters, IntersectionObserver active state, smooth chapter navigation.
- Chapters: Smart ride, Road confidence, Electric performance, Clean mobility. Empty chapters are omitted, so Chetak shows only the two groups supported by its source data.
- Owner multi-angle photography is used for eight models from `public/assets/gt-drive/gallery/`.
- Commit: `51d15f6`

### X2 — Interactive comparison table

- Library source: Aura Pro, internal ID `2661`, public component `A7079BF`.
- Source: https://www.aura.build/components/A7079BF
- File: `components/CompareTable.tsx`
- Route: `/compare/`.
- Structure retained: dark four-column comparison card, one label column, three product columns, highlighted center column, pointer spotlight.
- Interaction: each product column can select any of the nine models.
- Data rule: brochure values only; missing values render as an em dash.
- Test updated to verify all nine options and live column replacement.
- Commit: `3f741d3`

## Owner photography record

Source folder supplied by Arpit: `SCOOTER PHOTOS (1)/`.

Copied browser assets:

```text
public/assets/gt-drive/gallery/gt-soul-gallery.jpeg
public/assets/gt-drive/gallery/gt-soul-nxt-gallery.jpeg
public/assets/gt-drive/gallery/gt-ryd-gallery.png
public/assets/gt-drive/gallery/gt-ryd-plus-gallery.jpeg
public/assets/gt-drive/gallery/gt-one-plus-gallery.jpg
public/assets/gt-drive/gallery/gt-champion-gallery.jpeg
public/assets/gt-drive/gallery/gt-flying-gallery.jpeg
public/assets/gt-drive/gallery/gt-drive-pro-gallery.jpg
```

No owner image was supplied for GT Chetak.

## Brand logo

The approved GT Drive wordmark is available as a separate, high-resolution transparent PNG:

```text
public/assets/gt-drive/brand/gt-drive-logo-wordmark-highres.png
```

It is 4096x694 RGBA and was produced faithfully from the existing 620x105 wordmark without changing the logo design.

## Verification summary

- TypeScript passed after D9, D6, and X2.
- ESLint passed after D9, D6, and X2.
- D9, D6, and X2 were exercised through Playwright-driven desktop and mobile browser sessions against `127.0.0.1:3011`.
- Verified interactions: tab switching, selected tab state, sticky chapter selection, model selection, Chetak pending/missing data, image loading.
- Verified no console errors and no page-level horizontal overflow in tested viewports.
- A complete Next.js static production build passed after D6 and X2; all 19 static pages generated and the export completed successfully.

## Current limitations

- Forms are interface-only; delivery is not connected.
- F5 related-model marquee remains unimplemented.
- Complete Playwright suite, Lighthouse, accessibility, and deployment checks remain.
- The original supplied-photo directory remains untracked and must be preserved unless Arpit approves cleanup.
