import Image from "next/image";

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
              <p className="text-md text-white shadow-text pt-3">Tableau AI and Adobe Analytics are powerful tools designed to optimize ad spend through advanced data analysis and
                visualization capabilities. They provide businesses with the insights needed to make informed decisions, reducing
                wasted budget and increasing return on investment (ROI). By integrating artificial intelligence, these platforms
                offer automated solutions that streamline the process of ad management, ensuring that campaigns are both efficient
                and effective.</p>
              <p className="text-md text-white shadow-text pt-3">In the context of automated ad spend optimization, Tableau AI and Adobe Analytics excel by offering real-time data
                processing and predictive analytics. These capabilities allow businesses to adapt quickly to market changes,
                ensuring that ad spend is allocated to the most promising opportunities. This is crucial for businesses in dynamic
                markets, such as those in Palm Beach and Broward counties, where competition is fierce and market conditions can
                shift rapidly.</p>
              <p className="text-md text-white shadow-text pt-3">Tableau AI focuses on transforming raw data into actionable insights through intuitive visualizations. It helps
                marketers understand complex data sets without needing deep technical expertise. Adobe Analytics complements this by
                providing detailed insights into customer behavior and campaign performance. Together, they form a comprehensive
                suite for managing and optimizing ad spend.</p>
              <p className="text-md text-white shadow-text pt-3">For businesses looking to enhance their ad spend strategies, these tools offer a way to reduce manual intervention
                and guesswork. By leveraging machine learning, they enable more precise targeting and bidding strategies, akin to
                tools like Google Ads Smart Bidding, but with a broader scope of data analysis and visualization. This results in
                more efficient campaigns, saving time and resources while boosting sales and customer satisfaction.</p>
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
              <p className="text-md text-white shadow-text pt-3">Tableau AI and Adobe Analytics are powerful tools designed to optimize ad spend through advanced data analysis and
                visualization capabilities. They provide businesses with the insights needed to make informed decisions, reducing
                wasted budget and increasing return on investment (ROI). By integrating artificial intelligence, these platforms
                offer automated solutions that streamline the process of ad management, ensuring that campaigns are both efficient
                and effective.</p>
              <p className="text-md text-white shadow-text pt-3">In the context of automated ad spend optimization, Tableau AI and Adobe Analytics excel by offering real-time data
                processing and predictive analytics. These capabilities allow businesses to adapt quickly to market changes,
                ensuring that ad spend is allocated to the most promising opportunities. This is crucial for businesses in dynamic
                markets, such as those in Palm Beach and Broward counties, where competition is fierce and market conditions can
                shift rapidly.</p>
              <p className="text-md text-white shadow-text pt-3">Tableau AI focuses on transforming raw data into actionable insights through intuitive visualizations. It helps
                marketers understand complex data sets without needing deep technical expertise. Adobe Analytics complements this by
                providing detailed insights into customer behavior and campaign performance. Together, they form a comprehensive
                suite for managing and optimizing ad spend.</p>
              <p className="text-md text-white shadow-text pt-3">For businesses looking to enhance their ad spend strategies, these tools offer a way to reduce manual intervention
                and guesswork. By leveraging machine learning, they enable more precise targeting and bidding strategies, akin to
                tools like Google Ads Smart Bidding, but with a broader scope of data analysis and visualization. This results in
                more efficient campaigns, saving time and resources while boosting sales and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
