export default function FaqSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
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
              What can Mailchimp’s AI do for email campaigns?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Mailchimp’s AI tools can help draft and rewrite email copy, recommend when to send, suggest content
              improvements, and support automated marketing flows. Predictive features help target audiences, and
              Analytics AI gives plain-language insights on campaign results. What you get depends on your plan and
              eligibility.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Mailchimp automatically write personalized emails?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Mailchimp’s “Write with AI” tool can generate or revise email copy in the editor. To make emails truly
              relevant for each customer, you combine this with audience segments, dynamic content, predicted attributes,
              and automated flows. AI copywriting alone does not create a unique, fully tailored email for every
              subscriber.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does personalization go beyond using someone’s first name?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Mailchimp lets you target based on behavior, engagement, and predicted attributes. You can use purchase
              history, browsing behavior, and spending patterns to send more relevant messages. For example, you can set
              up different campaigns for loyal customers and for those who abandoned their cart.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What customer data does Mailchimp need?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              The data Mailchimp needs depends on your campaign. For behavior-based targeting, it uses engagement or
              shopping data. Store-based recommendations and revenue insights require a connected ecommerce store.
              Mailchimp’s recommendations use available campaign, sales, and customer behavior data, so the more you
              connect, the more context the system has.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can AI help segment the audience?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Mailchimp offers predicted attributes and predictive segmentation to help you find the right audiences
              for your campaigns. You can also target by buying behavior and spending amounts. Predictive segments are
              available on Standard and Premium plans if you meet the feature requirements.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Mailchimp recommend the best time to send?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Send-time optimization uses past engagement and click data to suggest better sending windows. Send-day
              optimization looks at industry trends to recommend a day of the week. These are data-driven suggestions, but
              they do not guarantee every recipient will engage.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can personalized follow-up emails run automatically?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Mailchimp’s Marketing Automation Flows can trigger multi-step emails based on what subscribers do. Its
              AI-supported pre-built flows can include generated content and delays between messages. You review and edit
              the flow before turning it on.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What campaigns are suitable starting points for a small business?
            </h3>
            <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
              <li>A welcome sequence for new subscribers.</li>
              <li>A re-engagement sequence for inactive customers.</li>
              <li>For ecommerce businesses, abandoned-cart follow-ups.</li>
            </ul>
            <p className="text-base text-white shadow-text pt-3">
              Mailchimp suggests starting with one or two of these automated flows to keep things focused before adding
              more segments and triggers.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Mailchimp work for service businesses, or only online stores?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Mailchimp supports both service businesses and online stores. It offers email and SMS tools designed for
              professional services to reach new and existing clients. Some features, like those based on purchases or
              store revenue, need ecommerce data and may not apply to service-business mailing lists.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I test the features before subscribing?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Mailchimp provides a 14-day Standard trial for eligible users. You must enter payment details, and billing
              starts after the trial unless you cancel or change your plan. Access to AI features during the trial can
              differ, so check that the feature you want is included before you start.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
