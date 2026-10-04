export default function DeployingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Implementing AvidXchange in an existing business environment involves a series of strategic steps to
        ensure a smooth transition and effective utilization. The platform is designed to integrate with
        hundreds of widely used accounting systems, allowing businesses to retain their current systems while
        enhancing their AP processes. This integration capability is a key factor in reducing the time to
        go-live, as it minimizes the need for extensive system overhauls.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the critical aspects of deploying AvidXchange is configuring the data structure and mapping
        decisions upfront. This includes setting up data capture processes that leverage AI and machine learning
        to ensure high accuracy in data entry. With an impressive 99.2% invoice data accuracy rate, businesses
        can trust that their financial data is handled with precision, reducing the risk of errors and the need
        for manual corrections.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another crucial element is the customization of approval chains and routing logic. AvidXchange provides
        tools to create custom workflows that align with a business&#39;s unique needs, ensuring that invoices
        are processed efficiently and according to established protocols. This customization not only improves
        operational efficiency but also maintains compliance with internal policies.</p>
      <p className="text-md text-white shadow-text pt-3">
        <strong>Geek At Your Spot</strong> plays a pivotal role in this deployment process, offering expertise
        in accelerated deployment and workflow configuration. By working closely with businesses, Geek At Your
        Spot ensures that AvidXchange is tailored to fit seamlessly into existing processes, maximizing the
        benefits of automation. Their consultative approach addresses potential challenges upfront, providing
        solutions that are both practical and effective.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses considering a DIY approach, it&#39;s important to recognize the value of professional
        implementation. Geek At Your Spot not only accelerates the deployment timeline but also enhances the
        overall effectiveness of the solution. By leveraging their experience, businesses can avoid common
        pitfalls and ensure that the transition to an automated AP process is as smooth as possible.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="deploying-avidxchange-in-your-business-environment">
                Deploying AvidXchange in Your Business Environment
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="deploying-avidxchange-in-your-business-environment">
                Deploying AvidXchange in Your Business Environment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
