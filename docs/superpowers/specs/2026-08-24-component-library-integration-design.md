# GT Drive Component Library Integration Design

Date: 2026-08-24  
Status: Approved design  
Scope: Component placement and behavior across the existing GT Drive website

## Objective

Integrate the six component-library patterns selected by Arpit into the existing GT Drive Next.js website without turning the homepage into a stack of competing horizontal sections. The selected patterns are:

- N8: image-led model mega-menu
- P4: alternating image and text chapters
- P5: horizontal model story rail
- C4: map-led manufacturing footprint
- F4: bold text marquee
- F5: image-card model marquee

The implementation must preserve the existing static-export contract, brochure-backed content rules, design tokens, typography, and accessibility baseline.

## Design Direction

Use the selected library components as structural references, not as copy-and-paste visual themes. Their source branding, colors, gradients, glass effects, ecommerce language, pricing, and unsupported claims must not enter the GT Drive site.

Every adapted component must use:

- Archivo for display typography and Inter for body copy
- The existing white, ink, stage, line, and GT green tokens
- Tight 4px radii where a radius is needed
- The existing signature easing and motion durations
- Brochure-backed content from `lib/models.ts` and the documented source hierarchy
- Existing responsive and reduced-motion conventions

## Approved Site Architecture

### Global navigation

N8 replaces the current primary navigation on every route. The default header remains compact. Opening the Models mega-menu reveals three featured models:

1. GT — Drive Pro
2. GT — Soul NXT
3. GT — RYD Plus

The mega-menu also provides distinct links to View all models and Compare models. All existing primary routes remain available.

### Homepage

The approved homepage sequence is:

1. Existing `Hero`
2. Revised `BrandStatement`
3. P4 `StoryChapters`
4. P5 `ModelStoryRail`
5. Existing `DealerBand`
6. C4 `IndiaFootprint`
7. F4 `TaglineMarquee`
8. Existing `ContactClose`

The current `ModelSpotlight` and `ModelRange` sections are replaced on the homepage rather than duplicated.

### Model catalogue

The `/models/` route retains its complete 3 by 3 catalogue. This remains the clearest surface for scanning all nine models and should not be replaced by a rail or marquee.

### Model detail routes

On `/models/[slug]/`, F5 `RelatedModelMarquee` replaces the current `RelatedModels` grid. It shows related models as an image-led continuous strip while retaining usable direct links.

### Locations route

C4 becomes the visual foundation of `/locations/`, with the complete five-state address list synchronized to the India visual. The homepage uses a more concise version of the same component as a manufacturing-footprint teaser.

### Other routes

The compare, dealers, about, contact, and other existing routes retain their current page structures unless a later approved design explicitly changes them.

## Component Responsibilities

### `ModelMegaMenu`

Purpose: Improve global product discovery without making the default navbar taller or busier.

Desktop behavior:

- The Models trigger opens the mega-menu on hover, keyboard focus, or click.
- The panel contains three featured model cards with image, model name, short brochure-backed lead, and direct model link.
- View all models and Compare models are presented as separate utility actions.
- Escape, outside click, route navigation, or returning focus outside the menu closes it.
- Keyboard focus must remain visible and move through the panel in a logical order.

Mobile behavior:

- The hamburger opens a full-screen navigation sheet.
- The three featured models appear before the complete primary route list.
- Body scrolling is locked only while the sheet is open.
- Escape and the close control dismiss the sheet.

### `StoryChapters`

Purpose: Replace the isolated homepage model spotlight with two editorial, alternating chapters.

Chapter one features GT — Drive Pro with its existing product image, lead, and a concise selection of brochure-listed specifications.

Chapter two communicates shared brochure-listed features across the GT Drive range. It must not duplicate the later manufacturing-footprint section or invent a performance narrative.

The two rows alternate image and copy alignment on desktop and stack image before copy on mobile. Motion is limited to the existing reveal treatment.

### `ModelStoryRail`

Purpose: Replace the homepage 3 by 3 model grid with a more focused, manually browsable range story.

- All nine models remain available in the rail.
- Cards use existing model data and images.
- Desktop provides previous and next controls.
- Mobile uses native horizontal swipe.
- CSS scroll snapping creates stable stopping positions.
- There is no autoplay.
- The rail includes a clear route to the full catalogue.

### `IndiaFootprint`

Purpose: Turn the five-state manufacturing list into a spatial, accessible location experience.

- A simplified India visual carries five state markers.
- Focusing, hovering, or selecting a state highlights the corresponding address.
- The address list remains complete and usable without animation or client-side interaction.
- No Google Maps dependency is introduced.
- No factory counts, dealer counts, or precise coordinates are invented.
- Telangana continues to use `Hydrabad` as printed in the brochure, with the existing explanatory note, until the owner confirms a correction.

The homepage version is concise; `/locations/` contains the full addresses and explanatory content.

### `TaglineMarquee`

Purpose: Adapt F4 into a cleaner version of the existing tagline moment.

- The exact text remains “Drive Clean. Go Green.”
- The treatment uses one continuous line with restrained scale.
- Movement is slower than the current marquee.
- Reduced-motion mode renders a static line.
- The green treatment remains limited to the meaningful “Go Green.” phrase.

### `RelatedModelMarquee`

Purpose: Adapt F5 into a visual cross-navigation component on model-detail pages.

- The current model is excluded.
- Remaining models appear as linked image cards in a continuous loop.
- Motion pauses on hover and keyboard focus.
- Reduced-motion mode becomes a static, horizontally scrollable row.
- Every linked card remains reachable by keyboard.
- GT — Chetak retains its Coming Soon treatment and honest placeholder behavior.

## Data Flow and Source of Truth

All components consume data from `lib/models.ts`. No second model array or duplicated address dataset may be introduced.

The implementation may add derived selectors, such as featured-model slugs or related-model ordering, but they must reference the authoritative model records. The featured mega-menu slugs are:

- `gt-drive-pro`
- `gt-soul-nxt`
- `gt-ryd-plus`

All public copy must remain within the existing source hierarchy:

1. `GT DRIVE BROCHURE.pdf`
2. `GT_DRIVE_BROCHURE_CONTENT.md`
3. `PRODUCT.md`
4. `lib/models.ts`

## Image and Content Fallbacks

- Missing official model photography uses the existing honest image or placeholder path.
- GT — Chetak remains Coming Soon.
- No additional generated scooter renders are permitted while the official photography ZIP remains pending.
- A failed decorative map enhancement must not hide the address list.
- Image dimensions and containers must prevent layout shift.

## Accessibility Requirements

- The mega-menu trigger exposes expanded and controls state.
- Menu, rail, map, and marquee interactions are fully keyboard reachable.
- Focus styles remain visible against white, dark, and green surfaces.
- Escape closes temporary navigation surfaces.
- Continuous motion pauses on interaction and is removed under `prefers-reduced-motion`.
- Controls have explicit accessible names.
- Horizontal components do not create page-level horizontal overflow.
- Semantic links are used for navigation; buttons are used only for state changes.

## Static Export and Dependency Constraints

- `output: "export"` must continue to pass.
- No new package is required or approved for this work.
- Existing React, Next.js, CSS, and Phosphor Icons capabilities are sufficient.
- No CMS, database, map SDK, motion library, or runtime API is introduced.
- Existing routes and trailing-slash behavior remain unchanged.

## Implementation Order

Components will be implemented and verified one at a time in this order:

1. N8 `ModelMegaMenu`
2. P4 `StoryChapters`
3. P5 `ModelStoryRail`
4. C4 `IndiaFootprint`
5. F4 `TaglineMarquee`
6. F5 `RelatedModelMarquee`

This order starts with the highest-priority user concern, then proceeds through homepage structure, locations, and model-detail cross-navigation.

## Verification Strategy

Each component must be checked before beginning the next one.

Required visual checks:

- Desktop at 1920 by 800
- Mobile at 390 pixels wide
- The real route context, not an isolated component only
- Open, hover, focus, selected, and paused states where applicable

Required behavior checks:

- Keyboard navigation and focus visibility
- Escape and outside-click dismissal for the mega-menu
- Native swipe and control behavior for horizontal rails
- Address synchronization for the footprint
- Hover and focus pause for the image marquee
- Reduced-motion fallbacks
- No page-level horizontal overflow
- No browser console errors

Required project checks:

- `npm run lint`
- `npm run build`
- Existing Playwright suite
- New Playwright coverage for the mega-menu, horizontal rails, and location selection

## Out of Scope

- Redesigning the accepted hero
- Adding or removing routes
- Replacing the complete `/models/` catalogue with a carousel
- Adding ecommerce behavior
- Adding generated scooter images
- Changing design tokens, fonts, or the static-export contract
- Wiring the inquiry form to an external destination
- Resolving owner-pending brochure questions

## Approval Record

Arpit approved:

- Site-wide distribution instead of placing all six components on the homepage
- The balanced placement approach
- Three mega-menu featured models plus View all and Compare
- GT — Drive Pro, GT — Soul NXT, and GT — RYD Plus as the featured models
- The page architecture
- The interaction and motion behavior
- The component, content, fallback, accessibility, and verification design
