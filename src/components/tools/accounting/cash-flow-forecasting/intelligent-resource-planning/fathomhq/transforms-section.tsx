export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Fathom changes what intelligent resource planning looks like for small businesses. Instead of spending
        hours every week cleaning up spreadsheets, teams get live dashboards that pull data directly from their
        accounting systems, invoicing tools, and bank feeds. The numbers are always current. Owners see their
        cash position, outstanding invoices, and profitability at a glance, no waiting for someone to finish the
        monthly close.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the biggest gains is time. Fathom automates manual tasks like consolidating accounts across
        locations, syncing data from multiple systems, and updating forecasts as new transactions post. For a
        team that used to spend days every month stitching together reports, this means hours are returned to
        focus on real analysis and decision-making. Case studies like Thrive Group show reporting time cut by
        75% after switching to Fathom, with instant clarity on where the business stands.</p>
      <p className="text-md text-white shadow-text pt-3">
        Errors drop sharply. Because Fathom pulls numbers straight from the source and updates daily, there is
        no risk of manual entry mistakes or broken formulas. Reports stay consistent, and managers can trust
        what they see. If a number looks off, it is easy to drill down to the detail, by location, department,
        or time period, to find the cause. This is not just a cleaner process; it is a safer one. Directors and
        investors get reports they can rely on, and the business avoids surprises at the end of the month.</p>
      <p className="text-md text-white shadow-text pt-3">
        Fathom makes it possible to track the metrics that drive the business, not just the ones that are easy
        to measure. Teams can set up dashboards for both financial and non-financial KPIs, think occupancy rates
        for a service business, or sales per employee for a shop. Custom KPIs can be built using data pulled
        from Google Sheets or Excel, so operational drivers sit right next to the financials. This lets managers
        spot trends early, catch issues before they grow, and tie decisions directly to performance.</p>
      <p className="text-md text-white shadow-text pt-3">
        Scenario planning, once a job for a spreadsheet expert, becomes accessible to the whole team. Fathom’s
        three-way forecasting updates the balance sheet and cash flow automatically as profit and loss figures
        change. Want to see what happens if you hire two more staff or lose a key customer? Model it in minutes
        without rebuilding the forecast from scratch. The system keeps everything linked, so changes ripple
        through the plan in real time. Teams can compare good, medium, and bad cases, then set targets with the
        Goal Seek tool to see what it takes to hit a number.</p>
      <p className="text-md text-white shadow-text pt-3">
        For multi-entity businesses, Fathom removes an entire layer of complexity. It consolidates up to 300
        entities in a single-currency group (or 50 for multi-currency), handling intercompany eliminations and
        letting each branch keep its own year-end. No more exporting and reformatting files for each location.
        The group view is always up to date, and managers can benchmark performance across divisions or compare
        trends over time.</p>
      <p className="text-md text-white shadow-text pt-3">
        Visual dashboards and reports make the numbers clear for everyone, not just the finance team. Fathom
        turns raw data into charts, graphs, and narrative commentary that show what is working and what needs
        attention. This is not just about making reports prettier, it is about making them actionable. Owners
        and managers can see, at a glance, where cash is coming from, where it is going, and what needs to
        change. The conversation shifts from “what happened” to “what do we do next.”</p>
      <p className="text-md text-white shadow-text pt-3">
        Integrations with Xero, QuickBooks, MYOB, Sage 50, Excel, and Google Sheets mean Fathom fits into most
        small business tech stacks without a major overhaul. Data flows in automatically, and the setup is
        designed for teams without a dedicated IT department. Once connected, the system keeps everything in
        sync, so reports always reflect the latest numbers.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real change is what teams stop doing. No more double data entry. No more chasing down numbers across
        apps. No more waiting for the month-end scramble to see if the business is on track. Instead, staff can
        focus on higher-value work, analyzing trends, planning for growth, or fixing the processes that slow
        things down. Fathom lets small businesses scale their reporting and forecasting without scaling their
        headcount.</p>
      <blockquote cite="https://www.fathomhq.com/blog/11-financial-kpis-you-should-be-tracking-in-2024" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Tracking financial KPIs is particularly important for small to medium-sized businesses, giving them the
        focus and insights to not only better navigate uncertain times, but also drive those initiatives that
        lead to operational efficiency, improve their liquidity and increase growth.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        For the business manager, this means decisions happen faster and with more confidence. See a cash
        shortfall coming? Adjust spending before it hits. Spot a department falling behind on collections?
        Intervene before it turns into a bigger problem. The numbers are not just accurate, they are timely,
        giving the team room to act.</p>
      <p className="text-md text-white shadow-text pt-3">
        Fathom does not just replace manual work with automation. It raises the quality of insight, connects
        every branch of the business in one view, and puts actionable information in the hands of
        decision-makers. For small businesses in South Florida, it is the difference between running blind and
        running with clarity, every week.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-fathom-removes-the-pain-from-intelligent-resource-planning" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Fathom Removes the Pain from Intelligent Resource Planning
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
              <h2 id="how-fathom-removes-the-pain-from-intelligent-resource-planning-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Fathom Removes the Pain from Intelligent Resource Planning
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
