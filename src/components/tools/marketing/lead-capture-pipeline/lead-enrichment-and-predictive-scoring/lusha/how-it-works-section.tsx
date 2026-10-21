import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Lusha works by stripping the guesswork and dead time out of lead enrichment and predictive scoring. It
        does this by automating the process of finding, verifying, and updating contact and company data, then
        pushing it directly into your&nbsp;CRM&nbsp;or sales
        engagement platform. Instead of your sales team chasing generic numbers or sifting through stale
        lists, Lusha provides direct mobile numbers, verified personal emails, and real-time buying signals
        for the people who actually make decisions. The result is a pipeline where every contact is actionable
        and every score is grounded in current, live data.</p>
      <p className="text-base text-white shadow-text pt-3">
        Start with the basics: Lusha’s engine ingests your static lists, web form entries, or
        new&nbsp;CRM&nbsp;leads. For each, it runs a multi-step
        enrichment process. First, it matches the record against its global database to fill in missing
        details, direct dials, verified emails, job titles, company size, industry, and more. This is not just
        a name and number lookup. Lusha checks for role changes, promotions, and company moves, so you are not
        pitching someone who left six months ago or got promoted out of your target role. Every contact is
        checked for current employment and contact accuracy before it lands in your system.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next, Lusha attaches buying signals and&nbsp;<GlossaryLink slug="intent-data" className="text-[#0B162A] hover:underline">intent
        data</GlossaryLink>. This is where predictive scoring comes in. The platform tracks over two dozen
        signals: headcount growth, hiring surges, new job posts, IT spend changes, LinkedIn activity, funding
        rounds, leadership moves, and more. These signals are tied to real company events, not anonymous
        intent scores. For each lead or account, Lusha scores fit (how closely it matches your best
        customers), timing (how recent and relevant the buying signals are), and reachability (whether there
        is a verified decision-maker you can actually contact). These scores are written directly to the lead
        or account record, so your team knows exactly who to call and when.</p>
      <p className="text-base text-white shadow-text pt-3">
        The enrichment process itself is built for speed and scale. Lusha can process hundreds of contacts in
        seconds using its bulk&nbsp;API. It reads your CSV files,
        splits them into manageable batches, and runs each through its verification and enrichment workflow.
        Low-confidence matches are flagged for manual review, so your team never wastes time on questionable
        data. The output is a clean, deduplicated, and standardized list, ready to import directly into
        your&nbsp;CRM, dialer,
        or&nbsp;<GlossaryLink slug="marketing-automation" className="text-[#0B162A] hover:underline">marketing automation</GlossaryLink>&nbsp;tool. For
        real-time needs, Lusha also supports single-record enrichment for leads captured on web forms or
        entered by hand, ensuring that even one-off contacts are fully verified before anyone picks up the
        phone.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once the data is enriched and scored, Lusha automates the sync back into your core systems.
        Integrations are available for Salesforce, HubSpot, Zoho, Outreach, SalesLoft, and others. This means
        that as soon as a contact is updated or a new buying signal is detected,
        your&nbsp;CRM&nbsp;reflects it, no manual entry, no stale
        data. For example, if a key contact gets promoted or leaves, Lusha updates the record, flags the
        change, and can even trigger a task or notification for the sales rep responsible. This keeps your
        pipeline live and accurate, so you never miss a window to re-engage or cover a gap.</p>
      <p className="text-base text-white shadow-text pt-3">
        Lusha’s predictive scoring is not a black box. The criteria are transparent and configurable: you can
        define your ideal customer profile (industry, size, funding, geography, seniority) and weight the
        buying signals that matter most to your business. The system then applies these rules consistently,
        ranking and tiering leads so your team always works the best-fit opportunities first. For small teams,
        this means no more arbitrary lead assignments or wasted effort on cold accounts. Every rep sees not
        just a list of names, but a prioritized, scored pipeline with the context they need to act fast.</p>
      <p className="text-base text-white shadow-text pt-3">
        In day-to-day use, this changes the rhythm of a small sales team. The Miami-Dade team from the opening
        story comes back on a Friday afternoon. Instead of arguing with receptionists, they see a dashboard of
        new leads: each scored, each with a direct mobile number, and each showing a recent buying signal,
        maybe a surge in hiring, a new VP of Operations, or a spike in website visits. The team picks up the
        phone and reaches real decision-makers. Email campaigns land in verified inboxes, not spam folders.
        The pipeline is not just full, but full of people who are ready and able to buy. That is how Lusha
        actually works, step by step, to turn anonymous traffic and cold lists into live opportunities.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="step-by-step-how-lusha-actually-delivers-verified-leads-and-predictive-scores" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Step-by-Step: How Lusha Actually Delivers Verified Leads and Predictive Scores
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
              <h2 id="step-by-step-how-lusha-actually-delivers-verified-leads-and-predictive-scores-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Step-by-Step: How Lusha Actually Delivers Verified Leads and Predictive Scores
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
