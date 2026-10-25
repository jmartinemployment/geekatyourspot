export default function FaqSection() {
  return (
    <section className="min-h-screen bg-[#025E73] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="frequently-asked-questions" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What can AI and automation do for lead generation?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              AI and automation can help with segmenting your audiences, personalizing your messaging, generating ad
              creative, monitoring your campaigns, flagging performance issues, and automating optimization rules. Each
              tool offers different capabilities, so no single platform does everything from start to finish.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Do I need several tools to get started?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Not always. Start with the problem you want to solve, such as visibility, lead attribution, audience
              targeting, campaign management, or creative production. Each vendor in this space focuses on different
              tasks, so there is no need to subscribe to every service at once.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Are these tools also suitable for online stores?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes, several tools are designed for ecommerce. Catalog-ad tools can turn product feeds into branded ads with
              dynamic prices, promotions, and product videos. This approach suits product sales more than quote requests
              or service bookings.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How do I know which marketing channels produce leads?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Lead tracking tools can connect calls, forms, and chats to their marketing sources. This lets you see which
              channels drive real inquiries, not just traffic or clicks. Tools like WhatConverts support source
              attribution, campaign reporting, and lead qualification.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can AI help identify the right audience?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Audience-intelligence tools use your customer and business data to build segments, enrich profiles, and
              support more personalized campaigns. Before choosing a tool, check what data it needs and how its insights
              will improve your targeting or messaging. Wrench.ai is one vendor that offers these features.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I automate ad creative production?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes, within certain workflows. Some tools offer AI-generated ad creative or feed-based designs that use
              templates and dynamic product information. Make sure the tool supports your ad format. Catalog automation is
              not the same as advertising for service businesses.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What results should I measure?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Match your measurement to the goal. For lead tracking, look at valid inquiries, qualified leads, and their
              sources. In advertising management, track spend, conversions, and cost per acquisition. For audience
              personalization, focus on conversion rate and campaign return. In ecommerce catalog advertising, measure
              purchases and return on ad spend, not just leads.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How do I decide whether a tool is worth paying for?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Set a clear goal before you buy, like better attribution, less campaign management, higher-quality leads, or
              stronger catalog-ad performance. Then compare the result to the tool’s total cost. This keeps your
              evaluation focused on what the tool actually does, not just on lead volume.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
