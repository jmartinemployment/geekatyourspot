
export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The structure of your lead data in Manychat is not an afterthought, it is the backbone of how every
        inquiry gets tracked, routed and followed up. Before a single automation goes live, you need to decide
        what information matters for your business and how it flows from Manychat into
        your&nbsp;CRM, Google Sheet or email marketing tool. These
        choices shape how quickly your team can act on new leads, how well you segment your audience, and how
        easily you prove what is working.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manychat captures and stores contact details from every supported channel, Instagram, WhatsApp,
        Facebook Messenger, TikTok, Telegram, SMS and email. The platform lets you collect standard fields
        like name, email, and phone number, but you can also add custom fields to track what matters most for
        your pipeline: service interest, location, preferred contact method, or any other qualifier. The key
        is to keep the structure simple enough for your team to use, but detailed enough to support
        real&nbsp;lead scoring&nbsp;and follow-up.</p>
      <p className="text-md text-white shadow-text pt-3">
        Mapping these fields to your downstream systems is where most small businesses either set themselves
        up for success or create headaches down the line. Manychat offers direct integrations with
        ActiveCampaign and Google Sheets, so you can push new contacts and updates straight into your existing
        lists or pipelines. If you rely on spreadsheets, each new lead can be logged with all captured fields,
        tagged by channel and source, and timestamped for tracking. For teams using
        a&nbsp;CRM, mapping ensures that every conversation, no matter
        where it started, appears as a contact or opportunity with the right details attached.</p>
      <p className="text-md text-white shadow-text pt-3">
        Segmentation is not just for big companies. Manychat’s tagging and labeling system lets you mark leads
        by source (Instagram comment, WhatsApp DM, Facebook reply), by intent (hot, cold, needs follow-up), or
        by campaign. These tags power follow-up automations and make it easy to filter leads for marketing or
        sales outreach. For example, you can set up an automation to send a special offer to everyone who
        commented on a product launch post, or flag high-intent inquiries for a personal callback. The
        structure you decide on here determines how well you can act on these signals later.</p>
      <p className="text-md text-white shadow-text pt-3">
        Consent and compliance are also built into the data structure. Manychat prompts for opt-in when
        collecting emails or phone numbers, and stores consent alongside contact details. This is critical for
        staying compliant with messaging regulations and for keeping your marketing lists clean. Geek @ Your Spot LLC ensures these steps are configured from the start, so you do not risk sending messages to
        contacts who have not agreed to hear from you.</p>
      <p className="text-md text-white shadow-text pt-3">
        Analytics depend on clean, consistent data mapping. Manychat’s dashboard shows you how many contacts
        you have collected, where they came from, and which automations drive the most conversions. If you map
        contact fields and tags to your&nbsp;CRM&nbsp;or sheet, you
        can track which campaigns generate the most qualified leads, which channels produce the fastest
        responses, and where prospects drop off. This is not just reporting for reporting’s sake, it is how
        you decide what to double down on and what to change.</p>
      <p className="text-md text-white shadow-text pt-3">
        Upfront data decisions also affect how easy it is to scale. If you start with a simple, well-mapped
        structure, adding new channels or automations later is straightforward. Every new flow uses the same
        fields, tags and mapping, so you do not end up with fragmented lists or duplicate contacts. Manychat’s
        modular setup means you can expand as your business grows, without reworking your whole pipeline.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real cost of skipping these decisions shows up fast: missed leads that never make it to
        your&nbsp;CRM, contacts stuck in the wrong campaign, or
        compliance issues from missing consent records. Geek @ Your Spot LLC works with clients to map out the
        data structure before launch, test integrations with real conversations, and build a foundation that
        lasts. That way, when your team comes back on Monday, every inquiry from Friday, no matter what
        channel it came in on, lands exactly where it should, ready for follow-up and tracked from first
        contact to closed deal.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data-mapping-and-structure-the-decisions-that-shape-manychats-impact-from-day-one" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Mapping and Structure: The Decisions That Shape Manychat’s Impact From Day One
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
              <h2 id="data-mapping-and-structure-the-decisions-that-shape-manychats-impact-from-day-one-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Mapping and Structure: The Decisions That Shape Manychat’s Impact From Day One
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
