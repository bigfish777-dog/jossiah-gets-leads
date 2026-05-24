"use client";

import { useEffect, useRef } from "react";
import styles from "./section.module.css";
import f from "./faq.module.css";

const faqs = [
  {
    q: "Who actually runs my account?",
    a: "Me. Jossiah. The same person on the sales call is the person in your ad accounts on Tuesday morning. No juniors, no subcontractors, no white-labelling. If I can't give your account the time it needs, I won't take you on.",
  },
  {
    q: "Do I own my ad accounts and data?",
    a: "Yes, always. Your ad accounts, your landing pages, your creative assets, your lead data - all in your name, on your logins. If we stop working together, you keep everything. I'll even do a handover call to make sure you or your next provider can pick up where we left off.",
  },
  {
    q: "How much does this cost?",
    a: "Management fees start at \u00a31,500/month + VAT. Ad spend is separate and billed directly by the platforms to your account - I never mark up media costs. I send a fixed quote after the first call based on your channels and complexity. No \"it depends\" pricing.",
  },
  {
    q: "Do I need a minimum ad spend?",
    a: "\u00a32k/month minimum across platforms. Below that, the data's too thin to optimise meaningfully, and you'd be better off with organic and referrals until you're ready.",
  },
  {
    q: "How long is the contract?",
    a: "30-day rolling. I've never needed lock-ins to keep clients. If the work isn't delivering, you can leave at the end of any month with everything you own.",
  },
  {
    q: "Which channels do you run?",
    a: "Meta and LinkedIn for most B2B service businesses. Google Search where intent is high. I don't run TikTok, YouTube Shorts, or Pinterest for B2B - they rarely make economic sense at the spend levels most coaches and consultants are working with.",
  },
  {
    q: "Do you guarantee results?",
    a: "No. Anyone who guarantees a specific ROAS or lead volume before seeing your offer, your market, and your current data is lying to you. What I do guarantee: full transparency on what's working, what isn't, and what we're doing about it. If I can't move your numbers in 90 days, I'll tell you before you ask.",
  },
  {
    q: "What do your reports look like?",
    a: "One page, every Friday. What we spent, what came in, what we're changing next week. Plain English, not a 40-slide deck designed to look impressive while hiding that nothing's working. You'll also have live access to your dashboards if you want to check in between reports.",
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
    <section
      className={`${styles.section} ${styles.reveal}`}
      id="faq"
      ref={ref}
    >
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
