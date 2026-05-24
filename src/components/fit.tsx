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
            I work with a small number of clients at a time. That means I
            have to be picky about who I take on. Here&apos;s how to tell if
            we&apos;re a fit.
          </p>
        </div>
        <div className={f.grid}>
          <div className={f.col}>
            <div className={f.colHead}>
              <span className={f.yes}>&#x2713;</span> Good fit
            </div>
            <ul className={f.list}>
              <li>
                You sell a service or programme worth &pound;1,000+ per client
              </li>
              <li>
                You&apos;ve got a proven offer that converts when people see
                it
              </li>
              <li>
                You can invest &pound;3,500+/month total (management + ad
                spend)
              </li>
              <li>
                You want leads that become clients, not just form fills
              </li>
              <li>
                You&apos;re comfortable with a 60-90 day ramp before judging
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
                You&apos;re pre-revenue or haven&apos;t validated your offer
                yet
              </li>
              <li>
                You need results in 2 weeks or you&apos;re out
              </li>
              <li>
                You want someone to &quot;just run some ads&quot; without
                touching the funnel
              </li>
              <li>
                You&apos;re looking for the cheapest option
              </li>
              <li>
                You want a big agency with a big team and a big deck
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
