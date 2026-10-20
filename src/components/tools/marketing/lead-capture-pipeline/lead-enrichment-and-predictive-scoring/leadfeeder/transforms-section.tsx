import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Leadfeeder changes the lead capture process from a guessing game to a data-driven workflow. Instead of
        waiting for form fills or relying on broad, outdated lists, it identifies which companies are visiting
        your website in real time. For small businesses in South Florida, this means the sales team no longer
        spends their week chasing cold accounts that never respond. Instead, they get a daily, ranked list of
        local companies who are actively researching their services, complete with a timeline of exactly what
        those companies viewed and how often they returned.</p>
      <p className="text-md text-white shadow-text pt-3">
        The core of Leadfeeder’s approach is company-level identification. Rather than just counting visits,
        it tells you which businesses are behind those website sessions, even when no one fills out a form.
        This is made possible by a proprietary IP-to-company database built over more than a decade, which
        matches visitor IP addresses to real businesses. The result is that up to 45% of B2B website traffic
        can be mapped to real companies, not just anonymous numbers. For a local small business, this means
        you finally see which local firms are showing interest, no more flying blind.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once a company is identified, Leadfeeder records the full behavioral layer: which pages they viewed,
        the order and frequency, how long they stayed, and which campaigns brought them to the site.
        High-intent actions, like reviewing pricing, reading case studies, or returning multiple times in a
        week, are tracked and highlighted. This raw data is not just listed; it is scored. Leadfeeder’s intent
        scoring model weighs engagement depth, visit frequency, and recency, so the team knows which accounts
        are most likely to convert and when to act.</p>
      <p className="text-md text-white shadow-text pt-3">
        This scoring is more than a number. It is a live, explainable signal that sorts accounts into high,
        medium, or low intent, with a breakdown of what drove the score: high-intent page views, days active,
        unique visitors, and the most recent visit date. The team does not have to guess why an account is
        ranked high. They see the evidence, so outreach is always based on real behavior, not assumptions. The
        sales team can filter and prioritize outreach, focusing only on the companies with the strongest
        signals, and leaving the rest for later.</p>
      <p className="text-md text-white shadow-text pt-3">
        Leadfeeder also cuts manual work out of the process. When a target company shows buying intent, the
        platform can create a&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;record, send a Slack
        alert, or trigger a workflow automatically. No one has to copy details from a dashboard or chase down
        contact information. This means sales reps spend more time talking to real prospects, and less time on
        admin. The tools you already use, HubSpot, Salesforce,&nbsp;<Link id={`tools-marketing-lead-enrichment-leadfeeder-transforms-pipedrive${idSuffix}`} href="/tools/marketing/pipedrive" className="text-[#C83803] hover:underline">Pipedrive</Link>, Microsoft Dynamics, connect
        directly, so all the data flows where it is needed, with no double entry.</p>
      <p className="text-md text-white shadow-text pt-3">
        For lead enrichment, Leadfeeder pulls in firmographic data, industry, headcount, tech stack, recent
        news, right when a company is identified. It can also enrich with contact details, so the team gets
        decision-maker names and emails without having to search. This is not just about having more data. It
        is about having the right data at the right moment, so every outreach is timely, relevant, and
        targeted. The result is fewer wasted calls, faster follow-up, and a pipeline that actually reflects
        who is in the market today.</p>
      <p className="text-md text-white shadow-text pt-3">
        Predictive scoring is built in, not bolted on. Leadfeeder’s intent score uses a time-decay model,
        recent activity counts more than old visits, and cold accounts drop off the radar. The team defines
        what counts as high-intent (pricing page, demo request, contact form), and the system weighs those
        actions more heavily. This means the sales team is always working from a live, prioritized list, not a
        static report. The model is transparent: every score can be traced back to the behaviors that created
        it, so there are no black boxes or hidden logic.</p>
      <p className="text-md text-white shadow-text pt-3">
        Leadfeeder also removes the noise. Automated filters strip out junk traffic, bots, ISPs, low-value
        sources, so the team does not waste time on leads that will never convert. Only real B2B companies
        remain, and the team can further refine the list with over 50 behavioral and firmographic filters. For
        a small business, this means you are not just getting more leads; you are getting better, more
        qualified leads, with less time spent sorting and cleaning the data.</p>
      <p className="text-md text-white shadow-text pt-3">
        The impact is visible in real results. Suddath, a logistics company using Leadfeeder, shifted from
        volume cold calls to timing-driven outreach, improving lead quality and sales focus. Custobar used
        Leadfeeder to reveal anonymous website intent, integrating those signals into HubSpot and turning
        silent research into actionable sales moments. Snuup saw an 87% hit rate from offer request to deal by
        identifying and prioritizing warm leads. Microtech used enriched company signals to find cross- and
        upsell opportunities across thousands of customers. These are not theoretical benefits, they are
        outcomes experienced by real companies using Leadfeeder.</p>
      <blockquote cite="https://www.leadfeeder.com/customers/suddath/" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Leadfeeder surfaces which companies visit the site and what they view, enabling targeted, timely
        follow-up across teams and systems.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in South Florida, the real advantage is what Leadfeeder removes from the week. No
        more hours spent guessing who to call, no more missed signals from high-intent local buyers, no more
        manual data entry or wasted outreach. The sales team starts each day with a live, prioritized list of
        local companies who are ready to talk, complete with the context needed to close the deal. Marketing
        can finally prove which campaigns drive real opportunities, and leadership sees a pipeline that
        reflects real demand, not just hope.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-leadfeeder-actually-does-for-lead-enrichment-and-predictive-scoring" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Leadfeeder Actually Does for Lead Enrichment and Predictive Scoring
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-leadfeeder-actually-does-for-lead-enrichment-and-predictive-scoring-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Leadfeeder Actually Does for Lead Enrichment and Predictive Scoring
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
