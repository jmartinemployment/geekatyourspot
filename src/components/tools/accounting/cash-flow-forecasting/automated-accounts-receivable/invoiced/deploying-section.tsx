import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DeployingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying Invoiced within a business environment involves several key steps to ensure a smooth
        transition and effective implementation. Geek @ Your Spot, an&nbsp;
        <GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>&nbsp;implementation
        consultancy, specializes in configuring Invoiced to fit seamlessly into your existing systems, enabling
        you to maximize the benefits of automated accounts receivable.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the first steps in deployment is data mapping and integration. Invoiced offers pre-built
        connectors that facilitate integration with existing&nbsp;
        <GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;and&nbsp;
        <GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;systems, such
        as NetSuite. This integration is crucial for maintaining real-time data synchronization and ensuring
        that all financial information is accurate and up-to-date. By automating these processes, businesses
        can reduce manual data entry and focus on strategic decision-making.</p>
      <p className="text-md text-white shadow-text pt-3">
        Configuring automation logic and workflows is another critical aspect of deployment. Invoiced allows
        for the customization of workflows to suit the specific needs of your business. This includes setting
        up approval chains, routing rules, and automation sequences that align with your operational processes.
        Geek @ Your Spot assists in configuring these elements to ensure that Invoiced operates efficiently
        within your environment.</p>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced also provides tools for managing collections and payment processes. Features like Smart
        Chasing and CashMatch AI are configured to optimize collections efforts and payment matching. These
        tools are tailored to the payment behaviors of your customers, ensuring that collections are managed
        effectively and that payments are matched accurately and quickly.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses looking to extend Invoiced&#39;s capabilities, the platform supports customization
        through its&nbsp;
        <GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>. While Invoiced
        is largely a configuration-based platform, the API allows for further customization and integration
        with other business applications. This flexibility ensures that Invoiced can be tailored to meet the
        unique needs of your business.</p>
      <p className="text-md text-white shadow-text pt-3">
        Overall, deploying Invoiced with the help of Geek @ Your Spot ensures that the platform is fully
        integrated and configured to support your business&#39;s accounts receivable processes. By leveraging
        Invoiced&#39;s automation capabilities, businesses can streamline operations, reduce errors, and improve
        cash flow management.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="deploying-invoiced-in-your-business-environment">
                Deploying Invoiced in Your Business Environment
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="deploying-invoiced-in-your-business-environment">
                Deploying Invoiced in Your Business Environment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
