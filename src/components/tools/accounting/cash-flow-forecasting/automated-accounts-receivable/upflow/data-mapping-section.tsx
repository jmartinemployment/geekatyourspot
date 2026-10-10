export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying Upflow requires careful consideration of data structure and mapping to ensure seamless integration
        and functionality. The upfront decisions regarding data organization and mapping play a pivotal role in how
        effectively Upflow can automate accounts receivable processes. These decisions impact everything from the
        accuracy of cash flow forecasts to the efficiency of collection workflows.</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Data Consistency: Ensuring that data is consistent across all sources is crucial. Inconsistent data can lead to errors in forecasting and reporting, undermining the reliability of the entire system.</li>
        <li>Mapping Historical Data: Historical accounts receivable data must be accurately mapped into Upflow to provide a comprehensive view of past and current transactions. This historical data is essential for generating accurate forecasts and understanding payment patterns.</li>
        <li>Defining Data Fields: Clearly defining data fields and ensuring they are aligned with Upflow’s requirements is vital. This includes standardizing fields such as customer names, invoice numbers, and payment terms to prevent discrepancies.</li>
        <li>Integration with ERP Systems: Upflow’s integration capabilities allow for real-time data updates from ERP systems. Ensuring that this integration is correctly configured is essential for maintaining up-to-date information and reducing manual data entry.</li>
        <li>Custom Data Mapping: For businesses with unique data structures, custom mapping configurations may be necessary. This allows Upflow to accommodate specific business needs without compromising on data integrity.</li>
      </ol>
      <p className="text-md text-white shadow-text pt-3">
        These upfront data structure and mapping decisions are critical to the success of an Upflow deployment. By
        addressing these elements early in the process, businesses can ensure that their automated accounts
        receivable automation runs smoothly and efficiently. Geek @ Your Spot provides the expertise needed to
        navigate these complexities, ensuring that the system is set up to deliver maximum value from day one.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-structure-and-mapping-key-decisions-for-upflow-deployment">
                Data Structure and Mapping: Key Decisions for Upflow Deployment
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-structure-and-mapping-key-decisions-for-upflow-deployment">
                Data Structure and Mapping: Key Decisions for Upflow Deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
