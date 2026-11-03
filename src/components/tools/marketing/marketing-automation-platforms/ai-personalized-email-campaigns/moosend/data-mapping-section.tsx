export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The data structure and mapping choices you make at the start of a Moosend deployment set the ceiling for
        what your Personalized Email Campaigns can achieve. Getting this right means your automations, segments, and
        reporting work as planned, without manual fixes later.</p>
      <p className="text-base text-white shadow-text pt-3">
        Moosend’s automation and segmentation depend on having the right fields and tags in your contact records. At
        minimum, you need email addresses and names, but the real value comes from mapping custom fields, such as
        purchase history, signup source, engagement level, or any other attribute you track in your business.
        Moosend lets you create custom fields for each contact, which can be used both for segmentation and for
        personalizing messages.</p>
      <p className="text-base text-white shadow-text pt-3">
        Start by auditing your existing data. What do you already collect in your CRM, eCommerce platform, or signup
        forms? Which fields are consistently filled, and which are spotty or outdated? Only bring in data that is
        accurate and actionable. For example, if you want to trigger a campaign when a customer abandons a cart, you
        need to reliably capture and map that event to a field in Moosend. If you want to segment by product
        interest or last purchase date, those fields need to be present and up to date.</p>
      <p className="text-base text-white shadow-text pt-3">
        When importing your list, Moosend requires files to be formatted as CSV or Excel, encoded in UTF-8, and free
        from special characters. This technical constraint is not just a formality: a file that fails these checks
        will be rejected outright, costing you time and momentum. Before import, run a validation to catch common
        issues, like stray punctuation, blank rows, or encoding mismatches. If your list comes from multiple
        sources, standardize field names and formats before bringing it into Moosend.</p>
      <p className="text-base text-white shadow-text pt-3">
        Tagging is the backbone of Moosend’s segmentation. Decide upfront what tags matter for your campaigns, such
        as lead source, customer status, or product category, and apply them consistently. Tags can be added
        manually during import or set up to be assigned automatically based on user behavior, such as clicks,
        purchases, or inactivity. This makes it possible to build segments that update themselves, so your
        automations always reach the right audience.</p>
      <p className="text-base text-white shadow-text pt-3">
        Custom fields are also critical for personalization. Moosend allows you to insert any field into your email
        templates, so you can address contacts by name, reference their last purchase, or tailor offers to their
        preferences. But this only works if the data is mapped and maintained correctly. Plan for ongoing data
        hygiene: set up routines to update or purge outdated records, and monitor for fields that start to drift
        from reality.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses with more complex needs, Moosend supports advanced segmentation, such as grouping by
        engagement metrics, web browsing data, or funnel stage. This requires mapping those behaviors to fields or
        tags during setup. If you want to trigger a re-engagement campaign for contacts who have not opened an email
        in 90 days, the platform needs to track and update that engagement field automatically.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data mapping decisions also affect reporting. Moosend’s analytics dashboard and custom reporting tools rely
        on the data you feed in. If you want to track campaign performance by segment, source, or behavior, those
        fields must be set up from day one. Missing or misaligned fields will limit your ability to measure what
        matters and refine your campaigns over time.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you plan to integrate Moosend with other platforms, such as your CRM, eCommerce store, or analytics
        tools, consider how data will sync between systems. Field names, formats, and update schedules should match
        to avoid duplication or data loss. Geek @ Your Spot’s role here is to map these connections, test for edge
        cases, and set up error handling so your automations do not break when a record changes or a field is
        missing.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, the most successful Moosend deployments start with a clear data map: every field defined, every
        tag assigned, and every segment purpose-built for a campaign or automation. This upfront work means your
        team can launch targeted, personalized email campaigns from day one, without manual intervention or cleanup
        later. It also ensures that as your business grows or your campaigns become more sophisticated, your data
        structure will support, not limit, what you can do.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data-structure-and-mapping-decisions-that-shape-moosend-deployment-from-day-one" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data structure and mapping decisions that shape Moosend deployment from day one
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
              <h2 id="data-structure-and-mapping-decisions-that-shape-moosend-deployment-from-day-one-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data structure and mapping decisions that shape Moosend deployment from day one
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
