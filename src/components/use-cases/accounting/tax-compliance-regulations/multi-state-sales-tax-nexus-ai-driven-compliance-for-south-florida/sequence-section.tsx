import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function SequenceSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A real-world rollout for Multi-State Sales Tax Nexus compliance is not a switch you flip, it’s a
        sequence of operational changes, each one with its own friction. The process starts before you ever sign
        a contract with a tax tool. You need a clear map of your sales footprint: where your orders are
        shipping, which channels are in play, and which products (or services) are on the line. Without this,
        you cannot even tell which states you’re exposed in, or whether you need to register at all.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Inventory your sales channels and map them to states and localities. This means pulling reports from Shopify, Amazon, your own site, and any wholesale or B2B pipelines. TaxCloud, for example, cannot track cumulative nexus exposure unless you import all sources, not just one platform.</li>
        <li>Assess your data readiness. This is where you find the gaps, unmatched invoices, missing shipping addresses, inconsistent product codes. Quaderno’s aggregation tools can help, but only if each channel is set up to push clean, detailed records. If you rely on spreadsheets or manual data pulls, expect delays and errors.</li>
        <li>Select the right compliance partner based on your business model and pain points. If you need deep, hands-on support (including VDA negotiation and audit defense), a service like TaxValet is structured to take the entire compliance cycle off your hands. Zamp stands out for its managed onboarding and real-time monitoring when your product catalog is complex or your team is lean. TaxJar slots in for high-volume digital commerce where real-time alerts and marketplace double-counting are a risk.</li>
        <li>Run a pilot implementation, never a big-bang go-live. Set up a sandbox or test environment with a month’s worth of real transactions. See what breaks: missing tax codes, state mismatches, or returns that don’t reconcile. This is where Zamp’s hands-on mapping, or TaxCloud’s dashboard alerts, catch errors before they become liabilities.</li>
        <li>Integrate with your accounting and reporting stack. This is more than “turning on” a plugin. You need to connect the tax engine to your invoicing,&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>, and order management systems. If your setup includes custom platforms or multiple processors, this step can take a week or a month. Quaderno’s&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;approach helps here, but only if your developers or integrators can map every field correctly.</li>
        <li>Register in new states as soon as a threshold is crossed. The system should catch this automatically, but humans have to review and approve. TaxCloud’s SST program can automate free registrations in many states, but you still need to supply business documents and handle local quirks. Zamp’s white-glove service will handle this paperwork directly if you want zero touch.</li>
        <li>Go live for active filing. The first month is always the hardest, teams discover which returns are monthly vs. quarterly, which states want zero returns, and where filings must be split by county or city. TaxJar’s executive dashboards and TaxValet’s managed filings help here, but only if the data feeding the system is right.</li>
        <li>Monitor, review, and audit. The job is not done after the first filing cycle. You need regular reviews to catch missed registrations, data gaps, or new product lines that trigger different tax rates. Zamp and TaxValet provide dedicated audit support. TaxCloud’s dashboard flags new risks as thresholds or rules change.</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        In the real world, this sequence is rarely linear. A Friday afternoon can turn into a scramble when a
        state notice arrives or a sales channel integration fails. For the Broward retailer from earlier, the
        first real test may come when a local CPA flags a missing registration in California, or when their
        Shopify sales spike and the tool’s alerts show they’re weeks past a critical threshold. The difference
        between a smooth rollout and a fire drill is not the tool itself, but the depth of process and oversight
        built in at every step.</p>
      <p className="text-md text-white shadow-text pt-3">
        Done right, this rollout is not a one-time project, but the start of a managed, evolving compliance
        system. The upfront work, mapping data, piloting integrations, assigning roles, sets the stage for
        months and years of low-stress filings and audit readiness. If you shortcut any of these steps, the
        price comes due in late fees, back taxes, or lost hours reconciling errors. Following this sequence with
        the right partner is how you end up with true multi-state compliance, not just a tax tool collecting
        dust in your stack.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="rolling-out-multi-state-tax-compliance-what-really-happens-start-to-finish" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Rolling Out Multi-State Tax Compliance: What Really Happens, Start to Finish
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="rolling-out-multi-state-tax-compliance-what-really-happens-start-to-finish-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Rolling Out Multi-State Tax Compliance: What Really Happens, Start to Finish
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
