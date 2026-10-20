
export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Before Tidio can deliver a unified, cross-platform chatbot experience, your team needs to make a few
        data decisions that shape how leads, conversations, and customer records flow across your business.
        These choices are not just technical details, they affect how well the system captures context, routes
        conversations, and keeps your pipeline clean.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first decision is how you want to structure your customer records. Tidio’s shared inbox works by
        matching messages from any channel, website, WhatsApp, Instagram, Messenger, email, to a single
        customer profile. The system uses identifiers like email address, phone number, or login to connect
        the dots. If your business already uses a&nbsp;CRM&nbsp;or
        e-commerce platform, you’ll need to decide which fields are the primary keys and how to handle cases
        where a customer uses different contact details on different channels. A mismatch here can lead to
        duplicate records or lost context.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next is mapping the data that matters for your team’s workflow. For lead capture, Tidio’s Flows and
        Lyro AI can request names, emails, phone numbers, and custom fields, such as product interest or
        purchase intent, during the chat. You decide which data points are required, which are optional, and
        how they should be formatted for your downstream systems. If you want new leads to flow straight into
        HubSpot, ActiveCampaign, or another tool, you’ll need to align field names and types so nothing gets
        dropped in translation. The more precise this mapping, the fewer manual cleanups you’ll face later.</p>
      <p className="text-md text-white shadow-text pt-3">
        Knowledge sources are another key structure decision. Lyro, Tidio’s AI agent, answers questions by
        pulling from your help articles, website content, Q&amp;A pairs, and product catalog. You choose which
        sources to connect and how to organize them, by topic, product, or customer journey stage. If you
        import a Zendesk help center or sync your Shopify catalog, you’ll want to review how categories, tags,
        and product IDs map to Tidio’s structure. This ensures the AI gives accurate, up-to-date answers and
        does not miss important details.</p>
      <p className="text-md text-white shadow-text pt-3">
        For e-commerce teams, the cart and order data mapping is critical. Tidio’s Shopify integration, for
        example, pulls cart contents and order history into the chat interface. You decide how much of that
        data is visible to agents and AI, and what gets pushed back into
        your&nbsp;CRM&nbsp;or analytics tools. The same goes for
        custom properties, such as loyalty status or support tier, which can be attached to customer profiles
        and used to trigger specific flows or handoff rules.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another up-front choice is how to handle conversation routing and assignment. Tidio lets you set rules
        for routing by language, topic, VIP status, or agent availability. You’ll need to define what tags or
        triggers signal a conversation should move from AI to human, or from one team member to another. This
        structure is what keeps urgent sales leads from getting stuck in the support queue, or high-value
        customers from bouncing between agents.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data privacy and consent are always part of the structure conversation. Tidio gives you the tools to
        collect and store customer data according to your own policies and legal requirements. You decide what
        information to keep, for how long, and who can access it. If you operate across jurisdictions with
        different privacy laws, you may need to configure consent flows or anonymization options before going
        live.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, reporting and analytics depend on the way you map and structure your data. Tidio tracks
        metrics like first response time, resolution rate, and repeat contacts per channel. To get meaningful
        insights, you’ll want to align your tags, categories, and custom fields with the reports your business
        actually uses. This alignment lets you see, for example, how many leads came from Instagram versus
        website chat, or which flows convert best by channel.</p>
      <p className="text-md text-white shadow-text pt-3">
        In short, the up-front data decisions you make with Tidio are not just about technical setup, they
        shape how well your cross-platform chatbot works for your real business needs. The more deliberate you
        are about mapping fields, structuring knowledge, and routing conversations, the smoother your launch
        and the cleaner your pipeline. Geek @ Your Spot LLC guides clients through each of these choices, making
        sure the structure fits your business now and scales with you as you grow.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data-mapping-and-structure-what-you-must-decide-before-launching-tidio" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Mapping and Structure: What You Must Decide Before Launching Tidio
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
              <h2 id="data-mapping-and-structure-what-you-must-decide-before-launching-tidio-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Mapping and Structure: What You Must Decide Before Launching Tidio
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
