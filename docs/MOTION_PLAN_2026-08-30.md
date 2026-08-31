# GT Drive — Motion & Interactivity Plan

Date: 2026-08-30
Author: Claude, in-session
Skills applied: impeccable `animate` reference, impeccable `craft-floor`, frontend-design principles
Libraries scanned: MCP `component-library` (aura, landinghero, motionsite) — used for direction, not lift
Anchor docs: `DESIGN.md` (`MOTION_INTENSITY=7`, "engineered and deliberate: pinned scooter reveals, charge-line progress")

## 1. What we're solving

Current site has real interactivity — Hero mouse-parallax + slider, `ModelStoryRail` horizontal scroll, `ModelFeatureNavigator` IntersectionObserver, `ModelTechnicalTabs` moving indicator, `TaglineMarquee`, and the `Reveal` fade-up-on-scroll wrapper used across almost every section.

But it *reads* plain because:

1. **One motion vocabulary repeated everywhere.** Almost every section entrance is the same `Reveal` fade+translate. Craft-floor: *"not one identical entrance on every section."*
2. **No focal moment per page.** DESIGN.md calls for "pinned scooter reveals, charge-line progress, model transitions, product spec panels sliding into place" — none of those exist yet.
3. **Text just appears.** No mask/clip reveals on the big headlines that would earn their scale.
4. **The named brand motif — the "Charge Line" — has no motion life.** It's a colour rule in DESIGN.md, but green never *moves* anywhere on the site.
5. **No page-to-page continuity.** Every route change is a hard swap.

## 2. Motion thesis (per impeccable animate.md §"Set the motion thesis")

**Focal moment (site-wide):** the *scooter reveal* — every hero and every big product image resolves through a brief blur-clear + scale-settle, so the product feels *revealed*, not printed.

**Continuity:** page transitions preserve the nav and use a shared-element sweep so route changes feel like moving inside one building, not slamming a door.

**Feedback:** every interactive control (tab, model card, journey step, marquee) has a specific hover/active vocabulary — no button uses only `hover:scale-x`.

**Budget:** all animations must hold 60fps on a mid-range Indian Android at 3G. No new npm dependency unless we hit a wall on shared-element continuity. No `will-change` outside the frame of an active animation. `prefers-reduced-motion` collapses every focal moment to instant.

## 3. The motion system — nine named motifs

Each motif has a **specific job**, a **specific vocabulary**, and **one or two homes** on the site. Not every section gets a motif. Reused patterns are a system; unique-per-section effects are noise.

| # | Motif | Vocabulary | Job | Home |
|---|---|---|---|---|
| 1 | **Charge Line Draw** | width 0 → measured, 700ms cubic-bezier(0.16,1,0.3,1) | Give the DESIGN.md "charge line" motion life. One horizontal green line that draws on scroll, above the first headline of a page hero. | Page heroes (`/`, `/about`, `/dealers`, `/contact`, `/models`) |
| 2 | **Headline Mask Reveal** | word-by-word clip-path slide from below, 100ms stagger per word, capped at 500ms total | The one authored moment per page's biggest headline. Not fade — a directional reveal. | Home Hero title, About hero headline, Dealer hero headline, StoryChapters "GT — Drive Pro" |
| 3 | **Pinned Scooter Reveal** | filter: blur(12px→0) + transform: scale(1.02→1.0), 800ms exp-out, one shot on first view | The scooter *resolves* into focus instead of just loading. | Model detail hero image, StoryChapters Drive Pro spotlight, ModelFeatureNavigator gallery images |
| 4 | **Sequenced Panel Slide** | translateX(24px → 0) + opacity + subtle 8px→0 blur, 90ms stagger, cap 360ms | Lists that appear *as* lists get an authored sequence, not repeated `Reveal`. | ModelTechnicalTabs spec rows, DealerJourney 4 steps, AboutFootprintBand 5 states, DealerBenefits list |
| 5 | **Cursor Spotlight Indicator** | active-tab indicator follows pointer with 200ms ease-out lag | Acknowledges reader attention on interactive nav rows. Adds hover to the existing D9 tab indicator; adds a green side-mark on hover to D6 nav. | ModelTechnicalTabs, ModelFeatureNavigator sticky nav |
| 6 | **Marquee Speed Modulation** | animation-play-state adjusts on hover — slows to 50%, resumes | Acknowledges pause-to-read. | TaglineMarquee |
| 7 | **Count-Up Numbers** | requestAnimationFrame loop, ease-out over 900ms, single-shot on entry | The dealer stats (9 · 5 · 5) count up on first view, then rest. | DealerOpportunityHero stats bar |
| 8 | **View Transitions** | browser-native View Transitions API — cross-page fade + subtle slide, nav pinned | Continuity between routes. Route changes feel spatial. | Every `<Link>` navigation |
| 9 | **Product Card Peek** | rotate-x(2deg) + shadow lift + tiny floating "View →" chip fading in | Feedback on the models catalogue grid — every card responds specifically. | ModelCard on `/models` |

## 4. What we retire or scope down

- **`Reveal` is not the default entrance.** Keep the component; use it only where content actually appears below the fold *and* no motif above applies. Not on every h2, not on every paragraph. Rule of thumb: **max one `Reveal` per section**.
- **Auto-play Hero slider** (6s interval) — keep but pause on hover *and* respect `prefers-reduced-motion` (already pauses on reduce; verify). Consider extending interval to 8s for more reading time.
- **`hover:scale-*`** decorations on cards without a specific job — replace with motif #9 on model cards, drop elsewhere.

## 5. Reduced-motion contract

`@media (prefers-reduced-motion: reduce)`:
- Motifs 2, 3: no reveal — content is instantly visible.
- Motifs 1, 4: 0ms duration, no stagger.
- Motif 5: indicator jumps directly to active tab (no lag).
- Motif 6: marquee stops.
- Motif 7: number is shown at final value, no count.
- Motif 8: browser handles automatically.
- Motif 9: hover feedback keeps state changes but no transform.
- Feedback ≤ 150ms (button states) always plays — it's not decoration.

## 6. Implementation choices

**Stack:** stay on the existing runtime — CSS custom properties + Web Animations API + IntersectionObserver + View Transitions API. **No new dependency.** (Assessed `motion` / `framer-motion` — not needed unless shared-element FLIP becomes complex on route change.)

**New primitives to write (small, one file each):**

| Component | Purpose | Where lived |
|---|---|---|
| `MaskReveal` | Wrap a headline; splits into words, animates each with `clip-path: inset()` on enter | `components/motion/MaskReveal.tsx` |
| `ChargeLine` | Renders the 40–120px green line that draws on scroll-into-view | `components/motion/ChargeLine.tsx` |
| `CountUp` | Wraps a number; ramps 0 → target on first-visible | `components/motion/CountUp.tsx` |
| `ScooterReveal` | Wrap an `<Image>`; applies motif #3 CSS variables on first-visible | `components/motion/ScooterReveal.tsx` |

**Existing primitives to keep:** `Reveal` (scoped down), the interactive tabs/nav in D9/D6, the horizontal rail scroller.

**Global CSS additions (in `app/globals.css`):**
```
:root {
  --ease-signature: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-fast: 150ms;
  --dur-routine: 220ms;
  --dur-focal: 700ms;
  --dur-reveal: 800ms;
}
@media (prefers-reduced-motion: reduce) {
  :root {
    --dur-fast: 0ms;
    --dur-routine: 0ms;
    --dur-focal: 0ms;
    --dur-reveal: 0ms;
  }
}
```

**View Transitions:** enable via `document.startViewTransition()` wrapped around Next's client-side navigation. Nav shell (`Nav` + `Footer`) marked with `view-transition-name` so they stay put during the swap. Fallback: no-op on browsers that don't support it (Safari lagged historically; Chrome/Edge/Firefox ship it).

## 7. Per-page plan — where each motif lands

### `/` (home)
- **Focal moment:** motif #2 on Hero title ("GT Drive Pro" mask-reveal on load and on slide change) + motif #1 above the title
- BrandStatement: motif #3 on the atmosphere image (blur-clear on scroll-in)
- StoryChapters: motif #3 on the big Drive Pro image + motif #2 on the "GT — Drive Pro" giant headline
- ModelStoryRail: **add a scroll-progress bar under the rail** — 1px green line whose width tracks horizontal scroll position across 9 cards (subtle, informative, non-decorative)
- DealerBand: single `Reveal` on the content column, no motif
- IndiaFootprint: pin markers stagger-appear on first entry (60ms each, one shot)
- TaglineMarquee: motif #6
- ContactClose: single `Reveal`

### `/about`
- **Focal moment:** motif #2 on hero ("Engineered in Greater Noida.") + motif #1 above
- MissionStatement: mission + vision paragraphs use motif #4 sequenced (2 items, 90ms stagger)
- Foundation strengths grid: motif #4 (4 items)
- AboutFootprintBand: motif #4 on the 5 state rows
- AboutRangeStrip: 9 model tiles use motif #3 with a very subtle 0.5 → 1 opacity blur-clear, 40ms stagger, no lift
- AboutDealerInvite: single `Reveal`

### `/models`
- **Focal moment:** motif #1 above the "Nine electric scooters. The full range." headline + motif #2 on the headline
- Grid: motif #9 (card peek) on every card
- Coming Soon card gets a subtle green ring pulse *only on hover* to distinguish state

### `/models/[slug]`
- **Focal moment:** motif #3 on the hero scooter image (blur-clear + scale-settle)
- ModelTechnicalTabs: motif #4 on spec rows when switching tabs (indicator already moves; sequence the rows inside the newly-selected panel)
- ModelFeatureNavigator: motif #5 (cursor spotlight) on sticky nav + motif #3 on each chapter's gallery image
- RelatedModels: motif #9 on cards

### `/dealers`
- **Focal moment:** motif #2 on hero + motif #7 on the stats bar (9 · 5 · 5 counts up once, on first view)
- DealerPropositionBand: motif #4 on the 3 pillars
- DealerRangeShowcase: motif #4 (staggered blur-clear) on 9 model tiles
- DealerBenefits: motif #4 on the 5 support rows
- DealerJourney: motif #4 on the 4 steps + the giant step numbers scale from 0.9 → 1.0 on entry
- Contact form section: single `Reveal`

### `/locations`
- **Focal moment:** IndiaFootprint pin markers stagger-appear on first load (60ms each)
- Address list (when `showAllAddresses`): motif #4

### `/contact`
- **Focal moment:** motif #2 on "Two ways to reach GT Drive." + motif #1
- Contact channel cards: on hover, use `backdrop-filter: blur(4px) → blur(0)` transition on the neighbour cards to give depth to the focused one (not scale — that's the anti-pattern) — 220ms
- Form section: single `Reveal`

### Global (nav, footer, route transitions)
- Nav link hover: green underline slides in from left via `clip-path` (not opacity change) — 200ms
- Nav on scroll: translucent white background + `backdrop-filter: blur(12px)` fades in after 40px scroll; sharp white before that. Currently binary; make it smooth.
- Every `<Link>`: motif #8 view transition — 280ms cross-page fade + 8px slide-in

## 8. Verification checklist (per animate.md §"Verify")

- Focal motion is specific to the "Electric Pit-Lane Showroom" world — the scooter-reveal, charge-line, and pinned reveals all read as *engineered*, not decorative.
- Every supporting animation explains state, relationship, feedback, or continuity — none is pure entrance decoration.
- Interruption + repeated use behave correctly (mask-reveal doesn't re-fire on tab-switch; scooter-reveal is one-shot).
- Desktop, mobile, keyboard, touch — all paths work; no hover-only affordances.
- All expensive filters (blur, backdrop-filter) are bounded and off during scroll on low-end devices.
- Removing any motif would lose meaning or authored character. If it wouldn't, delete it.

## 9. Execution order (recommended)

Small, self-contained, ship-in-a-day-each:

1. **Global tokens** — add ease/duration CSS variables + reduced-motion overrides in `app/globals.css` (foundation for everything else).
2. **`ChargeLine` primitive** + wire under every page hero (motif #1). Small, high-visibility win.
3. **`MaskReveal` primitive** + wire the six page-hero headlines (motif #2). Biggest perceptual change.
4. **`ScooterReveal` primitive** + wire model detail hero + StoryChapters + gallery images (motif #3).
5. **`CountUp` primitive** + wire DealerOpportunityHero stats (motif #7).
6. **Sequenced panel slide** — extend `Reveal` with a `stagger` prop OR add `MotionList` wrapper; apply to spec rows, journey steps, footprint rows, benefits (motif #4).
7. **ModelStoryRail scroll-progress line** (small custom).
8. **IndiaFootprint pin stagger** (small edit).
9. **Marquee hover modulation** (one CSS line).
10. **Cursor spotlight on D9 + D6** (motif #5 — extends existing components).
11. **Nav scroll-blur + underline sweep** + **`ModelCard` peek** (motif #9).
12. **View Transitions** (motif #8) — last, because it's global and can break navigation flows if any assumption changes.

**Rough time budget:** items 1–5 give ~80% of the perceived improvement in roughly 2–3 focused work sessions. Items 6–12 are polish.

## 10. What I *didn't* propose (and why)

- **Cursor-following orbs / mouse trails.** Off-brand — GT Drive is engineered, not playful.
- **Confetti / bounce / elastic curves.** Craft-floor: "do not use bounce or elastic curves by reflex."
- **Full-page scroll-jacking / Locomotive Scroll.** Kills accessibility, kills touch, kills Windows trackpad. Native scroll only.
- **WebGL / Three.js hero background.** DESIGN.md forbids "generic green eco leaves as the main identity"; WebGL orbs would land in that neighbourhood. Also we already removed `three` from deps.
- **Framer Motion / Motion library.** Craft-floor: "Do not add a dependency for an effect the existing stack can express cleanly." Every motif above can be done with CSS + Web Animations API.
- **Scroll-driven parallax on the atmosphere image.** The image already has a distant rider — adding parallax would disturb the composition and violate the "one authored moment" rule.
- **Number counters on the About foundation strengths, plant map, or feature-set descriptions.** Craft-floor bans the "hero-metric template"; count-up is authorised in exactly one place — the dealer stats bar.
