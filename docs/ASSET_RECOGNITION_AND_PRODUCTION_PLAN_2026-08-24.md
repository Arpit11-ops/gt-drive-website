# GT Drive asset recognition and production plan

Date: 2026-08-24

## Executive recommendation

The site already has enough scooter cutouts for structure, but it lacks human, geographic, and operational proof. The next asset work should prioritize real owner-supplied photography and video of the current product, Greater Noida team/facility, dealer experience, service work, and the five brochure-listed locations.

AI imagery can safely carry atmosphere and pacing. It must not be used as evidence of a specific GT Drive scooter, plant, dealer, employee, customer, certification, or manufacturing process.

## What exists now

### Safe primary brand assets

- Brochure-extracted GT Drive logos and palette under `public/assets/gt-drive/brand/`.
- Brochure/owner scooter images under `public/assets/gt-drive/` and `public/assets/gt-drive/gallery/`.
- India state map under `public/assets/gt-drive/india-states-premium.svg`, with its existing Survey of India source link in the component.

### Temporary or illustrative assets

- `public/assets/gt-drive/generated/` contains AI-generated scooter scenes. These are temporary art-direction assets.
- `public/assets/gt-drive/gt-drive-hero-showroom-ai-v1.*` is an AI showroom concept.
- `public/assets/gt-drive/comps/` contains design comps, not production photography.

### Critical mismatch found

`public/assets/gt-drive/generated/hero-drive-pro.png` does not faithfully depict the brochure's GT Drive Pro. It changes the body design and carries `GT Ionic+` lettering. Do not present it as a GT Drive Pro product photograph. The same fidelity check should be completed for every file in `public/assets/gt-drive/generated/` before publication.

## New asset pack created in this session

Optimized website files:

- `public/assets/gt-drive/editorial/generated/greater-noida-regional-mobility-concept-v1.webp`
- `public/assets/gt-drive/editorial/generated/dealer-partnership-showroom-concept-v1.webp`
- `public/assets/gt-drive/editorial/generated/service-diagnostic-concept-v1.webp`

Generation masters are stored beside them as PNG files. All three are illustrative and are labeled in `public/assets/gt-drive/editorial/SOURCES.md`.

Authentic sourced location material:

- `public/assets/gt-drive/editorial/sourced/greater-noida-alpha-commercial-boulevard-2011.jpg`

This is a CC BY-SA 3.0 photograph of Greater Noida from 2011. It is useful as regional context or internal art direction, but it is not current facility evidence and must carry attribution.

## Exact page-to-asset map

| Priority | Page/section | Recommended asset | Source class | Notes |
| --- | --- | --- | --- | --- |
| P0 | Home hero | 8–12 second owner-shot film of the exact current hero scooter; side reveal, headlamp, wheel roll, clean road pass | Owner production | The current AI product render is not faithful enough for final use. |
| P0 | Model detail pages | Front, left/right three-quarter, side, rear, cockpit, seat/storage, wheel/brake, charging point, key/remote | Owner product shoot | Same lighting, focal length, crop, and background for all models. |
| P0 | About hero | Greater Noida exterior/team image or the new regional concept as a temporary mood asset | Owner first; generated fallback | Never call a generated or Commons scene the GT Drive factory. |
| P0 | Locations | One current exterior image and one interior/detail image per brochure-listed plant | Owner documentary | Record GPS/address and capture date with each file. Do not generate these. |
| P1 | Dealer hero/band | Real dealer principal/advisor interaction in an operating showroom | Owner/dealer shoot | New generated dealer scene is suitable only as temporary illustration. |
| P1 | Product, production, support | Battery/controller assembly detail, quality check, technician diagnostics, service counter | Owner documentary | New diagnostic concept can set lighting/composition direction. |
| P1 | Contact | Reception/service-support person answering an enquiry; phone/WhatsApp close detail | Owner shoot | Obtain model releases from recognizable people. |
| P2 | Brand transitions | Road texture, charging cable, reflective body panel, green light sweep, wheel shadow | Original macro/B-roll | These are safe for AI or controlled studio production because they make no factual facility claim. |
| P2 | Compare/models grid | Consistent transparent or neutral-background product views | Owner product shoot | Avoid mixing brochure crops, generated scooters, and unrelated environments. |

## Recommended video shot list

Produce one 20–30 second master film plus short web loops. Shoot 4K landscape with protected center framing so 16:9, 4:5, and 9:16 crops remain usable.

1. Hero loop: covered scooter silhouette, light sweep, reveal, rider departure.
2. Urban mobility: helmeted rider on a quiet Greater Noida road at sunrise; one wide, one tracking, one wheel close-up.
3. Product details: headlamp, display, key/remote, charging point, wheel/brake, seat/storage, rear light.
4. Engineering/service: diagnostic check, tool detail, quality inspection, controlled battery/controller close-up.
5. Dealer story: shutter opening, showroom floor, advisor conversation, service desk, product handover without staged testimonials.
6. Location proof: exterior sign/address marker, wide establishing shot, entrance, floor activity, safety signage.

Web delivery targets:

- Hero loop: MP4 H.264 and WebM, 1920×1080, 6–10 seconds, silent, ideally under 5 MB.
- Mobile loop: 1080×1350 or 1080×1920 crop, under 4 MB.
- Poster frame: WebP, 1920×1080, under 300 KB where visual quality permits.
- Always include `poster`, muted autoplay, loop, `playsInline`, and a reduced-motion still fallback.

## Owner asset request checklist

Request the following before final asset integration:

- Original camera files or highest-resolution exports; no WhatsApp-compressed copies.
- Written confirmation of the current public brand name and permission to use historic GT Force imagery, if any.
- Exact model name matched to each scooter folder and color.
- Current facility/dealer address, capture date, and photographer/rights owner for every location image.
- Consent/model releases for recognizable staff, customers, and dealers.
- Permission to show signage, manufacturing steps, battery internals, tools, serial numbers, and license plates.
- Existing reels, launch videos, showroom openings, factory footage, CAD/render files, and product manuals.

Suggested naming pattern:

`gt-drive_<model-or-location>_<view-or-action>_<yyyy-mm-dd>_<sequence>.<ext>`

Example: `gt-drive_gt-drive-pro_front-3q_2026-08-24_01.jpg`.

## Online research findings and usage boundary

- Public search still strongly associates Houstan Innovations LLP with the earlier GT Force name. Old GT Force visuals should not be mixed into the new GT Drive site without owner confirmation.
- A 2024 Agra dealership launch article contains useful showroom reference photography, but the press image is not cleared for website reuse. Treat it as a production reference only.
- Public image search provides Greater Noida roads and city context through Wikimedia Commons and Unsplash. Use only files whose individual license and attribution are recorded.
- Generic news photographs of Indian scooter traffic are copyrighted editorial material. Do not download them into production assets merely because they appear in image search.

Reference links:

- Greater Noida roads category: https://commons.wikimedia.org/wiki/Category:Roads_in_Noida
- Greater Noida category: https://commons.wikimedia.org/wiki/Category:Greater_Noida
- Greater Noida free-photo search: https://unsplash.com/s/photos/greater-noida
- Agra dealership reference: https://emobilityplus.com/2024/08/22/gt-force-expands-electric-two-wheeler-network-with-grand-opening-of-premium-dealership-in-agra/
- Generic free industrial scooter reference: https://www.pexels.com/photo/scooter-parked-under-the-factory-building-17076777/

## Generated prompt record

The three generated concepts used the built-in OpenAI image generation tool. Prompts specified photorealistic editorial treatment, Indian/Greater Noida context, no logos or text, safe helmet use, and explicit constraints preventing the scenes from being represented as real GT Drive facilities or dealerships.

The prompts are preserved in the generation session and summarized in `public/assets/gt-drive/editorial/SOURCES.md`; the images must remain labeled as illustrative in any CMS or asset library.
