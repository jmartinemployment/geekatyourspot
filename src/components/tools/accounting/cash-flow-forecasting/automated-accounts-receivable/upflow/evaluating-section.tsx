import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering Upflow for automated accounts receivable automation, small businesses must evaluate its fit
        and pricing model. This section provides insights into how Upflow aligns with business needs and what to
        consider when assessing its cost.</p>
      <p className="text-md text-white shadow-text pt-3">
        Upflow is designed to cater to mid-sized and scaling companies, particularly those with complex B2B finance
        requirements. Its strength lies in its ability to project cash inflows based on actual payment behaviors
        rather than assumptions. This feature is particularly beneficial for businesses with unpredictable cash flow
        patterns, as it provides a more accurate forecast of incoming funds.</p>
      <p className="text-md text-white shadow-text pt-3">
        The pricing model for Upflow is not explicitly detailed in the available data, but businesses should
        consider the value it brings in terms of time saved and improved cash flow management. By automating routine
        tasks and reducing Days Sales Outstanding (DSO), Upflow can significantly enhance a company&#39;s financial
        health. Geek @ Your Spot advises clients to weigh these benefits against the cost of implementation and
        ongoing use.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another key consideration is Upflow&#39;s integration capabilities. Its ability to connect with
        popular&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;systems
        like NetSuite and QuickBooks makes it a versatile tool for businesses already using these platforms. This
        integration ensures that data flows seamlessly between systems, reducing the need for manual data entry and
        minimizing errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        When evaluating Upflow, businesses should also consider the level of support and customization offered by
        Geek @ Your Spot. As a local consultancy, Geek @ Your Spot provides hands-on assistance in configuring and
        deploying Upflow, ensuring that it meets the specific needs of each client. This personalized service can be
        a significant advantage for businesses looking to optimize their automated accounts receivable processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, the decision to implement Upflow should be based on a thorough assessment of its fit with the
        business&#39;s operational needs and financial goals. By considering both the tangible benefits and the
        support available from Geek @ Your Spot, businesses can make an informed choice that enhances their
        financial management capabilities.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-upflow-fit-and-pricing-model">
                Evaluating Upflow: Fit and Pricing Model
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-upflow-fit-and-pricing-model">
                Evaluating Upflow: Fit and Pricing Model
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
