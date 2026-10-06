"use client";

import { useCallback, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";

const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = key ? loadStripe(key) : null;

export function OrderCheckout() {
  const [failed, setFailed] = useState(false);

  const fetchClientSecret = useCallback(async () => {
    const res = await fetch("/api/audit-checkout", { method: "POST" });
    const data = res.ok ? await res.json() : null;
    if (!data?.clientSecret) {
      setFailed(true);
      throw new Error("Checkout unavailable");
    }
    return data.clientSecret as string;
  }, []);

  if (!stripePromise || failed) {
    return (
      <p style={{ padding: 24, lineHeight: 1.6 }}>
        Checkout isn&apos;t available right now. Please email
        hello@jossiahgetsleads.com and I&apos;ll sort it.
      </p>
    );
  }

  return (
    <EmbeddedCheckoutProvider stripe={stripePromise} options={{ fetchClientSecret }}>
      <EmbeddedCheckout />
    </EmbeddedCheckoutProvider>
  );
}
