import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        In the realm of
        automated&nbsp;<GlossaryLink slug="tax-compliance" className="text-[#0B162A] hover:underline">tax
        compliance</GlossaryLink>, many small businesses are bombarded with choices. From managing economic
        nexus to handling multi-state filings, the landscape is filled with solutions that promise to ease the
        burden. TaxJar stands out by offering a comprehensive suite of features specifically designed for small
        businesses dealing with the complexities of tax compliance. Its strength lies in its ability to automate
        the entire process, from calculation to filing, ensuring accuracy and compliance across various
        jurisdictions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Unlike generic accounting software that often requires manual intervention, TaxJar provides a seamless
        experience by integrating directly with popular e-commerce
        and&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;platforms
        like Shopify, QuickBooks, and Salesforce. This integration capability is crucial for businesses that
        operate across multiple sales channels, as it allows for consistent and accurate tax calculations
        without the need for constant manual adjustments.</p>
      <p className="text-md text-white shadow-text pt-3">
        The
        TaxJar&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;is
        another distinguishing feature. It offers real-time tax rate calculations with sub-25ms response times,
        ensuring that customers receive accurate tax data instantly at checkout. This level of performance is
        particularly important during peak shopping seasons, where delays can lead to lost sales and
        dissatisfied customers. Competitors may offer
        similar&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;functionalities,
        but TaxJar&#39;s reliability and uptime of 99.99% set it apart, providing peace of mind to business
        owners who cannot afford downtime.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the unique aspects of TaxJar is its Economic Nexus Insights dashboard. This tool alerts
        businesses when they are approaching nexus thresholds in new states, a feature that is indispensable for
        companies expanding their market reach. While other platforms may offer nexus tracking, TaxJar&#39;s
        dashboard is specifically designed to provide actionable insights, helping businesses stay ahead of
        compliance requirements without the need for a dedicated tax team.</p>
      <p className="text-md text-white shadow-text pt-3">
        TaxJar also simplifies the filing process with its AutoFile feature, which automatically submits returns
        to state tax authorities. This automation not only saves time but also reduces the risk of errors that
        could lead to costly penalties. For businesses that are managing sales tax in multiple states, this
        feature is a game-changer, eliminating the need for manual filing and ensuring compliance with varying
        state laws.</p>
      <p className="text-md text-white shadow-text pt-3">
        In contrast, some other solutions may require businesses to manually input tax data or use third-party
        services for filing. This can lead to discrepancies and errors, particularly in jurisdictions with
        complex tax codes. TaxJar&#39;s ability to automate this process end-to-end provides a significant
        advantage, allowing business owners to focus on growth rather than compliance.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in Miami-Dade, Broward, and West Palm Beach counties, where staying compliant with
        local tax laws is particularly challenging, TaxJar offers a tailored solution that addresses the unique
        needs of this market. By integrating with existing business systems and providing real-time updates on
        tax regulations, TaxJar ensures that businesses can operate smoothly without the constant worry of
        falling out of compliance.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="taxjar-in-the-landscape-of-tax-compliance-solutions" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                TaxJar in the Landscape of Tax Compliance Solutions
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="taxjar-in-the-landscape-of-tax-compliance-solutions" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                TaxJar in the Landscape of Tax Compliance Solutions
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
