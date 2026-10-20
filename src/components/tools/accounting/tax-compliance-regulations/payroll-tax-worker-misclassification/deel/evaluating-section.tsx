import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deel is not a one-size-fits-all platform. The right way to judge if Deel fits your business is to look
        at how its features, pricing, and support align with your real payroll and compliance risks—not just the
        number of workers you have. For small businesses in Miami-Dade, Broward, or Palm Beach, the key question
        is whether Deel can remove the manual work and legal exposure that come with managing both W-2 employees
        and 1099 contractors, especially across state lines or in industries with high audit risk.</p>
      <p className="text-md text-white shadow-text pt-3">
        Start with fit. Deel is built for teams that need to keep payroll, contractor payments, and compliance
        in one place, without hiring a full-time HR or legal staff. If your business has a mix of employees and
        contractors, or if you hire across states (or even internationally), Deel’s classification engine and
        compliance hub are a match. The platform’s AI-powered worker classifier is not just a checklist; it
        applies the actual legal tests that matter for IRS and Department of Labor audits. It flags risks
        automatically, so you do not have to guess if someone should be a W-2 or a 1099. For a business owner
        who has lost sleep over a confusing contractor relationship or a missed tax deadline, this is the
        difference between a system that holds up in an audit and one that leaves you exposed.</p>
      <p className="text-md text-white shadow-text pt-3">
        Deel’s flexibility is another critical factor. The platform is not locked into a single workflow or
        industry. You can configure rules for different types of workers, set up multi-currency payments, and
        adapt to new tax rules as your business changes. If you need to add a new location, onboard a remote
        worker in another state, or change how you handle overtime or benefits, Deel’s compliance hub and
        integrations update automatically. For a seasonal business that ramps up and down, or a company that
        needs to hire quickly in response to new projects, this means you do not have to rebuild your payroll
        system every time your team changes.</p>
      <p className="text-md text-white shadow-text pt-3">
        On pricing, Deel stands out for its clarity and the way it aligns with small business cash flow. The
        platform offers clear, flat-rate pricing with no usage fees and no long-term contracts, so you know what
        you are paying from the start. Each Contractor of Record contract requires a deposit equal to one month
        of the contractor’s pay, which Deel holds because it assumes the legal responsibility for classification
        and compliance. This deposit structure is not an extra fee—it is the price of having Deel take on the
        risk that would otherwise fall on your business. For businesses used to getting hit with surprise costs
        for late filings or audit defense, Deel’s pricing model is a way to budget compliance costs upfront, not
        after the fact.</p>
      <p className="text-md text-white shadow-text pt-3">
        A buyer should also consider how Deel integrates with the rest of their technology stack. If your
        accounting runs on QuickBooks, Xero, or NetSuite, Deel’s native integrations mean payments, deductions,
        and tax filings sync directly—no manual data entry or risk of errors. This is not just a convenience; it
        is a major risk reducer. When payroll data flows straight into your general ledger, you avoid the
        classic spreadsheet mistakes that trigger audit red flags or missed payments. If you use time-tracking
        or benefits platforms, Deel’s
        open&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;and
        marketplace integrations let you extend automation further, always with audit trails and compliance
        controls.</p>
      <p className="text-md text-white shadow-text pt-3">
        When weighing Deel, do not just compare feature lists. Look at the platform’s track record in handling
        real compliance risks for businesses like yours. Case studies show that Deel has helped companies save
        time and costs by automating hiring, onboarding, and compliance—especially for teams working across
        borders or with complex worker mixes. The platform’s ability to assume misclassification liability
        through its Contractor of Record service is a concrete advantage for small businesses facing audit risk
        in South Florida’s gig-heavy economy.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, consider the implementation support. Deel is a powerful platform, but it is Geek @ Your Spot LLC’s
        deployment and configuration that make it work for your business. The value is not just in the software;
        it is in the way it is set up to match your unique payroll structure, compliance risks, and reporting
        needs. Geek @ Your Spot LLC ensures the platform is configured so that every workflow, rule, and integration
        is mapped to your real environment. This is what turns Deel from a generic payroll tool into a
        compliance shield that fits your business.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, judge Deel by how well it matches your risk profile, how clearly it prices compliance, and
        how smoothly it fits into your existing systems. For South Florida small businesses juggling mixed teams
        and shifting tax rules, Deel’s combination of automation, legal risk assumption, and transparent pricing
        makes it a strong fit—especially when deployed by a partner who understands your industry and region.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-deel-fit-flexibility-and-real-world-pricing" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Deel: Fit, Flexibility, and Real-World Pricing
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-deel-fit-flexibility-and-real-world-pricing" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Deel: Fit, Flexibility, and Real-World Pricing
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
