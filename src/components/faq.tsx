"use client";

import { useEffect, useRef } from "react";
import styles from "./section.module.css";
import f from "./faq.module.css";

const faqs = [
  {
    q: "How much does this cost?",
    a: "Retainers start at \u00a31,500/month + VAT and scale with spend and complexity. We send a fixed quote after the first call \u2014 no \u201Cit depends\u201D pricing.",
  },
  {
    q: "Do you guarantee results?",
    a: "No-one credible does, and anyone who says they do is selling you something. What we do guarantee: you\u2019ll know what\u2019s working by week two, and if we can\u2019t move your numbers in 90 days, we\u2019ll tell you before you ask.",
  },
  {
    q: "Which channels do you run?",
    a: "Meta and LinkedIn for most B2B service businesses. Google Search where intent is high. We don\u2019t run TikTok, YouTube Shorts, or Pinterest for B2B \u2014 they rarely make economic sense.",
  },
  {
    q: "How long is the contract?",
    a: "30-day rolling. We\u2019ve never needed lock-ins to keep clients, and we\u2019re not going to start now.",
  },
  {
    q: "Do I need a minimum ad spend?",
    a: "\u00a32k/month minimum for paid platforms. Below that, the data\u2019s too thin to optimise on, and you\u2019d be better off doing organic for now.",
  },
  {
    q: "Who actually runs my account?",
    a: "Me. Jossiah. The same person on the sales call is the person in your ad accounts on Tuesday morning. No juniors, no account managers, no white-labelling.",
  },
];

export function FAQ() {
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
    <section className={`${styles.section} ${styles.reveal}`} id="faq" ref={ref}>
      <div className={styles.wrap}>
        <div className={styles.head}>
          <div className={styles.eyebrow}>04 &middot; Common questions</div>
          <h2 className={styles.heading}>
            The things people ask{" "}
            <span className={styles.accent}>before they book.</span>
          </h2>
        </div>
        <div className={f.list}>
          {faqs.map((item) => (
            <details key={item.q} className={f.item}>
              <summary className={f.question}>{item.q}</summary>
              <p className={f.answer}>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
