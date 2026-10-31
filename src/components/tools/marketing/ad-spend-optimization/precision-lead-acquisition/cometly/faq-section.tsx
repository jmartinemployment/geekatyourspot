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
              What is ad spend optimization with Cometly?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Ad spend optimization with Cometly means using connected advertising, customer-journey, and revenue data
              to decide where to increase, reduce, or maintain advertising spend. Cometly is focused on B2B SaaS,
              linking ad spend to pipeline, closed-won revenue, and customer lifetime value instead of just clicks or
              form submissions.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Cometly identify which ads are working?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Cometly combines website tracking, server-side events, advertising-platform data, and CRM or payment data.
              Its attribution reporting connects customer touchpoints to downstream outcomes, helping teams see which
              sources, campaigns, and ads contribute to revenue, not just platform-reported conversions.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Which metrics should I use to optimize my budget?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Cometly&rsquo;s guidance prioritizes business outcomes over engagement metrics. Key measures include
              return on ad spend, customer acquisition cost, pipeline and closed-won revenue, and customer lifetime
              value. Clicks, impressions, and conversion rates can help diagnose performance, but Cometly recommends
              focusing on revenue and profit above those supporting measures.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does multi-touch attribution help with budget allocation?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Multi-touch attribution helps assess interactions across a customer&rsquo;s journey instead of giving all
              credit to a single click. Cometly lists first-touch, last-touch, linear, U-shaped, and data-driven
              attribution options. Comparing models can show when a channel introduces customers while another captures
              the final conversion, giving more context for budget decisions.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Which advertising platforms and business tools can I connect?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Cometly&rsquo;s website lists advertising platforms including Meta, Google Ads, LinkedIn Ads, Microsoft
              Ads, and TikTok Ads. It also highlights connections with Stripe, HubSpot, Salesforce, and other business
              tools, advertising more than 70 native integrations plus webhooks. Confirm the specific integration and
              data flows you need, since connecting a platform and sending conversions back to it are distinct
              capabilities.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Cometly optimize campaign budgets automatically?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Cometly describes its AI Ads Manager as a tool for managing and optimizing campaigns, and its homepage
              says AI can rebalance spend toward winning campaigns. Its product guide also describes recommendations on
              budget allocation, audience targeting, and creative performance. The cited pages do not fully specify
              approval controls or automation availability for every platform, so those details should be confirmed
              during a demo.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Cometly send better conversion data back to ad platforms?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Through its Conversion API functionality, Cometly sends conversion signals to platforms including Meta,
              Google, and LinkedIn. These signals can reflect paying customers or downstream revenue events instead of
              only initial leads, helping advertising platforms optimize toward outcomes closer to the business&rsquo;s
              actual goals. This is a supported optimization mechanism, not a guarantee of improved results.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Cometly address gaps in browser-based tracking?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Cometly offers server-side tracking alongside its website pixel and describes cross-device tracking
              capabilities. Its guidance explains that server-side conversion tracking can capture events that
              browser-based tracking may miss. These capabilities should not be interpreted as a promise that every
              customer interaction will be captured perfectly.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Cometly replace my CRM or advertising platforms?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              No. Cometly does not replace your CRM or your advertising platforms. It adds attribution and revenue
              context, then syncs this information with your existing systems. Your advertising platforms will still
              deliver ads, and your CRM (like HubSpot or Salesforce) will keep managing customer relationships and
              sales.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How do I get started?
            </h3>
            <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
              <li>Audit your current tracking pixels and conversion events.</li>
              <li>Connect your advertising accounts, website tracking, and CRM or revenue systems.</li>
              <li>Set up revenue-focused KPIs and attribution settings.</li>
              <li>Review campaign performance based on attributed business outcomes.</li>
              <li>Shift budget to better-performing campaigns and test incremental increases.</li>
              <li>Send enriched conversion data back to supported advertising platforms.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
