import Stripe from "stripe";

/*
 * Starts a Stripe Checkout for the £199 + VAT ad audit.
 * The buy buttons on /audit post here; we create a session and send the
 * buyer straight to Stripe's hosted checkout.
 *
 * Needs STRIPE_SECRET_KEY (test key on previews, live key in production).
 * UK VAT at 20% is added on top via a tax rate this route creates once and
 * then reuses (found by its metadata tag).
 */
const AUDIT_PRICE_PENCE = 19900;
const VAT_TAG = "jgl-uk-vat-20";

async function vatRateId(stripe: Stripe) {
  const rates = await stripe.taxRates.list({ active: true, limit: 100 });
  const existing = rates.data.find((r) => r.metadata?.tag === VAT_TAG);
  if (existing) return existing.id;
  const created = await stripe.taxRates.create({
    display_name: "VAT",
    percentage: 20,
    inclusive: false,
    country: "GB",
    jurisdiction: "GB",
    tax_type: "vat",
    metadata: { tag: VAT_TAG },
  });
  return created.id;
}

export async function POST(request: Request) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    return new Response(
      "Checkout isn't available right now. Please email hello@jossiahgetsleads.com and I'll sort it.",
      { status: 503 }
    );
  }

  const stripe = new Stripe(key);
  const origin = new URL(request.url).origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          tax_rates: [await vatRateId(stripe)],
          price_data: {
            currency: "gbp",
            unit_amount: AUDIT_PRICE_PENCE,
            product_data: {
              name: "Ad audit",
              description:
                "Recorded walkthrough, written report and prioritised action list for your Meta, Google and YouTube ads. Delivered within 72 hours of access.",
            },
          },
        },
      ],
      customer_creation: "always",
      billing_address_collection: "required",
      tax_id_collection: { enabled: true },
      custom_fields: [
        {
          key: "business",
          label: { type: "custom", custom: "Business name" },
          type: "text",
        },
        {
          key: "website",
          label: { type: "custom", custom: "Website" },
          type: "text",
          optional: true,
        },
        {
          key: "platforms",
          label: { type: "custom", custom: "Which ads are you running?" },
          type: "dropdown",
          dropdown: {
            options: [
              { label: "Meta only", value: "meta" },
              { label: "Google or YouTube only", value: "google" },
              { label: "Meta and Google or YouTube", value: "both" },
            ],
          },
        },
      ],
      success_url: `${origin}/audit/thanks?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/audit#order`,
    });

    return Response.redirect(session.url!, 303);
  } catch (err) {
    console.error("audit-checkout failed", err);
    return new Response(
      "Checkout isn't available right now. Please email hello@jossiahgetsleads.com and I'll sort it.",
      { status: 502 }
    );
  }
}
