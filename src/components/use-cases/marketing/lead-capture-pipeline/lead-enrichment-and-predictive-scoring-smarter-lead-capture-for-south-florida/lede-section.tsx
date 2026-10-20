import Link from "next/link";

export default function LedeSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Picture what happens in a typical South Florida small business on a Monday morning. The sales team is
        hunched over spreadsheets, dialing down a list of leads scraped from last quarter’s trade show or a
        cold LinkedIn search. Half the numbers are dead. Most calls go to voicemail, and the few that pick up
        are already working with someone else or have zero interest. Meanwhile, your website is seeing real
        traffic, buyers in West Palm Beach, Broward, and Miami-Dade are clicking through your service pages,
        reading your pricing, and then vanishing without leaving a trace. You never know they were there. No
        one reaches out in time. And the sales team keeps grinding, chasing ghosts, while the best-fit,
        high-intent accounts walk straight to a competitor who knows how to spot them.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is the real cost of working with cold lists and anonymous traffic. Most small businesses in our
        area spend 80% of their marketing and sales effort on leads that won’t close, wasting time and cash,
        while the buyers who are actually ready to buy leave your site without a word. Every day spent hunting
        for decision makers, cleaning up contact sheets, or calling through switchboards is an hour not spent
        talking to someone who is already interested. It’s no exaggeration: almost all your best opportunities
        are walking right out the door without you ever knowing they were in the building.</p>
      <p className="text-md text-white shadow-text pt-3">
        You do not need to accept this as the cost of doing business. Lead Enrichment and Predictive Scoring
        changes the math entirely. Instead of guessing who to call, you start each day with a ranked hit-list
        of the specific local companies and decision makers who are on your site now, researching your
        services, looking for a reason to talk. Forget about generic contact lists, your team gets direct-dial
        mobile numbers for the right people, not just a company’s main line, and each lead is scored by real
        buying intent, not a hunch or a click. The result is fewer wasted hours, higher response rates, and a
        sales pipeline that actually reflects what is happening in the market, not just who filled out a form.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a small business in West Palm, Broward or Miami-Dade, this is not about adding more tools or
        hiring another rep. It is about putting your resources where they work: on the accounts showing real
        intent, with verified contact data, and a system that keeps your team focused on real, winnable deals.
        No more chasing cold leads. No more letting hot buyers slip past. This page walks through how to stop
        the leaks, automate lead capture, and turn your website into the pipeline engine it should be. That is
        what Lead Enrichment and Predictive Scoring actually delivers, not a theory, but an operational fix
        for a problem you see every week.</p>
      <p className="text-md text-white shadow-text pt-3">
        If you run a local small business in South Florida, you already know the pain of wasted time and missed
        opportunities. Most of your sales effort goes into chasing down cold, inaccurate, or outdated
        contacts, and even when someone does show real interest, they often slip through the cracks because
        your team never sees the signal. The old way, manual list building, endless cold calls, and waiting
        for someone to fill out a form, simply does not keep up with how buyers actually behave today. Buyers
        want to research anonymously, compare options, and only talk to a rep when they’re ready. If your
        system waits for a form fill, you are already out of the running for most real deals.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is the gap that Lead Enrichment and Predictive Scoring closes. Instead of letting 98% of your
        quality web traffic walk away nameless, you identify the companies that matter the moment they hit
        your site. You see exactly who is looking, what pages they care about, and you get direct, verified
        contact info for the decision makers, not just a generic email or a dead phone line. Predictive
        scoring ranks every lead by fit and intent, so your team spends their time on the accounts that are
        actually in market, not the ones that just landed on a list by chance.</p>
      <p className="text-md text-white shadow-text pt-3">
        This page breaks down what’s really going wrong in most local sales teams: the hours lost to bad data,
        the deals lost to slow follow-up, and the simple truth that most of your best-fit buyers never fill
        out a form. We will show exactly how an automated&nbsp;<Link id="use-cases-marketing-lead-enrichment-lede-intelligent-lead-capture" href="/use-cases/marketing/intelligent-lead-capture-pipeline" className="text-[#C83803] hover:underline">lead capture pipeline</Link>&nbsp;works, what it takes to build
        one that fits your current systems, and how to avoid the traps that stall these projects in small
        business environments. You will see how to go from chasing cold leads to working a live, always-on
        pipeline of high-intent local accounts, without hiring more staff or adding complexity your team
        cannot manage.</p>
      <p className="text-md text-white shadow-text pt-3">For a shorter overview, read <Link id="use-cases-marketing-lead-enrichment-lede-blog" href="/blog/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-how-south-florida-can-turn-more-leads-into-sales" className="text-[#C83803] hover:underline">How South Florida Small Businesses Can Turn More Leads Into Sales</Link> on our blog.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-most-local-small-businesses-are-losing-hot-leads-and-burning-out-their-sales-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Most Local Small Businesses Are Losing Hot Leads and Burning Out Their Sales Teams
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-most-local-small-businesses-are-losing-hot-leads-and-burning-out-their-sales-teams" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Most Local Small Businesses Are Losing Hot Leads and Burning Out Their Sales Teams
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
