# Changes Log

Three passes: overnight research (2026-05-23), offer correction (2026-05-24), competitor research (2026-05-24).

---

## What competitor research changed

### Hero subhead sharpened with programme-value qualifier

**Old:** "For expert businesses doing GBP 30k+/month who've already tried paid ads and hit a ceiling."

**New:** "For expert businesses doing GBP 30k+/month with GBP 3k+ programmes, already running ads and hitting a ceiling."

**Why:** HighTicketPaidAds.com qualifies with "$3K+ offer via sales calls, doing $25K+/month, currently running Meta ads at $200/day or more." That's tighter than JGL's subhead was. Adding "GBP 3k+ programmes" echoes the Fit check criteria and filters out low-ticket sellers in the hero itself, before they scroll.

### Pricing context added

**Old:** "Ad spend is separate and billed directly by the platforms to your account - I never mark up media costs."

**New:** Added "Most agencies in this space charge GBP 10-25k/month and make you guess what they're actually doing. This is the full service at a fraction of that, with nothing hidden."

**Why:** Be Known publishes pricing at $3,500/month and explicitly compares against competitors at "$15K to 25K per month." The competitive framing makes their price feel like a deal rather than an expense. JGL at GBP 5,000 is well below the GBP 10-25K range for comparable agencies. Making this explicit turns the price into a positioning statement.

### What competitor research validated (no changes needed)

- **Transparency stack is genuinely unique.** No competitor examined offers anything close to JGL's specific commitments (Friday Loom, 4-hour WhatsApp replies, live dashboard, two fire calls/month). This is the strongest differentiator on the page. No changes needed - if anything, it deserves more emphasis.
- **Published pricing is rare.** Only 1 of 6 competitors publishes a specific price (Be Known at $3,500). JGL publishing GBP 5,000 is already differentiated. Validated.
- **Founding slot mechanic is unique.** No competitor does anything similar. Validated.
- **"What you handle" scope boundaries are rare.** Only Marne Semick does something similar ("Funnels are not part of the ads campaign fulfillment service") but less prominently. JGL's version is stronger. Validated.
- **Studio/creative production included is unique.** No competitor mentions free creative production / video shoots. Validated.

### Where JGL is still weaker than competitors (flagged, not changed)

- **Zero social proof vs. Lucia Doynel's 4 named case studies with spend/revenue/ROAS.** This is JGL's biggest gap. Can't be fixed with design - needs real client results.
- **No performance guarantee vs. HighTicketPaidAds' "beat your ROAS or refund."** This is a positioning decision for Jossiah, not a design decision.
- **Founder credibility is vague vs. Scale for Impact's "Former CMO at Mindvalley."** Blocked until Jossiah confirms his actual role and clears naming Expert Empires/ECA.
- **No third-party certifications (Google Partner, Meta Partner).** If Jossiah has these, they should be added.

---

## Pass 2: Offer Correction (2026-05-24)

### Hero subhead rewritten

**Old:** "A paid-traffic agency for coaches, consultants, and B2B service teams who want leads - more of them, at lower CPLs, and who actually become clients."

**New:** "For expert businesses doing GBP 30k+/month who've already tried paid ads and hit a ceiling. You don't need another agency. You need one operator who gets your market."

**Why:** The old subhead addressed a GBP 1,500/month buyer. The Expert Growth Engine targets a GBP 5,000/month buyer doing GBP 30k+/month. The new subhead qualifies on revenue, disqualifies newcomers ("already tried paid ads"), and positions against the agency model in one sentence.

### Method section replaced with Offer section

**Old:** Three generic method cards (Offer & creative, Landing & funnel, Measurement).

**New:** Six deliverables from the Expert Growth Engine, structured as featured card (transparency stack) + 5-card grid. Transparency stack gets a two-column featured layout showing the specific commitments: live dashboard, Friday Loom, 4-hour WhatsApp SLA, two fire calls/month.

**Why:** The old section described a generic methodology anyone could claim. The new section shows what's actually in the box. The transparency stack is featured because market research showed transparency is the #1 unmet need, and these commitments (4-hour SLA, weekly Loom, no standing meetings) are specific enough that a competitor can't easily copy the claim without actually doing it.

**Layout decision:** Six identical cards would have been a visual wall. The featured + grid hierarchy gives the transparency stack (the strongest differentiator) more visual weight while keeping the other deliverables scannable.

### Studio/creative section added

**Why:** "We film you in our studio, no extra charge" and "our editor cuts the videos" are genuinely unusual in this market. Most agencies either don't do creative at all or charge separately for it. This needed its own visual moment rather than being buried in a list.

**Visual choice:** Clapboard illustration with hover rotation. Breaks the card-grid pattern that dominates the rest of the page and signals "production" visually without requiring actual studio photography (which doesn't exist yet).

### Price displayed prominently

**Old:** GBP 1,500/month buried in FAQ.

**New:** GBP 5,000 as an oversized heading in its own section, with the terms (3-month minimum, month-to-month after) immediately below.

**Why:** Two reasons. First, the price is wrong at GBP 1,500 - the actual offer is GBP 5,000. Second, publishing the price is a trust signal. The market research showed buyers hate hidden pricing. Displaying GBP 5,000 prominently also pre-qualifies: anyone who gets to the CTA has already accepted the price range.

### Founding client slots added

Three-slot visual counter with segmented bar. Slot count is a single constant (`SLOT_COUNT = 3`) at the top of the pricing component with a code comment explaining the update protocol.

**Why:** "3 founding-client slots at GBP 5k, then GBP 6k" is real scarcity with a real deadline mechanism. The visual counter makes it tangible. The bonuses (GBP 2,500 strategy session, GBP 1,500 video shoot) are displayed as value cards.

### "What you handle" section added

**Why:** The offer doc lists explicit scope boundaries. Publishing them on the public site does two things: (1) sets expectations so there's no scope creep argument later, and (2) signals confidence - agencies that hide what they don't do are usually hiding it because the list is long.

### Fit check rebuilt

**Old criteria:** GBP 1,000+ per client, GBP 3,500+/month total, "proven offer that converts."

**New criteria:** GBP 30k+/month revenue, programs GBP 3k+, already running ads. Disqualifiers: never run ads before, happy with current agency, programs under GBP 3k, physical products/ecom/B2C.

**Why:** The old criteria matched a GBP 1,500/month service. The new criteria match a GBP 5,000/month service sold to established businesses.

### FAQ updated

Expanded from 8 to 8 (same count, different questions). Added: "Why a 3-month minimum?", "What's the total monthly investment?", "What happens on the strategy session?", "What do I need to have in place?" Removed: questions about GBP 1,500 pricing, GBP 2k minimum ad spend.

### Hero chart card replaced with dashboard preview

**Old:** Line chart showing GBP 84 to GBP 33 CPL with "SAMPLE" label (was "LIVE" before pass 1).

**New:** Four-metric dashboard grid (Leads, CPL, Calls Booked, Ad Spend) with an animated progress bar and "Friday Loom incoming" footer.

**Why:** The old chart implied specific campaign results that couldn't be defended. The dashboard preview demonstrates the transparency stack (the strongest differentiator) rather than making performance claims. It shows the product, not the outcome.

### Nav updated

Links: "The offer", "Pricing", "About", "FAQ". Status: "3 founding slots open" (replaces "Accepting clients").

---

## Pass 1: Research-Based Overhaul (2026-05-23)

### Fake case studies removed

Replaced three fabricated case study cards with a "How it works" transparency section. No verifiable results exist for Jossiah publicly.

### Unverifiable founder stats removed

GBP 3.2M, 7yr, 40+ accounts - none verifiable. About section rewritten around actual background: in-house media buyer for coaching/sales training businesses with sales experience.

### Fit check added

"This is probably not for you" section. Two-column good-fit/not-a-fit layout.

### FAQ expanded

6 to 8 questions. Reordered to lead with biggest buyer anxieties from market research.

### Voice shifted from "we" to "I"

Everywhere except the locked hero headline.

### Noindex added

For private preview. Must be removed before real launch.
