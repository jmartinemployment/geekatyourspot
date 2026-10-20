import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deel’s configuration centers on automating the parts of payroll tax and worker classification that
        usually trip up small businesses. The platform is not just a template—every business using Deel sets up
        its own rules for how workers are classified, which tax forms are generated, and how compliance alerts
        are handled. Geek @ Your Spot LLC, as the implementer, makes sure these settings reflect your real team
        structure and the specific risks of South Florida’s mixed W-2 and 1099 workforce.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first layer is classification logic. Deel’s AI-powered worker classifier is configured to use the
        criteria that actually matter for US and Florida law—behavioral control, financial control, and the
        relationship’s nature. These are not just checkboxes. The system uses your actual contract terms, work
        schedules, and payment patterns to flag cases where a 1099 contractor looks more like a W-2 employee.
        This is what stops the Friday afternoon spreadsheet panic, where a business owner wonders if today’s
        batch of payments will trigger a future audit. Deel’s classifier draws on local legal precedent and
        updates as laws change, so the rule set you configure at launch evolves automatically. When the IRS,
        Florida Department of Revenue, or another state’s rules change, Deel’s Compliance Hub pushes an alert
        and updates the logic—no manual intervention required.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next are the compliance guardrails. Deel’s Compliance Hub is where you set up real-time alerts for
        regulatory changes, local tax rules, and required documentation. This is not a static checklist. For a
        business with workers in Miami-Dade, Broward, and Palm Beach, Deel monitors every relevant
        update—whether it’s a change in Florida’s re-employment tax, a new reporting deadline, or a shift in
        federal 1099-NEC thresholds. The Hub sends actionable alerts and tracks which forms (W-9s, 1099s, W-2s)
        have been collected, filed, and distributed. If a contractor’s payment crosses a compliance threshold,
        Deel triggers the right form and flags any missing documentation. This is the system that keeps a small
        team from missing a filing window or letting a compliance task fall through the cracks when the office
        is short-staffed.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation logic in Deel goes beyond classification and alerts. Every part of the payroll cycle can be
        set to run on schedule, with human intervention only where it matters. Worker onboarding is self-serve:
        contractors and employees upload their own tax forms, right-to-work documents, and payment details via a
        secure portal. Deel sends automated reminders if anything is missing or about to expire. Once approved,
        payment runs and tax filings execute on schedule—no more last-minute bank uploads or manual tax
        calculations. Corrections and adjustments are handled in-cycle, with full traceability and audit-ready
        records. This is how Deel replaces the week-long scramble to fix a payroll error with a single,
        trackable workflow.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integrations are not an afterthought in Deel—they are a core part of the platform’s extension mechanism.
        Deel connects directly to accounting systems like QuickBooks, Xero, and NetSuite. These integrations are
        not just data dumps; they are configured to map payroll, tax, and contractor payments to the right
        general ledger accounts, vendor profiles, and reporting categories. When Geek @ Your Spot LLC sets up Deel,
        they ensure that every invoice, payment, and tax deduction flows into your accounting system without
        manual re-entry. Vendor matching, account mapping, and multi-currency support are all configurable. If
        your business uses a separate time-tracking or expense management tool, Deel’s
        open&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;allows for custom data syncs—again, set up
        and maintained by Geek @ Your Spot LLC so your team never has to touch the raw integration code.</p>
      <p className="text-md text-white shadow-text pt-3">
        Deel’s extension mechanism is not a generic scripting language or SDK; it is a set of open APIs and
        marketplace integrations. This means you can automate custom workflows—like syncing workforce data to a
        benefits platform or pushing payroll data to a financial planning dashboard—without building from
        scratch. The platform’s marketplace lists supported integrations, and Geek @ Your Spot LLC configures these
        to your environment. Where an out-of-the-box integration does not fit, the
        open&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;allows for bespoke data flows, always with
        audit trails and compliance controls in place.</p>
      <p className="text-md text-white shadow-text pt-3">
        What makes Deel different from a DIY payroll tool is the way configuration is handled. Geek @ Your Spot LLC
        does not just turn on features—they translate your real-world hiring practices, payment schedules, and
        compliance risks into rules the platform enforces. During implementation, they walk through every
        workflow: who can approve a new contractor, which documents must be collected before a payment runs, how
        exceptions are flagged, and how corrections are made. They also set up the Compliance Hub to match your
        risk profile—so if your business crosses into a new state or hires a worker with a different tax status,
        Deel’s alerts and workflows adapt automatically.</p>
      <p className="text-md text-white shadow-text pt-3">
        For example, a South Florida contractor who works jobs in both Miami-Dade and Georgia will trigger
        different tax rules and reporting requirements. Deel’s configuration allows Geek @ Your Spot LLC to set up
        logic that tracks each worker’s location, payment type, and employment status, ensuring the right taxes
        are withheld and the right forms filed—without the owner needing to know the details of every state’s
        laws. If the business wants to offer perks or benefits, integrations with platforms like Fufild can be
        configured to sync eligibility and budgets based on Deel’s real-time employment data.</p>
      <p className="text-md text-white shadow-text pt-3">
        In short, Deel’s configuration is not just about setting up payroll runs. It is about building a
        compliance shield that adapts as your business changes, with every rule, alert, and data flow mapped to
        your real risks and workflows. Geek @ Your Spot LLC’s role is to close the gap between what Deel can do and
        what your business actually needs—so you get automation that works, not just software that sits on a
        shelf.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-deel-rules-automation-and-extension-in-practice" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Deel: Rules, Automation, and Extension in Practice
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-deel-rules-automation-and-extension-in-practice" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Deel: Rules, Automation, and Extension in Practice
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
