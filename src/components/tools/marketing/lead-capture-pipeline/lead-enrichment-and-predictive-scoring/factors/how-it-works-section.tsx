import Link from "next/link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Factors does not just identify anonymous website visitors and hand over a list. It runs a full process
        that starts with collecting raw visitor data and ends with a ranked, actionable view of which accounts
        are most likely to buy. For a small business in South Florida, this means you no longer have to guess
        which leads are real. The steps below walk through how Factors actually works under the hood.</p>
      <p className="text-md text-white shadow-text pt-3">
        First, Factors collects data from your website and connected marketing channels. This includes every
        page view, ad interaction, and key event (like a demo request or form fill). The platform uses reverse
        IP lookup to match anonymous website traffic to real company names, pulling in firmographic details
        such as industry, company size, and location. Unlike generic analytics tools that stop at traffic
        stats, Factors turns raw visits into named account profiles, giving your sales team a view of which
        local businesses are actively researching you.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once Factors has identified the companies visiting your site, it enriches each account using multiple
        data sources. This enrichment process adds layers of detail, company name, industry, employee count,
        revenue band, and more. The platform can also pull in contact-level data, such as names and job
        titles, from integrations with tools like Salesforce,&nbsp;<Link id="tools-marketing-lead-enrichment-factors-how-it-works-apollo" href="/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/apollo" className="text-[#0B162A] hover:underline">Apollo</Link>, and ZoomInfo.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, Factors tracks every engagement signal from each account. The system logs which pages were
        viewed, how many times, what content was downloaded, and which ads were seen or clicked. These signals
        are not treated equally, repeated visits to technical documentation or the pricing page are weighted
        more heavily than a quick glance at the homepage. The platform also tracks cross-channel engagement,
        pulling signals from LinkedIn, Google Ads, G2, and more. For businesses running multi-channel
        campaigns, this closes the gap between ad spend and real buyer intent.</p>
      <p className="text-md text-white shadow-text pt-3">
        With all this data in place, Factors applies AI-driven predictive scoring. Each account receives a
        dynamic Engagement Score based on recent and historical behavior, firmographic fit, and pipeline
        stage. The model looks for patterns that match your past closed-won deals, accounts that show similar
        research depth, multiple stakeholders engaging, or spikes in activity get a higher score. The scoring
        is not static: it updates in real time as new signals come in, so your sales team’s hit-list always
        reflects the latest intent.</p>
      <p className="text-md text-white shadow-text pt-3">
        The final step is surfacing this intelligence where your team works. Factors pushes alerts and daily
        digests to Slack or Teams, showing which accounts have spiked in intent, which ones have moved to a
        new buying stage, and which contacts are now active. Sales and marketing can see the last 30 days of
        journey for each top account, including the last three pieces of content viewed, known contacts, and a
        clear summary of engagement signals. This is not a static report: it is a live feed that lets you see,
        for example, when a competitor’s client in Miami starts researching your service, or when a dormant
        prospect returns after a new ad campaign.</p>
      <p className="text-md text-white shadow-text pt-3">
        This process is what lets a small team in West Palm Beach stop chasing cold lists and start focusing
        every call and campaign on the accounts most likely to close. The mechanics are not just about more
        data, they are about turning a noisy stream of anonymous activity into a prioritized, actionable
        pipeline that matches how real buying decisions happen.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-factors-surfaces-and-scores-buying-intent-the-actual-steps-inside-the-platform" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Factors Surfaces and Scores Buying Intent: The Actual Steps Inside the Platform
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-factors-surfaces-and-scores-buying-intent-the-actual-steps-inside-the-platform" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Factors Surfaces and Scores Buying Intent: The Actual Steps Inside the Platform
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
