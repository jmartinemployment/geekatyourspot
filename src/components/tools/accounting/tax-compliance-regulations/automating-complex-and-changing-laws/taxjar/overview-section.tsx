import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Consider a local boutique owner like Emma, who runs her shop in the heart of Miami-Dade and spends her
        weekends buried in spreadsheets, manually updating tax rates for her online store.
        Each change in the&nbsp;<Link id={`tools-accounting-complex-changing-laws-taxjar-overview-complex-changing-laws${idSuffix}`} href="/use-cases/accounting/tax-compliance-regulations/ai-tax-law" className="text-[#C83803] text-shadow-2xs text-shadow-white hover:underline">complex and changing laws</Link>&nbsp;governing
        local taxes feels like a new hurdle. Her afternoons, instead of being dedicated to customer engagement
        or inventory management, are consumed by the relentless task of ensuring compliance. The risk of a
        miscalculation looms large, with potential fines threatening her already slim profit margins. The
        constant updates to tax codes across different jurisdictions demand her attention, leaving little room
        for business growth.</p>
      <p className="text-base text-white shadow-text pt-3">
        Emma&#39;s struggle isn&#39;t unique. Many small business owners in West Palm Beach, Broward, and
        Miami-Dade counties face the daunting task of keeping up with dynamic tax regulations. The engineering
        complexity required to maintain compliance is a persistent challenge, especially when time and resources
        are limited. These businesses grapple with the fear of overlooking a critical update, which could lead
        to costly penalties. The burden of compliance detracts from their primary focus: running and expanding
        their businesses.</p>
      <p className="text-base text-white shadow-text pt-3">
        However, the advent of AI-driven platforms like TaxJar offers a lifeline. By
        automating&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>, these tools free
        small business owners from the intricate maze of local tax laws. TaxJar continuously monitors and
        applies the latest tax code changes, ensuring accurate sales tax calculations for each transaction. This
        not only reduces the risk of non-compliance but also allows business owners to redirect their efforts
        towards growth and customer satisfaction. With TaxJar, Emma can finally reclaim her weekends, confident
        that her store&#39;s tax obligations are handled with precision.</p>
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
