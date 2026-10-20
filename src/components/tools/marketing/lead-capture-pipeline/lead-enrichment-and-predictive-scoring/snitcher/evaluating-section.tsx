import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Judging whether Snitcher is right for your business comes down to two questions: does it fit the way
        your team works, and is the pricing model a good match for your budget and usage pattern? For small
        businesses in South Florida, the answer depends on how you define value, not just in features, but in
        the hours returned to your team and the cost per real lead.</p>
      <p className="text-md text-white shadow-text pt-3">
        Snitcher’s fit is strongest for small to mid-sized B2B teams who need to know which companies are
        visiting their website and want to act on that data without a heavy IT burden. The platform is
        designed for teams who work named accounts, not just anonymous traffic. If your pipeline depends on
        identifying and reaching out to specific decision-makers in local businesses, Snitcher’s person-level
        and company-level identification delivers what generic analytics tools cannot. The platform shines
        when you care about which companies are researching your solutions today, not just how many people
        visited.</p>
      <p className="text-md text-white shadow-text pt-3">
        Snitcher’s pricing is transparent and built for teams who want to start small and scale up as results
        come in. Every published plan includes unlimited seats and all integrations, meaning you do not pay
        extra to add users or connect to your&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>, Slack, or
        marketing tools. The entry plan gets you the same feature set as the top tier, with pricing metered by
        the number of unique companies identified, not by features gated behind higher tiers. For a small
        business, this means you can test the platform with a short trial, see real leads appear in your
        dashboard, and decide if the cost matches the value before committing to a longer term.</p>
      <p className="text-md text-white shadow-text pt-3">
        Snitcher stands apart from legacy tools that lock you into annual contracts and hide pricing behind
        sales calls. You sign up without a demo or a credit card, drop the script into your site, and start
        seeing results the same day. Annual billing saves about 30% over monthly, but there is no penalty for
        starting with a month-to-month plan. If your business runs multiple microsites or subdomains, note
        that Snitcher bills per domain, so teams with many web properties should factor that into their total
        cost.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real test of fit is not just technical. It is about who benefits from the data. Snitcher is best
        for teams that need real-time, actionable visibility into who is on their site and what they are
        doing. If you want to see which campaigns bring in real companies, not just clicks, and tie your
        marketing spend directly to pipeline, Snitcher gives you that clarity. The platform filters out
        students, competitors, and bad-fit traffic, so your team is not wasting time on vanity metrics.
        High-intent leads are flagged and routed to sales, while marketing gets a clean view of which channels
        actually drive pipeline.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams who rely on HubSpot, Salesforce, Pipedrive,
        Zoho&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>, or Slack, Snitcher’s native integrations mean
        no extra middleware or manual data entry.
        Two-way&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;sync and open APIs let you keep your
        lead data up to date across systems. If you have a unique workflow or want to power internal tools
        with visitor data,
        Snitcher’s&nbsp;<GlossaryLink slug="webhooks" className="text-[#0B162A] hover:underline">webhooks</GlossaryLink>&nbsp;and&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;let
        Geek @ Your Spot LLC build exactly what you need.</p>
      <p className="text-md text-white shadow-text pt-3">
        Snitcher’s approach is self-serve and low-friction. You own your data on any plan, with no requirement
        to talk to sales or sit through a demo. The trial period is long enough to see if the platform
        surfaces leads that match your ICP. If it does not, you can walk away without a penalty. For a small
        team, this means you do not risk a year-long commitment before seeing real value.</p>
      <p className="text-md text-white shadow-text pt-3">
        When comparing Snitcher to other options, pay attention to how the platform handles lead
        identification and enrichment. Some tools only show company-level data or require a form fill before
        surfacing a name. Snitcher can resolve anonymous sessions to named companies and, in many cases, to
        the individual level for US visitors. The platform attaches prior anonymous sessions to a contact once
        they self-identify, giving your team the full journey from first touch to conversion. This is not just
        a technical detail, it means your reps reach out with context, not just a cold name.</p>
      <p className="text-md text-white shadow-text pt-3">
        For local teams, Snitcher’s ability to deliver real-time alerts, route leads to the right rep, and
        enrich every account with firmographics and contact details is the difference between chasing ghosts
        and working a live, prioritized pipeline. The pricing model is predictable, the setup is fast, and the
        platform scales with your needs. Geek @ Your Spot LLC helps you judge fit by mapping your real sales
        process to Snitcher’s capabilities, running a trial on your own traffic, and making sure the cost per
        qualified lead makes sense for your business.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="evaluating-snitcher-fit-pricing-and-what-matters-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Evaluating Snitcher: Fit, Pricing, and What Matters for Small Teams
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="evaluating-snitcher-fit-pricing-and-what-matters-for-small-teams" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Evaluating Snitcher: Fit, Pricing, and What Matters for Small Teams
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
