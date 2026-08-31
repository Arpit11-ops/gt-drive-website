# GT Drive — Site-wide Content Plan

Date: 2026-08-30
Author: Claude, in-session
Source of truth: `GT_DRIVE_BROCHURE_CONTENT.md`
Voice guardrails: `PRODUCT.md`, `DESIGN.md`
Skills applied: copywriting, humanizer, impeccable (craft-floor)

## 1. Guiding principles

**Brochure truth first.** Every claim traces to a line in `GT_DRIVE_BROCHURE_CONTENT.md` or `lib/models.ts`. No invented figures, no fabricated testimonials, no dealer counts, no unverified specs. Where the brochure is silent, either omit the line or use an honest placeholder ("To be confirmed", "Coming soon", "Colour may vary depending on availability").

**Human voice, not AI cadence.** Short sentences next to longer ones. Contractions where they fit ("we can't promise a fixed timeline until we've met" — already used, more of that). Cut hollow openers ("In today's…", "It's worth noting…"). No hedge-mush ("one might argue"). Verbs do work.

**Confident, not salesy.** GT Drive is Indian, patient, engineered. It doesn't need exclamation marks, urgency, or ecommerce language. No "Order Now", "Buy", "Limited time", "Book online". Use "Request information", "Enquire", "See", "Explore".

**Two audiences on every page.** Buyers and dealers. Neither should feel like an afterthought — even on `/about`, one line should nod to dealers; even on `/dealers`, one line should acknowledge the rider we build for.

**One accent, one truth.** Green highlights the decisive verb or noun in a headline, not decoration. Black is for reading. If a green span doesn't earn it, remove the colour.

## 2. Global copy patterns to change

| Pattern in the site now | Fix |
|---|---|
| Headline decoration that colours a filler word ("with `product, plant, and programme` already in place") | Colour the actual claim — the noun the reader is meant to remember |
| Repeated phrase "brochure-listed" / "brochure-verified" as a copy tic | Keep it once per page maximum, as a trust signal — not in every section |
| "Nine confirmed models. One truth." (ModelStoryRail) | Replace — "One truth" reads like an AI slogan, not a product line |
| "Purpose-built for today. Prepared for tomorrow." (Drive Pro lead) | Replace — generic tech-brand cadence, not GT Drive voice |
| "Confident lines and a versatile color range for daily city rides." (RYD lead) | Replace — three vague adjectives in a row, no specific claim |
| "Dynamic sporty looks for an energetic road presence." (Flying lead) | Replace — adjective stack, no reader payoff |
| "A brand from Houstan Innovations LLP" and similar mini-eyebrows still in place elsewhere | Absorb into the sentence or remove — one page kicker maximum |
| "Grow with an Indian EV brand." (DealerBand) | Passable but could carry more specificity — say what growing with GT Drive actually looks like |
| "Let's move forward." (ContactChannelsHero) | Generic. Rewrite around the two audiences (buyer / dealer) |

## 3. Page-by-page plan

### 3.1 Home — `/`

**Current flow:** Hero → BrandStatement → StoryChapters → ModelStoryRail → DealerBand → IndiaFootprint → TaglineMarquee → ContactClose

#### Hero
- **Current:** slide title + short subtitle + "View {model}" + "Request information". Subtitles pulled from `lib/models.ts` leads.
- **Change:** the subtitle should not be the same line as `/models/[slug]` uses. Give the Hero a *positioning* line, not a product line. Example:
  - GT Drive Pro slide: "The flagship Drive Pro. Indian roads, Indian scale, GT engineering."
  - GT Flying slide: "The Flying. Sporty stance, brochure-listed features, five colour options."
  - GT Champion slide: "The Champion. Extra-long wheelbase, five colours, made for the city."
- **Reason:** the Hero is positioning, not the product page's opening sentence. Distinct role, distinct voice.

#### BrandStatement (just wired)
- **Current:** "Nine models. Five states. One India." + Houstan paragraph + atmosphere image
- **Keep the headline.** It works — three specifics, one green closer that earns the colour.
- **Tighten the paragraph:** "Headquartered in Greater Noida, Houstan Innovations LLP builds the GT Drive electric two-wheeler range with in-house lithium battery capability and manufacturing across five Indian states."

#### StoryChapters
- **Current:** two chapters — GT Drive Pro spotlight + "Shared features across the range"
- **Fix the second chapter's headline.** Right now it's "Shared features" — thin. Rewrite:
  - Eyebrow removed (already done in slop pass).
  - Chapter 2 headline: "One catalogue, one feature set." with body: "Every GT Drive scooter ships with the same core: long battery life, hydraulic suspension, LED projector head lamp, regenerative braking, and remote lock. What changes between models is scale, stance, and colour."
- **Reason:** actually says something specific about the range.

#### ModelStoryRail
- **Current headline:** "Nine confirmed models. One truth."
- **Change:** "Nine electric scooters. Every one from the brochure." (or shorter: "The full range.")
- **Body:** keep — it's specific.
- **Card status line:** "Model {code}" for models with codes, "Coming soon" for Chetak, "GT Drive range" for models without. This is fine — keep.

#### DealerBand
- **Current headline:** "Grow with an Indian EV brand."
- **Change:** "Grow a GT Drive showroom, in your city." — names the action, names the outcome, names the geography.
- **Body:** already good ("Partner with GT Drive and be part of India's growing electric mobility revolution. The brochure identifies five areas of support for prospective dealer partners.") — leave.

#### IndiaFootprint
- **Current headline:** "Plants across five Indian states."
- **Keep.** Specific, brochure-true, well-shaped.
- **Active-location card copy:** address only, no invented detail. Keep as-is.

#### TaglineMarquee
- "Drive Clean · Go Green" — this is the confirmed brand tagline. Do not touch.

#### ContactClose
- **Current headline:** "Get in touch."
- **Change:** "Talk to GT Drive." — verb-first, brand-anchored, warmer than the generic "Get in touch."
- **Body:** "Product questions or dealership enquiries — call, WhatsApp, email, or send us a note below."

---

### 3.2 About — `/about`

**Current flow:** AboutImageHero → MissionStatement → foundation → AboutFootprintBand → AboutRangeStrip → AboutDealerInvite → TaglineMarquee → ContactClose

Recent restructure is solid. Copy adjustments:

#### AboutImageHero
- **Current headline:** "Driving a cleaner tomorrow."
- **Change:** "An Indian EV brand, engineered in Greater Noida." — trades a tagline-ish phrase for a claim the brochure supports.
- **Body under headline:** already brochure-accurate. Leave.

#### MissionStatement (Mission + Vision)
- Mission: "Our mission is to make electric mobility more accessible with **reliable products, strong technology, and dependable support.**" — keep.
- Vision: "Our vision is to build a trusted Indian EV brand with the **product, manufacturing, and dealership ecosystem** to make adoption simpler across India." — keep. The parallel structure is deliberate.

#### Foundation (four strengths)
- Copy already tightened last pass. Verify each still reads specifically:
  - In-house lithium battery ✓
  - Advanced manufacturing ✓
  - Wide dealer network ✓
  - Reliable service support ✓
- One micro-fix: "Wide dealer network" body currently says "A growing pan-India dealer network built to shorten the distance between GT Drive and every rider." Replace with: "A growing pan-India dealer network — the ground-level bridge between GT Drive and every rider."

#### AboutFootprintBand
- Headline "Five states. / One India-wide base." — keep.
- Body — keep.

#### AboutRangeStrip
- Headline "Nine electric scooters. One catalogue." — keep.
- Body — keep.

#### AboutDealerInvite
- Headline "Build the electric two-wheeler business, together." — keep, this is the strongest inviter line on the site.
- Body — keep.

---

### 3.3 Models catalogue — `/models`

#### Page hero
- **Current headline:** "Nine confirmed models. One truth."
- **Change:** "The full range."
- **Lead:** already specific ("Every scooter here is drawn from the GT Drive brochure — full specifications, brochure-verified features, real colours, and honest Coming Soon flags where the brochure hasn't published yet.") — keep, but delete "honest" (implies the opposite exists).

---

### 3.4 Model detail — `/models/[slug]`

#### Model leads (from `lib/models.ts`)
These are the most-read copy blocks on the site. Every single detail page opens on one. Currently a mix of decent and generic. Rewrite:

| Model | Current lead | Recommended lead |
|---|---|---|
| GT Soul | "A clean, composed electric scooter for everyday movement." | "The everyday Soul. Three colours, one dependable ride." |
| GT Soul NXT | "The Soul line, shaped for a sharper urban presence." | "The Soul NXT. Same Soul foundation, sharper city stance." |
| GT RYD | "Confident lines and a versatile color range for daily city rides." | "The RYD. Six colours across the widest palette in the range." |
| GT RYD Plus | "A distinctive evolution of the RYD family with a planted stance." | "The RYD Plus. Five colours, planted stance, everyday range." |
| GT One Plus | "A focused electric scooter with a compact, contemporary profile." | "The One Plus. Compact, contemporary, three-colour lineup." |
| GT Champion | "Extra long wheelbase. New vibrant colors." | "The Champion. Extra-long wheelbase, five colour options." (already close — just make it a sentence.) |
| GT Flying | "Dynamic sporty looks for an energetic road presence." | "The Flying. Five bold two-tone finishes and a sporty stance." |
| GT Drive Pro | "Purpose-built for today. Prepared for tomorrow." | "The flagship Drive Pro. The full GT Drive brochure feature set in one machine." |
| GT Chetak | "A forthcoming addition to the GT Drive range." | "The Chetak. Next on the road — full details when the brochure updates." |

**Reason:** each rewrite names the model, names one specific fact from the brochure (colour count, position in range, wheelbase), and stops. No adjective stacks.

#### ModelTechnicalTabs
- Tab labels: Tyres, Braking, Electrical, Colours — keep.
- Empty-value text: "To be confirmed" — keep (already brochure-honest).

#### ModelFeatureNavigator
- Chapter labels: Smart ride, Road confidence, Electric performance, Clean mobility — keep. These map to the brochure's shared feature set.
- Chapter titles ("Everyday control, kept close.", etc.) — currently good, no change.

#### RelatedModels
- Whatever label the section has now — keep. It's a nav pattern, not a claim.

---

### 3.5 Dealers — `/dealers`

Recent restructure. Copy adjustments:

#### DealerOpportunityHero
- **Current:** "Grow with an Indian EV brand." + "Partner with GT Drive and become part of India's growing electric mobility network."
- **Change headline to:** "Open a GT Drive showroom." — imperative, specific, dealer-facing.
- **Body:** keep.

#### DealerPropositionBand
- Headline "An Indian EV brand with product, plant, and programme already in place." — keep, works.
- Three pillars — keep.

#### DealerRangeShowcase
- Headline "What your showroom carries." — keep.
- Body — keep.

#### DealerBenefits
- Headline "Five support areas, from first day forward." — keep.
- Body — keep.

#### DealerJourney
- Headline "From enquiry to opening, in four honest steps." — remove "honest". Change to: "From enquiry to opening, in four steps."
- Body "We can't promise a fixed timeline until we've met. What we can describe is the shape of the conversation." — keep, this is the best line on the page.
- Step titles — keep.

#### DealerPartnership form
- Headline "Tell us where you want to grow." — keep.
- Form field labels — keep.
- Post-submit message: "Thanks. Form delivery will be connected before launch. Please call or email GT Drive for an immediate response." — keep but shorten: "Thanks — form delivery isn't wired yet. Call or email us for an immediate response."

---

### 3.6 Locations — `/locations`

- Page hero: currently uses PageHero component. Suggested heading: "Where GT Drive is built." (verb-first, specific).
- Body: "Five plant states, as printed in the GT Drive brochure. Manufacturing across Uttar Pradesh, Bihar, Maharashtra, Madhya Pradesh, and Telangana."
- IndiaFootprint section carries the addresses. Keep the footer disclaimer "Addresses shown as printed in the GT Drive brochure." — this is the exact right tone.
- Address confirmation: verify with owner whether "Hydrabad" → "Hyderabad" (open item in the brochure). Currently already normalized in `lib/models.ts` — cross-check.

---

### 3.7 Contact — `/contact`

#### ContactChannelsHero
- **Current headline:** "Let's move forward." — generic.
- **Change:** "Two ways to reach GT Drive." with a subhead that names the audiences: "For product questions and dealership enquiries — whichever you're here for, pick a channel and we'll answer."
- **Cards:**
  - **WhatsApp card** body: "Fastest for product questions. Message us and we'll pick it up on the primary line." (Was: "Start a direct conversation with GT Drive for product and general enquiries.")
  - **Call card** body: "Prefer to talk? Reach the GT Drive team on the brochure-listed primary line." (was: "Speak directly with the team on the brochure-listed primary contact number.")
  - **Email card**: keep — it's a plain-text card.
  - **Dealership card** body: "Tell us where you want to open a GT Drive showroom." (was: "Tell us where you want to build the next GT Drive partnership.")

---

## 4. Copy discipline reference — quick rules for future edits

1. **Every headline earns its verb.** If you can strip the verb and the headline still makes sense, the verb is decorative. Rewrite.
2. **Every green span earns the colour.** Green highlights the specific claim (a model name, a state count, a decisive verb) — not a filler noun.
3. **Every adjective earns its place.** Three adjectives in a row is one adjective too many. Cut to one, or replace all three with a specific fact.
4. **No "we invite you to", "designed to", "solutions", "empowering", "leverage", "unlock", "seamless".** These are AI-cadence signals across the site.
5. **Contractions are allowed** in body copy where the register is talking-to-you (Journey, form messages, ContactClose). Not in display headlines.
6. **If the brochure doesn't have it, don't write it.** Range numbers, prices, warranty terms, delivery windows, dealer counts, testimonials — silence is stronger than fabrication.

---

## 5. Suggested execution order

1. **Model detail leads** (`lib/models.ts`) — highest-read copy, ships across 9 pages. Fastest ROI.
2. **Hero slide subtitles** (`components/Hero.tsx`) — homepage first impression.
3. **ModelStoryRail headline** — swap "One truth" phrase.
4. **StoryChapters second chapter** — replace generic "Shared features" with the specific "one feature set" rewrite.
5. **DealerBand + DealerOpportunityHero headlines** — dealer story clarity.
6. **ContactChannelsHero + ContactClose** — contact voice.
7. **AboutImageHero headline** — anchoring line for /about.
8. **Foundation strengths body copy** — small polish.
9. **Locations PageHero + DealerJourney "honest" delete** — last touches.
10. **Post-owner-confirmation:** address spelling, model code `BMW`, "Variable / Multiple Drive Modes" reconciliation.
