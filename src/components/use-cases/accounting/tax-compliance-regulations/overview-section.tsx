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
                forecasting strategy in place. <GlossaryLink slug="cash-flow-forecasting">Cash flow forecasting</GlossaryLink> is more than just a financial exercise; it&#39;s a critical
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
