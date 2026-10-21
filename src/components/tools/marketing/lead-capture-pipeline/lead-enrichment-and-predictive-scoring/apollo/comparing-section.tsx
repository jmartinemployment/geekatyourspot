import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Small businesses in South Florida weighing a lead enrichment and predictive scoring solution often
        find themselves caught between two extremes: sprawling enterprise platforms that demand months of
        setup and specialist teams, and lightweight tools that promise speed but deliver shallow, often
        outdated data. Apollo sits in the middle, but it is not just a compromise. It is built for teams that
        need depth, automation, and verified results, without the overhead or complexity of enterprise stacks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Many buyers look first at the most visible alternatives: platforms like ZoomInfo or Clearbit, or even
        repurposed CRMs with bolt-on enrichment. These tools lead with data size or a long menu of
        integrations, but often trade off real-time accuracy or require manual exports and imports to keep
        lists current. Apollo’s core advantage is that it combines a living database of over 240 million
        contacts with automation that keeps every record fresh and scored in the background. This is not just
        a bigger spreadsheet. It is a system that learns from your
        own&nbsp;CRM, updates records when people change jobs, and
        fills in missing details from multiple sources, so you never have to chase down a lead’s direct phone
        number or guess at their decision-making role again.</p>
      <p className="text-base text-white shadow-text pt-3">
        The difference shows up most clearly in the day-to-day. With a typical data provider, the team spends
        hours exporting lists, cleaning up bounces, and cross-referencing LinkedIn to check if a prospect is
        still in their role. Apollo removes that busywork. It runs a seven-step email and phone validation
        before a record ever reaches your&nbsp;CRM, and layers on job
        change alerts and intent signals so your team is not working off last quarter’s data. When a new
        visitor hits your website, Apollo can identify the company, match the visitor to a real person (on US
        traffic), and score them against your ideal customer profile, all within seconds. That is a leap from
        the manual chase most teams are used to.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses trying to automate lead capture, enrichment, and scoring in one workflow, Apollo’s
        approach is to keep everything under one roof. Instead of stitching together multiple tools, one for
        enrichment, another for scoring, a third for outreach, Apollo connects data, intelligence, and
        execution in a single system. The practical upshot is that you can go from anonymous website visitor
        to a fully-enriched, scored, and assigned lead in
        your&nbsp;CRM&nbsp;without touching a spreadsheet or waiting
        for a weekly data sync. The platform’s Chrome extension and integrations with HubSpot, Salesforce, and
        Slack mean your team can access verified contact details and score leads wherever they already work,
        without switching tabs or copying data by hand.</p>
      <p className="text-base text-white shadow-text pt-3">
        Where other tools rely on static point systems or require manual tuning to keep scoring models
        relevant, Apollo’s predictive scoring uses both your
        own&nbsp;CRM&nbsp;data and its global database to surface the
        prospects most likely to buy. The model gets smarter as you work, learning from real conversions and
        intent signals. This is not a black box: you control the rules, but you are not left tuning weights by
        trial and error. The result is a daily hit-list of local accounts actively researching your services,
        ranked by actual purchase readiness, not just a guess at fit.</p>
      <p className="text-base text-white shadow-text pt-3">
        Some platforms claim to offer similar&nbsp;<GlossaryLink slug="intent-data" className="text-[#0B162A] hover:underline">intent
        data</GlossaryLink>&nbsp;or visitor identification, but Apollo’s edge is in the details: it can filter
        website visitors by 65+ firmographic and technographic attributes, layer in intent scores, and even
        identify the decision-maker by name and contact details, provided the traffic is US-based and you have
        the right add-on. This is especially important for small businesses that need to focus their time on
        local, high-fit prospects, not just anyone who lands on their site.</p>
      <p className="text-base text-white shadow-text pt-3">
        The market is crowded with tools that all claim to automate lead enrichment and predictive scoring.
        What sets Apollo apart is not just the size of its database, but its focus on automation, verified
        accuracy, and the ability to tie every action directly to pipeline outcomes, without the need for a
        full-time admin or data team. For South Florida small businesses, this means less time spent cleaning
        up lists and more time talking to real buyers, with a system that keeps improving as your team works.
        Instead of chasing the latest point solution or cobbling together a dozen tools, Apollo gives you a
        single engine for lead capture, enrichment, and predictive scoring that fits the way your team already
        sells.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-apollo-compares-to-other-lead-enrichment-and-scoring-approaches" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Apollo Compares to Other Lead Enrichment and Scoring Approaches
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
              <h2 id="how-apollo-compares-to-other-lead-enrichment-and-scoring-approaches-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Apollo Compares to Other Lead Enrichment and Scoring Approaches
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
