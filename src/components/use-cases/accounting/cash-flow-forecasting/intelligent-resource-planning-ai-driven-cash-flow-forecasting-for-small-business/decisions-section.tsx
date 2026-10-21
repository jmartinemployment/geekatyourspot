
export default function DecisionsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The first moves in an Intelligent Resource Planning rollout shape everything that follows. South Florida
        business owners often think the main question is which software to buy or whether the team will adopt
        it. That comes later. The decisions that really set the path are made weeks before the first user logs
        in, and most cannot be reversed without starting over or living with friction for years.</p>
      <p className="text-base text-white shadow-text pt-3">
        Everything starts with setting a clear business objective. This is more than &quot;save time on
        forecasting&quot; or &quot;make better decisions.&quot; It has to be a measurable outcome that matters
        to the team, like cutting the monthly close from twelve days to five, or getting a working capital
        forecast that is accurate to within 5% for the next eight weeks. Without this, the project drifts: every
        later choice about data, process, and tools is made in a vacuum, and nobody can tell if the new system
        works better or just looks different.</p>
      <p className="text-base text-white shadow-text pt-3">
        At this stage, the mistake that cannot be undone is letting the goal stay vague. Once implementation
        starts, the business adapts to the first version of the process, and every workaround or manual fix
        becomes a habit. If the team realizes months later that the original setup is missing a key report or
        can&#39;t handle a new location, the only way out is a messy retrofit or a second, even harder rollout.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next comes the&nbsp;data quality&nbsp;assessment. This
        is the checkpoint most teams rush or skip, thinking they will &quot;clean as they go.&quot; But if the
        books are a mix of old spreadsheets, desktop files, and unsynced bank feeds, any forecast built on them
        will be weak. A system like Jirav, which relies on driver-based models and three-way forecasting, only
        delivers real value if the inputs are accurate and consistent. Take the Helm and Cashflowfrog both
        automate a lot of cash flow tracking, but their outputs are only as good as the data they pull from
        QuickBooks, Xero, or other ledgers.</p>
      <p className="text-base text-white shadow-text pt-3">
        The key decision here is to enforce a data standard before integration. That means agreeing on which
        system is the source of truth for receivables, payables, payroll, and bank balances. It also means
        setting the rules for how transactions are coded and how often ledgers are closed. Once the system
        starts syncing, fixing bad history or changing which tool &quot;owns&quot; a process is costly and
        disruptive. Leave this step loose, and you end up with dashboards that never match the bank or forecasts
        that have to be rebuilt every month.</p>
      <p className="text-base text-white shadow-text pt-3">
        Choosing the right tool is next, but the critical move is to pick for fit, not features. Many small
        businesses in Miami-Dade, Broward, and Palm Beach counties are tempted by
        all-in-one&nbsp;ERP&nbsp;platforms, thinking more functionality
        means better outcomes. In practice, the best results come from tools that fit the current workflow and
        can scale as needs grow. For example, QuickBooks keeps the familiar interface but adds code-free
        automation when volume picks up, which avoids a painful switch to a
        big&nbsp;ERP&nbsp;before the team is ready. Fathom delivers
        advanced visual dashboards and multi-entity consolidation, but only works if the business is ready to
        track KPIs at that level. Picking a tool that is too complex or too basic locks the company into a path
        that is hard to unwind later.</p>
      <p className="text-base text-white shadow-text pt-3">
        The last big decision is the rollout plan. Businesses that try to &quot;go live&quot; across every
        process at once usually run into trouble. The right move is to pick a single workflow to automate, a
        cash flow forecast, a payables approval loop, or a live sales report, and get it working end-to-end in a
        real environment. This pilot phase is where the team learns what breaks, what needs to be reworked, and
        how the new process actually feels day to day. Skip this, and early mistakes become permanent. Do it
        right, and you build the habits and trust that make scaling up possible.</p>
      <p className="text-base text-white shadow-text pt-3">
        Every one of these decisions, objective, data, tool, rollout order, locks in constraints that are very
        hard to undo. Small businesses that get them right at the start see smoother adoption, cleaner data, and
        dashboards that drive decisions instead of confusion. Get them wrong, and every fix after the fact is
        twice as costly and half as effective.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-decisions-that-are-made-early-and-cannot-be-unmade" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Decisions That Are Made Early and Cannot Be Unmade
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-decisions-that-are-made-early-and-cannot-be-unmade-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Decisions That Are Made Early and Cannot Be Unmade
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
