"use client";

import { useEffect, useRef } from "react";
import styles from "./hero.module.css";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add(styles.in);
        });
      },
      { threshold: 0.12 }
    );
    el.querySelectorAll(`.${styles.reveal}`).forEach((child) =>
      observer.observe(child)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.hero} ref={sectionRef}>
      <div className={styles.wrap}>
        <div className={styles.grid}>
          <div className={`${styles.reveal} ${styles.in}`}>
            <span className={styles.eyebrow}>// Paid traffic for experts</span>
            <h1 className={styles.heading}>
              We run the ads.{" "}
              <span className={styles.accent}>You get the leads.</span>
            </h1>
            <p className={styles.sub}>
              For expert businesses doing &pound;30k+/month who&apos;ve
              already tried paid ads and hit a ceiling. You don&apos;t need
              another agency. You need one operator who gets your market.
            </p>
            <div className={styles.btnRow}>
              <a href="#apply" className={styles.btnPrimary}>
                Plot a call <span className={styles.arr}>&#x2197;</span>
              </a>
              <a href="#offer" className={styles.btnSecondary}>
                See the offer <span className={styles.arr}>&#x2197;</span>
              </a>
            </div>
          </div>

          {/* Dashboard preview - demonstrates transparency stack */}
          <div
            className={`${styles.dashboard} ${styles.reveal} ${styles.in}`}
          >
            <div className={styles.dashHead}>
              <span className={styles.dashTitle}>YOUR DASHBOARD</span>
              <span className={styles.dashLive}>
                <span className={styles.pulse} />
                LIVE
              </span>
            </div>
            <div className={styles.dashGrid}>
              <div className={styles.metric}>
                <div className={styles.metricLabel}>LEADS THIS WEEK</div>
                <div className={styles.metricVal}>34</div>
                <div className={styles.metricDelta}>+12 vs last week</div>
              </div>
              <div className={styles.metric}>
                <div className={styles.metricLabel}>COST PER LEAD</div>
                <div className={styles.metricVal}>&pound;28</div>
                <div className={styles.metricDelta}>&darr; 18% vs month 1</div>
              </div>
              <div className={styles.metric}>
                <div className={styles.metricLabel}>CALLS BOOKED</div>
                <div className={styles.metricVal}>11</div>
                <div className={styles.metricDelta}>32% of leads</div>
              </div>
              <div className={styles.metric}>
                <div className={styles.metricLabel}>AD SPEND</div>
                <div className={styles.metricVal}>&pound;952</div>
                <div className={styles.metricDelta}>of &pound;1,200 budget</div>
              </div>
            </div>
            <div className={styles.dashBar}>
              <div className={styles.dashBarFill} />
            </div>
            <div className={styles.dashFoot}>
              <span>Friday Loom incoming &middot; 14:30</span>
              <span className={styles.dashFootLink}>View full dashboard &#x2197;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
