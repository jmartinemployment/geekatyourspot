import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Bill is designed to transform the way small businesses handle their accounts payable by making payment
        processes faster and more efficient. The platform operates through a cloud-based architecture, which
        ensures that businesses can access their financial operations from anywhere, at any time. This
        flexibility is crucial for small businesses that need to manage payments without being tied to a
        physical office space.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of Bill&#39;s standout features is its&nbsp;
        <a id="tools-accounting-payment-execution-bill-architecture-xero"
          href="https://www.bill.com/integrations/xero"
          target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">
          two-way sync capability
        </a>, which allows seamless integration with accounting systems like Xero and QuickBooks. This
        integration ensures that all payment data is automatically updated in real-time, reducing the need
        for manual data entry and minimizing errors. Businesses can trust that their financial records are
        always current, which is vital for maintaining accurate accounts and making informed financial
        decisions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bill&#39;s architecture also includes&nbsp;
        <GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>-assisted features
        that streamline invoice processing. The platform uses artificial intelligence to automatically code
        multi-line item bills, cutting down on manual processing time by up to 20%. This feature not only
        saves time but also enhances accuracy, with key invoice fields captured with 99% precision.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another critical component of Bill&#39;s architecture is its robust approval workflow system. This
        system allows users to control which bills need approval, by whom, and when approvals are due. Such a
        structured approach ensures that all payments are authorized by the right personnel, reducing the risk
        of unauthorized transactions and enhancing security.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bill also supports a variety of payment methods, including ACH, checks, virtual cards, and
        international wire transfers. This range of options provides businesses with the flexibility to choose
        the most suitable payment method for each transaction, ensuring that payments are both efficient and
        secure. The inclusion of Pay By Card functionality further expands these options, allowing payments
        via credit or debit card even if vendors do not typically accept card payments.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security is a top priority in Bill&#39;s architecture. The platform&#39;s predictive AI monitors
        transactions in real time to detect any suspicious activity, thereby preventing fraud before it
        occurs. This feature is particularly beneficial for small businesses that may not have the resources
        to manage extensive security protocols themselves.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Bill&#39;s architecture is built to support small businesses in automating their payment
        execution processes. By integrating seamlessly with existing accounting systems and offering a wide
        range of payment options, Bill not only simplifies financial operations but also enhances security and
        accuracy. This makes it an ideal solution for businesses looking to streamline their accounts payable
        processes and focus on growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-bills-architecture-powers-automated-payment-execution">
                How Bill&#39;s Architecture Powers Automated Payment Execution
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-bills-architecture-powers-automated-payment-execution">
                How Bill&#39;s Architecture Powers Automated Payment Execution
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
