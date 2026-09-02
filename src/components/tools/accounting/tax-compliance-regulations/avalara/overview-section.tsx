import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function OverviewToolSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">Avalara is a comprehensive <GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink> software designed to streamline tax processes for businesses of all sizes. This tool is particularly valuable for organizations managing complex tax requirements across multiple jurisdictions. By automating tax calculations, compliance tracking, and reporting, Avalara significantly reduces the time and resources required for tax management.</p>
      <p className="text-md text-white shadow-text pt-3">The platform provides real-time tax rate calculations and ensures accurate tax compliance across all sales channels. Whether you're managing sales tax, VAT, GST, or other transaction taxes, Avalara offers solutions that integrate seamlessly with your existing systems and workflows.</p>
      <p className="text-md text-white shadow-text pt-3">With Avalara, businesses can minimize the risk of tax errors and penalties while maintaining compliance with ever-changing tax regulations. The platform's <GlossaryLink slug="machine-learning">AI-driven</GlossaryLink> technology continuously monitors regulatory changes and updates tax rules automatically, ensuring your business stays compliant without manual intervention.</p>
      <p className="text-md text-white shadow-text pt-3">For enterprises dealing with multi-jurisdictional tax obligations, Avalara provides a centralized solution that reduces administrative burden and improves accuracy. This makes it an essential tool for scaling businesses that want to expand into new markets without complex tax management overhead.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">
                Overview
              </h2>
            </div>
            <div className="col-span-12">
              {body}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">
                Overview
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
