# GT Drive Premium Website - New Session Handoff

Captured: 2026-08-22

## Mission

Turn the current GT Drive Next.js site into a distinctive, premium, production-ready product-information website for electric scooter buyers and motor dealers.

Build it section by section. Do not redesign or replace the whole website in one pass. For every section, research, propose, get explicit approval, implement, inspect, and only then move to the next section.

The current build is a functional baseline, not a visually accepted final website.

## Start Here

At the start of the new session:

1. Read this handoff completely.
2. Read `PRODUCT.md`, `DESIGN.md`, `GT_DRIVE_BROCHURE_CONTENT.md`, and `COMPONENT_LIBRARY_PLAN.md`.
3. Inspect `assets/gt-drive/comps/homepage-full-comp-06-light-build-reference.png`.
4. Inspect the current homepage and relevant source files before proposing changes.
5. Run the Impeccable context command once from the project root:

   ```powershell
   node C:\Users\arpit\.agents\skills\impeccable\scripts\context.mjs --target app/page.tsx
   ```

6. Use the `brainstorming` skill before creative implementation. Confirm only the current section's direction.
7. Begin with the header and homepage hero only. Do not proceed to the next section until Arpit approves the rendered result.

Suggested opening message for the new session:

> Read `NEXT_SESSION_HANDOFF.md` and the four authority files it names. Inspect comp 06 and the current live homepage. Use brainstorming, Impeccable, design-taste-frontend, frontend-design, and the component library. Work only on the header and hero. Research references, show the intended composition and motion, get my approval, then implement and verify desktop and mobile before asking to continue.

## Product Truth

The website is for product information and dealership enquiries. It is not ecommerce.

Primary audiences:

- Scooter buyers researching individual GT Drive models.
- Motor dealers and distributors evaluating the dealership opportunity.

Allowed actions:

- Explore products and individual product pages.
- Request information through a placeholder form.
- Call, WhatsApp, or email GT Drive.
- Learn about the company, plant locations, and dealership opportunity.

Never add:

- Buy Now, cart, checkout, online payment, discounts, price funnels, stock counters, or rental UI.
- Invented prices, range, speed, battery capacity, motor output, charging time, warranty, dimensions, certifications, dealer counts, awards, reviews, testimonials, or customer claims.
- Product details copied from one model to another.

Authoritative content order:

1. `GT DRIVE BROCHURE.pdf` - original owner-provided source.
2. `GT_DRIVE_BROCHURE_CONTENT.md` - organized extraction from every brochure page.
3. `PRODUCT.md` - durable product purpose, audiences, constraints, and confirmed facts.
4. `lib/models.ts` - implementation data, which must remain consistent with the sources above.

Confirmed models:

- GT - SOUL (SL)
- GT - SOUL NXT (DL)
- GT - RYD (CS)
- GT - RYD PLUS (FH)
- GT - ONE PLUS (BMW)
- GT - CHAMPION (CJ)
- GT - FLYING (E4)
- GT - DRIVE PRO
- GT - CHETAK, Coming Soon

Open fact checks:

- GT Chetak has no detailed brochure specs. Do not infer any.
- Confirm whether the GT One Plus model code `BMW` should be prominent publicly.
- Confirm whether brochure spelling `Hydrabad` should be corrected to `Hyderabad`.
- Confirm whether `Variable Drive Modes` and `Multiple Drive Modes` are distinct features.

## Approved Visual Direction

Design read:

> A premium EV product-information website for scooter buyers and motor dealers, using a bright automotive showroom language, logo-led white and GT green branding, cinematic product media, and deliberate scroll storytelling.

Design dials:

- `DESIGN_VARIANCE=8`
- `MOTION_INTENSITY=7`
- `VISUAL_DENSITY=4`

Creative north star: **The Electric Pit-Lane Showroom**.

Visual authority:

- Primary reference: `assets/gt-drive/comps/homepage-full-comp-06-light-build-reference.png`.
- Earlier direction: Comp 3's runway structure plus Comp 2's catalogue clarity.
- Comp 1's dark pit-lane feeling may influence small media frames or product-detail moments only.
- `homepage-full-comp-05-taste-depth.png` is a rejected dark direction.
- The user explicitly rejected a dark-primary website. White and green must dominate. Black is mainly for text, controls, and rare media contrast.

The generated comp is directional, not literal product truth. It contains visual-generation errors such as a duplicated Bihar location. Code and brochure data remain authoritative.

Durable visual rules:

- White is the page-scale canvas.
- GT green is the single brand accent and should behave like an energy or charge signal.
- Pale technical grays create zoning and depth.
- Use tight automotive radii, disciplined borders, stable media frames, spatial staging, and restrained shadows.
- Product media and verified facts lead every composition.
- No generic card wall, repeated three-card rows, decorative gradient blobs, excessive glass, dark theme drift, or generic eco leaves.
- No scroll cues, numbered section labels, version stamps, decorative status dots, fake metrics, or empty marketing poetry.
- Use at least four different section layout families across a long page. Do not repeat the same split or grid rhythm section after section.
- Keep visible language concrete and brochure-grounded.

Current fonts are Barlow Condensed and Manrope through `next/font`. Treat these as the incumbent baseline. Change them only if a section-level design review proves a stronger brand fit and the durable choice is recorded in `DESIGN.md`.

## Current Architecture

Stack:

- Next.js 15 App Router
- React 19
- TypeScript
- GSAP 3
- Phosphor icons
- Playwright
- CSS in `app/globals.css`
- Static export in `next.config.ts`

Key dependencies:

```json
{
  "@phosphor-icons/react": "^2.1.10",
  "gsap": "^3.15.0",
  "next": "^15.5.23",
  "react": "^19.2.8",
  "react-dom": "^19.2.8"
}
```

Routes:

- `/`
- `/models/`
- `/models/[slug]/` for nine model routes
- `/dealers/`
- `/about/`
- `/locations/`
- `/contact/`

Important files:

- `app/page.tsx` - homepage composition
- `app/globals.css` - current tokens, global styles, responsive rules
- `app/layout.tsx` - root layout and fonts
- `app/models/page.tsx` - catalogue
- `app/models/[slug]/page.tsx` - model route
- `lib/models.ts` - model data
- `components/Header.tsx`
- `components/ShowroomHero.tsx`
- `components/ModelRunway.tsx`
- `components/ProductCard.tsx`
- `components/ProductMediaGallery.tsx`
- `components/InquiryForm.tsx`
- `components/ContactActions.tsx`
- `components/Reveal.tsx`
- `components/Footer.tsx`
- `tests/site.spec.ts`

There is no Git repository in this folder. Before major edits, create a recoverable project snapshot or initialize Git with Arpit's approval. Do not claim rollback safety that does not exist.

## Current Baseline

The existing site already has:

- A multi-page App Router structure.
- Nine model routes with separate brochure-backed data.
- A white showroom hero with GSAP entrance animation.
- A draggable model runway with pointer capture, keyboard navigation, active tracking, and snap behavior.
- A model media gallery with selectable views.
- Buyer/dealer enquiry form anatomy and placeholder submission.
- Shared header, footer, direct contact actions, models, company, locations, and dealer pages.
- Static export support.

This is implementation scaffolding. It is not evidence that the visual design has been accepted.

## Assets

Brand references in `assets/gt-drive/brand/`:

- `gt-drive-logo-primary-lockup.png`
- `gt-drive-logo-wordmark.png`
- `gt-drive-logo-header.png`
- `gt-drive-logo-contact-page.png`
- `gt-drive-social-icons.png`
- `gt-drive-green-footer-bar.png`
- `brand_palette.md`
- `sampled_color_clusters.txt`

Temporary brochure-extracted scooter assets:

- `gt-soul-sl.png`
- `gt-soul-nxt-dl.png`
- `gt-ryd-cs.png`
- `gt-ryd-plus-fh.png`
- `gt-one-plus-bmw.png`
- `gt-champion-cj.png`
- `gt-flying-e4.png`
- `gt-drive-pro.png`
- `gt-chetak.png`
- `cover-scooter-lineup.png`
- `contact-sheet.png`

Visual comps in `assets/gt-drive/comps/`:

- `homepage-comp-01-launch-theatre.png`
- `homepage-comp-02-riders-dealers.png`
- `homepage-comp-03-catalogue-runway.png`
- `homepage-full-comp-01-pit-lane.png`
- `homepage-full-comp-02-information-showroom.png`
- `homepage-full-comp-03-scroll-runway.png`
- `homepage-full-comp-04-merged-approved-direction.png`
- `homepage-full-comp-05-taste-depth.png`
- `homepage-full-comp-06-light-build-reference.png`

Owner assets still required:

- Official individual scooter image ZIP.
- Official final logo or vector brand kit.
- Official video assets.
- Confirmed social profile URLs.
- Any new verified technical or commercial facts.

Treat extracted scooter images as temporary scaffolding. Keep media containers easy to replace without layout changes.

## Component Library Trace

The current build did use the component library as structural inspiration. Continue doing so deliberately, and record each adaptation.

| Library reference | GT Drive use | Current implementation |
| --- | --- | --- |
| Aura `#635` | Responsive header anatomy | `components/Header.tsx` |
| Aura `#700` | Drag and snap vehicle runway | `components/ModelRunway.tsx` |
| Aura `#676` | Product gallery and catalogue | `components/ProductCard.tsx`, homepage catalogue |
| Aura `#1080` | Product media and selector anatomy | `components/ProductMediaGallery.tsx` |
| Aura `#2281` | Compact trust feature rail | Homepage and About support content |
| Aura `#684` | Inquiry form anatomy | `components/InquiryForm.tsx` |
| LandingHero `#3761` | Location and map relationship | Homepage and `app/locations/page.tsx` |
| Aura `#2089` | Footer information architecture | `components/Footer.tsx` |
| Aura `#2270` | GSAP sequencing inspiration only | `components/ShowroomHero.tsx`, `components/Reveal.tsx` |
| Aura `#942` | Possible engineering panel | Do not use until official close-up media justifies it |

For each new section:

1. Search the component library by the section's actual job.
2. Inspect the top candidates in full.
3. Choose one behavior or structural pattern, not an entire unrelated visual style.
4. Strip rental, ecommerce, pricing, social-proof, auth, and fake-data UI.
5. Rebuild it in the GT Drive design system.
6. Add the selected component ID and adaptation rationale to `COMPONENT_LIBRARY_PLAN.md`.

Custom components remain appropriate when the library match is weak: `VideoHeroBay`, `ChargeLine`, `ModelCard`, `ModelFilterBar`, `ProductFactGrid`, `ColorSwatches`, `ProductActionGroup`, `ComingSoonPanel`, `DealerOpportunityBand`, `ContactActionBar`, `VideoPlaceholder`, and `Breadcrumbs`.

## Skills To Use

Use skills because they own a real part of the work, not to create ceremony.

### Mandatory workflow skills

- `brainstorming`: use before each creative section. Resolve purpose, composition, evidence, and interaction before code.
- `impeccable`: use as the primary design workflow. Run context once per session. Use `shape` for planning and confirmation. `craft` is a deprecated alias and adds nothing. Load `craft-floor.md` immediately before UI edits.
- `design-taste-frontend`: use for the anti-template audit, design read, dials, layout diversity, copy audit, asset discipline, and final pre-flight check.
- `frontend-design`: use when implementing a distinctive production-grade frontend rather than reproducing a generic template.
- `ui-ux-pro-max`: use as a secondary design intelligence and UX review layer, especially for responsive hierarchy and interaction choices.

### Motion skills

- `motion-design`: define one project motion personality. GT Drive should use **Premium** motion: controlled 350-600ms movement, minimal overshoot, a consistent signature ease, and one entrance grammar.
- `gsap-react`: use scoped refs and lifecycle cleanup. Prefer `@gsap/react` and `useGSAP()` if that dependency is added. If retaining effects, always use `gsap.context()` and `ctx.revert()`.
- `gsap-performance`: animate transform and opacity, batch reads and writes, use `quickTo()` for frequently updated values, avoid unnecessary pins, and stop offscreen work.
- Use GSAP and ScrollTrigger only for actual scroll choreography such as pinning, scrubbed storytelling, or product transitions. Use CSS or a lighter observer-based reveal for simple entrances.

Motion contract for every animation:

1. State what it communicates: hierarchy, storytelling, feedback, or state change.
2. Use the minimum properties needed.
3. Provide a static or instant `prefers-reduced-motion` path.
4. Clean up on unmount and route changes.
5. Verify touch, keyboard, and mobile behavior.
6. Profile it before acceptance.

### Engineering and quality skills

- `vercel-react-best-practices`: Next.js and React performance review.
- `vercel-composition-patterns`: reusable component boundaries and prop design.
- `accessibility-compliance-accessibility-audit`: WCAG, keyboard, focus, form labels, contrast, and reduced-motion review.
- `web-design-guidelines`: interface quality and web convention review.
- `webapp-testing`: Playwright interaction and responsive tests.
- `verification-before-completion`: no completion claim without fresh evidence.

### Media and optional skills

- `imagegen`: create section-specific visual comps, media treatments, and temporary art direction. Never use generated visuals as factual product photography without clear internal labeling.
- `remotion-best-practices`: use only if creating React-rendered marketing or product video sequences.
- `threejs-animation`: optional and high-cost. Use only when an official product asset can genuinely support a 3D experience. It is not a default premium effect.
- `theme-factory`: optional for formalizing tokens, but GT Drive's palette is already fixed by the brand.

Do not use the local `brand-guidelines` skill as GT Drive guidance. It is Anthropic-specific.

## Available Tools

### Research and references

- Web search for current leading scooter brand sites, premium automotive references, interaction references, and primary technical documentation.
- Image search for reference analysis only. Respect rights and do not ship unlicensed assets.
- Local PDF, image, and filesystem inspection for brochure and comp evidence.

### Component library MCP

- Search components.
- Get complete component records and code.
- List sources and top tags.

Use it before implementing each major section, then document what was borrowed and what was discarded.

### Design tools

- Image generation for full-section or full-page compositional options.
- Stitch can create projects, design systems, screens, variants, and apply a design system.
- Figma can create a file, generate designs, inspect screenshots and variables, export assets, and connect components.

Recommended usage:

- Use image generation for fast, high-level section compositions.
- Use Stitch when a structured screen variant will help resolve layout.
- Use Figma only when formal component specs, shared design review, or asset handoff justify the extra layer.
- Do not generate a new entire homepage when only one section is being decided.

### Browser and verification tools

- Chrome DevTools navigation, screenshots, snapshots, viewport emulation, console and network inspection.
- Lighthouse audits.
- Performance traces and insight analysis.
- Interaction tools for click, hover, drag, forms, and keyboard testing.
- Local Playwright test suite.

### Core coding tools

- `apply_patch` for deliberate source edits.
- PowerShell commands for inspection, builds, tests, and process lifecycle.
- Image viewer for exact local comp and screenshot inspection.

## Section Workflow

Use this loop for every section:

### 1. Define

- State the section's job, audience, required content, and primary visitor action.
- Name the brochure or product evidence it uses.
- Identify what would make it feel generic or wrong.

### 2. Research

- Inspect two or three current best-in-class references for this section's job.
- Search the component library and inspect the strongest candidates.
- Check current GT Drive assets and any new owner assets.

### 3. Shape

- Present one recommended composition and at most two materially different alternatives when needed.
- Define desktop, mobile, content hierarchy, and motion intent.
- Use an image-generated comp when visual ambiguity is meaningful.
- Get explicit approval. Do not write UI code during the shape step.

### 4. Implement

- Load Impeccable's `craft-floor.md` immediately before editing.
- Implement only the approved section plus minimal shared primitives it genuinely requires.
- Preserve routes, product truth, accessibility, and static export behavior.

### 5. Verify

- Inspect desktop and mobile viewport screenshots.
- Test keyboard, touch, drag, focus, form, and reduced-motion behavior as relevant.
- Check console and network errors.
- Run focused Playwright coverage.
- Run lint and a production build at meaningful milestones.
- Use Lighthouse and a performance trace for motion-heavy sections.

### 6. Approve

- Show Arpit the section result and evidence.
- Record accepted durable choices in `DESIGN.md` or a surface brief.
- Do not move to the next section until accepted.

## Recommended Build Order

1. Foundation tokens, typography, header, navigation behavior, and mobile menu.
2. Homepage hero and future video bay.
3. Trust and credibility rail.
4. Interactive model runway.
5. Product catalogue preview.
6. Product or video spotlight.
7. Dealership opportunity section.
8. Brand and manufacturing story.
9. Plant locations section.
10. Contact and enquiry section.
11. Footer and persistent mobile contact actions.
12. Models catalogue page.
13. Product detail page system and model-specific checks.
14. Dealers page.
15. About page.
16. Locations page.
17. Contact page.
18. Cross-page motion, route transitions, SEO, accessibility, and performance polish.

For the homepage, vary composition. A premium page should feel paced: a decisive hero, a concise trust passage, an interactive product moment, a calm catalogue, a commercial dealer moment, company proof, location utility, and a clear close.

## Definition Of Premium

Premium does not mean more effects or more darkness. For GT Drive it means:

- Immediate brand and product recognition in the first viewport.
- Real scooter media at meaningful scale.
- A clear, confident reading order.
- Brochure-true facts with no invented filler.
- Distinct compositions built for the content, not stock sections.
- Motion that expresses energy, product transition, and hierarchy.
- Excellent mobile behavior and stable layouts.
- Precise type, spacing, contrast, controls, and interaction states.
- Fast loading, no jank, no console errors, and strong accessibility.
- A coherent white-and-green showroom world across every route.

## Technical Guardrails

- The app uses static export. Do not introduce server-only runtime dependencies without revisiting deployment.
- Stop the development server before `npm run build`. Running both against `.next` previously caused stale or missing module behavior. Restart the server after the build.
- Keep image dimensions or aspect ratios reserved to prevent layout shift.
- Use `next/image` where appropriate, with priority for the real LCP asset.
- Isolate animation in client leaf components. Do not convert entire pages to client components for one effect.
- Do not use React state for continuous scroll or pointer values.
- Never attach an unmanaged `window` scroll listener.
- Do not animate layout properties when transform or opacity can achieve the result.
- Do not mix GSAP, Motion, and Three.js inside one component tree.
- Test long model names and CTA labels at desktop and mobile widths.
- Full-page screenshots can visually repeat fixed headers while stitching. Use viewport screenshots and incremental scroll inspection for acceptance.
- Lazy offscreen images may report zero natural width until scrolled into view. Test their asset response and render after intersection instead of assuming a broken file.

Security note:

- `npm audit` previously reported three high-severity transitive advisories involving the current Next.js/PostCSS/Sharp tree.
- The suggested automatic fix involved a breaking Next.js 16 upgrade.
- Do not run a force upgrade silently. Recheck current advisories, review official Next.js guidance, and handle the framework upgrade as a separate approved task.

## Commands

Install:

```powershell
npm install
```

Development:

```powershell
npm run dev -- --hostname 127.0.0.1 --port 3000
```

Verification:

```powershell
npm run lint
npm run test:e2e
npm run build
```

The development server is not running at handoff completion. Start it with the command above and verify `http://127.0.0.1:3000` before browser work.

## Verified Baseline

Before this handoff:

- `npm run lint` passed.
- `npm run test:e2e` passed three tests.
- `npm run build` passed and generated 18 static pages.
- The homepage and GT Drive Pro route returned HTTP 200.
- Desktop and mobile screenshots were inspected for the current hero and product page.

Existing screenshots:

- `artifacts/screenshots/home-desktop-top-v2.png`
- `artifacts/screenshots/home-mobile-top-clean-v2.png`
- `artifacts/screenshots/product-desktop-top-v2.png`
- `artifacts/screenshots/home-desktop-scrolled.png`
- `artifacts/screenshots/home-mobile-scrolled.png`

These checks prove the baseline runs. They do not prove visual acceptance.

## Acceptance Checklist

Before calling any section complete:

- It visibly follows the approved white-and-green GT Drive world.
- It has a product-specific purpose and does not resemble a generic template.
- Every claim is sourced or clearly omitted.
- It works at desktop and mobile sizes without overlap or clipped text.
- CTA labels do not wrap unexpectedly.
- Keyboard, focus, touch, and reduced-motion states work.
- Animations have a stated purpose and no obvious jank.
- No console or failed-network errors were introduced.
- The component-library source and adaptation are recorded when used.
- Arpit has seen and approved the rendered section.

## Immediate Next Task

Work on **Foundation + Header + Homepage Hero only**.

The next session should:

1. Inspect the current header and hero in code and browser.
2. Inspect comp 06 at full resolution.
3. Research current premium EV and scooter hero/header patterns.
4. Search the component library for navigation, media hero, video hero, product reveal, and showroom patterns.
5. Decide whether the existing Aura `#635` adaptation remains the best structural base.
6. Shape a single recommended first viewport, including its future-video behavior and current-image fallback.
7. Get explicit approval.
8. Implement only the approved header and hero.
9. Verify at representative desktop and mobile widths, reduced motion, keyboard navigation, console, and LCP behavior.
10. Show screenshots and wait for approval before touching the trust rail.
