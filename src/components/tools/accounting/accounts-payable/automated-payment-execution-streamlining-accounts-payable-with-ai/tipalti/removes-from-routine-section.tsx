import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RemovesFromRoutineSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Tipalti transforms the way businesses handle Automated Payment Execution by eliminating many of the
        manual tasks that bog down finance teams. One of the most significant benefits is the reduction in
        time spent on data entry and the correction of supplier information. Tipalti&#39;s system automates
        the collection and verification of supplier details, ensuring that all information is accurate and
        up-to-date without the need for repeated manual intervention.</p>
      <p className="text-md text-white shadow-text pt-3">
        By integrating with various <GlossaryLink slug="erp">ERP</GlossaryLink> and accounting systems,
        Tipalti streamlines the payment process, allowing for seamless transactions across multiple currencies
        and countries. This integration eliminates the need for separate bank portals and payment procedures,
        reducing the complexity and risk of errors associated with international payments. As a result,
        finance teams can process payments more efficiently and with greater accuracy.</p>
      <p className="text-md text-white shadow-text pt-3">
        Tipalti also addresses the issue of payment visibility for suppliers. Through its self-service portal,
        suppliers can track the status of their payments in real-time, reducing the number of inquiries
        directed at finance teams. This transparency not only improves supplier relationships but also frees
        up time for finance teams to focus on more strategic activities.</p>
      <p className="text-md text-white shadow-text pt-3">
        Reconciliation is simplified with Tipalti&#39;s automated processes. The platform automatically
        matches transactions across different currencies, subsidiaries, and payment methods, ensuring that all
        financial records are accurate and up-to-date. This automation significantly reduces the time and
        effort required for reconciliation, allowing finance teams to close their books faster and with fewer
        discrepancies.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;Our comprehensive, end-to-end automation streamlines and enhances your business with
        scalability, efficiency, and precision, freeing you from the burden of routine, time-consuming AP
        tasks.&quot;&nbsp;
        <a id="tools-accounting-payment-execution-tipalti-removes-source"
          href="https://tipalti.com/manual-ap-slowing-you-down/"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Tipalti
        </a></p>
      <p className="text-md text-white shadow-text pt-3">
        In essence, Tipalti removes the burdensome manual tasks associated with Automated Payment Execution,
        allowing businesses to operate more efficiently and focus on growth. By automating these processes,
        companies can reduce errors, save time, and ensure compliance with financial regulations, ultimately
        leading to a more streamlined and effective financial operation.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="what-tipalti-removes-from-your-automated-payment-execution-routine">
                What Tipalti Removes from Your Automated Payment Execution Routine
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="what-tipalti-removes-from-your-automated-payment-execution-routine">
                What Tipalti Removes from Your Automated Payment Execution Routine
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
