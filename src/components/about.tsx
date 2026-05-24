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
    <section
      className={`${styles.section} ${styles.reveal}`}
      id="about"
      ref={ref}
    >
      <div className={styles.wrap}>
        <div className={styles.head}>
          <div className={styles.eyebrow}>03 &middot; About</div>
          <h2 className={styles.heading}>
            One operator.{" "}
            <span className={styles.accent}>No account managers.</span>
          </h2>
          <p className={styles.sub}>
            You hire an agency, you get an agency. You hire Jossiah, you get
            Jossiah. The person running your ads is the person you&apos;ll be
            on the phone with.
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
            <div className={a.role}>// Founder &middot; Paid Traffic</div>
          </div>
          <div className={a.body}>
            <p>
              I&apos;ve spent years as the in-house media buyer for
              established coaching and sales training businesses in the UK. I&apos;ve
              run their Meta campaigns, their Google ads, their YouTube
              pre-rolls. I&apos;ve sat in the sales room and watched which leads
              actually convert and which ones waste everyone&apos;s time.
            </p>
            <p>
              That&apos;s the difference. Most media buyers never see what
              happens after the click. I&apos;ve closed deals myself. I know
              what a qualified lead looks like because I&apos;ve been on the
              other end of the call.
            </p>
            <p>
              Jossiah Gets Leads exists because coaches, consultants, and B2B
              service teams keep telling me the same story: they hired an
              agency, got impressive reports, and never saw a return. The
              agency didn&apos;t understand their business, didn&apos;t
              understand their buyer, and didn&apos;t care enough to learn.
            </p>
            <p>
              I already know your world. I&apos;ve been living in it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
