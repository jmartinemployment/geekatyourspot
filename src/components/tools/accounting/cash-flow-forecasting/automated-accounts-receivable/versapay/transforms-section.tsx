import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Versapay transforms the automated accounts receivable process by removing the burdens of manual data entry
        and reconciliation. Its&nbsp;<GlossaryLink slug="ai">AI</GlossaryLink>-powered cash application software
        automatically matches payments to invoices, regardless of how they are remitted. This eliminates the need
        for staff to manually track down payments and reduces reconciliation delays.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;Our automated cash application software uses AI to streamline your entire accounts receivable
        reconciliation process—giving your team clarity, control, and time back.&quot;&nbsp;
        <a id="tools-accounting-accounts-receivable-versapay-transforms-source"
          href="https://www.versapay.com/solutions/cash-application"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Versapay
        </a></p>
      <p className="text-md text-white shadow-text pt-3">
        With Versapay, businesses can say goodbye to the tedious task of manually matching payments. The software
        captures remittance and payment data in any format and applies advanced AI and OCR to match them to open
        receivables. This means fewer manual errors and faster cash application, giving your team more time to focus
        on strategic priorities.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform also improves communication with customers through its collaborative tools. Customers can view
        and pay invoices through a cloud-based portal, using their preferred payment methods such as credit cards,
        ACH, or virtual cards. This self-service approach not only speeds up payments but also enhances the customer
        experience by providing transparency and convenience.</p>
      <p className="text-md text-white shadow-text pt-3">
        Versapay&#39;s real-time dashboards provide management with immediate insights into AR performance, allowing
        for quicker decision-making. This visibility reduces the risk of credit exposure and ensures that
        collections efforts are prioritized based on real-time risk scoring. By automating these processes, Versapay
        helps businesses maintain steady cash flow and improve working capital management.</p>
      <p className="text-md text-white shadow-text pt-3">
        In essence, Versapay removes the inefficiencies of manual accounts receivable processes, returning valuable
        hours to your team and allowing them to focus on more impactful tasks. The result is improved financial
        clarity, reduced costs, and a more streamlined operation overall.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="what-versapay-removes-from-your-week">
                What Versapay Removes from Your Week
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="what-versapay-removes-from-your-week">
                What Versapay Removes from Your Week
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
