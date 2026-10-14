export default function PAASection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="people-also-ask" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              People Also Ask
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              If I have a signed contract stating a worker is an independent contractor, am I safe from a misclassification audit?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              No, a signed contract alone does not protect you from a misclassification audit. Agencies like the
              IRS look at the actual work relationship, not just the paperwork. If a worker should be classified
              as an employee, you could owe back wages, taxes, and face penalties even if you have a contract
              saying they are a contractor. It’s important to use a clear, defensible process for classification
              and review your practices regularly to avoid costly mistakes.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How do the 2026 tax reporting changes affect my 1099-NEC obligations?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Starting in 2026, the federal filing threshold for Form 1099-NEC will rise from $600 to $2,000.
              This means you only need to send a 1099-NEC to contractors you’ve paid $2,000 or more in a
              calendar year. For those paid between $600 and $1,999, you will not issue a 1099-NEC, but you
              should communicate this change clearly to avoid confusion. Also, some states may still require
              reporting at lower thresholds, so check local rules to stay fully compliant.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can an automated tool handle the localized Miami-Dade discretionary surtaxes for my remote or traveling employees?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Automated payroll and compliance solutions can help manage local tax rules, including county-level
              requirements like those in Miami-Dade. These systems are designed to flag compliance issues and
              recommend actions, making it easier to keep up with federal, state, and local payroll tax
              obligations—even when your team is remote or on the move. For highly localized surtaxes, it’s
              important to choose a tool that tracks and updates local requirements as your business grows.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Will implementing an affiliate and partner compliance tool slow down our ability to pay out local contractors?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Modern affiliate and partner compliance tools are built to speed up, not slow down, contractor
              payments. These platforms automate onboarding, document collection, and payment workflows, so you
              can pay contractors quickly and accurately—often in just a few minutes. By reducing manual work
              and keeping compliance in check, these tools help you avoid payment delays and keep your local
              contractors happy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
