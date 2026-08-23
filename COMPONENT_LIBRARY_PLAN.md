# GT Drive Component Library Plan

This shortlist maps real component-library entries to the GT Drive website. Library components are starting structures, not copy-paste design decisions. Every selected component must be converted to the white-led GT Drive system, use brochure-verified content, and remove ecommerce or invented social-proof patterns.

## Selected Components

| Priority | GT Drive component | Library reference | Where used | Adaptation required |
| --- | --- | --- | --- | --- |
| Use | `SiteHeader` | Aura `#635` - Responsive Header with Logo, Nav & Action Buttons | All pages | Replace sample branding and actions with the GT Drive logo, Models, Product Information, For Dealers, About, Plant Locations, Contact, and Request Information. Add an accessible mobile drawer and restrained sticky-state animation. |
| Use | `ModelRunway` | Aura `#700` - Draggable Car Rental Card Carousel with Video Preview | Homepage and related-model sections | Keep drag, keyboard navigation, snap behavior, and optional video preview. Remove rental price, ratings, reviews, heart/favorite controls, and ecommerce language. Restyle as a bright white scooter runway with GT green active states. |
| Use | `ProductCatalogue` | Aura `#676` - Animated Product Gallery Section with Headline | Homepage and `/models` | Keep the responsive image-grid and entrance behavior. Replace the dark styling and decorative symbols with white surfaces, precise borders, model names, product-detail links, and a Coming Soon state for GT Chetak where required by brochure truth. |
| Use | `ProductMediaGallery` | Aura `#1080` - Product Gallery & Details Section with Variant Selector | Individual model pages | Keep the main media area, thumbnails, and accessible selection behavior. Remove price, quantity, size, cart, checkout, and purchase actions. Use the right column for model introduction, verified facts, available colors, Request Information, WhatsApp, and Call. |
| Use | `TrustFeatureRail` | Aura `#2281` - Feature Card Grid | Homepage, About, dealer page | Flatten the generic card grid into a compact trust rail for brochure-confirmed strengths. Replace blue icons and Inter styling with GT green line icons, lighter borders, and the project type system. Do not invent metrics. |
| Use | `InquirySection` | Aura `#684` - Responsive Contact & Inquiry Form Section | Homepage, Contact, dealer page, product pages | Keep the responsive form anatomy and validation structure. Remove booking, budget, timeline, availability badge, and agency copy. Add buyer/dealer enquiry type, model interest, name, phone, email, city, message, consent, visible WhatsApp, Call, and email actions. Submission remains a placeholder until integration is supplied. |
| Adapt | `PlantLocations` | LandingHero `#3761` - Global Reach Section with Location Card and Animated Map Illustration | Homepage and Plant Locations page | Use the map-and-location relationship, but make it India-specific and brochure-verified. Use exactly Uttar Pradesh, Bihar, Maharashtra, Madhya Pradesh, and Telangana unless newer owner material changes the list. Avoid implying exact plant addresses where none are supplied. |
| Use | `SiteFooter` | Aura `#2089` - Two-Column Footer with Navigation and Legal Links | All pages | Expand to GT Drive logo, page navigation, model links, company links, and contact details. Remove pricing and newsletter patterns. Keep the footer white with light-gray dividers and green accents. |
| Inspiration only | `HeroMotionSystem` | Aura `#2270` - Animated AI Visuals Hero Landing Section | Homepage hero and section transitions | Borrow only the GSAP reveal sequencing and layered motion approach. Do not copy the dark shell, AI copy, blue glow, testimonials, avatar pills, mouse listener, fonts, or decorative effects. The GT hero remains bright and product-led. |
| Maybe | `EngineeringFeaturePanel` | Aura `#942` - Precision Engineering WebGL Feature Section | Model pages or About | Consider its interactive focus treatment only after official close-up assets arrive. Convert to a light theme and avoid expensive WebGL unless it materially improves the product story. No cursor-following effect on touch devices or reduced-motion mode. |

## GT Drive Components To Build Custom

These do not have a library match that is accurate enough to use directly.

| Component | Purpose | Pages |
| --- | --- | --- |
| `VideoHeroBay` | Full-width scooter or AI-video stage with fallback image, brand statement, Explore Models, and Request Information. | Homepage |
| `ChargeLine` | Restrained green motion line connecting sections and indicating active states. | Homepage and product pages |
| `ModelCard` | Consistent scooter card with image, model name, status, and View Details action only. | Homepage, models, related models |
| `ModelFilterBar` | Compact model/category filtering without ecommerce sorting or price controls. | Models |
| `ProductFactGrid` | Brochure-verified specifications with explicit handling for unavailable facts. | Product pages |
| `ColorSwatches` | Visual model-color selector using verified colors and accessible labels. | Product pages |
| `ProductActionGroup` | Request Information, WhatsApp, Call, and visible email actions. | Product and contact pages |
| `ComingSoonPanel` | Honest state for products lacking full verified details. | Relevant product pages |
| `DealerOpportunityBand` | Dealer proposition, qualifying copy, and dealer-enquiry action. | Homepage and For Dealers |
| `ContactActionBar` | Persistent mobile call and WhatsApp controls without obscuring content. | All mobile pages |
| `VideoPlaceholder` | Stable media frame for future AI videos, with poster image and accessible controls. | Homepage and product pages |
| `Breadcrumbs` | Route context for model and information pages. | Inner pages |

## Component Rules

- White is the primary canvas; GT green is the only brand accent. Black is limited to typography, controls, and rare media contrast.
- Use library interaction logic selectively, then rebuild visual styling in the GT Drive design system.
- No price, cart, checkout, Buy Now, rental, favorite, rating, review, testimonial, or fake metric UI.
- Product information comes from `GT_DRIVE_BROCHURE_CONTENT.md` and verified owner assets only.
- Every animated component must support keyboard access, touch input, `prefers-reduced-motion`, and cleanup on route changes.
- Use real logo and scooter assets. Keep media containers stable so future ZIP assets and AI videos can replace placeholders without layout changes.
- Do not nest cards inside cards or turn every section into a bordered box.

## Implementation Order

1. Foundation: tokens, typography, `SiteHeader`, `SiteFooter`, buttons, form fields, and layout primitives.
2. Homepage: `VideoHeroBay`, `TrustFeatureRail`, `ModelRunway`, `ProductCatalogue`, dealer band, locations, and inquiry section.
3. Models: catalogue page, `ModelCard`, filtering, breadcrumbs, and related-model navigation.
4. Product pages: `ProductMediaGallery`, `ProductFactGrid`, `ColorSwatches`, action group, and Coming Soon handling.
5. Information pages: For Dealers, About, Plant Locations, and Contact.
6. Motion and polish: GSAP sequencing, route transitions, reduced-motion behavior, responsive verification, and video integration points.

## Implemented Trace

The current build maps library references to concrete source files:

| Library reference | Implemented component | Evidence in the build |
| --- | --- | --- |
| Aura `#635` | `components/Header.tsx` | Compact logo/nav/action composition, direct Call and WhatsApp controls, sticky responsive shell, and Escape-aware mobile menu adapted to GT Drive routes. |
| Aura `#700` | `components/ModelRunway.tsx` | Pointer-capture dragging, horizontal scroll, navigation controls, active item tracking, center-proximity scaling, and snap behavior. Rental, pricing, rating, and favorite controls are removed. |
| Aura `#676` | `components/ProductCard.tsx` and homepage catalogue | Responsive animated product gallery translated into brochure-backed model cards and a compact five-column catalogue. |
| Aura `#1080` | `components/ProductMediaGallery.tsx` | Selectable main product media, thumbnail controls, active view state, and responsive gallery/detail composition. Ecommerce controls are removed. |
| Aura `#2281` | Homepage strength rail and About support grid | Feature-grid structure flattened into brochure-confirmed GT Drive strengths without fake metrics. |
| Aura `#684` | `components/InquiryForm.tsx` | Responsive form fields, enquiry/model selectors, validation, consent, and submission state adapted to buyers and dealers. |
| LandingHero `#3761` | Homepage location preview and `app/locations/page.tsx` | India-specific location relationship using only the five brochure-listed states and verified addresses. |
| Aura `#2089` | `components/Footer.tsx` | Shared brand, navigation, model, company, and direct-contact footer composition. |
| Aura `#2270` | `components/ShowroomHero.tsx` and `components/Reveal.tsx` | GSAP entrance sequencing translated into a bright, AI-rendered automotive campaign banner with reduced-motion handling, a high-priority WebP hero image, and no nonfunctional media control. |

Visual build reference: `assets/gt-drive/comps/homepage-full-comp-06-light-build-reference.png`.
