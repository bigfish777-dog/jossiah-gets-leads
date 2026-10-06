import type { Metadata } from "next";
import Image from "next/image";
import s from "../audit.module.css";
import o from "./order.module.css";
import { OrderCheckout } from "./checkout";

export const metadata: Metadata = {
  title: "Book your ad audit - Jossiah Gets Leads",
  robots: { index: false, follow: false },
};

export default function OrderPage() {
  return (
    <div className={s.page}>
      <header className={s.bar}>
        <div className={s.barRow}>
          <a href="/audit" className={s.logo} style={{ textDecoration: "none" }}>
            JOSSIAH GETS<span aria-hidden="true">&#x2197;</span>LEADS
          </a>
          <a href="/audit" className={o.back}>
            &larr; Back to the page
          </a>
        </div>
      </header>

      <main className={o.main}>
        <div className={o.grid}>
          <aside className={o.summary}>
            <div className={o.who}>
              <div className={o.face}>
                <Image src="/jossiah-face.jpg" alt="Jossiah Pinto-Day" fill sizes="64px" />
              </div>
              <div>
                <p className={o.whoName}>Jossiah Pinto-Day</p>
                <p className={o.whoRole}>Your auditor, personally</p>
              </div>
            </div>

            <h1 className={o.h1}>Book your ad audit</h1>

            <dl className={o.rows}>
              <div>
                <dt>Platforms</dt>
                <dd>Meta, Google, YouTube</dd>
              </div>
              <div>
                <dt>You get</dt>
                <dd>Recorded walkthrough, written report, prioritised action list</dd>
              </div>
              <div>
                <dt>Turnaround</dt>
                <dd>72&nbsp;hours from access</dd>
              </div>
              <div>
                <dt>Price</dt>
                <dd>
                  &pound;199 + VAT
                  <span className={o.total}>&pound;238.80 total at checkout</span>
                </dd>
              </div>
            </dl>

            <h2 className={o.h2}>What happens next</h2>
            <ol className={o.next}>
              <li>
                <span>01</span>Pay securely here.
              </li>
              <li>
                <span>02</span>I&apos;ll email you simple steps to give me access. No passwords.
              </li>
              <li>
                <span>03</span>Your walkthrough, report and action list arrive within 72&nbsp;hours of access.
              </li>
            </ol>

            <p className={o.spots}>Only 10 audits at this price.</p>
          </aside>

          <section className={o.pay} aria-label="Payment">
            <OrderCheckout />
          </section>
        </div>
      </main>
    </div>
  );
}
