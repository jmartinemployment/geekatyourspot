
export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Lusha is not a one-size-fits-all tool. Whether it fits your small business in Miami-Dade, Broward, or
        West Palm comes down to three things: the quality of its data, the way its pricing works, and how well
        it matches your team’s actual workflow. Start with the data. Lusha’s direct dial numbers and verified
        emails are its main selling point. If your team spends hours a week getting blocked by gatekeepers or
        chasing bad leads, the platform’s ability to deliver real mobile numbers and personal emails, at 70%
        to 80% accuracy for phone and 95% deliverability for email, as reported by real users, means your reps
        spend less time hunting and more time talking to decision-makers.</p>
      <p className="text-base text-white shadow-text pt-3">
        But accuracy is not the only thing to weigh. Lusha’s data is strongest for B2B contacts and companies,
        especially in sectors like software, marketplaces, real estate tech, and infrastructure. The platform
        is built for teams who need to reach decision-makers, not just fill a list with any name. If your
        business depends on hitting quota by connecting with real buyers instead of sending generic emails
        into the void, Lusha’s fit is clear. Where it falls short is person-level website visitor
        identification. Lusha can identify companies visiting your site, but not the specific stakeholder
        within that company. If you need to know exactly who is browsing your pricing page, you will need to
        supplement Lusha with other tools or use its company-level data to guide your outreach.</p>
      <p className="text-base text-white shadow-text pt-3">
        Pricing is another key consideration. Lusha offers a free plan, but it is limited, only 100 companies
        per month, and data is retained for 7 days. For most small businesses, that is enough to test the
        waters but not to run a full pipeline. Paid plans scale up quickly based on the volume of website
        traffic and the number of enrichment requests. For high-traffic sites or large batch uploads, costs
        can rise fast. Lusha does not publish US dollar pricing directly, but the model is clear: you pay for
        the number of records enriched, and for higher usage, the monthly fee increases. For a small team,
        this means you need to know your volume before you commit. Geek @ Your Spot LLC helps you estimate this
        upfront, so you do not end up paying for more than you use, or running out of credits at a critical
        moment.</p>
      <p className="text-base text-white shadow-text pt-3">
        Integration is where Lusha stands out for teams who already use Salesforce, HubSpot, Zoho, Outreach,
        or SalesLoft. The platform’s&nbsp;API&nbsp;and native
        integrations mean data flows directly into
        your&nbsp;CRM&nbsp;and outreach tools, and Geek @ Your Spot LLC
        ensures the mapping is set up so nothing gets lost. This is not just a technical detail, it is the
        difference between a tool that sits unused and one that actually makes your team more productive. If
        your current stack is built around these platforms, Lusha is a strong fit. If you use less common
        systems or need heavy customization, the fit may be weaker unless you have the technical support to
        build out the integration.</p>
      <p className="text-base text-white shadow-text pt-3">
        Compliance is another factor. Lusha’s data is professionally sourced, and opt-outs are honored
        automatically. For small businesses worried about regulatory risk, this is a real advantage. You do
        not have to build your own compliance workflows, Lusha takes care of the basics, and Geek @ Your Spot LLC
        can help you set up any additional controls you need for your industry or market.</p>
      <p className="text-base text-white shadow-text pt-3">
        When judging Lusha, look at the total cost of ownership, not just the monthly fee. The real cost is in
        your team’s time, hours lost to manual research, dead dials, and bounced emails. If Lusha saves each
        rep two hours a day, that is a return you can measure. But if your sales process is not built around
        direct outreach, or if your deals do not depend on reaching specific decision-makers, you may not see
        the same value. Geek @ Your Spot LLC works with you to run a pilot, measure the impact, and decide if
        scaling up makes sense.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, Lusha fits best for small, outbound-focused teams who need to reach real buyers fast, and
        who already run on modern&nbsp;CRM&nbsp;and outreach tools. It
        is less suited to inbound-only teams, companies with highly specialized or local-only data needs, or
        those who want person-level website visitor identification as their main use case. The right move is
        to map your sales process against Lusha’s strengths, run a test, and only then decide if it is the
        right engine for your pipeline.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-if-lusha-fits-your-business-and-budget" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge If Lusha Fits Your Business and Budget
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
              <h2 id="how-to-judge-if-lusha-fits-your-business-and-budget-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge If Lusha Fits Your Business and Budget
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
