export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Chaserhq is designed with a flexible architecture that seamlessly integrates with existing financial
        systems, such as Xero and Stripe, to enhance its functionality and adaptability. This integration capability
        allows Chaserhq to fit into diverse business environments, ensuring that it meets the unique needs of small
        businesses in Miami-Dade, Broward, and West Palm Beach counties.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s architecture is built around a centralized dashboard that provides users with
        comprehensive insights into their automated accounts receivable status. This dashboard aggregates data from
        various sources, offering a unified view of all receivables. It includes features such as real-time updates,
        relationship dashboards, and payment portals, which together create a cohesive system for managing cash
        flow.</p>
      <p className="text-md text-white shadow-text pt-3">
        Chaserhq&#39;s integration with Stripe facilitates seamless payment processing, allowing businesses to offer
        multiple payment options, including credit cards, bank transfers, and direct debits. This flexibility not
        only enhances customer convenience but also accelerates payment collection, reducing days sales outstanding
        (DSO) and improving overall cash flow efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        The integration with Xero, a popular accounting system, further enhances Chaserhq&#39;s capabilities by
        providing a direct link to financial data. This connection enables real-time receivables forecasting,
        ensuring that businesses always have access to the most up-to-date financial information. By incorporating
        data from Xero, Chaserhq can generate accurate forecasts that reflect actual customer payment behaviors,
        allowing businesses to plan with greater confidence.</p>
      <p className="text-md text-white shadow-text pt-3">
        Overall, Chaserhq&#39;s architecture and integration capabilities make it a powerful tool for small
        businesses looking to automate their automated accounts receivable process. Its ability to connect with
        existing systems and provide real-time insights helps businesses streamline operations, reduce
        administrative burdens, and focus on strategic growth initiatives.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="chaserhqs-architecture-and-integrations">
                Chaserhq&#39;s Architecture and Integrations
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="chaserhqs-architecture-and-integrations">
                Chaserhq&#39;s Architecture and Integrations
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
