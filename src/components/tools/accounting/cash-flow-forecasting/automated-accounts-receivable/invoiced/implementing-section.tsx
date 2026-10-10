export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Implementing Invoiced in your existing environment is a streamlined process, designed to integrate smoothly
        with your current systems. The key to a fast go-live is leveraging Invoiced&#39;s pre-built connectors and
        templated setups, which significantly reduce the time and complexity typically involved in such deployments.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step involves assessing your current accounts receivable processes to identify areas where
        Invoiced can add the most value. This is where Geek @ Your Spot steps in, offering their expertise to map
        out a phased rollout plan tailored to your business needs. By prioritizing critical areas, such as invoice
        delivery and payment collection, the transition becomes more manageable and less disruptive to daily
        operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced&#39;s templated setup allows for rapid configuration, ensuring that your team can start using the
        platform quickly and efficiently. These templates cover common scenarios and can be customized to fit
        specific business requirements, minimizing the need for extensive manual adjustments. This approach not only
        shortens the implementation timeline but also ensures that the system is configured correctly from the
        outset.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another factor that accelerates the go-live process is Invoiced&#39;s seamless integration capabilities.
        With native integrations for platforms like QuickBooks and NetSuite, data synchronization is
        straightforward, reducing the need for complex IT involvement. This allows your finance team to focus on
        strategic tasks rather than getting bogged down in technical details.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, the phased rollout strategy ensures a smooth transition. By implementing Invoiced in stages, your
        team can gradually adapt to the new system, reducing the learning curve and minimizing disruptions. Geek @
        Your Spot supports this process by providing training and support, ensuring that your team is confident and
        capable of leveraging Invoiced&#39;s full potential.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="streamlining-the-go-live-process-with-invoiced">
                Streamlining the Go-Live Process with Invoiced
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="streamlining-the-go-live-process-with-invoiced">
                Streamlining the Go-Live Process with Invoiced
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
