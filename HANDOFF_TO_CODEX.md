# GT Drive Website — Current Handoff

Updated: 2026-08-24 15:57 IST
Current committed HEAD at update time: `3f741d3`
Workspace: `C:\NITRO 4 BACKUP\coding projects\sccoty webstie`

This is the authoritative handoff for the current GT Drive website. Older handoffs and screenshots describe superseded designs; use this file and `docs/IMPLEMENTATION_STATUS_2026-08-24.md` first.

## 1. Product and truth rules

GT Drive is the electric two-wheeler brand of Houstan Innovations LLP. The site is a static product-information and dealership-enquiry experience, not ecommerce.

Source hierarchy:

1. `GT DRIVE BROCHURE.pdf`
2. `GT_DRIVE_BROCHURE_CONTENT.md`
3. `PRODUCT.md`
4. `lib/models.ts`

Do not invent prices, range, speed, battery capacity, warranty, dealer counts, testimonials, awards, certifications, or availability. GT Chetak remains Coming Soon and must not inherit specifications from other models. The enquiry forms still have no delivery backend and disclose that fact after submission.

## 2. Stack and commands

- Next.js 15 App Router, React 19, TypeScript 5
- Tailwind CSS v4 with tokens in `app/globals.css`
- Archivo display font and Inter body font
- Phosphor Icons
- Static export through `output: "export"`
- Playwright tests in `tests/site.spec.ts`

Commands:

```powershell
npm run dev -- -H 127.0.0.1 -p 3011
npm run lint
npx tsc --noEmit
npm run build
npx playwright test
```

The manually restarted preview currently uses `http://127.0.0.1:3011`. `playwright.config.ts` still owns port 3010 for automated tests. Do not run a production build while a development server is writing the same `.next` directory; stop the server, build, then restart it.

## 3. Current routes

| Route | Current composition |
| --- | --- |
| `/` | Hero → BrandStatement → P4 StoryChapters → P5 ModelStoryRail → DealerBand → C4 IndiaFootprint → F4 TaglineMarquee → ContactClose |
| `/models/` | Complete nine-model catalogue |
| `/models/[slug]/` | Product hero → D9 ModelTechnicalTabs → D6 ModelFeatureNavigator → RelatedModels → ContactClose |
| `/compare/` | X2 three-column interactive comparison; each column can select any of nine models |
| `/dealers/` | H4 DealerOpportunityHero → R4 DealerBenefits → R5 DealerPartnership |
| `/about/` | H3 AboutImageHero → A3 MissionStatement → four strengths → marquee → contact |
| `/locations/` | C4 IndiaFootprint with five full addresses → contact |
| `/contact/` | H2 ContactChannelsHero → full InquiryForm |

## 4. Implemented component-library work

Homepage and global work:

- N8 image-led model mega-menu: `components/ModelMegaMenu.tsx`, integrated through `components/Nav.tsx`.
- P4 alternating chapters: `components/StoryChapters.tsx`.
- P5 horizontal model rail: `components/ModelStoryRail.tsx`.
- C4 India map: `components/IndiaFootprint.tsx` using `public/assets/gt-drive/india-states-premium.svg`.
- F4 marquee: `components/TaglineMarquee.tsx`.

Inner-page work completed on 2026-08-24:

- H2 split hero/cards: `components/ContactChannelsHero.tsx`.
- H3 full-screen image hero: `components/AboutImageHero.tsx`.
- A3 mission statement: `components/MissionStatement.tsx`.
- H4 image hero with floating card and stats: `components/DealerOpportunityHero.tsx`.
- R4 benefits grid: `components/DealerBenefits.tsx`.
- R5 partnership form: `components/DealerPartnership.tsx`.
- D9 Aura `2ACAC` interactive tabs: `components/ModelTechnicalTabs.tsx`.
- D6 LandingHero sticky feature navigation: `components/ModelFeatureNavigator.tsx`.
- X2 Aura Pro `A7079BF` comparison table: `components/CompareTable.tsx`.

The exact integration record, source links, adaptations, validation, and outstanding items are in `docs/IMPLEMENTATION_STATUS_2026-08-24.md`.

## 5. Owner scooter photography

The expected owner images arrived in `SCOOTER PHOTOS (1)`. Eight models are present:

- GT Soul
- GT Soul NXT
- GT RYD
- GT RYD Plus
- GT One Plus
- GT Champion
- GT Flying
- GT Drive Pro

Browser-ready copies live in `public/assets/gt-drive/gallery/` and are used by D6. GT Chetak has no new owner image and continues using the existing honest Coming Soon asset.

The original `SCOOTER PHOTOS (1)/` directory is intentionally untracked. Do not delete it without Arpit's approval.

## 6. Current verification evidence

Latest checks during the component pass:

- `npm run lint` passed after D6 and X2.
- `npx tsc --noEmit` passed after D6 and X2.
- D9 desktop/mobile: all four tabs switched correctly, indicator moved, model values rendered, GT Chetak showed `To be confirmed`, no console errors or page overflow.
- D6 desktop/mobile: four chapters for regular models, scroll/click active state worked, owner image loaded at natural width, GT Chetak reduced to two supported chapters, no console errors or page overflow.
- X2 desktop/mobile: three selectors worked, switching to GT Chetak updated the column and Coming Soon state, no console errors or page overflow.
- A full production build passed after the complete D9, D6, and X2 pass: 19 static pages generated and exported successfully.

## 7. Git trail for the approved pass

```text
f3a40c7 Rebuild navbar from approved reference
43492c5 Add approved P4 story chapters
691e024 Add approved P5 model story rail
25f3328 Add India-focused C4 location map
52bce70 Replace location map with clean India outline
5e56957 Generate premium Survey of India state map
bb529e7 Align map pins to plant locations
f5f9043 Center location pins within states
98f7cdf Nudge Madhya Pradesh map pin upward
44052bd Add approved F4 tagline marquee
f7f3429 Add inner pages component shortlist
edf7a02 Add approved H2 contact channels hero
58d7f25 Add approved H3 and A3 about sections
6bac6fd Add approved dealership page components
452afb1 Add approved D9 technical feature tabs
51d15f6 Add approved D6 sticky model features
3f741d3 Replace compare page with approved X2 table
```

## 8. Important working-tree ownership

At this handoff, these pre-existing/user-owned items were deliberately not included in component commits:

- Modified: `components/BrandStatement.tsx`
- Untracked: `GT_DRIVE_COMPONENT_SHORTLIST.html`
- Untracked: `SCOOTER PHOTOS (1)/`

Do not discard, overwrite, stage, or delete them without first inspecting and confirming intent. Documentation and memory files added after this handoff may appear as additional intentional changes.

## 9. Remaining work and decisions

1. F5 image-card related-model marquee was selected earlier but is not implemented in the current source; model pages still use `RelatedModels`. Do not claim otherwise.
2. Inquiry forms need a real email/CRM destination before launch. Ask for the target integration.
3. Run the complete Playwright suite before deployment.
4. Run Lighthouse, accessibility, focus, and reduced-motion audits.
5. Add sitemap, robots, Open Graph image, privacy/terms handling as required before public launch.
6. Owner confirmation remains pending for GT One Plus code `BMW`, address spelling, and any facts absent from the brochure.

## 9A. Brand logo asset

- Original wordmark: `public/assets/gt-drive/brand/gt-drive-logo-wordmark.png` (620x105, white background).
- High-resolution transparent wordmark: `public/assets/gt-drive/brand/gt-drive-logo-wordmark-highres.png` (4096x694, 32-bit RGBA).
- The high-resolution file preserves the approved existing GT Drive artwork; it is not a redesigned or invented logo.

## 10. Working preferences

- Move quickly and implement one confirmed component at a time.
- Use the exact component-library prompt/code supplied by Arpit; do not invent an unrelated replacement. If the source code is unavailable, say so.
- Preserve real GT Drive content and owner media while adapting only branding, copy, colors, and necessary behavior.
- Show the localhost link after implementation.
- Verify actual rendering, interaction, console state, images, and mobile overflow; HTTP 200 alone is insufficient.
- Never present a passing build as visual approval.

## 11. Recommended next action

The confirmed inner-page component set is complete. Review the finished routes visually with Arpit. If he wants to continue the earlier selected set, decide whether to implement F5 as the related-model marquee. Otherwise move to final QA and deployment-readiness work.
