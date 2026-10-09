import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Choosing the right Automated Accounts Receivable (AAR) solution involves several key considerations.
        Versapay offers a comprehensive platform designed to streamline the invoicing and payment process, making
        it a strong candidate for businesses looking to automate their accounts receivable operations. However,
        understanding its fit, pricing model, and how it compares to other solutions is crucial for making an
        informed decision.</p>
      <p className="text-md text-white shadow-text pt-3">
        Versapay integrates seamlessly with existing&nbsp;
        <GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;systems, which is a significant advantage for businesses
        already using such platforms. This integration ensures that payment data is automatically applied to the
        correct invoices, reducing manual entry and minimizing errors. The platform&#39;s ability to handle
        various payment types, including checks, ACH, and credit cards, provides flexibility that many small
        businesses in Miami-Dade, Broward, and West Palm Beach counties might find beneficial.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing for Versapay is not publicly detailed in the research provided, but it is typically structured
        around a subscription model, which is common in SaaS solutions. This model often involves a base fee with
        additional costs based on transaction volume or specific features used. Businesses should weigh this
        against their transaction volume and the potential savings from reduced manual processing and error
        correction.</p>
      <p className="text-md text-white shadow-text pt-3">
        When considering Versapay, it&#39;s important to compare it with other tools in the market. For instance,
        platforms like Bill, Chaser, and Invoiced also offer automated AR solutions. Each has its own strengths;
        for example, Bill is known for its user-friendly interface and robust payment processing capabilities,
        while Chaser excels in automated follow-ups and customer communication.</p>
      <p className="text-md text-white shadow-text pt-3">
        Versapay stands out with its collaborative features, such as built-in exception workflows and real-time
        dashboards. These tools not only automate processes but also enhance visibility and control over accounts
        receivable operations. This can be particularly beneficial for businesses facing complex reconciliation
        challenges.</p>
      <p className="text-md text-white shadow-text pt-3">
        In evaluating Versapay, consider the specific needs of your business. If your team struggles with manual
        reconciliation and delayed payments, Versapay&#39;s automation and integration capabilities could
        significantly improve efficiency and cash flow. However, if your primary need is basic invoicing and
        payment tracking, a simpler, less costly solution might suffice.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, the choice of an Automated Accounts Receivable solution should align with your business&#39;s
        strategic goals and operational needs. Versapay offers a robust platform with a range of features that
        can address the complexities of AR processes, but it&#39;s essential to assess its fit against your
        specific requirements and budget constraints.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-versapay-fit-pricing-and-alternatives">
                Evaluating Versapay: Fit, Pricing, and Alternatives
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-versapay-fit-pricing-and-alternatives">
                Evaluating Versapay: Fit, Pricing, and Alternatives
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
