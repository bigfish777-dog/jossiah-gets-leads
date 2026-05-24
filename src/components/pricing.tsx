"use client";

import { useEffect, useRef } from "react";
import styles from "./section.module.css";
import p from "./pricing.module.css";

/*
 * SLOT_COUNT: Update this number as founding client slots fill.
 * 3 = all available, 2 = one taken, 1 = two taken, 0 = closed.
 * When 0, the founding offer section will show "CLOSED" state.
 *
 * UPDATE PROTOCOL: Jossiah should update this number the same day
 * a founding client signs. Push to main and Vercel auto-deploys.
 */
const SLOT_COUNT = 3;

export function Pricing() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add(styles.in);
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const slotsOpen = SLOT_COUNT > 0;

  return (
    <section
      className={`${styles.section} ${styles.reveal}`}
      id="pricing"
      ref={ref}
    >
      <div className={styles.wrap}>
        <div className={styles.head}>
          <div className={styles.eyebrow}>02 &middot; Investment</div>
          <h2 className={styles.heading}>
            <span className={p.priceNum}>&pound;5,000</span>
            <span className={styles.accent}> + VAT / month</span>
          </h2>
          <p className={styles.sub}>
            3-month minimum. Month-to-month after that with 30 days&apos;
            notice. Ad spend is separate and billed directly by the platforms
            to your account - I never mark up media costs.
          </p>
        </div>

        <div className={p.columns}>
          {/* Founding offer */}
          <div className={p.founding}>
            <div className={p.foundingHead}>
              <span className={p.foundingTag}>
                FOUNDING CLIENT OFFER
              </span>
              <span className={p.slots}>
                {slotsOpen ? (
                  <>
                    <span className={p.slotDot} />
                    {SLOT_COUNT} of 3 slots remaining
                  </>
                ) : (
                  "CLOSED"
                )}
              </span>
            </div>
            <div className={p.slotBar}>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`${p.slotSegment} ${
                    i < SLOT_COUNT ? p.slotOpen : p.slotTaken
                  }`}
                />
              ))}
            </div>
            {slotsOpen && (
              <>
                <p className={p.foundingDesc}>
                  The first three clients lock in &pound;5,000/month for the
                  life of the engagement. When these slots close, the price
                  moves to &pound;6,000/month.
                </p>
                <div className={p.bonuses}>
                  <div className={p.bonus}>
                    <div className={p.bonusVal}>&pound;2,500 value</div>
                    <div className={p.bonusLabel}>
                      Full-day strategy session at the studio
                    </div>
                  </div>
                  <div className={p.bonus}>
                    <div className={p.bonusVal}>&pound;1,500 value</div>
                    <div className={p.bonusLabel}>
                      Custom video shoot day included
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* What you're responsible for */}
          <div className={p.scope}>
            <div className={p.scopeHead}>What you handle</div>
            <p className={p.scopeIntro}>
              I cover the pipeline from ad to booked call. Everything
              outside that stays with you:
            </p>
            <ul className={p.scopeList}>
              <li>Your offer and pricing</li>
              <li>Your sales process and sales calls</li>
              <li>Your sales emails</li>
              <li>Your funnel tool (GoHighLevel, Kajabi, etc.)</li>
              <li>Your ad spend (paid directly to platforms)</li>
            </ul>
            <p className={p.scopeNote}>
              No surprises. You know exactly where the line is before we
              start.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
