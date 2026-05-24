"use client";

import { useEffect, useRef } from "react";
import styles from "./section.module.css";
import f from "./faq.module.css";

const faqs = [
  {
    q: "Who actually runs my account?",
    a: "Me. Jossiah. The same person on the sales call is the person in your ad accounts on Tuesday morning. No juniors, no subcontractors, no white-labelling. That's why the client count stays small.",
  },
  {
    q: "Do I own my ad accounts and data?",
    a: "Yes, always. Ad accounts, landing pages, creative assets, lead data - all in your name, on your logins. If we stop working together, you keep everything. I'll do a handover call to make sure you or your next provider can pick up where I left off.",
  },
  {
    q: "Why a 3-month minimum?",
    a: "Paid traffic needs time to optimise. Month 1 is setup and learning. Month 2 is optimisation. Month 3 is where you start seeing the numbers settle. Judging a campaign after 4 weeks is like judging a diet after one meal. After the initial 3 months, it's month-to-month with 30 days' notice.",
  },
  {
    q: "What's the total monthly investment?",
    a: "\u00a35,000 + VAT per month management fee. Ad spend is separate and billed directly to you by Meta, Google, or LinkedIn - I never mark up media costs. Most clients spend \u00a32k-5k/month on ads depending on channels and scale.",
  },
  {
    q: "Which channels do you run?",
    a: "Meta and LinkedIn for most expert businesses. Google Search where intent is high. The channel mix depends on where your buyers are - we figure that out in the strategy session, not before.",
  },
  {
    q: "Do you guarantee results?",
    a: "No. Anyone who guarantees a specific ROAS or lead volume before seeing your offer, your market, and your data is lying to you. What I guarantee: full transparency on what's working, what isn't, and what I'm doing about it. Every Friday, on video.",
  },
  {
    q: "What happens on the strategy session?",
    a: "Founding clients get a full-day session at the studio. We map your offer, your funnel, your current numbers, and build the campaign strategy together. You leave with a clear plan. I leave with everything I need to start building.",
  },
  {
    q: "What do I need to have in place before we start?",
    a: "A proven offer that converts when people see it. A sales process for when leads come in. A funnel tool (GoHighLevel, Kajabi, whatever you use). And the budget - both for management and ad spend. I don't need you to have perfect ads or landing pages - that's my job.",
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
