import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TaxPayrollNexusSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        <GlossaryLink slug="tax-compliance">Tax compliance</GlossaryLink> is where black box anxiety runs
        highest, because the penalties are real and the rules keep changing. The tools in this group track
        rates and rules for you, file on time, and keep the records an auditor will ask for. Our <Link id={`use-cases-accounting-tax-p-tax${idSuffix}`} href="/use-cases/accounting/tax-compliance-regulations" className="text-[#C83803] hover:underline">Tax
        Compliance &amp; Regulations</Link> guide frames the whole category.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Sales Tax and Changing Laws
      </h3>
      <p className="text-base text-white shadow-text pt-3">
        Florida’s rules change more often than most owners expect. The state’s sales tax on <strong>commercial
        rent</strong> ended on <strong>October 1, 2024</strong>, and county surtax rates change when local
        voters or officials approve or end them. <Link id={`use-cases-accounting-tax-taxcloud-law${idSuffix}`} href="/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxcloud" className="text-[#C83803] hover:underline">TaxCloud</Link>, <Link id={`use-cases-accounting-tax-taxjar-law${idSuffix}`} href="/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxjar" className="text-[#C83803] hover:underline">TaxJar</Link>,
        and <Link id={`use-cases-accounting-tax-quaderno-law${idSuffix}`} href="/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/quaderno" className="text-[#C83803] hover:underline">Quaderno</Link> calculate
        the correct rate for each sale and prepare your returns. <Link id={`use-cases-accounting-tax-zamp-law${idSuffix}`} href="/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/zamp" className="text-[#C83803] hover:underline">Zamp</Link> and <Link id={`use-cases-accounting-tax-taxvalet-law${idSuffix}`} href="/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/thetaxvalet" className="text-[#C83803] hover:underline">TaxValet</Link> take
        a managed approach, where their team handles registrations and filings for you. <strong>Avalara</strong> is
        one of the best known names in the category, and we evaluate it alongside the others when transaction
        volumes call for it. Our <Link id={`use-cases-accounting-tax-p-law${idSuffix}`} href="/use-cases/accounting/tax-compliance-regulations/ai-tax-law" className="text-[#C83803] hover:underline">Intelligent
        Tax Law</Link> guide goes deeper.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Sales Tax Nexus Across State Lines
      </h3>
      <p className="text-base text-white shadow-text pt-3">
        Since the Supreme Court’s <strong>Wayfair</strong> decision in 2018, states can require businesses
        outside their borders to collect sales tax once sales into the state pass a threshold. Many states set
        that threshold at <strong>$100,000</strong> in sales, and some also count the number of transactions.
        Florida applies a $100,000 threshold to sellers based in other states. A Fort Lauderdale distributor
        that ships to Georgia and the Carolinas can cross a threshold without noticing. <Link id={`use-cases-accounting-tax-taxjar-nexus${idSuffix}`} href="/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar" className="text-[#C83803] hover:underline">TaxJar</Link> tracks
        sales by state and warns you as you approach each threshold. <Link id={`use-cases-accounting-tax-taxcloud-nexus${idSuffix}`} href="/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxcloud" className="text-[#C83803] hover:underline">TaxCloud</Link> handles
        registration and filing across states. <Link id={`use-cases-accounting-tax-zamp-nexus${idSuffix}`} href="/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/zamp" className="text-[#C83803] hover:underline">Zamp</Link>, <Link id={`use-cases-accounting-tax-taxvalet-nexus${idSuffix}`} href="/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/thetaxvalet" className="text-[#C83803] hover:underline">TaxValet</Link>,
        and <Link id={`use-cases-accounting-tax-quaderno-nexus${idSuffix}`} href="/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/quaderno" className="text-[#C83803] hover:underline">Quaderno</Link> cover
        the same ground with different mixes of software and expert service. The <Link id={`use-cases-accounting-tax-p-nexus${idSuffix}`} href="/use-cases/accounting/tax-compliance-regulations/ai-multi-state-sales-tax" className="text-[#C83803] hover:underline">Intelligent
        Multi-State Sales Tax</Link> guide walks through every step.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Payroll and Worker Classification
      </h3>
      <p className="text-base text-white shadow-text pt-3">
        Payroll carries two risks at once. Tax deposits can be late or wrong, and workers paid as contractors
        may legally be employees. The IRS judges classification on <strong>behavioral control</strong>, <strong>financial
        control</strong>, and the <strong>relationship</strong> between the parties. Misclassifying a worker
        can mean back payroll taxes, penalties, and unpaid Florida <strong>reemployment tax</strong>.</p>
      <p className="text-base text-white shadow-text pt-3">
        <Link id={`use-cases-accounting-tax-gusto${idSuffix}`} href="/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/gusto" className="text-[#C83803] hover:underline">Gusto</Link> calculates,
        files, and deposits payroll taxes and pays contractors in the same system. <Link id={`use-cases-accounting-tax-rippling${idSuffix}`} href="/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/rippling" className="text-[#C83803] hover:underline">Rippling</Link> connects
        payroll to HR and device management, so a new hire’s classification is set once and carried
        everywhere. <Link id={`use-cases-accounting-tax-adp${idSuffix}`} href="/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/adp" className="text-[#C83803] hover:underline">ADP</Link> offers <strong>RUN
        Powered by ADP</strong>, its payroll platform for small businesses. <Link id={`use-cases-accounting-tax-deel${idSuffix}`} href="/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/deel" className="text-[#C83803] hover:underline">Deel</Link> manages
        contractors and international workers and helps document classification decisions, and <Link id={`use-cases-accounting-tax-justworks${idSuffix}`} href="/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/justworks" className="text-[#C83803] hover:underline">Justworks</Link> acts
        as a professional employer organization that takes on payroll and compliance work. Our <Link id={`use-cases-accounting-tax-p-payroll${idSuffix}`} href="/use-cases/accounting/tax-compliance-regulations/ai-payroll-software" className="text-[#C83803] hover:underline">Intelligent
        Payroll Tax</Link> guide covers the details.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="tax-compliance-payroll-and-nexus-on-rails" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Tax Compliance, Payroll, and Nexus on Rails
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="tax-compliance-payroll-and-nexus-on-rails-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Tax Compliance, Payroll, and Nexus on Rails
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
