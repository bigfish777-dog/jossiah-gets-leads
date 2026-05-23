"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./section.module.css";
import a from "./about.module.css";

export function About() {
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
    <section className={`${styles.section} ${styles.reveal}`} id="about" ref={ref}>
      <div className={styles.wrap}>
        <div className={styles.head}>
          <div className={styles.eyebrow}>03 &middot; About</div>
          <h2 className={styles.heading}>
            One operator.{" "}
            <span className={styles.accent}>No account managers.</span>
          </h2>
          <p className={styles.sub}>
            You hire an agency, you get an agency. You hire Jossiah, you get
            Jossiah. The person running your ads is the person you&apos;ll be on the
            phone with.
          </p>
        </div>
        <div className={a.grid}>
          <div className={a.card}>
            <div className={a.photo}>
              <Image
                src="/jossiah-headshot.png"
                alt="Jossiah Pinto-Day, founder of Jossiah Gets Leads"
                fill
                sizes="(max-width: 900px) 100vw, 400px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <div className={a.name}>Jossiah Pinto-Day</div>
            <div className={a.role}>// Founder &middot; Paid Traffic Lead</div>
            <div className={a.stats}>
              <div>
                <div className={a.statNum}>&pound;3.2M</div>
                <div className={a.statLabel}>Spend managed</div>
              </div>
              <div>
                <div className={a.statNum}>7yr</div>
                <div className={a.statLabel}>Running ads</div>
              </div>
              <div>
                <div className={a.statNum}>40+</div>
                <div className={a.statLabel}>B2B accounts</div>
              </div>
            </div>
          </div>
          <div className={a.body}>
            <p>
              I spent years inside agencies watching paid traffic get sold as a
              buffet &mdash; Meta, Google, LinkedIn, TikTok, retargeting,
              lookalikes, the works. Most of it noise. Most of it billed.
            </p>
            <p>
              Jossiah Gets Leads exists because B2B coaches, consultants, and
              service teams don&apos;t need a buffet. They need ads that get the
              right person on a call, a landing page that doesn&apos;t waste them,
              and a weekly number that tells them whether it worked.
            </p>
            <p>That&apos;s it. That&apos;s the whole agency.</p>
            <p>
              If you want someone to make your dashboard look busy, hire someone
              else. If you want leads that turn into clients, we should talk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
