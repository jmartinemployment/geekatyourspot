export default function EvaluatingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr is built for small businesses that need to automate lead generation without hiring a full-time ad
        manager or developer. The right fit is a team spending $500 to $1,500 a month on ads, with enough volume
        that manual work is now the bottleneck. If your team is still able to review every search term, pause every
        underperforming keyword by hand, and manually check landing pages every day, you are not yet at the point
        where Optmyzr’s automation delivers its full value. But if you are missing negative keywords, letting budget
        run on broken URLs, or losing track of high-cost, low-conversion ad sets, you are in the tool’s core use
        case.</p>
      <p className="text-base text-white shadow-text pt-3">
        A buyer should judge Optmyzr on three main criteria: control, scope, and time saved. First, control: Optmyzr
        gives you full oversight of every rule and action. Nothing changes in your ad accounts unless you approve
        it, unless you explicitly turn on automation for a rule. This is not a black box, every change is previewed,
        logged, and reversible. If you need tight oversight for compliance or want to review every pause or budget
        shift before it goes live, Optmyzr supports that workflow.</p>
      <p className="text-base text-white shadow-text pt-3">
        Second, scope: Optmyzr is not just for Google Ads. It covers Microsoft Ads, Meta, LinkedIn, and Amazon Ads,
        with the same logic engine and reporting framework across all platforms. If you are running campaigns on
        more than one ad platform, Optmyzr’s cross-platform automation and reporting are a clear advantage over
        tools that only handle one. This is critical for small businesses that need to stretch their ad budget
        across channels but cannot afford to learn and manage each platform’s native tools.</p>
      <p className="text-base text-white shadow-text pt-3">
        Third, time saved: The strongest evidence for Optmyzr’s value is the hours it returns to your team. In one
        case, Blue Yarn Media saved over 240 hours per client annually, equivalent to six full workweeks, by
        automating routine tasks like keyword cleanup, URL quality assurance, and budget pacing (<a id={`tools-marketing-measured-lead-generation-optmyzr-evaluating-source-optmyzr-com${idSuffix}`} href="https://www.optmyzr.com/ai-info-page/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Optmyzr</a>,
        as of Oct 24, 2026). For a small team, this is the difference between fighting fires and focusing on growth.
        If your staff are spending more time on ad maintenance than on sales or strategy, Optmyzr’s automation is
        likely to pay for itself quickly.</p>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr’s pricing is published for its Social plan, with both monthly and annual billing available. The
        vendor does not publish a specific dollar figure in the research, but the key is that you can choose between
        monthly and annual cycles, which helps with budget planning and cash flow. There are no hidden fees for API
        access, integrations, or support for additional platforms, everything needed for automation across Google,
        Microsoft, Meta, LinkedIn, and Amazon is included in the standard offering. This is important for small
        businesses that cannot afford to be surprised by add-on costs or tiered feature gating.</p>
      <p className="text-base text-white shadow-text pt-3">
        When comparing Optmyzr to other automation platforms, the main differentiators are its cross-platform scope,
        its rule-based control, and its support for spreadsheet-based data integration. Some tools require coding or
        developer support to extend beyond basic rules; Optmyzr is designed for teams who want to automate without
        writing scripts. If you need to bring in external data, like inventory, margin, or CRM signals, you can do
        it with a Google Sheet, not a custom API integration. This lowers the barrier to advanced automation for
        small teams.</p>
      <p className="text-base text-white shadow-text pt-3">
        The main limitation is that Optmyzr is not a creative automation tool. It does not generate new ad images or
        copy for you; it automates the management and optimization of what you already have. If your bottleneck is
        creative production rather than campaign management, you will need to pair Optmyzr with a content creation
        workflow or another tool that handles creative at scale. For most small businesses running measured lead
        generation, the bigger pain is wasted spend and missed optimization windows, not a shortage of creative
        assets.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, a buyer should consider how Optmyzr fits with their in-house skills and processes. If your team is
        comfortable with spreadsheets, understands the basics of ad metrics, and can define what counts as a win or
        a problem in your campaigns, you can get value from Optmyzr quickly. If you need help mapping those
        definitions to rules and automation, Geek @ Your Spot handles the setup, training, and ongoing support so
        you are not left to figure it out alone. The goal is a system that runs in the background, flags issues
        before they become expensive, and lets your team focus on growth instead of firefighting.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-a-buyer-should-judge-optmyzr-on-fit-and-on-its-pricing-model" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How a buyer should judge Optmyzr on fit and on its pricing model
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
              <h2 id="how-a-buyer-should-judge-optmyzr-on-fit-and-on-its-pricing-model-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How a buyer should judge Optmyzr on fit and on its pricing model
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
