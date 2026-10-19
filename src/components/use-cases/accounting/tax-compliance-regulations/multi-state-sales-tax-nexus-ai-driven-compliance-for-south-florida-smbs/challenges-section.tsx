import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The reality of multi-state sales&nbsp;<GlossaryLink slug="tax-compliance">tax
        compliance</GlossaryLink>&nbsp;is that most small businesses hit the wall sooner than they expect. The
        triggers for economic nexus, crossing $100,000 in sales or 200 transactions in a state, are not hard to
        reach in an online-driven market. But the complexity comes not from the thresholds themselves, but from
        the way current workflows break down at scale. Running&nbsp;<Link id="use-cases-accounting-multi-state-sales-tax-nexus-challenges-tax-compliance" href="/use-cases/accounting/tax-compliance-regulations" className="text-[#C83803] hover:underline">tax compliance</Link>&nbsp;by hand, or relying on basic
        tools, leaves critical gaps that stack up until something breaks.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first major failure is the blind spot around transaction counts. Many owners think only revenue
        matters, and miss states where 200 small orders create a nexus overnight. The result: a business might
        be under the radar on revenue, but still trigger a filing obligation after a busy holiday season or a
        successful campaign, without any warning sign from their current system. This blind spot is not a small
        mistake. It leaves teams exposed to back taxes and penalties for sales they never realized were taxable.</p>
      <p className="text-md text-white shadow-text pt-3">
        Then comes the tax calculation itself. Too many teams still use hardcoded zip code tables in platforms
        like WooCommerce or Shopify, thinking it covers all local taxes. It does not. Home-rule states and local
        jurisdictions layer on district, city, and county taxes. A flat-rate approach means under-collection in
        some places and over-collection in others, either of which can trigger an audit or create customer
        friction. The difference between rooftop-accurate rates and rough zip code averages is not academic, it
        is the difference between compliant operations and a stack of audit notices.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual registration errors are another sinkhole. Businesses often wait too long to register with a new
        state’s Department of Revenue, or worse, start collecting tax before they have the paperwork in place.
        This is tax fraud, whether intended or not. The registration process itself is inconsistent state to
        state, and any misstep can delay compliance, leading to uncollected liabilities that snowball fast.</p>
      <p className="text-md text-white shadow-text pt-3">
        Even if registration is handled, deadlines become the next tripwire. Each state sets its own filing
        schedule, monthly, quarterly, or annually, and the calendar can shift as revenue grows. Keeping up with
        these deadlines by hand is a full-time job. Miss just one zero-dollar return and the penalties begin to
        add up. For a business registered in five states, a single missed deadline can mean hundreds of dollars
        in fines, all for a period where no tax was even owed.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data chaos is the constant background noise. Most small businesses sell across multiple channels,
        Shopify, Amazon, direct invoice, and more. Each platform summarizes only its own activity, and none
        combine data across all channels. Manually merging this information is error-prone, especially as order
        volume grows. At year-end, teams face the nightmare of reconciling mismatched reports, risking
        double-counting or missing entire categories of sales. This is not just a reporting headache. It is a
        compliance risk that can trigger an audit or leave money on the table.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, there is no safety net when something goes wrong. Automated plugins can break without warning.
        If a glitch stops collecting tax for weeks or months, the business is on the hook for every missed
        dollar. No in-house CPA means no one is watching for regulatory notices or shifting thresholds. Teams
        discover problems when a state letter arrives, not when they have time to fix it. By that point, the
        damage is already done.</p>
      <p className="text-md text-white shadow-text pt-3">
        These breakdowns all trace back to the same root issue: the status quo relies on manual effort, static
        systems, and incomplete oversight. As soon as the business crosses state lines, that approach is not
        just inefficient, it is actively dangerous. The result is not just compliance risk, but operational
        paralysis. Teams freeze, growth slows, and owners spend more time worrying about tax than about
        customers. That is what goes wrong, and why small businesses in South Florida need to rethink how they
        approach multi-state sales tax from the ground up.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="why-multi-state-sales-tax-goes-off-the-rails-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Multi-State Sales Tax Goes Off the Rails for Small Teams
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
              <h2 id="why-multi-state-sales-tax-goes-off-the-rails-for-small-teams" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Multi-State Sales Tax Goes Off the Rails for Small Teams
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
