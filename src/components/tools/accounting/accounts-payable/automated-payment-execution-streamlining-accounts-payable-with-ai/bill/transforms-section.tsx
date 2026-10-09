import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Bill revolutionizes Automated Payment Execution by removing the manual tasks that traditionally burden
        small businesses. With Bill, the approval of invoices no longer means additional manual work for your
        team. Instead, it connects approval, vendor payment, and accounting updates into one seamless process.
        This means fewer hours spent on repetitive tasks and more time for strategic initiatives.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of Bill&#39;s standout features is its ability to automate invoice entry with&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>&nbsp;assistance. This capability significantly cuts
        processing time, allowing businesses to handle more invoices without increasing their workload. By
        automating this process, Bill reduces the risk of errors associated with manual data entry, ensuring
        that businesses maintain accurate financial records.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bill also offers a robust approval process that can be tailored to fit the specific needs of a
        business. This feature allows businesses to control which bills need approval, by whom, and when
        approvals are due. It removes the need for physical signatures and paper trails, streamlining the
        approval process and reducing the time it takes to get payments out the door.</p>
      <p className="text-md text-white shadow-text pt-3">
        Furthermore, Bill supports various payment methods, including ACH, checks, virtual cards, and
        international wire transfers. This flexibility means businesses can choose the most efficient payment
        method for each vendor, further simplifying the payment process. By consolidating these methods into a
        single platform, Bill eliminates the need for multiple systems and reduces the complexity of managing
        different payment types.</p>
      <p className="text-md text-white shadow-text pt-3">
        In addition to simplifying payments, Bill provides real-time visibility into financial operations.
        This transparency allows businesses to track payment status and manage cash flow more effectively.
        With Bill, businesses can ensure that their vendors are paid on time, reducing the risk of late fees
        and maintaining strong vendor relationships. By automating these processes, Bill not only saves time
        but also enhances the overall efficiency and accuracy of financial management.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;Save time and gain more control by streamlining and customizing your AP approval groups and
        policies.&quot;&nbsp;
        <a id="tools-accounting-payment-execution-bill-transforms-source"
          href="https://www.bill.com/product/payment-approvals"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Bill
        </a></p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-bill-transforms-automated-payment-execution">
                How Bill Transforms Automated Payment Execution
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-bill-transforms-automated-payment-execution">
                How Bill Transforms Automated Payment Execution
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
