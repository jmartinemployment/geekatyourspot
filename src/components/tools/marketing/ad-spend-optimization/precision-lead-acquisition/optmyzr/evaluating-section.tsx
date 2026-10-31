import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr is best judged on how closely it matches your business&rsquo;s size, ad complexity, and appetite for
        automation, not just on price alone. The right fit comes down to whether the platform gives you the control and
        visibility you need, without demanding technical skills your team does not have.</p>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr&rsquo;s pricing is published by the vendor and is offered in both monthly and annual billing cycles. The
        Social plan, for example, lets you choose the billing schedule that fits your cash flow. This is important for
        small businesses in South Florida where budget planning is tight and you need predictable costs. There are no
        hidden fees or forced add-ons in the evidence, what you see in the plan is what you get. This makes it easier to
        compare to other tools that may tie pricing to ad spend or require extra payments for integrations.</p>
      <p className="text-base text-white shadow-text pt-3">
        The main question is not whether Optmyzr is the cheapest tool, but whether it saves you the time and errors that
        cost you more in the long run. For small teams that do not have a technical PPC manager or a developer on staff,
        the value is in how much manual work the platform replaces. The case studies on Optmyzr&rsquo;s own pages show
        agencies saving over 240 hours per client annually and cutting <GlossaryLink slug="customer-acquisition-cost" className="text-[#0B162A] hover:underline">customer
        acquisition cost</GlossaryLink> by more than a third, outcomes that matter more than a few dollars&rsquo;
        difference in monthly fees (<a id={`tools-marketing-precision-lead-acquisition-optmyzr-evaluating-source-ai-info-page${idSuffix}`} href="https://www.optmyzr.com/ai-info-page/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Optmyzr</a>,
        as of Oct 24, 2026). If your current ad management drains hours every week on reporting, pausing bad keywords, or
        chasing down broken landing pages, the platform pays for itself by returning that time to strategy and growth.</p>
      <p className="text-base text-white shadow-text pt-3">
        Fit also means looking at the platform&rsquo;s scope. Optmyzr is built for multi-platform management, Google
        Ads, Microsoft Ads, Meta, LinkedIn, Amazon Ads, and works as a single dashboard for all of them. If you only run
        a single Google Ads account and never plan to expand, a lighter-weight tool might be enough. But if you need to
        manage campaigns across several platforms, or want to unify reporting and automation, Optmyzr&rsquo;s
        cross-platform coverage is a clear advantage. The platform is not just for agencies: small businesses with
        multiple ad accounts or brands can use the same automation and alerting to keep control without multiplying their
        workload.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another fit question is how much control you want over automation. Optmyzr gives you the ability to preview every
        change before it goes live, or to run in fully automated mode if you are comfortable. You decide whether to
        automate routine changes, like pausing ads, adjusting bids, or reallocating budget, or to get alerts and review
        suggestions manually. This flexibility means you can start with monitoring and alerts, then move to full
        automation as your comfort grows. If you want a platform that acts only with your approval, Optmyzr supports that
        out of the box.</p>
      <p className="text-base text-white shadow-text pt-3">
        The extension mechanism is another test of fit. Optmyzr lets you import business data through spreadsheets for
        more advanced rules, but it does not require you to write code or maintain custom scripts. If your business needs
        to connect outside data, like inventory, margin, or CRM information, to your ad rules, Optmyzr handles it through
        its built-in integrations. For most small businesses, this covers the real-world scenarios you face, without the
        overhead of a developer or IT staff.</p>
      <p className="text-base text-white shadow-text pt-3">
        When it comes to evaluating Optmyzr against other tools, look at what actually gets automated and how much of
        your process stays manual. Some platforms offer only reporting or recommendations, leaving you to make the
        changes yourself. Optmyzr is built to execute your rules directly, removing the lag and risk of human error. If
        your goal is to reduce manual work and avoid missed spend or broken campaigns, this is the feature that matters
        most.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget management is another area to weigh. Optmyzr&rsquo;s budget tools let you track spend, set pacing alerts,
        and automate adjustments across all supported platforms. If you are running campaigns on Google, Microsoft, Meta,
        and Amazon, this unified approach means you do not need to log into every platform to see where your money is
        going or to catch a runaway spend before it drains your account. For a small business, this is the difference
        between proactive control and reactive damage control.</p>
      <p className="text-base text-white shadow-text pt-3">
        On the question of support and onboarding, Optmyzr&rsquo;s evidence shows that migration is straightforward,
        connect your ad accounts and your live campaigns appear in the dashboard. If you need help moving automations,
        alerts, or workflows from another tool, the onboarding team can assist. For a small business, this means you do
        not face weeks of downtime or risk losing your existing setup. Geek @ Your Spot handles the initial
        configuration, data mapping, and training, so you get up and running quickly and with less disruption.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, consider how Optmyzr fits into your overall tech stack. The platform is designed to work with your
        existing ad accounts and does not force you to abandon other tools you rely on. If you use Google spreadsheets,
        Slack, or Microsoft Teams for reporting and alerts, Optmyzr plugs into those workflows. This keeps your team
        working in familiar systems, without adding complexity or requiring a complete overhaul of your processes.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, judging Optmyzr&rsquo;s fit and pricing is about more than comparing plan costs. It is about how much
        time, control, and error reduction the platform brings to your ad management, and whether it matches your
        business&rsquo;s real needs. If you are a small business in Miami-Dade, Broward, or Palm Beach looking for a way
        to automate ad spend optimization without hiring a technical PPC expert, Optmyzr is built to close that gap.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-optmyzrs-fit-and-pricing-for-your-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to judge Optmyzr&rsquo;s fit and pricing for your business
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-optmyzrs-fit-and-pricing-for-your-business-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to judge Optmyzr&rsquo;s fit and pricing for your business
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
