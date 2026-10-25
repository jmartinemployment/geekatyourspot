import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Manual <GlossaryLink slug="lead-generation">lead generation</GlossaryLink> at this stage is expensive, slow,
        and risky. When a small business in South Florida pushes ad spend above $500 a month, two problems hit at
        once: cost-per-lead spikes out of control, and the team cannot keep up with the content demands. The result
        is wasted budget, missed leads, and a sales pipeline that never gets predictable.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first pain is the scaling trap. Every time you try to grow your pipeline by increasing ad spend, the
        algorithms behind Meta and Google Ads break down. Instead of rewarding more investment, they push your
        cost-per-lead higher. You end up paying more for each new contact, but the quality of those leads does not
        improve. Your profit margin shrinks, and the growth you planned stalls. This is not a rare glitch. It is a
        built-in penalty for teams without automated guardrails.</p>
      <p className="text-base text-white shadow-text pt-3">
        The second pain is the creative bottleneck. Ad platforms want constant novelty, new images, copy, and
        layouts, to keep performance up. But a small team cannot create enough fresh content to keep up with this
        demand. As soon as your ads start to repeat, performance drops. The same prospects see the same ads, get
        bored, and stop clicking. Your cost-per-lead rises again, and you burn through budget with little to show
        for it. Even if you can afford a designer or copywriter, the manual process is still too slow for the pace
        of digital campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data fragmentation adds another layer of waste. Your customer data is scattered across old spreadsheets,
        isolated CRMs, and half-finished lists. When you upload these lists to ad networks, they often fail to match
        correctly. That means your ads show up for people who already bought from you, or for cold leads who have no
        interest. You spend money on <GlossaryLink slug="impressions">impressions</GlossaryLink> that have no chance
        of converting. Worse, you cannot target upsell or cross-sell offers at the right time, because you do not
        know when a past buyer is ready to purchase again.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual segmentation only makes this worse. If you try to divide your audience by hand, writing rules to
        separate hot prospects from cold ones, it is slow, error-prone, and quickly out of date. A team member
        spends hours building lists and setting up rules, but by the time the campaign runs, the data has already
        shifted. Leads slip through the cracks, and your team spends more time cleaning up mistakes than closing
        deals.</p>
      <p className="text-base text-white shadow-text pt-3">
        The result is a double loss. You pay too much for each lead, and you miss out on the best opportunities
        because your systems cannot keep up. Every week, your team spends hours on manual list cleaning, campaign
        setup, and creative updates, time that could be spent on real sales activities. The operational ceiling is
        real: you cannot scale your pipeline, and every attempt to grow just adds more complexity and cost. Small
        businesses in West Palm Beach, Broward, and Miami-Dade counties are stuck in this loop, unable to break out
        with manual tools alone.</p>
      <p className="text-base text-white shadow-text pt-3">
        Even when you try to solve these problems with scripts or automation, most small businesses do not have the
        data science or coding talent to write custom solutions. You are left exposed to sudden cost spikes,
        campaign breakdowns, and creative fatigue. The only way out is to automate the analysis, segmentation, and
        creative cycles in a way that keeps up with the pace of digital marketing. Without this, you keep paying
        more for less, and your sales pipeline stays unpredictable.</p>
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
            <div className="col-span-12">{body}</div>
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
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
