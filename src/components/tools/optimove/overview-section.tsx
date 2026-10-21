import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function OverviewToolSection() {
  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white text-right text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview</h2>
                </div>
            <div className="col-span-12">
              <p className="text-base text-white shadow-text pt-3">Optimove is a powerful tool designed to enhance automated&nbsp;<Link id="tools-marketing-optimove-overview-automated-ad-spend-optimization" href="/use-cases/marketing/automated-ad-spend-optimization" className="text-[#C83803] hover:underline">ad spend optimization</Link>&nbsp;by leveraging AI-driven insights and&nbsp;<GlossaryLink slug="machine-learning">machine learning</GlossaryLink> algorithms. It is tailored for businesses seeking to maximize their marketing&nbsp;<GlossaryLink slug="kpi">ROI</GlossaryLink> by making&nbsp;<GlossaryLink slug="analytics">data-driven</GlossaryLink> decisions. Optimove helps in dynamically adjusting ad campaigns to ensure that advertising budgets are
                spent efficiently, targeting the right audience at the right time.</p>
              <p className="text-base text-white shadow-text pt-3">In today&#39;s competitive market, businesses often struggle with inefficient ad spend, leading to wasted resources
                and missed opportunities. Optimove addresses these challenges by providing a comprehensive solution that minimizes
                manual intervention and guesswork in ad management. This tool is particularly beneficial for companies in regions
                like Miami-Dade, Broward, and Palm Beach counties, where optimizing marketing budgets is crucial for staying ahead of the
                competition.</p>
              <p className="text-base text-white shadow-text pt-3">Optimove is equipped with advanced features that facilitate seamless integration with existing systems, making the
                transition to automated ad spend optimization smooth and efficient. By using machine learning, Optimove can predict
                customer behavior and personalize marketing efforts, thereby increasing the effectiveness of ad campaigns. This
                results in higher&nbsp;<GlossaryLink slug="conversion-funnel">conversion rates</GlossaryLink>, reduced costs, and ultimately, improved customer satisfaction.</p>
              <p className="text-base text-white shadow-text pt-3">Unlike traditional ad management tools, Optimove continuously learns and adapts to changing market conditions,
                ensuring that businesses can maintain a competitive edge. Its ability to provide actionable insights and automate
                complex data analysis processes sets it apart from other solutions like Google Ads Smart Bidding and&nbsp;<Link id="tools-marketing-optimove-overview-madgicx" href="/tools/marketing/madgicx" className="text-[#C83803] hover:underline">Madgicx</Link>. As a
                result, businesses can focus more on strategic planning and less on the operational intricacies of ad management.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview</h2>
              <p className="text-base text-white shadow-text pt-3">Optimove is a powerful tool designed to enhance automated&nbsp;<Link id="tools-marketing-optimove-overview-automated-ad-spend-optimization-lg" href="/use-cases/marketing/automated-ad-spend-optimization" className="text-[#C83803] hover:underline">ad spend optimization</Link>&nbsp;by leveraging AI-driven insights and&nbsp;<GlossaryLink slug="machine-learning">machine learning</GlossaryLink> algorithms. It is tailored for businesses seeking to maximize their marketing&nbsp;<GlossaryLink slug="kpi">ROI</GlossaryLink> by making&nbsp;<GlossaryLink slug="analytics">data-driven</GlossaryLink> decisions. Optimove helps in dynamically adjusting ad campaigns to ensure that advertising budgets are
                spent efficiently, targeting the right audience at the right time.</p>
              <p className="text-base text-white shadow-text pt-3">In today&#39;s competitive market, businesses often struggle with inefficient ad spend, leading to wasted resources
                and missed opportunities. Optimove addresses these challenges by providing a comprehensive solution that minimizes
                manual intervention and guesswork in ad management. This tool is particularly beneficial for companies in regions
                like Miami-Dade, Broward, and Palm Beach counties, where optimizing marketing budgets is crucial for staying ahead of the
                competition.</p>
              <p className="text-base text-white shadow-text pt-3">Optimove is equipped with advanced features that facilitate seamless integration with existing systems, making the
                transition to automated ad spend optimization smooth and efficient. By using machine learning, Optimove can predict
                customer behavior and personalize marketing efforts, thereby increasing the effectiveness of ad campaigns. This
                results in higher&nbsp;<GlossaryLink slug="conversion-funnel">conversion rates</GlossaryLink>, reduced costs, and ultimately, improved customer satisfaction.</p>
              <p className="text-base text-white shadow-text pt-3">Unlike traditional ad management tools, Optimove continuously learns and adapts to changing market conditions,
                ensuring that businesses can maintain a competitive edge. Its ability to provide actionable insights and automate
                complex data analysis processes sets it apart from other solutions like Google Ads Smart Bidding and&nbsp;<Link id="tools-marketing-optimove-overview-madgicx-lg" href="/tools/marketing/madgicx" className="text-[#C83803] hover:underline">Madgicx</Link>. As a
                result, businesses can focus more on strategic planning and less on the operational intricacies of ad management.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
