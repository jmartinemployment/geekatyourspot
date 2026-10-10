import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Bill&#39;s architecture is designed to support seamless integration and scalability, making it a robust
        platform for managing accounts receivable. At its core, Bill operates on a cloud-based infrastructure that
        ensures high availability and reliability. This architecture allows businesses to access their automated
        accounts receivable data from anywhere, at any time, using any device. The cloud-based nature of Bill also
        facilitates regular updates and maintenance without disrupting user operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration capabilities are a standout feature of Bill&#39;s architecture. The platform supports two-way
        sync with major accounting software such as QuickBooks, Xero, Oracle NetSuite, Sage Intacct, and Microsoft
        Dynamics. This integration ensures that financial data is always up-to-date and consistent across systems,
        eliminating the need for manual data entry and reducing the risk of errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bill also integrates with
        various&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;systems,
        allowing businesses to manage their financial operations in a unified manner. This integration streamlines
        workflows by automating the transfer of data between systems, ensuring that all financial transactions are
        accurately recorded and reconciled. Additionally,
        Bill&#39;s&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;platform
        provides businesses with the flexibility to customize integrations according to their specific needs,
        enabling them to build a tailored financial operations ecosystem.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security is a fundamental component of Bill&#39;s architecture. The platform employs advanced encryption and
        security protocols to protect sensitive financial data.
        Predictive&nbsp;<GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>&nbsp;features
        monitor transactions in real-time, detecting and preventing fraudulent activities. This proactive approach
        to security ensures that businesses can operate with confidence, knowing their financial data is secure.</p>
      <p className="text-md text-white shadow-text pt-3">
        Overall, Bill&#39;s architecture is built to provide a seamless, integrated experience for managing accounts
        receivable. Its ability to connect with existing systems and its robust security measures make it an ideal
        solution for businesses looking to streamline their financial operations and enhance efficiency.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-architecture-and-integrations-of-bill">
                The Architecture and Integrations of Bill
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-architecture-and-integrations-of-bill">
                The Architecture and Integrations of Bill
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
