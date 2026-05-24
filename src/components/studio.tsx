"use client";

import { useEffect, useRef } from "react";
import styles from "./studio.module.css";

export function Studio() {
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
    <section className={`${styles.section} ${styles.reveal}`} ref={ref}>
      <div className={styles.wrap}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <div className={styles.eyebrow}>// Included in every engagement</div>
            <h2 className={styles.heading}>
              We film you.
              <br />
              <span className={styles.accent}>No extra charge.</span>
            </h2>
            <p className={styles.desc}>
              You come to our studio for a full shoot day. We film ad
              creative, talking heads, testimonial-style content - whatever
              the campaigns need. Our editor cuts the footage. You walk away
              with months of video assets.
            </p>
            <p className={styles.desc}>
              Most agencies charge &pound;1,500+ for a single shoot day. It&apos;s
              built into the Expert Growth Engine because ads with your face
              in them outperform stock footage every time.
            </p>
          </div>
          <div className={styles.visual}>
            <div className={styles.clapboard}>
              <div className={styles.clapTop}>
                <div className={styles.clapStripes} />
              </div>
              <div className={styles.clapBody}>
                <div className={styles.clapRow}>
                  <span className={styles.clapLabel}>PRODUCTION</span>
                  <span className={styles.clapVal}>JGL STUDIO</span>
                </div>
                <div className={styles.clapRow}>
                  <span className={styles.clapLabel}>CLIENT</span>
                  <span className={styles.clapVal}>YOUR NAME HERE</span>
                </div>
                <div className={styles.clapRow}>
                  <span className={styles.clapLabel}>DATE</span>
                  <span className={styles.clapVal}>YOUR SHOOT DAY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
