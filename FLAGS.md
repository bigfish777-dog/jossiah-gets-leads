# Flags

Things to push back on, verify, or know before showing this to anyone.

---

## 1. Competitor research failed again

The background agent found agency names via web search but couldn't visit their actual websites - both WebFetch and Bash permissions were denied to background agents. The "anti-agency" positioning hasn't been validated against real competitors. The agency names found (Scale for Impact, 3 Eleven Advertising, Be Known LLC, Think Orion, etc.) are listed in RESEARCH.md but not analyzed.

**What to do:** Either run the competitor research in a session where you can approve WebFetch permissions for each call, or do it manually. The positioning is sound based on market research (buyers want transparency, single operator, no lock-ins) but hasn't been tested against what competitors actually say on their sites.

---

## 2. No social proof

The site has zero social proof. No case studies, no testimonials, no logos, no stats. This is correct for now (everything was fabricated) but it's the single biggest conversion risk.

**Before launch:**
- 2-3 testimonials from anyone Jossiah has done ad work for
- A quote from Expert Empires or ECA about his work would be powerful
- Even one real case study transforms the page
- If launching without proof, consider a "Currently working with our founding cohort" line in the About section

---

## 3. Founding slot counter needs an update protocol

`SLOT_COUNT` in `src/components/pricing.tsx` is a hardcoded constant. Jossiah needs to update it the same day a founding client signs, push to main, and Vercel auto-deploys. If he forgets to update it, the site shows 3 slots open while 1 or 2 are taken. This damages credibility more than not having the counter.

**Decision needed:** Is Jossiah comfortable with this workflow? If not, consider a CMS-backed counter (Notion, Supabase, even a JSON file fetched at build time) or remove the specific count and just show "Founding slots available" / "Founding slots closed."

---

## 4. Dashboard numbers in the hero are illustrative

The dashboard shows 34 leads, GBP 28 CPL, 11 calls booked, GBP 952 spend. These are representative numbers, not from a real campaign. The context (labeled "YOUR DASHBOARD", positioned as a product preview) makes this clearer than the old chart card, but a prospect who scrutinizes it will notice there's no attribution.

Less risky than the old chart card, but still a flag.

---

## 5. Expert Empires / ECA positioning

Same flag as before. JGL targets the same ICP as Expert Empires. The site doesn't name either company, and the about copy is deliberately vague about which "coaching and sales training businesses" Jossiah worked for.

**Still unresolved:** Has Jossiah discussed this with Nick James? Non-compete clause? Referral partnership potential?

---

## 6. About section not updated this pass

Per instruction, the about copy was left alone. It still says "coaches, consultants, and B2B service teams" which is broader than the Expert Growth Engine ICP of "expert businesses doing GBP 30k+/month." The role/experience claims are unchanged and still need Jossiah's verification.

---

## 7. CTAs still go nowhere

All "Plot a call" buttons link to `#apply` or `#`. Needs a booking system (Calendly, Cal.com) before showing to anyone. Footer email (hello@jossiahgetsleads.com) needs to be set up and receiving mail.

---

## 8. No favicon or OG image

Still using Next.js default. The J-arrow mark from Claude Design should be used. Critical before sharing the URL.

---

## 9. Price at GBP 5,000 is stated as fact

The price came from the brief, not from a verified offer document. If the final pricing is different, the pricing section, FAQ, and fit check all need updating. These are tightly coupled.

---

## 10. Site is noindexed

Must be removed before real launch.

---

## 11. Studio claims

The copy says "You come to our studio" and "Our editor cuts the footage." This implies an existing studio and an editor on staff/retainer. If the studio isn't set up yet or the editor isn't confirmed, this needs softening or removal.

---

## 12. Mobile nav

No hamburger menu on mobile. Nav links are hidden. Only the logo and CTA button remain. Fine for a landing page, but worth noting.

---

## Priority for Jossiah review (in order)

1. Verify the GBP 5,000 price and founding slot mechanic
2. Confirm studio exists and editor is available
3. Verify about section claims (media buying, sales closing)
4. Discuss Expert Empires positioning with Nick James
5. Set up booking link and email
6. Get 2-3 real testimonials
