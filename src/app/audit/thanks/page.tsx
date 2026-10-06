import type { Metadata } from "next";
import Stripe from "stripe";
import s from "../audit.module.css";

export const metadata: Metadata = {
  title: "You're in - Jossiah Gets Leads",
  robots: { index: false, follow: false },
};

/* Looks up the finished Checkout so we can confirm payment and the email. */
async function paidEmail(sessionId: string | undefined) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key || !sessionId) return null;
  try {
    const session = await new Stripe(key).checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid") return null;
    return session.customer_details?.email ?? "";
  } catch {
    return null;
  }
}

export default async function ThanksPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { session_id } = await searchParams;
  const email = await paidEmail(
    typeof session_id === "string" ? session_id : undefined
  );

  return (
    <div className={s.page}>
      <header className={s.bar}>
        <div className={s.barRow}>
          <span className={s.logo}>
            JOSSIAH GETS<span aria-hidden="true">&#x2197;</span>LEADS
          </span>
        </div>
      </header>

      <main>
        <section className={`${s.hero} ${s.light}`}>
          <div className={s.wrap}>
            {email === null ? (
              <>
                <h1 className={s.h1}>Thanks for getting in touch.</h1>
                <p className={s.lede}>
                  I couldn&apos;t confirm a payment from this link. If
                  you&apos;ve just paid, check your inbox for the Stripe
                  receipt, or email hello@jossiahgetsleads.com and I&apos;ll
                  look into it.
                </p>
              </>
            ) : (
              <>
                <h1 className={s.h1}>
                  You&apos;re in. <span className={s.mint}>Thank you.</span>
                </h1>
                <p className={s.lede}>
                  {`Your receipt is on its way${email ? ` to ${email}` : ""}. Next I'll email you the simple steps to give me access to your ads. Your 72 hours start as soon as that access is in.`}
                </p>
                <ol className={s.how}>
                  <li>
                    <span className={s.step}>01</span>
                    <p>Watch for my email with the access steps.</p>
                  </li>
                  <li>
                    <span className={s.step}>02</span>
                    <p>
                      Add me as a partner on your ad accounts. No passwords,
                      and you can remove me whenever you like.
                    </p>
                  </li>
                  <li>
                    <span className={s.step}>03</span>
                    <p>
                      Within 72&nbsp;hours, your walkthrough, report and
                      action list arrive.
                    </p>
                  </li>
                </ol>
              </>
            )}
          </div>
        </section>
      </main>

      <footer className={s.footer}>
        <div className={s.wrap}>
          <span>Jossiah Gets Leads Ltd</span>
          <a href="mailto:hello@jossiahgetsleads.com">
            hello@jossiahgetsleads.com
          </a>
        </div>
      </footer>
    </div>
  );
}
