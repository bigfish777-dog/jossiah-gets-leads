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
              A paid-traffic agency for coaches, consultants, and B2B service
              teams who want leads &mdash; more of them, at lower CPLs, and who
              actually become clients.
            </p>
            <div className={styles.btnRow}>
              <a href="#apply" className={styles.btnPrimary}>
                Plot a call <span className={styles.arr}>&#x2197;</span>
              </a>
              <a href="#cases" className={styles.btnSecondary}>
                Read a case <span className={styles.arr}>&#x2197;</span>
              </a>
            </div>
          </div>

          <div
            className={`${styles.chartCard} ${styles.reveal} ${styles.in}`}
          >
            <div className={styles.chartHead}>
              <span>COHORT 014 &middot; CPL</span>
              <span className={styles.live}>
                <span className={styles.pulse} />
                LIVE
              </span>
            </div>
            <div className={styles.chartValue}>&pound;33</div>
            <div className={styles.chartDelta}>&darr; 60.7%</div>
            <div className={styles.chartLabel}>9-WEEK TREND</div>
            <svg
              className={styles.chartSvg}
              viewBox="0 0 400 180"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="fadeFill" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="#5DCAA5"
                    stopOpacity={0.25}
                  />
                  <stop
                    offset="100%"
                    stopColor="#5DCAA5"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <path
                d="M 10 30 L 55 45 L 100 60 L 145 75 L 190 88 L 235 110 L 280 130 L 325 145 L 380 158 L 380 180 L 10 180 Z"
                fill="url(#fadeFill)"
              />
              <path
                d="M 10 30 L 55 45 L 100 60 L 145 75 L 190 88 L 235 110 L 280 130 L 325 145 L 380 158"
                fill="none"
                stroke="#5DCAA5"
                strokeWidth={2}
              />
              <circle cx={380} cy={158} r={4} fill="#5DCAA5" />
              <circle cx={380} cy={158} r={8} fill="#5DCAA5" opacity={0.3} />
            </svg>
            <div className={styles.chartFoot}>
              <span>WK 01 &middot; &pound;84</span>
              <span>WK 09 &middot; &pound;33</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
