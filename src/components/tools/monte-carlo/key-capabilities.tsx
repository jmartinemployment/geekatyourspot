import { GlossaryLink } from "@/components/glossary/glossary-link";
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
              <p className="text-md text-white shadow-text pt-3">Monte Carlo offers a suite of features designed to enhance the reliability and accuracy of your data, which is
                critical for effective <GlossaryLink slug="dynamic-creative-optimization">ad spend optimization</GlossaryLink>. Here are some of the key capabilities that make Monte Carlo an
                invaluable tool for marketers:</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Data Observability: Monte Carlo provides end-to-end visibility into your data pipelines. This means you can
                  quickly identify and address issues such as data drift, schema changes, and <GlossaryLink slug="data-quality">data quality</GlossaryLink> anomalies, ensuring
                  that your marketing decisions are based on trustworthy data.</li>
                <li>Automated Monitoring: With automated monitoring, Monte Carlo continuously checks your data for
                  inconsistencies and errors. This proactive approach minimizes downtime and prevents inaccurate data from
                  affecting your ad strategies.</li>
                <li>Anomaly Detection: Monte Carlo uses advanced algorithms to detect anomalies in your data. Whether it&#39;s a
                  sudden drop in website traffic or unexpected changes in customer behavior, Monte Carlo alerts you to these
                  anomalies so you can take corrective action promptly.</li>
                <li>Integration with Existing Tools: Monte Carlo seamlessly integrates with popular marketing and data
                  platforms, making it easy to incorporate into your existing tech stack. This includes integrations with
                  tools like HubSpot and Salesforce Einstein, ensuring that your entire marketing ecosystem benefits from
                  enhanced data reliability.</li>
                <li>Scalability: Monte Carlo is designed to handle data at scale, making it suitable for businesses of all
                  sizes. Whether you&#39;re a small business or a large enterprise, Monte Carlo can scale to meet your data
                  needs without compromising on performance.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">These capabilities ensure that Monte Carlo not only supports but enhances your ad spend optimization efforts by
                providing a reliable foundation of data. This is crucial for tools like Smartly.io, which rely on accurate data to
                optimize ad campaigns across various platforms.</p>
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
              <p className="text-md text-white shadow-text pt-3">Monte Carlo offers a suite of features designed to enhance the reliability and accuracy of your data, which is
                critical for effective ad spend optimization. Here are some of the key capabilities that make Monte Carlo an
                invaluable tool for marketers:</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Data Observability: Monte Carlo provides end-to-end visibility into your data pipelines. This means you can
                  quickly identify and address issues such as data drift, schema changes, and data quality anomalies, ensuring
                  that your marketing decisions are based on trustworthy data.</li>
                <li>Automated Monitoring: With automated monitoring, Monte Carlo continuously checks your data for
                  inconsistencies and errors. This proactive approach minimizes downtime and prevents inaccurate data from
                  affecting your ad strategies.</li>
                <li>Anomaly Detection: Monte Carlo uses advanced algorithms to detect anomalies in your data. Whether it&#39;s a
                  sudden drop in website traffic or unexpected changes in customer behavior, Monte Carlo alerts you to these
                  anomalies so you can take corrective action promptly.</li>
                <li>Integration with Existing Tools: Monte Carlo seamlessly integrates with popular marketing and data
                  platforms, making it easy to incorporate into your existing tech stack. This includes integrations with
                  tools like HubSpot and Salesforce Einstein, ensuring that your entire marketing ecosystem benefits from
                  enhanced data reliability.</li>
                <li>Scalability: Monte Carlo is designed to handle data at scale, making it suitable for businesses of all
                  sizes. Whether you&#39;re a small business or a large enterprise, Monte Carlo can scale to meet your data
                  needs without compromising on performance.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">These capabilities ensure that Monte Carlo not only supports but enhances your ad spend optimization efforts by
                providing a reliable foundation of data. This is crucial for tools like Smartly.io, which rely on accurate data to
                optimize ad campaigns across various platforms.</p>
            </div>
            <div className="col-span-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}
