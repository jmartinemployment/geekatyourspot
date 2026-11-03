export default function ConfiguringSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        LocaliQ&rsquo;s core configuration for ad spend optimization centers on its proprietary automation rules,
        real-time optimization logic, and campaign management settings. The platform does not rely on manual
        rule-building or scripting by the user. Instead, it uses its own AI-powered engine to automate decisions about
        keyword targeting, budget allocation, and lead tracking, all based on live campaign data and first-party
        signals. Any extension beyond its built-in capabilities comes through its open API environment, which enables
        integration with other systems, not custom scripting or code-level automation.</p>
      <p className="text-base text-white shadow-text pt-3">
        The main configuration steps in LocaliQ focus on getting your ad accounts, lead sources, and tracking
        parameters connected. Geek @ Your Spot sets up LocaliQ to pull in your accounts from platforms like Google
        Ads, Meta, and others, then maps each channel&rsquo;s lead forms, call tracking, and conversion events into
        LocaliQ&rsquo;s unified dashboard. This is not a generic connection: LocaliQ&rsquo;s own documentation calls
        for a single piece of code to be placed on your site for tracking calls, leads, and traffic. This step is where
        most small businesses get stuck if they try to go it alone, because missing or misconfigured tags break the
        link between ad spend and real sales results.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once tracking is unified, LocaliQ&rsquo;s automation logic takes over. Its proprietary AI engine continuously
        analyzes campaign performance, reallocating budget toward the highest-performing channels, keywords, and
        audiences. The system pre-tests keyword bids by audience before publishing, which cuts the learning cost that
        often burns through small budgets in the first days of a campaign. It auto-adjusts bids, keywords, ad copy, and
        budgets within each campaign at the ad group level, so you are not left with set-it-and-forget-it rules that go
        stale. This is not the same as rule-based automation in older ad platforms. LocaliQ&rsquo;s engine is designed
        to shift spend in real time, ensuring that no ad dollar is wasted on underperforming placements or irrelevant
        audiences.</p>
      <p className="text-base text-white shadow-text pt-3">
        For social campaigns, LocaliQ&rsquo;s automation extends to cross-channel optimization. Its technology monitors
        ad performance on Facebook, Instagram, TikTok, and Snapchat, and automatically diverts spend from placements or
        creative that are not delivering leads, redirecting it to those that are. The platform&rsquo;s certified
        experts (Facebook Blueprint and Snapchat Ads Manager) use these tools to further refine targeting and creative,
        but the day-to-day optimization is handled by the system itself. This means your campaigns are not only
        launched according to your objectives and budget, but are kept in alignment with what is actually working, hour
        by hour.</p>
      <p className="text-base text-white shadow-text pt-3">
        The logic for geographic targeting is also built into LocaliQ&rsquo;s configuration. The system can lock down
        exact geofencing and smart-radius targeting, ensuring that your local ads are shown only to users within your
        real service area. This prevents the common leak where small businesses pay for clicks from users far outside
        their operational range. Geek @ Your Spot configures these perimeters in LocaliQ&rsquo;s dashboard, based on
        your business&rsquo;s physical footprint and delivery zones, so your budget does not get drained by out-of-area
        leads.</p>
      <p className="text-base text-white shadow-text pt-3">
        Lead management and reporting configuration is a critical step. LocaliQ&rsquo;s Dash platform centralizes all
        inbound leads, calls, forms, chats, and texts, into one dashboard. Geek @ Your Spot sets up the mapping so every
        new inquiry is automatically captured and tracked, and the source (Google, Meta, organic, or direct) is
        attached to each lead. This enables the platform&rsquo;s AI to connect ad spend to actual sales or
        appointments, not just clicks or impressions. As a result, you get reporting that shows which campaigns are
        driving revenue, not just traffic.</p>
      <p className="text-base text-white shadow-text pt-3">
        LocaliQ&rsquo;s extension mechanism is its open API, which allows seamless integration with other systems such
        as CRMs (including HubSpot, Liine, ServiceTitan, and Yardi). With Geek @ Your Spot, this means your lead and
        sales data can flow directly into your existing business tools. The open API is not for custom scripting or
        building new automation logic on top of LocaliQ, but for connecting its reporting, call tracking, and CRM
        functions into your broader environment. This is how LocaliQ delivers a unified view of marketing performance,
        without requiring you to rebuild your tech stack.</p>
      <p className="text-base text-white shadow-text pt-3">
        The setup also includes configuring spending limits and budget controls. LocaliQ supports daily, lifetime,
        campaign-level, and account-level spending limits, especially for Meta Ads. These controls ensure you never
        overspend, even if a campaign takes off unexpectedly. Budgets can be set at the campaign or ad set level, and
        the platform&rsquo;s automation will keep spend within your limits while still reallocating funds to the
        best-performing ads.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot&rsquo;s role in configuring LocaliQ is to bridge the gap between your real-world business goals
        and the platform&rsquo;s automation. The consultancy defines your business objectives, assesses your data
        quality, chooses the right integrations, and sets up the system so you get actionable insights, not just
        dashboards. This is not a generic onboarding. The process includes mapping your sales cycle to LocaliQ&rsquo;s
        attribution logic, configuring lead qualification rules, and making sure every conversion is tracked back to
        its ad source. That is what makes the automation work for your business, not just for a generic account.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, LocaliQ&rsquo;s configuration is about connecting your accounts, mapping your data, and letting its
        AI-driven rules run the optimization. The only extension mechanism is its open API, which Geek @ Your Spot uses
        to tie LocaliQ into your existing systems. There is no scripting or custom code layer for you to manage. The
        value is in the automation logic that keeps your spend focused on what works, and the configuration is what
        makes that logic fit your real business needs.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-localiq-its-own-rules-and-automation-logic-and-its-extension-mechanism" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What gets configured in LocaliQ, its own rules and automation logic, and its extension mechanism
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-localiq-its-own-rules-and-automation-logic-and-its-extension-mechanism-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What gets configured in LocaliQ, its own rules and automation logic, and its extension mechanism
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
