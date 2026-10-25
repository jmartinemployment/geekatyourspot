import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Manual ad management for measured lead generation is a losing battle for small businesses the moment they
        try to scale. The cost is not just wasted ad spend, it is lost hours, missed opportunities, and a sales
        pipeline that feels unpredictable no matter how hard you work. When your monthly ad budget crosses the $500
        to $1,500 mark, every manual step compounds the risk: cost-per-lead spikes, ad fatigue sets in, and your
        team spends more time firefighting than building growth.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business in South Florida spending $16 to $50 a day, the first wall is the scaling trap. As you
        increase your ad spend to capture more leads, platform algorithms often react in ways you cannot control.
        Your cost-per-lead jumps, sometimes overnight, as the system burns through your budget chasing the wrong
        clicks. The more you spend, the less predictable your results become. Without automation, you are forced to
        monitor every campaign, every keyword, and every bid adjustment by hand, often hours after the damage is
        done.</p>
      <p className="text-base text-white shadow-text pt-3">
        The creative bottleneck is just as punishing. Ad platforms demand a constant stream of new images, copy, and
        layouts to keep performance steady. Most small teams simply cannot produce fresh creative at the speed
        required. The result is ad fatigue, performance drops as your audience tunes out stale ads, and your
        cost-per-lead gets even worse. Meanwhile, content production eats up internal resources that should be
        focused on sales and strategy.</p>
      <p className="text-base text-white shadow-text pt-3">
        Scripting blind spots are a daily risk. Most small businesses do not have the coding or data science skills
        to build custom automation scripts inside Google or Microsoft Ads. That means when a competitor spikes their
        bids and knocks you off the first page, or your <GlossaryLink slug="landing-page">landing page</GlossaryLink> goes
        down, you are left reacting hours or days too late. Manual intervention is slow, error-prone, and often
        comes after the budget has already been wasted. Even if you try to monitor for these events, the sheer
        volume of data and the speed of platform changes make it nearly impossible to keep up without help.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data fragmentation is the final blow. Customer lists and sales data are scattered across spreadsheets and
        isolated CRMs. That means your ads often target people who have already ignored you, or send the wrong
        message to past buyers. Every manual review to catch these errors is time pulled away from selling and
        serving clients. The longer you go without automated data checks and exclusion routines, the more money you
        waste on irrelevant clicks and the weaker your lead pipeline becomes.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most teams try to plug these gaps by working harder: more hours reviewing reports, more time spent adjusting
        bids, more manual data entry. But the math does not work. At this spend level, the volume of data and the
        speed of change outstrip what any small team can handle by hand. The result is a cycle of wasted budget,
        missed growth, and a feeling that scaling up only makes things worse. The cost is not just financial, it is
        the opportunity lost every week you stay in firefighting mode instead of building a reliable, scalable lead
        engine.</p>
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
