<!-- SEED: established with the user before implementation; re-run $impeccable document once there's code to capture the actual tokens and components. -->

---
name: GT Drive
description: Premium electric scooter brand and dealership website
---

# Design System: GT Drive

## Overview

**Creative North Star: "The Electric Pit-Lane Showroom"**

GT Drive should feel like a premium EV launch environment: part electric mobility showroom, part performance pit lane, part dealership command center. The site is not a soft eco brochure and not an ecommerce storefront. It is a confident product-information and partner experience where scooters, dealership opportunity, and contact actions move through a bright white-and-green system with cinematic media and precise technical panels.

The world is built from GT Drive's brochure truth: bold italic logo, white showroom space, black product typography, green charge accents, urban mobility backdrops, and dealership trust signals. Motion should feel engineered and deliberate: pinned scooter reveals, charge-line progress, model transitions, product spec panels sliding into place, and video-first hero moments when owner assets arrive.

The approved homepage header and hero synthesize four client-supplied references: Astar for dealer-first action hierarchy, Toxmo for campaign-scale product visibility, Warivo for cinematic reveal discipline, and Yakuza for a compact automotive header and dominant scooter composition. Their dark themes, ecommerce controls, unverified badges, and unsupported claims are not transferable to GT Drive.

## Taste Direction

**Reading this as:** a premium EV product-information website for scooter buyers and motor dealers, with a bright automotive showroom language, logo-led white and green branding, GSAP scroll storytelling, and brochure-true product panels.

**Dials:** `DESIGN_VARIANCE=8`, `MOTION_INTENSITY=7`, `VISUAL_DENSITY=4`.

The homepage must feel authored, not assembled from stock sections. Avoid the default rhythm of centered hero, equal feature cards, repeated split sections, and generic glass panels. The page should feel like one continuous GT Drive showroom environment: a luminous white shell, soft technical-gray zoning, green charge traces, precise panels, and asymmetrical product staging.

### Component Adaptation Rules

- Use the responsive header component only as a navigation skeleton. Replace auth actions with `Request Information`, `WhatsApp`, and `Call`; keep the nav one line on desktop.
- Adapt the feature carousel into a bright product runway. Replace generic feature cards with white and pale-gray GT scooter model cards and brochure-confirmed detail links.
- Use the draggable vehicle carousel only for behavior inspiration. Remove rental, price, rating, favorite, and review UI.
- Use the contact form component only for form anatomy. Replace budget/timeline/services with buyer/dealer enquiry fields, visible phone, WhatsApp, and email.
- Use the GSAP hero component only for motion technique. Remove AI-platform copy, fake testimonials, blue glow, Inter/Playfair styling, and decorative avatar pills.

### Anti-Template Rules

- One page theme: bright white showroom with tonal variation. Use pale gray and restrained green surfaces to define sections; reserve black for text, controls, and rare high-contrast media moments.
- One accent: GT Charge Green. Use it as an energy line, active state, focus ring, and CTA color.
- No fake metrics, fake reviews, fake testimonials, fake prices, or invented technical specifications.
- No scroll cues, version labels, decorative status dots, numbered section eyebrows, or decorative text strips.
- No ecommerce language such as `Buy Now`, `Book Online`, cart, checkout, discount, or online payment.
- Product grids may be clean, but the homepage must include larger spatial moments: hero bay, pinned model runway, catalogue, dealership bay, locations, and contact command surface.

**Key Characteristics:**

- Premium EV showroom atmosphere, not a generic local dealer page.
- Showroom white and GT green dominate; black is a restrained supporting neutral used mainly for typography and controls.
- Large product media zones reserved for official scooter images and AI-generated video.
- Product details displayed as technical, scannable panels.
- Product information, dealer interest, and contact paths are visible without turning the site into direct online sales.

## Colors

The palette is brochure-derived: clean white space, sharp black typography, and GT green as the energy signal.

### Primary

- **GT Charge Green**: the main green sampled from the brochure logo and section bars. Use for primary actions, charge-line motion, icons, active states, and key section anchors.
- **Deep Charge Green**: the darker green support tone. Use for hover states, progress depth, and lower-contrast green surfaces.

### Neutral

- **Showroom White**: the dominant page and product-stage background.
- **Pit Black**: a restrained supporting neutral for high-contrast typography, compact controls, and rare cinematic media frames. Never use it as the dominant page background.
- **Technical Ink**: the default body and product-detail text tone.
- **Urban Mist Gray**: the light gray background used for city silhouettes, separators, quiet panels, and disabled media placeholders.

### Named Rules

**The Charge Line Rule.** Green should move like energy through the interface: lines, progress, active states, and decisive calls to action. Do not scatter green as random decoration.

**The Brochure Truth Rule.** Color may elevate the brand, but it must not imply missing product facts such as range, speed, battery capacity, pricing, or certification.

## Typography

**Display Font:** Barlow Condensed, used for compressed automotive headlines and model names.
**Body Font:** Manrope, used for navigation, body copy, controls, and forms.
**Label/Technical Font:** Manrope in compact uppercase weights.

**Character:** Type should pair an italic, fast, engineered display voice for launches and model names with a calm, highly readable body voice for specifications and forms. The display voice can feel automotive and aerodynamic; the body voice must be trustworthy and practical.

### Hierarchy

- **Display:** large, compressed or italic, used for first-viewport brand statements and model launch moments.
- **Headline:** strong sans-serif, used for page and section titles.
- **Title:** compact, technical, used for product specs, dealer benefits, and card headings.
- **Body:** readable and steady, used for product descriptions, company copy, addresses, and form help text.
- **Label:** small, uppercase or technical, used for specs, model codes, status tags, and navigation.

### Named Rules

**The Model Name Rule.** Product names should feel like vehicle launches, not catalogue labels. Model names get scale, spacing, and motion priority.

## Layout

The layout should alternate cinematic product stages with dense technical sections. The homepage opens as a full-width EV launch theatre with a dominant scooter/video zone, logo/navigation, short positioning, and clear product-information/contact actions. Below that, the page moves through product range, dealership opportunity, brand strengths, manufacturing footprint, and contact options.

Product pages use separate routes and model-specific content. Each product page should have a hero media stage, quick enquiry actions, verified specifications, feature list, colors, and related model navigation. The catalogue page can use shared components, but each product route must preserve its own data and status.

Responsive behavior should keep CTAs persistent and usable. On mobile, product media stacks above specs, call/WhatsApp actions remain easy to reach, and long feature lists become compact groups rather than tiny columns.

## Elevation & Depth

Depth should come from spatial staging, white-on-gray tonal bands, pinned media, precise borders, subtle shadows, and layered technical panels. Avoid heavy glassmorphism. The dominant feeling is a clean, sunlit product showroom; occasional dark media frames may be used only when a video or photograph needs contrast.

### Named Rules

**The Product First Rule.** Media and product truth lead. Decorative chrome must never outrank the scooter, the model name, or the verified information.

## Shapes

Use disciplined, modern geometry. Corners should stay tight and automotive, with small radii on controls and cards. Large pill shapes are allowed only for compact status tags or action chips where they clearly improve scanning. Section bands can use diagonal cuts and charge-line edges inspired by the brochure's green footer strips.

## Do's and Don'ts

### Do:

- **Do** make GT Drive visible in the first viewport through logo, tagline, and electric scooter positioning.
- **Do** reserve large hero and product media zones for official scooter images and AI-generated videos.
- **Do** keep product information, dealer enquiry, and contact paths visible throughout the site.
- **Do** show product specs and colors only where the brochure confirms them.
- **Do** give GT - CHETAK a Coming Soon treatment without borrowing specs from other models.
- **Do** use white and green as the dominant brand palette, supported by light gray and limited black typography.
- **Don't** let black or charcoal occupy large portions of the homepage or become the primary visual theme.

### Don't:

- **Don't** invent range, speed, battery capacity, price, warranty, certification, testimonials, awards, or dealer counts.
- **Don't** add ecommerce patterns such as cart, checkout, buy now, online payment, discounts, or direct-selling funnels.
- **Don't** use generic green eco leaves as the main identity. GT Drive should feel electric, premium, and engineered.
- **Don't** make the site a single generic landing page. It must be multi-page with separate product routes.
- **Don't** hide call, WhatsApp, email, or enquiry form actions behind only one CTA.
- **Don't** treat generated comps as literal final screenshots; they are north-star direction tests.
