import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Cashflowfrog is built on a flexible architecture designed to integrate with a variety of accounting
        platforms. It connects to systems like QuickBooks, Xero, Sage Intacct, and Zoho Books, utilizing APIs to
        ensure seamless data exchange. This connectivity allows Cashflowfrog to pull in real-time financial data
        without altering the underlying accounting records, maintaining data integrity and security.</p>
      <p className="text-base text-white shadow-text pt-3">
        The tool operates on a read-only basis, meaning it accesses your financial data without making any changes
        to it. This is crucial for maintaining the accuracy of your accounting records while still providing the
        insights needed for effective cash flow management. By using an OAuth process for integration, Cashflowfrog
        ensures that data transfer is secure and that user permissions are respected.</p>
      <p className="text-base text-white shadow-text pt-3">
        Cashflowfrog&#39;s architecture supports multi-entity and multi-currency operations, making it suitable for
        businesses with complex financial structures. It consolidates data from various entities into a single view,
        allowing for comprehensive analysis and reporting. This capability is particularly beneficial for businesses
        operating in multiple regions or dealing with international transactions, as it simplifies the management of
        diverse financial data.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform&#39;s architecture also includes robust security features. Data is encrypted both in transit
        and at rest, ensuring that sensitive financial information is protected from unauthorized access. Regular
        security audits and penetration testing are conducted to identify and mitigate potential vulnerabilities,
        providing users with peace of mind regarding their data security.</p>
      <p className="text-base text-white shadow-text pt-3">
        Integration with third-party tools like Zapier further extends Cashflowfrog&#39;s functionality. Users can
        automate workflows by connecting Cashflowfrog with other business applications, enhancing efficiency and
        reducing manual data entry. This integration capability allows businesses to tailor Cashflowfrog to their
        specific needs, creating a customized financial management solution.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, Cashflowfrog&#39;s architecture is designed to provide a scalable, secure, and integrated
        solution for&nbsp;<GlossaryLink slug="cash-flow-forecasting" className="text-[#0B162A] hover:underline">cash
        flow forecasting</GlossaryLink>. Its ability to connect with various accounting systems, support complex
        financial structures, and integrate with third-party tools makes it a versatile choice for businesses
        looking to enhance their financial planning capabilities.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-architecture-and-integrations-of-cashflowfrog">
                The Architecture and Integrations of Cashflowfrog
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-architecture-and-integrations-of-cashflowfrog-lg">
                The Architecture and Integrations of Cashflowfrog
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
