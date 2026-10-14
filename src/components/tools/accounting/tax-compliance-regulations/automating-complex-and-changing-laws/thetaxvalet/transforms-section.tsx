import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        TaxValet transforms the overwhelming task of managing sales&nbsp;<GlossaryLink slug="tax-compliance">tax
        compliance</GlossaryLink>&nbsp;into a streamlined process by removing the burden from business
        owners&#39; shoulders. Instead of spending countless hours on tax filing portals, business owners can
        focus on growing their business while TaxValet handles all compliance aspects.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the key benefits of TaxValet is its ability to manage exemption certificates effectively. This
        removes the risk of unexpected back-tax assessments due to invalid certificates. TaxValet’s team ensures
        that all certificates are valid and up-to-date, preventing costly errors that could arise from expired
        or incorrect exemptions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another significant advantage is the proactive audit defense provided by TaxValet. Unlike software that
        leaves businesses exposed during audits, TaxValet offers full representation and covers any penalties
        incurred due to errors. This comprehensive protection allows businesses to operate with peace of mind,
        knowing they are fully covered against audit risks.</p>
      <blockquote cite="https://thetaxvalet.com/" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Eliminate the operational burden and audit risk of US sales tax with a dedicated team of experts that
        takes full ownership of your multi-state compliance.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        TaxValet also excels in managing the complexities of multi-state sales tax compliance. By handling
        everything from nexus analysis to ongoing monitoring of tax regulations, TaxValet ensures businesses
        remain compliant across all jurisdictions. This eliminates the need for business owners to constantly
        update and monitor sales tax settings, freeing up valuable time and resources.</p>
      <p className="text-md text-white shadow-text pt-3">
        With a dedicated team of experts, TaxValet provides personalized support tailored to each business&#39;s
        unique needs. This hands-on approach means that businesses no longer have to worry about the nuances of
        sales tax compliance. Instead, they can rely on TaxValet to manage all aspects of their compliance
        strategy, from filings and payments to audit protection and nexus monitoring.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-taxvalet-simplifies-complex-and-changing-laws" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How TaxValet Simplifies Complex and Changing Laws
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-taxvalet-simplifies-complex-and-changing-laws" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How TaxValet Simplifies Complex and Changing Laws
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
