import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For small digital product and&nbsp;<GlossaryLink slug="saas">SaaS</GlossaryLink>&nbsp;developers in
        South Florida, the journey from local to global sales is fraught with tax challenges. The excitement of
        expanding sales internationally quickly turns into a logistical nightmare as they encounter over 12,000
        tax jurisdictions worldwide. Each jurisdiction brings its own set of complex and ever-changing tax laws,
        making compliance a daunting task. This complexity is not just a matter of understanding local county
        lines but involves tracking a vast array of international VAT, GST, and US sales tax rules.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first major pitfall is the tendency to conflate global tax rules. Businesses often mistakenly treat
        international VAT, GST, and US sales tax under a single framework, which leads to non-compliance. Each
        jurisdiction has unique requirements that must be met, and failing to do so can result in significant
        back-tax liabilities and penalties. This retrospective exposure can be financially crippling, especially
        for small businesses that discover these liabilities years after the fact.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another common issue is invoicing non-compliance. Many businesses issue basic receipts that do not meet
        the mandatory local tax language, currency breakdowns, and sequence numbers required by various
        jurisdictions. This oversight can lead to rejected invoices and delayed payments, further complicating
        cash flow and financial planning.</p>
      <p className="text-md text-white shadow-text pt-3">
        Payment processing across multiple gateways like Stripe, PayPal, and GoCardless introduces another layer
        of complexity. These platforms often fail to sync actual tax liabilities, leading to discrepancies in
        tax reporting. As a result, businesses spend countless hours manually filtering CSV exports from payment
        gateways to build regional tax summaries. This manual reporting drudgery is time-consuming and prone to
        errors, diverting resources away from growth-oriented activities.</p>
      <p className="text-md text-white shadow-text pt-3">
        Quaderno offers a solution to these challenges by automating the
        entire&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>&nbsp;cycle. It sits
        quietly behind your payment gateway, instantly generating legally compliant international invoices and
        tracking global limits. This allows small software and digital teams to focus on their core activities
        rather than being bogged down by tax code complexities. By integrating seamlessly with popular platforms
        like Stripe and PayPal, Quaderno centralizes tax data, offering real-time compliance updates and
        reducing manual intervention.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-challenges-of-navigating-complex-and-changing-tax-laws" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Challenges of Navigating Complex and Changing Tax Laws
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-challenges-of-navigating-complex-and-changing-tax-laws" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Challenges of Navigating Complex and Changing Tax Laws
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
