export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Cashflowfrog transforms Intelligent Resource Planning from a manual chore into a live, automated
        process. It connects directly to accounting software like QuickBooks, Xero, Sage Intacct, Odoo, Zoho
        Books, and FreshBooks, as well as bank accounts through Plaid or Excel imports. This means the numbers
        in the forecast are always current, no more re-keying data or waiting for end-of-month reports. When a
        sale closes, an invoice is sent, or a payment clears, the forecast updates automatically. The team no
        longer spends hours copying figures between tools or fixing broken spreadsheet formulas.</p>
      <p className="text-md text-white shadow-text pt-3">
        Every forecast in Cashflowfrog is built on real transaction data. That removes the risk of human error
        and gives a true picture of cash on hand, not just a guess based on last month’s numbers. The dashboard
        shows current cash status, cash tied up in invoices and bills, and what the business will have in a
        week, a month, or a quarter. This is not a static snapshot; it is a rolling, three-year forecast that
        updates daily. The team can drill down from any figure to the exact transaction behind it, making it
        easy to trace the cause of a cash dip or a spike in expenses.</p>
      <p className="text-md text-white shadow-text pt-3">
        Cashflowfrog does more than just automate data entry. It brings real intelligence to intelligent
        resource planning. AI-driven projections spot new patterns after every sync, suggesting adjustments
        based on actual business behavior. Rule-based projections let the business tie expenses to income, such
        as setting ad spend as a percentage of revenue, so the forecast adjusts automatically as sales rise or
        fall. Scenario planning is built in. The team can test what happens if a major client pays late, a big
        bill hits early, or sales dip for a month. Switching between scenarios is instant, and every scenario
        can be compared side by side.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated accounts receivable features rank customers by payment punctuality, showing who pays on time
        and who needs a nudge. This helps the business set smarter credit terms and chase the right invoices
        first, reducing the risk of cash gaps caused by late-paying clients. Alerts flag projected low balances
        before they become a problem, so the team can act early, delaying a payment, drawing on a line of
        credit, or following up on overdue invoices before a check bounces. The system also matches payments to
        invoices automatically, keeping the cash view clean and reducing reconciliation work.</p>
      <p className="text-md text-white shadow-text pt-3">
        Spreadsheet data is handled without manual effort. Cashflowfrog imports bank transactions directly from
        Excel for businesses that do not run accounting software. For teams with more complex setups, it
        consolidates multiple entities and currencies in a single view. The forecast can be broken down by
        entity, department, project, or customer, and every number is traceable to its source. Reports are
        client-ready and branded, so sharing insights with stakeholders is fast and professional, no more
        exporting, formatting, and emailing files back and forth.</p>
      <p className="text-md text-white shadow-text pt-3">
        For intelligent resource planning, this means decisions happen with up-to-date, trustworthy data. The
        business knows exactly how much cash is available, which customers are slowing down collections, and
        what the impact of a new hire or a delayed payment will be. The forecast is not just a report; it is a
        live tool for making choices every day. Teams can plan for taxes, growth, and gaps without guessing.
        They see risks before they hit and can respond in time, not after the fact.</p>
      <p className="text-md text-white shadow-text pt-3">
        The biggest win is the time and stress Cashflowfrog removes from the week. Instead of scrambling to pull
        numbers together, the team spends those hours on sales, service, and strategy. Staff are not tied up
        checking formulas or chasing missing payments, they are working on what matters. The forecast earns
        trust because it is always current, always accurate, and always ready to answer the next question. That
        is what Intelligent Resource Planning should look like: less manual work, fewer errors, and more
        confident decisions, every week.</p>
      <blockquote cite="https://cashflowfrog.com/" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Connect your accounting software and get a rolling 36-month forecast in minutes.</blockquote>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-cashflowfrog-actually-does-for-intelligent-resource-planning" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Cashflowfrog Actually Does for Intelligent Resource Planning
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-cashflowfrog-actually-does-for-intelligent-resource-planning-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Cashflowfrog Actually Does for Intelligent Resource Planning
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
