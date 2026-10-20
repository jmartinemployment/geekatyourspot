export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Implementing tax automation can be a transformative step for organizations aiming to streamline
        compliance processes and reduce manual errors. However, the journey is not without its challenges.
        Organizations must navigate a complex landscape of technical, regulatory, and operational hurdles that
        can impact the efficacy of automation solutions.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Technical Integration and Data Management
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        One of the primary challenges in implementing tax automation is the technical integration with existing
        systems. Many organizations operate on legacy systems that are not readily compatible with modern AI
        solutions. This can result in significant integration work, requiring custom development and data
        migration efforts.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC assists clients by conducting comprehensive system audits to identify integration
        points and potential bottlenecks. By leveraging expertise in data model design and workflow
        configuration, they ensure that the automated tax solutions seamlessly integrate into existing IT
        infrastructures.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Legacy system incompatibility</li>
        <li>Data silos and inconsistencies</li>
        <li>Complex data migration processes</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        In a representative scenario, a mid-sized retailer might face a 30% increase in integration costs due to
        unforeseen data compatibility issues. Geek @ Your Spot LLC mitigates such risks by employing robust data
        validation and transformation techniques.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Regulatory Compliance and Change Management
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        Navigating the regulatory landscape is another significant hurdle. Tax laws and regulations are subject
        to frequent changes, and automated systems must be agile enough to adapt without compromising
        compliance. This requires continuous monitoring and updates to the automation logic, which can be
        resource-intensive.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC provides governance frameworks that include regular audits and compliance checks.
        Their approach ensures that automated tax solutions remain aligned with the latest regulatory
        requirements, thus minimizing the risk of non-compliance.</p>
      <p className="text-md text-white shadow-text pt-3">
        Furthermore, implementing tax automation necessitates effective change management strategies to ensure
        smooth adoption within the organization. Resistance to change is common, especially when traditional
        processes are deeply entrenched. Geek @ Your Spot LLC employs structured change management practices,
        including stakeholder engagement and training programs, to facilitate a seamless transition.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Cost and Resource Allocation
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        The cost of implementing tax automation can be prohibitive, particularly for smaller organizations.
        Initial setup costs, ongoing maintenance, and training expenses must be carefully balanced against the
        anticipated benefits of automation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC offers strategic consulting to help organizations assess ROI and prioritize automation
        initiatives that deliver the highest value. By focusing on areas with the greatest potential for
        efficiency gains, they help clients allocate resources effectively.</p>
      <p className="text-md text-white shadow-text pt-3">
        In an illustrative example, a hypothetical manufacturing firm might see a 40% reduction in processing
        time for tax filings after implementing a well-targeted automation solution. This demonstrates the
        potential for significant efficiency improvements, justifying the initial investment.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="challenges-in-implementing-tax-automation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Challenges in Implementing Tax Automation
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="challenges-in-implementing-tax-automation" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Challenges in Implementing Tax Automation
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
