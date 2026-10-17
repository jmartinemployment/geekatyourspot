import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Any business weighing Lusha for lead enrichment and predictive scoring is also looking at a crowded
        field of tools and methods. The most common alternatives are manual research, generic contact
        databases, and a handful of AI-driven platforms that promise to surface intent or score leads. Each
        approach has its own strengths and blind spots, and the differences show up quickly in the day-to-day
        work of a small sales team.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual research is where most small teams start. It means combing LinkedIn, company websites, and
        public directories to build prospect lists by hand. The upside is control: you see every record and
        can double-check each detail. The downside is speed. A rep working this way will find maybe five to
        ten contacts a day, and most will be generic company numbers or info@ addresses. The result: hours
        lost, and most calls ending at a receptionist or a voicemail box. Lusha replaces this grind with
        verified mobile numbers and direct emails, so the team skips the switchboard and gets straight to
        decision-makers. That is not a small difference. It is the line between a pipeline that moves and one
        that stalls out at the gatekeeper.</p>
      <p className="text-md text-white shadow-text pt-3">
        Generic contact databases are the next step up. These platforms offer lists of business contacts,
        often filtered by company size, industry, or job title. They can be cheap and easy to use, but their
        data ages fast. A name and number scraped six months ago may now belong to someone who has moved on,
        changed roles, or left the company. For a small team, this means a high risk of calling the wrong
        person or sending emails that bounce. Lusha addresses this by running continuous enrichment and
        syncing updates directly into the&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>. When a contact
        changes jobs or gets promoted, Lusha flags it and updates the record. That keeps the pipeline live,
        not static.</p>
      <p className="text-md text-white shadow-text pt-3">
        Some buyers look at AI-driven&nbsp;<GlossaryLink slug="intent-data">intent
        data</GlossaryLink>&nbsp;platforms. These tools use behavioral signals, like website visits, content
        downloads, or ad clicks, to suggest which accounts are &quot;in market.&quot; The theory is good:
        reach out when a prospect is ready to buy. In practice, the challenge is matching anonymous intent to
        a real, reachable person. Lusha does not just show that a company is interested. It delivers the
        direct line and verified email of the decision-maker, and then scores that contact based on fit and
        intent signals. The difference is practical: with Lusha, a rep can pick up the phone and reach someone
        who actually has budget and authority, not just a company that visited the website.</p>
      <p className="text-md text-white shadow-text pt-3">
        The landscape also includes platforms that specialize in predictive scoring. These often work by
        assigning points based on demographic or behavioral data, industry, company size, web visits, and so
        on. Many scoring models stop at the account level or use outdated firmographics. Lusha ties its
        scoring directly to live, verified contact and company data, and then pushes those scores into the
        sales workflow. The result is that high-fit, high-intent leads rise to the top, and reps know exactly
        who to call next. When used alongside behavioral scoring in platforms like HubSpot, Lusha’s fit-based
        scoring adds a layer of precision that static models cannot match.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration is another key difference. Many enrichment and scoring tools claim to
        &quot;integrate&quot; with CRMs, but often that means little more than a CSV export or a basic sync.
        Lusha’s integrations with Salesforce, HubSpot, Zoho, Outreach, SalesLoft, and SourceWhale go deeper.
        Data flows automatically, enriched fields update in place, and every change, like a promotion or a new
        job, can trigger workflow automation. This is not just about convenience. It is about making sure that
        every lead record is current, every score is based on the latest signals, and every rep works from the
        same, up-to-date information.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a small business in South Florida, the real test is not which tool has the most features, but
        which one actually puts reps in touch with buyers who are ready to act. Lusha stands out because it
        bridges the gap between anonymous intent and direct, verified contact. It does not just enrich a list.
        It turns that list into a working pipeline, scored and prioritized, with every record synced to the
        tools your team already uses. That is the difference between a pipeline full of dead ends and one that
        actually closes deals.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-lusha-compares-to-other-lead-enrichment-and-scoring-approaches" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Lusha Compares to Other Lead Enrichment and Scoring Approaches
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
              <h2 id="how-lusha-compares-to-other-lead-enrichment-and-scoring-approaches" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Lusha Compares to Other Lead Enrichment and Scoring Approaches
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
