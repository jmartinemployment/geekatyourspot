export default function RolesSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Ad spend optimization is not just a technology upgrade, it is a shift in how your staff works day to day. The
        biggest change is that routine, manual tasks move out of human hands and into automated workflows. No more
        spreadsheet downloads, no more late-night budget checks, and no more waiting until the end of the month to see
        which ads worked. The team&rsquo;s energy now goes into higher-value work: reviewing results, testing creative,
        and making real business decisions based on live data.</p>
      <p className="text-base text-white shadow-text pt-3">
        For owners and managers, this shift means less time spent playing &ldquo;dashboard detective&rdquo; and more
        time focused on strategy. Instead of reacting to alerts about overspending or underperforming ads, you see
        prioritized recommendations and one-click fixes. Adzooma, for example, consolidates all account alerts and
        performance recommendations in one place, so the decision is not whether to find a problem but which fix to
        approve. For a twelve-person team, this can mean hours back each week, hours that can now go to customer
        follow-up, new product launches, or staff training.</p>
      <p className="text-base text-white shadow-text pt-3">
        For marketing coordinators or in-house digital leads, the change is even more direct. Tools like Wask and Plai
        automate the reporting and pixel setup that used to eat up entire afternoons. Instead of pulling numbers from
        Google, Meta, and Microsoft separately, the coordinator logs into one dashboard and sees every account&rsquo;s
        status, spend, and performance side by side. With Bir running 15-minute health checks, the coordinator is not
        waiting for the end of the week to spot a runaway campaign, the system pauses or flags issues automatically,
        and notifies the team only if human review is needed.</p>
      <p className="text-base text-white shadow-text pt-3">
        Customer service and sales staff benefit too. With LocaliQ or Performance Max, every inbound lead, whether from
        a call, form, or chat, is tracked to its source and routed to follow-up automatically. The days of missing the
        Monday-morning lead surge because the tracking spreadsheet was not updated are over. When a lead comes in, the
        staff knows where it came from and what campaign drove it. This makes follow-up faster and more relevant, which
        means more of your ad dollars turn into actual sales.</p>
      <p className="text-base text-white shadow-text pt-3">
        The finance team also feels a direct impact. With platforms like Triplewhale and Cometly deduplicating
        conversions and tying spend to revenue, reconciling marketing costs with business results is not a quarterly
        project, it is a rolling, real-time process. No more fighting to explain why Google and Meta both claim credit
        for the same sale, or why the ad budget keeps rising while profit stays flat. Finance now gets a true,
        up-to-date picture of which campaigns pay off and which need to be cut.</p>
      <p className="text-base text-white shadow-text pt-3">
        There is also a cultural change. As routine optimization becomes automated, the team shifts from a mindset of
        &ldquo;firefighting&rdquo; to one of continuous improvement. Testing new creative, iterating on audience
        targeting, and reviewing campaign experiments become weekly habits, not annual projects. Tools like Optmyzr
        and Bir support this by making it safe to experiment, if a new ad set goes off the rails, the system will catch
        it before it does real damage. Staff gain confidence to try new approaches, knowing they have a technical
        safety net.</p>
      <p className="text-base text-white shadow-text pt-3">
        A small business that used to meet twice a month to review ad performance might now hold a quick weekly
        check-in, focused on insights and next steps, not troubleshooting. The owner reviews a summary from Adzooma or
        Wask, approves key recommendations, and the team moves forward. Customer service gets lead alerts from LocaliQ,
        marketing tests new creative in Triplewhale, and finance tracks ROI in real time. The work becomes faster, more
        focused, and less stressful across the board. That is the real change: less firefighting, more time for
        growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-people-whose-work-changes-and-what-changes-for-them" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The People Whose Work Changes, and What Changes for Them
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
              <h2 id="the-people-whose-work-changes-and-what-changes-for-them-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The People Whose Work Changes, and What Changes for Them
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
