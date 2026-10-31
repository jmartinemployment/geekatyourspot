import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Plai&rsquo;s configuration is about setting up automation rules, audience targeting, and reporting logic to match
        how your team works and what your campaigns need. Geek @ Your Spot handles the technical setup, data mapping, and
        integration steps that make Plai run smoothly in a small business environment. The platform itself is
        configuration-driven, there is no API or scripting layer exposed for custom extensions, so the work is in how
        Plai&rsquo;s built-in options are set up and connected to your existing stack.</p>
      <p className="text-base text-white shadow-text pt-3">
        Plai&rsquo;s core automation rules center on budget allocation, performance monitoring, and campaign updates. The
        platform lets you define how budgets should shift between campaigns and channels based on live results. For
        example, you can set Plai&rsquo;s Optimization Folders to group campaigns across Google, Meta, and TikTok, then
        instruct the system to move spend toward the ads that are driving the best return at any given moment. This is
        not a one-time rule, it is a continuous process where Plai&rsquo;s AI watches engagement, conversion, and cost
        metrics and reallocates budgets as the data changes.</p>
      <p className="text-base text-white shadow-text pt-3">
        Audience targeting in Plai is configured through its Audience Builder. Geek @ Your Spot sets up prebuilt audience
        packs that match your business&rsquo;s best prospects, demographics, interests, behaviors, and location are all
        mapped out so you do not waste spend on out-of-market clicks. For businesses with multiple brands or lines, each
        workspace in Plai keeps its own targeting, creative, and analytics siloed and organized, so there is no risk of
        cross-contamination between campaigns or clients.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation logic in Plai covers more than just shifting budgets. The system can automatically pause
        underperforming ads, refresh creative when results drop, and adjust bids up or down as performance trends shift.
        These rules are configured in the dashboard: you decide the thresholds and triggers, and Plai handles the
        execution. Geek @ Your Spot consults on what rules make sense for your goals and sets up the initial logic so
        your campaigns stay on track without daily manual tweaks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reporting and performance tracking are also set up during configuration. Plai&rsquo;s dashboards show live
        performance across all your channels, with metrics tailored to what your team needs to see, cost per lead,
        conversion rate, <GlossaryLink slug="return-on-ad-spend">ROAS</GlossaryLink>, or whatever drives your business.
        Geek @ Your Spot ensures your reporting lines up with your sales data, so you can finally see which ads are
        actually bringing in customers and which are just burning budget.</p>
      <p className="text-base text-white shadow-text pt-3">
        For billing and client management, Plai supports automated invoicing and customizable pricing models. You can
        set up monthly subscriptions or take a percentage of ad spend. Geek @ Your Spot configures these options to match
        how you want to bill clients or divisions, and makes sure everything lines up with your accounting system.</p>
      <p className="text-base text-white shadow-text pt-3">
        Plai&rsquo;s extension mechanism is limited to the integrations it already supports, Stripe and GoHighLevel are
        the main external connections, used for billing and CRM automation. There is no open API for custom
        integrations, so if you need to connect other systems, Geek @ Your Spot will map your workflows to what Plai can
        automate natively, or recommend where a manual step is still required.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real gap Geek @ Your Spot closes is in translating your business needs into Plai&rsquo;s rule-driven
        automation. DIY setups often miss the details that matter, like mapping sales outcomes back to ad performance, or
        configuring audience packs that actually reflect your market. Geek @ Your Spot brings technical experience on
        both the data and marketing side, so your Plai deployment is not just live, but tuned to deliver measurable
        improvements in spend efficiency and lead quality from day one.</p>
      <p className="text-base text-white shadow-text pt-3">
        Plai&rsquo;s configuration is not a one-and-done job. As your campaigns run and your business goals evolve, Geek
        @ Your Spot provides ongoing support to update rules, refresh creative templates, and adjust reporting. This
        keeps your optimization engine aligned with real-world changes, so you are not stuck with a static setup that
        drifts out of sync with your needs.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-plai-its-automation-rules-and-how-geek-your-spot-closes-the-diy-gap" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What gets configured in Plai, its automation rules, and how Geek @ Your Spot closes the DIY gap
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
              <h2 id="what-gets-configured-in-plai-its-automation-rules-and-how-geek-your-spot-closes-the-diy-gap-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What gets configured in Plai, its automation rules, and how Geek @ Your Spot closes the DIY gap
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
