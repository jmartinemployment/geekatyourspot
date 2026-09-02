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
              <p className="text-md text-white shadow-text pt-3">Basis Technologies offers a comprehensive solution for automated <GlossaryLink slug="dynamic-creative-optimization">ad spend optimization</GlossaryLink>, addressing common challenges
                faced by businesses in managing their marketing budgets. This platform is designed to minimize inefficient ad spend
                by utilizing AI-driven strategies, ensuring that every dollar is spent wisely. Businesses in regions like Palm Beach
                and Broward counties, where traditional ad management methods often lead to guesswork and wasted resources, can
                greatly benefit from this tool.</p>
              <p className="text-md text-white shadow-text pt-3">By automating the ad spend process, Basis Technologies eliminates the need for manual adjustments and complex data
                analyses that often lead to inconsistent results. Instead, it leverages <GlossaryLink slug="machine-learning">machine learning</GlossaryLink> algorithms to dynamically
                adjust bids, ensuring that ads reach the right audience at optimal times. This not only maximizes return on
                investment (<GlossaryLink slug="kpi">ROI</GlossaryLink>) but also frees up valuable time for marketing teams to focus on strategic initiatives that drive
                business growth.</p>
              <p className="text-md text-white shadow-text pt-3">The platform integrates seamlessly with other marketing tools, such as Google Ads Smart Bidding, to enhance its
                capabilities in automated decision-making. This integration allows businesses to make <GlossaryLink slug="analytics">data-driven</GlossaryLink> decisions without
                the constant need for manual intervention. Moreover, Basis Technologies is known for its user-friendly interface,
                making it accessible even to those with limited technical expertise.</p>
              <p className="text-md text-white shadow-text pt-3">In a market where precision and efficiency are crucial, Basis Technologies stands out by providing a reliable and
                effective solution for ad spend optimization. It is particularly beneficial for businesses looking to cut down on
                wasted ad spend while focusing on strategies that yield tangible results. By implementing Basis Technologies,
                companies can expect a streamlined approach to managing their advertising budgets, ultimately leading to increased
                sales and lower costs.</p>
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
              <p className="text-md text-white shadow-text pt-3">Basis Technologies offers a comprehensive solution for automated ad spend optimization, addressing common challenges
                faced by businesses in managing their marketing budgets. This platform is designed to minimize inefficient ad spend
                by utilizing AI-driven strategies, ensuring that every dollar is spent wisely. Businesses in regions like Palm Beach
                and Broward counties, where traditional ad management methods often lead to guesswork and wasted resources, can
                greatly benefit from this tool.</p>
              <p className="text-md text-white shadow-text pt-3">By automating the ad spend process, Basis Technologies eliminates the need for manual adjustments and complex data
                analyses that often lead to inconsistent results. Instead, it leverages machine learning algorithms to dynamically
                adjust bids, ensuring that ads reach the right audience at optimal times. This not only maximizes return on
                investment (ROI) but also frees up valuable time for marketing teams to focus on strategic initiatives that drive
                business growth.</p>
              <p className="text-md text-white shadow-text pt-3">The platform integrates seamlessly with other marketing tools, such as Google Ads Smart Bidding, to enhance its
                capabilities in automated decision-making. This integration allows businesses to make data-driven decisions without
                the constant need for manual intervention. Moreover, Basis Technologies is known for its user-friendly interface,
                making it accessible even to those with limited technical expertise.</p>
              <p className="text-md text-white shadow-text pt-3">In a market where precision and efficiency are crucial, Basis Technologies stands out by providing a reliable and
                effective solution for ad spend optimization. It is particularly beneficial for businesses looking to cut down on
                wasted ad spend while focusing on strategies that yield tangible results. By implementing Basis Technologies,
                companies can expect a streamlined approach to managing their advertising budgets, ultimately leading to increased
                sales and lower costs.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
