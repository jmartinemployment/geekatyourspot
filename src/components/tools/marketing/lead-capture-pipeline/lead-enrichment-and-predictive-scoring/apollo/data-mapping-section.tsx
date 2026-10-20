import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Getting Apollo to work for your business starts with how you structure and map your data. This is not
        just a technical detail, it shapes every lead score, every automated assignment, and every campaign
        that runs through the system. If you get these decisions right upfront, you avoid months of cleanup
        and manual rework down the line.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first decision is which records to enrich and how to match them. Apollo’s data engine is built to
        work with both company and contact records. You can import lists with just names and companies, and
        Apollo will fill in verified emails, phone numbers, job titles, and more. But mapping fields correctly
        matters. If your&nbsp;CRM&nbsp;uses custom field names or
        non-standard formats, you need to align them to Apollo’s schema so the enrichment engine knows what to
        update. This is where prebuilt mappings for HubSpot and Salesforce come in, most standard fields match
        automatically, but custom fields may need a one-time setup. A mismapped field means missed data, so
        this step is worth the extra attention.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next is defining what makes a lead a fit for your business.
        Apollo’s&nbsp;lead scoring&nbsp;and routing depend on
        a clear Ideal Customer Profile (ICP). This profile is not just a list of industries or company sizes;
        it includes firmographic filters like location, revenue, headcount, and even technology stack. Apollo
        lets you apply more than 65 filters across its 240 million contacts, so you can get as granular as you
        need. Upfront, you decide which attributes matter most, maybe it is companies in South Florida with
        over 20 employees, or decision-makers in a specific vertical. The more precise your ICP mapping, the
        more accurate Apollo’s scoring and prioritization become.</p>
      <p className="text-md text-white shadow-text pt-3">
        Intent and behavioral signals are another mapping point. Apollo tracks website visits, form fills, and
        engagement with outbound campaigns. To use these signals
        in&nbsp;lead scoring, you need to decide how they are
        mapped and weighted. For example, a visit to your pricing page may be worth more than a generic blog
        view. Apollo can layer intent signals from third-party sources like Bombora, but you set the rules for
        what counts as high intent. This mapping happens in the scoring logic, not just in the data fields, so
        it is a mix of technical setup and business judgment.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data hygiene is the foundation. Apollo’s enrichment is only as good as the data you feed it. Before
        going live, clean up duplicate records, standardize naming conventions, and make sure email formats
        are correct. Apollo can help by flagging suspicious or incomplete entries, but starting with a clean
        list saves time and reduces errors. If you have old lists with missing details, Apollo’s bulk
        enrichment tools can fill gaps, but the initial mapping tells the system which fields to update and
        which to leave alone.</p>
      <p className="text-md text-white shadow-text pt-3">
        Custom fields and workflows are where Apollo adapts to your business. If your sales process tracks
        unique data points, like product interest, lead source, or contract stage, you can map these fields
        into Apollo and use them in scoring or routing. This is especially important for small businesses with
        specialized sales cycles. Upfront, you decide which custom fields matter, how they map to Apollo’s
        schema, and how they factor into automation rules. A field left unmapped is a field that never
        influences your pipeline.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration with other tools is another mapping step. Apollo connects with
        CRMs,&nbsp;<GlossaryLink slug="marketing-automation">marketing
        automation</GlossaryLink>&nbsp;platforms, and even AI assistants like ChatGPT and Claude. Each
        integration has its own field mapping requirements. For example, syncing with HubSpot or Salesforce
        means mapping lead status, owner, and activity fields so updates flow both ways. If you use voice
        assistants or chatbots, map the conversation data back into Apollo so it can influence lead scores and
        follow-up actions. Getting these connections right upfront means your data stays consistent across
        every channel.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, set up regular data refresh schedules. Apollo lets you choose how often to update records, on
        demand, daily, or in real time. Decide upfront how frequently your business needs fresh data.
        Fast-moving sales teams may want daily updates, while others can work from weekly syncs. The mapping
        here is not just technical; it is about aligning data updates to your team’s workflow so no lead goes
        stale before someone acts on it.</p>
      <p className="text-md text-white shadow-text pt-3">
        The upfront data structure and mapping work in Apollo is not a one-time chore. It is the foundation
        for every automation, every campaign, and every decision your sales team makes. Invest the time to get
        it right, and you set up a pipeline that runs itself, accurate, up-to-date, and always focused on the
        leads most likely to buy.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-data-structure-and-mapping-decisions-matter-upfront-with-apollo" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data Structure and Mapping Decisions Matter Upfront with Apollo
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
              <h2 id="what-data-structure-and-mapping-decisions-matter-upfront-with-apollo-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data Structure and Mapping Decisions Matter Upfront with Apollo
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
