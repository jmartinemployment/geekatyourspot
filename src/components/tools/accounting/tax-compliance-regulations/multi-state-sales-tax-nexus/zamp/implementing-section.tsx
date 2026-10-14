import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Going live with Zamp is not a drawn-out, do-it-yourself project. For a small business facing multi-state
        sales tax obligations, Zamp’s onboarding is built to be direct, hands-on, and fast. The process does not
        start with a blank dashboard or a stack of instructions. Instead, a dedicated onboarding specialist and
        tax team guide every step, handling the technical and compliance legwork that typically stalls
        implementation. This approach is designed for teams who cannot afford to pause sales or lose time to
        configuration errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is a short intake call with your Zamp onboarding specialist. Here, you grant access to
        your sales systems, Shopify, Amazon, BigCommerce, Magento, or
        your&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>. Zamp’s pre-built connectors
        and&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;integrations cut the manual work down to
        minutes. There is no need to export and reformat data or map every field by hand. Zamp pulls the
        transaction history it needs for a full nexus analysis. This is not a one-size-fits-all import. The
        system reviews prior-period orders, refunds, and adjustments to build a complete picture of where your
        business has crossed economic or physical nexus thresholds. That means the compliance clock starts
        ticking on accurate, historical data, not on guesswork or partial records.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once Zamp has your data, the onboarding team handles the heavy lifting. They review your product catalog
        and sales channels, manually mapping SKUs and identifying which states require registration. This is
        where Zamp’s white-glove approach stands out. The onboarding team does not just connect your systems,
        they actively check for product misclassifications, missing tax codes, and edge cases that would
        otherwise trigger audit risk. For a business selling across multiple platforms, this managed review is
        the difference between a compliant launch and a string of notices down the line.</p>
      <p className="text-md text-white shadow-text pt-3">
        Registration comes next. Zamp’s team files state and local registrations on your behalf. There is no
        portal hopping or paperwork for your staff. When a state threshold is close, Zamp alerts you at 80% so
        you can plan ahead, then takes care of the paperwork as soon as you cross the line. This prevents the
        all-too-common gap where a business starts collecting tax weeks late, racking up liabilities. Account
        setup, linking, and calendar management are all handled within Zamp’s unified platform, no separate
        modules, no add-ons, and no hidden fees for each new state.</p>
      <p className="text-md text-white shadow-text pt-3">
        After registration, Zamp configures your compliance calendar and automates filings and remittances. The
        system tracks state portals daily, catching and resolving notices before they reach your inbox. Audit
        requests and discrepancies are managed by Zamp’s team, not pushed back to your bookkeeper. Direct phone
        and email support means you are never left waiting in a ticket queue or searching a help site for
        answers. For a small team, this means compliance is not just set up, but actively managed, with Zamp
        taking on operational responsibility from day one.</p>
      <p className="text-md text-white shadow-text pt-3">
        The end result: most teams are fully live within a week. There is no downtime, no disruption to sales,
        and no need to train staff on a new system. Zamp’s onboarding is not a handoff, it is a managed
        transition where your only job is to review and approve, not to coordinate or execute. This is how Zamp
        delivers compliance that keeps pace with your growth, without making you an expert in every state’s tax
        code.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-zamp-gets-a-small-business-live-without-weeks-of-downtime-or-guesswork" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Zamp Gets a Small Business Live Without Weeks of Downtime or Guesswork
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
              <h2 id="how-zamp-gets-a-small-business-live-without-weeks-of-downtime-or-guesswork" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Zamp Gets a Small Business Live Without Weeks of Downtime or Guesswork
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
