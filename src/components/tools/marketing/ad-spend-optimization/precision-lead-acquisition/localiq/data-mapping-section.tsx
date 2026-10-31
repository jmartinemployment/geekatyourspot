export default function DataMappingSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The most important data decisions when deploying LocaliQ are how you map your lead sources, match
        campaign-level data to real outcomes, and set up attribution rules that reflect your business&rsquo;s actual
        sales cycle. These choices decide whether you see clearly which ads drive revenue or end up with another siloed
        dashboard that leaves you guessing.</p>
      <p className="text-base text-white shadow-text pt-3">
        LocaliQ&rsquo;s platform is designed to bring together every touchpoint, calls, web forms, chats, and CRM
        entries, into a single, unified record. Geek @ Your Spot works with you at deployment to identify every channel
        where a lead can enter: Google Search, Meta Lead Ads, your website&rsquo;s contact form, phone calls, and even
        SMS. Each source is mapped so LocaliQ can track not just the volume of leads, but which campaign, ad group, and
        keyword generated them. This is not a generic import; it is a targeted mapping that connects your actual
        marketing spend to the moments that matter, phone calls, booked appointments, or sales.</p>
      <p className="text-base text-white shadow-text pt-3">
        Attribution setup is the next key decision. LocaliQ allows for campaign-level, ad-group-level, and even
        keyword-level attribution, depending on the granularity of your tracking. Geek @ Your Spot configures these
        rules to match your actual sales process. For example, if most of your business comes from phone calls rather
        than web forms, attribution is set to prioritize call tracking and connect the dots between ad clicks and
        closed deals. If you use a CRM like HubSpot, ServiceTitan, or Yardi, LocaliQ&rsquo;s integration pulls in
        conversion data so you can see which leads turned into paying customers, not just which ones filled out a form.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another decision is how to structure your campaigns and budgets within LocaliQ. The platform supports budgets
        at both the campaign and ad set level, with daily or lifetime limits. Geek @ Your Spot helps you decide whether
        to group campaigns by objective (such as lead generation or local awareness), by service line, or by location.
        This structure affects how LocaliQ&rsquo;s optimization engine reallocates spend in real time, shifting budget
        toward the campaigns and audiences that are actually producing results.</p>
      <p className="text-base text-white shadow-text pt-3">
        First-party data is a critical asset in LocaliQ&rsquo;s optimization process. During deployment, Geek @ Your
        Spot reviews your existing data, call outcomes, CRM uploads, and website micro-conversions, to determine what
        can be fed into LocaliQ for smarter targeting and automated bidding. The richer your first-party data, the more
        accurately LocaliQ can identify high-intent leads and allocate budget to the channels and keywords that
        convert. This upfront mapping is what lets small businesses compete with larger advertisers, even on a limited
        budget.</p>
      <p className="text-base text-white shadow-text pt-3">
        Field mapping is handled carefully to avoid data loss and ensure every lead is attributed correctly. Geek @
        Your Spot aligns your form fields, call tracking numbers, and CRM properties with LocaliQ&rsquo;s data model.
        This step is critical for businesses with existing lead databases or those migrating from other systems. A
        missed field or misaligned mapping can mean lost leads or incorrect reporting, so every source and destination
        is checked before going live.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Identify all lead entry points, ads, forms, calls, chats, and map them to LocaliQ&rsquo;s unified dashboard.</li>
        <li>Configure attribution rules to reflect your true sales cycle (calls, forms, CRM conversions).</li>
        <li>Decide campaign and budget structure, by objective, service, or location, for clear reporting and optimization.</li>
        <li>Map first-party data sources, such as call outcomes and CRM uploads, for smarter targeting and performance tracking.</li>
        <li>Align all form fields, call tracking numbers, and CRM properties to LocaliQ&rsquo;s data model to ensure no lead is missed.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        Decisions made upfront about data mapping and structure have long-term consequences. If you map every lead
        source and outcome before launch, you avoid the common trap of having to fix attribution errors after campaigns
        are running. Geek @ Your Spot&rsquo;s approach is to front-load this work, so you can trust the numbers in your
        dashboard from day one. This gives you the confidence to act on what you see, pausing underperforming ads,
        reallocating budget, and making real improvements to your marketing ROI.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="which-data-structure-and-mapping-decisions-matter-most-when-deploying-localiq" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Which data structure and mapping decisions matter most when deploying LocaliQ
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="which-data-structure-and-mapping-decisions-matter-most-when-deploying-localiq-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Which data structure and mapping decisions matter most when deploying LocaliQ
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
