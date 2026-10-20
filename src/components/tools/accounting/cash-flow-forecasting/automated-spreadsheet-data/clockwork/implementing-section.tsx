
export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Going live with Clockwork is designed to be swift and seamless, minimizing disruption to your existing
        operations. The process starts with a straightforward connection to your financial systems, such as
        QuickBooks or Xero, which can be completed in just a few minutes. This rapid integration is possible due to
        Clockwork&#39;s pre-built connectors that eliminate the need for complex manual setups.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once connected, Clockwork automatically builds a 52-week cash flow forecast and a 5-year driver-based
        financial model. These models are generated from your live data, ensuring that your financial planning is
        based on the most current information available. This automation not only saves time but also reduces the
        risk of errors that often occur with manual data entry and reconciliation.</p>
      <p className="text-md text-white shadow-text pt-3">
        The phased rollout approach further shortens the go-live timeline. Initially, Clockwork focuses on
        establishing the core financial models and dashboards. This allows your team to quickly start using the
        platform for essential forecasting and planning tasks. Subsequent phases can then introduce more advanced
        features, such as scenario planning and&nbsp;AI-driven insights, at a
        pace that suits your business needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Training and support are integral to the go-live process. Geek @ Your Spot LLC provides tailored training
        sessions to ensure your team understands how to leverage Clockwork&#39;s features effectively. This hands-on
        guidance helps your staff transition smoothly to the new system, maximizing the benefits of automation from
        day one.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, the go-live process with Clockwork is designed to be as efficient as possible. By leveraging
        pre-built integrations and a phased implementation strategy, businesses can quickly move from manual
        spreadsheet management to automated financial forecasting, freeing up valuable time for strategic
        decision-making.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="streamlined-go-live-process-with-clockwork">
                Streamlined Go-Live Process with Clockwork
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="streamlined-go-live-process-with-clockwork-lg">
                Streamlined Go-Live Process with Clockwork
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
