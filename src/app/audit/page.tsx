import type { Metadata } from "next";
import Image from "next/image";
import s from "./audit.module.css";

/*
 * Ad audit landing page (/audit).
 * PRICE and TURNAROUND are used everywhere on the page - change them here.
 * Every buy button posts to /api/audit-checkout, which hands the buyer to
 * Stripe Checkout. The amount itself lives in that route.
 */
const PRICE = "£199 + VAT";
const TURNAROUND = "72 hours";

function BuyButton({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <form action="/api/audit-checkout" method="post" className={s.buyForm}>
      <button type="submit" className={className}>
        {children}
      </button>
    </form>
  );
}

export const metadata: Metadata = {
  title: "Ad audit - Jossiah Gets Leads",
  description: `Six years running the ads behind Expert Empires. Now I'll audit yours. A recorded walkthrough, written report and action list within 72 hours of access. ${PRICE}.`,
  robots: { index: false, follow: false },
};

function Ticket({ stub = false }: { stub?: boolean }) {
  return (
    <div className={`${s.ticket} ${stub ? s.stub : ""}`}>
      <div className={s.ticketHead}>
        <span>Ad audit</span>
        <span>Fixed price</span>
      </div>
      <dl className={s.ticketRows}>
        <div>
          <dt>Platforms</dt>
          <dd>Meta, Google, YouTube</dd>
        </div>
        <div>
          <dt>You get</dt>
          <dd>
            Recorded walkthrough
            <br />
            Written report
            <br />
            Prioritised action list
          </dd>
        </div>
        <div>
          <dt>Turnaround</dt>
          <dd>{TURNAROUND} from access</dd>
        </div>
        <div>
          <dt>Done by</dt>
          <dd>Jossiah, personally</dd>
        </div>
      </dl>
      <div className={s.ticketTotal}>
        <span>Total</span>
        <span>{PRICE}</span>
      </div>
      {stub && (
        <BuyButton className={`${s.btn} ${s.ticketBtn}`}>
          Get my ad audit <span aria-hidden="true">&#x2197;</span>
        </BuyButton>
      )}
    </div>
  );
}

function BuyRow({ note }: { note: string }) {
  return (
    <div className={s.ctaRow}>
      <BuyButton className={s.btn}>
        Get my ad audit <span aria-hidden="true">&#x2197;</span>
      </BuyButton>
      <span className={s.ctaNote}>{note}</span>
    </div>
  );
}

const checks = [
  {
    title: "The account.",
    body: "How it's structured, where the budget's going, and what's eating spend without earning it.",
  },
  {
    title: "Who you're reaching.",
    body: "Audiences, targeting and placements, and whether they match the people who actually buy from you.",
  },
  {
    title: "The ads themselves.",
    body: "Hooks, scripts, creative and copy, and how worn out they've got.",
  },
  {
    title: "What happens after the click.",
    body: "The landing page, the form and the first follow-up, because that's where a lot of leads go missing.",
  },
  {
    title: "The numbers.",
    body: "Whether your tracking is telling you the truth, and which numbers you should actually be watching.",
  },
];

const faqs = [
  {
    q: "Do I need to give you my login?",
    a: "No. You add me as a partner from your Meta business settings or your Google Ads account. It takes a couple of minutes, I'll walk you through it, and you can remove me whenever you like.",
  },
  {
    q: "I already have an agency. Is this awkward?",
    a: "It doesn't need to be. Lots of businesses want a second pair of eyes on their ads. The report's yours, so share it with them or don't.",
  },
  {
    q: "What if my ads are already doing well?",
    a: "Then I'll tell you, and show you where the next gains are. If you're genuinely happy with your results, you probably don't need this.",
  },
  {
    q: `Does ${PRICE} cover more than one platform?`,
    a: "Yes. It covers one business, across whichever of Meta, Google and YouTube you're running.",
  },
  {
    q: "Why so cheap?",
    a: "Because I'd rather you see how I work before you decide whether you want more of it. Some people take the action list and run with it themselves. That's fine by me.",
  },
];

export default function AuditPage() {
  const lede = `Give me access to your Meta, Google or YouTube ads. Within ${TURNAROUND} you'll have a recorded walkthrough, a written report and a list of exactly what I'd change, in the order I'd change it.`;

  return (
    <div className={s.page}>
      <header className={s.bar}>
        <div className={s.barRow}>
          <span className={s.logo}>
            JOSSIAH GETS<span aria-hidden="true">&#x2197;</span>LEADS
          </span>
          <BuyButton className={s.barCta}>
            Get my ad audit<span className={s.barPrice}> &middot; {PRICE}</span>
          </BuyButton>
        </div>
      </header>

      <main>
        <section className={s.hero}>
          <div className={s.wrap}>
            <div className={s.heroGrid}>
              <div>
                <h1 className={s.h1}>
                  Six years running the ads behind Expert Empires.{" "}
                  <span className={s.mint}>Now I&apos;ll audit yours.</span>
                </h1>
                <p className={s.lede}>{lede}</p>
                <BuyRow note={`${PRICE}. One business, every platform you run.`} />
              </div>
              <figure className={s.heroPhoto}>
                <div className={s.heroPhotoFrame}>
                  <Image
                    src="/jossiah-headshot.png"
                    alt="Jossiah Pinto-Day"
                    fill
                    loading="eager"
                    fetchPriority="high"
                    sizes="(max-width: 900px) 90vw, 440px"
                    style={{ objectFit: "cover", objectPosition: "center 25%" }}
                  />
                </div>
                <figcaption>Jossiah Pinto-Day, founder</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className={`${s.section} ${s.letterSection} ${s.light}`}>
          <div className={s.wrap}>
            <div className={s.letterSolo}>
              <div className={s.letterBody}>
                <h2 className={s.h2}>Hi, I&apos;m Jossiah.</h2>
                <p>
                  For six years I was Head of Lead Generation at Expert Empires
                  and Elite Closing Academy.
                </p>
                <p>
                  My job was to fill rooms. Big live events, small workshops,
                  webinars, challenges, mastermind programmes. Whatever was
                  launching, the leads came from ads I built and ran across
                  Meta, Google and YouTube.
                </p>
                <p>
                  I&apos;ve worked the sales side too, so the leads I care about
                  are the ones that turn up, book the call and buy.
                </p>
                <p>
                  Now I&apos;ve gone out on my own. Before anyone pays me to run
                  their ads, I&apos;d rather show them how I think. That&apos;s
                  what this audit is: my eyes on your account, and a straight
                  answer on what&apos;s holding it back.
                </p>
                <p className={s.sign}>
                  Jossiah Pinto-Day
                  <span>Founder, Jossiah Gets Leads</span>
                </p>
                <BuyRow note={PRICE} />
              </div>
            </div>
          </div>
        </section>

        <section className={`${s.section} ${s.lightAlt}`}>
          <div className={s.wrap}>
            <div className={s.split}>
              <h2 className={s.h2}>
                This is for you if your ads are already running.
              </h2>
              <div>
                <ul className={s.ticks}>
                  <li>You&apos;re spending on Meta, Google or YouTube right now.</li>
                  <li>
                    You&apos;re getting leads, but not enough of them, not
                    cheap enough, or not the right people.
                  </li>
                  <li>
                    You&apos;ve got a feeling something&apos;s off, and you want
                    someone who&apos;s done this at scale to find it.
                  </li>
                </ul>
                <p className={s.aside}>
                  If you haven&apos;t started running ads yet, there&apos;s
                  nothing for me to look at. Save your money for now.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${s.section} ${s.light}`}>
          <div className={s.wrap}>
            <div className={s.split}>
              <h2 className={s.h2}>
                I follow your money from the first impression to the booked
                call.
              </h2>
              <ol className={s.path}>
                {checks.map((c, i) => (
                  <li key={c.title}>
                    <span className={s.step}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p>
                      <strong>{c.title}</strong> {c.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className={`${s.section} ${s.lightAlt}`}>
          <div className={s.wrap}>
            <div className={s.split}>
              <h2 className={s.h2}>
                Three things land in your inbox within {TURNAROUND} of access.
              </h2>
              <div>
                <dl className={s.gets}>
                  <div>
                    <dt>Video</dt>
                    <dd>
                      <strong>A recorded walkthrough.</strong> Me, inside your
                      account, talking you through what I found. Watch it
                      whenever suits you.
                    </dd>
                  </div>
                  <div>
                    <dt>Report</dt>
                    <dd>
                      <strong>A written report.</strong> Everything from the
                      video, written down so you can share it with your team or
                      your agency.
                    </dd>
                  </div>
                  <div>
                    <dt>Actions</dt>
                    <dd>
                      <strong>A prioritised action list.</strong> What to fix
                      first, what can wait, and what to stop doing altogether.
                    </dd>
                  </div>
                </dl>
                <BuyRow note={`${PRICE}. One business, every platform you run.`} />
              </div>
            </div>
          </div>
        </section>

        <section className={`${s.section} ${s.tight} ${s.light}`}>
          <div className={s.wrap}>
            <h2 className={s.h2}>How it works</h2>
            <ol className={s.how}>
              <li>
                <span className={s.step}>01</span>
                <p>Pay {PRICE} below.</p>
              </li>
              <li>
                <span className={s.step}>02</span>
                <p>
                  Tell me about your business and give me access. I&apos;ll
                  send simple steps. You never share a password, and you can
                  remove my access whenever you like.
                </p>
              </li>
              <li>
                <span className={s.step}>03</span>
                <p>
                  Within {TURNAROUND} of getting access, your walkthrough,
                  report and action list arrive.
                </p>
              </li>
            </ol>
            <p className={s.after}>
              If you&apos;d like help putting it right, we can talk about that.
              If not, everything I send is yours to keep and use however you
              want.
            </p>
          </div>
        </section>

        <section className={`${s.section} ${s.lightAlt}`}>
          <div className={s.wrap}>
            <div className={s.split}>
              <h2 className={s.h2}>Questions people ask</h2>
              <div className={s.faq}>
                {faqs.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={`${s.section} ${s.order}`} id="order">
          <div className={s.wrap}>
            <div className={s.heroGrid}>
              <div>
                <h2 className={s.h2}>Get my eyes on your ads.</h2>
                <p className={s.lede}>
                  {`One business. Meta, Google and YouTube. Your walkthrough, report and action list within ${TURNAROUND} of access, and they're yours to keep whatever you decide next.`}
                </p>
              </div>
              <Ticket stub />
            </div>
          </div>
        </section>
      </main>

      <footer className={s.footer}>
        <div className={s.wrap}>
          <span>Jossiah Gets Leads Ltd</span>
          <a href="mailto:hello@jossiahgetsleads.com">
            hello@jossiahgetsleads.com
          </a>
        </div>
      </footer>
    </div>
  );
}
