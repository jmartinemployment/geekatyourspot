import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Leadfeeder is not a generic lead list service or a one-size-fits-all data vendor. It is built for B2B
        companies that need to see which organizations are on their website, what those companies are actually
        doing, and how likely they are to buy. For a small business in South Florida, the real test of fit is
        whether Leadfeeder can surface local, high-intent accounts and route them to your team before a
        competitor gets there. Judging whether Leadfeeder is right for you depends on a few concrete factors:
        the quality of its identification for your market, the flexibility of its automation, and how its
        pricing model matches your pipeline volume and team structure.</p>
      <p className="text-md text-white shadow-text pt-3">
        Start with identification quality. Leadfeeder uses its own proprietary IP-to-company database, built
        and refined over more than a decade. The system is designed to identify companies, not individuals,
        which keeps it compliant with privacy laws and focused on actionable sales intelligence. In practice,
        this means you will see which businesses, like local law firms, clinics, or logistics providers, are
        visiting your site, even if those visitors never fill out a form. The match rate varies by geography
        and industry, but for B2B traffic in the US, especially in metro areas like Miami-Dade, it is strong
        enough to make a meaningful difference in your pipeline. If your site gets mostly consumer traffic, or
        if your audience is outside the US or EU, the identification rate may be lower.</p>
      <p className="text-md text-white shadow-text pt-3">
        Flexibility is the next test. Leadfeeder lets you define what counts as a high-fit lead using a mix of
        firmographic and behavioral criteria. You can filter by company size, location, industry, and
        engagement patterns. The automation logic is not locked down: you can build custom feeds, set up
        real-time alerts, and push data directly into
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or Slack. The built-in Intent Score is
        configurable, with the ability to set your own high-intent pages and scoring weights. For teams that
        want more, the&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;and workflow tools let you build
        custom integrations and reporting. This means Leadfeeder can adapt as your sales process evolves,
        rather than forcing you to fit into a rigid template.</p>
      <p className="text-md text-white shadow-text pt-3">
        The pricing model is designed to fit a range of small business needs. Leadfeeder offers a free plan
        with a cap on the number of companies identified each month, making it accessible for teams who want
        to try before they buy. There is also a 14-day free trial for paid plans, so you can see real data
        before making a commitment. Paid plans are tiered based on the number of companies you want to
        identify and enrich each month, not by seat count, every plan comes with unlimited users. This matters
        for small teams who want to give access to everyone in sales and marketing without worrying about
        per-user fees.</p>
      <p className="text-md text-white shadow-text pt-3">
        What you pay depends on your monthly pipeline volume. If your site gets a few dozen qualified company
        visits a month, the entry tier will cover you. If you want to identify and enrich hundreds or
        thousands of companies, you’ll need a higher plan. The real cost is not just in the subscription, but
        in the time and effort saved. Leadfeeder’s automation replaces hours of manual research, lead triage,
        and&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;data entry, tasks that often fall to the
        most expensive people on your team.</p>
      <p className="text-md text-white shadow-text pt-3">
        Fit also means integration. Leadfeeder connects natively to major CRMs like HubSpot, Salesforce, and
        Pipedrive, as well as Slack for real-time team alerts. You can sync enriched company and contact
        records in bulk, keep your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;data fresh, and make
        sure every account is tagged and routed without manual effort. For teams with unique needs or a custom
        stack, Leadfeeder’s&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;lets you pull data into
        other tools or build proprietary workflows. This is where an implementation partner like Geek @ Your
        Spot adds value: mapping Leadfeeder’s data and triggers to your real sales process, so nothing falls
        through the cracks.</p>
      <p className="text-md text-white shadow-text pt-3">
        A buyer should also weigh Leadfeeder’s approach to privacy and compliance. The platform is fully GDPR
        compliant and only shows company-level data by default. Individual contact details are only revealed
        if a visitor self-identifies, such as by filling out a form. For most small businesses, this is the
        right balance: you get actionable sales intelligence without running into privacy risks or compliance
        headaches.</p>
      <p className="text-md text-white shadow-text pt-3">
        The last piece is support and scalability. Leadfeeder provides chat support and, on higher plans,
        access to a customer success manager. The platform is designed to scale as your business grows, adding
        new users, tracking more domains, and expanding automation does not require a new implementation
        project. For small teams, this means you can start with a simple setup and layer on complexity as your
        pipeline grows.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Leadfeeder is a strong fit for small B2B businesses in South Florida that want to stop
        wasting time on cold outreach and start acting on real buying signals from local companies. The
        platform’s identification quality, flexible automation, and scalable pricing model make it a practical
        choice for teams ready to move beyond static lead lists. The best way to judge fit is to run a trial
        with your own traffic, review the identified accounts, and see how well the automation matches your
        sales workflow. With the right configuration, Leadfeeder can turn your website into a daily source of
        qualified, prioritized leads, without adding headcount or manual research.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-leadfeeder-fit-flexibility-and-pricing-for-small-businesses" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Leadfeeder: Fit, Flexibility, and Pricing for Small Businesses
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
              <h2 id="how-to-judge-leadfeeder-fit-flexibility-and-pricing-for-small-businesses" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Leadfeeder: Fit, Flexibility, and Pricing for Small Businesses
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
