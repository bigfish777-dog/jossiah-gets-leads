"use client";

import { useEffect, useRef } from "react";
import styles from "./section.module.css";
import c from "./cases.module.css";

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
    <section
      className={`${styles.section} ${styles.reveal}`}
      id="how"
      ref={ref}
    >
      <div className={styles.wrap}>
        <div className={styles.head}>
          <div className={styles.eyebrow}>02 &middot; How it works</div>
          <h2 className={styles.heading}>
            Your ads, your accounts,{" "}
            <span className={styles.accent}>your data.</span>
          </h2>
          <p className={styles.sub}>
            Most agencies build walls between you and your own campaigns. I
            do the opposite. Full transparency, from day one.
          </p>
        </div>
        <div className={c.grid}>
          <div className={c.card}>
            <div className={c.icon}>01</div>
            <div className={c.title}>You own everything</div>
            <p className={c.desc}>
              Ad accounts, landing pages, creative assets, lead lists - all
              in your name, on your logins. If we part ways, you keep
              everything. No hostage situations.
            </p>
          </div>
          <div className={c.card}>
            <div className={c.icon}>02</div>
            <div className={c.title}>One weekly number</div>
            <p className={c.desc}>
              Every Friday you get a one-page report: what we spent, what
              came in, what we&apos;re changing next week. Plain English. No
              40-slide decks, no vanity metrics.
            </p>
          </div>
          <div className={c.card}>
            <div className={c.icon}>03</div>
            <div className={c.title}>30-day rolling</div>
            <p className={c.desc}>
              No lock-ins, no 6-month minimums. If the work isn&apos;t landing,
              you can walk - with all your assets, data, and learnings
              intact. I&apos;ve never needed a contract to keep a client.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
