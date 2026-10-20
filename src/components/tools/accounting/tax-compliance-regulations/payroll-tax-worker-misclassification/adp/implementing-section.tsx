import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Getting ADP up and running in a small business is less about flipping a switch and more about a sequence
        of concrete steps that cut out risk and wasted effort. The go-live process is shaped by the reality of
        South Florida businesses: shifting teams, a mix of employees and contractors, and systems that may
        already handle some HR or payroll work. What shortens the path to a working ADP deployment is not just
        technology, but how that technology is applied to the specifics of your operation.</p>
      <p className="text-md text-white shadow-text pt-3">
        ADP’s advantage starts with its portfolio of pre-built integrations
        and&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;connectors. These allow it to plug into
        accounting, HR, and even point-of-sale tools already in place, so you do not have to rebuild your entire
        tech stack. For a business moving from spreadsheets or a basic payroll app, this means the transition
        can be staged: you import workforce data, map pay rules, and verify tax settings before any live payroll
        is run. ADP Workforce Now and ADP SmartCompliance both offer provider-agnostic integration, which means
        you can keep your current HR or payroll systems and connect ADP’s compliance engine for tax filings and
        reporting. This is critical for businesses with legacy platforms or industry-specific tools that cannot
        be replaced overnight.</p>
      <p className="text-md text-white shadow-text pt-3">
        The core of a fast go-live is templated setup. ADP brings libraries of best practices and pre-configured
        workflows that reflect common payroll and compliance needs for small businesses, especially those
        operating in multiple states or with a heavy mix of W-2 and 1099 workers. The implementation team uses
        these templates to jumpstart configuration, importing tax rules, overtime policies, and standard
        deduction types, so you do not have to define every rule from scratch. This is especially important for
        South Florida businesses that juggle seasonal hiring or need to adapt quickly to new state or local tax
        changes. ADP’s system optimization services help align these templates to your current and future needs,
        so you are not boxed in by a one-size-fits-all approach.</p>
      <p className="text-md text-white shadow-text pt-3">
        A phased rollout is another way ADP shortens the journey to go-live. Instead of moving every process at
        once, you can start with payroll tax automation and worker classification, then add modules for time
        tracking, benefits, or compliance reporting as your business grows. This staged approach lets you test
        each function with a subset of your workforce, catch data or process issues early, and train managers in
        waves rather than all at once. For a company that needs to keep paying people on time during the
        transition, this limits disruption and avoids the risk of a single point of failure.</p>
      <p className="text-md text-white shadow-text pt-3">
        Support is not an afterthought in ADP’s launch plan. Unlike systems that drop you into a help queue, ADP
        assigns dedicated payroll and compliance practitioners to guide setup, answer questions, and
        troubleshoot issues as they come up. This hands-on support is available 24/7, which is critical when a
        payroll deadline or tax notice cannot wait until Monday morning. For South Florida businesses that deal
        with sudden workforce changes or unique compliance scenarios, having a live expert on call means you are
        not left searching forums or waiting for a ticket to be answered.</p>
      <p className="text-md text-white shadow-text pt-3">
        The order of operations matters. A typical ADP go-live sequence for a small business looks like this:</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Initial data assessment: Gather workforce lists, pay rules, and current tax settings from existing systems or spreadsheets.</li>
        <li>Integration setup: Connect ADP to accounting, HR, or time-tracking platforms using pre-built connectors or custom APIs.</li>
        <li>Template configuration: Apply ADP’s best-practice payroll and compliance templates, then adjust for your overtime, deduction, and contractor rules.</li>
        <li>Pilot run: Process a test payroll cycle with a limited group, validate tax calculations and worker classifications, and review error flags.</li>
        <li>Training and change management: Train managers and payroll staff on new workflows, self-service features, and compliance dashboards.</li>
        <li>Full rollout: Move the entire workforce onto ADP, with support on call to handle any edge cases or system handoffs.</li>
      </ol>
      <p className="text-md text-white shadow-text pt-3">
        Throughout, the focus is on removing manual work and catching compliance risks before they become
        problems. For the Miami HVAC owner from the opening story, this means the first busy season with ADP is
        not spent chasing paperwork or second-guessing tax forms. Instead, the system flags any anomalies in
        worker status or overtime hours, and the support team is there to walk through any questions. The
        business stays on track, payroll runs on time, and the risk of a costly audit drops sharply. That is
        what a real go-live looks like with ADP in this market.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="launching-adp-in-a-live-small-business-environment-what-actually-gets-you-to-day-one-faster" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Launching ADP in a Live Small Business Environment: What Actually Gets You to Day One Faster
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
              <h2 id="launching-adp-in-a-live-small-business-environment-what-actually-gets-you-to-day-one-faster-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Launching ADP in a Live Small Business Environment: What Actually Gets You to Day One Faster
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
