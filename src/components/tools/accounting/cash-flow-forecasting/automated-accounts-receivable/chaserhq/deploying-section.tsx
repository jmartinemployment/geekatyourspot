import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DeployingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying Chaserhq for Automated Accounts Receivable involves several key steps that optimize its
        integration into a business&#39;s existing environment. The process begins with a thorough assessment of
        current systems and data structures to ensure compatibility and seamless integration. This initial phase
        is crucial for identifying any potential obstacles and tailoring Chaserhq&#39;s setup to meet specific
        business needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot, a consultancy specializing in&nbsp;
        <GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>&nbsp;implementation,
        plays a pivotal role in this deployment process. Their expertise ensures that Chaserhq is configured to
        align with the unique workflows and data mapping requirements of each client. This includes setting up
        pre-built connectors and templates that shorten the go-live timeline, allowing businesses to start
        benefiting from the system&#39;s capabilities sooner.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the critical aspects of deploying Chaserhq is configuring its automation logic and approval
        chains. This involves defining the rules and triggers for automated reminders, payment collections, and
        follow-ups. By customizing these workflows, businesses can ensure that their accounts receivable
        processes are efficient and tailored to their operational needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Chaserhq&#39;s integration capabilities extend to various accounting and payment platforms, such as Xero
        and Stripe. This integration not only simplifies payment collection but also enhances the visibility of
        cash flow. Geek @ Your Spot ensures that these integrations are set up correctly, providing training and
        support to ensure that staff are comfortable using the new system.</p>
      <p className="text-md text-white shadow-text pt-3">
        The deployment process also involves setting up Chaserhq&#39;s dashboard and reporting features, which
        provide real-time insights into receivables and cash flow. These tools enable businesses to monitor
        performance, identify trends, and make informed decisions. Geek @ Your Spot&#39;s support includes
        configuring these dashboards to align with the client&#39;s reporting needs, ensuring that they have
        access to the most relevant data.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, deploying Chaserhq in a business environment is a comprehensive process that involves careful
        planning and configuration. Geek @ Your Spot&#39;s expertise ensures that the system is tailored to each
        client&#39;s specific needs, facilitating a smooth transition and maximizing the benefits of Automated
        Accounts Receivable.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="deploying-chaserhq-in-your-business-environment">
                Deploying Chaserhq in Your Business Environment
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="deploying-chaserhq-in-your-business-environment">
                Deploying Chaserhq in Your Business Environment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
