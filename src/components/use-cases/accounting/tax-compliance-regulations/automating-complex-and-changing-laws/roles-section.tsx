
export default function RolesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Implementing a
        sophisticated&nbsp;tax
        compliance&nbsp;system inevitably transforms the roles of the people involved. As
        technology takes over repetitive and error-prone tasks, employees can shift their focus from manual data
        entry and compliance checks to more strategic activities that add value to the business.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the primary changes occurs within finance and accounting teams. Traditionally, these teams spent
        considerable time managing day-to-day compliance tasks, such as calculating tax liabilities and
        preparing filings. With automated systems like TaxJar, which offers precise sales tax calculations and
        automated filing, their role transitions to overseeing the process and ensuring strategic alignment.
        This shift allows finance professionals to focus on analysis and advising on tax strategies that could
        benefit the company.</p>
      <p className="text-md text-white shadow-text pt-3">
        Additionally, the integration of tax compliance tools impacts IT departments. Their role evolves from
        maintaining disparate systems to ensuring the smooth operation of integrated platforms. With solutions
        like Quaderno providing seamless syncing with payment processors, IT teams can focus on optimizing
        system performance and security, rather than troubleshooting data inconsistencies.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small business owners and managers, the shift means less time spent on compliance and more on
        business development. Tools like TaxValet offer complete audit protection and manage tax notices,
        reducing the fear of compliance errors and freeing managers to pursue growth opportunities with
        confidence.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, the human resources within a business benefit from reduced stress and increased job
        satisfaction. By eliminating the mundane aspects of tax compliance, employees can engage in more
        meaningful work, leading to higher morale and productivity. The realignment of roles to focus on
        strategic initiatives rather than administrative tasks can also foster a culture of continuous
        improvement and innovation.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, while technology takes center stage in tax compliance, the human element remains crucial. By
        redefining roles and responsibilities, businesses can not only enhance compliance efficiency but also
        unlock the potential of their workforce to drive innovation and growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-human-element-adapting-roles-in-tax-compliance" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Human Element: Adapting Roles in Tax Compliance
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
              <h2 id="the-human-element-adapting-roles-in-tax-compliance-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Human Element: Adapting Roles in Tax Compliance
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
