import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        TaxValet is designed to remove the burden of manually managing
        sales&nbsp;tax compliance&nbsp;by automating complex
        processes. At its core, TaxValet configures rules and automation logic to streamline tax compliance
        across multiple states. This configuration includes detailed nexus analysis, permit registrations, and
        ongoing monitoring of changing regulations. By setting up these elements, TaxValet ensures that
        businesses remain compliant with the latest tax laws without the need for constant manual intervention.</p>
      <p className="text-base text-white shadow-text pt-3">
        One of the key components of TaxValet&#39;s configuration is its thorough nexus analysis. This process
        identifies where your business has tax obligations, taking into account economic and physical presence
        across different states. This analysis is crucial because it determines where you need to register for
        sales tax and ensures that you are collecting the correct amount of tax. Without this step, businesses
        risk non-compliance and potential penalties.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once nexus obligations are determined, TaxValet handles permit registrations and filings. This includes
        obtaining the necessary permits to operate in various jurisdictions and ensuring that all filings are
        submitted accurately and on time. This process is automated within TaxValet, reducing the administrative
        workload on your team. The automation logic built into TaxValet takes care of these routine tasks,
        allowing your staff to focus on more strategic initiatives.</p>
      <p className="text-base text-white shadow-text pt-3">
        TaxValet also incorporates ongoing monitoring of tax regulations, which is vital in an environment where
        laws frequently change. The platform automatically updates its rules and logic to reflect new laws,
        ensuring continuous compliance. This feature is particularly beneficial for small businesses that may
        not have the resources to track these changes independently. With TaxValet, you can be confident that
        your compliance strategy is always up-to-date.</p>
      <p className="text-base text-white shadow-text pt-3">
        While TaxValet does not offer an extension mechanism like
        an&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;or SDK, its robust configuration capabilities
        are sufficient for most small businesses. Geek @ Your Spot LLC, as a local implementation partner, ensures
        that TaxValet is tailored to your specific business environment. They handle the initial setup,
        including data mapping and integration with your existing systems, to ensure a seamless transition. This
        hands-on approach guarantees that TaxValet works effectively within your operational framework.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="configuring-taxvalet-rules-and-automation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring TaxValet: Rules and Automation
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="configuring-taxvalet-rules-and-automation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring TaxValet: Rules and Automation
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
