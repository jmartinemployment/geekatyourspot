import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Hootsuite is designed for small and medium-sized businesses that want to automate content planning
        without the overhead of a full in-house marketing department. Before you buy, you need to know if
        Hootsuite fits your team, your workflow, and your budget. The right tool is not the one with the most
        features; it is the one that matches how you actually work and what you need to get done.</p>
      <p className="text-md text-white shadow-text pt-3">
        Start with your team’s size and structure. Hootsuite’s Professional plan is built for growing brands
        and marketing teams that want more automation, deeper insights, and tighter control over their social
        media. If your team is one person managing everything, Hootsuite’s scheduling, AI-powered content
        creation, and analytics are enough to replace hours of manual work. If you have a small team with
        multiple contributors, the platform’s permission controls and approval workflows ensure nothing goes
        live without review. However, if your workflow depends on advanced collaboration, complex approval
        chains, or detailed productivity reporting, you may outgrow the Professional plan and need to look at
        Hootsuite Advanced or Enterprise.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing is straightforward: Hootsuite offers a free trial, so you can test the platform before
        committing. The Professional plan includes unlimited social profiles, advanced analytics, AI-powered
        engagement tools, and customizable reporting. What you pay is tied to the features and level of
        automation you need, not a flat rate for unused extras. Hootsuite does not hide its pricing behind
        sales calls, but the exact dollar amount is published on their site and updates as plans change. For
        small businesses, this means you know what you are paying for and can scale up or down as your needs
        change.</p>
      <p className="text-md text-white shadow-text pt-3">
        When judging fit, weigh the following criteria:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>How many social accounts and platforms do you need to manage? Hootsuite supports major networks and unlimited profiles in the Professional plan.</li>
        <li>Do you need AI-powered content generation, scheduling, and analytics, or are you looking for basic posting and monitoring?</li>
        <li>Will your workflow benefit from automated approval chains, role-based permissions, and a shared content calendar? If your process is ad hoc, you may not use these features, but if you have compliance or brand governance needs, they are essential.</li>
        <li>How important is integration with Slack, Microsoft Teams, or other tools your team already uses? Hootsuite’s built-in integrations mean less disruption and faster adoption.</li>
        <li>Do you require advanced reporting, competitive benchmarking, and trend forecasting? Hootsuite’s analytics are strong, but if you need deep productivity tracking or customer care routing, you may need to move up a tier.</li>
        <li>What is your risk tolerance for compliance? If you are in a regulated industry, Hootsuite’s approval workflows and audit trails are a must-have.</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        A buyer in Miami-Dade, Broward, or West Palm Beach should also consider local needs. Hootsuite’s
        real-time social listening and trend detection are especially valuable for businesses that need to
        catch local topics as they break, not days later. The platform’s AI is trained on live social data, so
        your campaigns can reflect what is actually happening in your market, not just national trends. This
        is a concrete edge over tools that rely on slow, sampled data feeds.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real measure of fit is how much manual work Hootsuite removes from your week. If your team spends
        hours copying content between platforms, chasing approvals, or missing engagement windows, Hootsuite’s
        automation pays for itself in time saved and errors avoided. The platform is not for everyone, if you
        have a simple social presence or need only basic posting, lighter tools may be a better fit. But for
        small businesses ready to step up to data-driven, automated content planning, Hootsuite brings the
        workflow, controls, and intelligence that used to be out of reach for anyone but large enterprises.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC helps you judge this fit before you commit. The implementation process starts with a
        free consultation that maps your business objectives,&nbsp;<GlossaryLink slug="data-quality" className="text-[#0B162A] hover:underline">data
        quality</GlossaryLink>, and workflow needs to what Hootsuite offers. The team walks you through what
        gets configured, what can be automated, and how integrations work with your existing systems. This is
        not a generic demo, it is a technical assessment of whether Hootsuite’s architecture matches your
        environment and your goals. If it does, you move forward with a clear plan; if not, you avoid a costly
        mismatch.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, do not buy Hootsuite for the badge or the feature list. Buy it because it fits your actual
        workflow and delivers measurable hours back to your team. Use the free trial to test it in your real
        environment, and work with an implementation partner who can configure it for your specific needs.
        That is how you judge fit and value, not by what the tool promises, but by what it removes from your
        to-do list.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-hootsuite-fit-plan-and-what-to-weigh-before-buying" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Hootsuite: Fit, Plan, and What to Weigh Before Buying
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-hootsuite-fit-plan-and-what-to-weigh-before-buying-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Hootsuite: Fit, Plan, and What to Weigh Before Buying
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
