export default function DataMappingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The upfront data structure and mapping decisions in GetResponse set the foundation for every personalized
        campaign you run. These choices determine how leads are captured, segmented, and followed up with, and they
        directly affect how much manual work your team will face later. Getting this right from the start means your
        automations will run smoothly, your segments will be accurate, and your reporting will be reliable.</p>
      <p className="text-base text-white shadow-text pt-3">
        Start with how you organize your contact data. GetResponse supports tags, custom fields, and real-time
        segmentation. Tags are flexible labels you apply to contacts based on actions, interests, or source. For
        example, you might tag leads by the form they used, the product they viewed, or the event they attended.
        Custom fields let you collect and store specific information, like location, service interest, or purchase
        history, that you can use later to personalize messages or build segments.</p>
      <p className="text-base text-white shadow-text pt-3">
        Segmentation is more than just grouping by demographics. In GetResponse, you can create dynamic segments
        based on behavior (such as email opens, clicks, or site visits), purchase activity, or even engagement
        scores. These segments update automatically as contacts interact with your campaigns, so you do not have to
        manually move people in and out of lists. This real-time approach is critical for small businesses that want
        to send timely, relevant messages without constant list maintenance.</p>
      <p className="text-base text-white shadow-text pt-3">
        Mapping incoming data sources is another key decision. Every form, landing page, and integration must feed
        data into the right fields and tags. For example, if you run a Facebook Lead Ad, you need to ensure the
        contact’s email, name, and any custom questions are mapped correctly into GetResponse. This mapping allows
        you to trigger the right automation, such as a welcome sequence for new leads or a follow-up for abandoned
        carts, based on exactly where and how the lead was captured.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses with multiple offers or customer types, it is important to structure lists and segments so
        each group receives the right content. GetResponse allows you to maintain separate lists or use tags and
        segments within a single list, depending on your workflow. The choice here affects how easily you can manage
        compliance with regulations, honor opt-outs, and avoid sending irrelevant content. For example, a real
        estate firm might segment by property type or buyer versus seller, while a local retailer might segment by
        product interest or purchase frequency.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation logic depends on these data structures. Triggers for nurture sequences, product recommendations,
        or re-engagement campaigns pull from tags, segments, and custom fields. If your data is inconsistent or
        mapped poorly, automations will misfire, sending the wrong message or missing key follow-ups. That is why
        Geek @ Your Spot spends time upfront reviewing your existing data, cleaning it, and designing a mapping plan
        that fits both your current needs and your growth plans.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reporting and analytics also rely on clean, well-mapped data. GetResponse tracks engagement at the contact,
        segment, and campaign level. If your fields and tags are used consistently, you can see which messages drive
        the most opens, clicks, and sales, and use that insight to refine your strategy. Poor data structure leads
        to unreliable reports, making it hard to spot what is working or where leads are dropping off.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, consider the limits set by your plan. The free plan allows up to 500 contacts and 2,500 newsletters
        per month, so your data structure must be efficient if you are running at this scale (<a id={`tools-marketing-personalized-email-campaigns-getresponse-data-mapping-source-getresponse-com${idSuffix}`} href="https://www.getresponse.com/referral-program/refer-a-friend.html" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">GetResponse</a>,
        as of Oct 25, 2026). Paid plans lift these limits and add advanced segmentation, A/B testing, and automation
        features, which are crucial for businesses that need to scale or handle complex journeys.</p>
      <p className="text-base text-white shadow-text pt-3">
        A well-planned data structure and mapping process is not just a technical detail, it is the difference
        between a campaign that runs itself and one that creates headaches. With GetResponse, thoughtful setup at
        the start means your team can focus on strategy and growth, not firefighting data issues or patching broken
        automations.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-data-structure-and-mapping-choices-that-shape-every-getresponse-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The data structure and mapping choices that shape every GetResponse deployment
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
              <h2 id="the-data-structure-and-mapping-choices-that-shape-every-getresponse-deployment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The data structure and mapping choices that shape every GetResponse deployment
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
