export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Deploying Wrench successfully depends on how your customer and lead data is structured, mapped, and kept
        clean. The most important decisions happen before launch: what fields to sync, how to handle historical
        records, and how to keep data fresh as your campaigns run. Getting these right means Wrench’s AI can
        segment, score, and trigger actions with precision, not guesswork.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wrench is built to analyze CRM data for dynamic segmentation and predictive lead scoring. This requires that
        your contact records are both comprehensive and consistent. Geek @ Your Spot starts by auditing your CRM or
        marketing tool fields, contact info, engagement history, purchase records, and custom tags. They map these
        fields to Wrench’s schema, ensuring the AI can read and use every data point relevant to your sales cycle.</p>
      <p className="text-base text-white shadow-text pt-3">
        A key decision is how to handle incomplete or inconsistent records. Wrench’s automation is only as good as
        the data it receives. Geek @ Your Spot recommends prioritizing fields that drive segmentation, such as last
        engagement date, product interest, and lead source, over less critical details. They also set up routines to
        clean and standardize formats, like phone numbers and email addresses, so ad platforms can match and target
        contacts accurately. This step is critical for small businesses moving from spreadsheets or legacy CRMs
        where data hygiene has slipped.</p>
      <p className="text-base text-white shadow-text pt-3">
        Historical data is another factor. Wrench can use past campaign results, creative performance, and lead
        outcomes to build more accurate models from day one. Geek @ Your Spot helps decide which legacy data to
        import and how to map it, so trends and patterns are not lost. This can mean translating old campaign IDs,
        reconciling duplicate records, or merging overlapping lists. The aim is to give Wrench a clean, unified
        history to learn from, rather than fragmented snapshots.</p>
      <p className="text-base text-white shadow-text pt-3">
        Custom fields and tags require careful mapping. Many small businesses use ad-hoc categories or notes in
        their CRM that do not translate directly to Wrench’s structure. Geek @ Your Spot works with your team to
        identify which custom attributes matter for segmentation or scoring, and how to encode them so Wrench can
        use them. For example, a &quot;VIP client&quot; tag or a &quot;cold lead&quot; status may need to be
        standardized as a field Wrench recognizes, rather than a free-text note.</p>
      <p className="text-base text-white shadow-text pt-3">
        Ongoing data sync is another upfront decision. Wrench is designed to keep segments and scores current as new
        data flows in. Geek @ Your Spot configures automated syncs, daily or real-time, so new leads, campaign
        interactions, and conversions are reflected in Wrench without manual updates. This ensures that exclusions,
        retargeting triggers, and creative personalization always act on the latest information, not last week’s
        export.</p>
      <p className="text-base text-white shadow-text pt-3">
        Audience exclusions and suppression logic also depend on correct data mapping. Wrench can instantly remove
        converted clients from active campaigns, but only if the system receives accurate conversion signals. Geek @
        Your Spot helps define the triggers and events that mark a lead as closed, a buyer as active, or a segment
        as dormant. These rules are mapped to your CRM’s event logs or campaign outcomes, so Wrench’s automation
        acts decisively and avoids wasted spend.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, privacy and compliance require attention. Wrench gives you transparency into how data is used and
        how models make decisions. Geek @ Your Spot ensures your data mapping respects opt-outs, deletion requests,
        and any regulatory requirements your business faces. They configure Wrench to honor suppression lists and to
        exclude sensitive data from analysis where needed.</p>
      <p className="text-base text-white shadow-text pt-3">
        The upshot: the more organized and mapped your data is at the start, the more value Wrench’s automation
        delivers. Geek @ Your Spot’s role is to bridge any gaps, translating your existing structure into one
        Wrench’s AI can use, setting up ongoing syncs, and ensuring that segmentation, scoring, and creative
        triggers operate on a reliable, unified foundation.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="key-data-structure-and-mapping-decisions-when-deploying-wrench" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Key data structure and mapping decisions when deploying Wrench
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
              <h2 id="key-data-structure-and-mapping-decisions-when-deploying-wrench-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Key data structure and mapping decisions when deploying Wrench
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
