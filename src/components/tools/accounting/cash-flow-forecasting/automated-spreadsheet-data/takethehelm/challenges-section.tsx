import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in South Florida, managing cash flow through manual data entry is a significant
        challenge. The process involves logging into multiple bank accounts, exporting CSVs from various
        systems, and juggling complex Excel spreadsheets. This not only consumes time but also leads to outdated
        data by the time it&#39;s compiled. This lag in data accuracy can result in missed opportunities and
        reactive decision-making, which is far from ideal in a competitive market.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the major issues is the seasonality chokehold. Businesses in the region often face sharp
        slowdowns during summer, having overspent during the profitable winter months. Without
        accurate&nbsp;<GlossaryLink slug="cash-flow-forecasting">cash flow forecasting</GlossaryLink>, they find
        themselves unable to cover overheads by mid-year. This cycle repeats, leaving business owners scrambling
        to manage their finances effectively.</p>
      <p className="text-md text-white shadow-text pt-3">
        Growth-induced bankruptcy is another risk. When a company takes on a large new client or project, the
        upfront costs can deplete cash reserves before the revenue comes in. This scenario is particularly
        dangerous for businesses that operate on thin margins, as they may not have the buffer to absorb such
        shocks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Receivables limbo is a common issue where businesses extend net-30 or net-60 payment terms without
        tracking payment delays. This affects their ability to meet their own vendor commitments, leading to
        strained relationships and potential supply chain disruptions. Coupled with reactive tax surprises from
        unexpected quarterly tax adjustments, businesses often resort to emergency borrowing, which can be
        costly.</p>
      <p className="text-md text-white shadow-text pt-3">
        Blind capital expenditures also pose a threat. Many businesses make significant purchases based on
        current bank balances without considering future cash flow projections. This can result in liquidity
        issues down the line, especially if unexpected expenses arise.</p>
      <p className="text-md text-white shadow-text pt-3">
        To address these challenges, businesses need a real-time view of their financial runway. Takethehelm
        provides this by automating the collection and analysis of financial data, ensuring that decisions are
        based on current information rather than outdated figures. This allows businesses to plan strategically
        and avoid the pitfalls of manual data entry.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-costs-of-manual-data-entry-in-south-florida-businesses">
                The Costs of Manual Data Entry in South Florida Businesses
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-costs-of-manual-data-entry-in-south-florida-businesses">
                The Costs of Manual Data Entry in South Florida Businesses
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
