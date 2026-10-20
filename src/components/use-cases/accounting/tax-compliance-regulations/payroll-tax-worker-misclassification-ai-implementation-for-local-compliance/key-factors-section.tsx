export default function KeyFactorsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A payroll tax and worker misclassification system either becomes invisible (a safety net that runs in the
        background) or it stalls out, causing more headaches than it solves. The difference comes down to a
        handful of practical factors that are easy to overlook when you’re focused on features or price. Here is
        what separates a rollout that actually protects your business from the ones that break down halfway,
        forcing you back to manual fixes and compliance fire drills.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Data integrity is non-negotiable. The most common reason implementations fail is not a bug in the software; it’s bad or missing data going in. If your worker records are out of date, if Social Security numbers or addresses are missing, or if last year’s contractors are still coded as active, no automation can paper over those gaps. When Gusto flags a missing identification number before a pay run, that’s a chance to fix a problem before it becomes a penalty. If your system can’t spot these errors or you ignore the warnings, you’re back to square one with manual audits and IRS notices.</li>
        <li>Local rule complexity is underestimated. South Florida businesses hire remote workers, some of them in other states, and deal with seasonal hiring. The rules are not just federal. They vary by state, by worker type, and sometimes by job site. Many tools promise “all-in-one” automation, but only platforms like ADP, Gusto, and Justworks that are built for multi-jurisdiction reporting can keep up with these changes without manual intervention. Rolling out a solution that doesn’t handle local nuances means you’re constantly patching the process with spreadsheets and calls to your accountant.</li>
        <li>Continuous monitoring and real-time alerts. A one-time compliance sweep is not enough. The businesses that avoid fines and audits are the ones whose systems monitor for compliance risks every pay cycle, not just at year-end. Rippling’s Compliance 360 and Deel’s Compliance Hub are built for this, sending alerts as soon as a worker’s classification is at risk or a new tax table is released. If your system only catches errors after payroll is processed, you’re left cleaning up after the fact, often too late to avoid penalties.</li>
        <li>Human support when rules change or things go wrong. No automation covers every scenario. The difference between a safe rollout and a failed one is access to real, qualified support when it matters. Justworks and ADP both provide live HR and compliance support, not just chatbot queues. When a state auditor sends a notice or a worker files a misclassification claim, having a person who can walk you through the fix, backed by your system’s audit trail, is what keeps a small business safe. If your chosen platform leaves you on your own for exceptions, you’re exposed.</li>
        <li>Built-in flexibility for workforce changes. Small businesses are rarely static. If you can’t add a new contractor, reclassify a worker, or update a pay schedule in minutes, the system will be bypassed within weeks. Deel’s one-click batch contractor payments and automated document collection, Rippling’s real-time policy enforcement, and Gusto’s simple worker classification workflows all keep the process fluid as your business grows or shifts. Rigid systems break under the pace of real South Florida operations.</li>
        <li>Stakeholder buy-in and training. Even the best system fails if your team does not trust it or know how to use it. We see successful rollouts when owners, bookkeepers, and managers all understand the “why” behind each step and get hands-on training before go-live. If the process is handed off with no explanation, the old habits creep back fast.</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        Picture the Miami landscaping owner again: the Friday afternoon payroll is now run in eight minutes,
        with every worker’s status and pay right the first time. The dashboard flags a contractor whose hours
        have crept into employee territory, the system blocks a pay run missing a W-9, and a Justworks HR
        specialist is on call when a new reemployment tax question pops up. That’s an implementation that holds
        up in the real world. The failed alternative is a shop that installs a tool, ignores data cleanup, skips
        training, and winds up back at manual payroll, just with a bigger software bill and a higher risk
        profile. The tools are not magic. The difference is in the groundwork and the follow-through.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-payroll-tax-worker-misclassification-automation-holds-up-or-fails-in-the-real-world" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Payroll Tax &amp; Worker Misclassification Automation Holds Up or Fails in the Real World
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-payroll-tax-worker-misclassification-automation-holds-up-or-fails-in-the-real-world-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Payroll Tax &amp; Worker Misclassification Automation Holds Up or Fails in the Real World
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
