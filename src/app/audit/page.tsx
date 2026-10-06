import type { Metadata } from "next";
import Image from "next/image";
import s from "./audit.module.css";

/*
 * Ad audit landing page (/audit).
 * PRICE and TURNAROUND are used everywhere on the page - change them here.
 * Every buy button goes to /audit/order, our own order page with Stripe's
 * card form embedded. The amount itself lives in /api/audit-checkout.
 */
const PRICE = "£199 + VAT";
const TURNAROUND = "72 hours";

function BuyButton({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <a href="/audit/order" className={className}>
      {children}
    </a>
  );
}

export const metadata: Metadata = {
  title: "Ad audit - Jossiah Gets Leads",
  description: `Six years running the ads for two of the UK's most popular training organisations. Now I'll audit yours. A recorded walkthrough, written report and action list within 72 hours of access. ${PRICE}.`,
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

/* Illustrative mockups of the deliverables. Example content, labelled as such. */
function FindingsMock() {
  const rows = [
    ["High", "Lead event firing twice on the thank-you page, so reported cost per lead looks half what it really is"],
    ["High", "Budget spread across too many ad sets for any of them to exit learning"],
    ["Medium", "Same three creatives running for months while frequency keeps climbing"],
    ["Medium", "Retargeting still showing ads to people who've already booked a call"],
  ];
  return (
    <figure className={s.mock}>
      <div className={s.mockHead}>
        <span>Audit findings</span>
        <span>Example</span>
      </div>
      <ol className={s.findings}>
        {rows.map(([level, text]) => (
          <li key={text}>
            <span className={level === "High" ? s.tagHigh : s.tagMed}>{level}</span>
            <span>{text}</span>
          </li>
        ))}
      </ol>
      <figcaption>An example of the action list you get, ranked by impact.</figcaption>
    </figure>
  );
}

function LoomMock() {
  return (
    <figure className={s.mock}>
      <div className={s.loom}>
        <div className={s.loomBar}>
          <span />
          <span />
          <span />
        </div>
        <div className={s.loomScreen}>
          {[72, 54, 88, 40, 66, 58].map((w, i) => (
            <div key={i} className={s.loomRow}>
              <i style={{ width: `${w}%` }} />
              <b />
            </div>
          ))}
          <div className={s.loomPlay} aria-hidden="true" />
          <div className={s.loomFace}>
            <Image src="/jossiah-face.jpg" alt="" fill sizes="96px" />
          </div>
        </div>
      </div>
      <figcaption>Your recorded walkthrough: me, inside your account, talking you through what I found.</figcaption>
    </figure>
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
                  Six years running the ads for two of the UK&apos;s most popular
                  training organisations.{" "}
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

        <section className={`${s.section} ${s.story} ${s.light}`}>
          <div className={s.wrap}>
            <h2 className={`${s.h2} ${s.storyTitle}`}>Hi, I&apos;m Jossiah.</h2>

            <div className={s.chapter}>
              <div className={s.chapterText}>
                <h3 className={s.h3}>Obsessed with the numbers</h3>
                <p>{"For the past 6 years, I’ve been running the paid traffic for a couple of the UK’s most popular training organisations."}</p>
                <p>{"Truth is, I didn’t have much of a clue what I was doing when I started."}</p>
                <p>
                  <strong>
                    But I became <em>obsessed</em> with the numbers.
                  </strong>
                </p>
                <p>{"Consuming courses and trainings like no one’s business, and testing every idea and strategy I could think of, forever trying to find a way of getting better results, faster."}</p>
                <p>{"And I like to think I’ve gotten pretty good at it."}</p>
                <p>
                  {"I’ve managed "}
                  <strong>seven figures in ad spend</strong>
                  {", generated "}
                  <strong>hundreds of thousands of leads</strong>
                  {", and helped bring in "}
                  <strong>tens of millions of pounds in new revenue</strong>
                  {"."}
                </p>
                <p>
                  {"But most importantly, "}
                  <span className={s.u}>{"I’ve been ‘on the tools’."}</span>
                </p>
              </div>
              <figure className={s.chapterMedia}>
                <div className={s.eventFrame}>
                  <Image
                    src="/jossiah-event.jpg"
                    alt="Jossiah at a live event, working on his laptop while colleagues look on"
                    fill
                    sizes="(max-width: 900px) 100vw, 560px"
                    style={{ objectFit: "cover", objectPosition: "56% 50%" }}
                  />
                </div>
                <figcaption>{"Mid-event, laptop open. Where I’m happiest."}</figcaption>
              </figure>
            </div>

            <div className={`${s.chapter} ${s.flip}`}>
              <div className={s.chapterText}>
                <h3 className={s.h3}>Happier on the tools</h3>
                <p>{"For the past couple of years, countless people have told me I should be asking to get on stage. To share my insights and strategies with the 1,000s of people turning up at the events those organisations put on each year."}</p>
                <p>{"But, honestly, that doesn’t really do anything for me."}</p>
                <p>{"That’s not to say there’s anything wrong with wanting to get on stage, or to teach people about this stuff."}</p>
                <p>
                  {"But for me, the benefit of spending all my time actually ‘"}
                  <em>doing</em>
                  {"’ the stuff and honing my craft, well, "}
                  <strong>{"that’s worth its weight in gold."}</strong>
                </p>
              </div>
              <blockquote className={s.pull}>
                <p>{"I’d rather be in the background, MacBook open, seeing if I can’t nudge the ‘cost per lead’ down by a few pence on that latest ad campaign."}</p>
              </blockquote>
            </div>

            <div className={s.chapter}>
              <div className={s.chapterText}>
                <h3 className={s.h3}>Within 15 minutes, it dawned on me</h3>
                <p>{"Because over the past 12 months or so, a handful of business owners have asked me if I could take a look at their ads."}</p>
                <p>{"Look under the bonnet, if you will. Tell them if they’re overlooking anything obvious."}</p>
                <p>{"I said “no” to the first few requests."}</p>
                <p>{"I figured they’d already be doing everything right, and there’s little value I could actually offer."}</p>
                <p>{"But one day, while I was waiting for a few ads to be approved, I figured there’d be no harm in taking a look."}</p>
                <p>{"And within 15 minutes inside their Ads Manager, it dawned on me…"}</p>
                <p className={s.big}>Not everyone knew this stuff!</p>
                <p>
                  {"I’ve run a few more audits like that since and, without fail, I’ve been able to spot a good number of "}
                  <span className={s.u}>{"‘hidden’ leverage points"}</span>
                  {" that were destroying their results."}
                </p>
                <p>{"Obviously, not everyone did anything with my advice."}</p>
                <p>{"But the ones that did saw the impact almost immediately."}</p>
              </div>
              <FindingsMock />
            </div>

            <div className={s.statementWrap}>
              <p className={s.statement}>
                Cheaper leads. Better leads. <span>More leads.</span>
              </p>
              <p>{"The stuff that makes a tangible difference to how quickly you make a return from your ads, and a result that shows up on your business’s bottom line."}</p>
            </div>

            <div className={`${s.chapter} ${s.flip}`}>
              <div className={s.chapterText}>
                <h3 className={s.h3}>Which brings us to now</h3>
                <p>{"After 6 fantastic years with those organisations - where I was fortunate enough to work with some truly incredible people, and learn more than I ever could have wished for - I finally took the leap and decided to go out ‘on my own’."}</p>
                <p>{"And while I’ve already got my first few clients lined up, I figured it’d be cool to have an impact on a greater number of businesses, before I get bogged down in the ‘running ads’ side of things again."}</p>
                <p>
                  {"Which is why I’m taking my "}
                  <strong>proven Ads Audit process</strong>
                  {", and offering it to a small handful of businesses who are:"}
                </p>
                <ul className={s.letterList}>
                  <li>{"Already running ads (either on Meta or Google, or both!)"}</li>
                  <li>{"Not satisfied with their results, or feeling like they could be getting more from them"}</li>
                  <li>{"Interested in having me identify the gaps and opportunities for them"}</li>
                </ul>
              </div>
              <LoomMock />
            </div>

            <div className={s.chapter}>
              <div className={s.chapterText}>
                <h3 className={s.h3}>A launch offer, for 10 businesses</h3>
                <p>
                  {"Now, if I were pricing this service in a few months’ time, it’d be a "}
                  <strong>4-figure investment</strong>
                  {"."}
                </p>
                <p>{"But while I’ve got a bit of time on my hands, I don’t want price to be a barrier for the businesses who could genuinely benefit from it."}</p>
                <p>
                  {"Which is why I’m running a ‘launch offer’, and "}
                  <span className={s.u}>dropping the investment to be just enough to cover my time</span>
                  {"."}
                </p>
                <p className={s.aside}>
                  <em>{"(I have to go ‘deep’ into your ad accounts to make this work - and I don’t use AI for this - so it’s not a 5-minute job!)"}</em>
                </p>
                <p>{"Needless to say, I haven’t got the capacity to do dozens of these audits."}</p>
                <p>
                  {"In fact, I’m only making this offer available to "}
                  <strong>the first 10 businesses who register</strong>
                  {"."}
                </p>
                <p>{"And after that, you won’t see this offer from me again any time soon - and nowhere near this price point."}</p>
                <p>{"So if you’re interested in having me find the hidden leverage points in your ad account, don’t hang about."}</p>
                <p>{"Hit the button below to secure your spot, and I’ll be in touch."}</p>
                <p className={s.sign}>
                  Jossiah
                  <span>Jossiah Pinto-Day, founder of Jossiah Gets Leads</span>
                </p>
                <BuyRow note={`${PRICE}. First 10 businesses only.`} />
              </div>
              <Ticket />
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
