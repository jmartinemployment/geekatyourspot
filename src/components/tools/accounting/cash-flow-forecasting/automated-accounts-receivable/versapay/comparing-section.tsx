import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Versapay stands out in the landscape of automated accounts receivable solutions by offering a comprehensive
        platform that integrates seamlessly with
        existing&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;systems.
        While many solutions provide basic automation, Versapay extends its capabilities with smart automation and
        collaborative tools. This combination ensures not only speed but also precision in managing accounts
        receivable.</p>
      <p className="text-md text-white shadow-text pt-3">
        Competitors like Billtrust and BlackLine offer similar automation features, but Versapay distinguishes
        itself with its collaborative AR network. This network facilitates communication between sellers and buyers,
        providing a single platform for resolving payment issues. This feature is particularly beneficial for
        businesses that require direct interaction with clients to manage discrepancies and ensure timely payments.</p>
      <p className="text-md text-white shadow-text pt-3">
        Versapay&#39;s integration capabilities are another strong point. It connects with a wide range of ERP
        systems
        using&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;connectors,
        maintaining a central source of truth for financial data. This seamless integration is crucial for
        businesses that rely on multiple data sources and need to avoid the pitfalls of data silos that can lead to
        financial blind spots.</p>
      <p className="text-md text-white shadow-text pt-3">
        Additionally, Versapay&#39;s use
        of&nbsp;<GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>&nbsp;and OCR
        technology to automate cash application processes sets it apart. By capturing remittance and payment data in
        various formats, it eliminates the need for manual data entry. This not only saves time but also reduces
        errors, ensuring a more efficient reconciliation process.</p>
      <p className="text-md text-white shadow-text pt-3">
        In comparison, some competitors may focus more on specific aspects like invoice processing or payment
        facilitation. Versapay, however, provides a holistic approach by combining these elements into a unified
        platform. This makes it particularly suitable for businesses looking to streamline their entire accounts
        receivable process rather than just individual components.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in South Florida, where maintaining cash flow is critical, Versapay offers a robust
        solution that addresses both the speed and accuracy of financial transactions. Its comprehensive features
        and strong integration capabilities make it a valuable tool for businesses aiming to improve their automated
        accounts receivable operations.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="versapay-among-accounts-receivable-solutions">
                Versapay Among Accounts Receivable Solutions
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="versapay-among-accounts-receivable-solutions">
                Versapay Among Accounts Receivable Solutions
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
