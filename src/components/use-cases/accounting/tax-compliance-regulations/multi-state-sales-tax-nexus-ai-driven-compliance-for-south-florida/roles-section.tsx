import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RolesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        <GlossaryLink slug="tax-compliance" className="text-[#0B162A] hover:underline">Tax
        compliance</GlossaryLink>&nbsp;is not just a technical overhaul, it upends how work gets done across
        your business. Once the automation goes live, the day-to-day changes land with your accounting team,
        your operations lead, sometimes even your warehouse manager. The biggest shift is this: nobody tracks
        compliance in isolation anymore. The system becomes the source of truth, and roles that used to be about
        manual checking or chasing paperwork now focus on oversight and exception handling.</p>
      <p className="text-md text-white shadow-text pt-3">
        Take the business owner or finance lead in a twelve-person operation. Before automation, they spent
        hours every month reconciling sales by state, checking for new nexus triggers, and preparing filings.
        After rollout, their job is to review real-time dashboards, like the ones in TaxCloud or TaxJar, where
        alerts flag when you are nearing a threshold or a filing is due. Instead of pulling reports and
        validating numbers by hand, they approve registrations and review exceptions. The time saved is real,
        but the responsibility shifts to monitoring the system and acting quickly on alerts.</p>
      <p className="text-md text-white shadow-text pt-3">
        Inventory and operations staff also see a change. With TaxValet tracking inventory locations across FBA,
        3PLs, and in-house stock, the warehouse manager no longer has to report every transfer manually to the
        finance team. Instead, their job is to make sure all stock movements are reflected in the integrated
        system, so the tax map updates automatically. When a new physical nexus is triggered, the software flags
        it and the team can act before a tax bill or filing deadline is missed.</p>
      <p className="text-md text-white shadow-text pt-3">
        Customer service and sales teams benefit, too, though often indirectly. When Quaderno automates
        tax-compliant invoicing and applies the right rates for each buyer, fewer customers call with billing
        questions or disputes about taxes charged. The support team spends less time fixing errors and more time
        serving customers.
        For&nbsp;<GlossaryLink slug="saas" className="text-[#0B162A] hover:underline">SaaS</GlossaryLink>&nbsp;or
        digital product sellers, this is even more pronounced, accurate, localized invoices mean fewer headaches
        with buyers in states with tricky digital tax rules.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses that used outside bookkeepers, the relationship changes. Zamp’s managed onboarding means
        you do not have to rely on your bookkeeper to spot classification errors or respond to state notices.
        The outside accountant may still review filings or provide year-end support, but the compliance workflow
        now lives inside your automated system. That means fewer back-and-forth emails, less risk of missing
        deadlines, and a clearer chain of accountability.</p>
      <p className="text-md text-white shadow-text pt-3">
        There are still edge cases that require human judgment. TaxValet, for example, can handle voluntary
        disclosure agreements and historical audits, but your team must decide when to escalate a complex issue
        or seek outside legal advice. The difference is that the system now surfaces those cases early, so you
        are not blindsided by a surprise audit or a notice that sat unopened in a mailbox for weeks.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Business owners and finance leads move from manual tracking to reviewing dashboards and alerts.</li>
        <li>Inventory and operations teams manage data integrity, not paperwork, ensuring stock locations are always up to date.</li>
        <li>Customer service spends less time on tax disputes and more time on real support.</li>
        <li>External bookkeepers shift to oversight and specialized advice, rather than routine compliance work.</li>
        <li>Everyone relies on a single source of truth, reducing finger-pointing and missed deadlines.</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        Back in our Broward retailer’s office, the Friday afternoon that once meant chasing down missing
        invoices now means reviewing a handful of flagged exceptions, approving a new state registration, and
        moving on. The anxiety of “Did we miss a threshold?” gets replaced by a clear action list. This is the
        real change, less manual grind, more proactive control, and a compliance posture that keeps pace as your
        sales move into new states.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-feels-the-change-the-teams-and-roles-inside-a-tax-compliance-overhaul" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Feels the Change: The Teams and Roles Inside a Tax Compliance Overhaul
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
              <h2 id="who-feels-the-change-the-teams-and-roles-inside-a-tax-compliance-overhaul" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Feels the Change: The Teams and Roles Inside a Tax Compliance Overhaul
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
