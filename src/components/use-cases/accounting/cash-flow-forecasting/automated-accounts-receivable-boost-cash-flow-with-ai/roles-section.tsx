export default function RolesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The implementation of automated accounts receivable systems significantly alters the roles and
        responsibilities of employees within an organization. This change is not merely about reducing manual tasks;
        it transforms how teams approach their work, prioritizing strategic thinking over routine processing.</p>
      <p className="text-md text-white shadow-text pt-3">
        For finance teams, automation shifts the focus from data entry and chasing payments to analysis and
        decision-making. Employees who previously spent hours each week on manual invoice processing can now
        dedicate their time to interpreting data and developing strategies to optimize cash flow. This transition
        empowers finance professionals to contribute more directly to business growth and financial stability.</p>
      <p className="text-md text-white shadow-text pt-3">
        For instance, Chaserhq&#39;s automated reminders and payment tracking reduce the need for manual follow-ups,
        allowing team members to focus on resolving disputes and managing high-risk accounts. This shift enhances
        their role from mere transaction processors to strategic partners in financial management.</p>
      <p className="text-md text-white shadow-text pt-3">
        Customer service teams also experience changes. Automation tools like Versapay enable seamless communication
        with clients through integrated payment portals. This allows customer service representatives to spend less
        time fielding payment inquiries and more time enhancing customer relationships. The ability to offer
        multiple payment options and self-service portals improves the customer experience and reduces friction in
        the payment process.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, the role of IT professionals becomes more strategic. While initially involved in setting up and
        maintaining the integration of the AR system, their ongoing role focuses on optimizing system performance
        and exploring new technologies to further streamline operations. This evolution allows IT teams to support
        business agility and innovation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Overall, the adoption of automated accounts receivable solutions redefines job roles by freeing employees
        from repetitive tasks and enabling them to focus on strategic initiatives. This shift not only improves
        operational efficiency but also enhances job satisfaction by allowing employees to engage in more meaningful
        work.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-automated-accounts-receivable-changes-employee-roles" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Automated Accounts Receivable Changes Employee Roles
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
              <h2 id="how-automated-accounts-receivable-changes-employee-roles" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Automated Accounts Receivable Changes Employee Roles
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
