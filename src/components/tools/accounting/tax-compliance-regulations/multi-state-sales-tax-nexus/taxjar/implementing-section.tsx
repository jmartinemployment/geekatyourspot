
export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Launching TaxJar in a small business environment is not a generic software install. It is a focused
        rollout that shortens the path from chaos to compliance by using connectors, templates, and a phased
        approach. The process is designed to minimize downtime and manual effort, so your team can keep running
        while TaxJar comes online.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step is mapping your current sales channels and accounting systems. TaxJar is built to connect
        directly with leading e-commerce platforms and ERPs, Shopify, Salesforce, Amazon, Squarespace, Square,
        and Woo are all supported. This means you do not need to build custom integrations from scratch.
        Instead, you select the prebuilt connector, authorize access, and the system begins syncing your
        transaction data. For most small e-commerce teams, this alone cuts weeks off implementation compared to
        tools that require manual CSV uploads
        or&nbsp;API&nbsp;buildouts.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once connected, TaxJar automatically ingests your historical and live transaction records. The
        platform’s cloud-native engine is designed for high-volume, multi-channel environments, so it can
        process thousands of orders in seconds without bogging down your operations. This is especially critical
        for small teams that cannot afford to stop selling while compliance tools catch up. The aggregation
        engine cleans and unifies your data, removing duplicates and preparing it for real-time tax calculations
        and reporting.</p>
      <p className="text-base text-white shadow-text pt-3">
        After ingestion, TaxJar’s Economic Nexus Insights dashboard takes over. This dashboard is not just a
        reporting tool, it actively monitors your sales in every state, tracks where you are approaching or
        crossing economic nexus thresholds, and issues real-time alerts. This replaces the manual spreadsheet
        checks that often cause small businesses to miss key filing triggers. The dashboard is visual and
        intuitive, giving even non-specialists a clear view of where tax liabilities are building up.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next phase is configuring filing and remittance logic. TaxJar’s AutoFile feature automates the
        submission of sales tax returns to each state, accounting for different deadlines, formats, and filing
        frequencies. For businesses that want to retain some manual control, the platform also supports
        return-ready reporting and dashboard reminders for filing deadlines. This flexibility means you can
        automate fully or keep manual checkpoints where needed, without losing the benefit of consolidated data
        and alerts.</p>
      <p className="text-base text-white shadow-text pt-3">
        A typical go-live sequence with TaxJar looks like this:</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Identify all sales channels (e-commerce, marketplaces, direct sales).</li>
        <li>Connect each channel using TaxJar’s certified integrations or&nbsp;API.</li>
        <li>Ingest and unify historical and current transaction data.</li>
        <li>Map products and services to correct tax codes (see next section for detail).</li>
        <li>Activate Economic Nexus Insights to monitor thresholds in real time.</li>
        <li>Configure AutoFile for automated state filings or set up manual reporting as needed.</li>
        <li>Test the full workflow with a pilot batch before rolling out to all states.</li>
      </ol>
      <p className="text-base text-white shadow-text pt-3">
        Throughout this process, downtime is minimal. Most configuration happens in parallel with ongoing sales
        activity. Prebuilt connectors and dashboards mean you do not wait for IT cycles or custom scripting. For
        a small business with limited in-house resources, this is the difference between a months-long
        compliance project and a launch measured in days.</p>
      <p className="text-base text-white shadow-text pt-3">
        The story returns to the South Florida e-commerce team from the opening. Instead of scrambling to track
        multi-state sales in spreadsheets, they watch as TaxJar’s dashboard lights up with real-time alerts.
        Within the first week, the team sees exactly where they are approaching nexus thresholds, which states
        require immediate filings, and which marketplace sales are already covered by facilitator laws. What
        used to take hours of manual checks now happens automatically. The team spends less time on compliance
        and more time on growth.</p>
      <p className="text-base text-white shadow-text pt-3">
        What shortens go-live with TaxJar is not just technology, but the sequence and structure of the rollout.
        Prebuilt integrations, cloud-native ingestion, and real-time dashboards allow a small team to move from
        manual chaos to automated oversight without stopping business as usual. Every step is designed to remove
        friction, reduce risk, and let you scale compliance as fast as you scale sales.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-launch-taxjar-in-your-existing-stack-steps-shortcuts-and-sequencing" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Launch TaxJar in Your Existing Stack: Steps, Shortcuts, and Sequencing
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
              <h2 id="what-it-takes-to-launch-taxjar-in-your-existing-stack-steps-shortcuts-and-sequencing-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Launch TaxJar in Your Existing Stack: Steps, Shortcuts, and Sequencing
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
