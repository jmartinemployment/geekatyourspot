import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Manual Budget Ad Copy &amp; Message Validation drains small teams in South Florida of both money and time.
        Every week, business owners spend precious budget on ads that miss their target, lose leads to confusing
        forms, and waste hours trying to understand which message works. Without the right validation, most of that
        spend is gone before you see a single sale. The biggest cost is not just the dollars lost to junk clicks or
        irrelevant audiences, it is the time you never get back and the sales that never happen.</p>
      <p className="text-base text-white shadow-text pt-3">
        When you run ads on a micro-budget, under $500 a month, the margin for error is zero (<a id={`tools-marketing-budget-ad-copy-message-validation-plai-challenges-source-plai-io${idSuffix}`} href="https://www.plai.io/features/saas-configurator" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Plai</a>,
        as of Oct 23, 2026). A single day of broad-match keyword mistakes can wipe out a week’s worth of spend.
        Google and Meta do not care about your local boundaries; their default settings will serve your ads to
        anyone, anywhere, unless you lock them down yourself. The problem is, most owners do not have the time or
        the technical skill to set up <GlossaryLink slug="conversion-tracking">conversion tracking</GlossaryLink>,
        segment audiences, or manually test which ad copy actually converts. Even if you try, dashboards are
        confusing, and a missed setting can mean your budget is gone on out-of-town clicks before you even realize
        it.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is not just about wasted clicks. It is about missed sales. When an interested local prospect clicks
        your ad and lands on a form that takes too long or gets no response, that lead is gone. Without automated
        validation, you have no way to know which message or offer actually works. You are left guessing, and
        guessing is expensive. If you leave campaigns on autopilot, the platforms will burn through your money on
        the cheapest, least valuable clicks, informational searches, accidental taps, or people far outside your
        service area.</p>
      <p className="text-base text-white shadow-text pt-3">
        Trying to solve this by hiring a human ad manager is not realistic for most small businesses. The retainer
        alone would eat up your entire monthly budget, leaving nothing for the ads themselves. That means you are
        stuck with a do-it-yourself approach, which quickly turns into a full-time job of tweaking settings, pulling
        reports from different platforms, and trying to figure out what the numbers actually mean. Even if you
        dedicate hours each week, you are still exposed to errors, one missed pixel, one broad audience, and your
        spend is gone.</p>
      <p className="text-base text-white shadow-text pt-3">
        The hidden cost is the opportunity you lose. Every hour spent trying to piece together results from
        disconnected dashboards is an hour not spent serving customers or growing your business. The platforms’
        built-in tools are not designed for local budgets or non-technical owners. They are built for scale, not
        precision. That is why so many small teams end up with ad accounts full of spend but no sales, and a sense
        that digital marketing is just a black hole for their money.</p>
      <p className="text-base text-white shadow-text pt-3">
        Even when you try to optimize, the complexity of the tools works against you. Setting up conversion tracking
        across Google and Meta requires technical steps that most owners cannot do without help. Getting the right
        audience segments means understanding layers of targeting, exclusions, and behaviors. Testing messages or
        creative means building multiple versions, tracking results, and making sense of what the data actually
        says. Without automation, these jobs pile up until something breaks, usually your budget.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real-world result is a cycle: you launch ads, see little or no return, try to tweak settings, get lost
        in the dashboards, and eventually give up or accept poor results as the cost of doing business. Small
        businesses in Miami-Dade, Broward, and West Palm Beach cannot afford that cycle. With <GlossaryLink slug="daily-budget">daily
        budgets</GlossaryLink> as low as $10, every dollar counts, and every mistake is money you do not get back (<a id={`tools-marketing-budget-ad-copy-message-validation-plai-challenges-source-plai-io-2${idSuffix}`} href="https://www.plai.io/post/learn-how-to-increase-traffic-to-your-website" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Plai</a>,
        as of Oct 23, 2026).</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
