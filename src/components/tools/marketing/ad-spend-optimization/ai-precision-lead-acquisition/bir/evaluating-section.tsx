export default function EvaluatingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Judging whether Bir is the right fit for your business starts with your ad management pain points and your
        appetite for automation. Bir is built for small teams that want to move away from manual checks and toward a
        system that manages risk, scales spend, and cuts wasted budget without adding headcount. Its strengths are in
        continuous, rules-based optimization, real-time checks, and the ability to use your own metrics and data
        sources, not just what the ad platform gives you.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first fit question is whether your business runs enough campaigns, or spends enough on ads, for manual
        management to be a real risk. If you have a handful of campaigns and check them once a week, Bir&rsquo;s
        automation may be more than you need. But if you are running dozens of ads, across multiple platforms or
        markets, and want to catch spend spikes or performance drops before they cost you, Bir&rsquo;s 15-minute rule
        cycles and custom logic are a strong match.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bir&rsquo;s fit is especially strong for businesses with fragmented data, where sales, leads, or conversions are
        tracked in spreadsheets, Google Analytics, or third-party attribution tools, not just inside the ad accounts. If
        you need to act on real business outcomes, not just what Facebook or Google reports, Bir&rsquo;s integrations
        let you pull that data into its automation rules. This is where Geek @ Your Spot makes a difference: mapping your
        data sources, building rules that use your real KPIs, and making sure automation decisions are based on the
        right numbers.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bir is also a good fit for teams that want to scale safely. If you have hit a ceiling because you cannot watch
        every campaign around the clock, Bir&rsquo;s safety nets, spend caps, anomaly detection, and gradual scaling,
        let you grow accounts without risking runaway costs. Teams that have used Bir, like Webtopia and Loop Earplugs,
        have scaled daily spend by large multiples while keeping control, because the automation reacts instantly to
        changes rather than waiting for a human to check in.</p>
      <p className="text-base text-white shadow-text pt-3">
        When considering Bir&rsquo;s pricing model, the key is to look at what you get for the cost: automation that
        runs every 15 minutes, across all your ad accounts, using your own custom rules and data (<a id={`tools-marketing-precision-lead-acquisition-bir-evaluating-source-nothink${idSuffix}`} href="https://bir.ch/case-studies/nothink" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Bir</a>,
        as of Oct 25, 2026). The research does not state a specific price, but Bir&rsquo;s value comes from the time and
        budget it saves by cutting manual work and wasted spend. If your team spends hours each week on reporting,
        budget checks, or pausing underperformers, Bir&rsquo;s automation replaces that with a system that does not
        sleep or miss a change.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bir&rsquo;s pricing is not based on a flat feature set but on the level of automation and integration you need.
        For a small team, the main cost is in setup, mapping your data, defining your rules, and making sure automation
        matches your business. Ongoing costs are about maintaining and updating your rules as your business changes.
        Geek @ Your Spot&rsquo;s role is to keep this process smooth, so you do not pay for features you do not use or
        automation that does not fit your workflow.</p>
      <p className="text-base text-white shadow-text pt-3">
        A buyer should also weigh the cost of not automating. Manual ad management carries hidden costs: missed spend
        spikes, delayed reactions to performance drops, and the opportunity cost of time spent on low-value tasks.
        Bir&rsquo;s automation is designed to make sure your budget flows to what works and stops funding what does not,
        without waiting for a person to notice. For teams managing multiple accounts, the ability to duplicate rules and
        manage everything from one place multiplies the value.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bir is not the right fit for every business. If your ad spend is low, your campaigns are simple, or you are
        comfortable with occasional overspend or performance drops, a lighter tool or manual checks may be enough.
        Bir&rsquo;s real value comes when the risk of manual error, slow reaction, or fragmented data is high. The
        businesses that get the most from Bir are those that want to move fast, scale safely, and base every budget
        decision on real, up-to-date data.</p>
      <p className="text-base text-white shadow-text pt-3">
        When comparing Bir to other tools, focus on what it does differently. Bir&rsquo;s rule logic is more flexible
        than most native ad platform automation, with custom metrics, nested conditions, and multi-account support. Its
        integrations go beyond in-platform data, letting you act on what actually matters to your business. The real
        test is not just whether Bir can automate a pause or a budget increase, but whether it can do so based on the
        right signals, at the right time, with no manual lag.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, judge Bir on whether it fits your volume, your data complexity, and your appetite for automation.
        Weigh its pricing against the hours and budget it can save, not just the sticker price. Geek @ Your Spot&rsquo;s
        job is to make sure Bir&rsquo;s automation fits your business, not just your ad account, so you get control,
        speed, and savings where they matter most.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-bir-on-fit-and-on-its-pricing-model" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to judge Bir on fit and on its pricing model
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
              <h2 id="how-to-judge-bir-on-fit-and-on-its-pricing-model-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to judge Bir on fit and on its pricing model
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
