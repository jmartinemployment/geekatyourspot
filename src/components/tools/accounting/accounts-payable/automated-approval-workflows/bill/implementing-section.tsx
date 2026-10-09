import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying Bill in a business environment involves several key steps that Geek @ Your Spot expertly
        manages to ensure a smooth transition. One of the first steps is mapping out the existing&nbsp;
        <GlossaryLink slug="accounts-payable" className="text-[#0B162A] hover:underline">accounts payable</GlossaryLink>&nbsp;processes
        to identify areas where Bill can add the most value. This includes analyzing current workflows,
        identifying bottlenecks, and understanding the specific needs of the business. By doing so, Geek @
        Your Spot can configure Bill to align with the organization&#39;s unique requirements.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration is a critical part of implementing Bill, and Geek @ Your Spot leverages Bill&#39;s
        robust&nbsp;
        <GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;to
        connect it with existing financial systems like QuickBooks Online and Xero. This integration ensures
        that all financial data is synchronized, reducing the need for manual data entry and minimizing
        errors. The seamless data flow between systems means that businesses can maintain accurate financial
        records without the hassle of manual updates.</p>
      <p className="text-md text-white shadow-text pt-3">
        Configuring approval workflows is another essential aspect of deploying Bill. Geek @ Your Spot
        assists in setting up custom workflows that match the business&#39;s approval hierarchy. This
        involves defining rules based on criteria such as invoice amount, vendor, or department, ensuring
        that invoices are routed to the appropriate approvers automatically. By doing so, the approval
        process becomes more efficient, reducing delays and enhancing compliance.</p>
      <p className="text-md text-white shadow-text pt-3">
        Training is a vital component of the deployment process. Geek @ Your Spot provides comprehensive
        training sessions to ensure that all users are comfortable with the new system. This includes
        training on how to use Bill&#39;s mobile app for on-the-go approvals, which is particularly
        beneficial for businesses with remote teams. By offering ongoing support, Geek @ Your Spot ensures
        that businesses can fully leverage Bill&#39;s capabilities to improve their accounts payable
        processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses looking to customize Bill further, Geek @ Your Spot can assist with advanced
        configurations using Bill&#39;s API. This allows for tailored solutions that meet specific business
        needs, whether it&#39;s integrating with additional platforms or developing custom reporting
        capabilities. By utilizing Bill&#39;s extensible architecture, Geek @ Your Spot can help businesses
        achieve a high level of customization and efficiency in their accounts payable operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Overall, implementing Bill with Geek @ Your Spot&#39;s guidance ensures that businesses can quickly
        and effectively transition to automated approval workflows. By focusing on integration, workflow
        configuration, and user training, Geek @ Your Spot helps businesses realize the full potential of
        Bill, leading to improved efficiency, reduced errors, and enhanced financial management.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-bill-in-your-business-environment">
                Implementing Bill in Your Business Environment
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-bill-in-your-business-environment">
                Implementing Bill in Your Business Environment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
