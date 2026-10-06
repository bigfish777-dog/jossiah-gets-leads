"use client";

import { useEffect, useState } from "react";
import s from "./audit.module.css";

/*
 * Example audit findings card. Shows two High and two Medium rows at a time
 * and swaps one row every few seconds from the pools below, so visitors see
 * the range of things an audit turns up. Static for reduced-motion users.
 */
const HIGH = [
  "No Conversions API, so Meta is optimising on patchy browser-only data",
  "Event Match Quality rated poor, so Meta can't tie leads back to the people who saw your ads",
  "Wrong campaign objective, so ad sets are stuck in 'Learning limited' and never optimise for leads",
  "Lead event firing twice on the thank-you page, so reported cost per lead looks half what it really is",
  "Budget spread across too many ad sets for any of them to exit learning",
];

const MEDIUM = [
  "One creative for every placement, with text cut off by the Reels and Stories safe zones",
  "Same three creatives running for months while frequency keeps climbing",
  "Retargeting still showing ads to people who've already booked a call",
];

function nextFrom(pool: string[], shown: number[]) {
  let i = (Math.max(...shown) + 1) % pool.length;
  while (shown.includes(i)) i = (i + 1) % pool.length;
  return i;
}

export function FindingsMock() {
  const [hi, setHi] = useState([0, 1]);
  const [md, setMd] = useState([0, 1]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let step = 0;
    const id = window.setInterval(() => {
      const slot = Math.floor(step / 2) % 2;
      if (step % 2 === 0) {
        setHi((h) => h.map((v, k) => (k === slot ? nextFrom(HIGH, h) : v)));
      } else {
        setMd((m) => m.map((v, k) => (k === slot ? nextFrom(MEDIUM, m) : v)));
      }
      step += 1;
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  const rows: [string, string][] = [
    ...hi.map((i): [string, string] => ["High", HIGH[i]]),
    ...md.map((i): [string, string] => ["Medium", MEDIUM[i]]),
  ];

  return (
    <figure className={s.mock}>
      <div className={s.mockHead}>
        <span>Audit findings</span>
        <span>Example</span>
      </div>
      <ol className={s.findings} aria-live="off">
        {rows.map(([level, text]) => (
          <li key={text} className={level === "High" ? s.rowHigh : undefined}>
            <span className={level === "High" ? s.tagHigh : s.tagMed}>{level}</span>
            <span>{text}</span>
          </li>
        ))}
      </ol>
      <figcaption>An example of the action list you get, ranked by impact.</figcaption>
    </figure>
  );
}
