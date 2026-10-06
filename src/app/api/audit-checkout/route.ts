import Stripe from "stripe";

/*
 * Creates an embedded Stripe Checkout session for the £199 + VAT ad audit.
 * The /audit/order page calls this and mounts Stripe's form inside our own
 * branded page, using the client secret returned here.
 *
 * Needs STRIPE_SECRET_KEY (test key on previews, live key in production).
 *
 * VAT: JGL has applied for VAT but has no registration number yet, so HMRC
 * rules say no VAT can be shown on receipts. Until then the price is raised
 * to cover the VAT that will be owed (£199 + 20% = £238.80, one line, no VAT
 * line). Once the number is issued, set VAT_NUMBER_ISSUED to true: the price
 * goes back to £199 with a proper 20% VAT line from a tax rate this route
 * creates once and reuses (found by its metadata tag). Buyers from the gap
 * then get reissued VAT invoices.
 */
const VAT_NUMBER_ISSUED = false;
const AUDIT_PRICE_PENCE = 19900;
const PRICE_WITH_VAT_PENCE = 23880;
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
      ui_mode: "embedded_page",
      branding_settings: {
        display_name: "Jossiah Gets Leads",
        background_color: "#ffffff",
        button_color: "#0a1628",
        border_style: "rounded",
        font_family: "inter",
      },
      // Card only (Fish, 6 Oct 2026). Apple Pay and Google Pay ride on card.
      allowed_payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          ...(VAT_NUMBER_ISSUED
            ? { tax_rates: [await vatRateId(stripe)] }
            : {}),
          price_data: {
            currency: "gbp",
            unit_amount: VAT_NUMBER_ISSUED
              ? AUDIT_PRICE_PENCE
              : PRICE_WITH_VAT_PENCE,
            product_data: {
              name: "Ad audit",
              description:
                "Recorded walkthrough, written report and prioritised action list for your Meta, Google and YouTube ads. Delivered within 72 hours of access.",
            },
          },
        },
      ],
      ...(VAT_NUMBER_ISSUED
        ? {}
        : {
            custom_text: {
              submit: {
                message:
                  "£199 plus an amount to cover VAT. Our VAT registration is in progress, so a full VAT invoice will follow once our VAT number is issued.",
              },
            },
          }),
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
      return_url: `${origin}/audit/thanks?session_id={CHECKOUT_SESSION_ID}`,
    });

    return Response.json({ clientSecret: session.client_secret });
  } catch (err) {
    console.error("audit-checkout failed", err);
    return new Response(
      "Checkout isn't available right now. Please email hello@jossiahgetsleads.com and I'll sort it.",
      { status: 502 }
    );
  }
}
