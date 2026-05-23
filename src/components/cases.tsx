"use client";

import { useEffect, useRef } from "react";
import styles from "./section.module.css";
import c from "./cases.module.css";

const cases = [
  {
    tag: "// B2B Coach \u00b7 9 weeks",
    stat: "\u221261%",
    statLabel: "cost per lead",
    title: "From \u00a384 to \u00a333 CPL on a cold LinkedIn audience",
    meta: "Spend: \u00a318,400 \u00b7 412 leads",
    cohort: "COHORT 014",
  },
  {
    tag: "// SaaS Consultancy \u00b7 6 months",
    stat: "3.2\u00d7",
    statLabel: "qualified pipeline",
    title: "Tripled SQL volume without raising ad budget",
    meta: "Spend: \u00a342k \u00b7 1,140 leads",
    cohort: "COHORT 009",
  },
  {
    tag: "// Fractional CFO \u00b7 4 months",
    stat: "\u00a311\u2192",
    statLabel: "cost per booked call",
    title: "Booked-call cost dropped from \u00a374 to \u00a311",
    meta: "Spend: \u00a38,200 \u00b7 745 calls",
    cohort: "COHORT 017",
  },
];

export function Cases() {
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

  return (
    <section className={`${styles.section} ${styles.reveal}`} id="cases" ref={ref}>
      <div className={styles.wrap}>
        <div className={styles.head}>
          <div className={styles.eyebrow}>02 &middot; Cases</div>
          <h2 className={styles.heading}>
            Receipts, not <span className={styles.accent}>testimonials.</span>
          </h2>
          <p className={styles.sub}>
            Real numbers from real accounts. Click through for the full
            breakdown &mdash; spend, leads, close rate, the lot.
          </p>
        </div>
        <div className={c.grid}>
          {cases.map((item) => (
            <a key={item.cohort} className={c.card} href="#">
              <div className={c.tag}>{item.tag}</div>
              <div className={c.stat}>{item.stat}</div>
              <div className={c.statLabel}>{item.statLabel}</div>
              <div className={c.title}>{item.title}</div>
              <div className={c.meta}>{item.meta}</div>
              <div className={c.foot}>
                <span>{item.cohort}</span>
                <span className={c.read}>READ &#x2197;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
