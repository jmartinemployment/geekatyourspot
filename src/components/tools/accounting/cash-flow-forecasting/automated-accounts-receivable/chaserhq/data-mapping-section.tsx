export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying Chaserhq effectively requires careful consideration of data structure and mapping. These decisions
        are foundational to ensuring that the system operates seamlessly within your existing financial environment.
        For businesses in Miami-Dade, Broward, and West Palm Beach counties, getting this setup right is crucial for
        maximizing the benefits of automated accounts receivable.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step involves auditing your current data. This includes cleaning up debtor information and
        ensuring that all relevant data is accurate and up-to-date. Accurate data is essential for Chaserhq&#39;s
        automation features to function correctly, such as sending timely payment reminders and generating accurate
        cash flow forecasts.</p>
      <p className="text-md text-white shadow-text pt-3">
        Mapping data to Chaserhq&#39;s system involves aligning your existing accounts with the platform&#39;s
        categories. Chaserhq supports the categorization of receivables into promised, disputed, and at-risk cash,
        among others. This categorization helps businesses prioritize collections and manage cash flow more
        effectively.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another important consideration is the integration of Chaserhq with your accounting software. This
        integration allows for real-time updates and ensures that your financial data is always current. For
        example, integrating with Xero allows Chaserhq to pull in real-time receivables data, which is crucial for
        accurate forecasting and cash flow management.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, setting up custom rules for scenario modeling is a powerful tool within Chaserhq. These rules
        enable businesses to anticipate various financial scenarios and prepare accordingly. By customizing these
        rules to fit their specific needs, businesses can gain deeper insights into their financial health and make
        more informed decisions.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-structure-and-mapping-essentials-for-chaserhq">
                Data Structure and Mapping Essentials for Chaserhq
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-structure-and-mapping-essentials-for-chaserhq">
                Data Structure and Mapping Essentials for Chaserhq
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
