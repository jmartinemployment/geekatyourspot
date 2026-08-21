export default function ImplementationSection() {

  return (
    <section className="min-h-screen bg-[#025E73] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5 place-items-center">
          <div className="col-span-5"></div>
          <div className="col-span-7">
            <h2 className="text-white pt-3 lg:text-4xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Implementation Considerations</h2>
            <p className="text-md text-white shadow-text pt-3">Implementing HubSpot requires careful planning to ensure a smooth transition and maximum benefit. Here are some key
              considerations for businesses looking to adopt HubSpot:</p>
            <p className="text-md text-white shadow-text pt-3">
              HubSpot is an ideal solution for businesses that want to integrate their marketing,
            </p>
            <ol className="text-md text-white shadow-text list-decimal list-outside pl-4 space-y-2 pt-3">
              <li>Accelerated Deployment: HubSpot offers pre-built connectors and templated setups that simplify the deployment
                process. These features allow businesses to quickly integrate HubSpot with their existing systems, reducing the time
                to go-live and minimizing disruption to ongoing operations.</li>
              <li>Data Model Design: Designing an effective data model is crucial for leveraging HubSpot&#39;s CRM capabilities.
                Businesses need to map their customer data accurately to ensure that all interactions are captured and can be
                analyzed effectively. This involves setting up fields, properties, and custom objects that reflect the
                business&#39;s specific needs.</li>
              <li>Workflow and Process Configuration: HubSpot allows for the customization of workflows and processes to align
                with business objectives. This includes setting up approval chains, routing rules, and automation logic that
                streamline operations and ensure consistency across teams.</li>
              <li>Custom Code and Development: While HubSpot is largely a configuration-based platform, it does offer APIs and
                scripting capabilities for businesses that need additional customization. This allows for the development of bespoke
                solutions that integrate seamlessly with HubSpot&#39;s core functionalities.</li>
            </ol>
            <p className="text-md text-white shadow-text pt-3">Geek At Your Spot can help businesses navigate these implementation considerations by providing expert guidance and
              support. Our consultancy services ensure that businesses can leverage HubSpot&#39;s full potential, from accelerated
              deployment to advanced workflow configuration. We work closely with clients to design data models, set up processes,
              and develop custom solutions where necessary, closing the gap between existing systems and new capabilities.</p>
            <h2 className="text-white pt-3 lg:text-4xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              When to Use</h2>
            <p className="text-md text-white shadow-text pt-3">HubSpot is an ideal solution for businesses that want to integrate their marketing, sales, and customer service
              efforts into a single platform. Here are some scenarios where using HubSpot can be particularly beneficial:</p>
            <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
              <li>Small to Medium-Sized Businesses: HubSpot&#39;s scalable pricing and comprehensive features make it a great fit
                for small to medium-sized businesses that need a robust marketing and CRM solution without a hefty price tag.</li>
              <li>Growing Businesses: Companies experiencing growth can benefit from HubSpot&#39;s ability to automate and
                streamline processes, allowing them to handle increased customer interactions without additional strain on
                resources.</li>
              <li>Businesses Seeking Integration: For organizations looking to unify their marketing, sales, and service tools,
                HubSpot offers a seamless integration that ensures all teams have access to the same data and insights.</li>
              <li>Data-Driven Decision Makers: Businesses that rely on data to drive their strategies will find HubSpot&#39;s
                analytics and reporting tools invaluable for gaining insights and making informed decisions.</li>
            </ul>
            <p className="text-md text-white shadow-text pt-3">By choosing HubSpot, businesses can enhance their marketing efficiency, improve customer engagement, and drive
              sales growth. Its comprehensive suite of tools and user-friendly interface make it an excellent choice for companies
              looking to optimize their operations and achieve better results.</p>
          </div>
        </div>
      </div >
    </section >
  );
}
