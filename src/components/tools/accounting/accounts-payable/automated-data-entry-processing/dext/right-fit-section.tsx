import Link from "next/link";
export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Dext is particularly suited for small to medium-sized businesses that are ready to embrace AI-driven
        automation in their accounting workflows. Its features cater to practices with multiple locations,
        teams, and complex workflow needs. The platform&#39;s ability to automate data extraction and
        processing at scale makes it an ideal choice for businesses looking to reduce manual entry errors and
        improve overall efficiency.</p>
      <p className="text-base text-white shadow-text pt-3">
        However, Dext might not be the best fit for organizations that prefer entirely manual processes or
        those not ready to integrate AI into their operations. Its strengths lie in automation and
        data-driven insights, which require a certain level of openness to technology adoption. For firms
        already struggling with high transaction volumes and the need for faster financial insights, Dext
        provides the tools necessary to alleviate these pressures.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you&#39;re considering implementing Dext, the next step is to evaluate your current workflows and
        identify areas where automation can have the most impact. <strong>Geek @ Your Spot LLC</strong> can
        assist in this transition by configuring Dext to fit seamlessly into your existing systems, ensuring
        that you leverage the platform&#39;s capabilities to their fullest.</p>
      <p className="text-base text-white shadow-text pt-3">
        To explore how Dext can transform your accounting processes,&nbsp;
        <a href="#consultationAppointment2xl" id={`tools-accounting-dext-right-fit-consultation${idSuffix}`} className="text-[#C83803] hover:underline">
          book a consultation
        </a>&nbsp;with Geek @ Your Spot LLC today.</p>
      <p className="text-base text-white shadow-text pt-3">
        The over 99% accuracy figure on this page is examined in our post <Link id={`tools-accounting-accounts-payable-automated-data-entry-processing-dext-xlink-blog${idSuffix}`} href="/blog/accounting/how-ai-transforms-accounts-payable-automated-data-entry-processing" className="text-[#C83803] hover:underline">AI Data Entry for Accounts Payable</Link>, which sets it beside Dext’s own volume claim, 31.4 million receipts and invoices in one month and more than two million administrative hours saved, and places Dext at the capture stage where documents are read and matched to bank transactions. The post is just as direct that OCR does not remove the need for human oversight where rules replace judgment. Our <Link id={`tools-accounting-accounts-payable-automated-data-entry-processing-dext-xlink-pillar${idSuffix}`} href="/use-cases/accounting/accounts-payable/ai-document-processing" className="text-[#C83803] hover:underline">AI Document Processing</Link> guide carries the assessment, scope, tool and team, that decides whether Dext fits a firm of your size.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-dext-the-right-fit-for-your-business">
                Is Dext the Right Fit for Your Business?
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-dext-the-right-fit-for-your-business-lg">
                Is Dext the Right Fit for Your Business?
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
