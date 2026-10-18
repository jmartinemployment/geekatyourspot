import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small businesses in Miami-Dade, Broward, and Palm Beach are not choosing Leadfeeder in a vacuum. They
        are weighing it against other lead enrichment and predictive scoring tools, platforms that promise to
        reveal who is visiting your website, what those visitors are interested in, and which accounts deserve
        sales attention now. The question is not just which tool identifies leads, but which one fits the
        pace, budget, and workflow of a local team with limited time and cash.</p>
      <p className="text-md text-white shadow-text pt-3">
        Leadfeeder’s main distinction is its focus on company-level identification and real-time intent
        scoring, not just contact enrichment or static lead lists. Where traditional enrichment tools append
        extra fields to an existing&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;record, Leadfeeder
        starts upstream: it unmasks anonymous website visitors by matching their IP address to a proprietary
        global database of 60 million companies. This process is not about collecting more data for its own
        sake, it is about surfacing the 30–50% of your web traffic that is actually B2B, filtering out the
        noise, and turning that segment into a live, scored pipeline.</p>
      <p className="text-md text-white shadow-text pt-3">
        Most platforms in this space still rely on form fills, pop-ups, or chat widgets to capture leads.
        Evidence from Leadfeeder’s own research shows that only about 2% of B2B website visitors will ever
        fill out a form. That leaves 98% invisible to those systems. Leadfeeder, by contrast, tracks the whole
        behavioral journey, pages viewed, time on site, repeat visits, campaign source, and engagement with
        high-value content like pricing or case studies. This means a business owner does not have to wait for
        a prospect to raise their hand; the system flags the account the moment they show buying signals,
        often before competitors even know the lead exists.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses that have tried other solutions, manual research, list buying, or even
        plug-and-play enrichment services, the difference is not just in data depth, but in automation.
        Leadfeeder does not require a rep to chase down LinkedIn profiles or guess whether a company is in the
        market. Its scoring model weighs visit frequency, recency, and engagement depth, then pushes a ranked
        list of accounts straight to the team’s&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;or
        Slack. This is a sharp break from legacy approaches that hand over a static CSV or leave it to sales
        to decide which records to call.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration is another dividing line. Leadfeeder’s native connections to HubSpot, Salesforce,
        Microsoft Dynamics, and Pipedrive mean that account and contact records are created or updated
        automatically, with firmographic and behavioral data attached. Marketing can see which campaigns are
        drawing high-fit accounts; sales can see which companies are revisiting the pricing page. Competing
        products may offer enrichment or tracking, but often require manual exports or extra middleware to
        sync with the systems a small business already runs.</p>
      <p className="text-md text-white shadow-text pt-3">
        The predictive scoring piece is not just a bolt-on. Leadfeeder’s scoring model is built into every
        workflow, using a 0–10 scale that factors in recent activity, number of unique visitors from a
        company, and high-intent page hits. The system allows teams to define what counts as a
        &quot;high-intent&quot; page, pricing, demo, or contact, and weighs those visits more heavily. This is
        not a generic fit score or a one-size-fits-all rule. It lets a business dial in the model to match
        their actual sales process, so the daily hit-list reflects real buying intent, not just website noise.</p>
      <p className="text-md text-white shadow-text pt-3">
        For those considering tools like 6sense, ActiveCampaign, or Clearbit, the key difference is that
        Leadfeeder is purpose-built for the SMB use-case: quick setup, minimal IT lift, and a
        pay-for-what-you-use model. Some platforms are better suited for enterprise stacks with dedicated
        RevOps teams and custom data lakes. Leadfeeder’s architecture is designed to deliver value in days,
        not months, with a tracking script and guided configuration that can be live in under an hour. The
        pricing model is transparent, with a free plan and paid tiers based on the number of identified
        companies, not a per-seat license or a commitment to a massive data contract.</p>
      <p className="text-md text-white shadow-text pt-3">
        Case studies from Leadfeeder’s own client base show that the platform does not just deliver more data,
        but changes how teams work. Suddath, a logistics company, saw improved lead quality and sales focus by
        switching from volume cold calls to outreach triggered by real-time website activity. Snuup achieved
        an 87% hit rate from offer request to deal by prioritizing warm leads surfaced by Leadfeeder’s
        tracking and scoring. These are not abstract improvements, they are measurable shifts in pipeline
        quality and conversion rates, directly tied to the system’s ability to surface and score real buying
        intent.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Leadfeeder sits among lead enrichment and predictive scoring tools as the one that closes
        the gap between anonymous website traffic and actionable sales pipeline. It is not the right fit for
        every scenario, enterprise teams with complex data needs or those looking for deep contact-level
        enrichment across global markets may find other platforms more flexible. But for small businesses in
        South Florida that want to stop guessing and start acting on real local demand, Leadfeeder offers a
        direct, automated path from website visit to qualified lead, with the integrations and scoring logic
        built for speed and clarity.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-leadfeeder-compares-to-other-lead-enrichment-and-predictive-scoring-tools" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Leadfeeder Compares to Other Lead Enrichment and Predictive Scoring Tools
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-leadfeeder-compares-to-other-lead-enrichment-and-predictive-scoring-tools" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Leadfeeder Compares to Other Lead Enrichment and Predictive Scoring Tools
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
