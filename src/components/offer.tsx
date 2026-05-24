"use client";

import { useEffect, useRef } from "react";
import styles from "./section.module.css";
import o from "./offer.module.css";

const pillars = [
  {
    num: "01",
    title: "Paid traffic management",
    desc: "Meta, LinkedIn, Google - wherever your buyers are. Full campaign build, ongoing optimisation, creative testing. I\u2019m in the accounts daily, not checking in once a week.",
  },
  {
    num: "02",
    title: "Landing pages",
    desc: "I build the pages your traffic lands on. Designed to convert your specific buyer, not a template with your logo swapped in.",
  },
  {
    num: "03",
    title: "Ad creative & copy",
    desc: "Static, video, carousel - whatever the platform and audience need. Produced in-house. New variations every cycle so your audience doesn\u2019t go blind.",
  },
  {
    num: "04",
    title: "Lead magnet emails",
    desc: "The nurture sequence between opt-in and booked call. Written to move people toward a decision, not just \u201Cstay in touch.\u201D",
  },
  {
    num: "05",
    title: "Show-up & follow-up templates",
    desc: "Confirmation emails, reminders, no-show sequences. The stuff between \u201Cbooked\u201D and \u201Cshowed up\u201D that most agencies ignore and most businesses never build.",
  },
];

export function Offer() {
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
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`${styles.section} ${styles.reveal}`}
      id="offer"
      ref={ref}
    >
      <div className={styles.wrap}>
        <div className={styles.head}>
          <div className={styles.eyebrow}>01 &middot; The Expert Growth Engine</div>
          <h2 className={styles.heading}>
            Everything between your offer and{" "}
            <span className={styles.accent}>a booked call.</span>
          </h2>
          <p className={styles.sub}>
            Not a menu. Not a buffet of add-ons. One service that covers the
            full pipeline from ad to call - so nothing falls through the gaps.
          </p>
        </div>

        {/* Featured: Transparency stack */}
        <div className={o.featured}>
          <div className={o.featuredContent}>
            <div className={o.featuredTag}>THE TRANSPARENCY STACK</div>
            <h3 className={o.featuredTitle}>
              You see everything. In real time.
            </h3>
            <p className={o.featuredDesc}>
              No black boxes. No monthly reports designed to hide bad news.
              You get a custom live dashboard, a WhatsApp line with a 4-hour
              SLA, and a Friday Loom every week where I walk through what
              happened, what&apos;s changing, and why.
            </p>
          </div>
          <div className={o.featuredDetails}>
            <div className={o.detailRow}>
              <span className={o.detailIcon}>&#9632;</span>
              <div>
                <div className={o.detailTitle}>Custom live dashboard</div>
                <div className={o.detailSub}>
                  Your numbers, updated daily, accessible anytime
                </div>
              </div>
            </div>
            <div className={o.detailRow}>
              <span className={o.detailIcon}>&#9632;</span>
              <div>
                <div className={o.detailTitle}>Friday Loom from Jossiah</div>
                <div className={o.detailSub}>
                  Weekly video walkthrough - what spent, what came in, what&apos;s next
                </div>
              </div>
            </div>
            <div className={o.detailRow}>
              <span className={o.detailIcon}>&#9632;</span>
              <div>
                <div className={o.detailTitle}>4-hour WhatsApp SLA</div>
                <div className={o.detailSub}>
                  Message me anytime. Response within 4 hours, business days
                </div>
              </div>
            </div>
            <div className={o.detailRow}>
              <span className={o.detailIcon}>&#9632;</span>
              <div>
                <div className={o.detailTitle}>Two &quot;in case of fire&quot; calls/month</div>
                <div className={o.detailSub}>
                  No standing meetings. Calls when you need them, not calendar filler
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other 5 pillars */}
        <div className={o.grid}>
          {pillars.map((item) => (
            <div key={item.num} className={o.card}>
              <div className={o.num}>{item.num}</div>
              <h3 className={o.cardTitle}>{item.title}</h3>
              <p className={o.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
