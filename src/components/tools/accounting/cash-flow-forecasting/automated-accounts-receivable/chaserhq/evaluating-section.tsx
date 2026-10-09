import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Selecting the right tool for Automated Accounts Receivable is crucial for small businesses in Miami-Dade,
        Broward, and West Palm Beach. Chaserhq offers a comprehensive solution by automating many of the manual
        tasks that typically bog down finance teams. But how do you know if it&#39;s the right fit for your
        business? Consider its capabilities, pricing model, and how it stacks up against other options.</p>
      <p className="text-md text-white shadow-text pt-3">
        Chaserhq stands out with its ability to streamline accounts receivable processes, offering real-time
        insights into cash flow. This feature is particularly beneficial for businesses dealing with frequent
        small transactions and seasonal revenue fluctuations, which can disrupt cash flow stability. By
        categorizing receivables into actionable segments—such as promised, disputed, and at-risk cash—Chaserhq
        helps prioritize tasks and address potential issues before they escalate.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing for Chaserhq is structured to be accessible for small businesses, with monthly and annual plans
        available. The monthly plan is priced at $25, while the annual plan offers a cost-effective option at
        $250. This pricing model allows businesses to choose a plan that aligns with their budget and cash flow
        needs, providing flexibility in how they manage their finances.</p>
      <p className="text-md text-white shadow-text pt-3">
        When comparing Chaserhq to other Automated Accounts Receivable tools, it&#39;s important to consider the
        specific needs of your business. Tools like Versapay and Invoiced offer similar functionalities, such as
        automated payment reminders and&nbsp;
        <GlossaryLink slug="cash-flow-forecasting">cash flow forecasting</GlossaryLink>. However, Chaserhq&#39;s
        integration capabilities with platforms like Stripe and Xero provide a seamless experience, ensuring that
        all financial data is up-to-date and reducing the need for manual data entry.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another key consideration is the support and implementation offered by Geek @ Your Spot. Their expertise
        in configuring and deploying Chaserhq ensures that the software is tailored to your business&#39;s unique
        requirements. This local support can be a deciding factor, particularly for businesses that prefer a
        hands-on approach to implementation and troubleshooting.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Chaserhq is a viable option for small businesses looking to automate their accounts
        receivable processes. Its competitive pricing, robust feature set, and seamless integration with existing
        systems make it a strong contender. However, it&#39;s essential to weigh these benefits against your
        specific business needs and consider the support available from Geek @ Your Spot to ensure a smooth
        transition to automated processes.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-chaserhq-fit-pricing-and-alternatives">
                Evaluating Chaserhq: Fit, Pricing, and Alternatives
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-chaserhq-fit-pricing-and-alternatives">
                Evaluating Chaserhq: Fit, Pricing, and Alternatives
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
