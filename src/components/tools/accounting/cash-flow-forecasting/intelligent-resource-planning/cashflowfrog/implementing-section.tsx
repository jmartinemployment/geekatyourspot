import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Going live with Cashflowfrog in a small business setting means less waiting, less manual work, and fewer
        surprises than traditional&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;rollouts. The process
        is designed around speed and reliability, not months of custom coding or endless back-and-forth with IT.
        Here’s how the transition actually unfolds when Geek @ Your Spot handles the implementation for a South
        Florida small business.</p>
      <p className="text-md text-white shadow-text pt-3">
        First, the time to value is short because Cashflowfrog comes with direct connectors to the most common
        accounting platforms used by small businesses: QuickBooks Online and Desktop, Xero, Sage Intacct, Odoo,
        Zoho Books, and FreshBooks. There’s no need to build or script a custom integration, most clients sync
        their core data with just a few clicks. For teams still on spreadsheets or without accounting software,
        Cashflowfrog supports direct bank feeds through Plaid and bulk uploads via Excel, so even legacy data
        can be brought in without manual re-keying.</p>
      <p className="text-md text-white shadow-text pt-3">
        The initial setup follows a clear, phased path. Geek @ Your Spot starts by connecting the accounting
        system or bank accounts. This is usually a guided process, not a technical project. Once connected,
        Cashflowfrog automatically pulls in transaction history, invoices, bills, and balances. The first cash
        flow forecast is generated in minutes, not days, and it reflects the business’s actual numbers, no
        placeholder templates or demo data. This immediate feedback lets the team see real gaps and risks right
        away, not after a month of configuration.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, Geek @ Your Spot works with the client to review the live forecast and adjust scenario settings.
        Cashflowfrog’s scenario planning tools allow the team to model real questions, what if a big client pays
        late, or if a major expense hits unexpectedly, without overwriting the base forecast. This is not a
        generic what-if worksheet; each scenario is built on the business’s own transaction data, so the impact
        is real and actionable.</p>
      <p className="text-md text-white shadow-text pt-3">
        Because Cashflowfrog is built for rolling, automated updates, there is no “cutover” day where the
        business must stop everything and hope the new system works. Instead, the platform keeps syncing with
        the accounting system or bank, updating forecasts daily. This rolling go-live means the team can keep
        working as usual while gradually shifting more decision-making to the live dashboards and scenario
        tools. There’s no risk of lost invoices or missed payments during the transition.</p>
      <p className="text-md text-white shadow-text pt-3">
        What shortens the go-live even further is Cashflowfrog’s templated setup for common business types.
        Retail, professional services, construction,
        and&nbsp;<GlossaryLink slug="saas">SaaS</GlossaryLink>&nbsp;each have tailored onboarding flows that map
        typical revenue and expense streams to the right forecast categories. Geek @ Your Spot configures these
        templates to reflect the client’s real chart of accounts, so the forecast is meaningful from day one.
        There’s no need to invent new categories or guess at mapping rules, the system recognizes the structure
        already in use.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses with more complex needs, such as multiple entities or locations, Cashflowfrog supports
        phased rollout. Geek @ Your Spot can bring one entity live, validate the forecast and reporting, then
        add additional entities or currencies as needed. This staged approach means the team is never
        overwhelmed, and each part of the business gets the attention it needs. The consolidated view still
        comes together automatically, so leadership can see the big picture without waiting for every detail to
        be perfect.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout the process, Geek @ Your Spot handles the technical configuration, data mapping, and user
        access setup. Training is focused on how to use the live dashboards, run scenarios, and interpret
        payment insights, not on how to maintain or troubleshoot the system. Because Cashflowfrog is
        cloud-based, updates and new features are rolled out automatically, so there’s no maintenance burden on
        the client.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, going live with Cashflowfrog is a matter of connecting, reviewing, and refining, not
        building from scratch. The platform’s pre-built integrations, automated data sync, and templated
        onboarding cut weeks off the typical&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;deployment
        timeline. Geek @ Your Spot’s role is to make sure the data flows cleanly, the mapping reflects the real
        business, and the team is ready to act on what the forecasts reveal. There’s no long blackout period,
        and no need to hire extra staff just to get started. The result is a live, accurate cash flow view that
        the team can trust from the first week.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-go-live-with-cashflowfrog-in-a-real-world-small-business-environment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Go Live With Cashflowfrog in a Real-World Small Business Environment
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-go-live-with-cashflowfrog-in-a-real-world-small-business-environment" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Go Live With Cashflowfrog in a Real-World Small Business Environment
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
