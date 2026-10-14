import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small businesses in Miami-Dade, Broward, and West Palm Beach want to know if Take the Helm is the right
        fit before investing time and effort. The answer comes down to three things: how well it matches your
        needs, what it actually changes for your team, and how the pricing aligns with your budget and growth
        plans.</p>
      <p className="text-md text-white shadow-text pt-3">
        Start with fit. Take the Helm is designed for small businesses that struggle with unpredictable cash
        flow, scattered records, and manual spreadsheet work. If your team spends hours each week tracking
        invoices, chasing late payments, or guessing at which bills to pay next, this platform addresses the
        root of the problem. Take the Helm’s live dashboard gives you a real-time view of cash in, cash out, and
        what is coming due. It does not require an overhaul of your existing accounting tools. Instead, it
        connects directly to QuickBooks, Xero, or Sage and pulls in your actual data. If your business relies on
        outdated desktop software, legacy spreadsheets, or has never had a central cash flow view, Take the Helm
        offers a clear upgrade without the need for a
        full&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;migration.</p>
      <p className="text-md text-white shadow-text pt-3">
        The features that matter are the ones that remove manual work and reduce surprises. Take the Helm’s
        drag-and-drop forecasting lets you see the impact of moving a payment or receipt date instantly. Its
        automated invoice and bill tracking eliminates double data entry, and the platform’s scenario planning
        tools let you test what happens if a big payment is delayed or a new expense hits. You do not have to be
        a finance expert to use these features. The interface is built for operational teams, not just
        accountants. This is a key test: if your team can answer cash flow questions in minutes rather than
        hours, the tool is working for you.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing is always a concern for small businesses. Take the Helm offers a 14-day free trial, so you can
        see how it fits before committing. The platform’s pricing is published on its site and does not require
        a sales call to access. There are no hidden fees for adding users or running multiple scenarios. This
        matters for teams that want to collaborate without worrying about per-seat charges. The real savings
        come from the time and errors Take the Helm removes from your month. If you are currently paying for
        manual bookkeeping corrections, late payment fees, or losing hours to spreadsheet wrangling, the cost of
        Take the Helm is measured against those losses.</p>
      <p className="text-md text-white shadow-text pt-3">
        When judging Take the Helm, do not focus on features you will never use. Look at the workflows you run
        every week: collecting payments, paying bills, updating forecasts, and reporting to partners or lenders.
        Take the Helm is strongest for businesses that need clear, short-term cash visibility and want to move
        away from spreadsheet chaos. If you need deep inventory tracking or advanced manufacturing modules, this
        is not the platform for you. For service businesses, project-based firms, and those with seasonal swings
        in cash flow, the platform’s scenario planning and real-time forecasting tools are a direct answer to
        daily pain points.</p>
      <p className="text-md text-white shadow-text pt-3">
        The decision is not just about software. Geek @ Your Spot closes the gap between what Take the Helm can
        do and what it will do for your team. Their role is to map your data, configure the rules, and train
        your staff so the platform fits your business from day one. This is the difference between buying a tool
        and getting a solution that works in your environment. If you are weighing Take the Helm against other
        platforms, focus on what it removes from your workflow, how it fits your data, and whether its pricing
        matches the time and errors it saves. For small businesses ready to move past spreadsheet-driven cash
        flow surprises, Take the Helm is a practical, affordable step forward.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-evaluate-take-the-helm-fit-features-and-pricing-for-small-business-use" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Evaluate Take the Helm: Fit, Features, and Pricing for Small Business Use
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
              <h2 id="how-to-evaluate-take-the-helm-fit-features-and-pricing-for-small-business-use" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Evaluate Take the Helm: Fit, Features, and Pricing for Small Business Use
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
