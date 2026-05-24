"use client";

import { useEffect, useRef } from "react";
import styles from "./section.module.css";
import f from "./fit.module.css";

export function Fit() {
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
      id="fit"
      ref={ref}
    >
      <div className={styles.wrap}>
        <div className={styles.head}>
          <div className={styles.eyebrow}>Fit check</div>
          <h2 className={styles.heading}>
            This is probably{" "}
            <span className={styles.accent}>not for you.</span>
          </h2>
          <p className={styles.sub}>
            I work with a small number of clients at a time. Here&apos;s how
            to tell if we&apos;re a fit before either of us wastes a call.
          </p>
        </div>
        <div className={f.grid}>
          <div className={f.col}>
            <div className={f.colHead}>
              <span className={f.yes}>&#x2713;</span> Good fit
            </div>
            <ul className={f.list}>
              <li>
                Expert business doing &pound;30k+/month
              </li>
              <li>
                You sell programs, services, or coaching worth &pound;3k+
              </li>
              <li>
                You&apos;ve run ads before and hit a ceiling
              </li>
              <li>
                You want leads that become clients, not just form fills
              </li>
              <li>
                You&apos;re comfortable with a 90-day window to judge
                results
              </li>
            </ul>
          </div>
          <div className={f.col}>
            <div className={f.colHead}>
              <span className={f.no}>&#x2717;</span> Not a fit
            </div>
            <ul className={f.list}>
              <li>
                You&apos;ve never run paid ads before
              </li>
              <li>
                You&apos;re happy with your current agency
              </li>
              <li>
                Your programs are under &pound;3k
              </li>
              <li>
                You sell physical products, ecom, or B2C
              </li>
              <li>
                You want the cheapest option or a big agency with a big
                team
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
