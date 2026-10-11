import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        In the world of small business finance, manual spreadsheet management is a significant drain on resources.
        Every month, fractional CFOs and business owners find themselves trapped in a cycle of coding formulas,
        building three-statement structures, and cleaning ledger data. This labor-intensive process consumes over 20
        hours that could be better spent on strategic analysis and decision-making. Instead of leveraging insights
        to propel their businesses forward, they are stuck in a loop of reconciling rows and columns, often
        resulting in errors and outdated information that derail financial planning.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the most pressing issues is over-hiring personnel based on current high cash balances, without
        considering upcoming multi-week payroll liabilities. This oversight often leads to financial strain when the
        cash flow doesn&#39;t align with payroll demands. Additionally, the misalignment across the Income
        Statement, Balance Sheet, and Cash Flow statements further complicates financial projections, making them
        detached from reality and unreliable for decision-making.</p>
      <p className="text-md text-white shadow-text pt-3">
        Business owners also face the risk of drawing owner distributions or partner pay without accurately
        calculating mid-month working capital minimums. This can lead to cash shortages and disrupt operations.
        Furthermore, reacting to a major client slashing spend or churning is often too late; without proactive
        modeling of defensive strategies, businesses find themselves on the back foot.</p>
      <p className="text-md text-white shadow-text pt-3">
        The reliance on expensive full-time FP&amp;A hires or out-of-budget advisory services to interpret core
        business trends is another costly consequence of manual spreadsheet management. For many small businesses,
        these options are financially unviable, leaving them without the insights needed to navigate complex
        financial landscapes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Clockwork breaks this cycle by automating the entire process, providing a 52-week rolling cash forecast and
        an&nbsp;<GlossaryLink slug="ai">AI</GlossaryLink>-powered financial analyst in just five minutes. This
        eliminates the need for manual coding and complex spreadsheet management, allowing business owners to focus
        on strategic decision-making and growth. By removing the bottleneck of manual spreadsheet management,
        Clockwork empowers businesses to act like CEOs, not accountants.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-manual-spreadsheet-management">
                The Cost of Manual Spreadsheet Management
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-manual-spreadsheet-management">
                The Cost of Manual Spreadsheet Management
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
