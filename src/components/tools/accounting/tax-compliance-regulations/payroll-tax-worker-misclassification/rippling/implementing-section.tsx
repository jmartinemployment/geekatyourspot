import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Going live with Rippling for Payroll Tax &amp; Worker Misclassification is not a generic software
        rollout. Geek @ Your Spot gets South Florida clients up and running by following a sequence that cuts
        out wasted steps and avoids the pitfalls that slow down other platforms. The goal is to plug Rippling
        into your existing payroll, HR, and accounting stack with as little downtime as possible. That means no
        waiting for a blank-slate install, no endless “customization” cycles, and no weeks of manual syncing
        between systems. Instead, Geek @ Your Spot uses Rippling’s prebuilt connectors, templated onboarding,
        and phased rollout to get your compliance guardrails in place fast.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is a diagnostic. Geek @ Your Spot maps out how your business currently handles payroll
        taxes, worker classification, and contractor onboarding. Every South Florida small business has its own
        mix: some keep everything in QuickBooks, others have a mix of spreadsheets, emails, and paper contracts.
        The team identifies which worker records, tax accounts, and compliance policies need to move into
        Rippling, and which can be left alone. This isn’t just a data import—it’s the difference between
        bringing your old risks into a new system and actually fixing them at the source.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rippling’s templated setup is what makes this possible. Instead of building every workflow from scratch,
        Geek @ Your Spot uses Rippling’s built-in classification analyzer and compliance modules. For example,
        if your business brings on a new contractor, Rippling’s classification quiz can determine the correct
        worker status in about 90 seconds—no legal guesswork, no outdated templates. That means you are not
        relying on generic contracts or hoping a one-size-fits-all document will hold up under audit. The system
        generates contracts tailored to Florida and local county rules, so you are not caught off guard when a
        worker moves between Miami-Dade and Broward.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the core data and workflows are mapped, Geek @ Your Spot rolls out Rippling in phases. The first
        phase covers payroll tax automation and worker classification. This is where most businesses see the
        biggest drop in manual work: Rippling automatically registers state and local tax accounts, calculates
        and remits payroll taxes for every run, and flags compliance risks in real time. If a worker’s status
        changes or a new location is added, the platform updates tax withholdings and compliance checks
        automatically—no need for a separate legal review or a mad scramble at quarter-end.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next comes the integration with your accounting and HR tools. Rippling’s prebuilt connectors for
        QuickBooks, Xero, and NetSuite let Geek @ Your Spot sync payroll and contractor payments without double
        entry. This is not a one-way export—it’s a real-time, bi-directional sync that keeps your books and
        compliance records aligned. If you approve a contractor invoice in Rippling, the payment and tax data
        flow into your accounting software without a second round of data entry. That cuts out the lag and
        errors that happen when teams try to reconcile payroll
        and&nbsp;<GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;by hand.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses with seasonal or gig-heavy workforces, phased rollout means you can start with your core
        team and expand to contractors as needed. Geek @ Your Spot sets up Rippling to handle both W-2 and 1099
        workers from the same dashboard, so you do not have to choose between compliance and flexibility. As
        your business grows, you add locations, roles, or new types of workers without redoing your compliance
        setup from scratch. The platform’s Compliance 360 module keeps monitoring for classification and
        overtime risks, so you are not waiting for an annual audit to discover a mistake.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout the rollout, Geek @ Your Spot handles the training and support. Staff are shown exactly how
        to onboard new hires, approve contractor invoices, and respond to compliance alerts. There’s no need for
        a separate HR or legal team—Rippling’s workflows are built for managers and owners who do not have time
        to learn a new system every year. Most businesses see the difference in their first payroll cycle: no
        more chasing missing forms, no more guessing at tax rates, and no more last-minute contract rewrites
        when a worker’s status changes.</p>
      <p className="text-md text-white shadow-text pt-3">
        In practice, this means that the Miami-Dade construction owner from the opening scenario can bring on a
        new crew for a project, classify each worker correctly, and have payroll taxes filed
        automatically—without spending Friday afternoon buried in paperwork. The invoices from out-of-state
        contractors are handled in the same dashboard, with Rippling generating the right tax forms and storing
        them for easy access if the state ever comes knocking. The whole process is visible, auditable, and runs
        in real time, so the business can keep moving without fear of compliance surprises.</p>
      <p className="text-md text-white shadow-text pt-3">
        The bottom line: going live with Rippling, led by Geek @ Your Spot, is about replacing a patchwork of
        manual steps and risky guesswork with a unified, automated system. The platform’s templated setup,
        prebuilt connectors, and phased rollout mean you get compliance coverage from day one—not months down
        the line. And because everything is mapped to your real business processes, you are not just buying
        software—you are getting a compliance shield that fits the way you actually work in South Florida.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-geek-your-spot-implements-so-rippling-goes-live-fast-and-what-that-looks-like-in-a-real-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Geek @ Your Spot Implements So Rippling Goes Live Fast—And What That Looks Like in a Real Business
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
              <h2 id="what-geek-your-spot-implements-so-rippling-goes-live-fast-and-what-that-looks-like-in-a-real-business" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Geek @ Your Spot Implements So Rippling Goes Live Fast—And What That Looks Like in a Real Business
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
