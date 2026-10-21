export default function TransformsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        ADP is built to take the weight of payroll tax and worker classification off small business owners’
        shoulders. Instead of leaving you to track shifting regulations and handle every detail by hand, ADP
        automates the heavy lifting and brings in expert support where it matters most. The result is more time
        for your business, fewer errors, and peace of mind that compliance is not left to chance.</p>
      <p className="text-base text-white shadow-text pt-3">
        Start with the basics: ADP automates payroll calculations, tax withholdings, and filings for both
        employees and contractors. That means the system handles the routine math, hours, overtime, deductions,
        without you needing to check every line. When your team logs overtime, ADP applies the correct rates and
        flags any anomalies before payments go out. This prevents compounding mistakes and ensures every worker
        is paid correctly, every time. For businesses that run across multiple states or hire remote staff, ADP
        keeps up with the latest tax laws and HR regulations in all 50 states. You do not need to scan state
        websites or chase down updates, the system applies changes automatically, reducing the risk of missed
        filings or late payments.</p>
      <p className="text-base text-white shadow-text pt-3">
        Worker classification is where many small businesses stumble. ADP brings structure to this chaos. It
        tracks and maintains worker status, W-2 or 1099, throughout the employment lifecycle, and it creates and
        delivers W-2 and 1099 forms for you, even e-filing them with the IRS. The platform verifies US worker
        tax IDs, captures W-9s, and produces an audit trail for every transaction. This means you can show
        exactly how each worker was classified, when, and why, critical evidence if an audit ever comes. ADP
        also withholds non-statutory deductions, like rent or insurance, and manages wage garnishments for
        contractors, so deductions are handled correctly without manual intervention.</p>
      <p className="text-base text-white shadow-text pt-3">
        ADP’s compliance engine goes beyond basic automation. The platform is backed by institutional tracking
        systems that monitor tax adjustments across all 50 states and thousands of local municipalities. This is
        not just a database, it is a live system that applies updates as laws change, so your business stays
        compliant without constant manual oversight. When regulations shift, ADP adapts. For example, if a city
        updates its overtime rules or a state changes its contractor requirements, ADP’s rules engine updates
        your payroll process automatically. You do not have to interpret new guidance or rewrite internal
        policies. The system does it for you, in real time.</p>
      <p className="text-base text-white shadow-text pt-3">
        For owners used to entry-level accounting tools, the difference is immediate. ADP connects payroll, HR,
        and time tracking in one place. This unified view eliminates duplicate work and gives you real-time
        visibility into where your payroll stands. Data syncs across the platform, so changes in one area, like
        a new worker or a schedule update, flow through to payroll and compliance automatically. Integrations
        with accounting, point of sale, HR, and business tools mean you do not have to juggle multiple systems
        or re-enter data by hand. Every hour saved on manual entry is an hour returned to your business.</p>
      <p className="text-base text-white shadow-text pt-3">
        Support is not an afterthought. ADP delivers 24/7 access to certified payroll and compliance experts.
        When a crisis hits, a rejected tax filing, a flagged misclassification, or a sudden regulatory change,
        you get live help, not a chatbot or a ticket in a queue. This is especially critical for small
        businesses facing fast-moving audits or urgent payroll deadlines. The support model is dedicated, not
        pooled, which means you get consistent answers from professionals who know your business. This reduces
        the time spent chasing down guidance and gives you confidence that your compliance questions will be
        resolved quickly.</p>
      <p className="text-base text-white shadow-text pt-3">
        ADP’s scale and track record matter. The platform is designed to scale with you, from a single-employee
        startup to a multi-location operation. Whether you are adding new states, growing your contractor pool,
        or expanding into new markets, ADP adapts without adding manual work or new risk. Its compliance
        expertise is built on decades of experience and a network that processes over 78 million US tax
        statements each year. This depth means the system can benchmark your compliance against organizations of
        similar size and industry, giving you insight into where you stand and what needs attention.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams who have lived through the pain of manual recordkeeping and late-night spreadsheet checks, the
        shift to ADP is not just about automation. It is about returning control and confidence to your
        business. The owner who once spent Fridays chasing down overtime logs or scrambling to meet a tax
        deadline can now see every classification, filing, and deduction in one place. When an auditor calls,
        the records are ready. When a rule changes, the system updates. The cycle of anxiety and rework is
        broken, in its place is a process that runs, checks, and reports on its own.</p>
      <blockquote cite="https://www.adp.com/what-we-offer/payroll/payroll-for-1-49-employees.aspx" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Pay employees and contractors, have payroll taxes calculated, filed and paid for you and get direct
        access to payroll experts from a platform designed to make small-business payroll easier to manage.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        For the Miami HVAC company in the opening, this means the next busy season does not bring a wave of
        compliance panic. New technicians are classified correctly from day one, overtime is tracked and applied
        by the book, and every tax form is filed on time. The owner gets hours back every week and can focus on
        running the business, not running from the next audit. ADP does not just automate tasks, it removes the
        constant risk and distraction of payroll tax and worker misclassification, so small businesses in South
        Florida can grow with confidence.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-adp-removes-the-burden-of-payroll-tax-worker-misclassification" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How ADP Removes the Burden of Payroll Tax &amp; Worker Misclassification
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-adp-removes-the-burden-of-payroll-tax-worker-misclassification-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How ADP Removes the Burden of Payroll Tax &amp; Worker Misclassification
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
