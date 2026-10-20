import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Cashflowfrog is designed to integrate smoothly with your existing accounting systems, offering a range of
        configuration options that streamline financial operations. The platform allows for the setup of approval
        chains, routing, and automation logic, all essential for efficient cash flow management. Geek @ Your Spot LLC,
        as an implementation partner, ensures that Cashflowfrog is tailored to fit the unique needs of your
        business. This involves configuring the software to align with your specific financial processes and
        objectives.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval chains within Cashflowfrog can be customized to match your organizational hierarchy, ensuring that
        every financial decision passes through the necessary checkpoints. This setup minimizes the risk of
        unauthorized transactions and enhances accountability across your team. Routing features allow for the
        automatic direction of cash flow tasks to the appropriate personnel, based on predefined rules such as
        department, transaction size, or vendor.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation logic in Cashflowfrog is a key feature that reduces manual intervention
        in&nbsp;<GlossaryLink slug="cash-flow-forecasting">cash flow forecasting</GlossaryLink>. By setting up
        automated workflows, businesses can ensure that data is consistently updated and that forecasts are adjusted
        in real-time as new information becomes available. This reduces the burden on financial staff and increases
        the accuracy of forecasts.</p>
      <p className="text-md text-white shadow-text pt-3">
        Cashflowfrog does not currently offer an extension mechanism like
        an&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;or SDK for custom development. However, its robust
        configuration options provide significant flexibility. Geek @ Your Spot LLC leverages these features to ensure
        that Cashflowfrog integrates seamlessly with other tools your business may use, such as QuickBooks or Zoho
        Books, via existing integrations.</p>
      <p className="text-md text-white shadow-text pt-3">
        The role of Geek @ Your Spot LLC is crucial in the implementation process. They assess your current financial
        systems and workflows, identify gaps, and configure Cashflowfrog to bridge these gaps effectively. This
        includes mapping data from your existing systems to Cashflowfrog, ensuring that all financial data is
        accurately reflected in the forecasts. The consultancy provides training to your team, helping them
        understand how to use Cashflowfrog to its fullest potential. This hands-on approach ensures that the
        transition to automated cash flow forecasting is smooth and that your team can quickly adapt to the new
        system.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="setting-up-cashflowfrog-configuration-and-customization">
                Setting Up Cashflowfrog: Configuration and Customization
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="setting-up-cashflowfrog-configuration-and-customization">
                Setting Up Cashflowfrog: Configuration and Customization
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
