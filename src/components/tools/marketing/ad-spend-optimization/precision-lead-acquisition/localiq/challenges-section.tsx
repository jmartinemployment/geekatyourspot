import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Running digital ads without a unified system drains time, money, and patience for small businesses in South
        Florida. The main cost is not just wasted dollars on clicks that never turn into customers, but the hours lost
        chasing down which ad brought in which lead, and the frustration of never knowing where your budget actually
        goes.</p>
      <p className="text-base text-white shadow-text pt-3">
        Fragmented reporting is the root cause behind most ad spend leaks. If you run Facebook, Google, and Instagram
        campaigns, each platform gives you its own numbers, but none show the full path from click to sale. This
        means you are left guessing: did that phone call come from a paid ad, or did someone just find you by
        accident? Without a clear link between advertising and actual sales, you end up making decisions in the dark,
        often pouring budget into channels that look busy but do not deliver real results.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses, every dollar matters. When you bid on broad, generic keywords like &ldquo;how to fix a
        leaky pipe,&rdquo; you might get lots of clicks, but most are people looking for free advice, not paying
        customers. That $15 <GlossaryLink slug="daily-budget">daily budget</GlossaryLink> can disappear before lunch,
        eaten up by empty clicks and visitors who never buy (<a id={`tools-marketing-precision-lead-acquisition-localiq-challenges-source-localiq-com${idSuffix}`} href="https://localiq.com/news/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">LocaliQ</a>,
        as of Oct 23, 2026). The real buyers, the ones searching for &ldquo;emergency plumber in Fort
        Lauderdale&rdquo;, are missed because your spend is spread too thin. Manual keyword adjustments and audience
        targeting take time and expertise most small teams do not have.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual setups also mean underperforming ads are left running for months. Without automated A/B testing and
        performance alerts, you might not notice that a banner ad has stopped attracting clicks, or that your
        best-performing ad is not getting enough budget. The result is a slow bleed: your <GlossaryLink slug="cost-per-lead">cost
        per lead</GlossaryLink> quietly climbs, and the best opportunities slip away while you pay for ads no one sees
        or responds to.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geographic targeting is another common failure. Many small businesses set their ads to cover a wide area,
        hoping to catch more leads, but end up paying for clicks from people far outside their service zone. This is
        especially costly in South Florida, where a campaign meant for Miami-Dade can easily spend half its budget on
        people in neighboring counties who will never become customers. Without precise geofencing and radius
        controls, your ad dollars are wasted on the wrong audience.</p>
      <p className="text-base text-white shadow-text pt-3">
        Tracking is where most teams fall down. If you cannot see whether a call, web form, or email came from Google,
        Facebook, or a local business listing, you cannot tell what is working. Leads slip through the cracks because
        there is no unified database to track who filled out a form or called after seeing an ad. Following up with
        leads becomes manual and error-prone, and real sales opportunities are lost simply because they were not
        captured or tracked.</p>
      <p className="text-base text-white shadow-text pt-3">
        The cost is not just in wasted ad spend. It is in the hours your team spends pulling reports from different
        platforms, trying to match leads to campaigns, and debating where to put next month&rsquo;s budget. It is in
        the opportunities missed when you cannot follow up quickly or accurately with new leads. And it is in the
        frustration of knowing you are spending money but never being sure it is coming back as revenue.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is not a problem solved by working harder or spending more time on manual tasks. The reality is that
        without the right technology, most small businesses will keep leaking ad spend, missing real buyers, and
        struggling to see the true impact of their marketing. The gap between what you pay for and what you get only
        grows wider as the market gets more competitive and digital channels multiply.</p>
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
