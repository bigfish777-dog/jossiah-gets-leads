"use client";

import { useEffect, useRef } from "react";
import styles from "./final-cta.module.css";

export function FinalCTA() {
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
    <section className={`${styles.cta} ${styles.reveal}`} id="apply" ref={ref}>
      <div className={styles.wrap}>
        <span className={styles.eyebrow}>// 05 &middot; Apply</span>
        <h2 className={styles.heading}>
          Tell me what you&apos;re selling.
          <br />
          I&apos;ll tell you if I can{" "}
          <span className={styles.accent}>get you leads.</span>
        </h2>
        <p className={styles.sub}>
          30-minute call. No deck, no pitch. If we&apos;re not a fit, I&apos;ll point
          you to someone who is.
        </p>
        <a href="#" className={styles.btn}>
          Plot a call <span className={styles.arr}>&#x2197;</span>
        </a>
      </div>
    </section>
  );
}
