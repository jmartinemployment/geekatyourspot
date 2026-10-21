import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        In the ever-evolving landscape of taxation, businesses often find themselves navigating a complex
        labyrinth of regulations and compliance requirements. As governments worldwide continuously update tax
        codes to reflect new economic realities, the challenge of staying compliant becomes increasingly
        daunting. However, like Ariadne’s thread guiding Theseus through the maze,
        automated&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>&nbsp;solutions offer a
        beacon of hope, simplifying the path forward for businesses large and small.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automated tax compliance systems are not just about digitizing paperwork; they are transformative tools
        that integrate seamlessly into existing financial operations. These systems leverage advanced algorithms
        and real-time data analytics to ensure that businesses remain compliant with the latest regulations,
        reducing the risk of costly errors and penalties. By adopting these technologies, organizations can
        focus more on strategic growth and less on the intricacies of tax law, turning a potential quagmire into
        a streamlined, efficient process.</p>
      <p className="text-base text-white shadow-text pt-3">For a shorter overview, read <Link id={`use-cases-accounting-tax-compliance-overview-blog${idSuffix}`} href="/blog/accounting/how-ai-is-revolutionizing-tax-compliance-what-you-need-to-know" className="text-[#C83803] text-shadow-2xs text-shadow-white hover:underline">AI Tax Compliance, What to Know</Link> on our blog.</p>
      <p className="text-base text-white shadow-text pt-3">Tax compliance is one of our <Link id={`use-cases-accounting-tax-compliance-overview-accounting-hub${idSuffix}`} href="/use-cases/accounting" className="text-[#C83803] text-shadow-2xs text-shadow-white hover:underline">Accounting &amp; Finance Use Cases</Link>, and its pillars include <Link id={`use-cases-accounting-tax-compliance-overview-sales-tax-nexus${idSuffix}`} href="/use-cases/accounting/tax-compliance-regulations/ai-multi-state-sales-tax" className="text-[#C83803] text-shadow-2xs text-shadow-white hover:underline">Intelligent Multi-State Sales Tax</Link> and <Link id={`use-cases-accounting-tax-compliance-overview-payroll-tax${idSuffix}`} href="/use-cases/accounting/tax-compliance-regulations/ai-payroll-software" className="text-[#C83803] text-shadow-2xs text-shadow-white hover:underline">Intelligent Payroll Tax</Link>.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="navigating-the-labyrinth-embracing-automated-tax-compliance" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Navigating the Labyrinth: Embracing Automated Tax Compliance
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
              <h2 id="navigating-the-labyrinth-embracing-automated-tax-compliance-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Navigating the Labyrinth: Embracing Automated Tax Compliance
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
