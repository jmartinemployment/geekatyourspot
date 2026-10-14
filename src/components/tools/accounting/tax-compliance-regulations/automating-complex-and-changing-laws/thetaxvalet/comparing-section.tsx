import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When small businesses face the challenge of managing
        sales&nbsp;<GlossaryLink slug="tax-compliance" className="text-[#0B162A] hover:underline">tax
        compliance</GlossaryLink>, they often consider a range of software solutions. Platforms
        like&nbsp;Avalara&nbsp;and&nbsp;<Link id="tools-accounting-complex-changing-laws-thetaxvalet-comparing-taxjar" href="/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxjar" className="text-[#0B162A] hover:underline">TaxJar</Link>&nbsp;offer
        basic automation for filing and calculation, but they leave significant gaps that can lead to compliance
        issues. These tools require manual updates and intervention, putting the onus on business owners to stay
        informed about changing regulations. This DIY approach can be risky and time-consuming, as it demands
        constant vigilance to ensure accuracy.</p>
      <p className="text-md text-white shadow-text pt-3">
        In contrast, TaxValet provides a comprehensive, managed service that goes beyond basic automation. It
        handles everything from nexus analysis to permit registrations, and ongoing monitoring of regulatory
        changes. This proactive approach ensures that businesses remain compliant without the need for constant
        manual adjustments. Unlike other platforms, TaxValet offers a dedicated team that manages the entire
        compliance process, providing peace of mind and freeing up valuable time for business owners.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another critical advantage of TaxValet is its industry-leading audit protection. While competitors like
        Avalara and TaxJar offer limited guarantees, TaxValet covers penalties and interest incurred due to
        errors, ensuring that businesses are not left exposed during audits. This level of protection is crucial
        for businesses operating across multiple states, where tax laws can vary significantly.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses that require seamless integration with their existing systems, TaxValet excels by
        ensuring smooth data flow and connectivity with sales channels. This eliminates the need for manual data
        entry and reduces the risk of errors that can occur with other software solutions. TaxValet&#39;s team
        handles the technical complexities, allowing business owners to focus on growth rather than compliance.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing is another area where TaxValet stands out. With transparent, flat monthly fees starting at $560,
        there are no hidden costs or surprise charges, unlike some competitors that may charge extra for
        additional transactions or features. This predictability in pricing allows businesses to budget
        effectively without worrying about unexpected expenses.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, TaxValet offers a more robust solution for small businesses facing complex and changing tax
        laws. Its comprehensive service, dedicated support, and transparent pricing make it a superior choice
        for those looking to ensure compliance without the hassle of managing it themselves.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="comparing-taxvalet-with-other-solutions" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Comparing TaxValet with Other Solutions
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
              <h2 id="comparing-taxvalet-with-other-solutions" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Comparing TaxValet with Other Solutions
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
