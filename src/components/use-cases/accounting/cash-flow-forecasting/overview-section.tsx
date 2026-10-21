import Link from "next/link";
import Image from "next/image";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const title = "Automated Accounts Payable";
  const heroSummary = "Revolutionize your financial operations with automated accounts payable solutions that enhance efficiency and accuracy."
  const heroImage = "";


  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center">
              <Image
                width="460"
                height="460"
                src="/images/accounting/use-cases/cash-flow-forecasting/cash-flow-forecasting-overview.avif"
                alt="Introduction to Automated Accounts Payable" />
            </div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-4xl font-black font-[var(--font-sora)] shadow-text">
                Navigating the River of Cash Flow: Forecasting for Financial Success
              </h2>
              <p className="text-md text-white shadow-text">
                Imagine navigating a river without a map or compass, where unexpected twists and turns can lead to treacherous
                waters. This is often how businesses feel when tackling the unpredictable currents of <GlossaryLink slug="cash-flow-forecasting">cash flow</GlossaryLink> without a reliable
                forecasting strategy in place. Cash flow forecasting&nbsp;is more than just a financial exercise; it&#39;s a critical
                navigation tool that guides businesses through the complexities of their financial landscape, ensuring smooth
                sailing towards sustainable growth and stability.
              </p>
              <p className="pt-3 text-md font-normal text-white shadow-text">
                In today&#39;s fast-paced business environment, the ability to accurately predict cash flow is paramount. With the
                integration of advanced AI tools, companies can now harness data-driven insights to refine their forecasting models,
                providing a clearer vision of their financial future. This article delves into the strategies and technological
                advancements that empower businesses to master cash flow forecasting, transforming it from a daunting challenge into
                a strategic advantage.
              </p>
              <p className="pt-3 text-md font-normal text-white shadow-text">For a shorter overview, read <Link id="use-cases-accounting-cash-flow-forecasting-overview-blog" href="/blog/accounting/unlocking-the-secrets-to-effective-cash-flow-forecasting-with-ai" className="text-[#C83803] hover:underline">Cash Flow Forecasting with AI</Link> on our blog.</p>
              <p className="pt-3 text-md font-normal text-white shadow-text">Cash flow forecasting is one of our <Link id="use-cases-accounting-cash-flow-forecasting-overview-accounting-hub" href="/use-cases/accounting" className="text-[#C83803] hover:underline">Accounting &amp; Finance Use Cases</Link>, and its pillars also include <Link id="use-cases-accounting-cash-flow-forecasting-overview-spreadsheet-data" href="/use-cases/accounting/cash-flow-forecasting/ai-spreadsheet-data" className="text-[#C83803] hover:underline">Intelligent Spreadsheet Data</Link> and <Link id="use-cases-accounting-cash-flow-forecasting-overview-resource-planning" href="/use-cases/accounting/cash-flow-forecasting/ai-resource-planning" className="text-[#C83803] hover:underline">Intelligent Resource Planning</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
