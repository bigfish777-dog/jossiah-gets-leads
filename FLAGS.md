# Flags

Things to push back on, verify, or know before showing this to anyone.

---

## 1. The chart card numbers are still in the hero

The chart shows GBP 84 dropping to GBP 33 CPL over 9 weeks. I changed the label from "LIVE" to "SAMPLE" to be transparent, but the specific numbers are still present because Nick locked "the chart card aesthetic" as part of the brand direction.

**Decision needed:** Are these numbers defensible? If Jossiah has run a campaign with these results (even internally for Expert Empires), they're fine. If they're entirely made up, the chart should either show a generic downward trend without specific numbers, or be labeled more explicitly as illustrative. A prospect who asks "which campaign was this?" needs an answer.

---

## 2. No social proof at all

The site currently has zero social proof: no case studies, no testimonials, no logos, no stats. This is intentional - I removed everything that was fabricated rather than replacing it with different fabrications. But a site with no social proof will convert worse than one with even basic proof.

**What to do before launch:**
- Get 2-3 testimonials from anyone Jossiah has done ad work for, even informally
- If Expert Empires or ECA would give a quote about his work, that would be powerful
- Even a single real case study with real numbers would transform the page
- Consider adding a "Currently building case studies with my first cohort of clients" line in the About section if launching before proof is available

---

## 3. The about copy makes claims about Jossiah's experience

The copy says he's been "the in-house media buyer for established coaching and sales training businesses" and that he's "closed deals myself." Both are supported by his team page listings (Media Buyer at Expert Empires, Sales Executive at ECA), but:

- His Expert Empires bio describes him as community support, not media buying
- His LinkedIn says Media Buyer
- His ECA page says Sales Executive

The roles are inconsistent across sources. Jossiah should confirm: has he actually managed ad campaigns end-to-end, or was he more of an assistant/coordinator? Has he closed sales on the phone, or was his "Sales Executive" role more administrative? The copy assumes the most capable interpretation of his titles.

---

## 4. Pricing in the FAQ

The site states GBP 1,500/month + VAT management fee, GBP 2k/month minimum ad spend, and the fit check mentions GBP 3,500+/month total. These numbers came from the original design prototype. Market research suggests GBP 1,500/month is at the low end of market for quality work but appropriate for a new agency building its book.

**Verify with Jossiah:** Is GBP 1,500/month actually his intended price? Is the GBP 2k minimum ad spend right? These are on the public site and will set expectations.

---

## 5. Expert Empires / ECA positioning conflict

The research shows Jossiah's agency targets the exact same ICP as Expert Empires (coaches, consultants, speakers, trainers). While the services are fundamentally different (agency vs. coaching), the optics of targeting your employer's community while still employed there could be sensitive.

**What I did:** Kept the copy focused on "coaches, consultants, and B2B service teams" without mentioning Expert Empires or ECA by name. The about copy references "established coaching and sales training businesses" without naming them. This is deliberately vague.

**What Jossiah should think about:**
- Has he discussed this with Nick James?
- Is there a non-compete or non-solicitation clause?
- Would Expert Empires potentially become a referral partner rather than a conflict?
- Should the ICP be broadened slightly on launch to reduce perception of direct competition?

---

## 6. The "Plot a call" CTA goes nowhere

All CTA buttons link to `#apply` (the final CTA section) or `#` (dead links). Before launch, these need to point to an actual booking system - Calendly, Cal.com, or similar. The email in the footer (hello@jossiahgetsleads.com) should also be verified as set up and receiving mail.

---

## 7. "We run the ads" vs. "I" inconsistency

The locked hero headline says "We run the ads" but the rest of the site correctly uses "I" voice for a one-person agency. This creates a slight voice inconsistency. It's not a problem - "we" in a headline is standard brand voice even for solo operators - but if anyone asks, that's the reason.

---

## 8. No favicon or OG image

The site has no custom favicon (still using Next.js default) and no Open Graph image for social sharing. The brand system in Claude Design has a J-arrow mark that should be used for both. This should be set up before sharing the URL with anyone.

---

## 9. Mobile nav has no hamburger

On mobile (under 900px), the nav links and status indicator are hidden via CSS but there's no hamburger menu to access them. The only nav element on mobile is the logo and the CTA button. This is probably fine for a landing page (all content is on one page, CTA is visible), but worth noting.

---

## 10. The site is noindexed

I added a noindex meta tag per Nick's request for a private preview. This must be removed before the real launch or the site won't appear in search results.
