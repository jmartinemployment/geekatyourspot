import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For many small businesses in Miami-Dade, Broward, and West Palm Beach counties, the task of managing
        sales&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>&nbsp;feels like an
        insurmountable hurdle. The ever-shifting landscape of&nbsp;<Link id={`tools-accounting-complex-changing-laws-thetaxvalet-overview-complex-changing-laws${idSuffix}`} href="/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws" className="text-[#C83803] hover:underline">complex and changing laws</Link>&nbsp;makes it difficult for
        business owners to keep up. Imagine a local boutique owner who spends countless hours sifting through
        receipts and spreadsheets, trying to ensure every transaction aligns with the latest state tax
        regulations. This is time that could be better spent on growing the business, yet it is consumed by the
        fear of potential audits and penalties. The constant need to manually track changes and ensure
        compliance across different states creates an administrative quagmire that stifles productivity and
        peace of mind.</p>
      <p className="text-md text-white shadow-text pt-3">
        The reality is stark: software solutions, often touted as a quick fix, fall short of providing the
        comprehensive support needed to navigate these complexities. Many programs lack the capacity to handle
        the nuances of multi-state compliance, leaving gaps that could trigger costly audits. Business owners
        find themselves in a precarious position, lacking the expertise to configure these tools correctly or to
        manage errors that could lead to significant financial liabilities. The burden of compliance becomes a
        full-time job, detracting from strategic initiatives and customer engagement.</p>
      <p className="text-md text-white shadow-text pt-3">
        Enter TaxValet, a service designed to lift this weight from the shoulders of small business owners. By
        offering a hands-off, fully managed approach to sales tax compliance, TaxValet transforms the taxing
        ordeal into a streamlined process. With experts handling everything from nexus analysis to audit
        defense, businesses can redirect their focus to what truly matters: serving their customers and
        expanding their reach. TaxValet&#39;s approach not only ensures compliance with complex and changing
        laws but also provides the peace of mind that comes with knowing every detail is expertly managed.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
