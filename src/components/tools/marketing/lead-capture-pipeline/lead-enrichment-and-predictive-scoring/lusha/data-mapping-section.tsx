import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying Lusha is not just about turning on an integration and hoping for the best. The structure of
        your data, how fields are mapped, which attributes are kept, and how enrichment flows into
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, determines whether your team gets real value or
        just another layer of noise. The mapping process is where most enrichment projects either pay off or
        fall apart, and Lusha’s evidence shows exactly what needs to be decided up front.</p>
      <p className="text-md text-white shadow-text pt-3">
        Start with the basics: every contact needs a verified email, a direct dial, and a current job title.
        Lusha’s enrichment process is built to fill these specific gaps, not just add generic fields. The
        mapping is not one-size-fits-all. You decide
        which&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;fields will hold the enriched email,
        mobile, and role data. For teams using Salesforce or HubSpot, Lusha’s integrations let you map new
        fields (like confidence score, last verification date, or buying signals) directly onto your own
        record layout. This prevents duplicate contacts and keeps the original record as the single source of
        truth.</p>
      <p className="text-md text-white shadow-text pt-3">
        Company-level data is equally important. Lusha pulls industry, size, headquarters location, and
        revenue range for each account. The mapping step is where you decide what matters for your scoring
        model. For predictive scoring, you want to capture firmographic data that matches your ideal customer
        profile: industry, headcount, funding stage, and geography. Lusha’s evidence shows that scoring on
        verified firmographic data, not just behavioral engagement, produces more accurate prioritization,
        especially for small teams that cannot afford to chase every lead.</p>
      <p className="text-md text-white shadow-text pt-3">
        Signals and scoring fields deserve special attention. Lusha provides more than two dozen buying
        signals, from hiring surges to leadership changes and IT spend shifts. The mapping decision here is
        not just which signals to import, but how to weight them and how long they should drive a score. For
        example, a job change or promotion may trigger an immediate re-score and a task for the owning rep. A
        spike in hiring in your target department might push an account into Tier 1 for a set window. Lusha’s
        workflows are built to let you map these signals to custom fields, like &quot;Buying Power
        Changed&quot; or &quot;Last Promotion Date,&quot; so your reps see at a glance why a lead’s score
        changed and what action to take.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data hygiene is built into the process. Lusha flags low-confidence records for manual review, and
        enrichment always writes back to the
        existing&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;record, not as a new contact. This
        avoids the mess of duplicate records and keeps your reporting clean. For batch enrichment, Lusha
        splits large CSVs into batches of 100 for processing, ensuring consistent mapping and quality control
        at every step. The result is a standardized, deduplicated file ready for import, not a jumble of
        mismatched fields.</p>
      <p className="text-md text-white shadow-text pt-3">
        Field normalization is another upfront call. Titles, industries, and company sizes are standardized by
        Lusha during enrichment, but you decide how these fields should appear in
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>. If your team segments by &quot;VP&quot; versus
        &quot;Director,&quot; you can map Lusha’s normalized values to your own picklists. This makes
        downstream reporting, scoring, and territory assignments far more reliable.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, compliance and opt-out status need to be mapped. Lusha’s data is sourced to honor opt-outs
        automatically, but you should ensure that suppression fields in
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;are updated on every sync. This is
        especially critical for small businesses in regulated industries or those operating under strict local
        solicitation laws.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, the key mapping decisions when deploying Lusha are:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Which&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;fields will hold verified emails, direct dials, and current job titles</li>
        <li>Where company-level firmographics are mapped for scoring and segmentation</li>
        <li>How to handle buying signals and event-driven fields (job changes, promotions, surges)</li>
        <li>What normalization rules apply for titles, industries, and company sizes</li>
        <li>How to manage low-confidence records and manual review</li>
        <li>How opt-out and suppression data is updated to stay compliant</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        Getting these decisions right upfront is what keeps
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;clean, your scoring accurate, and your team
        focused on real buyers rather than cleaning up after bad imports. Lusha’s evidence shows that when
        data mapping is handled with intention, the result is a pipeline that reflects the real market, not
        just another list of names to chase.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-data-mapping-decisions-that-shape-your-lusha-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data Mapping Decisions That Shape Your Lusha Deployment
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-data-mapping-decisions-that-shape-your-lusha-deployment" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data Mapping Decisions That Shape Your Lusha Deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
