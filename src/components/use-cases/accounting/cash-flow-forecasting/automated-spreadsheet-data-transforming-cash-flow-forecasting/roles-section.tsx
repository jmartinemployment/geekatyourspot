export default function RolesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The shift to automated spreadsheet data systems significantly transforms the roles and responsibilities of
        team members involved in financial management. As businesses in Miami-Dade, Broward, and West Palm Beach
        counties adopt these systems, employees find their daily tasks evolving from manual data entry to more
        strategic roles.</p>
      <p className="text-base text-white shadow-text pt-3">
        For finance teams, automation reduces the time spent on repetitive tasks, such as reconciling spreadsheets
        and manually entering data. With tools like Cashflowfrog, employees can instead focus on analyzing data and
        providing strategic insights. This shift not only enhances job satisfaction by reducing monotonous tasks but
        also increases the value employees bring to the organization through more impactful contributions.</p>
      <p className="text-base text-white shadow-text pt-3">
        Accountants and bookkeepers, who traditionally spent a significant portion of their time on data
        verification and correction, now leverage automated tools to ensure accuracy and consistency in financial
        reports. By using automated systems that integrate with platforms like QuickBooks, these professionals can
        focus on interpreting financial data and advising management on financial strategies, rather than getting
        bogged down in data entry.</p>
      <p className="text-base text-white shadow-text pt-3">
        Moreover, the role of IT professionals in the organization shifts from troubleshooting data entry errors to
        maintaining and optimizing the automated systems. With platforms like Take the Helm, IT teams can focus on ensuring
        that integrations are running smoothly and that data flows are uninterrupted, allowing the business to
        operate seamlessly.</p>
      <p className="text-base text-white shadow-text pt-3">
        In addition, business leaders benefit from more timely and accurate financial insights, enabling them to
        make informed decisions quickly. With automated systems providing real-time data, leaders can assess the
        financial health of their business without waiting for end-of-month reports, positioning them to act swiftly
        in response to market changes.</p>
      <p className="text-base text-white shadow-text pt-3">
        Overall, the transition to automated spreadsheet data systems empowers employees to take on more strategic
        roles within the organization, enhancing productivity and driving business growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="transforming-roles-and-responsibilities-with-automation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Transforming Roles and Responsibilities with Automation
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
              <h2 id="transforming-roles-and-responsibilities-with-automation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Transforming Roles and Responsibilities with Automation
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
