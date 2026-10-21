
export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Getting value from Leadfeeder starts with the right data structure and mapping decisions. The tool is
        built to deliver company-level insights, not individual contact profiles, so the way you organize,
        filter, and sync this data determines how quickly your team can act on it.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first decision is how to define high-intent activity for your business. Leadfeeder lets you
        specify which pages or actions signal buying interest, such as visits to pricing, demo, or service
        pages. Mapping these pages upfront is key. For a local accounting firm, this might mean flagging
        repeat visits to the “Services” or “Contact” page; for a medical practice, it could be time spent on
        the “Insurance” section. Geek @ Your Spot LLC works with you to list these high-value pages and set them
        as triggers in Leadfeeder’s scoring model.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next is segmenting your website traffic. Leadfeeder’s filters allow you to separate local business
        visits from out-of-area or irrelevant traffic. For a small business focused on Miami-Dade, Broward,
        and Palm Beach, this means configuring filters to surface only companies with a physical presence in
        those counties. You can also exclude known partners, competitors, or low-value sectors to keep your
        pipeline focused. The goal is to ensure that your team only gets alerts for companies that fit your
        ideal customer profile, not a flood of noise.</p>
      <p className="text-base text-white shadow-text pt-3">
        The mapping also extends to your&nbsp;CRM. Leadfeeder’s direct
        integrations allow you to map identified companies and their engagement data to the correct fields in
        HubSpot, Salesforce, or Microsoft Dynamics. This is where upfront decisions matter: you’ll want to
        decide which Leadfeeder data points, such as last visit date, pages viewed, or intent score, are
        pushed into your&nbsp;CRM&nbsp;and how they are labeled. Clean
        mapping means your sales team sees the right context at a glance, without hunting through unstructured
        notes or attachments.</p>
      <p className="text-base text-white shadow-text pt-3">
        Leadfeeder’s scoring model is another area that requires input. The intent score is calculated using
        factors like depth of engagement, frequency of visits, and recency. You can adjust the weights or
        thresholds to match your own sales cycle. For example, a business with a long buying process may want
        to score repeat visits higher, while a fast-moving service provider may prioritize recency. Geek @ Your Spot LLC helps calibrate these settings so the score reflects what “ready to buy” looks like in your
        market.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data enrichment is built into Leadfeeder, but you control what is appended and what is not. The tool
        can pull in firmographic details, industry, company size, location, and even technology stack. You
        decide which of these attributes are necessary for your sales process. For some teams, just knowing
        the company and location is enough; others may want to see the tech stack or recent news to inform
        outreach. Upfront mapping prevents information overload and keeps the workflow lean.</p>
      <p className="text-base text-white shadow-text pt-3">
        Privacy and compliance are also part of the mapping process. Leadfeeder works at the company level and
        is built for GDPR compliance, but you need to ensure that contact enrichment
        and&nbsp;CRM&nbsp;sync follow your own privacy policies. Geek @ Your Spot LLC reviews these requirements with you before launch, so you do not end up with data you
        cannot use.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, plan for how Leadfeeder’s data will flow into your team’s daily routines. Decide who receives
        real-time alerts, who reviews new leads, and how follow-up is tracked. A clear mapping of roles and
        responsibilities ensures that no hot lead sits idle. Geek @ Your Spot LLC will help you document this
        process, so everyone knows what to do when a high-fit local company shows up in the system.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, the effectiveness of Leadfeeder in your pipeline depends on careful upfront mapping, of
        website pages,&nbsp;CRM&nbsp;fields, scoring rules, and team
        workflows. Small businesses that invest time in these decisions see faster results and less wasted
        motion, turning anonymous local website traffic into a steady source of qualified pipeline.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data-structure-and-mapping-decisions-when-deploying-leadfeeder" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Structure and Mapping Decisions When Deploying Leadfeeder
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
              <h2 id="data-structure-and-mapping-decisions-when-deploying-leadfeeder-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Structure and Mapping Decisions When Deploying Leadfeeder
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
