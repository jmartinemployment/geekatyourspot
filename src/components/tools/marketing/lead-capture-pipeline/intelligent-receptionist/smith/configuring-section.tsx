import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Configuring Smith.ai for a small business is not about flipping a few generic switches. The platform
        expects you to define the exact intake rules, call handling flows, and escalation paths that match your
        business’s real needs. Geek @ Your Spot LLC works with clients across West Palm Beach, Broward, and
        Miami-Dade to map out these requirements, then configures Smith.ai so it actually works for your
        environment, not for some hypothetical firm.</p>
      <p className="text-md text-white shadow-text pt-3">
        Smith.ai’s core is a hybrid model. Its AI answers routine calls fast, screens leads, and gathers
        detailed intake information using structured logic. When a call goes beyond what automation can handle,
        an upset client, a tricky eligibility question, a high-value opportunity, the system passes the call to
        one of over 500 live, North America-based agents. This transition is seamless: the agent picks up with
        all the information the AI has already gathered, so the caller never has to repeat themselves. This is
        not just a fallback; it is a core part of how Smith.ai is built to avoid the classic failures of pure
        automation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Every business’s workflow is different. Smith.ai lets you set up custom call flows, these are the
        step-by-step scripts and decision trees that guide both the AI and human agents. For example, a plumbing
        company can define specific keywords that trigger emergency routing, like &quot;flooding&quot; or
        &quot;no heat.&quot; Service qualification rules can be tailored to your intake criteria: budget
        minimums, service area checks, or project types. In legal, you can set up jurisdiction checks, conflict
        screening, or retainer triggers. These flows are not static; Geek @ Your Spot LLC helps you update them as
        your business changes, so your intake process keeps pace with reality.</p>
      <p className="text-md text-white shadow-text pt-3">
        Conditional logic is central to Smith.ai’s intake process. The system adapts its questions and routing
        based on caller responses, practice area, or urgency. For instance, if a caller says they have an
        emergency, the call can be escalated immediately. If the lead qualifies under your criteria, Smith.ai
        can schedule a consultation on the spot, collect upfront payments, or send a retainer for e-signature.
        All of this is mapped in the configuration phase, with Geek @ Your Spot LLC translating your current intake
        forms, eligibility thresholds, and escalation paths into Smith.ai’s automation logic.</p>
      <p className="text-md text-white shadow-text pt-3">
        Smith.ai’s integration catalog is extensive, but each integration must be mapped to your actual systems.
        The platform natively connects to over 7,000 apps, including CRMs, field service management, scheduling
        tools, and project management software. Geek @ Your Spot LLC configures these so that every call, intake
        form, and scheduled appointment syncs directly with the tools your team already uses, no manual entry
        required. For WordPress sites, Smith.ai can use Ninja Forms for lead intake, feeding qualified leads
        straight into your workflow.</p>
      <p className="text-md text-white shadow-text pt-3">
        Smith.ai does not offer a scripting or SDK environment for custom extensions. All customization is
        handled through its configuration interface and integration catalog. This makes it accessible for small
        businesses that do not have a developer on staff, but it also means that if you need a function outside
        what Smith.ai’s existing integrations and logic support, it is not a fit. Geek @ Your Spot LLC’s role is to
        ensure that every rule, escalation, and data sync is set up correctly from day one, and to adjust as
        your needs evolve.</p>
      <p className="text-md text-white shadow-text pt-3">
        Quality control is built into the configuration process. Smith.ai’s call rating system lets you review
        and give feedback on how calls are handled, so Geek @ Your Spot LLC can tune the flows and logic over time.
        Free spam blocking and sales call screening are standard, so you only pay for real business calls.
        Bilingual call handling is also available, letting you serve both English and Spanish speakers with the
        same workflows and escalation paths.</p>
      <p className="text-md text-white shadow-text pt-3">
        In practice, configuring Smith.ai is a collaborative process. Geek @ Your Spot LLC walks you through
        documenting your current intake, escalation, and data requirements. They translate these into Smith.ai’s
        automation logic, map integrations to your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;and
        scheduling tools, and run test scenarios to make sure the system handles real-world complexity, not just
        demo cases. If your business changes, new services, new locations, new intake criteria, updating
        Smith.ai is a configuration job, not a rebuild.</p>
      <p className="text-md text-white shadow-text pt-3">
        For the team in West Palm Beach who started this page, this means the next Friday afternoon looks
        different. The urgent call that comes in while someone is on a job site is routed instantly to the right
        on-call tech, with all details captured and logged. Intake forms are filled out automatically,
        appointments are booked directly onto the calendar, and the office manager is no longer cleaning up
        after missed calls or incomplete data. The rules are set to match the business, not the other way
        around.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-smith-ai-rules-automation-logic-and-extensions" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Smith.ai: Rules, Automation Logic, and Extensions
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
              <h2 id="what-gets-configured-in-smith-ai-rules-automation-logic-and-extensions" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Smith.ai: Rules, Automation Logic, and Extensions
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
