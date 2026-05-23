"use client";

import { useEffect, useRef } from "react";
import styles from "./section.module.css";
import m from "./method.module.css";

const methods = [
  {
    num: "// 01",
    title: "Offer & creative",
    desc: "We start where everyone else finishes: with what you\u2019re actually selling and whether the ad makes someone want it. No \u201Clet\u2019s test 47 audiences\u201D until the offer\u2019s clear.",
  },
  {
    num: "// 02",
    title: "Landing & funnel",
    desc: "Cheap clicks don\u2019t matter if the page doesn\u2019t convert. We build landers that turn warm traffic into qualified calls \u2014 not \u201Cdownloads\u201D that go nowhere.",
  },
  {
    num: "// 03",
    title: "Measurement",
    desc: "We track to revenue, not form fills. Every week you get a one-page report showing what spent, what closed, and what to do next. No dashboards you\u2019ll never log into.",
  },
];

export function Method() {
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
    <section className={`${styles.section} ${styles.reveal}`} id="method" ref={ref}>
      <div className={styles.wrap}>
        <div className={styles.head}>
          <div className={styles.eyebrow}>01 &middot; Method</div>
          <h2 className={styles.heading}>
            Three things, done properly.{" "}
            <span className={styles.accent}>Nothing else.</span>
          </h2>
          <p className={styles.sub}>
            Most agencies sell you a buffet. We sell you the three courses that
            actually move pipeline &mdash; and we don&apos;t pretend the rest matters.
          </p>
        </div>
        <div className={m.grid}>
          {methods.map((item) => (
            <div key={item.num} className={m.card}>
              <div className={m.num}>{item.num}</div>
              <h3 className={m.title}>{item.title}</h3>
              <p className={m.desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
