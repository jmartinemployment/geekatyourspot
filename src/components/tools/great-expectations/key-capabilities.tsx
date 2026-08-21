export default function KeyCapabilitiesSection() {
  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5">
            <div className="col-span-7">
              <h2 className="text-white text-left text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Key Capabilities</h2>
            </div>
            <div className="col-span-5"></div>
            <div className="col-span-12">
              <p className="text-md text-white shadow-text pt-3">Great Expectations offers a robust set of features that make it an indispensable tool for ensuring data quality in
                automated ad spend optimization. Here are some of its key capabilities:</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Data Validation Framework: Great Expectations provides a comprehensive framework for validating data. It
                  allows users to define expectations, which are conditions that data must satisfy. This ensures that only
                  high-quality data is used in decision-making processes.</li>
                <li>Automated Testing: The tool supports automated testing of data against predefined expectations. This
                  automation helps in identifying data anomalies quickly, reducing manual effort and ensuring that data issues
                  do not go unnoticed.</li>
                <li>Integration with Data Pipelines: Great Expectations can be easily integrated into existing data pipelines.
                  This seamless integration ensures that data validation is part of the data flow, preventing bad data from
                  entering the system.</li>
                <li>Comprehensive Reporting: The tool generates detailed reports on data quality, providing insights into the
                  state of the data. These reports help businesses understand where their data stands and what improvements
                  are needed.</li>
                <li>Customizable Expectations: Users can create custom expectations to meet specific business needs. This
                  flexibility allows businesses to tailor data validation to their unique requirements, ensuring that all
                  critical data points are covered.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">In the realm of automated ad spend optimization, these capabilities translate into more accurate targeting and
                bidding strategies. For example, tools like Smartly.io and Jasper rely on precise data inputs to optimize ad
                campaigns. By using Great Expectations, businesses can ensure that these inputs are validated and reliable, leading
                to better campaign performance and reduced ad spend wastage.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Key Capabilities</h2>
              <p className="text-md text-white shadow-text pt-3">Great Expectations offers a robust set of features that make it an indispensable tool for ensuring data quality in
                automated ad spend optimization. Here are some of its key capabilities:</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Data Validation Framework: Great Expectations provides a comprehensive framework for validating data. It
                  allows users to define expectations, which are conditions that data must satisfy. This ensures that only
                  high-quality data is used in decision-making processes.</li>
                <li>Automated Testing: The tool supports automated testing of data against predefined expectations. This
                  automation helps in identifying data anomalies quickly, reducing manual effort and ensuring that data issues
                  do not go unnoticed.</li>
                <li>Integration with Data Pipelines: Great Expectations can be easily integrated into existing data pipelines.
                  This seamless integration ensures that data validation is part of the data flow, preventing bad data from
                  entering the system.</li>
                <li>Comprehensive Reporting: The tool generates detailed reports on data quality, providing insights into the
                  state of the data. These reports help businesses understand where their data stands and what improvements
                  are needed.</li>
                <li>Customizable Expectations: Users can create custom expectations to meet specific business needs. This
                  flexibility allows businesses to tailor data validation to their unique requirements, ensuring that all
                  critical data points are covered.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">In the realm of automated ad spend optimization, these capabilities translate into more accurate targeting and
                bidding strategies. For example, tools like Smartly.io and Jasper rely on precise data inputs to optimize ad
                campaigns. By using Great Expectations, businesses can ensure that these inputs are validated and reliable, leading
                to better campaign performance and reduced ad spend wastage.</p>
            </div>
            <div className="col-span-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}
