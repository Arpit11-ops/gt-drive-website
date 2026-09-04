# Handoff — GT Drive client meeting session

**Purpose of the next session:** the user (Arpit, `pcsaini@gmail.com`) is going into a meeting with the GT Drive client (Houstan Innovations LLP). They will read out each change the client is requesting. Your job in that session is:

1. **Take notes** — capture every request the user relays, verbatim where possible, and turn it into a numbered change list as the meeting progresses.
2. **After the meeting** — help apply the changes to the codebase and ship them.

This session is Windows / PowerShell / Git Bash, Next.js app deployed to GitHub Pages at https://arpit11-ops.github.io/gt-drive-website/. Working dir: `C:\NITRO 4 BACKUP\coding projects\sccoty webstie`.

---

## Meeting protocol — how to be a good note-taker

- Open a running list in your reply as the user relays each item. Format each entry as:
  ```
  N. [PAGE / COMPONENT] — <what the client wants>
     Notes: <any qualifiers the user adds>
     Action: <the concrete code change, once known>
  ```
- Don't push back or ask design questions during the meeting — the user is in a live call. Just capture. Ask clarifying questions ONLY if the user pauses to ask you.
- When the user says "meeting over" or similar, do a recap of the numbered list and ask which items to start with.
- **Do not start editing files during the meeting** unless the user explicitly says "make this change now."

---

## State of the repo (2026-09-03)

**Branch:** `master` — clean, all recent work pushed.
**Deploy:** GitHub Pages auto-deploys from `master`. Live URL above.
**Recent commits:**
- `fcda73f` Shrink Drive Clean · Go Green marquee on mobile
- `0a6c49d` Replace internal "brochure"/"listed" copy with product-first language
- `9048bc6` Un-track GT_DRIVE_COMPONENT_SHORTLIST.html
- `5d0bdfd` Fix broken images on GitHub Pages basePath
- `5532665` Wire GitHub Pages deploy

## Routes

- `/` — home ([app/page.tsx](app/page.tsx))
- `/about` — About Houstan Innovations LLP ([app/about/page.tsx](app/about/page.tsx))
- `/models` — model index ([app/models/page.tsx](app/models/page.tsx))
- `/models/[slug]` — one page per scooter; 9 slugs, list below
- `/dealers` — dealership programme ([app/dealers/page.tsx](app/dealers/page.tsx))
- `/locations` — 5 plant addresses + India map ([app/locations/page.tsx](app/locations/page.tsx))
- `/contact` — contact channels + form ([app/contact/page.tsx](app/contact/page.tsx))

## The 9 scooters (from [lib/models.ts](lib/models.ts))

| Slug | Name | Code | Status |
|---|---|---|---|
| `gt-soul` | GT Soul | SL | live |
| `gt-soul-nxt` | GT Soul NXT | DL | live |
| `gt-ryd` | GT RYD | CS | live |
| `gt-ryd-plus` | GT RYD Plus | FH | live |
| `gt-one-plus` | GT One Plus | — (BMW, unpublished) | live |
| `gt-champion` | GT Champion | CJ | live |
| `gt-flying` | GT Flying | E4 | live |
| `gt-drive-pro` | GT Drive Pro | — | flagship |
| `gt-chetak` | GT Chetak | — | coming-soon |

All content: `lib/models.ts` (specs, colours, features, lead copy, image path).

## Key data files

- **[lib/models.ts](lib/models.ts)** — models, locations, contact info
- **[GT_DRIVE_BROCHURE_CONTENT.md](GT_DRIVE_BROCHURE_CONTENT.md)** — the full brochure extraction (the source of truth for what the site was built from). Read this if the client references "the brochure says X" — the extraction includes an owner-request checklist at the bottom (line 595+) for specs never in the brochure (price, range, top speed, warranty, dimensions, etc.).

## Known issues from today's mobile audit (may or may not come up in the meeting)

Full inventory in scrollback, but the big ones:

1. **Reveal/MaskReveal animations don't fire on mobile** → most hero headlines are invisible on load across home, /about, /models, /models/[slug], /dealers, /contact. Single fix, huge visual return.
2. **Sticky nav header clips content underneath** on scroll — headlines like "Plants across…", "Pro." (GT Drive Pro), "SET" (Featureset) get cut off.
3. **Home hero body copy overlaps scooter image** with no contrast layer — unreadable.
4. **/dealers hero** is nearly all faded (stats show "0 / 0 / 0" — counter never runs).
5. **/models grid** — GT One Plus and one other card have completely blank images.
6. **/models/[slug] hero image** — blank on load; later sections show unresolved blur placeholders.
7. **ModelTechnicalTabs** — 4th tab (Colours) cut off; tab title overflows horizontally.
8. **Home model rail** — model name hidden behind "View model" pill on mobile.
9. **India map** — state labels ~8px, unreadable on mobile.
10. **/contact hero** — headline invisible, body text near-invisible.

If the client asks about mobile, this is the punch list to reference. Root causes clustered around: (a) Reveal component not detecting in-view on mobile viewport, (b) sticky nav has no scroll-margin-top compensation, (c) hero image layouts don't stack for mobile, (d) some Next `<Image>` entries broken under GitHub Pages basePath.

## Brochure content NOT yet on site (from today's gap analysis)

- Company positioning line: "driven by innovation, sustainability, and a vision for a cleaner tomorrow"
- Mission statement (Vision is on About; Mission isn't)
- 2 of 4 brand pillars missing from About: "Advanced manufacturing" and "Reliable service support"
- GT Champion tagline "New Vibrant Colors" — brochure prints it, unused
- GT Flying tagline "Dynamic Sporty Looks" — brochure prints it, unused
- Social icons for Facebook / YouTube / LinkedIn / Instagram (only WhatsApp is exposed today)
- Canonical domain `gtdrivepro.com` — site is on GH Pages URL until DNS is pointed

## Owner-supplied assets pending

Per user memory: real owner photography (scooter cutouts, dealer floors, plant exteriors) was expected around 2026-08-25 as a ZIP. If assets have landed, they go to `public/assets/gt-drive/` and swap in place — filenames match the ones already referenced in `lib/models.ts`. If the client mentions "we sent photos," check if that ZIP arrived and needs importing.

## Working style reminders (from user memory)

- On design pushback, commit to a genuinely different composition — don't polish the same layout.
- Cite the exact craft-floor rule violated when refusing a design direction.
- The user prefers concise responses. Skip preamble; state results.
- Don't create documentation files unless asked. This handoff IS the exception the user asked for.

## First moves in the new session

1. Read this file.
2. Skim [lib/models.ts](lib/models.ts) and [GT_DRIVE_BROCHURE_CONTENT.md](GT_DRIVE_BROCHURE_CONTENT.md) header sections to warm up context.
3. `git status` and `git log --oneline -5` to confirm you're on the expected commit.
4. Tell the user you're ready to take notes and ask when the meeting starts.

That's it. Good luck.
