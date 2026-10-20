import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For most small businesses in Miami-Dade, Broward, and Palm Beach, the lead pipeline is a black hole.
        Money goes into ads, time goes into outreach, but the results are guesswork. The root cause is
        invisible: almost every high-intent visitor to your website leaves no trace. Teams spend their week
        chasing cold contacts, while the people who are actually ready to buy, those comparing pricing,
        checking case studies, or returning for a third or fourth visit, never show up in
        the&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>. This is not a niche problem. It is the default.
        Up to 98% of website visitors never fill out a form. That means the true buyers, the ones who are a
        good fit and have real budget, are the ones you never see.</p>
      <p className="text-md text-white shadow-text pt-3">
        The result is a cycle of wasted effort. Salespeople spend their days cold-calling lists that go
        nowhere. Marketing teams build campaign after campaign, but can’t prove which one drove a real
        conversation or closed deal. The few leads that do come in are often a poor fit, wrong industry, wrong
        company size, or still months away from making a decision. The real cost is not just in wasted ad
        spend or missed quotas. It’s the opportunity cost of never knowing which accounts are actually
        in-market, ready to buy, and looking at your solution right now.</p>
      <p className="text-md text-white shadow-text pt-3">
        This blind spot has several points of failure. First, anonymous website traffic is ignored. A local
        company might visit your pricing page five times in a week, but if they don’t fill out a form, you
        never know they were there. That’s a potential deal lost to a competitor who is watching more closely.
        Second, marketing and sales data sits in silos. Website visits, ad clicks, emails, and sales
        conversations are all tracked separately, so no one sees the full journey. The team is left guessing
        which touchpoints matter. Third, outbound sales is a shot in the dark. Reps waste hours calling
        companies that have shown zero intent, while the warmest accounts, those already engaging, slip by
        unnoticed. Finally, even when a campaign does generate real interest, there’s no way to match that
        back to revenue. The team can’t see which ads, content, or outreach actually led to a new client.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a small business, these failures are not just inconvenient, they are expensive. Every hour spent
        chasing the wrong lead is an hour not spent closing the right one. Every dollar put into an ad that
        doesn’t reach a real buyer is a dollar that could have built pipeline elsewhere. Without real lead
        enrichment and predictive scoring, there’s no way to prioritize. The work is manual, slow, and full of
        guesswork. The pipeline stays unpredictable, and the team never gets ahead. This is the hidden tax of
        doing things the old way: more time spent, more money wasted, and more deals lost to faster, smarter
        competitors.</p>
      <p className="text-md text-white shadow-text pt-3">
        The pain is sharpest for local businesses with limited resources. They do not have a data science team
        or a six-figure budget for enterprise tools. They need real insight now, not a six-month analytics
        project. Every week that passes without visibility into real buyer intent is another week of missed
        revenue. The cost is not just in lost sales. It’s in morale, in wasted effort, and in the slow erosion
        of competitive advantage. Without a system that unmasks anonymous visitors, scores real intent, and
        connects marketing to closed revenue, the cycle repeats. The best buyers keep slipping away, and the
        team is left wondering why the numbers never add up.</p>
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
