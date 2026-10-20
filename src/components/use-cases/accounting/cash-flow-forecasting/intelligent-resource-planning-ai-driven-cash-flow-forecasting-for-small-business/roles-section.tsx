
export default function RolesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When a business replaces
        manual&nbsp;cash
        flow forecasting&nbsp;and intelligent resource planning with an integrated, intelligent
        system, the biggest shift is not just in the numbers, it is in the people who use them. Every role that
        once spent hours chasing down figures, double-checking spreadsheets, or firefighting last-minute
        surprises sees their work change, sometimes overnight.</p>
      <p className="text-md text-white shadow-text pt-3">
        Start with the bookkeeper or office manager. In most small businesses, this person is the unsung hero
        who keeps the wheels turning. Before automation, they are buried in data entry, copying numbers from
        emailed invoices into QuickBooks, then into a spreadsheet, then reconciling the two. With a system like
        Take the Helm or Cashflowfrog pulling live AR and AP data, that busywork drops off the list. The same
        person now spends less time typing and more time reviewing exceptions, flagging a client who always pays
        late, or a vendor bill that looks out of line. They become a reviewer, not a data janitor.</p>
      <p className="text-md text-white shadow-text pt-3">
        For the owner or GM, the shift is just as sharp. Instead of waiting for the monthly close to see if
        there is enough cash for payroll or a new hire, they get live dashboards and clear short-term forecasts.
        Jirav and Fathom bring together everything from sales pipeline to hiring plans, so leaders can run real
        &quot;what if&quot; scenarios without waiting for the finance team to build a new model. This means
        decisions, like whether to take on a big new order, or hold off on buying equipment, are made with eyes
        open, not on instinct or outdated numbers.</p>
      <p className="text-md text-white shadow-text pt-3">
        Sales and project managers also feel the change. In the old world, a big order might show up as a win,
        but no one would see the cash impact until weeks later, often after a surprise shortfall. With tools
        that connect sales data to cash forecasts, like Jirav’s unified planning or
        Fathom’s&nbsp;KPI&nbsp;dashboards,
        a manager can see not just how much is booked but when the money will hit the account. If a client is
        likely to pay late based on Cashflowfrog’s payment scoring, the team can adjust terms or follow up
        sooner. This closes the loop between sales and finance, breaking the cycle of overpromising and
        underdelivering on cash expectations.</p>
      <p className="text-md text-white shadow-text pt-3">
        The change is not just about time saved. It is about confidence and control. When everyone works from
        the same live forecast, the blame game over &quot;whose numbers are right&quot; stops. Meetings stop
        being about reconciling what happened last month, and start focusing on what needs attention now. The
        finance lead, once stuck in the weeds of spreadsheet maintenance, now spends more time advising,
        pointing out trends in Fathom’s visual dashboards, or highlighting shifts in customer payment patterns
        from Cashflowfrog. They become a partner in planning, not just a report generator.</p>
      <p className="text-md text-white shadow-text pt-3">
        Even outside finance, the impact is real. An operations manager, for example, can see the true cost and
        timing of upcoming inventory buys in QuickBooks, with the assurance that the numbers reflect every
        recent sale and payment. If the business has multiple locations or divisions, Fathom’s consolidation
        tools make it possible to see which units are running lean and which are burning cash, all without
        manual rollups. The result is a business that can scale, adding new sites, new staff, or new services,
        without multiplying the administrative burden.</p>
      <p className="text-md text-white shadow-text pt-3">
        Let’s go back to the Friday afternoon from the opening. In the old routine, the team would be scrambling
        to make sense of cash before the weekend, worried a payment would bounce or a bill was missed. With
        integrated planning, the same team leaves on time, knowing the dashboard is current and any red flag has
        already tripped an alert. Their work shifts from chasing fires to building the business.</p>
      <p className="text-md text-white shadow-text pt-3">
        The bottom line: intelligent resource planning tools do not just automate tasks, they elevate roles.
        Bookkeepers become controllers. Owners become planners. Managers become decision-makers, not just task
        completers. The work is more strategic, less reactive, and, most importantly, everyone spends less time
        on the grind and more time on growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-feels-the-shift-the-roles-that-change-when-intelligent-planning-goes-live" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Feels the Shift: The Roles That Change When Intelligent Planning Goes Live
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
              <h2 id="who-feels-the-shift-the-roles-that-change-when-intelligent-planning-goes-live-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Feels the Shift: The Roles That Change When Intelligent Planning Goes Live
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
