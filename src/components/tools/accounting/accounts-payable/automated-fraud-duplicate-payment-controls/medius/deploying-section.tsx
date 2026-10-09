import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DeployingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying Medius within an existing business environment involves several key steps to ensure a
        smooth transition and effective operation. Geek @ Your Spot, as an&nbsp;
        <GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>&nbsp;implementation
        consultancy, plays a crucial role in this process, particularly for small businesses in Miami-Dade,
        Broward, and West Palm Beach counties. The deployment process begins with a thorough assessment of the
        client&#39;s current systems and workflows to identify areas where Medius can add the most value.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the primary tasks is integrating Medius with the client&#39;s existing&nbsp;
        <GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;systems.
        This integration is vital for real-time data exchange and seamless operation. Geek @ Your Spot handles
        the technical aspects of this integration, ensuring that Medius is configured to capture and process
        invoices from various sources, whether they are submitted via paper, PDF, or supplier portals. This
        setup is crucial for enabling the platform&#39;s AI-driven features, such as automated statement
        reconciliation and fraud detection.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data mapping and structure are also critical components of the deployment process. Geek @ Your Spot
        works closely with clients to map out their data structures, ensuring that all relevant information
        is accurately captured and processed by Medius. This includes setting up the necessary approval chains
        and routing rules to automate workflows and streamline the&nbsp;
        <GlossaryLink slug="accounts-payable" className="text-[#0B162A] hover:underline">accounts payable</GlossaryLink>
        &nbsp;process. By configuring these elements correctly, Medius can automate tedious tasks, reduce
        manual errors, and enhance overall efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        Medius&#39;s deployment also involves setting up its robust fraud detection capabilities. This
        includes configuring real-time alerts and risk scoring systems that help identify potential fraud
        before it impacts the business. Geek @ Your Spot provides training to ensure that the client&#39;s
        team understands how to interpret and respond to these alerts effectively. This training is essential
        for maximizing the benefits of Medius&#39;s fraud detection features and ensuring that the team is
        prepared to handle any issues that arise.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, Geek @ Your Spot supports businesses through the entire deployment process, offering ongoing
        assistance and adjustments as needed. This support ensures that Medius continues to operate
        effectively and adapts to any changes in the business environment. By providing comprehensive
        deployment and support services, Geek @ Your Spot enables small businesses to leverage Medius&#39;s
        full potential, enhancing their financial operations and protecting against fraud and duplicate
        payments.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="deploying-medius-in-your-existing-environment">
                Deploying Medius in Your Existing Environment
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="deploying-medius-in-your-existing-environment">
                Deploying Medius in Your Existing Environment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
