import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in South Florida, navigating the maze
        of&nbsp;tax compliance&nbsp;is a daily challenge. The
        complexity of managing taxes across multiple states, each with its own set of ever-changing rules, turns
        a straightforward task into a logistical nightmare. This burden is particularly acute for e-commerce
        and&nbsp;<GlossaryLink slug="saas">SaaS</GlossaryLink>&nbsp;companies expanding beyond state lines,
        often unknowingly exposing themselves to audit risks. The manual process of updating tax tables,
        ensuring accurate filings, and meeting strict deadlines consumes valuable time and resources that could
        be better spent on growth and innovation.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual tax compliance is fraught with pitfalls. Businesses often rely on outdated static tax tables that
        fail to capture real-time rate changes, leading to inaccuracies in tax calculations. This not only
        results in overpayment of compliance fees but also triggers costly state audits when errors are
        discovered. Missing filing deadlines due to the manual nature of the process incurs immediate penalties,
        further straining a company&#39;s cash flow.</p>
      <p className="text-base text-white shadow-text pt-3">
        Moreover, the inability to consolidate tax liabilities across various sales channels, such as independent
        websites and third-party marketplaces, creates silos that complicate compliance efforts. Each channel
        might have different reporting requirements, and failing to integrate these can lead to discrepancies
        and missed obligations.</p>
      <p className="text-base text-white shadow-text pt-3">
        TaxCloud addresses these challenges head-on by automating tax compliance processes. As a Certified
        Service Provider under the Streamlined Sales Tax program, TaxCloud offers small businesses in South
        Florida a way to cut their sales tax administrative time by 70% for free in 24 states. This
        certification allows states to subsidize compliance costs, providing automated, real-time protection
        without the hefty price tag associated with enterprise-level solutions.</p>
      <p className="text-base text-white shadow-text pt-3">
        By leveraging TaxCloud, businesses can reduce their overhead costs significantly. The platform automates
        the updating of tax rates, ensuring that calculations are always based on the most current data. This
        eliminates the risk of filing inaccuracies and the subsequent audits that can cripple a small business.
        Additionally, TaxCloud&#39;s ability to consolidate tax liabilities across multiple channels ensures
        that businesses remain compliant without the need for expensive, mid-market compliance systems.</p>
      <p className="text-base text-white shadow-text pt-3">
        The implementation of TaxCloud not only streamlines the compliance process but also frees up resources,
        allowing businesses to focus on growth and innovation. With its dedicated Accounting Partner Directory
        and VIP technical support, TaxCloud provides a comprehensive solution tailored specifically for
        independent implementation consultants and the small businesses they serve. This partnership ensures
        that businesses in South Florida can navigate the complex and changing tax landscape with confidence and
        ease.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-hidden-costs-of-manual-tax-compliance" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Hidden Costs of Manual Tax Compliance
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
              <h2 id="the-hidden-costs-of-manual-tax-compliance-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Hidden Costs of Manual Tax Compliance
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
