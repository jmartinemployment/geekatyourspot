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
              How does Triple Whale help optimize advertising spend?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Triple Whale brings marketing and business data into one platform so teams can evaluate performance across
              channels instead of relying only on each ad platform&rsquo;s reporting. Its Compass tools support budget
              allocation, spot possible channel saturation, and provide action plans for shifting spend. Moby, the AI
              assistant, helps turn those insights into recommendations and actions.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Which advertising platforms can I use with it?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Triple Whale&rsquo;s homepage lists Meta, Google, and TikTok as platforms where Moby can help manage
              campaigns. The company advertises more than 60 integrations across ecommerce and retail, but not every
              integration supports the same reporting or campaign-management features. Check the capabilities for your
              specific channels.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Triple Whale determine which channels deserve more budget?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Compass combines multi-touch attribution, marketing mix modeling, and incrementality testing in its
              measurement framework. These give different views on performance: customer touchpoints, the broader
              marketing mix, and proof of a channel&rsquo;s incremental impact. Triple Whale presents this combination as
              a base for budget allocation and growth validation, not just picking whichever platform reports the
              highest return.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What metrics should I monitor?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Triple Whale&rsquo;s published materials highlight several useful metrics and views: revenue, spend,
              conversions, and return on ad spend (ROAS) for campaign and keyword performance; media efficiency ratio
              (MER), also called blended ROAS, for a business-wide view; new-versus-returning customer performance to
              separate acquisition from repeat purchases; and creative-level performance to compare individual ads,
              formats, and messaging.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Triple Whale automatically change budgets or manage campaigns?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Triple Whale describes features that go beyond reporting. Its homepage says Moby can manage
              advertising campaigns, deliver channel-budget reallocations, and support advertising actions and
              automations. The published description of Moby Actions also includes scaling successful ads, cutting
              underperformers, and managing budgets across Meta and Google using rules the advertiser sets. Confirm the
              available actions and controls for your account before turning on automation.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is Sonar, and how does it improve ad optimization?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Sonar enriches advertising signals using events captured by Triple Whale and data from systems like
              Shopify, then sends enriched information back to advertising platforms through server-side APIs. Triple
              Whale says this can give platforms more complete conversion and customer information for targeting,
              reporting, and optimization. For Meta, its documented CAPI integration can send conversions missed by the
              browser pixel, extra customer information, and corrected conversion values. This improves the data
              available to the platform and is separate from deciding how much budget to give Meta versus another
              channel.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Triple Whale track conversions and customer journeys?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Triple Pixel provides first-party, server-side attribution data to help identify advertising touchpoints
              and the channels linked to sales. Triple Whale also describes cross-device identity resolution and unified
              measurement as part of its tracking and measurement base. These are the company&rsquo;s stated
              capabilities, not a guarantee that every interaction can be tracked.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can it help separate new-customer acquisition from repeat-customer sales?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Triple Whale&rsquo;s published guidance describes using its Pixel, dashboards, and custom attribution
              views to see which campaigns bring in new customers and which bring existing customers back. This helps
              when evaluating campaigns meant to acquire shoppers instead of just converting people who already know the
              brand.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Triple Whale help identify creative fatigue and better-performing ads?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Triplewhale can spot creative fatigue and highlight which ads are performing better. Its Moby feature
              detects when creative assets are wearing out and can help generate new ones. The platform also offers
              creative reporting that lets teams compare ads, ad types, copy, images, videos, and custom segments. This
              makes it easier to review creative performance alongside budget allocation.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How quickly can I see performance data?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Triplewhale provides business data and dashboards that update in real time, pulling from ecommerce and
              advertising platforms. However, the vendor does not guarantee that every integration refreshes at the same
              speed, so not all sources may update at once.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
