import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Dryrun transforms the way businesses manage cash flow by integrating real-time data and sophisticated
        scenario modeling. At its core, Dryrun operates through a series of interconnected steps that
        streamline&nbsp;cash
        flow forecasting&nbsp;and decision-making processes.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step in Dryrun&#39;s operation is data synchronization. Dryrun connects directly to
        leading&nbsp;ERP&nbsp;and
        accounting systems such as NetSuite, Sage Intacct, Microsoft Dynamics 365 Business Central, and QuickBooks
        Online. This integration ensures that all financial data is up-to-date, eliminating the need for manual data
        entry and reducing errors.
        Automated&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;syncs
        continuously pull live bank balances, open invoices, and vendor bills directly into the platform.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once the data is synchronized, Dryrun employs transaction-level overrides to refine cash flow forecasts.
        This feature allows finance teams to adjust for specific transaction realities such as invoice bumping and
        split payments. By doing so, businesses can gain a more accurate view of their liquidity, tailored to their
        unique operational needs. This precision helps mitigate risks associated with generalized assumptions often
        found in traditional forecasting methods.</p>
      <p className="text-base text-white shadow-text pt-3">
        Dryrun&#39;s scenario modeling is a critical component of its operation. It allows users to create dynamic
        &quot;what-if&quot; scenarios that overlay real-time data. This feature is particularly useful during
        periods of economic volatility, enabling businesses to foresee potential cash flow challenges and adjust
        their strategies accordingly. Finance leaders can simulate various operational shifts, such as delayed
        receivables or renegotiated vendor terms, without disrupting core accounting records.</p>
      <p className="text-base text-white shadow-text pt-3">
        The final step involves real-time reporting and visualization. Dryrun converts complex financial data into
        intuitive visuals that update automatically. This functionality provides leadership with clear insights into
        the company&#39;s cash position, facilitating informed decision-making without the need to wade through
        spreadsheets. By providing a comprehensive view of daily liquidity and future cash flow, Dryrun empowers
        businesses to make proactive, confident financial decisions.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-dryrun-mechanically-operates-a-step-by-step-guide">
                How Dryrun Mechanically Operates: A Step-by-Step Guide
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-dryrun-mechanically-operates-a-step-by-step-guide-lg">
                How Dryrun Mechanically Operates: A Step-by-Step Guide
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
