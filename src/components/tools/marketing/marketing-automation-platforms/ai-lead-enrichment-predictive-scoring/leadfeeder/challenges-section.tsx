export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The hidden cost of manual lead enrichment and predictive scoring is not just the time spent on cold
        outreach. It is the revenue lost every time a local prospect visits your site, signals strong
        interest, and leaves without a trace. For small businesses in Miami-Dade, Broward, and Palm Beach,
        this is not a distant problem. It is the Friday afternoon reality: sales teams spend hours dialing
        numbers from stale lists, chasing firms that never reply, while real buyers slip away unseen. The
        website, meant to bring in new business, becomes a black box, full of activity but silent on who is
        actually in the market.</p>
      <p className="text-base text-white shadow-text pt-3">
        This problem has a pattern. A team guesses which local accounting practice or medical office is ready
        to buy, but has no way to know when a real opportunity lands on the site. They wait for a contact form
        to come in, but nearly all visitors leave without filling one out. The cycle repeats: sales reps
        follow up on cold accounts, while the handful of warm, high-fit local buyers go unnoticed. The result
        is a pipeline full of dead ends, where 98% of high-intent website visitors remain anonymous and
        uncontacted. Every hour spent on the wrong lead is an hour lost on the right one.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual lead enrichment, searching LinkedIn, checking company websites, copying details into
        spreadsheets, eats up more time. Even when a visitor does fill out a form, the follow-up is either too
        early, when they are not ready to buy, or too late, after a competitor has already reached them. The
        team misses the moment when a buyer is actually researching, comparing, and ready to talk. This lag
        means salespeople call too soon or miss the window entirely, and marketing cannot prove which
        campaigns drive real revenue.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real cost is not just wasted effort. It is the missed revenue from high-intent local companies who
        were ready to engage but left because no one reached out at the right time. It is the frustration of
        seeing competitors win accounts that were already on your site, reading your pricing, and comparing
        your services. It is the mounting ad spend chasing broad audiences while the best-fit leads remain
        invisible. For a small business owner, the toll is felt in lost deals, longer sales cycles, and the
        feeling that the team is always a step behind.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is where Leadfeeder breaks the pattern. Instead of letting sales teams spend hours guessing who
        is in a buying cycle, Leadfeeder triggers instant notifications as soon as a local business from
        Miami-Dade, Broward, or Palm Beach visits the site. It does not wait for a form fill or a cold call.
        It reveals exactly which companies are on your website, what pages they review, and how often they
        come back. This means the team acts on real buying signals, not on hope or outdated lists.</p>
      <p className="text-base text-white shadow-text pt-3">
        Leadfeeder removes the guesswork by showing the exact behavior timeline: which case studies, service
        plans, or pricing tiers a prospect reviewed, and how recently. It scores visitor intent automatically,
        so the team knows which accounts are warm, how engaged they are, and when to reach out. No more wasted
        calls on cold leads. No more missed signals from local buyers who are ready to talk.</p>
      <p className="text-base text-white shadow-text pt-3">
        By filtering out junk traffic, like residential internet providers, and focusing only on real B2B
        corporate matches, Leadfeeder ensures the team’s time is spent where it matters. It integrates with
        the tools small businesses already use, creating pipeline records automatically for high-fit accounts.
        The result is a pipeline filled with real opportunities, a sales team working on live buying signals,
        and marketing able to prove which efforts drive pipeline growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing This by Hand
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing This by Hand
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
