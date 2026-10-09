import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItOperatesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Ramp transforms the traditional&nbsp;
        <GlossaryLink slug="accounts-payable" className="text-[#0B162A] hover:underline">accounts payable</GlossaryLink>&nbsp;process
        by employing advanced technologies like Optical Character Recognition (OCR) and machine learning (ML).
        These technologies automate the extraction of data from invoices, match them to purchase orders, and
        route them for approval based on predefined rules. This automation reduces the time spent on each
        invoice from an average of 15–20 minutes to under 3 minutes, streamlining operations and minimizing
        errors. Ramp&#39;s system learns over time, adapting to your business&#39;s unique patterns, which
        further enhances efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        At the core of Ramp&#39;s functionality is its smart approval workflows. These workflows automatically
        route invoices to the appropriate stakeholders based on criteria such as amount, vendor type, or
        department. By eliminating manual intervention, Ramp ensures that invoices are processed quickly and
        accurately, which reduces bottlenecks and improves cash flow. The system&#39;s ability to recognize
        regular vendors and understand approval chains adds an extra layer of intelligence, flagging any
        anomalies like duplicate invoices.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ramp&#39;s architecture is designed to integrate seamlessly with major Enterprise Resource Planning
        (<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>) systems. This
        integration allows for the automatic syncing of data, reducing the need for manual data entry and
        ensuring that financial records are always up-to-date. The platform&#39;s Accounting Agent further
        enhances this by auto-coding transactions as they occur, moving in-policy spend through a zero-touch
        lane while highlighting exceptions for review. This not only accelerates the approval process but
        also maintains a comprehensive audit trail for compliance.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s adaptability is evident in its ability to learn and adjust to your business&#39;s
        preferences over time. As it processes more transactions, Ramp becomes more efficient, recognizing
        patterns and making more accurate decisions. This continuous learning capability is crucial for
        businesses looking to reduce manual workload and improve accuracy in their accounts payable
        processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ramp also supports multi-entity operations and multi-currency transactions, making it a versatile
        tool for businesses with complex financial structures. By automating these processes, Ramp not only
        reduces the administrative burden but also minimizes the risk of errors associated with manual
        processing. This comprehensive approach to automation ensures that your accounts payable operations
        are efficient, accurate, and compliant with financial regulations.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-ramps-automated-approval-workflows-operate">
                How Ramp&#39;s Automated Approval Workflows Operate
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-ramps-automated-approval-workflows-operate">
                How Ramp&#39;s Automated Approval Workflows Operate
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
